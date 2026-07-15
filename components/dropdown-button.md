# Dropdown Button Component Specification

**Total Variants:** 10

---

## Variant Properties

| Property  | Values                                          |
|-----------|-------------------------------------------------|
| **Value** | `Closed`, `Open`                                |
| **State** | `Enabled`, `Hover`, `Pressed`, `Focus`, `Disabled` |

## Instance Properties

| Property       | Type | Default Value |
|----------------|------|---------------|
| **Label Text** | TEXT | `"Label"`     |

---

## Anatomy

The Dropdown Button is a **horizontal auto-layout** frame containing:

1. **Label Text** — a text node displaying the dropdown label, driven by the `Label Text` property.
2. **Arrow Icon** — a 24x24 icon instance that indicates the open/closed state:
   - `nav-arrow-down` when `Value=Closed`
   - `nav-arrow-up` when `Value=Open`

The component has **no background fill** and **no border** in its default state — it is a minimal text-and-icon trigger.

---

## Token Reference

### Root Container

| Property        | Value (Default)       | Value (Focus)               |
|-----------------|-----------------------|-----------------------------|
| Layout          | Horizontal auto-layout | Horizontal auto-layout     |
| Padding         | `6, 0, 6, 0` (T, R, B, L) | `6, 4, 6, 4` (T, R, B, L) |
| Gap             | 8px                   | 8px                         |
| Width           | Hug contents          | Hug contents                |
| Height          | Hug contents (36px)   | Hug contents (36px)         |
| Background      | None                  | None                        |
| Border          | None                  | 2px outside, `radius-default` |

### Label Text

| Property    | Token                          | Collection | Resolved Value       |
|-------------|--------------------------------|------------|----------------------|
| Font family | `font-family`                  | Fonts      | Merchant Var         |
| Font size   | `Label/Large 1/Size`           | Fonts      | 19px                 |
| Line height | `Label/Large 1/Line Height`    | Fonts      | 24px                 |
| Font style  | --                             | --         | Regular              |

### Arrow Icon

| Property      | Value       |
|---------------|-------------|
| Size          | 24x24       |
| Stroke weight | 1.5px       |

---

## State Tokens

The table below applies to both `Closed` and `Open` values — only the arrow direction differs between them.

### Label Color

| State        | Label Token              | Label Color            |
|--------------|--------------------------|------------------------|
| **Enabled**  | `body/body-emphasis`     | `rgb(5, 25, 88)`      |
| **Hover**    | `core/coolGrey/800`      | `rgb(75, 87, 108)`    |
| **Pressed**  | `body/body-emphasis`     | `rgb(5, 25, 88)`      |
| **Focus**    | `body/body-emphasis`     | `rgb(5, 25, 88)`      |
| **Disabled** | `body/body-muted`        | `rgb(126, 147, 180)`  |

### Arrow Icon Color

| State        | Arrow Token              | Arrow Color            |
|--------------|--------------------------|------------------------|
| **Enabled**  | `body/body-default`      | `rgb(75, 87, 108)`    |
| **Hover**    | `core/coolGrey/800`      | `rgb(75, 87, 108)`    |
| **Pressed**  | `body/body-default`      | `rgb(75, 87, 108)`    |
| **Focus**    | `body/body-default`      | `rgb(75, 87, 108)`    |
| **Disabled** | `body/body-muted`        | `rgb(126, 147, 180)`  |

All color tokens from the **Colors** collection.

### Focus Ring (root container)

| Property      | Token              | Collection | Resolved Value       |
|---------------|---------------------|------------|----------------------|
| Stroke color  | `line/line-focus`   | Colors     | `rgb(172, 117, 255)` |
| Stroke weight | 2px                | --         | --                   |
| Stroke align  | Outside            | --         | --                   |
| Corner radius | `radius-default`   | Shape      | 8px                  |

The focus state also adds 4px horizontal padding to accommodate the focus ring visually.

---

## Value Differences

| Property         | Closed              | Open                |
|------------------|---------------------|---------------------|
| Arrow icon       | `nav-arrow-down`    | `nav-arrow-up`      |
| Arrow direction  | Points down (▾)     | Points up (▴)       |
| All other tokens | Identical           | Identical           |

---

## Key Behaviors

1. **Minimal trigger** — The component has no background or border in its resting state; it is purely a label + chevron pair.
2. **Arrow toggles with state** — The icon swaps between `nav-arrow-down` (closed) and `nav-arrow-up` (open) to indicate whether the associated dropdown menu is visible.
3. **Hover dims label** — On hover, the label shifts from `body/body-emphasis` to `core/coolGrey/800`, subtly reducing contrast. The arrow matches with `core/coolGrey/800`.
4. **Pressed matches enabled** — The pressed state uses the same tokens as enabled (`body/body-emphasis` + `body/body-default`), keeping the interaction feel stable.
5. **Focus ring** — A 2px outside stroke with `line/line-focus` purple and `radius-default` (8px) corner radius appears on focus. Extra 4px horizontal padding is added to give the ring breathing room.
6. **Disabled** — Both label and arrow dim to `body/body-muted` (`rgb(126, 147, 180)`).
7. **States are symmetric** — Open and Closed share identical state behaviors; only the arrow direction changes.
8. **Typography scale** — Uses `Label/Large 1` (19px) rather than body text, making it visually prominent as a navigation/action trigger.
