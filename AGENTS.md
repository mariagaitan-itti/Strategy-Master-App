# Strategy Master App — Contexto para agentes e IAs

## Qué es
Dashboard estratégico interno del **Grupo Vázquez / ueno** para comunicar y seguir la **Estrategia de Producto SuperApp 2026**. No es la app bancaria de producción: es un tablero narrativo + de seguimiento para Producto, Tecnología y Dirección.

## Promesa de producto
> "No es una app. Es donde pasa mi vida financiera."

Documento maestro de referencia: *Estrategia de Producto — SuperApp | Grupo Vázquez | Mayo 2026*.

## Stack y restricción de despliegue
- **Artefacto principal:** un solo `index.html` (React 18 + Babel + Tailwind vía CDN).
- **Despliegue:** Google Apps Script (`HtmlService`).
- Wrapper: `apps-script/Code.gs` + sync `./scripts/sync-apps-script.sh`.

## Estructura del repo
```
/
  index.html                 # App + artefacto deploy (aquí vive STRATEGY_MASTER)
  AGENTS.md                  # Este archivo (único contexto para IAs)
  apps-script/Code.gs
  docs/
    CHANGELOG.md
    DEPLOY_APPS_SCRIPT.md
    DOCUMENTO_MAESTRO.md     # Resumen del PDF (no es código)
  scripts/sync-apps-script.sh
```

## ¿Qué es STRATEGY_MASTER?
No es un archivo `.md`. Es un **objeto JavaScript** dentro de `index.html` (`const STRATEGY_MASTER = { ... }`) con pilares, ecosistema, olas y métricas del PDF. Las vistas de Estrategia Transversal lo leen desde ahí.

## Cómo verificar que desplegaste la versión nueva
En el sidebar (navy): wordmark **`ueno.`** + badge **`PDF · Mayo 2026`**.  
Fondo de contenido **beige canvas** (`#F1F0EC`), no dark slate.  
Ver tokens en `docs/DESIGN_SYSTEM.md`.

## Secciones de la UI
| Sección | Contenido |
|---------|-----------|
| Estrategia Ecosistema | Visión financiera grupo, Closed Loop |
| Estrategia Transversal | Documento maestro SuperApp |
| Super App & Mapa | Mind map |
| Documento | Material Drive / apoyo |
| Métricas por producto | Fichas de BUs |

## Convenciones
1. Mantener HTML único desplegable.
2. Editar estrategia en `STRATEGY_MASTER` dentro de `index.html`.
3. Registrar cambios en `docs/CHANGELOG.md`.
