/**
 * Strategy Master App — Google Apps Script entrypoint
 *
 * En el proyecto Apps Script este archivo debe llamarse Code.gs
 * y el HTML debe existir como archivo "Index" (contenido = index.html del repo).
 *
 * Deploy: Deploy → New deployment → Web app
 * Local sync: ver docs/DEPLOY_APPS_SCRIPT.md (clasp)
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Estratégico 2026 - Grupo Vázquez')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
