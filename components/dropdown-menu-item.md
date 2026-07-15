# .Dropdown Menu Item Component Specification (Desktop)

**Total Variants (Desktop):** 5

---

## Variant Properties (Desktop only)

| Property  | Values                                          |
|-----------|-------------------------------------------------|
| **State** | `Enabled`, `Hover`, `Pressed`, `Focus`, `Disabled` |
| **Device**| `Desktop` (this spec excludes `Mobile`)         |

## Instance Properties

| Property            | Type    | Default Value  |
|---------------------|---------|----------------|
| **List Item Text**  | TEXT    | `"Menu Item"`  |
| **Sub-Label Text**  | TEXT    | `"Sub-Label"`  |
| **Sub-Label**       | BOOLEAN | `false`        |
| **Icon**            | BOOLEAN | `false`        |

---

## Anatomy

The Dropdown Menu Item is a **horizontal auto-layout** frame containing:

1. **Icon** (`star`) — a 24x24 icon instance, hidden by default. Visibility controlled by the `Icon` boolean property.
2. **Text Group** — a vertical auto-layout frame containing:
   - **List Item Text** — the primary menu item label, driven by the `List Item Text` text property.
   - **List Item Sub-Text** — a secondary description line, hidden by default. Visibility controlled by the `Sub-Label` boolean property; content driven by `Sub-Label Text`.

---

## Token Reference

### Root Container

| Property        | Token                                 | Collection | Resolved Value |
|-----------------|---------------------------------------|------------|----------------|
| Corner radius   | `radius-medium-1`                     | Shape      | 12px           |
| Padding (T/B)   | 8px                                   | --         | --             |
| Padding (L/R)   | `padding/padding-x-component-small-3` | Dimensions | 12px           |
| Gap             | `gap/gap-row-default`                 | Dimensions | 16px           |
| Width           | Fixed (358px default)                 | --         | --             |
| Height          | Hug contents (48px with single line)  | --         | --             |

### List Item Text

| Property    | Token                          | Collection | Resolved Value       |
|-------------|--------------------------------|------------|----------------------|
| Font family | `font-family`                  | Fonts      | Merchant Var         |
| Font size   | `Body/Default/Size`            | Fonts      | 17px                 |
| Line height | `Body/Default/Line Height`     | Fonts      | 24px                 |
| Font style  | --                             | --         | Regular              |

### List Item Sub-Text

| Property    | Token                            | Collection | Resolved Value       |
|-------------|----------------------------------|------------|----------------------|
| Font family | `font-family`                    | Fonts      | Merchant Var         |
| Font size   | `Body/Supporting/Size`           | Fonts      | 15px                 |
| Line height | `Body/Supporting/Line Height`    | Fonts      | 20px                 |
| Font style  | --                               | --         | Regular              |

### Text Group

| Property | Token                    | Collection | Resolved Value |
|----------|--------------------------|------------|----------------|
| Gap      | `gap/gap-group-small`    | Dimensions | 4px            |

### Icon

| Property | Token                      | Collection | Resolved Value |
|----------|----------------------------|------------|----------------|
| Size     | `size/size-icon-default`   | Dimensions | 24px           |

---

## State Tokens

### Root Container

| State        | Fill Token                      | Fill Color             | Stroke Token       | Stroke Color           | Stroke Weight |
|--------------|---------------------------------|------------------------|---------------------|------------------------|---------------|
| **Enabled**  | --                              | None                   | --                  | None                   | --            |
| **Hover**    | `surface/surface-base-hover`    | `rgb(243, 247, 252)`   | --                  | None                   | --            |
| **Pressed**  | `surface/surface-info-active`   | `rgb(204, 223, 255)`   | --                  | None                   | --            |
| **Focus**    | --                              | None                   | `line/line-focus`   | `rgb(172, 117, 255)`   | 2px outside   |
| **Disabled** | --                              | None                   | --                  | None                   | --            |

### List Item Text Color

| State        | Token                  | Color                  |
|--------------|------------------------|------------------------|
| **Enabled**  | `body/body-default`    | `rgb(75, 87, 108)`     |
| **Hover**    | `body/body-default`    | `rgb(75, 87, 108)`     |
| **Pressed**  | `body/body-default`    | `rgb(75, 87, 108)`     |
| **Focus**    | `body/body-default`    | `rgb(75, 87, 108)`     |
| **Disabled** | `body/body-muted`      | `rgb(126, 147, 180)`   |

### Sub-Label Text Color

| State        | Token                  | Color                  |
|--------------|------------------------|------------------------|
| **Enabled**  | `body/body-moderate`   | `rgb(98, 115, 140)`    |
| **Hover**    | `body/body-moderate`   | `rgb(98, 115, 140)`    |
| **Pressed**  | `body/body-moderate`   | `rgb(98, 115, 140)`    |
| **Focus**    | `body/body-moderate`   | `rgb(98, 115, 140)`    |
| **Disabled** | `body/body-subtle`     | `rgb(203, 213, 225)`   |

All color tokens from the **Colors** collection.

---

## Key Behaviors

1. **Transparent by default** — The menu item has no background fill in its enabled state; hover and pressed states add a fill to indicate interaction.
2. **Hover fill** — `surface/surface-base-hover` provides a subtle light blue tint on hover (`rgb(243, 247, 252)`).
3. **Pressed fill** — `surface/surface-info-active` provides a deeper blue fill on press (`rgb(204, 223, 255)`).
4. **Focus ring** — A 2px outside stroke with `line/line-focus` (`rgb(172, 117, 255)` purple) and `radius-medium-1` corner radius (12px).
5. **Text color is stable** — The primary text stays `body/body-default` across all interactive states; only the disabled state shifts to `body/body-muted`.
6. **Sub-label dimming** — The sub-label uses `body/body-moderate` normally and dims to `body/body-subtle` when disabled — a lighter muting than the primary text.
7. **Optional icon** — The leading icon (`star`, 24px) is hidden by default and toggled via the `Icon` boolean property.
8. **Optional sub-label** — The secondary text line is hidden by default and toggled via the `Sub-Label` boolean property. When visible, it adds a second line below the primary text separated by `gap/gap-group-small` (4px).
9. **Fixed width** — The root container has a fixed width (358px default), suitable for use within a dropdown menu panel.
10. **Corner radius** — Uses `radius-medium-1` (12px) for rounded item backgrounds on hover/press.
