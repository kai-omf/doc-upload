# .Bottom Nav Item Component Specification

**Total Variants:** 12

---

## Variant Properties

| Property       | Values                  |
|----------------|------------------------|
| **Selected**   | `False`, `True`        |
| **State**      | `Enabled`, `Focus`, `Pressed` |
| **Breakpoint** | `Default`, `568`       |

## Instance Properties

| Property | Type          | Default Value          |
|----------|---------------|------------------------|
| **Icon** | INSTANCE_SWAP | Default icon (heart-outline) |

---

## Anatomy

The Bottom Nav Item is a **vertical auto-layout** frame containing three children stacked vertically, centered horizontally:

1. **Icon** — a 24x24 instance-swappable icon. Swaps between outline (unselected) and filled (selected) variants.
2. **Text Label** — the navigation item label. Visible when unselected; hidden when selected.
3. **Indicator Row** — contains a small dot indicator. Hidden when unselected; visible when selected.

### Selected vs. Unselected

| Property            | Selected = False                     | Selected = True                      |
|---------------------|--------------------------------------|--------------------------------------|
| Icon style          | Outline stroke                       | Solid fill                           |
| Text label          | Visible                              | Hidden                               |
| Indicator dot       | Hidden                               | Visible                              |
| Icon color token    | `body/body-moderate` (stroke)        | `body/body-selected` (fill)          |
| Icon resolved color | `rgb(98, 115, 140)`                  | `rgb(0, 33, 105)`                    |

---

## Token Reference

### Root Container

| Property | Token                              | Collection | Resolved Value |
|----------|-------------------------------------|------------|----------------|
| Width    | `dimension-56`                     | Dimensions | 56px           |
| Height   | `height/height-component-default`  | Dimensions | 48px (Default breakpoint) |
| Padding  | 4px top, 0 right, 4px bottom, 0 left | --      | --             |

### Breakpoint Differences

| Property        | Default Breakpoint                    | 568 Breakpoint                        |
|-----------------|---------------------------------------|---------------------------------------|
| Height          | `height/height-component-default` (48px) | 50px                               |
| Gap             | 0px                                   | `dimension-2` (2px)                  |
| Icon stroke weight | `stroke/stroke-small-1`           | `stroke/stroke-default`              |

### Icon (Unselected)

| Property      | Token                    | Collection | Resolved Value       |
|---------------|--------------------------|------------|----------------------|
| Stroke color  | `body/body-moderate`     | Colors     | `rgb(98, 115, 140)`  |
| Stroke weight (Default bp) | `stroke/stroke-small-1` | Dimensions | 1.2px     |
| Stroke weight (568 bp)     | `stroke/stroke-default` | Dimensions | --        |

### Icon (Selected)

| Property   | Token                 | Collection | Resolved Value       |
|------------|------------------------|------------|----------------------|
| Fill color | `body/body-selected`  | Colors     | `rgb(0, 33, 105)`   |

### Text Label

| Property    | Token                          | Collection | Resolved Value       |
|-------------|--------------------------------|------------|----------------------|
| Text color  | `body/body-moderate`           | Colors     | `rgb(98, 115, 140)`  |
| Font family | `font-family`                  | Fonts      | Merchant Var         |
| Font size   | `Label/Small 3/Size`           | Fonts      | 11px                 |
| Line height | `Label/Small 3/Line Height`    | Fonts      | 16px                 |
| Font style  | --                             | --         | Regular              |

### Active Indicator Dot

| Property   | Token                 | Collection | Resolved Value       |
|------------|------------------------|------------|----------------------|
| Fill color | `body/body-selected`  | Colors     | --                   |
| Size       | 4x4 circle            | --         | --                   |

---

## State Behaviors

### Unselected States

| State       | Icon Color Token       | Text Color Token       | Resolved Color         | Additional                   |
|-------------|------------------------|------------------------|------------------------|------------------------------|
| **Enabled** | `body/body-moderate`   | `body/body-moderate`   | `rgb(98, 115, 140)`    | --                           |
| **Pressed** | `body/body-muted`      | `body/body-muted`      | `rgb(126, 147, 180)`   | Colors dim on press          |
| **Focus**   | `body/body-moderate`   | `body/body-moderate`   | `rgb(98, 115, 140)`    | Focus ring appears on root   |

### Selected States

| State       | Icon Color Token       | Resolved Color         | Additional                   |
|-------------|------------------------|------------------------|------------------------------|
| **Enabled** | `body/body-selected`   | `rgb(0, 33, 105)`      | --                           |
| **Pressed** | `body/body-selected`   | `rgb(0, 33, 105)`      | No visual change from enabled |
| **Focus**   | `body/body-selected`   | `rgb(0, 33, 105)`      | Focus ring appears on root   |

### Focus Ring

| Property      | Token                | Collection | Resolved Value       |
|---------------|----------------------|------------|----------------------|
| Stroke color  | `line/line-focus`    | Colors     | --                   |
| Stroke weight | 2px                  | --         | --                   |
| Stroke align  | Inside               | --         | --                   |
| Corner radius | `dimension-8`        | Dimensions | 8px                  |

The focus ring is a 2px inside stroke applied to the root container with rounded corners, only present in the `Focus` state.

---

## Key Behaviors

1. **Selected state transformation** — When selected, the icon swaps from an outline variant to a filled variant, the text label hides, and an indicator dot appears below the icon.
2. **Swappable icon** — The icon is an instance-swap property, allowing any icon pair (outline/filled) to be used.
3. **Pressed state dims** — Unselected items dim their icon and text to `body/body-muted` on press. Selected items maintain their `body/body-selected` color.
4. **Indicator dot** — A 4x4 circle using `body/body-selected`, centered below the icon in the selected state, providing a secondary active-state signal.
5. **Breakpoint adaptation** — At the 568 breakpoint, the item grows slightly taller (50px vs 48px), gains 2px gap between children (`dimension-2`), and uses a heavier icon stroke weight (`stroke/stroke-default` vs `stroke/stroke-small-1`).
6. **Focus ring** — Applied as a 2px inside stroke with `line/line-focus` color and `dimension-8` corner radius on the root container.
7. **No background** — The root container has no fill in any state; it is transparent, relying on the parent navigation bar for background.
8. **Width** — Fixed at 56px (`dimension-56`) in the Default breakpoint; fills parent in the 568 breakpoint.
