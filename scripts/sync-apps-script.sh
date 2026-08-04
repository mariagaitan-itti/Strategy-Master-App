#!/usr/bin/env bash
# Prepara la carpeta apps-script/ para clasp push:
# copia index.html → apps-script/Index.html (nombre que espera Code.gs / HtmlService)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cp "$ROOT/index.html" "$ROOT/apps-script/Index.html"
echo "OK: apps-script/Index.html actualizado desde index.html"
echo "Siguiente: cd apps-script && clasp push"
