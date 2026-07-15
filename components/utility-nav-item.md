# .Utility Nav Item

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Icon | Instance Swap | `user-new` | Any icon component |
| Show Label | Boolean | true | — |
| State | Variant | Enabled | Enabled, Hover, Focus, Pressed, Current, Visited, Disabled |

## Structure

    .Utility Nav Item (Component Set)
    └── [State Variant] (auto-layout)
        ├── Icon Container (FRAME, circle)
        │   └── [Icon] (INSTANCE, 20×20)
        └── Text Label (TEXT)

    Note: Hover, Pressed, and Current states wrap children in an
    intermediate "Row" frame (HORIZONTAL auto-layout).

## Layout & Sizing

### Container
| Property | Value | Token |
|----------|-------|-------|
| Layout | Horizontal auto-layout | — |
| Item spacing | 8px | — |
| Padding | 8px all sides | — |
| Corner radius | 12px | `radius-medium-1` |
| Fill | None (transparent) | — |

### Icon Container
| Property | Value | Token |
|----------|-------|-------|
| Size | 32×32px | — |
| Shape | Circle | `radius-full` |
| Layout | Horizontal auto-layout, centered | — |

### Icon
| Property | Value | Token |
|----------|-------|-------|
| Size | 20×20px | `size/size-icon-small1` |
| Stroke weight | 1.4px | `stroke/stroke-default` |

## Typography

### Text Label
| Property | Value | Token |
|----------|-------|-------|
| Text style | Label/Default/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 17px | `Label/Default/Size` |
| Line height | 24px | `Label/Default/Line Height` |

## Color Tokens by State

### Icon Container Fill
| State | Token |
|-------|-------|
| Enabled | `surface/surface-info-layer-1` |
| Hover | `surface/surface-info-layer-1` |
| Focus | `surface/surface-info-layer-1` |
| Pressed | `surface/surface-info-active` |
| Current | `body/body-selected` |
| Visited | `surface/surface-info-layer-1` |
| Disabled | `surface/surface-info` |

### Icon Stroke Color
| State | Token |
|-------|-------|
| Enabled | `body/body-default` |
| Hover | `primary/primary-hover` |
| Focus | `body/body-default` |
| Pressed | `primary/primary-active` |
| Current | `body/body-inverse` |
| Visited | `body/body-default` |
| Disabled | `body/body-muted` |

### Text Label Fill
| State | Token |
|-------|-------|
| Enabled | `body/body-default` |
| Hover | `primary/primary-hover` |
| Focus | `body/body-default` |
| Pressed | `primary/primary-active` |
| Current | `body/body-selected` |
| Visited | `body/body-default` |
| Disabled | `body/body-muted` |

## Interactive States

### Focus
| Property | Value | Token |
|----------|-------|-------|
| Stroke color | — | `line/line-focus` |
| Stroke weight | 2px | — |

### Current (Selected)
- Icon container uses `body/body-selected` fill (solid brand color)
- Icon uses `body/body-inverse` for both fill and stroke (white on selected background)
- Icon component swaps to `user` (filled variant) instead of `user-new` (outline)

## Notes

- The `Show Label` boolean property toggles the visibility of the Text Label
- The `Icon` instance swap property allows any icon to be placed in the Icon Container
- In Hover, Pressed, and Current states the component uses a vertical layout (itemSpacing=4) with an intermediate "Row" frame wrapping the icon and label horizontally
- In Enabled, Visited, Focus, and Disabled states the component uses a flat horizontal layout
