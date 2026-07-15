# Radio Button

## Component Overview
A circular selection control allowing a single choice from a group. Features a state layer for interactive feedback and a centered dot indicator when selected.
Component Set ID: 16311:3571

## Component Properties (Variants)

| Property  | Values                                          |
|-----------|-------------------------------------------------|
| Selected  | False, True                                     |
| State     | Enabled, Hover, Focus, Pressed, Disabled, Error |

Total variants: 12

## Structure

    [Radio Button] (Auto-layout: Horizontal, align-y: center)
        └── [Radio Button State Layer] (Frame, 24×24, circle)
                └── [Container] (Frame, 24×24, circle, auto-layout: center/center)
                        ├── [minus] (Instance, 20×20, hidden) — only in Selected=True variants
                        └── [Selected Indicator] (Ellipse, 12×12)

    - Selected=False: Selected Indicator is hidden (visible=false)
    - Selected=True: Selected Indicator is visible

## Layout — Root

| Property                    | Token / Value                     |
|-----------------------------|-----------------------------------|
| Layout mode                 | Horizontal                        |
| Counter axis alignment      | Center                            |
| Item spacing                | gap/gap-x-component-large         |
| Height                      | height/height-component-small1    |
| Width                       | 24px (fixed)                      |

## Radio Button State Layer (24×24)

| Property       | Value                 |
|----------------|-----------------------|
| Size           | 24×24                 |
| Corner radius  | radius-full (all)     |
| Stroke weight  | 3px (default) / 2px (Focus) |

## Container (24×24)

| Property                | Value                 |
|-------------------------|-----------------------|
| Size                    | 24×24                 |
| Corner radius           | radius-full (all)     |
| Layout mode             | Horizontal            |
| Primary axis alignment  | Center                |
| Counter axis alignment  | Center                |
| Stroke weight           | 1px                   |

## Selected Indicator (Dot)

| Property | Value     |
|----------|-----------|
| Shape    | Ellipse   |
| Size     | 12×12     |

## Token Map — Selected=False

| State    | State Layer Fill         | State Layer Stroke    | Container Stroke    | Indicator Fill       | Indicator Visible |
|----------|--------------------------|-----------------------|---------------------|----------------------|-------------------|
| Enabled  | —                        | —                     | line/line-default   | body/body-selected   | false             |
| Hover    | core/blue/100            | —                     | core/blue/950       | body/body-selected   | false             |
| Focus    | —                        | line/line-focus (2px) | line/line-moderate  | body/body-selected   | false             |
| Pressed  | core/blue/200            | core/blue/200 (3px)  | core/blue/950       | body/body-selected   | false             |
| Disabled | surface/surface-layer-2  | —                     | line/line-moderate  | body/body-selected   | false             |
| Error    | surface/surface-negative | —                     | body/body-negative  | body/body-selected   | false             |

## Token Map — Selected=True

| State    | State Layer Fill  | State Layer Stroke    | Container Fill          | Container Stroke     | Indicator Fill       | Indicator Visible |
|----------|-------------------|-----------------------|-------------------------|----------------------|----------------------|-------------------|
| Enabled  | —                 | —                     | —                       | line/line-selected   | body/body-selected   | true              |
| Hover    | —                 | —                     | core/blue/100           | core/blue/800        | core/blue/800        | true              |
| Focus    | —                 | line/line-focus (2px) | surface/surface-base    | line/line-selected   | body/body-selected   | true              |
| Pressed  | core/blue/200     | core/blue/200 (3px)  | core/blue/200           | line/line-selected   | body/body-selected   | true              |
| Disabled | —                 | —                     | surface/surface-layer-2 | line/line-default    | body/body-muted      | true              |
| Error    | —                 | —                     | surface/surface-negative| body/body-negative   | body/body-negative   | true              |

## Additional Notes

- The "minus" instance (20×20, token: size/size-icon-small1) appears in Selected=True variants but is always hidden (visible=false). Possibly reserved for an indeterminate state.
- State Layer stroke is only visible on Focus (2px) and Pressed (3px) states.
- Container stroke is always visible (1px) across all variants.
- All circular shapes use the `radius-full` token for border-radius.

## Resolved Dimensions (Reference)

| All Variants | Width | Height |
|--------------|-------|--------|
| Root frame   | 24px  | 40px   |
| State Layer  | 24×24 |        |
| Container    | 24×24 |        |
| Indicator    | 12×12 |        |
