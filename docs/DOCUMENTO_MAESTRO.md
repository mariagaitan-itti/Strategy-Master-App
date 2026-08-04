# Documento Maestro SuperApp (resumen)

Este archivo es un **resumen en Markdown** del PDF  
*Estrategia de Producto — SuperApp | Grupo Vázquez | Mayo 2026*.

## No confundir con `STRATEGY_MASTER`
| Nombre | Qué es | Dónde está |
|--------|--------|------------|
| **Documento Maestro** | El PDF de estrategia de producto | Material de negocio (Drive / PDF) |
| **`STRATEGY_MASTER`** | Objeto JS con esos datos para la UI | Dentro de `index.html` (no es un `.md`) |
| **Este archivo** | Resumen humano para el equipo/IAs | `docs/DOCUMENTO_MAESTRO.md` |

## Contenido que debe reflejar la app
1. Promesa + punto de partida (mayo 2026) + 3 brechas  
2. 4 capas (Data, Decision, Execution, Experience)  
3. 5 pilares + evolución Cliente → Director  
4. Ecosistema 30+ empresas / 3 verticales  
5. Arquitectura (UNID, Uendi, Scoring, Data Lake, Upay Hub)  
6. Ola 1 y Ola 2  
7. Métricas (6 familias)  
8. 5 prioridades estratégicas  

Cuando el PDF cambie: actualizar `STRATEGY_MASTER` en `index.html` y anotar en `CHANGELOG.md`.

## Pendientes (negocio / UX)
- **Estados del Tracker Olas** — hoy son sugeridos por la app; falta validarlos con Producto.
- **Mapa SuperApp** — agregar vista/filtro por las 3 verticales del Documento Maestro (hoy usa taxonomía propia); sumar estados de avance.

## Notas de alcance
- **Estrategia Ecosistema (Global)** es un documento distinto (corporate 2026–2030); no fusionar con este resumen — en la UI, Global linkea a Transversal en vez de repetir métricas/ecosistema.
- **`PRODUCTS_DATA`** (métricas por producto en la UI) puede no calzar 1:1 con este documento — son OKRs por BU, no el Documento Maestro. Si un número difiere (ej. clientes totales), es la BU la fuente, no un error de transcripción.
