# .Back Button

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| State | Variant | Enabled | Enabled, Hover, Pressed, Focus, Visited, Disabled |

## Structure

    .Back Button (Component Set)
    └── [State Variant] (HORIZONTAL auto-layout)
        └── State Layer (FRAME, circle)
            └── arrow-left (INSTANCE, 32×32)

## Layout & Sizing

### Container (Outer)
| Property | Value | Token |
|----------|-------|-------|
| Size | 48×48px | — |
| Layout | Horizontal auto-layout | — |
| Padding left/right | 4px | — |
| Padding top/bottom | 8px | — |
| Item spacing | 8px | — |
| Corner radius | 0px | — |
| Fill | None (transparent) | — |

### State Layer (Inner Circle)
| Property | Value | Token |
|----------|-------|-------|
| Size | 40×40px | — |
| Layout | Horizontal auto-layout, centered | — |
| Padding left/right | 4px | — |
| Corner radius | 999px (pill/circle) | `radius-full` |

### Arrow Icon
| Property | Value | Token |
|----------|-------|-------|
| Icon | `arrow-left` (instance) | — |
| Size | 32×32px | `size/size-icon-large1` |
| Stroke weight | 1.7px | `stroke/stroke-large-1` |

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

### Arrow Icon Stroke
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
| Stroke target | State Layer (inner circle) | — |
| Stroke color | — | `line/line-focus` |
| Stroke weight | 2px | — |

## Notes

- The back button is an icon-only circular button with no text label
- The State Layer acts as the interactive/hover surface with a pill shape
- Focus ring is applied to the State Layer (not the outer container)
- Hover and Pressed states add a background fill to the State Layer while keeping the icon color unchanged
