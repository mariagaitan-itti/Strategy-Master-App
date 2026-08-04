# Despliegue en Google Apps Script

## Recomendación corta

| Opción | ¿Cuándo? | Veredicto |
|--------|----------|-----------|
| **HTML único + clasp** | Flujo habitual del equipo | **Recomendado** |
| Copiar/pegar `index.html` al editor | Cambios urgentes / sin clasp | OK, pero frágil |
| Repomix / empaquetar repo | No aplica: el deploy ya es un solo archivo | Innecesario |
| Vite + muchos chunks | Solo si un build **vuelve a generar un HTML único** | Más adelante |

**Conclusión:** seguimos con la misma estructura de artefacto (`index.html` monolítico). No hace falta Repomix. Lo que sí conviene es dejar de pegar a mano y usar **clasp**.

## Por qué un solo HTML
Apps Script `HtmlService` sirve archivos HTML del proyecto. Un SPA con React/Babel/Tailwind por CDN encaja bien en **un** `Index.html`. Partir en módulos sin un paso de empaquetado complica el deploy.

## Opción A — clasp (recomendada)

```bash
npm i -g @google/clasp
clasp login
# Una vez: crear o clonar el proyecto Apps Script dentro de apps-script/
cd apps-script && clasp clone <SCRIPT_ID>   # o clasp create

# Desde la raíz del repo, cada vez que cambies la app:
./scripts/sync-apps-script.sh   # copia index.html → apps-script/Index.html
cd apps-script && clasp push
```

En el editor de Apps Script: **Deploy → New deployment → Web app**.

## Opción B — Copiar/pegar

1. Abrí el proyecto en [script.google.com](https://script.google.com).
2. Pegá el contenido de `apps-script/Code.gs` en `Code.gs`.
3. Creá/reemplazá el archivo HTML `Index` con el contenido completo de `index.html`.
4. Guardá y volvé a desplegar la Web App (nueva versión).

## `Code.gs` mínimo

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Estratégico 2026 - Grupo Vázquez')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

## Notas importantes
- Los CDNs (`unpkg`, `cdn.tailwindcss.com`) requieren que el usuario tenga red; en HtmlService suelen funcionar en modo IFRAME.
- Si algún CDN queda bloqueado, el siguiente paso es **vendor** (inline) de React/Tailwind o un build que los embeba.
- No subas `.clasp.json` con credenciales al repo si contiene datos sensibles del entorno local.
- Preview local: `python3 -m http.server 8080` desde la raíz del repo.

## Qué no hacer ahora
- No migrar a Vite “porque sí”: rompería el flujo Apps Script hasta tener un build → `Index.html` único.
- No usar Repomix como paso de deploy: duplica trabajo sin beneficio.
