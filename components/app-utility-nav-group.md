# .Utility Nav Group

## Component Overview
A horizontal container that holds 1–3 Utility Nav Item instances, used to group utility navigation actions (e.g., help, notifications, account) in a navigation bar.
Component Set ID: 13400:3451

## Component Properties (Variants)

| Property      | Values   |
|---------------|----------|
| # of Actions  | 1, 2, 3 |

Total variants: 3

## Structure

    [.Utility Nav Group] (Auto-layout: Horizontal, hug)
        ├── [.Utility Nav Item] (Instance, 48×48) — slot 1
        ├── [.Utility Nav Item] (Instance, 48×48) — slot 2
        └── [.Utility Nav Item] (Instance, 48×48) — slot 3

    All 3 slots always exist in the layer tree.
    Visibility toggles control how many are shown:
    - # of Actions=1: only slot 3 visible
    - # of Actions=2: slots 1 and 3 visible
    - # of Actions=3: all slots visible

## Layout

| Property                   | Value            |
|----------------------------|------------------|
| Layout mode                | Horizontal       |
| Primary axis alignment     | Min (start)      |
| Counter axis alignment     | Center           |
| Item spacing               | 0                |
| Padding (all sides)        | 0                |
| Horizontal sizing          | Hug contents     |
| Vertical sizing            | Hug contents     |

## Child Instances — .Utility Nav Item

Each child is an instance of the `.Utility Nav Item` component set, defaulting to:
- Variant: State=Enabled, Badge=None
- Size: 48×48

| Property | Token / Value                      |
|----------|------------------------------------|
| Height   | height/height-component-default    |
| Width    | 48px                               |

## Slot Visibility by Variant

| Variant         | Slot 1  | Slot 2  | Slot 3  |
|-----------------|---------|---------|---------|
| # of Actions=1  | hidden  | hidden  | visible |
| # of Actions=2  | visible | hidden  | visible |
| # of Actions=3  | visible | visible | visible |

## Resolved Dimensions (Reference)

| Variant         | Width | Height |
|-----------------|-------|--------|
| # of Actions=1  | 48px  | 48px   |
| # of Actions=2  | 96px  | 48px   |
| # of Actions=3  | 144px | 48px   |

## Notes

- This is a composition component — it contains no direct styling tokens of its own (no fills, strokes, or effects). All visual styling is inherited from the nested `.Utility Nav Item` instances.
- Consumers swap the icon and badge variant on each `.Utility Nav Item` slot to configure the desired utility actions.
