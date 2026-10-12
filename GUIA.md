# Guía práctica para trabajar en el proyecto (paso a paso)

Guía pensada para quien **nunca ha trabajado con un repositorio git ni con un
proyecto Next.js**. Léela completa la primera vez. Cada issue de Linear trae una
sección "Como se hace" que indica los pasos específicos; esta guía es la base
común de todos.

## 0. Que es esto, en una frase

El proyecto es una página web (menú, reservas, contacto) con un panel de admin.
Cada quien trabaja en su **rama** (una copia paralela del código), luego pide que
su trabajo se **mezcle** al resto con un Pull Request (PR).

## 1. Requisitos (una sola vez)

Necesitas un computador con Windows.

1. **Git**: descárgalo de https://git-scm.com/download/win e instálalo con las
   opciones por defecto.
2. **Bun** (maneja las dependencias; es como npm pero más rápido y sin
   vulnerabilidades): abre **PowerShell** y pega:
   ```powershell
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```
   Cierra y reabre PowerShell. Verifica con:
   ```powershell
   bun --version
   ```
   Debe mostrar algo como `1.3.x`.
3. **VS Code** (editor): https://code.visualstudio.com/

## 2. Clonar el repositorio (una sola vez)

En PowerShell, ve a una carpeta donde quieras guardar el proyecto y ejecuta:

```powershell
git clone https://github.com/Danielsteve18/Proyecto-Electiva-II.git
cd Proyecto-Electiva-II
bun install
```

`bun install` descarga las dependencias del proyecto. Hazlo **cada vez** que
empieces a trabajar, o cuando otro compañero agregue dependencias.

Activa los hooks (protegen `main` y `dev` del push directo), una sola vez:

```powershell
pwsh scripts/setup-hooks.ps1
```

(Abre VS Code con `code .` si quieres el editor).

## 3. Antes de cada tarea: actualizar

Siempre trabaja partiendo de la versión más reciente:

```powershell
git switch dev
git pull
bun install
```

## 4. Crear tu rama (por cada issue)

Regla del equipo: **una rama por issue**, con el nombre
`ELE-<número>/<palabra-corta>` (el número de la issue de Linear / la de GitHub).

```powershell
git switch dev          # asegúrate de estar en dev y actualizado
git switch -c ELE-42/menu-listado
```

Ese `ELE-42` es el **número de tu issue**. Ya puedes abrir el proyecto y editar.

## 5. Dónde va cada cosa (mapa rápido)

| Tarea | Carpeta |
| --- | --- |
| Página que se ve en la URL (`/menu`, `/reserva`) | `app/` |
| Botón, input, diálogo (sin lógica) | `components/ui/` |
| Header, footer, navegación | `components/layout/` |
| Bloque grande de una página (hero, listado del menú) | `components/sections/` |
| Formulario (login, reserva, contacto) | `components/forms/` |
| Tablas y pantallas del panel admin | `components/admin/` |
| Helper, cliente de Supabase, constantes | `lib/` |
| Hook reutilizable | `hooks/` |
| Tipos de TypeScript | `types/` |
| Imágenes | `public/images/` |

Detalle completo en `README.md`. Los colores y fuentes **no se escriben duros**;
se usan tokens: `bg-background`, `text-foreground`, `bg-primary`, `text-muted`,
`border-border`, etc. (definidos en `app/globals.css`).

## 6. Ver tu trabajo mientras editas

```powershell
bun run dev
```

Abre el navegador en **http://localhost:3000**. El guardado es automático: al
guardar un archivo, la página se recarga sola. Para detener el servidor: `Ctrl + C`.

## 7. Usar la carpeta de referencia

En la carpeta `referencia/` está el sitio original (HTML/CSS/JS) que debemos
reproducir. Antes de hacer una sección, **mira la página equivalente** ahí:
`index.html`, `menu.html`, `reserva.html`, `contacto.html`, `sobrenosotros.html`,
`login.html`, `register.html`. Los colores y textos están en `referencia/info.md`.
Es material de consulta: **no se copia tal cual ni se edita**.

## 8. Sincronizar y entregar (por cada issue terminada)

1. Mueve las migraciones de SQL a `supabase/` si trabajaste base de datos.
2. Revisa qué cambió:
   ```powershell
   git status
   ```
3. Guarda (haz commit) con un mensaje descriptivo con área:
   ```powershell
   git add -A
   git commit -m "feat(frontend): tarjeta de plato con imagen (ELE-22)"
   ```
   Prefijos: `feat(`…`)` funcionalidad nueva, `fix(`…`)` corrección, `docs: …`
   documentación, `chore: …` mantenimiento. Áreas: `frontend`, `auth`, `menu`,
   `reservas`, `contacto`, `admin`, `infra`, `qa`, `po`, `docs`.
4. Sube tu rama al repositorio en línea:
   ```powershell
   git push -u origin ELE-42/menu-listado
   ```
5. Abre un **Pull Request**: ve a GitHub
   <https://github.com/Danielsteve18/Proyecto-Electiva-II>, toca
   *Compare & pull request*. El **base** debe ser `dev` (¡nunca `main`!) y el
   **compare** tu rama. Pon el título `ELE-42 · título de la issue` y pega los
   criterios de aceptación que completes. Comparte el enlace en el grupo.

**Importante:** nadie hace push directo a `main` ni a `dev`; está bloqueado por
reglas y por un hook local. Si falla con "push declined", es eso: haz PR.

## 9. Errores comunes y solución

| Error / síntoma | Causa | Solución |
| --- | --- | --- |
| `command not found: bun` | Bun no está en el PATH | Reabre PowerShell o reinicia; reinstala con el paso 1 |
| `Could not resolve host: github.com` | Se cayó la red | Reintenta en unos segundos (`git push` otra vez) |
| `Port 3000 is already in use` | Otro `bun run dev` abierto | Cierra el otro; o usa `bun run dev -- --port 3001` |
| Prueba el commit pero el push falla | Rama protegida `main`/`dev` | No se push directo: abre PR |
| Build falla con `Failed to fetch Geist` | Sin red al compilar fuentes | Ya está resuelto: la fuente se carga sola, actualiza con `git pull` |
| No sé qué archivo tocar | — | Mira el punto 5 y la sección "Como se hace" de tu issue |

## 10. Glosario mínimo

- **Repo / repositorio**: dónde vive el código compartido (en GitHub).
- **Clonar**: bajar una copia del repo a tu PC.
- **Rama (branch)**: copia paralela del código para tu tarea.
- **Commit**: "guardar" un conjunto de cambios, con un mensaje.
- **Push**: subir tu rama local a GitHub.
- **Pull request (PR)**: la solicitud para mezclar tu rama con `dev`.
- **Merge**: mezclar; lo hace quien revisa el PR.
- **Dependencias**: librerías externas que el proyecto necesita (`bun install`).
- **Server de desarrollo**: el comando `bun run dev`, que muestra tu app en vivo.