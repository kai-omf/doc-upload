# Nudge

## Component Overview
A card-style nudge element suggesting an optional action to the user, featuring text content and a right-arrow chevron icon. Acts as an interactive prompt or CTA.
Component Set ID: 17490:7206

## Component Properties (Variants)

| Property | Values                                       |
|----------|----------------------------------------------|
| State    | Default, Hover, Focus, Pressed, Disabled     |

Total variants: 5

## Structure

    [Nudge Container] (Auto-layout: Horizontal, align: center)
        ├── [Content Text] (Text — fills available width)
        └── [nav-arrow-right] (Icon instance, 24×24)
                └── [Vector] (chevron right, 6×12)

## Layout

| Property                    | Value         |
|-----------------------------|---------------|
| Layout mode                 | Horizontal    |
| Primary axis alignment      | Center        |
| Counter axis alignment      | Center        |
| Item spacing                | 16px          |
| Padding left                | 16px          |
| Padding right               | 16px          |
| Padding top                 | 32px          |
| Padding bottom              | 16px          |
| Horizontal sizing           | Fixed (358px) |
| Vertical sizing             | Hug contents  |
| Corner radius               | 0             |
| Clips content               | true          |

## Container Fill Tokens by State

| State    | Fill Token                       |
|----------|----------------------------------|
| Default  | surface/surface-info-layer-2     |
| Hover    | surface/surface-info-hover       |
| Focus    | surface/surface-info-hover       |
| Pressed  | surface/surface-info-layer-2     |
| Disabled | surface/surface-info-layer-2     |

## Border / Stroke (Focus State Only)

| Property      | Value              | Token              |
|---------------|--------------------|--------------------|
| Stroke color  | Focus ring         | line/line-focus    |
| Stroke weight | 3px                | —                  |
| Visibility    | Only on Focus      | —                  |

All other states: no visible stroke.

## Typography — Content Text

| Property    | Token                              |
|-------------|------------------------------------|
| Text style  | Body/Supporting/Regular            |
| Font family | font-family (Merchant Var)         |
| Font size   | Body/Supporting/Size (15px)        |
| Line height | Body/Supporting/Line Height (20px) |

## Text Color Tokens by State

| State                            | Text Fill Token      |
|----------------------------------|----------------------|
| Default, Hover, Focus, Pressed   | body/body-emphasis   |
| Disabled                         | body/body-moderate   |

## Icon — nav-arrow-right

| Property      | Value |
|---------------|-------|
| Size          | 24×24 |
| Vector size   | 6×12  |
| Stroke weight | 1.5px |

## Icon Stroke Color Tokens by State

| State                            | Stroke Token         |
|----------------------------------|----------------------|
| Default, Hover, Focus, Pressed   | body/body-emphasis   |
| Disabled                         | body/body-moderate   |

## Interaction States Summary

| State    | Fill                          | Stroke           | Text/Icon Color     |
|----------|-------------------------------|------------------|---------------------|
| Default  | surface/surface-info-layer-2  | none             | body/body-emphasis  |
| Hover    | surface/surface-info-hover    | none             | body/body-emphasis  |
| Focus    | surface/surface-info-hover    | line/line-focus (3px) | body/body-emphasis |
| Pressed  | surface/surface-info-layer-2  | none             | body/body-emphasis  |
| Disabled | surface/surface-info-layer-2  | none             | body/body-moderate  |

## Resolved Dimensions (Reference)

| Variant    | Width  | Height |
|------------|--------|--------|
| All states | 358px  | 88px   |
