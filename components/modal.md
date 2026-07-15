```markdown
# Modal — Basic Content Variants

A centered modal dialog with scrim overlay, used for presenting information with a headline, body text, decorative icon, and action buttons. The "Basic" content variant provides a standard informational modal layout.

## Component Properties

| Property                      | Type          | Options / Default                          |
|-------------------------------|---------------|--------------------------------------------|
| Size                          | Variant       | Compact, Full                              |
| Device                        | Variant       | Mobile, Desktop                            |
| Content                       | Variant       | Blank, **Basic**, Basic + Content, Confirm, Destructive, Disclosures |
| 👀 Graphic                    | Boolean       | true (show decorative icon)                |
| 🔄 Icon                       | Instance Swap | Default: bell                              |
| ✏️ Headline Text              | Text          | "Add a headline"                           |
| ✏️ Body Text                  | Text          | "Add 1-2 sentences that communicate the primary message of the modal." |
| 🔄 Swap Content               | Instance Swap | (content slot for Basic + Content variant) |
| 👀 Main Text                  | Boolean       | true (show headline + body text group)     |

## Basic Variant Matrix

| Combination                         | Surface Width | Surface Height | Sizing Behavior         |
|-------------------------------------|---------------|----------------|-------------------------|
| Compact × Desktop × Basic          | 420px         | Hug content    | Fixed width, hug height |
| Full × Desktop × Basic             | 620px         | 992px (fixed)  | Fixed width & height    |
| Compact × Mobile × Basic           | Fill (390px)  | Hug content    | Fill width, hug height  |
| Full × Mobile × Basic              | Fill (390px)  | 760px (fixed)  | Fill width, fixed height|

## Structure

    [Component Root] (full viewport frame)
    ├── Skrim Overlay (fills viewport)
    └── Modal Surface (centered card)
        ├── [Desktop] Header
        │   └── .Close Button Small
        ├── [Mobile] Swipe Away
        │   └── Handle (drag indicator)
        ├── Content Area
        │   └── Heading
        │       ├── Decorative Icon (circular container + icon)
        │       └── Text Group
        │           ├── Heading Text
        │           └── Body Text
        └── Button Stack (instance)
            └── Buttons
                ├── [Desktop] Tertiary CTA + Primary CTA (horizontal, right-aligned)
                └── [Mobile] Primary CTA (full-width) + Tertiary CTA (centered below)

## Scrim Overlay

| Property | Token                          | Value     |
|----------|--------------------------------|-----------|
| Fill     | `surface/surface-inverse-base` | #00216A   |
| Opacity  | —                              | 85%       |
| Size     | —                              | Full viewport |

## Modal Surface

| Property        | Token                    | Value     |
|-----------------|--------------------------|-----------|
| Fill            | `surface/surface-base`   | #FFFFFF   |
| Border Radius   | `radius-large-2`         | 24px      |
| Layout          | Vertical                 |           |
| Item Spacing    | —                        | 0px       |
| Padding         | —                        | 0 all sides |

Desktop variants have all 4 corners rounded. Mobile variants have only top-left and top-right rounded (bottom-sheet style).

### Size Tokens by Variant

| Variant          | Width   | Height     |
|------------------|---------|------------|
| Compact Desktop  | 420px   | Hug        |
| Full Desktop     | 620px   | 992px      |
| Compact Mobile   | Fill    | Hug        |
| Full Mobile      | Fill    | 760px      |

## Header (Desktop only)

| Property        | Token | Value       |
|-----------------|-------|-------------|
| Layout          | —     | Vertical    |
| Padding         | —     | 24px all    |
| Item Spacing    | —     | 8px         |
| Alignment       | —     | Cross-axis: end (right-aligned close button) |
| Width Sizing    | —     | Fill        |
| Height Sizing   | —     | Hug         |

### Close Button (.Close Button Small)

| Property       | Token                     | Value         |
|----------------|---------------------------|---------------|
| Size           | —                         | 32×32px       |
| Shape          | `radius-full`             | circle (999px)|
| Fill           | `surface/surface-layer-2` | #F5F6F9       |
| Icon           | close                     | 24×24px       |

## Swipe Away (Mobile only)

| Property       | Token | Value            |
|----------------|-------|------------------|
| Height         | —     | 44px             |
| Width Sizing   | —     | Fill             |
| Padding Top    | —     | 8px              |
| Padding Bottom | —     | 8px              |

### Handle

| Property   | Token                | Value       |
|------------|----------------------|-------------|
| Width      | —                    | 28px        |
| Height     | —                    | 4px         |
| Fill       | `line/line-moderate` | #CBD5E1     |
| Position   | —                    | Centered    |

## Content Area

| Property        | Token | Value       |
|-----------------|-------|-------------|
| Layout          | —     | Vertical    |
| Padding Left    | —     | 24px        |
| Padding Right   | —     | 24px        |
| Padding Top     | —     | 0px         |
| Padding Bottom  | —     | 24px        |
| Item Spacing    | —     | 24px        |
| Width Sizing    | —     | Fill        |
| Height Sizing   | —     | Hug         |

### Decorative Icon (toggleable via 👀 Graphic)

| Property       | Token            | Value         |
|----------------|------------------|---------------|
| Size           | —                | 56×56px       |
| Shape          | `radius-full`    | circle (999px)|
| Fill           | `core/blue/100`  | #E7F0FF       |
| Icon Size      | `size/size-icon-large1` | 32×32px |
| Layout         | —                | Centered      |

### Text Group

| Property       | Token | Value |
|----------------|-------|-------|
| Layout         | —     | Vertical |
| Item Spacing   | —     | 16px  |
| Width Sizing   | —     | Fill  |
| Height Sizing  | —     | Hug   |

### Heading Text

| Property     | Token / Style               | Value              |
|--------------|-----------------------------|--------------------|
| Text Style   | `Headline/Page`             |                    |
| Font Family  | `font-family`               | Merchant Var       |
| Font Size    | `Headline/Page/Size`        | 30px               |
| Line Height  | `Headline/Page/Line Height` | 36px               |
| Color        | `body/body-emphasis`        | #051958            |

### Body Text

| Property     | Token / Style               | Value              |
|--------------|-----------------------------|--------------------|
| Text Style   | `Body/Default/Regular`      |                    |
| Font Family  | `font-family`               | Merchant Var       |
| Font Size    | `Body/Default/Size`         | 17px               |
| Line Height  | `Body/Default/Line Height`  | 24px               |
| Color        | `body/body-default`         | #4B576C            |

## Button Stack

### Desktop Layout

| Property       | Token                  | Value           |
|----------------|------------------------|-----------------|
| Layout         | Vertical               |                 |
| Padding Left   | —                      | 24px            |
| Padding Right  | —                      | 24px            |
| Padding Top    | —                      | 0px             |
| Padding Bottom | —                      | 16px            |
| Item Spacing   | —                      | 12px            |
| Width Sizing   | —                      | Fill            |
| Component      | Button Stack: Device=Desktop, Show Buttons=1 + 3 | |

Buttons row (horizontal, right-aligned):

| Property       | Token                  | Value           |
|----------------|------------------------|-----------------|
| Item Spacing   | `gap/gap-row-large`    | 24px            |
| Alignment      | —                      | End (right)     |
| Button gap     | —                      | 4px (within group) |

### Mobile Layout

| Property       | Token                  | Value           |
|----------------|------------------------|-----------------|
| Layout         | Vertical               |                 |
| Padding Left   | —                      | 24px            |
| Padding Right  | —                      | 24px            |
| Padding Top    | —                      | 0px             |
| Padding Bottom | —                      | 40px            |
| Item Spacing   | —                      | 12px            |
| Component      | Button Stack: Device=Mobile, Show Buttons=1 + 3 | |

Buttons column (vertical, stacked):

| Property       | Token | Value              |
|----------------|-------|--------------------|
| Item Spacing   | —     | 8px                |
| Primary CTA    | —     | Full-width (64px h)|
| Tertiary CTA   | —     | Auto-width (48px h)|

## Button Tokens (shared)

| Button     | Hierarchy Token    | Height Token                  | Radius Token    | Spacing Token                 |
|------------|--------------------|-------------------------------|-----------------|-------------------------------|
| Primary    | `primary/primary`  | `height/height-component-default` (48px) | `radius-full` | `gap/gap-x-component-default` |
| Tertiary   | `tertiary/tertiary`| `height/height-component-default` (48px) | `radius-full` | `gap/gap-x-component-default` |

## Behavior Notes

- **Compact** size hugs content height; **Full** size has a fixed tall height (useful for scrolling content)
- **Desktop** uses a close button (×) in a header row; **Mobile** uses a swipe-away handle bar
- Mobile surfaces are bottom-sheet style: only top corners are rounded, surface fills the viewport width
- Desktop surfaces are centered cards: all 4 corners rounded, fixed width
- The decorative icon can be hidden via the 👀 Graphic boolean toggle
- The 🔄 Icon instance swap lets you change the icon within the decorative circle
- The "Basic + Content" variant adds a 🔄 Swap Content instance slot below the text group for custom content
```
