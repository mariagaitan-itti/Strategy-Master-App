# Changelog

Todos los cambios notables de Strategy Master App.

## [2026-08-04]
### Added
- `STRATEGY_MASTER` en `index.html` + documentación base (`AGENTS.md`, Documento Maestro, Design System).
- Tema visual DS ueno (Ads Admin): navy `#192E3F`, canvas `#F1F0EC`, brand `#2BD98E`.
- Tracker Olas, ecosistema completo, métricas ampliadas.
- Baseline completo Parte I (KPIs), CAP-DATA (3 batches bloqueantes), métricas con columna Actual, flywheel Parte VIII.
- Logos de productos (`assets/logos/`).

### Changed
- Tracker Olas: CAP-DATA expandido, Afluente/Otros separados, badge bloqueante.
- Global → Métricas linkea a Transversal; sidebar aclara "OKRs por producto (BU)" vs Documento Maestro.
- `docs/DEPLOY_APPS_SCRIPT.md` documenta únicamente el flujo copy/paste.

### Removed
- Carpeta `apps-script/` y `scripts/sync-apps-script.sh` (el deploy es solo copy/paste de `index.html`).
- README duplicado en `apps-script/` — queda un solo `README.md` en la raíz.
- `docs/ANALISIS_DOCUMENTO_MAESTRO.md` — gaps ya cerrados; los pendientes se movieron a `docs/DOCUMENTO_MAESTRO.md`.

### Fixed
- `)}` extra que rompía Babel en Apps Script.

## [2026-08-03]
### Changed
- Versión Apps Script del dashboard estratégico (commit `New AppsScript version`).
