# Strategy Master App

Dashboard estratégico SuperApp — Grupo Vázquez / ueno (2026).

## Preview local
```bash
python3 -m http.server 8080
# abrir http://127.0.0.1:8080
```

## Deploy (Apps Script)
1. Abrí el proyecto en [script.google.com](https://script.google.com).
2. Copiá el contenido de **`index.html`** (raíz del repo) al archivo HTML `Index` del proyecto.
3. En `Code.gs` asegurate de tener un `doGet()` que sirva ese archivo, por ejemplo:

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Estratégico 2026 - Grupo Vázquez')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

4. **Deploy → Manage deployments → Edit → New version**.

## Documentación
- [`AGENTS.md`](AGENTS.md) — contexto para IAs / agentes
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md)
- [`docs/DOCUMENTO_MAESTRO.md`](docs/DOCUMENTO_MAESTRO.md)
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)
- [`docs/DEPLOY_APPS_SCRIPT.md`](docs/DEPLOY_APPS_SCRIPT.md)
