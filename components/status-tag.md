# Status-Tag

## Component Overview
A pill-shaped tag used to communicate status with semantic color coding.
Component Set ID: 5415:5251

## Component Properties (Variants)

| Property   | Values                                          |
|------------|-------------------------------------------------|
| Size       | Default, Large                                  |
| Sentiment  | Caution, Informative, Negative, Positive        |
| Layout     | No Icon, Left Icon, Right Icon                  |

Total variants: 25

## Structure

    [Status-Tag Container] (Auto-layout: Horizontal)
        ├── [Icon] (Frame, 12×12 or 16×16) — only when Layout = Left Icon or Right Icon
        └── [Status Tag] (Text)

    - Layout = Left Icon:  Icon appears BEFORE text
    - Layout = Right Icon: Icon appears AFTER text
    - Layout = No Icon:    Icon is absent

## Size Tokens

| Property         | Default                                    | Large                                      |
|------------------|--------------------------------------------|--------------------------------------------|
| Height           | height/height-component-small4             | height/height-component-small2             |
| Padding-x        | padding/padding-x-component-small-3        | padding/padding-x-component-small-2        |
| Padding-y        | padding/padding-x-component-small-2-iconOffset | padding/padding-x-component-small-2-iconOffset |
| Icon size        | 12×12                                      | 16×16                                      |
| Corner radius    | radius-full (all corners)                  | radius-full (all corners)                  |
| Item spacing     | gap/gap-x-component-default (with icon)    | gap/gap-x-component-default (with icon)    |
|                  | 0 (no icon)                                | 0 (no icon)                                |

## Sentiment Color Tokens

| Sentiment   | Container Fill            | Text Fill            |
|-------------|---------------------------|----------------------|
| Informative | surface/surface-info      | body/body-info       |
| Positive    | surface/surface-positive  | body/body-positive   |
| Caution     | surface/surface-caution   | body/body-caution    |
| Negative    | surface/surface-negative  | body/body-negative   |

## Typography

| Property    | Token                          |
|-------------|--------------------------------|
| Text style  | Label/Small 1/Regular          |
| Font family | font-family (Merchant Var)     |
| Font size   | Label/Small 1/Size (15px)      |
| Line height | Label/Small 1/Line Height (24px) |

## Additional Properties

| Property       | Value                 |
|----------------|-----------------------|
| Layout mode    | Horizontal (row)      |
| Stroke         | Hidden (not visible)  |
| Stroke weight  | ~1px                  |
| Overflow       | Clipped               |

## Resolved Dimensions (Reference)

| Variant                           | Width  | Height |
|-----------------------------------|--------|--------|
| Default, No Icon                  | 92px   | 28px   |
| Default, With Icon                | 112px  | 28px   |
| Large, No Icon                    | 100px  | 36px   |
| Large, With Icon                  | 124px  | 36px   |
