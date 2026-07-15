# Linear Progress

**Description:** Linear Progress visualizes a data value on a linear axis.

---

## Variants

| Property | Type | Options | Default |
|----------|------|---------|---------|
| Sample Value | Variant | `Low`, `Medium`, `High` | `Low` |
| Size | Variant | `Default`, `Desktop` | `Default` |

---

## Layout

### Container

| Property | Token | Default Size | Desktop Size |
|----------|-------|-------------|--------------|
| Layout | Vertical (auto-layout) | — | — |
| Item spacing | `gap/gap-y-pair` | 8px | 8px |
| Width | — | 311px | 560px |
| Height | — | 130px | 150px |

---

## Anatomy

    Linear Progress
    ├── Data Visual (Default) / Data Visual and Labels (Desktop)
    │   ├── Labels (horizontal)
    │   │   ├── Min Score
    │   │   └── Max Score
    │   ├── Linear Bar / Data Visual (Desktop)
    │   │   ├── Track (gradient-filled rectangle)
    │   │   └── Value Indicator (vector line marking current value)
    │   └── Data Value (large numeric display)
    └── Supporting Information (horizontal)
        ├── Value Change (e.g. "+32 pts")
        ├── Connecting Text (e.g. "since last update on")
        └── Date Updated (e.g. "03/01/25")

---

## Track (Progress Bar)

### Default Size

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Height | — | 14px |
| Corner radius | — | 8px |
| Fill | Linear gradient | — |
| Gradient stop 1 | `core/blue/500` | `#0E45E3` (position: ~20%) |
| Gradient stop 2 | `core/green/medium` | `#51DBA9` (position: ~86%) |

### Desktop Size

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Height | — | 18px |
| Corner radius | `dimension-12` | 12px |
| Fill | Linear gradient (same as Default) | — |
| Gradient stop 1 | `core/blue/500` | `#0E45E3` |
| Gradient stop 2 | `core/green/medium` | `#51DBA9` |

---

## Value Indicator

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Type | Vector (horizontal line) | — |
| Stroke color | `line/line-emphasis` | `#62738C` |
| Stroke weight | 2px | — |
| Stroke cap | Round | — |
| Width | 28px (Default) / 30px (Desktop) | — |

The Value Indicator is a thin vertical tick mark positioned along the track to mark the current value position.

---

## Typography

### Labels (Min/Max Score)

| Property | Token / Style | Default | Desktop |
|----------|---------------|---------|---------|
| Text style | `Label/Small 1/Regular` | — | — |
| Font family | `font-family` | Merchant Var | Merchant Var |
| Font size | `Label/Small 1/Size` | 15px | 15px |
| Line height | `Label/Small 1/Line Height` | 24px | 24px |
| Color | `core/blue/900` | — | — |

### Data Value (Current Score)

| Property | Token / Style | Default | Desktop |
|----------|---------------|---------|---------|
| Text style | `Data/Primary` | — | — |
| Font family | `font-family` | Merchant Var | Merchant Var |
| Font size | `Data/Primary/Size` | 32px | 48px |
| Line height | `Data/Primary/Line Height` | 40px | 56px |
| Color | `core/blue/950` | — | — |

### Supporting Information

| Property | Token / Style | Default | Desktop |
|----------|---------------|---------|---------|
| Text style | `Body/Supporting/Regular` (Default) | — | — |
| Font family | `font-family` (Default) / `core/FontPrimary` (Desktop) | Merchant Var | — |
| Font size | `Body/Supporting/Size` (Default) | 15px | 16px |
| Line height | `Body/Supporting/Line Height` (Default) | 20px | 24px |
| Layout | Horizontal | — | — |
| Item spacing | `gap/gap-x-component-small` | 4px | 4px |

---

## Color Tokens

| Element | Token | Hex |
|---------|-------|-----|
| Track gradient start | `core/blue/500` | `#0E45E3` |
| Track gradient end | `core/green/medium` | `#51DBA9` |
| Value Indicator stroke | `line/line-emphasis` | `#62738C` |
| Min/Max labels | `core/blue/900` | — |
| Data Value | `core/blue/950` | — |
| Value Change (positive) | `body/body-positive` | `#008353` |
| Connecting/Date text | `core/coolGrey/700` | — |

---

## Sample Value Positions

The `Sample Value` variant property controls the position of the Value Indicator along the track and the displayed numeric value:

| Sample Value | Displayed Score | Position on Track |
|-------------|-----------------|-------------------|
| Low | 400 | ~0% (near minimum) |
| Medium | 625 | ~50% (midpoint) |
| High | 737 | ~75% (toward maximum) |

The min/max range labels are fixed at **400** (min) and **850** (max).

---

## Size Differences Summary

| Aspect | Default | Desktop |
|--------|---------|---------|
| Container width | 311px | 560px |
| Track height | 14px | 18px |
| Track corner radius | 8px | 12px (`dimension-12`) |
| Data Value font size | 32px | 48px |
| Supporting text font size | 15px | 16px |
| Supporting text line height | 20px | 24px |
