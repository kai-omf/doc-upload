# Checkbox Component Specification

**Description:** Checkbox lets a user select a related item, table row, or parent container.
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

The Checkbox is a **horizontal auto-layout** frame containing:

1. **Checkbox State Layer** — a 24x24 frame that provides the focus ring and state-layer fill. Contains:
   - **Box** — a 24x24 frame that renders the checkbox square (border when unchecked, filled when checked). Contains:
     - **check** — a 20–22px icon instance of the checkmark. Hidden when unchecked; visible when checked.

The Label text is exposed as a text property but is not rendered as a direct child within the component — it is intended to be composed externally or is part of a wrapper component.

### Selected vs. Unselected

| Property         | Selected = False                    | Selected = True                     |
|------------------|-------------------------------------|--------------------------------------|
| Box fill         | None (transparent)                  | Solid fill                           |
| Box stroke       | Border only                         | Matching fill + stroke               |
| Checkmark        | Hidden                              | Visible (white stroke)               |
| Check icon size  | 20x20                               | 22x22                                |

---

## Token Reference

### Root Container

| Property | Token                             | Collection | Resolved Value |
|----------|-------------------------------------|------------|----------------|
| Height   | `height/height-component-small1`   | Dimensions | 40px           |
| Gap      | `gap/gap-x-component-large`        | Dimensions | 12px           |

### Box & State Layer

| Property      | Token              | Collection | Resolved Value |
|---------------|---------------------|------------|----------------|
| Corner radius | `radius-small-1`   | Shape      | 4px            |
| Size          | 24x24 (fixed)      | --         | --             |

### Checkmark (Selected only)

| Property      | Token                          | Collection | Resolved Value       |
|---------------|--------------------------------|------------|----------------------|
| Stroke color  | `body/body-inverse-emphasis`   | Colors     | `rgb(255, 255, 255)` |
| Stroke weight | `stroke/stroke-large-1`        | Dimensions | 1.7px                |
| Icon size     | `size/size-icon-small1`        | Dimensions | ~20–22px             |

---

## State Tokens — Unselected (`Selected=False`)

### Box (inner square)

| State        | Stroke Token             | Stroke Color             | Fill   |
|--------------|--------------------------|--------------------------|--------|
| **Enabled**  | `line/line-default`      | `rgb(126, 147, 180)`     | None   |
| **Hover**    | `core/blue/950`          | `rgb(5, 25, 88)`         | None   |
| **Pressed**  | `core/blue/950`          | `rgb(5, 25, 88)`         | None   |
| **Focus**    | `line/line-moderate`     | `rgb(203, 213, 225)`     | None   |
| **Disabled** | `line/line-moderate`     | `rgb(203, 213, 225)`     | None   |
| **Error**    | `body/body-negative`     | `rgb(214, 41, 64)`       | None   |

### State Layer (outer wrapper)

| State        | Fill Token                  | Fill Color               | Stroke Token         | Stroke               | Weight |
|--------------|-----------------------------|--------------------------|----------------------|-----------------------|--------|
| **Enabled**  | --                          | None                     | --                   | None                  | --     |
| **Hover**    | `core/blue/100`             | `rgb(231, 240, 255)`     | --                   | None                  | --     |
| **Pressed**  | `core/blue/200`             | `rgb(204, 223, 255)`     | `core/blue/200`      | `rgb(204, 223, 255)` | 3px outside |
| **Focus**    | --                          | None                     | `line/line-focus`    | `rgb(172, 117, 255)` | 2px outside |
| **Disabled** | `surface/surface-layer-2`   | `rgb(245, 246, 249)`     | --                   | None                  | --     |
| **Error**    | `surface/surface-negative`  | `rgb(251, 243, 241)`     | --                   | None                  | --     |

All color tokens from the **Colors** collection.

---

## State Tokens — Selected (`Selected=True`)

### Box (inner square)

| State        | Fill Token                   | Fill Color               | Stroke Token                | Stroke Color             |
|--------------|------------------------------|--------------------------|------------------------------|--------------------------|
| **Enabled**  | `body/body-selected`         | `rgb(0, 33, 105)`        | `line/line-selected`        | `rgb(0, 33, 105)`       |
| **Hover**    | `core/blue/800`              | `rgb(23, 57, 139)`       | `core/blue/800`             | `rgb(23, 57, 139)`      |
| **Pressed**  | `core/blue/700`              | `rgb(7, 51, 166)`        | `core/blue/600`             | `rgb(39, 73, 173)`      |
| **Focus**    | `body/body-selected`         | `rgb(0, 33, 105)`        | `core/neutral/white`        | `rgb(255, 255, 255)`    |
| **Disabled** | `primary/primary-disabled`   | `rgb(160, 184, 242)`     | `primary/primary-disabled`  | `rgb(160, 184, 242)`    |
| **Error**    | `core/red/500`               | `rgb(255, 93, 79)`       | `core/red/500`              | `rgb(255, 93, 79)`      |

### State Layer (outer wrapper)

| State        | Fill  | Stroke Token         | Stroke               | Weight         |
|--------------|-------|----------------------|-----------------------|----------------|
| **Enabled**  | None  | --                   | None                  | --             |
| **Hover**    | None  | --                   | None                  | --             |
| **Pressed**  | None  | `core/blue/200`      | `rgb(204, 223, 255)` | 3px outside    |
| **Focus**    | None  | `line/line-focus`    | `rgb(172, 117, 255)` | 2px outside    |
| **Disabled** | None  | --                   | None                  | --             |
| **Error**    | None  | --                   | None                  | --             |

### Checkmark

| State        | Stroke Token                   | Stroke Color             |
|--------------|--------------------------------|--------------------------|
| **All except Disabled** | `body/body-inverse-emphasis` | `rgb(255, 255, 255)` |
| **Disabled** | `primary/on-primary-disabled` | `rgb(255, 255, 255)`    |

All color tokens from the **Colors** collection.

---

## Key Behaviors

1. **Two-layer architecture** — The Checkbox State Layer wraps the Box, providing a separate surface for the focus ring and state-layer fills (hover tint, pressed ring, disabled overlay) without interfering with the box's own fill/stroke.
2. **Unselected uses stroke-only box** — When unchecked, the box has no fill and relies solely on its border stroke to draw the square.
3. **Selected fills the box** — When checked, the box gets a solid fill and matching stroke, with a white checkmark icon rendered on top.
4. **Focus ring** — A 2px outside stroke on the State Layer using `line/line-focus` (`rgb(172, 117, 255)` purple), applied in both selected and unselected focus states.
5. **Pressed ring** — A 3px outside stroke on the State Layer using `core/blue/200`, providing a larger ripple-like ring on press.
6. **Hover tint (unselected)** — The State Layer fills with `core/blue/100` on hover, creating a soft blue background behind the unchecked box.
7. **Error state** — Unselected uses `body/body-negative` red border with `surface/surface-negative` background tint; selected uses `core/red/500` for both fill and stroke.
8. **Disabled state** — Unselected gets a `surface/surface-layer-2` grey overlay; selected uses `primary/primary-disabled` muted blue with `primary/on-primary-disabled` for the checkmark.
9. **Corner radius** — All layers (Box, State Layer) use `radius-small-1` (4px) consistently.
10. **Width** — Hugs content; height is fixed at `height/height-component-small1` (40px), providing a generous touch target beyond the 24x24 visual box.
