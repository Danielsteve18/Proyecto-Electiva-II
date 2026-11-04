---
title: "Backlog del proyecto"
subtitle: "Sabor al Instante"
author: "Equipo Sabor al Instante"
date: "7 de noviembre de 2026"
lang: es
---

# 1. Información del proyecto

| Campo | Valor |
|---|---|
| Proyecto | Sabor al Instante |
| Equipo en Linear | SAB — Sabor al instante |
| Repositorio | https://github.com/Danielsteve18/Sabor-al-instante-remasterd |
| Metodología | Scrum, sprints semanales |
| Periodo | 10 de octubre – 9 de diciembre de 2026 |
| Total de sprints | 6 (S0 a S5) |
| Total de issues | 57 |
| Fecha de corte | 9 de noviembre de 2026 |

**Descripción.** Reconstrucción del proyecto Sabor al Instante: sitio público y panel de administración para un restaurante, construido con Next.js, React, TypeScript, Tailwind CSS v4 y Supabase. El backlog se organiza en seis sprints: uno de capacitación, uno de fundaciones y cuatro de desarrollo incremental.

# 2. Equipo y responsabilidades

| Integrante | Rol principal | Áreas del backlog |
|---|---|---|
| Daniel Steve Montaño Arboleda | Líder técnico | Infraestructura, documentación, QA |
| Manuel Vera Angulo | Base de datos y backend | Base de datos, backend, documentación |
| Jesus Eduardo Zapata Quintero | Backend y seguridad | Autenticación, base de datos, RLS |
| Helen Farina Renteria | Frontend y diseño | Frontend, panel de administración |
| Andrés David Aguilar Hurtado | Análisis y frontend | Requerimientos, frontend, QA |

# 3. Calendario de sprints

| Sprint | Inicio | Fin | Duración | Objetivo | Issues |
|---|---|---|---|---|---|
| S0 | 10 oct 2026 | 31 oct 2026 | 3 semanas | Capacitación del equipo en stack, Git, Supabase, diseño y Scrum | 1 |
| S1 | 4 nov 2026 | 11 nov 2026 | 1 semana | Fundaciones: estructura, documentación, base de datos y diseño | 10 |
| S2 | 12 nov 2026 | 18 nov 2026 | 1 semana | Autenticación, catálogo y datos iniciales | 13 |
| S3 | 19 nov 2026 | 25 nov 2026 | 1 semana | Reservas, home, almacenamiento y despliegue | 12 |
| S4 | 26 nov 2026 | 2 dic 2026 | 1 semana | Contenido público y panel de administración | 15 |
| S5 | 3 dic 2026 | 9 dic 2026 | 1 semana | Cierre, auditorías y sustentación | 6 |

# 4. Resumen del backlog

| Sprint | Done | Todo | Backlog | Total |
|---|---|---|---|---|
| S0 | 1 | 0 | 0 | 1 |
| S1 | 9 | 1 | 0 | 10 |
| S2 | 0 | 0 | 13 | 13 |
| S3 | 0 | 0 | 12 | 12 |
| S4 | 0 | 0 | 15 | 15 |
| S5 | 0 | 0 | 6 | 6 |
| **Total** | **10** | **1** | **46** | **57** |

# 5. Backlog por sprint

## Sprint S0 — Capacitación (10 al 31 de octubre)

**Objetivo:** que el equipo conozca las herramientas y el flujo de trabajo antes de escribir código.

| ID | Issue | Responsable | Fechas | Estimación | Labels | Estado | Vence |
|---|---|---|---|---|---|---|---|
| SAB-1 | Capacitación S0: stack, Git, Supabase, diseño y Scrum | Daniel | 10–31 oct | 20 h | docs | Done | 31 oct 2026 |

## Sprint S1 — Fundaciones (4 al 11 de noviembre)

**Objetivo:** dejar la estructura del repositorio, la documentación base, el esquema de base de datos con RLS y la identidad visual.

| ID | Issue | Responsable | Fechas | Estimación | Labels | Estado | Vence |
|---|---|---|---|---|---|---|---|
| SAB-2 | Decisión de stack y apps de gestión | Daniel | 4 nov | 3 h | infra | Done | 11 nov 2026 |
| SAB-3 | Estructura de carpetas del proyecto | Daniel | 4 nov | 4 h | infra | Done | 11 nov 2026 |
| SAB-4 | Ramas protegidas, hooks y convenciones | Daniel | 5 nov | 2 h | infra | Done | 11 nov 2026 |
| SAB-5 | README, guía de arranque e índice de docs | Daniel | 5–6 nov | 3 h | docs | Done | 11 nov 2026 |
| SAB-6 | Proyecto Supabase y credenciales documentadas | Daniel | 5 nov | 3 h | infra, db | Done | 11 nov 2026 |
| SAB-7 | Requerimientos funcionales v1.0 | Aguilar | 4–7 nov | 8 h | docs | Done | 11 nov 2026 |
| SAB-8 | Migración inicial del esquema (9 tablas) | Vera | 5–6 nov | 8 h | db | Done | 11 nov 2026 |
| SAB-9 | Políticas RLS y funciones de rol | Zapata | 6–7 nov | 6 h | db | Done | 11 nov 2026 |
| SAB-10 | Identidad visual y tokens de diseño | Helen | 6–7 nov | 6 h | frontend | Done | 11 nov 2026 |
| SAB-11 | Verificación S1 y acta de cierre | Daniel | 9–11 nov | 3 h | qa, docs | Todo | 11 nov 2026 |

## Sprint S2 — Autenticación y catálogo (12 al 18 de noviembre)

**Objetivo:** registro, login y sesión; consultas públicas del catálogo; primeras pantallas del menú.

| ID | Issue | Responsable | Fechas | Estimación | Labels | Estado | Vence |
|---|---|---|---|---|---|---|---|
| SAB-12 | Seed de categorías y platos | Zapata | 12–13 nov | 3 h | db | Backlog | 18 nov 2026 |
| SAB-13 | Checklist de smoke test para integración | Daniel | 12 nov | 2 h | qa | Backlog | 18 nov 2026 |
| SAB-14 | Registro de usuario cliente | Zapata | 12–13 nov | 6 h | auth | Backlog | 18 nov 2026 |
| SAB-15 | Login y cierre de sesión | Zapata | 13–14 nov | 5 h | auth | Backlog | 18 nov 2026 |
| SAB-16 | Sesión en Server Components y rutas protegidas | Zapata | 14–15 nov | 6 h | auth | Backlog | 18 nov 2026 |
| SAB-17 | Asignación de rol admin y helper de permisos | Vera | 13–14 nov | 4 h | backend | Backlog | 18 nov 2026 |
| SAB-18 | Páginas de login y registro | Helen | 14–16 nov | 6 h | frontend | Backlog | 18 nov 2026 |
| SAB-19 | Pruebas de flujo auth | Daniel | 17 nov | 3 h | qa | Backlog | 18 nov 2026 |
| SAB-20 | Consultas públicas de categorías y platos | Vera | 15–16 nov | 4 h | backend | Backlog | 18 nov 2026 |
| SAB-21 | Página de menú con categorías | Helen | 16–18 nov | 6 h | frontend | Backlog | 18 nov 2026 |
| SAB-22 | Tarjeta de plato | Aguilar | 16–18 nov | 4 h | frontend | Backlog | 18 nov 2026 |
| SAB-23 | Seguimiento semanal con plantilla | Vera | 18 nov | 2 h | docs | Backlog | 18 nov 2026 |
| SAB-24 | Integración y verificación semanal post-merge | Daniel | 18 nov | 2 h | qa | Backlog | 18 nov 2026 |

## Sprint S3 — Reservas, home y despliegue (19 al 25 de noviembre)

**Objetivo:** flujo completo de reservas, secciones principales de la home, almacenamiento de imágenes y primer despliegue.

| ID | Issue | Responsable | Fechas | Estimación | Labels | Estado | Vence |
|---|---|---|---|---|---|---|---|
| SAB-25 | Filtros por categoría y búsqueda | Aguilar | 19–20 nov | 5 h | frontend | Backlog | 25 nov 2026 |
| SAB-26 | Secciones de home (categorías, ofertas, ingredientes) | Helen | 19–21 nov | 6 h | frontend | Backlog | 25 nov 2026 |
| SAB-27 | Bucket de imágenes y subida desde admin | Zapata | 20–21 nov | 5 h | storage | Backlog | 25 nov 2026 |
| SAB-28 | Seed de ofertas diarias | Zapata | 19 nov | 3 h | db | Backlog | 25 nov 2026 |
| SAB-29 | Pruebas de menú y búsqueda | Daniel | 24 nov | 3 h | qa | Backlog | 25 nov 2026 |
| SAB-30 | Constraints y cupo de reservas | Vera | 20–21 nov | 4 h | db | Backlog | 25 nov 2026 |
| SAB-31 | Validaciones de reserva | Vera | 21–22 nov | 4 h | backend | Backlog | 25 nov 2026 |
| SAB-32 | Crear reserva (autenticada o invitado) | Zapata | 22–23 nov | 6 h | backend | Backlog | 25 nov 2026 |
| SAB-33 | Listar mis reservas y cancelar | Zapata | 23–24 nov | 5 h | backend | Backlog | 25 nov 2026 |
| SAB-34 | Formulario de reserva reutilizable | Helen | 22–24 nov | 6 h | frontend | Backlog | 25 nov 2026 |
| SAB-35 | Pruebas del flujo de reserva completo | Daniel | 25 nov | 4 h | qa | Backlog | 25 nov 2026 |
| SAB-36 | Deploy a Vercel y conexión con Supabase | Daniel | 24–25 nov | 4 h | infra | Backlog | 25 nov 2026 |

## Sprint S4 — Contenido y administración (26 de noviembre al 2 de diciembre)

**Objetivo:** páginas de contenido, blog, testimoniales y operación del restaurante desde el panel de administración.

| ID | Issue | Responsable | Fechas | Estimación | Labels | Estado | Vence |
|---|---|---|---|---|---|---|---|
| SAB-37 | Guardar mensaje de contacto | Zapata | 26–27 nov | 4 h | backend | Backlog | 2 dic 2026 |
| SAB-38 | Página de contacto con validaciones | Aguilar | 26–28 nov | 5 h | frontend | Backlog | 2 dic 2026 |
| SAB-39 | Listar y marcar mensajes como atendidos | Zapata | 27–28 nov | 4 h | backend | Backlog | 2 dic 2026 |
| SAB-40 | Home completa (testimonios, blog, CTA reserva) | Helen | 26–28 nov | 7 h | frontend | Backlog | 2 dic 2026 |
| SAB-41 | Página sobre nosotros | Aguilar | 28–29 nov | 4 h | frontend | Backlog | 2 dic 2026 |
| SAB-42 | Gestión de testimoniales | Vera | 27–28 nov | 4 h | backend | Backlog | 2 dic 2026 |
| SAB-43 | Gestión de ofertas diarias dinámicas | Zapata | 28–29 nov | 5 h | backend | Backlog | 2 dic 2026 |
| SAB-44 | Blog posts (CRUD y listado público) | Zapata | 29–30 nov | 7 h | backend | Backlog | 2 dic 2026 |
| SAB-45 | Verificación de contenido end-to-end | Daniel | 1 dic | 4 h | qa | Backlog | 2 dic 2026 |
| SAB-46 | Layout admin y guard por rol | Helen | 29–30 nov | 6 h | admin | Backlog | 2 dic 2026 |
| SAB-47 | CRUD de categorías | Vera | 30 nov–1 dic | 5 h | admin | Backlog | 2 dic 2026 |
| SAB-48 | CRUD de platos | Zapata | 30 nov–1 dic | 6 h | admin | Backlog | 2 dic 2026 |
| SAB-49 | Gestionar reservas (ver, confirmar, cancelar) | Vera | 1–2 dic | 5 h | admin | Backlog | 2 dic 2026 |
| SAB-50 | Gestionar mensajes de contacto | Aguilar | 1–2 dic | 4 h | admin | Backlog | 2 dic 2026 |
| SAB-51 | Cálculo de costos de desarrollo | Vera | 2 dic | 3 h | docs | Backlog | 2 dic 2026 |

## Sprint S5 — Cierre y sustentación (3 al 9 de diciembre)

**Objetivo:** auditorías finales, pulido visual, documentación de sustentación y cierre del proyecto.

| ID | Issue | Responsable | Fechas | Estimación | Labels | Estado | Vence |
|---|---|---|---|---|---|---|---|
| SAB-52 | Gestionar usuarios y roles | Vera | 3–4 dic | 5 h | admin | Backlog | 9 dic 2026 |
| SAB-53 | Dashboard con métricas básicas | Aguilar | 3–5 dic | 6 h | admin | Backlog | 9 dic 2026 |
| SAB-54 | Pulido visual final, estados y microinteracciones | Helen | 5–7 dic | 7 h | frontend | Backlog | 9 dic 2026 |
| SAB-55 | Auditoría de RLS y rendimiento de consultas | Zapata | 4–5 dic | 5 h | backend | Backlog | 9 dic 2026 |
| SAB-56 | Auditoría responsive y accesibilidad | Aguilar | 5–7 dic | 5 h | qa | Backlog | 9 dic 2026 |
| SAB-57 | Guías de sustentación y presentación | Daniel | 6–8 dic | 4 h | docs | Backlog | 9 dic 2026 |

# 6. Carga por integrante

| Integrante | Issues | Horas estimadas |
|---|---|---|
| Daniel | 15 | 41 h |
| Manuel Vera | 11 | 51 h |
| Jesus Zapata | 15 | 66 h |
| Helen | 8 | 48 h |
| Andrés Aguilar | 8 | 38 h |
| **Total** | **57** | **244 h** |

# 7. Labels y convenciones

**Labels de área (9):** infra, db, backend, frontend, auth, admin, qa, docs, storage.

No se utilizan los labels por defecto del equipo (Task, Documentation, Feature, Bug, Improvement).

**Convención de ramas:** `usuario/sab-N-slug`, por ejemplo `manuelveraangulo/sab-8-migracion-inicial-esquema`.

**Convención de commits:** `tipo(área): mensaje`, por ejemplo `feat(db): migración inicial del esquema`.

**Definition of Done:** criterios de aceptación cumplidos, evidencia en la ruta indicada, revisión de un compañero y merge a la rama `dev`.

# 8. Estado y seguimiento

Al 9 de noviembre de 2026:

- S0 cerrado con su acta de capacitación.
- S1 con 9 de 10 issues en Done; el acta de cierre (SAB-11) queda para el 11 de noviembre.
- S2 a S5 en estado Backlog, con fechas y responsables asignados.
- Las 57 issues tienen criterios de aceptación, evidencia esperada y pasos de ejecución.

# 9. Control de versiones del documento

| Versión | Fecha | Cambio | Autor |
|---|---|---|---|
| 1.0 | 7 nov 2026 | Creación del backlog completo en Linear y este documento | Daniel |
