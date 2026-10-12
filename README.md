# Proyecto Electiva II — Sabor al Instante

Sitio y panel administrativo del restaurante **Sabor al Instante**.
Aplicación full-stack construida con **Next.js (App Router) + TypeScript + Tailwind CSS v4**,
componentes base con **[Base UI](https://base-ui.com)** y datos/auth/storage con **Supabase**.

## Requisitos

- [Bun](https://bun.sh) `>= 1.3` (gestor de paquetes del proyecto). **No usar `npm`.**
- Git.

## Puesta en marcha

```bash
bun install      # instala dependencias
bun run dev      # servidor de desarrollo en http://localhost:3000
```

Otros scripts:

```bash
bun run build    # build de producción
bun run start    # sirve el build
bun run lint     # lint (ESLint)
```

> **Hooks de git (una sola vez por clon):** ejecuta `pwsh scripts/setup-hooks.ps1`
> (o `sh scripts/setup-hooks.sh`). Activa `.githooks/`, que impide el push directo
> a `main` y `dev`.

## Estructura del proyecto

```
app/                    Rutas y layout (App Router)
  layout.tsx            Layout raíz (fuentes, <body>)
  page.tsx              Página de inicio
  globals.css           TEMA (tokens tweakcn/shadcn) + Tailwind
components/             Todos los componentes React
  ui/                   Primitivas sin estilo: wrappers de Base UI (+ cn())
  layout/               Estructura de página: header, footer, nav, contenedores
  sections/             Secciones de página: hero, menú, reservas, contacto...
  forms/                Formularios: login, registro, reserva, contacto
  admin/                Componentes del panel de administración
lib/                    Utilidades y clientes (utils.ts con cn(), supabase/, constantes)
hooks/                  Hooks de React reutilizables (useAlgo.ts)
types/                  Tipos de TypeScript (database.ts de Supabase, modelos)
public/                 Archivos estáticos servidos tal cual
  images/               Imágenes del sitio
supabase/               Migraciones SQL y seed (se crea al configurar Supabase)
scripts/                setup-hooks.ps1 / setup-hooks.sh
```

Alias de importación: `@/` apunta a la raíz (`@/components/ui/button`, `@/lib/utils`).

## ¿Dónde va cada cosa?

| Tarea | Carpeta |
| --- | --- |
| Botón, input, dialog, tabla... (sin lógica de negocio) | `components/ui/` |
| Header, footer, menú de navegación | `components/layout/` |
| Bloque grande de una página (hero, listado del menú) | `components/sections/` |
| Formulario (login, reserva, contacto) | `components/forms/` |
| Pantallas/tablas del panel admin | `components/admin/` |
| Helper, cliente de Supabase, constantes | `lib/` |
| Hook reutilizable | `hooks/` |
| Tipo/interface | `types/` |
| Imágenes | `public/images/` |

## Componentes y estilo

- **Base UI** aporta las primitivas *sin estilos* (accesibilidad + comportamiento).
  Se envuelven en `components/ui/` con clases de Tailwind. Estilos por **variantes**,
  no por CSS suelto.
- El **tema** vive en `app/globals.css` como variables de color.
  Para cambiarlo: exporta un tema en <https://tweakcn.com/editor/theme> y reemplaza
  **solo** los bloques `:root` y `.dark` de ese archivo. No hay que tocar el resto de
  la app.
- Para clases condicionales usa el helper `cn()` de `lib/utils.ts` (cuando se agregue).

## Flujo de ramas

- `dev` — rama de integración: aquí llega el trabajo de todos.
- `main` — rama estable (lo que se despliega).

**No se hace push directo a `main` ni a `dev`** (lo bloquean el hook local y las reglas
de GitHub). Para trabajar:

```bash
git switch dev
git switch -c feat/nombre-corto     # rama de la issue
# ... cambios ...
git push -u origin feat/nombre-corto
# abrir Pull Request hacia dev
```

Convención de nombres de rama: `feat/…`, `fix/…`, `chore/…`. Commits en estilo
Conventional Commits (`feat: …`, `fix: …`, `chore: …`).

## Variables de entorno

La conexión a Supabase se configura en un archivo `.env.local` (no se versiona).
Parte de la plantilla `.env.example` y rellena tus credenciales:

```bash
# Crea una copia de .env.example con el nombre .env.local
```

| Variable | Ámbito | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Público | URL del proyecto (`https://<ref>.supabase.co`). |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Público | Llave pública (anon o `sb_publishable_…`). Respeta RLS. |
| `SUPABASE_SERVICE_ROLE_KEY` | **Solo servidor** | Llave secreta (service role o `sb_secret_…`). **Salta RLS**: nunca la expongas al cliente. |

Los clientes se crean en `lib/supabase/`:

- `client.ts` → navegador (Client Components).
- `server.ts` → servidor (Server Components, Server Actions, Route Handlers).
- `admin.ts` → servidor, con la llave secreta (solo `server-only`).

Comprueba la conexión en local (no necesita servidor web):

```bash
bun run test:supabase
```
