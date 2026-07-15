# Accordion Item Component Specification

**Description:** Accordions are expandable list items that let users reveal and hide content.
**Total Variants:** 6

---

## Variant Properties

| Property  | Values                           |
|-----------|----------------------------------|
| **Open**  | `False`, `True`                  |
| **State** | `Default`, `Hover`, `Focused`    |

## Instance Properties

| Property              | Type | Default Value                                                                  |
|-----------------------|------|--------------------------------------------------------------------------------|
| **Header Text**       | TEXT | `"How will I receive my funds?"`                                               |
| **Content Text**      | TEXT | `"Add content text related to the question or topic in the header text above."` |

---

## Anatomy

The Accordion Item is a **vertical auto-layout** frame with two children:

1. **Header** (always visible) — horizontal auto-layout containing:
   - **Summary Text** — the header/question text, fills available width
   - **Icon** — a 24x24 icon instance; `plus` when closed, `minus` when open

2. **Content** (visible only when `Open=True`) — vertical auto-layout containing:
   - **Details Text** — the expandable body content

### Structural differences by Open state

| Open State | Root container                                   | Header                                         | Content       | Icon    |
|------------|--------------------------------------------------|-------------------------------------------------|---------------|---------|
| **False**  | No fill, no stroke; acts as a simple wrapper     | Has its own fill, stroke, and corner radius      | Not rendered  | `plus`  |
| **True**   | Has fill and stroke (wraps both header + content)| No fill or stroke (inherits from root container) | Visible       | `minus` |

---

## Token Reference

### Corner Radius

| Element        | Token              | Collection | Resolved Value |
|----------------|---------------------|------------|----------------|
| Root container | `radius-large-1`   | Shape      | 16px           |
| Header         | `radius-large-1`   | Shape      | 16px           |

### Spacing & Padding

| Element        | Property       | Token                        | Collection | Resolved Value |
|----------------|---------------|-------------------------------|------------|----------------|
| Header         | Padding (all) | `padding/padding-surface-base`| Dimensions | 16px           |
| Header         | Gap           | `dimension-16`               | Dimensions | 16px           |
| Content        | Padding L/R   | `padding/padding-surface-base`| Dimensions | 16px           |
| Content        | Padding bottom| 16px                         | --         | 16px           |
| Root           | Gap           | 8px                          | --         | 8px            |

---

## State Tokens (Closed — `Open=False`)

When closed, styling is applied to the **Header** frame (the root has no fill or stroke).

| State       | Header Fill Token                  | Header Stroke Token      | Resolved Fill          | Resolved Stroke        |
|-------------|-------------------------------------|--------------------------|------------------------|------------------------|
| **Default** | `surface/surface-base`             | `line/line-muted`        | `rgb(255, 255, 255)`   | `rgb(232, 234, 236)`  |
| **Hover**   | `surface/surface-info-hover`       | `line/line-info`         | `rgb(231, 240, 255)`   | `rgb(204, 223, 255)`  |
| **Focused** | `surface/surface-info-hover`       | `line/line-focus`        | `rgb(231, 240, 255)`   | `rgb(172, 117, 255)`  |

All from the **Colors** collection.

## State Tokens (Open — `Open=True`)

When open, styling is applied to the **root container** (the Header has no fill or stroke).

| State       | Root Fill Token                    | Root Stroke Token        | Resolved Fill          | Resolved Stroke        |
|-------------|-------------------------------------|--------------------------|------------------------|------------------------|
| **Default** | `surface/surface-info`             | `line/line-info`         | `rgb(243, 247, 252)`   | `rgb(204, 223, 255)`  |
| **Hover**   | `surface/surface-info-hover`       | `line/line-info`         | `rgb(231, 240, 255)`   | `rgb(204, 223, 255)`  |
| **Focused** | `surface/surface-info-hover`       | `line/line-focus`        | `rgb(231, 240, 255)`   | `rgb(172, 117, 255)`  |

All from the **Colors** collection.

---

## Typography Tokens

### Summary Text (Header)

| Property    | Token                          | Collection | Resolved Value       |
|-------------|--------------------------------|------------|----------------------|
| Text color  | `body/body-emphasis`           | Colors     | `rgb(5, 25, 88)`    |
| Font family | `font-family`                  | Fonts      | Merchant Var         |
| Font size   | `Body/Default/Size`            | Fonts      | 17px                 |
| Line height | `Body/Default/Line Height`     | Fonts      | 24px                 |
| Font style  | --                             | --         | Regular              |

### Details Text (Content)

| Property    | Token                            | Collection | Resolved Value       |
|-------------|----------------------------------|------------|----------------------|
| Text color  | `body/body-strong`               | Colors     | --                   |
| Font family | `font-family`                    | Fonts      | Merchant Var         |
| Font size   | `Body/Supporting/Size`           | Fonts      | 15px                 |
| Line height | `Body/Supporting/Line Height`    | Fonts      | 20px                 |
| Font style  | --                               | --         | Regular              |

### Icon (plus / minus)

| Property     | Token                  | Collection | Resolved Value       |
|--------------|------------------------|------------|----------------------|
| Stroke color | `body/body-emphasis`   | Colors     | `rgb(5, 25, 88)`    |

---

## Key Behaviors

1. **Open/Closed structure swap** — When closed, the Header frame owns the fill, stroke, and rounding. When open, those move to the root container so the fill/stroke wraps both header and content as a unified card.
2. **Icon toggle** — The trailing icon swaps between `plus` (closed) and `minus` (open).
3. **Focus ring** — The focused state replaces the border stroke token with `line/line-focus` (`rgb(172, 117, 255)` purple), providing a visible keyboard-focus indicator.
4. **Hover state** — Both open and closed share the same hover fill token (`surface/surface-info-hover`), shifting from the default white/light-blue to a slightly deeper blue tint.
5. **Content area** — Only rendered when `Open=True`. Uses the same horizontal padding as the header (`padding/padding-surface-base`) for alignment, with no top padding (content sits directly below the header text).
6. **Typography hierarchy** — Header uses `Body/Default` scale (17px); content uses `Body/Supporting` scale (15px), with a slightly muted color token (`body/body-strong` vs `body/body-emphasis`).
7. **Width** — Fixed width container; height hugs content in both states.
