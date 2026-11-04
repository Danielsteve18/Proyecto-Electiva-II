# Auditoría de cumplimiento del SBOK — Proyecto-Electiva-II (Sabor al Instante)

| Campo | Valor |
|---|---|
| Fecha de corte | 2026-10-26 |
| Norma de referencia | SCRUMstudy SBOK Guide, 5.ª edición en español (capítulos 2–12) |
| Proyecto | MVP Sabor al Instante — Linear `P-ELE-1`, equipo `ELE` |
| Repositorio | `Danielsteve18/Proyecto-Electiva-II` |
| Alcance | 7 principios, 4 roles, 19 procesos, 4 áreas transversales y artefactos |
| Resultado global | **20.5 / 34 = 60.3%** — cumplimiento parcial (ámbar) |

> Este informe mide **evidencia verificable**, no esfuerzo ni intención. Un veredicto “No cumple” significa que no se encontró evidencia auditable al 26-oct-2026, no que el equipo no haya trabajado en ello.

---

## 1. Resumen ejecutivo

El proyecto tiene una **base de planificación sólida**: visión, alcance, roles, épicas, backlog priorizado, criterios de aceptación, definición de terminado y un primer incremento liberado en producción. El Sprint 0 cerró 9 de 9 issues (con dos días de desfase) y la aplicación responde HTTP 200 en Vercel.

El problema está en la **ejecución y el control**: no hay Daily, Sprint Review, Retrospectiva ni retrospectiva de liberación; no hay CI ni pruebas automatizadas; 13 de 20 PRs fueron abiertos por el SM y los 20 se gestionaron con **0 revisiones formales**; y el Sprint 1 tiene **0 de 9 issues en Done** a cinco días de su cierre. El 60.3% es el techo de lo que hoy es auditable, no un aprobado.

### 1.1 Semáforo por bloque

| Bloque | Puntaje | % | Semáforo |
|---|---:|---:|---|
| Principios de Scrum | 4.0 / 7 | 57.1% | Ámbar |
| Roles | 3.5 / 4 | 87.5% | Verde |
| Procesos de Inicio | 5.5 / 6 | 91.7% | Verde |
| Procesos de Planificación | 3.5 / 6 | 58.3% | Ámbar |
| Procesos de Implementación | 1.5 / 3 | 50.0% | Ámbar |
| Procesos de Revisión y Retrospectiva | 0.0 / 2 | 0.0% | Rojo |
| Procesos de Liberación | 0.5 / 2 | 25.0% | Rojo |
| Áreas transversales | 2.0 / 4 | 50.0% | Ámbar |
| **Global** | **20.5 / 34** | **60.3%** | **Ámbar** |

### 1.2 Cinco datos que explican el resultado

1. **Sprint 0: 9/9 Done (100%)**, cerrado el 19-oct (target 17-oct). Sprint 1: **0/9 Done (0%)**, con 3 en revisión, 2 en progreso y 4 en Todo; vence el 31-oct.
2. **20 PRs:** 16 mergeados, 1 abierto, 3 cerrados sin merge; 13 abiertos por el SM y 7 por devs. **0 revisiones formales** en los 20.
3. **0 workflows de CI** y **0 archivos de prueba** (`*.test`, `*.spec`). Los scripts disponibles son `dev`, `build`, `start`, `lint` y `test:supabase`.
4. **0 actas** de Daily, Sprint Review o Retrospectiva. Existe plantilla de seguimiento semanal, pero no se encontraron instancias diligenciadas.
5. **Producción viva:** deploy `f7f79ff` del 19-oct, HTTP 200 verificado el 26-oct.

### 1.3 Recomendación principal

No hace falta reescribir el proyecto. Hay que **cerrar cinco brechas P0 esta semana** (Sprint 1) y **siete P1 en el Sprint 2**. La prioridad no es documentar más, sino **ejecutar y registrar** las ceremonias y controles que ya están definidos en el alcance y en el estándar de issues.

---

## 2. Método, escala y limitaciones

### 2.1 Escala de veredictos

| Veredicto | Valor | Criterio |
|---|---:|---|
| Cumple | 1.0 | Existe evidencia verificable, consistente y disponible para el auditor. |
| Parcial | 0.5 | Existe el artefacto o la práctica, pero está incompleto, es inconsistente o no cubre a todo el equipo. |
| No cumple | 0.0 | No se encontró evidencia auditable. |
| N/A | Excluido | No aplica al contexto del proyecto. |

Fórmula: `(Cumple×1 + Parcial×0.5 + No×0) / (total − N/A)`.

### 2.2 Qué se auditó

- **SBOK:** 7 principios (cap. 2), 3 roles + stakeholders (cap. 3), 19 procesos de los capítulos 8–12, y las áreas transversales de justificación del negocio, calidad, cambios y riesgos.
- **Linear:** 53 issues del proyecto `P-ELE-1`, milestones S0–S4 y Transversal, estados, labels, estimaciones y documentos de proceso.
- **GitHub:** 20 PRs, rulesets de `main` y `dev`, 17 ramas remotas, 48 commits, releases/tags y workflows.
- **Repositorio:** `README.md`, `GUIA.md`, `docs/qa.md`, `docs/diseno/identidad-visual.md`, `package.json`, migraciones y plantilla de PR.
- **Producción:** deployment de Vercel y respuesta HTTP.

### 2.3 Fuera de alcance (N/A)

- **Capítulos 13–14 del SBOK** (Scrum para proyectos grandes y para portafolios): el proyecto tiene un solo equipo y un solo producto. No se incluyen en el denominador.
- **Certificación oficial:** este informe es un diagnóstico interno, no una auditoría acreditada por SCRUMstudy.

### 2.4 Limitaciones

- La evidencia se limita a lo visible en Linear, GitHub, Vercel y el repositorio al 26-oct-2026. No se accedió a chats, grabaciones ni actas privadas; si existen, el veredicto podría subir.
- Linear no usa *cycles*: los sprints se infieren de los labels `S0–S4` y de los milestones. Esto ya es una brecha de configuración, no solo de evidencia.
- No se ejecutó la aplicación en local ni se revisó línea por línea todo el código; se verificaron estructura, PRs, documentación, scripts y el deploy.
- La puntuación es diagnóstica y comparable entre bloques, no un porcentaje oficial de cumplimiento del SBOK.

---

## 3. Matriz de procesos del SBOK (19 procesos)

| # | Proceso | Evidencia verificada | Veredicto | Brecha / observación |
|---|---|---|---|---|
| 8.1 | Crear visión | `README.md:7-27` (problema, propuesta, objetivos); documento Linear “Alcance — MVP a 9 semanas” | Cumple | La visión está descrita, pero sin métricas de éxito cuantificables ni statement de una página. |
| 8.2 | Identificar al Scrum Master y a los stakeholders | Documento “Equipo — Roles y reparto” (Daniel como SM/QA); contexto del restaurante en README; issues asignadas | Parcial | No hay registro de stakeholders (poder/interés), plan de comunicación ni canal formal de feedback. |
| 8.3 | Formar el equipo Scrum | Documento “Equipo” (5 personas, áreas, matriz de módulos); issues con `assignee` | Cumple | Verificar que los 5 estén efectivamente en el workspace de Linear; la autoría de commits se concentra en el SM. |
| 8.4 | Desarrollar épicas | Documento “Backlog — Épicas e issues” (E0–E7); cabeceras de issues con “Épica” | Cumple | Las épicas no están modeladas como entidad en Linear (solo texto); no hay seguimiento por épica. |
| 8.5 | Crear el backlog priorizado del producto | 53 issues `ELE`, prioridad, labels `S0–S4`, milestones; documento Backlog con `B-001..B-050` | Cumple | 50/53 sin campo `Estimate`; colisión de referencias `B-049/B-050/B-051` (ver Anexo B). |
| 8.6 | Planificar el release | Documento “Alcance” (S0–S4 con fechas y alcance); milestone S0 al 100%; release S0 en producción | Cumple | Sin checklist de release, tag ni release notes; solo se liberó S0. |
| 9.1 | Crear historias de usuario | Issues con contexto y criterios verificables (p. ej. ELE-14, ELE-21); documento “Estándar de issues” | Parcial | Muchas son tareas técnicas, no historias “Como / Quiero / Para”; el valor de usuario no siempre es explícito. |
| 9.2 | Estimar historias de usuario | Horas en el texto (ELE-14 ≈6 h, ELE-21 ≈10 h); solo 3/53 con `Estimate=5` | Parcial | Sin estimación relativa ni velocidad; el campo `Estimate` está vacío en 50/53. |
| 9.3 | Comprometer historias de usuario | Milestone S1 con 9 issues; labels `S1` | Parcial | No se encontró sprint goal documentado, capacidad comprometida ni acta de compromiso; S1 está 0/9 a cinco días del cierre. |
| 9.4 | Identificar tareas | Sección “Cómo se hace (paso a paso)” en las issues; `GUIA.md` | Cumple | — |
| 9.5 | Estimar tareas | Estimación por issue, no por tarea | Parcial | Sin desglose ni estimación de tareas; impide detectar desvíos temprano. |
| 9.6 | Crear el sprint backlog | Milestone + labels + issues del sprint | Parcial | No hay artefacto de sprint backlog (goal, items, owners, horas) ni snapshot al inicio. |
| 10.1 | Crear entregables | 9 Done, 16 PRs mergeados, migraciones, UI, S0 en producción HTTP 200 | Cumple | Sin pruebas automatizadas; el DoD se verifica manualmente. |
| 10.2 | Realizar el Daily Standup | No hay *cycles* ni documentos/issues de Daily | No cumple | No se realiza Daily ni se registran impedimentos. |
| 10.3 | Refinar el backlog priorizado | Issues detalladas; ELE-106–108 añadidas después del backlog inicial | Parcial | Sin cadencia de refinamiento ni actualización sistemática de criterios; referencias `B` inconsistentes. |
| 11.1 | Demostrar y validar el sprint | Solo QA interno (`docs/qa.md`) y PRs | No cumple | Sin Sprint Review, demo, feedback de stakeholders ni acta. |
| 11.2 | Retrospectiva del sprint | No hay documentos | No cumple | Sin retrospectiva ni acciones de mejora trazadas. |
| 12.1 | Enviar entregables | PR #71 a `main`; Vercel Production `f7f79ff`; HTTP 200 (26-oct) | Parcial | Solo S0; sin tag, release notes, checklist de release ni plan de rollback. |
| 12.2 | Retrospectiva de la liberación | No hay documentos | No cumple | No realizada. |

**Subtotal procesos: 11.0 / 19 = 57.9%.**

---

## 4. Principios de Scrum (7)

| Principio | Evidencia | Veredicto | Brecha / observación |
|---|---|---|---|
| Control empírico del proceso | Linear y GitHub para transparencia; QA para inspección; plan de S1 para adaptación | Parcial | Sin Review/Retro ni métricas; la adaptación no se documenta. |
| Autoorganización | Roles definidos y regla “todos programan”; issues asignadas | Parcial | El SM asigna tareas y define criterios; no hay selección *pull* ni decisiones del equipo registradas. |
| Colaboración | Documentos compartidos, flujo de PR, plantilla semanal | Parcial | 0 reviews en 20 PRs; 13/20 abiertos por el SM; comentarios casi solo del bot de Vercel; trabajo por silos front/back. |
| Priorización basada en valor | Prioridad, milestones, alcance *stretch*, ELE-48 de costos | Parcial | Sin ROI/valor cuantificado; el cálculo de costos (ELE-48, S3) está en Backlog; 50/53 sin `Estimate`. |
| *Time-boxing* | Sprints de dos semanas con fechas S0–S4 | Parcial | Los timeboxes de Daily, Review y Retro no se ejecutan; no hay sprint goal. |
| Desarrollo iterativo | Cinco sprints, merges incrementales, incremento S0 | Cumple | — |
| Inspección y adaptación | Smoke test, QA de S0, PRs | Parcial | Sin Review/Retro; acciones correctivas no trazadas. |

**Subtotal principios: 4.0 / 7 = 57.1%.**

---

## 5. Roles (3 + stakeholders)

| Rol | Evidencia | Veredicto | Brecha / observación |
|---|---|---|---|
| Product Owner | Víctor; decide orden y alcance; issues priorizadas y con valor | Cumple | El PO también es desarrollador backend: carga dual y riesgo de cuello de botella. |
| Scrum Master | Daniel; facilita, asigna, integra y mergea | Cumple | Concentra 34/48 commits, abrió 13/20 PRs y mergeó los 16 integrados; no hay actas de facilitación. |
| Desarrolladores | 4 devs (2 front, 2 back); matriz de módulos; “cada quien prueba lo suyo” | Cumple | Andrés/Aguilar no aparece como autor en el `git shortlog` de los commits integrados; abrió el PR #69 (cerrado). Además, ELE-106 se integró desde una rama de Daniel, no de su asignado. |
| Stakeholders | Contexto del restaurante; contraparte académica (profesor) | Parcial | Sin registro, plan de comunicación ni feedback formal. |

**Subtotal roles: 3.5 / 4 = 87.5%.**

> Los roles están bien definidos en el papel. La brecha no es de definición sino de **operación**: el SM absorbe ejecución y QA, la autoría de PRs está concentrada en él (13/20) y la revisión entre pares no ocurre (0 reviews).

---

## 6. Artefactos (no puntuados para evitar doble conteo)

| Artefacto | ¿Existe? | Evidencia | Comentario |
|---|---|---|---|
| Visión | Sí | `README.md`, doc “Alcance” | Sin métricas de éxito. |
| Épicas | Sí | Backlog E0–E7 | Solo como texto, no como entidad. |
| Historias de usuario | Parcial | 53 issues | Muchas son tareas técnicas. |
| Backlog priorizado | Sí | Linear `P-ELE-1` | 50/53 sin `Estimate`. |
| Sprint backlog | Parcial | Milestone S1 | Sin goal documentado ni snapshot. |
| Definición de listo (DoR) | No | — | No se encontró. |
| Definición de terminado (DoD) | Sí | Doc “Alcance”, 5 criterios globales | No se verifica issue por issue. |
| Criterios de aceptación | Sí | Issues | Sin marcar en ELE-6, ELE-11 y ELE-13; ELE-106 con viñetas sin estado. |
| Registro de impedimentos | No | — | No existe. |
| Registro de riesgos | Parcial | Doc “Alcance” | Lista de 4 riesgos, sin registro formal. |
| Velocidad / burndown | No | — | Sin histórico. |
| Release notes / tags | No | GitHub | Sin releases ni tags. |
| Actas de Review / Retro | No | — | No existen. |

---

## 7. Áreas transversales

| Área | Evidencia | Veredicto | Brecha / observación |
|---|---|---|---|
| Justificación del negocio | `README.md` (por qué), doc “Alcance” (objetivo), ELE-48 (costos) | Parcial | Sin costo/beneficio ni ROI; el cálculo de costos está en el backlog, no ejecutado. |
| Calidad | DoD, criterios de aceptación, smoke test, QA de S0 | Parcial | Sin DoR, CI ni tests; evidencia de RLS pendiente en el doc de calidad de S0. |
| Gestión de cambios | Alcance dentro/fuera, priorización del PO, issues nuevas | Parcial | Sin solicitud de cambio, análisis de impacto, aprobación ni registro. |
| Gestión de riesgos | 4 riesgos con mitigaciones en “Alcance” | Parcial | Sin probabilidad, impacto, owner, fecha de revisión ni seguimiento. |

**Subtotal transversales: 2.0 / 4 = 50.0%.**

---

## 8. Métricas del proyecto al corte

| Métrica | Valor | Fuente |
|---|---|---|
| Issues en el proyecto | 53 | Linear `P-ELE-1` |
| Done | 9 (17.0%) | Linear |
| In Review | 3 | Linear |
| In Progress | 2 | Linear |
| Todo | 4 | Linear |
| Backlog | 35 | Linear |
| Sprint 0 | 9/9 Done (100%) | Milestone S0 |
| Sprint 1 | 0/9 Done; 3 In Review, 2 In Progress, 4 Todo; vence 31-oct | Milestone S1 |
| Issues con `Estimate` | 3/53 (5.7%) | Linear |
| PRs | 20: 16 merged, 1 open, 3 closed sin merge | GitHub |
| Revisiones formales | 0/20 | GitHub GraphQL |
| Workflows de CI | 0 | `.github/` |
| Archivos de prueba | 0 | Repositorio |
| Deploy de producción | `f7f79ff`, 19-oct, HTTP 200 | Vercel |
| Ramas remotas | 17 | GitHub |
| Commits (todas las refs) | 48: Daniel 34, Víctor (Manuel Vera) 9, Jesús 4, Helen 1 | `git shortlog` |
| Documentos de proceso | 10 en Linear + 4 en el repo | Linear / GitHub |

> Nota: Linear reporta 13.89% de progreso para el milestone S1; el conteo de issues en Done es 0/9. Este informe usa conteo de issues, no la métrica interna de Linear (que puede ponderar por estimación o estado).

### 8.1 Lectura de los números

- **S0 fue un incremento real:** 9 issues cerradas, PRs mergeados y deploy en producción. Se cerró con dos días de desfase (target 17-oct; ELE-11 y ELE-106 cerradas el 19-oct), lo que ya anticipa la debilidad de *time-boxing*.
- **S1 está en riesgo alto:** con cinco días restantes, no hay ningún issue en Done. Los tres “In Review” son la ruta más corta para cerrar; los cuatro “Todo” deberían re-priorizarse o moverse a S2.
- **La calidad es manual:** `docs/qa.md:96-101` reconoce que el smoke test no cubre login/registro/admin, rendimiento, navegadores/móvil ni RLS a fondo. Sin CI, cada merge depende de revisión humana, y esa revisión no está ocurriendo.
- **La trazabilidad de autoría es débil:** 34 de 48 commits son del SM; abrió 13/20 PRs y mergeó los 16 integrados. No es un problema de mérito; es un riesgo de *bus factor* y de que el tablero no refleje quién hizo qué.
- **La liberación es un evento, no un proceso:** hay deploy, pero no hay tag, notas, checklist ni rollback. Eso explica el 0.5/2 en el bloque de Liberación.

---

## 9. Brechas priorizadas

### 9.1 P0 — cerrar en el tramo final del Sprint 1 (26–31 oct)

| # | Brecha | Por qué es P0 | Evidencia |
|---|---|---|---|
| P0-1 | Sprint 1 en riesgo: 0/9 Done a cinco días | Compromete el milestone y arrastra S2 | Milestone S1; issues ELE-14, ELE-15, ELE-17, ELE-20, ELE-21 |
| P0-2 | Sin Sprint Review ni Retrospectiva | El ciclo empírico no se cierra; no hay feedback ni mejora | No había actas. Desde 2026-10-26 existen agenda/plantilla en `docs/reviews/S1.md` y `docs/retro/S1.md`; el cierre requiere la reunión real |
| P0-3 | PRs sin revisión formal | El ruleset exige PR, pero con 0 aprobaciones; los 16 PRs integrados fueron mergeados por el SM | Rulesets `protege-main` y `protege-dev`; 0 reviews en 20 PRs; 16/16 mergeados por Daniel |
| P0-4 | Criterios sin evidencia de cierre en issues Done | El Done no es auditable a nivel de issue | ELE-6, ELE-7, ELE-9, ELE-11, ELE-12 y ELE-13 tenían `- [ ]`; ELE-106 usaba viñetas sin estado; ELE-8 y ELE-10 estaban completos |
| P0-5 | Sin Daily ni registro de impedimentos | No hay inspección diaria ni escalamiento temprano | No había registros. Desde 2026-10-26 existe la plantilla `docs/daily/S1.md`; el cierre requiere llenarla con las reuniones reales |

### 9.2 P1 — cerrar en el Sprint 2 (31 oct–14 nov)

| # | Brecha | Por qué es P1 | Evidencia |
|---|---|---|---|
| P1-1 | Sin Definición de Listo (DoR) | Entran issues sin estimación ni dependencias resueltas | No se encontró DoR |
| P1-2 | Sin estimación consistente ni velocidad | No se puede planificar con datos | 50/53 sin `Estimate` |
| P1-3 | Sin sprint goal ni snapshot de sprint backlog | El compromiso no es explícito ni verificable | No se encontró goal documentado en S1 |
| P1-4 | Sin CI | Los merges no tienen verificación automática | `.github/workflows` ausente |
| P1-5 | Sin pruebas automatizadas | La calidad depende de smoke manual | 0 archivos de prueba; `docs/qa.md` |
| P1-6 | Sin registro de riesgos | Los riesgos están listados, no gestionados | Doc “Alcance” |
| P1-7 | Sin control de cambios | Los cambios de alcance no se aprueban ni registran | No hay solicitudes ni log |

### 9.3 P2 — cerrar en S3–S4

| # | Brecha | Por qué es P2 | Evidencia |
|---|---|---|---|
| P2-1 | Sin release notes, tags ni checklist de release | La liberación no es repetible ni comunicable | GitHub sin releases/tags |
| P2-2 | Sin retrospectiva de liberación | No se aprende del release | No hay documento |
| P2-3 | Sin registro de stakeholders ni feedback | El cliente no participa formalmente | No hay registro |
| P2-4 | Sin métricas históricas (burndown/CFD) | No se puede mostrar tendencia | No hay histórico |
| P2-5 | Documentación desalineada con el repo | El repo no es autosuficiente y el doc de Arquitectura no refleja el código | Docs de gestión en Linear; B-9 (Next.js 15 vs 16.4.0), B-10 (uuid vs bigint), B-11 (`src/` y `tailwind.config` vs `app/` y `globals.css`) |
| P2-6 | Ramas obsoletas y PR #72 residual; refs `B` inconsistentes | Ruido y pérdida de trazabilidad | 17 ramas; PR #72; B-049/050/051 |
| P2-7 | Evidencia de RLS pendiente | Seguridad no demostrada | Doc “Auditoría S0 — histórico” |
| P2-8 | DoD no verificado en cada Done | El cierre no es uniforme | ELE-6, ELE-11 y ELE-13 con criterios sin marcar; ELE-106 sin checklist |

---

## 10. Plan accionable

### 10.1 Quick wins (≤ 1 día cada uno)

| Acción | Resultado | Evidencia de cierre |
|---|---|---|
| Activar 1 aprobación obligatoria en `dev` y `main` | Ningún PR se mergea sin revisión | Ruleset actualizado + próximo PR con ≥1 review |
| Revisar las 9 issues Done y completar criterios faltantes | Done auditable | 9/9 con criterios marcados o excepción justificada |
| Crear `docs/reviews/S1.md` y `docs/retro/S1.md` | Review y Retro del S1 documentadas | Actas con asistentes, feedback y 2–3 acciones |
| Crear `docs/daily/S1.md` | Daily con registro diario | Fechas, avances y blockers del 27–31 oct |
| Definir el sprint goal del S2 | Compromiso explícito | Milestone S2 o issue “Sprint 2 — Goal” |
| Borrar ramas mergeadas y la rama del PR #72 | Repo limpio | 0 ramas mergeadas abiertas; rama `hldjhldj4/ejemplo_aguilar` eliminada |
| Corregir `B-049/B-050/B-051` | Backlog e issues alineados | Backlog actualizado con refs únicas |
| Añadir DoR y DoD a las plantillas | Gate de entrada y salida | Plantilla de issue y de PR actualizadas |

### 10.2 Plan por sprint

| Sprint | Foco | Acciones | Responsable sugerido |
|---|---|---|---|
| S1 (tramo 26–31 oct) | Salvar el sprint y cerrar el ciclo | P0-1 a P0-5; Review y Retro del S1; Daily diario; revisión de PRs | Daniel + Víctor |
| S2 (31 oct–14 nov) | Institucionalizar el control | P1-1 a P1-7; CI; primeras pruebas; registro de riesgos y cambios; limpieza de ramas | Daniel, Víctor, Jesús y Helen |
| S3 (14–28 nov) | Trazabilidad y aprendizaje | P2-1 a P2-5, P2-7; release notes; stakeholders; métricas; espejo de docs en el repo | Daniel + Víctor |
| S4 (28 nov–12 dic) | Cierre y sustentación | Release final, retro de liberación, verificación final de RLS, DoD completo, ensayo de demo | Todo el equipo |

### 10.3 Detalle de las acciones P0

1. **Revisión diaria de 15 minutos (P0-1, P0-5).** Cada día, cada persona responde: qué hice, qué haré, qué me bloquea. Registrar en `docs/daily/S1.md`. El SM escala blockers el mismo día.
2. **Cerrar primero los “In Review” (P0-1).** ELE-14, ELE-17 y ELE-20 son la ruta más corta a Done. Asignar un revisor distinto del autor y mergear si pasa el smoke test.
3. **Re-baselinar S1 si es necesario (P0-1).** Si al 29-oct no hay al menos 5 issues en Done, mover los 4 “Todo” a S2 y dejar S1 con lo realmente comprometible. Documentar la decisión en el milestone.
4. **Sprint Review + Retro del S1 (P0-2).** El 31-oct: demo de lo terminado, feedback del PO/stakeholders, y retrospectiva con 2–3 acciones concretas para S2. Guardar actas.
5. **Revisión de PRs (P0-3).** Regla: autor ≠ revisor; ≥1 aprobación; el revisor verifica criterios, smoke test y build. El SM puede mergear, pero no aprobar su propio PR.
6. **Checklist de Done (P0-4).** En cada issue Done, marcar los criterios y enlazar la evidencia (PR, captura, resultado de smoke). Si un criterio no aplica, escribir “N/A” y por qué.

### 10.4 Detalle de las acciones P1

1. **DoR (P1-1).** Checklist mínimo: contexto, criterios verificables, estimación, dependencias, responsable y tamaño adecuado. No entra a sprint lo que no cumpla.
2. **Estimación y velocidad (P1-2).** Usar el campo `Estimate` en todas las issues del S2. Al cierre, calcular velocidad (puntos o horas) y usarla para planificar S3.
3. **Sprint goal y snapshot (P1-3).** Un objetivo por sprint, una lista de issues con owner y estimación, y una foto al inicio. Sin goal documentado, no hay compromiso que inspeccionar.
4. **CI (P1-4).** GitHub Actions con `bun install`, `bun run lint` y `bun run build` en cada PR. Opcional: `test:supabase` con secretos para el entorno de pruebas.
5. **Pruebas (P1-5).** Empezar por lo crítico: login, menú, reservas y admin. Un smoke E2E y pruebas unitarias de las reglas de reserva son suficientes para S2.
6. **Riesgos (P1-6).** Convertir los 4 riesgos del alcance en un registro con probabilidad, impacto, owner, mitigación y fecha de revisión. Revisarlo en la retro.
7. **Cambios (P1-7).** Plantilla de solicitud: qué cambia, por qué, impacto en alcance/tiempo/costo, decisión del PO y fecha. Registro en `docs/cambios.md`.

---

## 11. Fortalezas que conviene preservar

- **Visión y alcance claros:** el README y el documento de alcance explican el problema, la propuesta y los límites del MVP.
- **Backlog estructurado:** 53 issues con contexto, criterios y pasos de implementación; labels por sprint y épicas E0–E7.
- **Roles definidos:** PO, SM, desarrolladores y responsabilidades por módulo, con reglas de trabajo explícitas.
- **Primer incremento real:** S0 cerrado al 100%, mergeado a `main` y desplegado en producción con HTTP 200.
- **Cultura de documentación:** 10 documentos de proceso en Linear y 4 en el repo; plantilla de PR y guía de trabajo.
- **Conciencia de las limitaciones:** `docs/qa.md` declara explícitamente qué no cubre; eso facilita priorizar la mejora.

---

## 12. Conclusión

El proyecto **no está en cero**: tiene planificación, roles, backlog y un incremento liberado. Lo que falta es el **sistema operativo de Scrum**: ceremonias, revisión entre pares, automatización de calidad, métricas y gestión formal de riesgos y cambios.

Con las cinco acciones P0 de esta semana, el proyecto puede cerrar S1 con evidencia y entrar a S2 con un ciclo empírico completo. Con las siete P1 de S2, el 60.3% podría subir a un rango de 75–80% sin añadir burocracia innecesaria. La meta no es llenar documentos: es que el estado del proyecto sea **visible, verificable y corregible** cada semana.

---

## Anexo A — Fuentes y evidencia

### A.1 Documentos de Linear

| Documento | Uso en el informe | URL |
|---|---|---|
| [GESTIÓN] Equipo — Roles y reparto | Roles y responsabilidades | https://linear.app/dsteve18/document/gestion-equipo-roles-y-reparto-2f2474441de3 |
| [GESTIÓN] Alcance — MVP a 9 semanas | Visión, alcance, S0–S4, DoD, riesgos | https://linear.app/dsteve18/document/gestion-alcance-mvp-a-9-semanas-aba674829264 |
| [TÉCNICO] Arquitectura — Stack y modelo de datos | Stack y modelo | https://linear.app/dsteve18/document/tecnico-arquitectura-stack-y-modelo-de-datos-af2e0614d5ff |
| [HISTÓRICO] Auditoría S0 — 2026-10-19 | QA de S0, RLS pendiente | https://linear.app/dsteve18/document/historico-auditoria-s0-2026-10-19-51b71aebfc0d |
| [GESTIÓN] Seguimiento semanal — plantilla | Plantilla de seguimiento | https://linear.app/dsteve18/document/gestion-seguimiento-semanal-plantilla-5b2fe5d7252f |
| [GESTIÓN] Estándar de issues — Electiva | Formato de issues | https://linear.app/dsteve18/document/gestion-estandar-de-issues-electiva-b232d212ac1c |
| [GESTIÓN] Estándar de documentos — Electiva | Convenciones de documentos | https://linear.app/dsteve18/document/gestion-estandar-de-documentos-electiva-79122999a6fd |
| [GESTIÓN] Referencia — Roles Scrum | Responsabilidades estándar | https://linear.app/dsteve18/document/gestion-referencia-roles-scrum-bdc27c55073e |
| [HISTÓRICO] Backlog — Épicas e issues | Épicas, B-001..B-050, 290 h | https://linear.app/dsteve18/document/historico-backlog-epicas-e-issues-47c87b2642b7 |
| [GUÍA] README — Proyecto Sabor al Instante | Contexto y visión | https://linear.app/dsteve18/document/guia-readme-proyecto-sabor-al-instante-9d74e5830e35 |

### A.2 GitHub

| Evidencia | Detalle |
|---|---|
| Repositorio | https://github.com/Danielsteve18/Proyecto-Electiva-II |
| PRs clave | #73 (ELE-14, abierto), #71 (release S0), #70 (ELE-106), #66 (RLS ELE-9), #65 (tokens ELE-11), #64 (seed ELE-10), #63 (migración ELE-8), #62 (smoke test ELE-13) |
| Autoría de PRs | 13 Daniel, 4 Jesús, 1 Helen, 1 Víctor, 1 Andrés; 16/16 merges integrados por Daniel |
| PRs cerrados sin merge | #72 (Daniel, commit `ca8407e` “feture…”), #69 (Andrés), #61 (Jesús) |
| Rulesets | `protege-main` 24896210 y `protege-dev` 24896211: deletion, non_fast_forward, pull_request, 0 aprobaciones |
| Releases/tags | Ninguno |
| Workflows | Ninguno en `.github/workflows` |

### A.3 Repositorio

| Archivo | Uso |
|---|---|
| `README.md:7-27` | Problema, propuesta y objetivos |
| `README.md:102` | Flujo de ramas |
| `README.md:151` | Requisitos funcionales |
| `GUIA.md:63` | Rama por issue |
| `GUIA.md:112` | Entrega, smoke test y PR a `dev` |
| `docs/qa.md` | Smoke test y sección “Qué NO cubre” |
| `docs/diseno/identidad-visual.md` | Identidad visual y tokens |
| `.github/PULL_REQUEST_TEMPLATE.md` | Plantilla de PR con `ELE-##` y smoke test |
| `package.json` | Stack y scripts; sin script de test unitario |
| `supabase/migrations/` | `0001_init.sql`, `0002_rls.sql`, etc. |

### A.4 Producción

- Deployment: `f7f79ff`, 2026-10-19, estado `success`.
- URL: https://proyecto-electiva-r1hpe5dv9-profesionalgitdsma-8602s-projects.vercel.app
- Verificación: HTTP 200 el 2026-10-26.

### A.5 SBOK

- Fuente: `docs/SCRUMstudy-SBOK-Guide-5th-Edition-Spanish.pdf` (452 páginas).
- Capítulos usados: 2 (principios), 3 (roles), 8 (Inicio), 9 (Planificación), 10 (Implementación), 11 (Revisión y Retrospectiva), 12 (Liberación).
- Procesos: 8.1–8.6, 9.1–9.6, 10.1–10.3, 11.1–11.2, 12.1–12.2.

---

## Anexo B — Inconsistencias y deriva documental detectadas

| # | Inconsistencia | Evidencia | Impacto | Corrección sugerida |
|---|---|---|---|---|
| B-1 | Colisión de referencias `B` | Backlog: `B-049` = costos, `B-050` = seguimiento; ELE-106 usa `B-049`, ELE-107 usa `B-050` y ELE-108 usa `B-051` (no existe en el Backlog) | No se puede cruzar backlog con issues | Renumerar las tres issues nuevas (`B-051..B-053`) o actualizar el Backlog |
| B-2 | 50/53 issues sin `Estimate` | Linear: solo ELE-106/107/108 tienen 5 puntos | Sin velocidad ni capacidad | Completar el campo en todas las issues del S2 |
| B-3 | Criterios sin marcar en Done | ELE-6, ELE-7, ELE-9, ELE-11, ELE-12 y ELE-13 tenían `- [ ]`; ELE-106 usaba viñetas sin estado verificable; ELE-8 y ELE-10 estaban completos | El Done no es auditable | Hecho el 2026-10-26: criterios marcados/justificados y evidencia enlazada en las 9 issues |
| B-4 | Evidencia en el PR, no en la issue | PR #62 tiene el smoke test marcado; la issue ELE-13 no | Trazabilidad dispersa | Enlazar el PR en la issue y marcar allí el criterio |
| B-5 | Concentración de autoría y merges en el SM | 13/20 PRs abiertos por Daniel; 7/20 por devs (Jesús 4, Helen 1, Víctor 1, Andrés 1); 16/16 merges integrados por Daniel; 0 reviews | *Bus factor*, cuello de botella y ausencia de revisión entre pares | Distribuir merges y exigir revisión de otro miembro |
| B-6 | Rama y commit residuales | `hldjhldj4/ejemplo_aguilar`, commit `ca8407e` “feture(frontend)…”, PR #72 cerrado | Ruido y confusión | Borrar la rama y el commit si no aporta |
| B-7 | Ramas mergeadas sin borrar | 17 ramas remotas; varias ya mergeadas | Desorden y riesgo de trabajar sobre ramas viejas | Borrar las mergeadas y proteger `dev`/`main` |
| B-8 | Autoría no reflejada | Andrés/Aguilar no aparece como autor en el `git shortlog` de los commits integrados (solo Daniel, Manuel Vera/Víctor, Jesús y Helen); abrió el PR #69 (cerrado). Además, ELE-106 se integró desde una rama de Daniel, no de su asignado | El tablero no refleja quién hizo qué | Que cada dev commitee en su rama y abra su PR |
| B-9 | Deriva de documentación técnica | El doc “Arquitectura — Stack y modelo de datos” dice Next.js 15; `package.json` usa Next.js 16.4.0 | Onboarding y decisiones desactualizadas | Hecho el 2026-10-26: doc actualizado a Next.js 16.4.0 y espejo en `docs/arquitectura.md` |
| B-10 | Divergencia esquema vs arquitectura | El doc de Arquitectura pide `uuid` y nombres en español; `0001_init.sql` usa `bigint identity` y nombres en inglés (hallazgo del QA de S0) | Riesgo de confusión y deuda de modelo | Hecho el 2026-10-26: decisión documentada en `docs/arquitectura.md`; quedan como deuda `guest_email` y `avatar_url` |
| B-11 | Deriva de estructura del repo | El doc de Arquitectura ubica el código en `src/app`, `src/components`, `src/actions` y `src/lib`, y los tokens en `tailwind.config`; el repo usa `app/`, `components/` y `lib/` en la raíz, sin `src/`, y tokens en `app/globals.css` (Tailwind v4) | Onboarding confuso y rutas inexistentes | Hecho el 2026-10-26: doc actualizado a la estructura real; no se mueve el código |

---

## Anexo C — Cómo reproducir la auditoría

1. **Linear:** listar issues del proyecto `P-ELE-1`, contar estados, labels, milestones y `estimate`; revisar los documentos de proceso.
2. **GitHub:** listar PRs (`state`, `author`, `reviews`, `mergedAt`, `mergedBy`), rulesets, ramas, releases y workflows; revisar `.github/`.
3. **Git local:** `git rev-list --all --count`, `git shortlog -sn --all`, `git branch -r`.
4. **Repositorio:** revisar `README.md`, `GUIA.md`, `docs/qa.md`, `docs/diseno/`, `package.json` y `supabase/migrations/`.
5. **Producción:** consultar el deployment de Vercel y verificar HTTP 200.
6. **SBOK:** contrastar cada proceso con el capítulo correspondiente y aplicar la escala de veredictos.

---

*Informe generado el 2026-10-26. Las cifras de Linear y GitHub son una foto del estado en esa fecha y pueden cambiar con el avance del Sprint 1.*

---

## Anexo D — Correcciones aplicadas el 2026-10-26

Estas correcciones no cambian el veredicto histórico del informe; registran el estado
posterior a la auditoría.

- **Criterios (P0-4, B-3, B-4):** las 9 issues Done se auditaron y se marcaron con evidencia.
  Las salvedades quedaron explícitas en ELE-6 (sin review formal), ELE-9 (sin `count`
  archivado) y ELE-13 (adopción no auditable). ELE-7 marca la prueba con sesión como
  `N/A en S0`.
- **Trazabilidad (P0-4):** cada issue Done tiene un comentario de cierre
  `Cierre auditado S0 (2026-10-26)` con la evidencia y la salvedad correspondiente.
- **Documentación (P2-5, B-9, B-10, B-11):** el doc de Arquitectura de Linear se alineó con
  el código real; se creó el espejo `docs/arquitectura.md` y el índice `docs/README.md`.
- **Ceremonias (P0-2, P0-5):** se crearon `docs/ceremonias/README.md`, `docs/daily/S1.md`,
  `docs/reviews/S1.md` y `docs/retro/S1.md`. Son plantillas/agendas: el cierre real depende
  de que las reuniones ocurran y se llenen.
- **Sprint 2:** se documentó el goal y el alcance must/stretch en `docs/sprints/S2.md` y en
  el milestone S2 de Linear.
- **Pendiente:** revisiones formales en PRs, CI, estimaciones, limpieza de ramas,
  `guest_email`, `avatar_url` y evidencia de RLS con `count` archivado.

