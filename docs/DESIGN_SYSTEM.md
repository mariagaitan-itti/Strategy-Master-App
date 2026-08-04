# Design System ueno — lineamientos aplicados

Fuente: screenshots Figma DS v0.1 + referencia de producto **Ueno Ads Admin**.

## Principio de aplicación (Strategy Master)
Esta app es un **admin/dashboard interno** → mismo patrón que Ads Admin, **no** marketing web ni home móvil uendi.

| Capa | Look |
|------|------|
| Sidebar | `navy/900` `#192E3F`, texto blanco, activo con barra brand |
| Canvas | `#F1F0EC` |
| Cards | blanco `#FFFFFF`, borde `#E4E7E9`, sombra suave |
| Acento | verde brand `#2BD98E` (chips/estados/CTA) |
| Texto | navy `#192E3F` / muted `#324452` |
| Tipografía | Inter (placeholder DS) |

## No aplicar aquí
- Marketing: Montserrat Black + CTA negro `#252529` (sitio ueno.com.py)
- Home banco: superficies assistant forest / story cards saturadas

## Tokens en código
Ver `tailwind.config` dentro de `index.html` (`colors.ueno.*`).

## Radius / Motion (DS)
- Radius: 0 / 4 / 8 / 12 / 16 / 999
- Duration: 150 / 250 / 400ms
- Easing standard: `cubic-bezier(0.4, 0, 0.2, 1)`
