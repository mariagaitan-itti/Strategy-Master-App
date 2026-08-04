# Strategy Master App — Contexto para agentes e IAs

## Qué es
Dashboard estratégico interno del **Grupo Vázquez / ueno** para comunicar y seguir la **Estrategia de Producto SuperApp 2026**. No es la app bancaria de producción: es un tablero narrativo + de seguimiento.

## Promesa
> "No es una app. Es donde pasa mi vida financiera."

## Stack y deploy
- **Artefacto único:** `index.html` (React 18 + Babel + Tailwind vía CDN).
- **Despliegue:** copiar/pegar `index.html` → Apps Script archivo `Index` + `doGet()` en `Code.gs`.
- Ver `docs/DEPLOY_APPS_SCRIPT.md`.

## Estructura del repo
```
/
  index.html                 # App + artefacto deploy
  AGENTS.md                  # Este archivo
  README.md                  # Quick start (único README)
  docs/
    CHANGELOG.md
    DEPLOY_APPS_SCRIPT.md
    DESIGN_SYSTEM.md
    DOCUMENTO_MAESTRO.md
```

## ¿Qué es STRATEGY_MASTER?
Objeto JavaScript **dentro de `index.html`** (`const STRATEGY_MASTER = { ... }`), no un archivo `.md`.

## Cómo verificar deploy nuevo
Sidebar navy + wordmark `ueno.` + badge `PDF · Mayo 2026` + canvas `#F1F0EC`.

## Convenciones
1. Mantener HTML único desplegable.
2. Editar estrategia en `STRATEGY_MASTER`.
3. Registrar cambios en `docs/CHANGELOG.md`.
4. Look = Ads Admin (ver `docs/DESIGN_SYSTEM.md`).
