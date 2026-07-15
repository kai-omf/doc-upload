# Radio Button Item

## Component Overview
A radio button paired with a text label. Combines the Radio Button control with a label for use in forms and selection lists.
Component Set ID: 16404:15773

## Component Properties (Variants)

| Property  | Values                                          |
|-----------|-------------------------------------------------|
| Selected  | False, True                                     |
| State     | Enabled, Hover, Focus, Pressed, Disabled, Error |

Total variants: 12

## Structure

    [Radio Button Item] (Auto-layout: Horizontal)
        ├── [Radio Button State Layer] (Frame, 24×24, circle)
        │       └── [Container] (Frame, 24×24, circle, auto-layout: center/center)
        │               ├── [minus] (Instance, 20×20, hidden) — only in some Selected=True variants
        │               └── [Selected Indicator] (Ellipse, 12×12)
        └── [Label] (Text)

    - Selected=False: Selected Indicator is hidden (visible=false)
    - Selected=True: Selected Indicator is visible

## Layout — Root

| Property                   | Token / Value                |
|----------------------------|------------------------------|
| Layout mode                | Horizontal                   |
| Primary axis alignment     | Min (start)                  |
| Counter axis alignment     | Min (start)                  |
| Item spacing               | gap/gap-x-component-large (12px) |
| Padding top / bottom       | 10px                         |
| Padding left / right       | 0                            |
| Width                      | Hug (~81px)                  |
| Height                     | 44px                         |

## Radio Button State Layer (24×24)

| Property       | Value              |
|----------------|--------------------|
| Size           | 24×24              |
| Corner radius  | radius-full (all)  |
| Layout mode    | None (absolute)    |

## Container (24×24)

| Property                | Value              |
|-------------------------|--------------------|
| Size                    | 24×24              |
| Corner radius           | radius-full (all)  |
| Layout mode             | Horizontal         |
| Primary axis alignment  | Center             |
| Counter axis alignment  | Center             |
| Stroke weight           | 1px                |

## Selected Indicator (Dot)

| Property | Value     |
|----------|-----------|
| Shape    | Ellipse   |
| Size     | 12×12     |

## Typography — Label

| Property    | Token                              |
|-------------|------------------------------------|
| Text style  | Body/Default/Regular               |
| Font family | font-family (Merchant Var)         |
| Font size   | Body/Default/Size (17px)           |
| Line height | Body/Default/Line Height (24px)    |

## Token Map — Selected=False

| State    | State Layer Fill        | State Layer Stroke    | Container Stroke    | Indicator Visible | Indicator Fill     | Label Fill         |
|----------|-------------------------|-----------------------|---------------------|-------------------|--------------------|--------------------|
| Enabled  | —                       | —                     | line/line-default   | false             | body/body-selected | body/body-default  |
| Hover    | core/blue/100           | —                     | core/blue/950       | false             | body/body-selected | body/body-strong   |
| Focus    | —                       | line/line-focus       | line/line-moderate  | false             | body/body-selected | body/body-strong   |
| Pressed  | core/blue/200           | core/blue/200         | core/blue/950       | false             | body/body-selected | body/body-emphasis |
| Disabled | surface/surface-layer-2 | —                     | line/line-moderate  | false             | body/body-selected | body/body-muted    |
| Error    | surface/surface-negative| —                     | body/body-negative  | false             | body/body-selected | body/body-default  |

## Token Map — Selected=True

| State    | State Layer Fill | Container Fill           | Container Stroke     | Indicator Visible | Indicator Fill     | Label Fill         |
|----------|------------------|--------------------------|----------------------|-------------------|--------------------|--------------------|
| Enabled  | —                | surface/surface-base     | line/line-selected   | true              | body/body-selected | body/body-default  |
| Hover    | —                | core/blue/100            | body/body-selected   | true              | body/body-selected | body/body-strong   |
| Focus    | —                | surface/surface-base     | line/line-selected   | true              | body/body-selected | body/body-strong   |
| Pressed  | —                | core/blue/200            | line/line-selected   | true              | body/body-selected | body/body-emphasis |
| Disabled | —                | surface/surface-layer-2  | line/line-default    | true              | body/body-muted    | body/body-muted    |
| Error    | —                | surface/surface-negative | body/body-negative   | true              | body/body-negative | body/body-default  |

## Resolved Dimensions (Reference)

| All Variants       | Width  | Height |
|--------------------|--------|--------|
| Root component     | ~81px  | 44px   |
| Radio State Layer  | 24×24  |        |
| Container          | 24×24  |        |
| Selected Indicator | 12×12  |        |
| Label              | ~45px  | 24px   |
