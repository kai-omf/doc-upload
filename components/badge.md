# Badge Component Specification

**Description:** Badges show notifications, counts, or status information on navigation items and icons.
**Total Variants:** 2

---

## Variant Properties

| Property | Values           |
|----------|-----------------|
| **Size** | `Small`, `Large` |

There are no additional instance properties (no text override, no icon swap).

---

## Anatomy

### Small

A simple **dot indicator** -- a 6x6 circle with no children or text content. Used to signal the presence of a notification without a count.

### Large

A **numbered badge** -- a 16px-tall pill containing a centered text label (defaults to `"1"`). Uses vertical auto-layout to center the number. Has a `minWidth` of 16px so the badge remains circular for single-digit numbers and expands horizontally for multi-digit values.

---

## Token Reference

### Background Fill (both sizes)

| Property       | Token                              | Collection | Resolved Value       |
|----------------|-------------------------------------|------------|----------------------|
| Fill color     | `body/body-attention`              | Colors     | `rgb(214, 41, 64)`  |

### Corner Radius (both sizes)

| Property       | Token             | Collection | Notes            |
|----------------|-------------------|------------|------------------|
| All corners    | `radius-full`     | Shape      | Resolves to 999 (full pill) |

### Text (Large only)

| Property    | Token                          | Collection | Resolved Value       |
|-------------|--------------------------------|------------|----------------------|
| Text color  | `primary/on-primary`           | Colors     | `rgb(255, 255, 255)` |
| Font family | `font-family`                  | Fonts      | Merchant Var         |
| Font size   | `Label/Small 3/Size`           | Fonts      | 11px                 |
| Line height | `Label/Small 3/Line Height`    | Fonts      | 16px                 |

---

## Size Specifications

| Property          | Small  | Large             |
|-------------------|--------|-------------------|
| **Width**         | 6px (fixed) | HUG (min 16px) |
| **Height**        | 6px (fixed) | 16px (fixed)   |
| **Corner radius** | `radius-full` | `radius-full` |
| **Padding**       | --     | 4px all sides     |
| **Layout**        | None   | Vertical, center-center |
| **Has text**      | No     | Yes (`"1"`)       |
| **Font size**     | --     | `Label/Small 3/Size` (11px) |
| **Font style**    | --     | Merchant Var, Regular |
| **Letter spacing**| --     | 0%                |

---

## Key Behaviors

1. **Dot vs. numbered** -- `Small` is a plain dot indicator (no text); `Large` displays a count.
2. **Token-driven colors** -- Background uses `body/body-attention` and text uses `primary/on-primary`, both from the Colors collection. These will adapt if the design system modes change.
3. **Pill shape** -- Both sizes use the `radius-full` shape token (999) for a fully rounded shape.
4. **Auto-expanding width** -- The Large badge hugs its text content with a 16px minimum width, so single digits render as a circle while multi-digit numbers expand the pill horizontally.
5. **Typography tokens** -- The count label is bound to the `Label/Small 3` typography tokens from the Fonts collection (`Size`, `Line Height`, `font-family`), ensuring it stays in sync with the type system.
