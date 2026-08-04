# Design System ueno — tokens aplicados

Fuente: artes del DS ueno bank (Color Primitives / Semantic, Radius, Actions, Navigation, Home Green).

## Tokens en la app
Definidos en `index.html` (`tailwind.config` + CSS `:root`):

| Token | Hex | Uso |
|-------|-----|-----|
| `ueno-canvas` | `#F1F0EC` | Fondo de página |
| `ueno-surface` | `#FCFCFC` | Cards / paneles |
| `ueno-inverse` | `#182A3C` | Sidebar / chrome |
| `ueno-assistant` | `#064242` | Áreas mapa / deep green |
| `ueno-brand` | `#2AD88A` | Primario, CTAs, activo |
| `ueno-brand-subtle` | `#BAFCCC` | Fondos soft |
| `ueno-text` | `#182A3C` | Texto principal |
| `ueno-muted` | `#30424E` | Texto secundario |
| `ueno-border` | `#E8DFEC` / mauve | Bordes |
| `ueno-purple` | `#7284E4` | Data / acentos |
| `ueno-gold` | `#FCC05A` | En curso / highlights |
| `ueno-orange` | `#FC6C00` | Alertas / WIP |

## Tipografía
Inter (placeholder del DS: *pendiente confirmar tipografía de marca*). Marketing web usa Montserrat Black — **no** se aplica aquí (producto ≠ marketing).

## Radius
`4 / 8 / 12 / 16 / full(999)` → `rounded-ueno-sm|md|lg|xl` + `rounded-full` en pills.

## Elevation
`shadow-ueno-1|2|3` (sombras navy suaves).

## Glass
Clase `.ueno-glass` (blanco 15% + stroke 30% + blur 20px) — solo sobre gradiente/foto.
