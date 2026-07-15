# Checkbox Item Component Specification

**Description:** Checkbox Item lets people select an item.
**Total Variants:** 12

---

## Variant Properties

| Property     | Values                                              |
|--------------|-----------------------------------------------------|
| **Selected** | `False`, `True`                                     |
| **State**    | `Enabled`, `Hover`, `Pressed`, `Focus`, `Disabled`, `Error` |

## Instance Properties

| Property  | Type | Default Value |
|-----------|------|---------------|
| **Label** | TEXT | `"Label"`     |

---

## Anatomy

The Checkbox Item is a **horizontal auto-layout** frame containing:

1. **Checkbox State Layer** — a 24x24 frame providing the focus ring and state-layer fill. Contains:
   - **Box** — a 24x24 frame rendering the checkbox square (stroke-only when unchecked, filled when checked). Contains:
     - **check** — a 20–22px icon instance of the checkmark. Hidden when unchecked; visible when checked.

2. **Label** — a text node displaying the item label, driven by the `Label` text property.

---

## Token Reference

### Root Container

| Property | Token                          | Collection | Resolved Value |
|----------|--------------------------------|------------|----------------|
| Gap      | `gap/gap-x-component-large`   | Dimensions | 12px           |
| Height   | 44px (fixed)                   | --         | --             |
| Width    | Hug contents                   | --         | --             |

### Box & State Layer

| Property      | Token            | Collection | Resolved Value |
|---------------|-------------------|------------|----------------|
| Corner radius | `radius-small-1` | Shape      | 4px            |
| Size          | 24x24 (fixed)    | --         | --             |

### Checkmark (Selected only)

| Property      | Token                        | Collection | Resolved Value       |
|---------------|------------------------------|------------|----------------------|
| Stroke color  | `body/body-inverse-emphasis` | Colors     | `rgb(255, 255, 255)` |
| Stroke weight | `stroke/stroke-large-1`      | Dimensions | 1.7px                |
| Icon size     | `size/size-icon-small1`      | Dimensions | ~20–22px             |

### Label Text

| Property    | Token                          | Collection | Resolved Value       |
|-------------|--------------------------------|------------|----------------------|
| Font family | `font-family`                  | Fonts      | Merchant Var         |
| Font size   | `Body/Default/Size`            | Fonts      | 17px                 |
| Line height | `Body/Default/Line Height`     | Fonts      | 24px                 |
| Font style  | --                             | --         | Regular              |

---

## State Tokens — Unselected (`Selected=False`)

### Box (inner square)

| State        | Stroke Token           | Stroke Color           | Fill   |
|--------------|------------------------|------------------------|--------|
| **Enabled**  | `line/line-default`    | `rgb(126, 147, 180)`   | None   |
| **Hover**    | `core/blue/950`        | `rgb(5, 25, 88)`       | None   |
| **Pressed**  | `core/blue/950`        | `rgb(5, 25, 88)`       | None   |
| **Focus**    | `line/line-moderate`   | `rgb(203, 213, 225)`   | None   |
| **Disabled** | `line/line-moderate`   | `rgb(203, 213, 225)`   | None   |
| **Error**    | `body/body-negative`   | `rgb(214, 41, 64)`     | None   |

### State Layer (outer wrapper)

| State        | Fill Token                  | Fill Color             | Stroke Token        | Stroke Color           | Weight       |
|--------------|-----------------------------|------------------------|---------------------|------------------------|--------------|
| **Enabled**  | --                          | None                   | --                  | None                   | --           |
| **Hover**    | `core/blue/100`             | `rgb(231, 240, 255)`   | --                  | None                   | --           |
| **Pressed**  | `core/blue/200`             | `rgb(204, 223, 255)`   | `core/blue/200`     | `rgb(204, 223, 255)`   | 3px outside  |
| **Focus**    | --                          | None                   | `line/line-focus`   | `rgb(172, 117, 255)`   | 2px outside  |
| **Disabled** | `surface/surface-layer-2`   | `rgb(245, 246, 249)`   | --                  | None                   | --           |
| **Error**    | `surface/surface-negative`  | `rgb(251, 243, 241)`   | --                  | None                   | --           |

### Label Color

| State        | Label Token            | Label Color            |
|--------------|------------------------|------------------------|
| **Enabled**  | `body/body-default`    | `rgb(75, 87, 108)`     |
| **Hover**    | `body/body-strong`     | `rgb(54, 68, 90)`      |
| **Pressed**  | `body/body-emphasis`   | `rgb(5, 25, 88)`       |
| **Focus**    | `body/body-strong`     | `rgb(54, 68, 90)`      |
| **Disabled** | `body/body-muted`      | `rgb(126, 147, 180)`   |
| **Error**    | `body/body-default`    | `rgb(75, 87, 108)`     |

All color tokens from the **Colors** collection.

---

## State Tokens — Selected (`Selected=True`)

### Box (inner square)

| State        | Fill Token                   | Fill Color             | Stroke Token                | Stroke Color           |
|--------------|------------------------------|------------------------|-----------------------------|------------------------|
| **Enabled**  | `body/body-selected`         | `rgb(0, 33, 105)`      | `body/body-selected`       | `rgb(0, 33, 105)`     |
| **Hover**    | `core/blue/800`              | `rgb(23, 57, 139)`     | `core/blue/800`            | `rgb(23, 57, 139)`    |
| **Pressed**  | `core/blue/700`              | `rgb(7, 51, 166)`      | `core/blue/600`            | `rgb(39, 73, 173)`    |
| **Focus**    | `body/body-selected`         | `rgb(0, 33, 105)`      | `primary/on-primary`       | `rgb(255, 255, 255)`  |
| **Disabled** | `primary/primary-disabled`   | `rgb(160, 184, 242)`   | `primary/primary-disabled` | `rgb(160, 184, 242)`  |
| **Error**    | `core/red/500`               | `rgb(255, 93, 79)`     | `core/red/500`             | `rgb(255, 93, 79)`    |

### State Layer (outer wrapper)

| State        | Fill  | Stroke Token        | Stroke Color           | Weight       |
|--------------|-------|---------------------|------------------------|--------------|
| **Enabled**  | None  | --                  | None                   | --           |
| **Hover**    | None  | --                  | None                   | --           |
| **Pressed**  | None  | `core/blue/200`     | `rgb(204, 223, 255)`   | 3px outside  |
| **Focus**    | None  | `line/line-focus`   | `rgb(172, 117, 255)`   | 2px outside  |
| **Disabled** | None  | --                  | None                   | --           |
| **Error**    | None  | --                  | None                   | --           |

### Checkmark

| State                     | Stroke Token                   | Stroke Color           |
|---------------------------|--------------------------------|------------------------|
| **All standard states**   | `body/body-inverse-emphasis`   | `rgb(255, 255, 255)`   |
| **Disabled**              | `primary/on-primary-disabled`  | `rgb(255, 255, 255)`   |
| **Error**                 | `primary/on-primary`           | `rgb(255, 255, 255)`   |

### Label Color

| State        | Label Token            | Label Color            |
|--------------|------------------------|------------------------|
| **Enabled**  | `body/body-default`    | `rgb(75, 87, 108)`     |
| **Hover**    | `body/body-strong`     | `rgb(54, 68, 90)`      |
| **Pressed**  | `body/body-default`    | `rgb(75, 87, 108)`     |
| **Focus**    | `body/body-strong`     | `rgb(54, 68, 90)`      |
| **Disabled** | `body/body-muted`      | `rgb(126, 147, 180)`   |
| **Error**    | `body/body-default`    | `rgb(75, 87, 108)`     |

All color tokens from the **Colors** collection.

---

## Relationship to Checkbox Component

Checkbox Item composes the same internal **Checkbox State Layer > Box > check** structure as the standalone Checkbox component, but adds a visible **Label** text node as a direct child. The key differences:

| Aspect                  | Checkbox                            | Checkbox Item                       |
|-------------------------|--------------------------------------|--------------------------------------|
| Label rendered          | No (external/property only)          | Yes (visible text child)             |
| Root height token       | `height/height-component-small1`     | 44px (no token)                      |
| Label text color varies | --                                   | Yes — shifts across states           |

---

## Key Behaviors

1. **Two-layer checkbox architecture** — The Checkbox State Layer wraps the Box, providing a separate surface for focus ring, pressed ring, and state-layer fills without interfering with the box's own fill/stroke.
2. **Label color responds to state** — Unlike the standalone Checkbox, the label text color shifts across states: `body/body-default` at rest, `body/body-strong` on hover/focus, `body/body-emphasis` on press, and `body/body-muted` when disabled.
3. **Unselected = stroke only** — The box has no fill when unchecked; the border token changes per state.
4. **Selected = filled box** — When checked, the box receives both a fill and matching stroke, with a white checkmark overlaid.
5. **Focus ring** — A 2px outside stroke on the State Layer using `line/line-focus` (`rgb(172, 117, 255)` purple). When selected, the box also gets a white (`primary/on-primary`) inner stroke to separate it from the purple ring.
6. **Pressed ring** — A 3px outside stroke on the State Layer using `core/blue/200`, providing a ripple-like effect.
7. **Error state** — Unselected: red border (`body/body-negative`) with pink tint (`surface/surface-negative`). Selected: red fill (`core/red/500`).
8. **Disabled state** — Unselected: muted grey overlay (`surface/surface-layer-2`). Selected: muted blue (`primary/primary-disabled`) with muted checkmark (`primary/on-primary-disabled`). Label dims to `body/body-muted`.
9. **Corner radius** — All layers use `radius-small-1` (4px) consistently.
10. **Touch target** — The root container is 44px tall (larger than the 24px visual checkbox), providing an accessible touch/click target.
