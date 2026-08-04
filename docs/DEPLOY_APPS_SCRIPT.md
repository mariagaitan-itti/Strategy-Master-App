# Despliegue en Google Apps Script

## Flujo del equipo
Solo hay que **copiar y pegar** el contenido de `index.html` (raíz del repo) en el archivo HTML `Index` del proyecto Apps Script, guardar y publicar una **nueva versión** del Web App.

No se usa `clasp` ni una carpeta `apps-script/` en el repo.

## Checklist
1. Editar / probar `index.html` en local (`python3 -m http.server 8080`).
2. Abrir el proyecto en script.google.com.
3. Reemplazar el HTML `Index` con el contenido completo de `index.html`.
4. Verificar que `Code.gs` tenga `doGet()` apuntando a `'Index'`.
5. Deploy → New version.

## `Code.gs` de referencia
```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Estratégico 2026 - Grupo Vázquez')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

## Notas
- Los CDNs (React, Tailwind, Babel, fonts) requieren red.
- Si Babel falla tras pegar, revisá que el archivo se haya guardado completo (sin cortes).
