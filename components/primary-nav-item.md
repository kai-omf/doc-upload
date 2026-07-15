# .Primary Nav Item

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Icon | Instance Swap | (default icon) | Any icon component |
| State | Variant | Enabled | Enabled, Hover, Pressed, Current, Disabled, Visited, Focus |

## Structure

    .Primary Nav Item (Component Set)
    └── [State Variant] (VERTICAL auto-layout)
        ├── Text Label (TEXT)
        └── Current Indicator (VECTOR, horizontal line)

## Layout & Sizing

### Container
| Property | Value | Token |
|----------|-------|-------|
| Layout | Vertical auto-layout | — |
| Item spacing | 8px | — |
| Padding left/right | 4px | — |
| Padding top | 12px | — |
| Padding bottom | 12px (Enabled, Focus, Visited, Disabled) / 4px (Hover, Pressed, Current) | — |
| Corner radius | 0px (default) / 8px (Focus state) | — |
| Fill | None (transparent) | — |

## Typography

### Text Label
| Property | Value | Token |
|----------|-------|-------|
| Text style | Label/Default/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 17px | `Label/Default/Size` |
| Line height | 24px | `Label/Default/Line Height` |

## Color Tokens by State

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

## Current Indicator (Underline)

A horizontal vector line below the text label. Hidden by default; visible in Hover, Pressed, and Current states.

### Visibility
| State | Visible |
|-------|---------|
| Enabled | No |
| Hover | Yes |
| Focus | No |
| Pressed | Yes |
| Current | Yes |
| Visited | No |
| Disabled | No |

### Indicator Stroke Color
| State | Token | Stroke Weight |
|-------|-------|---------------|
| Hover | `primary/primary-hover` | 1px |
| Pressed | `primary/primary-active` | 1px |
| Current | `line/line-selected` | 2px |
| (hidden states) | `primary/primary` | 4px |

### Indicator Width
- Matches the width of the Text Label (auto-sized to text content)

## Interactive States

### Focus
| Property | Value | Token |
|----------|-------|-------|
| Stroke color | — | `line/line-focus` |
| Stroke weight | 2px | — |
| Corner radius | 8px | — |
| Current Indicator | Hidden | — |

## Notes

- The component uses a simple vertical stack: text label on top, current indicator line below
- In Hover and Pressed states, padding-bottom reduces from 12px to 4px to accommodate the visible indicator
- The `Icon` instance swap property is defined but no icon instance is visible in the default variants — likely used in a parent composition or alternate configuration
