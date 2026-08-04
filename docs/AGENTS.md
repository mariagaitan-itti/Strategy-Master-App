# Strategy Master App — Contexto para agentes e IAs

## Qué es
Dashboard estratégico interno del **Grupo Vázquez / ueno** para comunicar y seguir la **Estrategia de Producto SuperApp 2026**. No es la app bancaria de producción: es un tablero narrativo + de seguimiento para Producto, Tecnología y Dirección.

## Promesa de producto
> "No es una app. Es donde pasa mi vida financiera."

Documento maestro de referencia: *Estrategia de Producto — SuperApp | Grupo Vázquez | Mayo 2026*.

## Stack y restricción de despliegue
- **Artefacto principal:** un solo `index.html` (React 18 + Babel + Tailwind vía CDN).
- **Despliegue:** Google Apps Script (`HtmlService`).
- Por eso **no** separamos el frontend en un bundler tipo Vite todavía: Apps Script consume mejor un HTML único.
- Wrapper de despliegue: `apps-script/Code.gs` + el mismo `index.html` (o copia como `Index.html`).

## Estructura del repo
```
/
  index.html              # App completa (fuente + artefacto deploy)
  apps-script/Code.gs     # doGet() para HtmlService
  docs/
    AGENTS.md             # Este archivo (contexto para IAs)
    CHANGELOG.md          # Historial de cambios
    DEPLOY_APPS_SCRIPT.md # Cómo publicar
    STRATEGY_SOURCE.md    # Resumen del documento maestro
```

## Secciones de la UI
| Sección | Contenido |
|---------|-----------|
| Estrategia Ecosistema | Visión financiera grupo, Closed Loop, segmentos, impacto |
| Estrategia Transversal | Documento maestro SuperApp (pilares, capas, olas, métricas) |
| Super App & Mapa | Mind map interactivo del ecosistema |
| Blog / Documento | Material de apoyo (Drive / PDF maestro) |
| Métricas por producto | Fichas de BUs (objetivos + KPIs) |

## Datos clave en código
Dentro de `index.html` (script Babel):
- `PRODUCTS_DATA` — fichas de unidades de negocio
- `ECOSYSTEM_MAP_DATA` — árbol del mind map
- `STRATEGY_MASTER` — ecosistema completo, olas, métricas, pilares (fuente alineada al PDF)

## Convenciones al editar
1. Mantener **un solo HTML desplegable**; no romper CDNs ni el entry `#root`.
2. Preferir datos en objetos (`STRATEGY_MASTER`, etc.) y vistas que los lean — evita tablas hardcodeadas.
3. Español en UI y copy estratégico.
4. Cada cambio relevante → entrada en `docs/CHANGELOG.md`.
5. No commitear secretos, OAuth ni IDs sensibles de Apps Script (`.clasp.json` local).

## Roadmap de producto de esta app (herramienta)
1. Alinear contenido 1:1 con el PDF maestro.
2. Tracker Ola 1 / Ola 2 con estados.
3. Métricas con meta + valor actual + semáforo.
4. Ecosistema 30+ empresas con rol/estado.
5. (Futuro) `clasp push` automatizado; opcional build que siga generando un HTML único.
