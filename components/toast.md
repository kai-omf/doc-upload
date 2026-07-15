# Toast

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Text | Text | "Toast" | Primary message text |
| Supporting Text | Text | "Ut enim ad minim veniam..." | Secondary descriptive text |
| Show Supporting Text | Boolean | false | Toggles supporting text row visibility |
| Type | Variant | Info | Info, Success, Warning, Error |

## Structure

    Toast (Component Set)
    └── [Type Variant] (VERTICAL auto-layout)
        ├── Default Row (HORIZONTAL auto-layout)
        │   ├── Icon & Text Pair (HORIZONTAL auto-layout)
        │   │   ├── [Type Icon] (INSTANCE, 24×24)
        │   │   └── Default Text (TEXT)
        │   └── Close Button Touch Target (FRAME, 48×48)
        │       └── close (INSTANCE, 24×24)
        └── Supporting Row (HORIZONTAL auto-layout, hidden by default)
            └── Supporting Text (TEXT)

## Layout & Spacing

### Container
| Property | Value | Token |
|----------|-------|-------|
| Layout | Vertical auto-layout | — |
| Item spacing | 4px | — |
| Padding top | 4px | — |
| Padding bottom | 4px | — |
| Padding left | 16px | — |
| Padding right | 4px | — |
| Corner radius | 8px | `radius-default` |

### Icon & Text Pair
| Property | Value | Token |
|----------|-------|-------|
| Layout | Horizontal auto-layout | — |
| Item spacing | 8px | `gap/gap-x-pair` (Info, Success) / `gap/gap-y-pair` (Warning, Error) |
| Padding top | 12px | — |
| Padding bottom | 12px | — |
| Padding right | 12px | — |

### Close Button Touch Target
| Property | Value | Token |
|----------|-------|-------|
| Size | 48×48px | — |
| Layout | Horizontal auto-layout, centered | — |

### Supporting Row
| Property | Value | Token |
|----------|-------|-------|
| Layout | Horizontal auto-layout | — |
| Item spacing | 8px | — |
| Padding right | 12px | — |
| Padding bottom | 12px | — |

## Typography

### Default Text (Primary Message)
| Property | Value | Token |
|----------|-------|-------|
| Text style | Body/Default/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 17px | `Body/Default/Size` |
| Line height | 24px | `Body/Default/Line Height` |

### Supporting Text
| Property | Value | Token |
|----------|-------|-------|
| Text style | Body/Supporting/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 15px | `Body/Supporting/Size` |
| Line height | 20px | `Body/Supporting/Line Height` |

## Color Tokens by Variant

### Container Fill
| Variant | Token |
|---------|-------|
| Info | `surface/surface-inverse-base` |
| Success | `body/body-positive` |
| Warning | `body/body-caution` |
| Error | `surface/surface-negative-inverse` |

### Default Text Fill
| Variant | Token |
|---------|-------|
| Info | `body/body-inverse-emphasis` |
| Success | `body/body-inverse-emphasis` |
| Warning | `body/body-inverse-emphasis` |
| Error | `body/body-inverse-moderate` |

### Icon Stroke Color
| Variant | Token |
|---------|-------|
| Info | `body/body-inverse-emphasis` |
| Success | `body/body-inverse-emphasis` |
| Warning | `body/body-inverse-emphasis` |
| Error | `body/body-inverse-moderate` |

### Close Icon
| Property | Token |
|----------|-------|
| Stroke color | `body/body-inverse-moderate` |
| Stroke weight | `stroke/stroke-default` |

### Supporting Text Fill
| Property | Token |
|----------|-------|
| Fill | `body/body-emphasis` |

## Icons by Variant

| Variant | Icon Component |
|---------|---------------|
| Info | `info-circle` |
| Success | `security-pass` |
| Warning | `warning-triangle` |
| Error | `warning-circle` |

## Close Button
| Property | Value |
|----------|-------|
| Icon | `close` (instance) |
| Size | 24×24px |
| Touch target | 48×48px |
