# Análisis: Documento Maestro vs Strategy Master App

Fuente: `GV_Estrategia_Producto_SuperApp` (Mayo 2026) vs `index.html` actual.

## Veredicto
La sección **Estrategia Transversal** (`STRATEGY_MASTER`) es el espejo del PDF.  
**Estrategia Ecosistema (Global)** es otro documento (corporate 2026–2030).  
**Métricas por producto** y el **mapa SuperApp** se solapan pero con datos/taxonomía distintos → riesgo de “doble verdad”.

---

## A) Cobertura por parte del PDF

| Parte PDF | Sección app | Estado |
|-----------|-------------|--------|
| I Dónde estamos | Transversal → Dónde Estamos | **Parcial** — faltan KPIs (40M txfer, 65M tx, 89M ueno+, 76 ueno X, #1 rankings) |
| II 4 capas | Transversal → Desde Adentro | **Completo** |
| III 5 pilares + Cliente Director | Transversal → 5 Pilares | **Completo** |
| IV Ecosistema 30+ | Transversal → Ecosistema | **Completo** en tablas; mapa SuperApp **parcial** |
| V Arquitectura | Transversal → Arquitectura | **Completo** (condensado); CAP-DATA sin ficha propia |
| VI Ola 1 / Ola 2 | Transversal → Tracker Olas | **Completo** en lista; estados son placeholders |
| VII Métricas | Transversal → Métricas | **Completo** en metas; **sin valores actuales** |
| VIII Flywheel + prioridades | Transversal → Prioridades | **Parcial** — faltan prioridades 1–5 OK; falta narrativa del ciclo |

---

## B) Qué hay que ACTUALIZAR (contenido)

1. **Tab “Dónde Estamos”** — completar baseline Parte I.
2. **CAP-DATA** — bloque visible (3 batches bloqueantes) en Arquitectura u Olas.
3. **Estados del Tracker Olas** — validar con Producto (hoy son sugeridos).
4. **PRODUCTS_DATA** — desalineado del maestro (ej. clientes 2.538M vs 2.8M); o alinear, o etiquetar como “OKRs BU” distintos.
5. **Métricas** — columna Actual (aunque sea baseline).
6. **Empresas sin ficha** en sidebar: Wepa, UNID, Seguros, Casa de Bolsa, Vinanzas, ueno+, YUDA, Ads, Academy, La Tribu, MasMoney, Ucel, Sports, Fan Apps (están en tabla ecosistema, no en métricas por producto).

---

## C) Qué presentar de OTRA manera (UX)

1. **Global vs Transversal** — no fusionar. Global = “por qué / accionista”; Transversal = Documento Maestro. En Global, linkar a Transversal en vez de repetir métricas/ecosistema.
2. **Mapa SuperApp** — añadir vista/filtro “3 verticales del Documento Maestro” + estados; hoy la taxonomía propia confunde.
3. **PRODUCTS_DATA** — solo fichas para BUs con OKR/board; el resto como chips de estado en Ecosistema.
4. **Documento (iframe)** — TOC que salte a tabs Transversal (Parte I → tab 1, etc.).
5. **Olas** — kanban/timeline + filtro “bloqueantes” (CAP-DATA, UNID 100%, Uendi 3 modos).
6. **Parte VIII flywheel** — diagrama del ciclo claridad→datos→crédito→lealtad, no solo lista 1–5.

---

## D) ¿Global duplica Transversal?
**No.** Son documentos distintos con solape parcial (ecosistema + KPIs). Fuente operativa del PDF maestro debe ser solo `STRATEGY_MASTER` / Transversal.
