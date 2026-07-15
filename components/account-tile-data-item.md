```markdown
# Data Item

A simple label + value pair used to display key data points (e.g. account balances, metrics, totals). Available in three hierarchy levels that control the visual prominence of the value text.

## Component Properties

| Property         | Type    | Options / Default            |
|------------------|---------|------------------------------|
| Hierarchy        | Variant | Primary, Secondary, Tertiary |
| ✏️ Label Text    | Text    | "Label Text"                 |
| ✏️ Value Text    | Text    | "$100.00"                    |

## Structure

    Data Item (auto-layout: vertical, hug × hug)
    ├── Data Label Text
    └── Data Value Text

## Layout

| Property          | Value               |
|-------------------|---------------------|
| Layout            | Vertical            |
| Item Spacing      | 0px                 |
| Padding           | 0 all sides         |
| Width Sizing      | Hug                 |
| Height Sizing     | Hug                 |
| Primary Align     | Min (top)           |
| Counter Align     | Min (left)          |
| Fill              | None (transparent)  |

## Typography — Data Label Text (shared across all hierarchies)

| Property     | Token / Style                    | Value          |
|--------------|----------------------------------|----------------|
| Text Style   | `Body/Supporting/Regular`        |                |
| Font Family  | `font-family`                    | Merchant Var   |
| Font Size    | `Body/Supporting/Size`           | 15px           |
| Line Height  | `Body/Supporting/Line Height`    | 20px           |
| Color        | `body/body-default`              | #4B576C        |

## Typography — Data Value Text (per hierarchy)

### Primary

| Property     | Token / Style                  | Value          |
|--------------|--------------------------------|----------------|
| Text Style   | `Data/Primary`                 |                |
| Font Family  | `font-family`                  | Merchant Var   |
| Font Size    | `Data/Primary/Size`            | 32px           |
| Line Height  | `Data/Primary/Line Height`     | 40px           |
| Color        | `body/body-emphasis`           | #051958        |

### Secondary

| Property     | Token / Style                  | Value          |
|--------------|--------------------------------|----------------|
| Text Style   | `Data/Secondary`               |                |
| Font Family  | `font-family`                  | Merchant Var   |
| Font Size    | `Data/Secondary/Size`          | 24px           |
| Line Height  | `Data/Secondary/Line Height`   | 32px           |
| Color        | `body/body-emphasis`           | #051958        |

### Tertiary

| Property     | Token / Style                  | Value          |
|--------------|--------------------------------|----------------|
| Text Style   | `Body/Default/Medium`          |                |
| Font Family  | `font-family`                  | Merchant Var   |
| Font Size    | `Body/Default/Size`            | 17px           |
| Line Height  | `Body/Default/Line Height`     | 24px           |
| Color        | `body/body-emphasis`           | #051958        |

## Summary Table

| Hierarchy | Value Style          | Value Size | Value Line Height | Total Height |
|-----------|----------------------|------------|-------------------|--------------|
| Primary   | `Data/Primary`       | 32px       | 40px              | 60px         |
| Secondary | `Data/Secondary`     | 24px       | 32px              | 52px         |
| Tertiary  | `Body/Default/Medium`| 17px       | 24px              | 44px         |
```
