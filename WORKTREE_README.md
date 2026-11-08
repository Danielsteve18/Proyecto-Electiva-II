# Configuración del repositorio local (Worktrees)

Este documento explica cómo está estructurado el repositorio local para permitir el trabajo en múltiples ramas simultáneamente utilizando worktrees.

## Contexto del proyecto: Sabor al Instante vs Remastered

Este proyecto es una **recreación desde cero** del proyecto original "Remastered" con el nuevo nombre "Sabor al Instante". Las principales diferencias y nuevas ideas son:

### Razones de la recreación

1. **Reestructuración de equipo y flujo de trabajo**
   - Nuevo equipo en Linear: **SAB "Sabor al instante"** (team UUID `2237fdf1-46fc-4777-b824-e69156c56891`)
   - Proyecto renombrado de "Remastered" a "Sabor al Instante" en toda la documentación
   - 57 issues creados (SAB-1…SAB-57) en lugar de continuar con el backlog del proyecto anterior
   - Nueva estructura de sprints: S0 (capacitación) + S1…S5 (desarrollo)

2. **Nuevo stack tecnológico (actualizado)**
   - Next.js **16** (en lugar de la versión anterior)
   - React **19** (en lugar de 18)
   - Tailwind CSS **v4** (en lugar de v3)
   - TypeScript **5** (en lugar de 4)
   - bun en lugar de npm (para instalación más rápida)

3. **Enfoque diferente en S1 (Fundaciones)**
   - S1 solo crea **estructura de carpetas y documentación base** (sin código ejecutable)
   - La base ejecutable (dependencias, `package.json`, `tsconfig.json`) se instalará en S2
   - Esto permite que cada integrante trabaje en su rama con la misma base documentada
   - Cada rama tiene su propio directorio de trabajo en `tree/<branch>/`

4. **Convenciones de trabajo renovadas**
   - Ramas: `usuario/sab-N-slug` (en lugar de `usuario/ele-N-slug`)
   - Commits: `tipo(área): mensaje` con nuevas áreas (`infra`, `db`, `backend`, `frontend`, `auth`, `admin`, `qa`, `docs`, `storage`)
   - Hooks de Git versionados en `.githooks/` para bloquear pushes directos a `main` y `dev`
   - `.gitattributes` fuerza `eol=lf` para evitar conflictos entre Windows y Linux

5. **Modelo de datos y diseño**
   - Supabase como base de datos gestionada (PostgreSQL 15, Auth y Storage en un solo servicio)
   - Diseño con Tailwind v4 y tokens CSS exportados de tweakcn (sin Figma)
   - 9 tablas en el modelo de datos con políticas RLS activas
   - 9 labels en Linear para categorizar trabajo por área

### Decisiones clave

- **Sin Figma**: El diseño se trabaja directamente con Tailwind CSS v4 y variables CSS
- **Sin migración del código existente**: Todo el código se escribe desde cero con las nuevas convenciones
- **Worktrees en `tree/<branch>/`**: Cada rama tiene su propio directorio de trabajo en `C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree/`
- **Repositorio bare**: El repositorio central es bare (`tree/.git`) para evitar conflictos de trabajo
- **Sin push inicial**: Todo el trabajo es local; el repositorio de GitHub está vacío hasta que se decida hacer push
- **Sprint S0 como capacitación**: El equipo aprende las herramientas antes de escribir código

### Equipo y roles

| Integrante | Email | Responsabilidades en S1 |
|---|---|---|
| Daniel Steve Montaño Arboleda | hldjhldj4@gmail.com | Liderazgo, estructura de carpetas, documentación, hooks, README |
| Andrés Aguilar | andresdavidaguilarhurtado@gmail.com | Requerimientos funcionales |
| Manuel Vera | manuelveraangulo@gmail.com | Modelo de datos y migraciones |
| Helen | helenfarinarenteria444@gmail.com | Identidad visual y tokens de diseño |
| Jesus Zapata | jesuseduardozapataquintero@gmail.com | Políticas RLS y seguridad |

## Estructura del repositorio

El repositorio principal es un **repositorio bare** ubicado en `C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree\.git`. Esto significa que no hay un directorio de trabajo asociado directamente con este repositorio.

Para trabajar en las ramas, se han creado **worktrees** (directorios de trabajo vinculados a ramas específicas) en la carpeta `C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree/`.

**Ruta raíz del proyecto:** `C:\Users\ad\proyectos\Sabor-al-instante-remasterd`
**Repositorio bare:** `C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree\.git`
**Worktrees:** `C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree/<nombre-rama-sanitizado>/`

## Ramas y worktrees creados

Se han creado las siguientes ramas y sus correspondientes worktrees (todos los commits tienen como autor `Daniel Steve Montaño Arboleda <hldjhldj4@gmail.com>`):

| Rama | Worktree | Hash del Commit | Fecha del Commit | Mensaje del Commit |
|---|---|---|---|---|
| `main` | `tree/main` | `c072970` | 2026-11-04 08:00:00 -0500 | `chore: inicializar repositorio` |
| `hldjhldj4/sab-1-capacitacion-s0` | `tree/hldjhldj4-sab-1-capacitacion-s0` | `56d9fe0` | 2026-10-31 17:00:00 -0500 | `docs(actas): resumen de capacitación y cierre de S0` |
| `hldjhldj4/sab-2-stack-apps-gestion` | `tree/hldjhldj4-sab-2-stack-apps-gestion` | `4d0378e` | 2026-11-04 10:05:00 -0500 | `docs(infra): definir stack y apps de gestión` |
| `hldjhldj4/sab-3-estructura-carpetas` | `tree/hldjhldj4-sab-3-estructura-carpetas` | `f4f5217` | 2026-11-04 09:10:00 -0500 | `chore(infra): crear estructura de carpetas del proyecto` |
| `hldjhldj4/sab-4-ramas-hooks-convenciones` | `tree/hldjhldj4-sab-4-ramas-hooks-convenciones` | `bd4b199` | 2026-11-05 11:00:00 -0500 | `chore(infra): ramas protegidas, hooks y convenciones` |
| `hldjhldj4/sab-5-readme-guia-docs` | `tree/hldjhldj4-sab-5-readme-guia-docs` | `c719089` | 2026-11-05 09:20:00 -0500 | `docs: README, guía de arranque e índice de documentación` |
| `hldjhldj4/sab-6-supabase-proyecto-credenciales` | `tree/hldjhldj4-sab-6-supabase-proyecto-credenciales` | `e8048cc` | 2026-11-07 11:10:00 -0500 | `docs(infra): documentar proyecto Supabase y credenciales` |
| `hldjhldj4/sab-11-verificacion-cierre-s1` | `tree/hldjhldj4-sab-11-verificacion-cierre-s1` | `4ca7e75` | 2026-11-09 16:00:00 -0500 | `docs(actas): verificación y acta de cierre de S1` |


## Configuración de `git-wt` (Worktrunk)

La herramienta `git-wt` está configurada para gestionar automáticamente los worktrees de este proyecto. La configuración global se ha actualizado en `$env:APPDATA\worktrunk\config.toml` para incluir la entrada:

```toml
[projects."github.com/Danielsteve18/Sabor-al-instante-remasterd"]
worktree-path = "{{ repo_path }}/../{{ branch | sanitize }}"
```

Esto permite que `git-wt` cree los directorios de trabajo en la estructura `tree/<nombre-rama-sanitizado>/` dentro de la carpeta raíz del proyecto.

## Remoto de GitHub

El repositorio bare tiene configurado el remoto `origin` apuntando a:

`https://github.com/Danielsteve18/Sabor-al-instante-remasterd.git`

**Importante:** No se ha realizado ningún `push` al repositorio remoto de GitHub. Todo el trabajo existe únicamente de forma local en los worktrees. El proyecto de GitHub se encuentra vacío.

## Cómo trabajar con los worktrees

Para cambiar entre ramas de trabajo, usa `git-wt` desde el directorio `C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree`.

Por ejemplo, para cambiar a la rama `main`:

```powershell
cd C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree
git-wt switch main
```

Esto te moverá al directorio `C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree\main`.

Para ver la lista de worktrees activos:

```powershell
cd C:\Users\ad\proyectos\Sabor-al-instante-remasterd\tree
git-wt list
```
