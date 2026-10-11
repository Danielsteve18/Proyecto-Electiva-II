# Carpeta de referencia

Snapshot del proyecto **Formulacion** (sitio estático de "Sabor al Instante").

- Origen: https://github.com/Helen-Renteria/Formulacion (rama `main`)
- Capturado: 2026-10-10
- Propósito: **material de estudio** para reconstruir el sitio como app web (Next.js + Supabase). No se compila ni se despliega tal cual.

## Qué se excluyó de la copia original

- `.git` (historia del repo de origen; aquí no aplica)
- `images/home2.zip` (6.6 MB, no se usa en el sitio)

## Páginas del sitio original

| Archivo | Función |
|---|---|
| `index.html` | Home: hero, about, categorías, ofertas, menú, ingredientes, testimonios, blog, reserva |
| `menu.html` | Menú |
| `reserva.html` | Formulario de reserva |
| `contacto.html` | Contacto |
| `sobrenosotros.html` | Sobre nosotros |
| `login.html` / `register.html` | Autenticación (solo formulario, sin backend) |
| `lista.html`, `lista2.html`, `lista3.html`, `algo.html` | Borradores/iteraciones antiguas, **NO se portan** |

## Lógica a replicar (hoy vive en `localStorage`)

- `js/reservas.js` → reservas: valida fecha pasada, domingos cerrado, cupo de 2 por fecha+hora, guarda `reservas`.
- `js/lista.js` → horarios dinámicos por día (L-V 10:00-21:00, V/S 9:00-22:00).
- `js/contacto.js` → mensajes de contacto en `mensajesContacto` (localStorage).
- `info.md` → tokens de diseño (paleta, fuente Hanken Grotesk, iconos) y contenido del menú (4 categorías, ~24 platos con precios).