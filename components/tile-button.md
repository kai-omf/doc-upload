# Tile Button

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Small | Small, Medium, Large |
| State | Variant | Default | Default, Hover, Focus |
| Icon Small | Instance Swap | `chat-lines` | Any icon component |
| Icon Medium | Instance Swap | `chat-lines` | Any icon component |
| Icon Large | Instance Swap | `chat-lines` | Any icon component |
| Text Small | Text | "Tile Btn" | — |
| Text Medium | Text | "Tile Button" | — |
| Text Large | Text | "Tile Button" | — |
| Show Sub Text | Boolean | true | — |
| Supporting Text | Text | "(Optional) Add up to 3 lines of supporting text to this tile." | — |

## Structure

    === Small ===

    Tile Button (VERTICAL auto-layout)
    ├── Tile-Btn (FRAME, square)
    │   └── Icon (INSTANCE)
    └── Label (TEXT)

    === Medium ===

    Tile Button (VERTICAL auto-layout, card with padding)
    ├── Icon (INSTANCE)
    └── Label (TEXT)

    === Large ===

    Tile Button (VERTICAL auto-layout, card with padding)
    ├── Icon-Container (FRAME, circle)
    │   └── Icon (INSTANCE)
    └── Title (FRAME)
        ├── Title (TEXT)
        └── Supporting Text (TEXT)

## Layout & Sizing by Size

### Small
| Property | Value | Token |
|----------|-------|-------|
| Overall size | 48×68px | — |
| Layout | Vertical auto-layout | — |
| Item spacing | 4px | `gap/gap-group-small` |
| Tile-Btn size | 48×48px | — |
| Tile-Btn padding | 14px all sides | — |
| Tile-Btn corner radius | 12px | `radius-medium-1` |

### Medium
| Property | Value | Token |
|----------|-------|-------|
| Overall size | ~103×72px | — |
| Layout | Vertical auto-layout | — |
| Item spacing | 4px | `gap/gap-group-small` |
| Padding | 12px all sides | `dimension-12` |
| Corner radius | 8px | `radius-default` |

### Large
| Property | Value | Token |
|----------|-------|-------|
| Overall size | 172×164px | — |
| Layout | Vertical auto-layout | — |
| Item spacing | 12px | `gap/gap-tile-small` |
| Padding | 16px all sides | `padding/padding-surface-base` |
| Corner radius | 12px | `radius-medium-1` |

## Icon

### Small / Medium
| Property | Value | Token |
|----------|-------|-------|
| Size | 20×20px | `size/size-icon-small1` |
| Stroke weight | 1.7px | `stroke/stroke-large-1` |
| Stroke color | — | `body/body-emphasis` |

### Large (with Icon Container)
| Property | Value | Token |
|----------|-------|-------|
| Icon Container size | 32×32px | — |
| Icon Container shape | Circle | `radius-full` |
| Icon size | 20×20px | `size/size-icon-small1` |

## Typography

### Small Label
| Property | Value | Token |
|----------|-------|-------|
| Text style | Label/Small 2/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 13px | `Label/Small 2/Size` |
| Line height | 16px | `Label/Small 2/Line Height` |
| Color | — | `body/body-emphasis` |

### Medium Label
| Property | Value | Token |
|----------|-------|-------|
| Text style | Label/Small 1/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 15px | `Label/Small 1/Size` |
| Line height | 24px | `Label/Small 1/Line Height` |
| Color | — | `body/body-emphasis` |

### Large Title
| Property | Value | Token |
|----------|-------|-------|
| Text style | Body/Default/Medium | — |
| Font family | Merchant Var | `font-family` |
| Font size | 17px | `Body/Default/Size` |
| Line height | 24px | `Body/Default/Line Height` |
| Color | — | `body/body-emphasis` |

### Large Supporting Text
| Property | Value | Token |
|----------|-------|-------|
| Text style | Body/Supporting/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 15px | `Body/Supporting/Size` |
| Line height | 20px | `Body/Supporting/Line Height` |
| Color | — | `body/body-default` |
| Visibility | Controlled by "Show Sub Text" boolean | — |

### Title Frame (Large)
| Property | Value | Token |
|----------|-------|-------|
| Item spacing | 4px | `gap/gap-group-small` |

## Color Tokens by State

### Container / Tile Fill
| Size | State | Token |
|------|-------|-------|
| Small | Default | `surface/surface-base` (on Tile-Btn sub-frame) |
| Small | Hover | `secondary/secondary-hover` (on Tile-Btn sub-frame) |
| Small | Focus | `surface/surface-base` (on Tile-Btn sub-frame) |
| Medium | Default | `surface/surface-base` |
| Medium | Hover | `secondary/secondary-hover` |
| Medium | Focus | `surface/surface-base` |
| Large | Default | `surface/surface-base` |
| Large | Hover | `secondary/secondary-hover` |
| Large | Focus | `surface/surface-base` |

### Icon Container Fill (Large only)
| State | Token |
|-------|-------|
| Default | `surface/surface-info-layer-1` |
| Hover | `surface/surface-base` |
| Focus | `surface/surface-info-layer-1` |

## Interactive States

### Focus
| Size | Stroke Target | Token | Weight |
|------|---------------|-------|--------|
| Small | Tile-Btn sub-frame | `line/line-focus` | 1px |
| Medium | Container | `line/line-focus` | 1px |
| Large | Container | `line/line-focus` | 1px |

## Effects

### Drop Shadow (Medium and Large only)
| Property | Value |
|----------|-------|
| Type | Drop Shadow |
| X offset | 6px |
| Y offset | 10px |
| Blur radius | 35px |
| Spread | 0px |
| Color | rgba(0, 0, 0, 0.07) |
| Blend mode | Normal |

## Notes

- Small size uses a separate inner "Tile-Btn" frame for the icon square, with the label below it outside the frame
- Medium and Large sizes are self-contained cards with internal padding
- Each size has its own Icon instance swap property (`Icon Small`, `Icon Medium`, `Icon Large`) and text property (`Text Small`, `Text Medium`, `Text Large`)
- The Large size includes an optional supporting text area (up to 3 lines) controlled by the "Show Sub Text" boolean
- Drop shadow is only present on Medium and Large sizes
