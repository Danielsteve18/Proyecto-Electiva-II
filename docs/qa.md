# QA — Checklist de smoke test para integración

Verificación mínima que se corre **después de cada integración** (cada PR
mezclado en `dev`). Tarda unos 5 minutos y sirve para detectar lo básico:
que el proyecto compila, arranca, las rutas responden y Supabase responde
con lectura pública. Es la base del QA del semestre (issue ELE-13).

## Acuerdo de uso (regla del equipo)

- Quien **abre un PR** ejecuta el checklist de este archivo antes de pedir
  revisión y marca las casillas en la plantilla del PR (GitHub ofrece la
  plantilla automáticamente).
- Quien **revisa/mergea el PR** verifica las casillas antes de aprobar.
- Si algo del checklist **falla**, el PR no se mezcla: se arregla en la misma
  rama y se vuelve a correr.
- Tras cada merge a `dev`, quien mergeó vuelve a correr el checklist una vez
  sobre `dev` para confirmar que la integración no rompió nada.

## El checklist

Ejecuta los pasos **en orden** desde la raíz del proyecto, con una terminal
abierta en PowerShell.

### 1. Build (compilación)

```powershell
bun install
bun run build
```

- [ ] `bun install` termina sin errores.
- [ ] `bun run build` compila completo y termina sin errores (no debe quedar
      ningún `Failed to compile` o `Error` en rojo al final).

### 2. Arranque (el servidor levanta)

```powershell
bun run dev
```

- [ ] El servidor arranca sin errores en la terminal (aparece algo como
      `Ready in ...`).
- [ ] Abriendo **http://localhost:3000** en el navegador se ve la página
      (no una pantalla de error de Next.js).
- [ ] La terminal no muestra errores rojos después de cargar la página.
      Para detener el servidor: `Ctrl + C`.

### 3. Rutas base (todas responden)

En la carpeta `app/`, **cada subcarpeta con un `page.tsx` es una URL**.
Mira qué carpetas existen:

```powershell
Get-ChildItem app -Recurse -Filter page.tsx | Select-Object FullName
```

Hoy solo existe `/`; conforme avance el proyecto habrá más (por ejemplo
`app/menu/page.tsx` es la URL `http://localhost:3000/menu`).

- [ ] Cada ruta que exista en `app/` abre en el navegador con el servidor
      corriendo (respuesta 200; ninguna muestra `404` ni `500`).

### 4. Datos / lectura pública (Supabase)

Necesitas `.env.local` configurado (copia `.env.example` y pide las
credenciales del proyecto al equipo).

```powershell
bun run test:supabase
```

- [ ] El script termina con la palomita en `auth.getSession()` y no reporta
      errores de conexión (verifica que la URL y la llave pública son
      correctas y que el proyecto de Supabase responde).

### 5. Recomendado: lint (código limpio)

```powershell
bun run lint
```

- [ ] `bun run lint` termina sin errores.

## Plantilla de resultado (cópiala en tu PR)

```markdown
## Smoke test (docs/qa.md)
- [ ] `bun install` + `bun run build` sin errores
- [ ] `bun run dev` arranca y http://localhost:3000 carga sin errores
- [ ] Rutas de `app/` responden (sin 404 ni 500)
- [ ] `bun run test:supabase` OK (lectura pública)
```

(La plantilla de GitHub ya trae estas casillas; basta con marcarlas.)

## Qué NO cubre este smoke test

- Login, registro y panel de admin (se prueban desde el Sprint 1, cuando
  existan esas pantallas).
- Rendimiento, distintos navegadores ni móvil.
- Reglas RLS a fondo (solo se comprueba lectura pública con la llave anon).
