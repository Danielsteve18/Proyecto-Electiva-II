// Prueba E2E del flujo de autenticación (issue ELE-19).
//
// Ejecuta:  bun run test:auth
// Requiere: `bun run dev` corriendo en http://localhost:3000 y .env.local.
//
// Crea un usuario temporal, recorre registro → confirmación → login → roles →
// logout, comprueba la protección de /admin y lo elimina al final.

import { createClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000';

let fallos = 0;

function ok(mensaje) {
  console.log(`  ✓ ${mensaje}`);
}

function check(condicion, mensaje, detalle) {
  if (condicion) {
    ok(mensaje);
    return true;
  }
  fallos += 1;
  console.error(`  ✗ ${mensaje}${detalle ? ` — ${detalle}` : ''}`);
  return false;
}

function fail(mensaje) {
  console.error(`\n✗ ${mensaje}\n`);
  process.exit(1);
}

if (!url || !anonKey || !serviceKey) {
  fail(
    'Faltan NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY o SUPABASE_SERVICE_ROLE_KEY.\n' +
      '  Revisa .env.local (copia .env.example si hace falta).',
  );
}

const admin = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const email = `qa-auth-${Date.now()}@mailinator.com`;
const credencial = ['Qa', crypto.randomUUID()].join('-');
let userId = null;

function cookiesToHeader(cookies) {
  return cookies.map(({ name, value }) => `${name}=${value}`).join('; ');
}

async function request(path, cookieHeader) {
  const response = await fetch(`${baseUrl}${path}`, {
    redirect: 'manual',
    cache: 'no-store',
    headers: cookieHeader ? { cookie: cookieHeader } : undefined,
  });
  return {
    status: response.status,
    location: response.headers.get('location'),
    body: await response.text(),
  };
}

function esRedireccionALogin(resultado) {
  if (resultado.status !== 307 && resultado.status !== 308) return false;
  try {
    return new URL(resultado.location, baseUrl).pathname === '/login';
  } catch {
    return false;
  }
}

try {
  console.log('Probando flujo de autenticación…');
  console.log(`  URL: ${baseUrl}\n`);

  // 0) El servidor de desarrollo debe estar arriba.
  let portada;
  try {
    portada = await request('/');
  } catch {
    throw new Error(`No responde ${baseUrl}. Arranca "bun run dev" antes de ejecutar la prueba.`);
  }
  check(portada.status === 200, 'el servidor responde en /');
  check((await request('/registro')).status === 200, 'la página /registro responde');

  // 1) Alta del usuario. Por defecto con la Admin API para no gastar correos
  //    (Supabase limita el envío); TEST_AUTH_SIGNUP=1 prueba el registro real.
  const anon = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const probarRegistro = process.env.TEST_AUTH_SIGNUP === '1';

  if (probarRegistro) {
    const { data: alta, error: altaError } = await anon.auth.signUp({
      email,
      password: credencial,
      options: { data: { full_name: 'QA Auth' } },
    });
    userId = alta?.user?.id ?? null;
    check(!altaError, 'registro sin errores', altaError?.message);
    check(Boolean(userId), 'se creó el usuario');
    check(alta?.session === null, 'sin sesión hasta confirmar el correo');
    check((alta?.user?.identities?.length ?? 0) > 0, 'identidad creada');

    // 2) Confirmación (Admin API; el correo real lo cubren ELE-14/15).
    if (userId) {
      const { error: confirmError } = await admin.auth.admin.updateUserById(userId, {
        email_confirm: true,
      });
      check(!confirmError, 'correo confirmado (Admin API)', confirmError?.message);
    }
  } else {
    const { data: alta, error: altaError } = await admin.auth.admin.createUser({
      email,
      password: credencial,
      email_confirm: true,
      user_metadata: { full_name: 'QA Auth' },
    });
    userId = alta?.user?.id ?? null;
    check(!altaError, 'usuario de prueba creado (Admin API)', altaError?.message);
    check(Boolean(userId), 'se creó el usuario');
    console.log('  · registro real omitido (TEST_AUTH_SIGNUP=1 para probarlo; gasta un correo)');
  }
  if (!userId) throw new Error('Sin usuario no se puede continuar.');

  // 3) Login y perfil del cliente.
  const { data: sesion, error: loginError } = await anon.auth.signInWithPassword({
    email,
    password: credencial,
  });
  check(!loginError, 'login de cliente', loginError?.message);
  check(Boolean(sesion?.session), 'sesión creada');

  const { data: perfil, error: perfilError } = await anon
    .from('profiles')
    .select('id, full_name, role')
    .eq('id', userId)
    .single();
  check(!perfilError, 'lectura de profiles (RLS del propio usuario)', perfilError?.message);
  check(perfil?.role === 'cliente', 'rol inicial "cliente"');
  check(perfil?.full_name === 'QA Auth', 'full_name guardado en el alta');

  // 4) Cookies de sesión para pedir rutas al servidor de Next.
  let cookies = [];
  const ssr = createServerClient(url, anonKey, {
    cookies: {
      getAll: () => cookies,
      setAll: (lista) => {
        cookies = lista;
      },
    },
  });
  const { error: ssrLoginError } = await ssr.auth.signInWithPassword({ email, password: credencial });
  check(!ssrLoginError, 'login vía @supabase/ssr', ssrLoginError?.message);
  const clienteCookie = cookiesToHeader(cookies);

  // 5) Protección de rutas: anónimo y cliente.
  check(esRedireccionALogin(await request('/mis-reservas')), 'anónimo: /mis-reservas → /login');
  check(esRedireccionALogin(await request('/admin')), 'anónimo: /admin → /login');
  const clienteAdmin = await request('/admin', clienteCookie);
  check(clienteAdmin.status === 404, 'cliente: /admin → 404', `status ${clienteAdmin.status}`);
  check(
    (await request('/mis-reservas', clienteCookie)).status === 200,
    'cliente: /mis-reservas → 200',
  );

  // 6) Promoción a admin (service role) y acceso al panel.
  const { error: promoError } = await admin
    .from('profiles')
    .update({ role: 'admin' })
    .eq('id', userId);
  check(!promoError, 'promoción a admin (service role)', promoError?.message);

  const { data: perfilAdmin } = await anon
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();
  check(perfilAdmin?.role === 'admin', 'el usuario ve su nuevo rol "admin"');

  const adminAdmin = await request('/admin', clienteCookie);
  check(adminAdmin.status === 200, 'admin: /admin → 200', `status ${adminAdmin.status}`);
  check(adminAdmin.body.includes('Panel de administración'), 'admin: el panel se renderiza');

  // 7) Logout.
  const { error: logoutError } = await ssr.auth.signOut();
  check(!logoutError, 'logout sin errores', logoutError?.message);
  const { data: trasLogout } = await ssr.auth.getSession();
  check(trasLogout.session === null, 'sin sesión tras el logout');
  check(
    esRedireccionALogin(await request('/mis-reservas', cookiesToHeader(cookies))),
    'tras logout: /mis-reservas → /login',
  );
} catch (error) {
  fallos += 1;
  console.error(`\n✗ ${error instanceof Error ? error.message : String(error)}\n`);
} finally {
  if (userId) {
    const { error: deleteError } = await admin.auth.admin.deleteUser(userId);
    if (deleteError) {
      fallos += 1;
      console.error(`  ✗ no se pudo borrar el usuario temporal — ${deleteError.message}`);
    } else {
      const { data: restos } = await admin
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .maybeSingle();
      check(!restos, 'usuario temporal eliminado (perfil en cascada)');
    }
  }

  if (fallos === 0) {
    console.log('\n✓ Flujo de autenticación correcto.\n');
  } else {
    console.error(`\n✗ ${fallos} comprobación(es) fallida(s).\n`);
    process.exitCode = 1;
  }
}
