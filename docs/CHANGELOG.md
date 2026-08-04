# Changelog

Todos los cambios notables de Strategy Master App.

## [Unreleased]

### Added
- Carpeta `docs/` con CHANGELOG, guía Apps Script y resumen del Documento Maestro.
- Wrapper `apps-script/Code.gs` + `scripts/sync-apps-script.sh`.
- Objeto `STRATEGY_MASTER` **dentro de `index.html`** (no es un archivo separado).
- Tracker Ola 1 / Ola 2, ecosistema completo, métricas ampliadas.
- Badge visible en sidebar: `PDF · Mayo 2026` (para verificar deploy).

### Changed
- Un solo `AGENTS.md` en la raíz (se eliminó el duplicado en `docs/`).
- `docs/STRATEGY_SOURCE.md` renombrado/reemplazado por `docs/DOCUMENTO_MAESTRO.md`.
- Vista Transversal data-driven; Blog → Documento; Roadmap → Tracker Olas.

### Fixed
- `)}` extra que rompía Babel en Apps Script.

## [2026-08-03]
### Changed
- Versión Apps Script del dashboard estratégico (commit `New AppsScript version`).
