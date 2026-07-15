# Alert Component Specification

**Description:** Alerts communicate conditions, events, and responses to user actions.
**Total Variants:** 4

---

## Variant Properties

| Property | Values                                    |
|----------|------------------------------------------|
| **Type** | `Info`, `Success`, `Warning`, `Error`    |

## Instance Properties

| Property                 | Type    | Default Value                                                        |
|--------------------------|---------|----------------------------------------------------------------------|
| **Text**                 | TEXT    | `"Alert"`                                                            |
| **Supporting Text**      | TEXT    | `"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis"` |
| **Show Supporting Text** | BOOLEAN | `false`                                                             |
| **Show Close Button**    | BOOLEAN | `true`                                                              |
| **Show Button Set**      | BOOLEAN | `false`                                                             |

---

## Anatomy

The Alert is a **vertical auto-layout** frame containing up to three rows:

1. **Default Row** (always visible) -- horizontal layout containing:
   - **Icon & Text Pair** -- horizontal frame with the status icon (24x24 instance) and the title text, separated by `gap/gap-x-pair` (Dimensions)
   - **Close Button Touch Target** -- 48x48 tap target containing a 24x24 `close` icon instance. Visibility controlled by `Show Close Button`.

2. **Supporting Row** (hidden by default) -- contains the supporting text. Visibility controlled by `Show Supporting Text`.

3. **Button Row** (hidden by default) -- an instance containing two buttons: a primary "Action" button and a tertiary "Dismiss" button. Visibility controlled by `Show Button Set`.

### Root container

| Property        | Value                       | Token                        | Collection |
|-----------------|-----------------------------|------------------------------|------------|
| Layout          | Vertical auto-layout        | --                           | --         |
| Padding         | `4, 4, 4, 16` (T, R, B, L) | --                           | --         |
| Gap             | 4px                         | --                           | --         |
| Corner radius   | 8px                         | `radius-default`             | Shape      |
| Width           | Fixed (342px default)       | --                           | --         |
| Height          | Hug contents                | --                           | --         |
| Stroke weight   | 1px inside                  | --                           | --         |

---

## Type-Specific Tokens (Colors)

### Background Fill

| Type        | Token                              | Collection | Resolved Value       |
|-------------|-------------------------------------|------------|----------------------|
| **Info**    | `surface/surface-info`             | Colors     | `rgb(243, 247, 252)` |
| **Success** | `surface/surface-positive`         | Colors     | `rgb(238, 251, 246)` |
| **Warning** | `surface/surface-caution`          | Colors     | `rgb(252, 250, 235)` |
| **Error**   | `surface/surface-negative-hover`   | Colors     | `rgb(255, 240, 240)` |

### Border Stroke

| Type        | Token                     | Collection | Resolved Value       |
|-------------|---------------------------|------------|----------------------|
| **Info**    | `line/line-info`          | Colors     | `rgb(204, 223, 255)` |
| **Success** | `line/line-positive`      | Colors     | `rgb(181, 242, 219)` |
| **Warning** | `line/line-caution`       | Colors     | `rgb(247, 233, 168)` |
| **Error**   | `line/line-negative`      | Colors     | `rgb(255, 200, 194)` |

### Icon

| Type        | Icon Name            | Color Token               | Collection | Resolved Value       |
|-------------|----------------------|---------------------------|------------|----------------------|
| **Info**    | `info-circle`        | `body/body-info`          | Colors     | `rgb(14, 69, 227)`  |
| **Success** | `security-pass`      | `body/body-positive`      | Colors     | `rgb(0, 131, 83)`   |
| **Warning** | `warning-triangle`   | `body/body-caution`       | Colors     | `rgb(133, 107, 5)`  |
| **Error**   | `warning-circle`     | `body/body-negative`      | Colors     | `rgb(214, 41, 64)`  |

---

## Shared Tokens (all types)

### Title Text

| Property    | Token                          | Collection | Resolved Value       |
|-------------|--------------------------------|------------|----------------------|
| Text color  | `body/body-emphasis`           | Colors     | `rgb(5, 25, 88)`    |
| Font family | `font-family`                  | Fonts      | Merchant Var         |
| Font size   | `Body/Default/Size`            | Fonts      | 17px                 |
| Line height | `Body/Default/Line Height`     | Fonts      | 24px                 |

### Supporting Text

| Property    | Token                            | Collection | Resolved Value       |
|-------------|----------------------------------|------------|----------------------|
| Text color  | `body/body-emphasis`             | Colors     | `rgb(5, 25, 88)`    |
| Font family | `font-family`                    | Fonts      | Merchant Var         |
| Font size   | `Body/Supporting/Size`           | Fonts      | 15px                 |
| Line height | `Body/Supporting/Line Height`    | Fonts      | 20px                 |

### Close Button Icon

| Property      | Token                    | Collection | Resolved Value       |
|---------------|--------------------------|------------|----------------------|
| Stroke color  | `body/body-emphasis`     | Colors     | `rgb(5, 25, 88)`    |
| Stroke weight | `stroke/stroke-default`  | Dimensions | 1.4px                |

### Spacing

| Element                  | Property     | Token                             | Collection |
|--------------------------|--------------|------------------------------------|------------|
| Icon & Text Pair         | Gap          | `gap/gap-x-pair`                  | Dimensions |
| Button Row               | Gap          | `gap/gap-row-small`               | Dimensions |
| Button Row               | Padding bottom | `dimension-12`                  | Dimensions |

### Button Set (when visible)

Contains two buttons using the Button component:

| Button       | Fill Token               | Text Token                | Collection |
|--------------|--------------------------|---------------------------|------------|
| **Button 1** (Primary)  | `primary/primary`       | `primary/on-primary`     | Colors     |
| **Button 2** (Tertiary) | `tertiary/tertiary`     | `tertiary/on-tertiary`   | Colors     |

Both buttons use:
- Corner radius: `radius-full` (Shape)
- Height: `height/height-component-small3` (Dimensions)
- Horizontal padding: `padding/padding-x-component-small-2` (Dimensions)
- Gap: `gap/gap-x-component-default` (Dimensions)
- Font: `font-family` / `Label/Small 1/Size` / `Label/Small 1/Line Height` (Fonts)

---

## Key Behaviors

1. **Type-driven color theming** -- Each type maps to a coordinated set of semantic color tokens for background (`surface/*`), border (`line/*`), and icon (`body/*`).
2. **Progressive disclosure** -- Supporting text and button set are hidden by default and toggled via boolean properties, keeping the default alert compact.
3. **Consistent text styling** -- Title and supporting text both use `body/body-emphasis` for color but different typography scales (`Body/Default` vs `Body/Supporting`).
4. **Large touch target** -- The close button has a 48x48 touch target wrapping a 24x24 icon, meeting accessibility tap-target guidelines.
5. **Token-driven** -- All colors, radii, spacing, and typography are bound to design tokens, ensuring the component adapts to theme/mode changes.
