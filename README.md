# Proyecto Electiva II — Sabor al Instante

Sitio y panel administrativo del restaurante **Sabor al Instante**.
Aplicación full-stack construida con **Next.js (App Router) + TypeScript + Tailwind CSS v4**,
componentes base con **[Base UI](https://base-ui.com)** y datos/auth/storage con **Supabase**.

## ¿Por qué este proyecto?

**Sabor al Instante** es un restaurante que necesita una presencia digital que acompañe
su operación diaria. Hasta hoy no contaba con una solución que funcionara de verdad:

- Los clientes no podían consultar el menú ni las ofertas desde el celular.
- No existía una forma ordenada de reservar mesa: todo se gestionaba por fuera, con
  pérdida de solicitudes y sin control de cupo.
- Los mensajes de contacto se perdían: no llegaban a nadie.

Este proyecto construye la solución digital completa del restaurante:

- **Sitio web** con el menú siempre actualizado, ofertas diarias, historia y blog.
- **Reservas en línea** simples y con confirmación inmediata para el cliente.
- **Canal de contacto** que sí llega al equipo.
- **Panel de administración** para gestionar menú, reservas, ofertas y contenido sin
  depender de programadores.
- **Cuentas de cliente** para ver y manejar sus propias reservas.

Con esto el restaurante pasa a operar su presencia online de punta a punta: del menú
a la reserva, con todo administrable desde un solo lugar.

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
git switch -c hldjhldj4/ele-42-menu-listado   # nombre sugerido por Linear
# ... cambios ...
git push -u origin hldjhldj4/ele-42-menu-listado
# abrir Pull Request hacia dev
```

Convención de nombres de rama: el nombre que sugiere Linear,
`<usuario>/ele-N-<slug>` (p. ej. `hldjhldj4/ele-42-menu-listado`). Commits en estilo Conventional
Commits **con scope de área**: `feat(frontend): …`, `fix(auth): …`, `docs: …`,
`chore: …`. Áreas: `frontend`, `auth`, `menu`, `reservas`, `contacto`, `admin`,
`infra`, `qa`, `po`, `docs`.

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

## Requisitos funcionales

Derivados del backlog del proyecto (épicas E1–E6). E0 es infraestructura y E7 es QA/entrega,
no son funciones para el usuario final.

### Autenticación y roles

- **RF-01** · Registro de clientes con correo y contraseña, con confirmación de cuenta.
- **RF-02** · Inicio y cierre de sesión con sesión persistente.
- **RF-03** · Dos roles: `cliente` y `admin`. Las rutas privadas se protegen según sesión y rol.

### Menú y catálogo

- **RF-04** · Página de menú con categorías (Aperitivos, Platos Principales,
  Acompañamientos, Postres); cada plato muestra nombre, descripción, precio e imagen.
- **RF-05** · Filtro por categoría y búsqueda por nombre, sin recargar la página.
- **RF-06** · Ofertas diarias con precio especial, visibles en el home y en el menú (badge).
- **RF-07** · Home con: presentación, sobre nosotros, categorías, ofertas del día,
  ingredientes, testimonios, blog y llamado a reservar.

### Reservas

- **RF-08** · Formulario de reserva: fecha, hora y número de personas (mismas opciones del
  negocio: 1, 2, 5, 10, 15, 20).
- **RF-09** · Reglas aplicadas: sin fechas pasadas, domingos cerrados, solo dentro del
  horario del día y con cupo limitado por fecha y hora.
- **RF-10** · Se puede reservar como invitado o con cuenta; con cuenta, la reserva queda
  vinculada al usuario.
- **RF-11** · Cada cliente puede ver y cancelar sus reservas pendientes.

### Contacto

- **RF-12** · Formulario de contacto (nombre, correo, mensaje) que entrega el mensaje al
  equipo; solo el administrador los lee.

### Contenido

- **RF-13** · Página "Sobre nosotros" con la historia y propuesta del restaurante.
- **RF-14** · Blog con listado y detalle público de artículos.
- **RF-15** · Testimonios de clientes en el home (solo los aprobados).

### Panel de administración (solo rol admin)

- **RF-16** · Gestión de reservas: ver por fecha, confirmar y cancelar.
- **RF-17** · Gestión del catálogo: crear, editar y desactivar categorías y platos, con
  subida de imágenes. Los cambios se reflejan de inmediato en el sitio público.
- **RF-18** · Bandeja de mensajes de contacto, con opción de marcar como atendidos.
- **RF-19** · Gestión de testimonios y del blog.
- **RF-20** · Gestión de usuarios: cambiar roles cliente↔admin con confirmación.
- **RF-21** · Dashboard con métricas del día (reservas de hoy, pendientes, mensajes sin
  atender, platos no disponibles).

