```markdown
# Snapshot Tile — Loan, Card, and Vantage Score Variants

A card-style tile used to surface account summaries on a dashboard. Each template variant displays different content layouts tailored to its data type. All share a common container, header, and nudge structure.

## Component Properties

| Property                | Type          | Options / Default                                  |
|-------------------------|---------------|----------------------------------------------------|
| Template                | Variant       | 1 Column, 2 Columns, **Loan**, **Card**, **Vantage Score** |
| Device                  | Variant       | Mobile, Desktop                                    |
| 👀 Header               | Boolean       | true                                               |
| 👀 Footer               | Boolean       | true                                               |
| 👀 Nudge                | Boolean       | true                                               |
| 👀 Message              | Boolean       | true                                               |
| 👀 Status               | Boolean       | true                                               |
| ✏️ Heading              | Text          | "Tile Heading"                                     |
| ✏️ Sub-Heading          | Text          | "Sub-Heading"                                      |
| ✏️ Message              | Text          | "Add an optional message"                          |
| 🔄 Content              | Instance Swap | (content slot)                                     |
| 🔄 Left Column          | Instance Swap | (left column content)                              |
| 🔄 Right Column         | Instance Swap | (right column content)                             |
| 🔄 Footer               | Instance Swap | (footer content)                                   |

## Shared Structure

    Snapshot Tile (root, vertical stack, negative overlap for nudge)
    ├── Snapshot Tile (main card surface)
    │   ├── Header (heading + chevron, bottom-bordered)
    │   ├── Content (varies by template)
    │   └── Footer (varies by template)
    └── Nudge (overlapping card below)

## Shared Container — Root

| Property        | Value                  |
|-----------------|------------------------|
| Layout          | Vertical               |
| Item Spacing    | -20px (negative overlap for nudge) |
| Border Radius   | 16px                   |
| Width (Mobile)  | 358px (fixed)          |
| Width (Desktop) | 640px (fixed)          |
| Height Sizing   | Hug                    |
| Drop Shadow     | x: 6, y: 10, blur: 35, rgba(63, 61, 86, 0.07) |

## Shared Container — Main Card Surface (Snapshot Tile inner frame)

| Property        | Token                        | Value      |
|-----------------|------------------------------|------------|
| Layout          | Vertical                     |            |
| Item Spacing    | `gap/gap-group-large`        | 16px       |
| Padding All     | `padding/padding-surface-base` | 16px     |
| Border Radius   | `radius-large-1`             | 16px       |
| Fill            | `surface/surface-base`       | #FFFFFF    |
| Stroke          | `core/coolGrey/200`          | #F5F6F9    |
| Stroke Weight   | —                            | 1px        |
| Width Sizing    | Fill                         |            |
| Height Sizing   | Hug                          |            |

## Shared Header

| Property        | Token                        | Value          |
|-----------------|------------------------------|----------------|
| Layout          | Horizontal                   |                |
| Padding Bottom  | —                            | 16px           |
| Border Bottom   | `line/line-moderate`         | #CBD5E1 (bottom only) |
| Alignment       | —                            | Center-aligned vertically |
| Width Sizing    | Fill                         |                |

### Tile Heading

| Property     | Token / Style                | Value          |
|--------------|------------------------------|----------------|
| Text Style   | `Body/Default/Medium`        |                |
| Font Family  | `font-family`                | Merchant Var   |
| Font Size    | `Body/Default/Size`          | 17px           |
| Line Height  | `Body/Default/Line Height`   | 24px           |
| Color        | `body/body-emphasis`         | #051958        |
| Width Sizing | Fill                         |                |

### Chevron Icon

| Property      | Token                    | Value       |
|---------------|--------------------------|-------------|
| Component     | nav-arrow-right          |             |
| Size          | `size/size-icon-small1`  | 20×20px     |
| Stroke Weight | `stroke/stroke-large-1`  | 1.7px       |
| Stroke Color  | `body/body-emphasis`     | #051958     |

## Shared Nudge (overlapping below card)

| Property        | Token                          | Value          |
|-----------------|--------------------------------|----------------|
| Component       | Nudge (State=Default)          |                |
| Fill            | `surface/surface-info-layer-2` |                |
| Layout          | Horizontal, center-aligned     |                |
| Padding         | 32px top, 16px L/R/B           |                |
| Item Spacing    | —                              | 16px           |
| Width Sizing    | Fill                           |                |

### Nudge Text

| Property     | Token / Style                | Value          |
|--------------|------------------------------|----------------|
| Text Style   | `Body/Supporting/Regular`    |                |
| Font Size    | `Body/Supporting/Size`       | 15px           |
| Line Height  | `Body/Supporting/Line Height`| 20px           |
| Color        | `body/body-emphasis`         | #051958        |

---

## Template: Loan

### Content Layout

| Property        | Token                    | Mobile       | Desktop      |
|-----------------|--------------------------|--------------|--------------|
| Layout          | —                        | Horizontal   | Horizontal   |
| Item Spacing    | `gap/gap-row-default`    | 16px         | 16px         |

### Content Children

    Content (horizontal)
    ├── Data Item (Hierarchy=Primary) — fill width
    └── Status-Tag (Positive sentiment) — hug width

#### Data Item (Primary)

| Property     | Token / Style              | Value          |
|--------------|----------------------------|----------------|
| Label Style  | `Body/Supporting/Regular`  | 15px           |
| Label Color  | `body/body-default`        | #4B576C        |
| Value Style  | `Data/Primary`             | 32px           |
| Value Color  | `body/body-emphasis`       | #051958        |

#### Status-Tag

| Property        | Token                                     | Value       |
|-----------------|-------------------------------------------|-------------|
| Component       | Size=Default, Sentiment=Positive, Layout=No Icon |     |
| Height          | `height/height-component-small4`          | 28px        |
| Padding X       | `padding/padding-x-component-small-3`    | 12px        |
| Padding Y       | `padding/padding-x-component-small-2-iconOffset` | 12px |
| Border Radius   | `radius-full`                             | 999px       |
| Fill            | `surface/surface-positive`                |             |
| Text Color      | `body/body-positive`                      | #008353     |
| Text Style      | `Label/Small 1/Regular`                   | 15px        |

### Footer

    Footer (vertical, gap: `gap/gap-group-large` 16px)
    ├── Button (Primary CTA)
    └── Message (icon + text)

#### Button

| Property        | Token                            | Value       |
|-----------------|----------------------------------|-------------|
| Component       | Size=Large 1, Hierarchy=Primary, Layout=No Icon |  |
| Height          | `height/height-component-default`| 48px        |
| Padding X       | —                                | 32px        |
| Border Radius   | `radius-full`                    | 999px       |
| Fill            | `primary/primary`                |             |
| Text Color      | `primary/on-primary`             | #FFFFFF     |
| Text Style      | `Label/Default/Medium`           | 17px        |
| Item Spacing    | `gap/gap-x-component-default`    | 8px         |

#### Message

| Property        | Token                        | Value          |
|-----------------|------------------------------|----------------|
| Layout          | Horizontal                   |                |
| Item Spacing    | `gap/gap-row-small`          | 8px            |
| Text Style      | `Body/Supporting/Regular`    | 15px           |
| Text Color      | `body/body-default`          | #4B576C        |

### Desktop Differences (Loan)

- Footer uses a horizontal "Button Row" layout (button + message side by side) instead of stacking vertically
- Data Item fills more width (492px vs fill)
- Status-Tag is slightly larger (36px height vs 28px)

---

## Template: Card

### Content Layout

| Property        | Token | Mobile       | Desktop      |
|-----------------|-------|--------------|--------------|
| Layout          | —     | Horizontal   | Horizontal   |
| Item Spacing    | —     | 24px         | 24px         |

### Content Children

    Content (horizontal)
    ├── Left Column (fill width)
    │   ├── Data Item (Hierarchy=Primary)
    │   └── Data Item (Hierarchy=Tertiary)
    └── Right Column (fixed 116px mobile / hug desktop)
        └── BrightWay Card (image instance)

#### Left Column

| Property        | Token                  | Value       |
|-----------------|------------------------|-------------|
| Layout          | Vertical               |             |
| Item Spacing    | `gap/gap-group-large`  | 16px        |
| Width Sizing    | Fill                   |             |

#### Data Item (Primary) — same as Loan

#### Data Item (Tertiary)

| Property     | Token / Style              | Value          |
|--------------|----------------------------|----------------|
| Label Style  | `Body/Supporting/Regular`  | 15px           |
| Label Color  | `body/body-default`        | #4B576C        |
| Value Style  | `Body/Default/Medium`      | 17px           |
| Value Color  | `body/body-emphasis`       | #051958        |

#### Right Column (Card Image)

| Property        | Value (Mobile) | Value (Desktop) |
|-----------------|----------------|-----------------|
| Width           | 116px (fixed)  | Hug             |
| Card Instance   | BrightWay Card (BWY) |           |
| Card Size       | 116×73px       | 116×73px        |
| Card Radius     | 8px            | 8px             |

### Footer

    Footer (vertical)
    └── Message
        └── AutoPay message text

| Property     | Token / Style                | Value          |
|--------------|------------------------------|----------------|
| Text Style   | `Body/Supporting/Regular`    | 15px           |
| Text Color   | `body/body-default`          | #4B576C        |
| Item Spacing | `gap/gap-row-small`          | 8px            |

### Desktop Differences (Card)

- Right Column includes both the card image and a Message row below it (stacked vertically)
- Left Column and Right Column are wider with more space

---

## Template: Vantage Score

### Header (unique: includes Sub-Heading)

    Header (horizontal)
    ├── Heading Group (horizontal)
    │   ├── Tile Heading
    │   └── Sub-Heading
    └── nav-arrow-right

#### Sub-Heading

| Property     | Token / Style                | Value          |
|--------------|------------------------------|----------------|
| Text Style   | `Body/Caption/Regular`       |                |
| Font Size    | `Body/Caption/Size`          | 14px           |
| Line Height  | `Body/Caption/Line Height`   | 20px           |
| Color        | `body/body-default`          | #4B576C        |

Heading Group spacing: `gap/gap-row-small` (8px)

### Content Layout

| Property        | Value          |
|-----------------|----------------|
| Layout          | Vertical       |
| Item Spacing    | 16px           |

### Content Children

    Content (vertical)
    └── Linear Progress (instance: Sample Value=Medium, Size=Default)
        ├── Data Visual
        │   ├── Labels (range labels, space-between)
        │   ├── Linear Bar (progress bar)
        │   └── Data Value Track (score indicator)
        └── Supporting Information (change text + date)

#### Linear Progress

| Property        | Token                        | Value          |
|-----------------|------------------------------|----------------|
| Component       | Sample Value=Medium, Size=Default |            |
| Item Spacing    | `gap/gap-y-pair`             | 8px            |
| Width Sizing    | Fill                         |                |
| Alignment       | Center                       |                |

#### Supporting Information

| Property        | Token                          | Value          |
|-----------------|--------------------------------|----------------|
| Layout          | Horizontal, centered           |                |
| Item Spacing    | `gap/gap-x-component-small`    | 4px            |

##### Value Change Text

| Property     | Token / Style                | Value          |
|--------------|------------------------------|----------------|
| Text Style   | `Body/Supporting/Regular`    | 15px           |
| Color        | `body/body-positive`         | #008353        |
| Example      | "+32 pts"                    |                |

##### Connecting Text / Date

| Property     | Token / Style                | Value          |
|--------------|------------------------------|----------------|
| Text Style   | `Body/Supporting/Regular`    | 15px           |
| Color        | `core/coolGrey/700`          | #627388        |
| Example      | "since last update on 03/01/25" |             |

### Footer

    Footer (vertical, center-aligned)
    └── Text Link ("Learn more")

#### Text Link

| Property        | Token                          | Value          |
|-----------------|--------------------------------|----------------|
| Component       | State=Default, Polarity=Default|                |
| Item Spacing    | `gap/gap-x-component-small`    | 4px            |
| Text Style      | `Link/Default`                 |                |
| Font Size       | `Body/Default/Size`            | 17px           |
| Line Height     | `Body/Default/Line Height`     | 24px           |
| Color           | `primary/primary`              | #0E45E3        |

### Desktop Differences (Vantage Score)

- Linear Progress instance is wider (608px vs 326px)
- Surface is taller (279px vs 259px)
- Overall height: 331px vs 327px

---

## Size Comparison Table

| Template      | Device  | Card Surface | Total (with Nudge) |
|---------------|---------|--------------|---------------------|
| Loan          | Mobile  | 358×248      | 358×316             |
| Loan          | Desktop | 640×228      | 640×280             |
| Card          | Mobile  | 358×244      | 358×312             |
| Card          | Desktop | 640×224      | 640×276             |
| Vantage Score | Mobile  | 358×259      | 358×327             |
| Vantage Score | Desktop | 640×279      | 640×331             |
```
