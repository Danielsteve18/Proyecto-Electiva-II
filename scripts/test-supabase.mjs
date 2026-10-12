// Prueba de conexión a Supabase (issue ELE-7).
//
// Ejecuta:  bun run test:supabase
//
// Bun carga automáticamente `.env.local`. No necesita servidor ni navegador,
// así que no interfiere con el trabajo del resto del equipo.

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function fail(mensaje) {
  console.error(`\n✗ ${mensaje}\n`);
  process.exit(1);
}

if (!url || !anonKey) {
  fail(
    "Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY.\n" +
      "  Copia .env.example a .env.local y rellena tus credenciales.",
  );
}

console.log("Probando conexión a Supabase…");
console.log(`  URL: ${url}\n`);

const supabase = createClient(url, anonKey);

// 1) Consulta pública (no requiere iniciar sesión).
//    Comprueba que el proyecto responde sin depender del esquema de datos.
const { data: sessionData, error: sessionError } =
  await supabase.auth.getSession();
if (sessionError) {
  fail(`auth.getSession() falló: ${sessionError.message}`);
}
console.log(
  `  ✓ auth.getSession() OK (con sesión activa: ${Boolean(sessionData.session)})`,
);

const { data: userData, error: userError } = await supabase.auth.getUser();
if (userError && userError.name !== "AuthSessionMissingError") {
  fail(`auth.getUser() falló: ${userError.message}`);
}
console.log(
  `  ✓ auth.getUser() OK (usuario: ${userData?.user?.email ?? "anónimo"})`,
);

// 2) Prueba CON SESIÓN — se activa en el Sprint 1 (tras ELE-14 / ELE-15),
//    cuando existan el login y la tabla `profiles`.
//
// const { data, error } = await supabase.from("profiles").select("id").limit(1);
// if (error) fail(`Consulta autenticada falló: ${error.message}`);
// console.log(`  ✓ Consulta con sesión OK (${data.length} fila/s)`);

console.log("\n✓ Conexión a Supabase correcta.\n");
