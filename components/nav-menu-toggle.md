# .Nav Menu Toggle

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| State | Variant | Enabled | Enabled, Hover, Pressed, Focus, Visited, Disabled |

## Structure

    .Nav Menu Toggle (Component Set)
    └── [State Variant] (HORIZONTAL auto-layout)
        └── State Layer (FRAME, pill shape)
            ├── menu (INSTANCE, 24×24 — hamburger icon)
            └── Text Label (TEXT — "Menu")

## Layout & Sizing

### Container (Outer)
| Property | Value | Token |
|----------|-------|-------|
| Height | 48px | — |
| Layout | Horizontal auto-layout | — |
| Padding left/right | 0px | — |
| Padding top/bottom | 8px | — |
| Item spacing | 8px | — |
| Corner radius | 0px | — |
| Fill | None (transparent) | — |

### State Layer (Inner Pill)
| Property | Value | Token |
|----------|-------|-------|
| Height | 40px | — |
| Layout | Horizontal auto-layout, vertically centered | — |
| Padding left/right | 12px | `padding/padding-x-component-small-3` |
| Corner radius | 999px (pill) | `radius-full` |
| Item spacing | 8px | — |

### Menu Icon
| Property | Value | Token |
|----------|-------|-------|
| Icon | `menu` (instance — 3 horizontal lines) | — |
| Size | 24×24px | `size/size-icon-default` (on Hover) |
| Stroke weight | 1.7px | `stroke/stroke-large-1` |

## Typography

### Text Label
| Property | Value | Token |
|----------|-------|-------|
| Text style | Body/Default/Medium | — |
| Font family | Merchant Var | `font-family` |
| Font size | 17px | `Body/Default/Size` |
| Line height | 24px | `Body/Default/Line Height` |
| Content | "Menu" | — |

## Color Tokens by State

### State Layer Fill
| State | Token |
|-------|-------|
| Enabled | None (transparent) |
| Hover | `surface/surface-info-hover` |
| Pressed | `surface/surface-info-active` |
| Focus | None (transparent) |
| Visited | None (transparent) |
| Disabled | None (transparent) |

### Menu Icon Stroke
| State | Token |
|-------|-------|
| Enabled | `body/body-emphasis` |
| Hover | `body/body-emphasis` |
| Pressed | `body/body-emphasis` |
| Focus | `body/body-emphasis` |
| Visited | `body/body-emphasis` |
| Disabled | `body/body-muted` |

### Text Label Fill
| State | Token |
|-------|-------|
| Enabled | `body/body-emphasis` |
| Hover | `body/body-emphasis` |
| Pressed | `body/body-emphasis` |
| Focus | `body/body-emphasis` |
| Visited | `body/body-emphasis` |
| Disabled | `body/body-muted` |

## Interactive States

### Focus
| Property | Value | Token |
|----------|-------|-------|
| Stroke target | State Layer (inner pill) | — |
| Stroke color | — | `line/line-focus` |
| Stroke weight | 2px | — |

## Notes

- The component displays a hamburger menu icon paired with a "Menu" text label inside a pill-shaped interactive surface
- Icon and text color remain `body/body-emphasis` across all interactive states except Disabled
- Only the State Layer background changes on Hover and Pressed to provide visual feedback
- Focus ring is applied to the State Layer (not the outer container)
