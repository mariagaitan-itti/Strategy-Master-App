# Changelog

Todos los cambios notables de Strategy Master App.

## [Unreleased]

### Added
- Carpeta `docs/` con contexto para agentes (`AGENTS.md`), guía de deploy Apps Script y resumen del documento maestro.
- Wrapper `apps-script/Code.gs` para servir el HTML con `HtmlService`.
- Modelo de datos `STRATEGY_MASTER` alineado al PDF *Estrategia de Producto — SuperApp (Mayo 2026)*.
- Tracker interactivo Ola 1 / Ola 2 con estados de avance.
- Ecosistema completo (3 verticales, 30+ empresas) renderizado desde datos.
- Métricas ampliadas (definición + meta) según el documento maestro.
- Sección de prioridades estratégicas (1–5) y evolución Cliente → Director más visible.
- Mapa del ecosistema enriquecido (empresas del PDF faltantes).

### Changed
- Vista **Estrategia Transversal** pasa a consumir `STRATEGY_MASTER` en lugar de tablas hardcodeadas parciales.
- Recomendación de arquitectura: se mantiene HTML único por compatibilidad con Apps Script.

## [2026-08-03]
### Changed
- Versión Apps Script del dashboard estratégico (commit `New AppsScript version`).
