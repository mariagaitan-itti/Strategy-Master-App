# Strategy Master App — Contexto para agentes e IAs

## Qué es
Dashboard estratégico interno del **Grupo Vázquez / ueno** para comunicar y seguir la **Estrategia de Producto SuperApp 2026**. No es la app bancaria de producción: es un tablero narrativo + de seguimiento para Producto, Tecnología y Dirección.

## Stack
- **Artefacto principal:** un solo `index.html` (React 18 + Babel Standalone + Tailwind vía CDN).
- **Sin package manager / sin backend / sin base de datos.** Toda la data vive en JS dentro del HTML.
- **Despliegue típico:** Google Apps Script (`HtmlService`). Ver rama `cursor/superapp-docs-y-estrategia-13aa` para wrappers `apps-script/` y docs de deploy (aún no en `main`).

## Preview local
```bash
python3 -m http.server 8080
# abrir http://127.0.0.1:8080
```
Requiere salida HTTPS a los CDNs (`cdn.tailwindcss.com`, `unpkg.com`). Abrir con `file://` puede fallar por CORS/CDN.

## Secciones de la UI
| Sección | Contenido |
|---------|-----------|
| Estrategia Ecosistema | Visión financiera grupo, Closed Loop |
| Estrategia Transversal | Documento maestro SuperApp |
| Super App & Mapa | Mind map |
| Blog / Documento | Material de apoyo / Drive |
| Métricas por producto | Fichas de BUs (`PRODUCTS_DATA`) |

## Convenciones
1. Mantener HTML único desplegable.
2. Editar data/estrategia en los objetos JS dentro de `index.html` (`PRODUCTS_DATA`, y `STRATEGY_MASTER` si está presente).
3. No hay scripts de lint/test/build en este repo: la verificación es servir el HTML y ejercitar la UI.

## Cursor Cloud specific instructions

- **Servicio requerido:** solo un static file server. Comando canónico: `python3 -m http.server 8080` desde `/workspace`. No hay Docker, DB, auth ni migraciones.
- **Update script:** no hay dependencias npm/pip que refrescar; el script de arranque es un no-op (`true`). No ejecutes `npm install` / `pnpm` — no existe `package.json` en `main`.
- **CDN obligatorio:** la app no arranca sin red a Tailwind/React/Babel en unpkg + cdn.tailwindcss.com. Los 404 de favicons de Google (`google.com/s2/favicons`) son cosméticos (cae a avatar con letra).
- **Lint / tests / build:** no hay tooling. Smoke check = HTTP 200 en `/` + que `#root` renderice hijos tras Babel, + navegar sidebar (producto → métricas).
- **Hello-world útil:** abrir dashboard → sección Super App / Transversal → seleccionar un producto (p.ej. `ueno bank` o `MUV`) y confirmar que se ven Objetivos / Métricas Transversales.
- Docs más completas (README, Apps Script, CHANGELOG) viven en la rama remota `origin/cursor/superapp-docs-y-estrategia-13aa`; no asumas que esos archivos existen en `main`.
