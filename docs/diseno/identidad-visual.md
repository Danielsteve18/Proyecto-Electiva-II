# Identidad visual — Sabor al Instante

Guía de estilo para el frontend. Alimenta **ELE-11** (tokens y layout base) y las
páginas siguientes. Elaborada por **A. Aguilar** (TheGuitret) y alineada al repositorio.

Fuente de verdad: `referencia/info.md` (rama `referencia`). Los valores de marca de
abajo son los **declarados** allí — no estimaciones — y son los mismos que implementa
`app/globals.css` en ELE-11.

## 1. Objetivo

Fijar una guía visual coherente para el sitio: experiencia gastronómica elegante,
fondos oscuros, fotografía de platos y acentos oliva. La meta es traducir esa dirección
en tokens reutilizables, ya aplicados en el layout base.

## 2. Dirección visual

| Característica | Decisión |
| --- | --- |
| Personalidad | Gastronómica, cálida, elegante y contemporánea. |
| Composición | Hero amplio con fotografía de fondo, overlay oscuro y texto alineado a la izquierda. |
| Contraste | Texto claro sobre fondos oscuros para garantizar legibilidad sobre fotografía. |
| Acentos | Oliva (`--color-primary`) para acciones principales y detalles de marca. |
| Fotografía | Platos y espacios del restaurante, con recortes circulares decorativos. |
| Navegación | Barra superior horizontal con enlaces y acción de reserva (ver `components/layout/Header.tsx`). |

## 3. Paleta de colores

Tokens **exactos de `info.md`**, ya presentes en `app/globals.css`:

| Token | HEX | Uso |
| --- | --- | --- |
| `--color-primary` | `#a6a182` | Oliva: botones de reserva, acentos y estados activos. |
| `--color-secondary` | `#1f2120` | Carbón: fondos oscuros, navegación y secciones oscuras. |
| `--text-color` | `#aeb0b4` | Gris: textos secundarios y elementos de apoyo. |
| `--color-light` | `#fff` | Texto principal e iconos sobre fondos oscuros. |
| `--color-divider` | `#ffffff1a` | Divisores y bordes sutiles sobre fondo oscuro. |
| `--dark-color-divider` | `#0e110d` | Divisor/realce oscuro (p. ej. fondo del footer). |

Además, el proyecto usa el sistema de tema **tweakcn/shadcn** (`--background`,
`--primary`, `--accent`, `--ring`… en `app/globals.css`). Los tokens de marca de arriba
conviven con él: son la capa de identidad del sitio.

## 4. Tipografía

Familia declarada en `info.md`: **Hanken Grotesk** (`--default-font: "Hanken Grotesk", serif`),
cargada por `@import` en `app/globals.css`. Escala propuesta:

| Token | Tamaño | Peso | Interlineado | Uso |
| --- | --- | --- | --- | --- |
| `--font-size-xs` | 12 px | 400 | 16 px | Etiquetas auxiliares. |
| `--font-size-sm` | 14 px | 400–500 | 20 px | Navegación y textos secundarios. |
| `--font-size-base` | 16 px | 400 | 24 px | Párrafos. |
| `--font-size-lg` | 18 px | 500 | 28 px | Textos introductorios. |
| `--font-size-xl` | 24 px | 600 | 32 px | Títulos de sección. |
| `--font-size-2xl` | 32 px | 700 | 36–40 px | Títulos principales. |
| `--font-size-hero` | 48–56 px | 700 | 1.0–1.1 | Título protagonista en escritorio. |

## 5. Espaciado y layout

Escala sobre múltiplos de 4/8 px:

| Token | Valor | Uso |
| --- | --- | --- |
| `--spacing-1` | 4 px | Separaciones mínimas. |
| `--spacing-2` | 8 px | Icono junto a texto. |
| `--spacing-3` | 12 px | Separación compacta. |
| `--spacing-4` | 16 px | Padding interno de controles. |
| `--spacing-6` | 24 px | Separación entre grupos. |
| `--spacing-8` | 32 px | Separación entre bloques. |
| `--spacing-12` | 48 px | Separación de secciones. |
| `--spacing-16` | 64 px | Márgenes amplios en escritorio. |

Breakpoints de referencia (`info.md`): `576 / 768 / 992 / 1200`. En el código se usan
variantes responsivas equivalentes.

Hero: navegación arriba; texto a la izquierda; fotografía a la derecha o de fondo; CTA de
reserva visible. En móvil, apilar y evitar que la imagen tape texto o botones.

## 6. Bordes redondeados

| Token | Valor | Uso |
| --- | --- | --- |
| `--radius-sm` | 4 px | Etiquetas y elementos pequeños. |
| `--radius-md` | 8 px | Campos y controles. |
| `--radius-lg` | 12 px | Tarjetas y paneles. |
| `--radius-xl` | 16 px | Contenedores destacados. |
| `--radius-pill` | 9999 px | Botón de reserva tipo píldora. |
| `--radius-circle` | 50 % | Imágenes circulares decorativas. |

## 7. Sombras y capas

| Token | Valor CSS | Uso |
| --- | --- | --- |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,.18)` | Controles sobre fondo oscuro. |
| `--shadow-md` | `0 4px 14px rgba(0,0,0,.25)` | Tarjetas o elementos flotantes. |
| `--shadow-lg` | `0 8px 28px rgba(0,0,0,.32)` | Elementos superpuestos. |
| `--overlay-hero` | `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.22))` | Capa sobre la foto del hero para sostener el contraste. |

Prioridad: la capa oscura sobre la imagen del hero; no sombrear todos los elementos.

## 8. Componentes y reglas

| Componente | Reglas |
| --- | --- |
| Barra de navegación | Fondo oscuro/translúcido; marca a la izquierda; enlaces en fila; acción destacada a la derecha. |
| Botón principal | Fondo oliva, texto claro, forma píldora, estados hover/focus visibles. |
| Título hero | Hanken Grotesk, peso alto, mayúsculas, interlineado compacto. |
| Texto descriptivo | Gris claro (`--text-color`), ~16 px, ancho limitado. |
| Fotografía principal | Alta calidad, recorte adaptable y overlay oscuro donde haya texto. |
| Imágenes circulares | Borde claro y recorte circular; con moderación. |
| Enlaces de navegación | Texto claro, tamaño compacto, hover perceptible. |
| Formularios | Fondos/bordes coherentes con la paleta oscura; estados de error/foco diferenciados. |

## 9. Recomendaciones para ELE-11 y siguientes

- **No duplicar tokens**: los de marca ya viven en `app/globals.css`; reutilizarlos
  (`var(--color-primary)`, `--text-color`, …), no redeclararlos.
- Definir colores, tipografía, espaciado, radios y sombras como variables reutilizables.
- Estilos compartidos para navegación, botones, formularios y tarjetas.
- Hero adaptable con overlay oscuro y texto legible sobre la foto.
- Definir estados hover, focus, active y disabled en controles interactivos.
- Verificar contraste/accesibilidad, sobre todo con texto sobre imágenes.
- Probar en escritorio, tablet y móvil.

## 10. Referencia visual

**Figura 1. Captura del sitio de referencia (Sabor al Instante).**

Observaciones: usar como guía la composición general, la jerarquía del título, el uso de
fotografía gastronómica y la ubicación de la llamada a la acción.

![Captura del sitio de referencia](imagenes/referencia-1.png)
