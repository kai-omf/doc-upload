# Popover

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Show Heading | Variant | True | True, False |
| Position | Variant | Below | Above, Below, Left, Right |
| Pointer | Variant | Centered | Centered, 25%, 75% |

## Structure

    Popover (Component Set)
    └── [Variant] (auto-layout, direction depends on Position)
        ├── Pointer Position Track (FRAME)
        │   └── Pointer (VECTOR, triangle arrow)
        └── Surface (FRAME)
            ├── Close Button Boundary (FRAME, HORIZONTAL)
            │   └── Heading Text (TEXT) — only when Show Heading=True
            │   └── Body Text (TEXT) — only when Show Heading=False
            ├── Body Text (TEXT) — only when Show Heading=True
            └── Close Button (FRAME, absolute positioned)
                └── close (INSTANCE, 20×20)

## Layout

### Component Root
| Position | Layout Direction | Description |
|----------|-----------------|-------------|
| Below | Vertical | Pointer track on top, surface below |
| Above | Vertical | Surface on top, pointer below |
| Left | Horizontal | Surface on left, pointer track on right |
| Right | Horizontal | Pointer track on left, surface on right |

### Surface
| Property | Value | Token |
|----------|-------|-------|
| Layout | Vertical auto-layout (with heading) / Horizontal (without heading) | — |
| Item spacing | 8px | `gap/gap-y-pair` |
| Padding | 16px all sides | `padding/padding-surface-base` |
| Corner radius | 12px | `radius-medium-1` or `Border Radius/large` |
| Fill | White | `surface/surface-base` |
| Width | 320px (vertical positions) / 312px (horizontal positions) | — |

### Pointer Position Track (Below/Above positions)
| Property | Value |
|----------|-------|
| Width | 320px (full width of surface) |
| Height | 8px |
| Padding left/right | 80px |
| Pointer alignment (Centered) | counterAxisAlignItems: CENTER |
| Pointer alignment (25%) | counterAxisAlignItems: MIN |
| Pointer alignment (75%) | counterAxisAlignItems: MAX |

### Pointer Position Track (Left/Right positions)
| Property | Value |
|----------|-------|
| Width | 8px |
| Height | matches surface height |
| Padding top/bottom | 32px |
| Pointer alignment (Centered) | primaryAxisAlignItems: CENTER |

### Pointer (Arrow)
| Property | Value | Token |
|----------|-------|-------|
| Size | 16×8px | — |
| Fill | White | `surface/surface-base` |

### Close Button
| Property | Value |
|----------|-------|
| Touch target | 44×44px |
| Icon size | 20×20px |
| Position | Absolute, top-right corner of surface |

### Close Button Boundary
| Property | Value |
|----------|-------|
| Padding right | 28px (reserves space for close button) |

## Typography

### Heading Text
| Property | Value | Token |
|----------|-------|-------|
| Text style | Body/Supporting/Medium | — |
| Font family | Merchant Var | `font-family` |
| Font size | 15px | `Body/Supporting/Size` |
| Line height | 20px | `Body/Supporting/Line Height` |
| Color | — | `body/body-emphasis` |

### Body Text
| Property | Value | Token |
|----------|-------|-------|
| Text style | Body/Caption/Regular | — |
| Font family | Merchant Var | `font-family` |
| Font size | 14px | `Body/Caption/Size` |
| Line height | 20px | `Body/Caption/Line Height` |
| Color | — | `body/body-default` |

## Close Icon
| Property | Value | Token |
|----------|-------|-------|
| Icon | `close` (instance) | — |
| Size | 20×20px | — |
| Stroke color | — | `body/body-emphasis` |
| Stroke weight | 1.4px | `stroke/stroke-default` |

## Effects

### Drop Shadow
| Property | Value |
|----------|-------|
| Type | Drop Shadow |
| X offset | 4px |
| Y offset | 12px |
| Blur radius | 30px |
| Spread | 0px |
| Color | rgba(107, 107, 103, 0.15) |
| Blend mode | Normal |
