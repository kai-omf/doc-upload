# Toggle

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Value | Variant | Off | On, Off |
| State | Variant | Enabled | Enabled, Hover, Focus, Pressed, Disabled |
| Show Icon | Boolean | true | — |

## Structure

    Toggle (Component Set)
    └── [Variant] (HORIZONTAL auto-layout, pill shape)
        ├── Handle (ELLIPSE or FRAME with pill radius)
        │   └── check (INSTANCE, 16×16) — only in Value=On variants
        └── [Focus state adds]:
            └── Inner Line (FRAME, pill shape, 1px inset stroke)
                └── Handle

## Layout & Sizing

### Track (Container)
| Property | Value | Token |
|----------|-------|-------|
| Width | 52px | — |
| Height | 32px | `height/height-component-small3` |
| Layout | Horizontal auto-layout | — |
| Padding | 2px all sides | — |
| Corner radius | 999px (pill) | `radius-full` |
| Item spacing | 10px | — |

### Handle
| Property | Value | Token |
|----------|-------|-------|
| Width | 28px | — |
| Height | 28px | — |
| Shape | Circle (ELLIPSE when Off, FRAME with radius-full when On) | — |
| Corner radius | 999px (pill) | `radius-full` (On variants) |

### Check Icon (On state only)
| Property | Value | Token |
|----------|-------|-------|
| Size | 16×16px | `size/size-icon-small2` |
| Stroke weight | 1.4px | `stroke/stroke-default` |

## Color Tokens

### Track Fill

| Value | State | Token |
|-------|-------|-------|
| Off | Enabled | `core/coolGrey/500` |
| Off | Hover | `core/coolGrey/600` |
| Off | Focus | `core/coolGrey/500` |
| Off | Pressed | `core/coolGrey/600` |
| Off | Disabled | `core/coolGrey/300` |
| On | Enabled | `body/body-selected` |
| On | Hover | `core/blue/800` |
| On | Focus | `body/body-selected` |
| On | Pressed | `core/blue/950` |
| On | Disabled | `core/coolGrey/400` |

### Handle Fill

| Value | State | Token |
|-------|-------|-------|
| Off | Enabled | `surface/surface-base` |
| Off | Hover | `surface/surface-base` |
| Off | Focus | `surface/surface-base` |
| Off | Pressed | `body/body-inverse` |
| Off | Disabled | `surface/surface-base` |
| On | Enabled | `surface/surface-base` |
| On | Hover | `surface/surface-base` |
| On | Focus | `surface/surface-base` |
| On | Pressed | `body/body-inverse` |
| On | Disabled | `surface/surface-base` |

### Check Icon Stroke (On state)

| State | Token |
|-------|-------|
| Enabled | `body/body-selected` |
| Hover | `body/body-selected` |
| Focus | `body/body-selected` |
| Pressed | `body/body-selected` |
| Disabled | `body/body-muted` |

## Interactive States

### Hover Ring
| Property | Value | Token |
|----------|-------|-------|
| Stroke weight | 4px | — |
| Stroke color (Off) | `core/blue/100` | — |
| Stroke color (On) | `core/blue/100` | — |

### Focus Ring
| Property | Value | Token |
|----------|-------|-------|
| Outer stroke weight | 3px | — |
| Outer stroke color | `line/line-focus` | — |
| Inner line stroke weight | 1px | — |
| Inner line stroke color (Off) | `surface/surface-base` | — |
| Inner line stroke color (On) | `core/neutral/white` | — |
| Padding | 0px (focus) vs 2px (other states) | — |

### Pressed Ring
| Property | Value | Token |
|----------|-------|-------|
| Stroke weight | 4px | — |
| Stroke color | `core/blue/200` | — |

## Alignment Behavior

- Value=Off: Handle is aligned to the left (start of the horizontal auto-layout)
- Value=On: Handle is aligned to the right (end of the horizontal auto-layout)
