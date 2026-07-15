# Prototyping Agent

> Ground yourself in this repo.
>
> I'd like to use this repo as a prototyping space to build out and iterate on designs. For now we've got components and some designs in [one-app-starter.pen](one-app-starter.pen) that we have to work on. Before you start doing anything read. We'll be using a component-driven approach, which means before you build anything that's going to be used more than once, first find out if a component exists for it, if not, build it, then use it. [components](components/) contains the specs for our base components. [tokens](tokens/) contains the tokens we should adhere to. [font-files](font-files/) contains the fonts we should use.
>
> Look at the agent skills in this repo /Users/kai.jei/Documents/docs/_projects/OneApp and create a lighter weight version for this repo that lends itself to quick prototyping while maintaining high quality code.

<details><summary>9 previous messages</summary>

> I’ll first ground myself in both repos, including their local instructions and the existing OneApp agent skills. I’m using the `skill-creator` guidance to make the new skill lean but structurally sound, and the Pencil harness guidance because this workflow centers on the existing `.pen` prototype and its component model. I’ll only edit after that reading pass.
>
> The initial comparison is clear: OneApp separates production design-system engineering from Pencil design work, while this repository is an early, mostly untracked prototype workspace. I’m narrowing that into one canonical repo skill with two routes—Pencil iteration and prototype code—while preserving the shared component-first, token/font, accessibility, validation, and dirty-worktree safeguards. I’m now reading the local PRD/spec conventions and inspecting the `.pen` document read-only before drafting.
>
> MCP tool call
>
> pencil.get_editor_state
>
> ```json
> {
>   "include_schema": true
> }
> ```
>
> Error: tool call error: tool call failed for `pencil/get_editor_state`
>
> Caused by:
>     Mcp error: -32603: failed to connect to running Pencil app: visual_studio_code after 3 retries: transport not connected to app: visual_studio_code
>
> I wasn’t able to inspect the live Pencil canvas because the Pencil editor bridge is not connected to the running VS Code instance; I have not opened or parsed the encrypted `.pen` file by any other means. That does not block creating the workflow skill, and I’m preserving the Pencil-only access rule in it so future design work starts correctly once the editor is connected. The skill will stay intentionally small: one canonical skill, short repo instructions, and discovery links for Codex/Claude/Gemini—no production-grade ADR or release bureaucracy.
>
> The skill initializer is present but not marked executable, so its direct invocation was rejected. I’m rerunning the same official initializer through Python, then I’ll replace its placeholders with the repo-specific workflow.
>
> <details><summary>Created 2 files</summary>
>
> - Wrote `./.agent-skills/prototype-oneapp-ui/SKILL.md` (+89 -0)
> - Wrote `./AGENTS.md` (+31 -0)
>
> </details>
>
> The lightweight structure is now in place: a single canonical skill covers both Pencil and code paths, and each supported agent discovers the same source through symlinks. I’ve deliberately left out OneApp’s ADR, release, framework-adapter, and component-contract bureaucracy; the retained guardrails are the ones that matter during prototyping—product boundaries, component reuse, tokens/fonts, interaction completeness, accessibility, validation, and clean handoff. I’m validating the skill metadata, link resolution, and repository diff now.
>
> The official validator cannot start because this machine’s Python environment lacks its `PyYAML` dependency; the skill itself has not failed validation. I’m using the system YAML parser to perform the equivalent metadata checks, then running the remaining link, placeholder, whitespace, and status checks separately. I won’t add a project dependency just to validate these two YAML files.
>
> <details><summary>Created a file</summary>
>
> - Wrote `./.gitignore` (+17 -0)
>
> </details>
</details>

Grounding is complete, and the lightweight prototyping workflow is in place.

- Added the canonical [prototype-oneapp-ui skill](./.agent-skills/prototype-oneapp-ui/SKILL.md:1).
- Added concise [repository agent instructions](./AGENTS.md:1).
- Linked the skill for Codex, Claude, and Gemini; `CLAUDE.md` and `GEMINI.md` share the same instructions.
- Added [.gitignore](./.gitignore:1) for metadata, secrets, dependencies, and generated output.
- Preserved component-first development, PRD boundaries, repository tokens and Merchant fonts, WCAG 2.2 AA fundamentals, complete interaction states, and proportional validation.
- Omitted OneApp’s heavier ADR, packaging, release, and framework-integration governance.

Validation passed for YAML metadata, placeholders, whitespace, and symlink resolution. The official Python validator could not start because `PyYAML` is absent, so equivalent YAML checks were run with the system parser.

I could not inspect `one-app-starter.pen` because Pencil’s VS Code bridge is disconnected. The file was not accessed through filesystem tools or modified.

> okay great. Now, check if you can access the pencil file

<details><summary>2 previous messages</summary>

> I’ll use the repository’s `prototype-oneapp-ui` skill and the Pencil harness to run a read-only connection check. I’ll verify the active editor and file without modifying the canvas.
>
> <details><summary>Explored 2 files, called a tool</summary>
>
> <details><summary>Explored 3 files</summary>
>
> - Read `./.agent-skills/prototype-oneapp-ui/SKILL.md`
> - Read `~/.codex/skills/pencil-agent-harness/SKILL.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/inspection-workflow.md`
>
> </details>
>
> MCP tool call
>
> pencil.get_editor_state
>
> ```json
> {
>   "include_schema": true
> }
> ```
>
> ````text
> ## Currently active editor
> - `/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen`
>
> ## Document State:
> - No nodes are selected.
>
>
> ### Top-Level Nodes (96):
>
> - `qpu7f` (frame): Text Styles [user visible]
> - `p889J` (frame): Elevation [user visible]
> - `HPD3q` (frame): Button — Component Set [user visible]
> - `nMqDl` (frame): Badge — Component Set [user visible]
> - `UTSVj` (frame): Alert — Component Set [user visible]
> - `bPtpH` (frame): Accordion Item — Component Set [user visible]
> - `hd733` (frame): Bottom Nav Item — Component Set [user visible]
> - `yzv2o` (frame): Bottom Nav Bar — Flexibility [user visible]
> - `hRtPQ` (frame): Bottom Nav Bar / App — States [user visible]
> - `b6SNe` (frame): Checkbox — Component Set [user visible]
> - ... +86 others
>
> ### Reusable Components (77):
> - `zDTNI`: headline-page
> - `J1tfP5`: headline-section
> - `TiFMn`: headline-tile
> - `SFrI4`: data-primary
> - `mK1Ni`: data-secondary
> - `R2FdRX`: body-default
> - `Ynwlh`: body-supporting
> - `p2CLM8`: body-caption
> - `s478V`: label-large-1
> - `lXDsT`: label-default
> - `xdtxf`: label-small-1
> - `m67EKQ`: label-small-2
> - `WtzuO`: label-small-3
> - `g8khNm`: link-default
> - `yCxA1`: link-supporting
> - `IdCZz`: link-caption
> - `HXIox`: elevation-1
> - `brOMq`: elevation-2
> - `qxkJo`: elevation-3
> - `hW7DI`: Inline Loader
> - `Yqvtr`: Button
> - `ivKKx`: Badge
> - `vbCIR`: Alert
> - `etV8x`: Accordion Item
> - `m1OQY`: Bottom Nav Item
> - `L1PQ6`: Bottom Nav Bar
> - `pu7Qz`: Bottom Nav Bar / App
> - `I5RoC`: Checkbox
> - `fHLQG`: Checkbox Item
> - `PfwdN`: Dropdown Button
> - `Gfgyl`: Dropdown Menu Item
> - `um6nq`: Footer
> - `eMyOS`: Email Input
> - `F8DMV`: Standalone Text Link
> - `l3cTP`: Inline Text Link
> - `gKuqI`: List Item
> - `qsZEN`: Linear Progress
> - `px2Mh`: Toggle
> - `UgSyr`: Toast
> - `Q2LRq`: Popover Tooltip
> - `Hdd31`: Utility Nav Item
> - `Cvcl5`: Primary Nav Item
> - `z41dP`: Back Button
> - `coN5s`: Nav Menu Toggle
> - `owJch`: Web Nav Bar
> - `vo5O2`: Status Tag
> - `GVzGf`: Nudge
> - `L0laN`: Radio Button
> - `lzhBw`: Radio Button Item
> - `Yt9pb`: App Utility Nav Item
> - `bQ3SH`: App Utility Nav Group
> - `BHWrb`: App Menu Bar
> - `r4u9K`: Nav Drawer Close Button
> - `JvT5j`: Nav Drawer Utility List Item
> - `IvcEh`: Nav Drawer Navigation List Item
> - `h6SJf`: Mobile Web Nav Drawer
> - `Zc1Hw`: Modal / Basic
> - `K6ABlr`: Circular Data Visualizer
> - `YWNEH`: Snapshot Tile
> - `Fzo2q`: Snapshot Tile Header
> - `bSy4S`: Account Tile Data Item
> - `Tj3Hj`: Card Art / Type=CB
> - `TL0Hz`: Card Art / Type=BW
> - `Tnbay`: Card Art / Type=BW+
> - `D3wgD4`: Icon / Chat Lines
> - `o4vyh`: Tile Button
> - `kwrZm`: Drop Zone
> - `L4EBjh`: Upload Progress Bar
> - `nIrAd`: Rail Doc Item
> - `p3DcE`: Selected File Row
> - `Wwg0d`: Document Checklist Card
> - `q50qn`: Request Summary Rail
> - `zc9dZ`: B / Request Summary
> - `TQeTt`: B / Progress Header
> - `LMMoY`: B / Upload Zone
> - `pnQBG`: B / File Row
> - `NmACi`: B / Document Item
>
> # .pen File Schema
>
> ```typescript
> /** Theme axis -> axis value. E.g. { 'device': 'phone' } */
> export interface Theme { [key: string]: string; }
> /** Dollar-prefixed variable name; binds the property to that variable. */
> export type Variable = string;
> export type NumberOrVariable = number | Variable;
> /** Hex color: #RGB, #RRGGBB, or #RRGGBBAA. */
> export type Color = string;
> export type ColorOrVariable = Color | Variable;
> export type BooleanOrVariable = boolean | Variable;
> export type StringOrVariable = string | Variable;
> export interface Layout {
>   /** Flex layout direction. 'none'=absolutely positioned children. */
>   layout?: "none" | "vertical" | "horizontal";
>   /** Main-axis gap between children. Default 0. */
>   gap?: NumberOrVariable;
>   layoutIncludeStroke?: boolean;
>   /** Inside padding. */
>   padding?: /** all sides */ NumberOrVariable | /** [vertical, horizontal] */ [NumberOrVariable, NumberOrVariable] | /** [top, right, bottom, left] */ [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable];
>   /** Main-axis alignment. Default 'start'. */
>   justifyContent?: "start" | "center" | "end" | "space_between" | "space_around";
>   /** Cross-axis alignment. Default 'start'. */
>   alignItems?: "start" | "center" | "end";
> }
> /** Dynamic layout size:
> - fit_content: combined size of children, requires layout on the node (fallback when no children).
> - fill_container: parent size, requires layout on the parent (fallback when not in a layout or when using absolute position).
> Optional fallback in parens, e.g. 'fit_content(100)'. */
> export type SizingBehavior = string;
> /** Position relative to parent. X right, Y down. IGNORED when parent uses flex layout. */
> export interface Position { x?: number; y?: number; }
> export interface Size { width?: NumberOrVariable | SizingBehavior; height?: NumberOrVariable | SizingBehavior; }
> export type BlendMode = 'normal' | 'darken' | 'multiply' | 'linearBurn' | 'colorBurn' | 'light' | 'screen' | 'linearDodge' | 'colorDodge' | 'overlay' | 'softLight' | 'hardLight' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
> export type Fill = ColorOrVariable | {
> type: "color";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> /** Fill opacity can only be set via the hex alpha channel. */
> color: ColorOrVariable;
> } | {
> type: "gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> gradientType?: "linear" | "radial" | "angular";
> opacity?: NumberOrVariable;
> /** Normalized to bbox. Default 0.5,0.5. */
> center?: Position;
> /** Normalized to bbox. Default 1,1. Linear: height = gradient length, width ignored. Radial/Angular: ellipse diameters. */
> size?: { width?: NumberOrVariable; height?: NumberOrVariable };
> /** Degrees CCW (0° up, 90° left, 180° down). */
> rotation?: NumberOrVariable;
> colors?: { color: ColorOrVariable; position: NumberOrVariable }[];
> } | /** Image fill. URL is relative to the .pen file, e.g. `./image.jpg`. */ { type: "image"; enabled?: BooleanOrVariable; blendMode?: BlendMode; opacity?: NumberOrVariable; url?: string; mode?: "stretch" | "fill" | "fit" } | /** Shader fill. URL points to a WebGL 1.0 (#version 100) fragment shader file, relative to the .pen file, e.g. `./effect.glsl`. Uniforms are described via `@directive` annotations inside block comments in the shader source. A `vec2` uniform annotated with `@resolution` is auto-bound to the fill size in pixels. Other uniforms' user-set values are stored in `uniforms`. */ {
> type: "shader";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> url: string;
> /** Override values for shader uniforms, keyed by uniform name. Uniforms annotated with `@resolution` or `@time` must not appear here. Allowed value shapes: number (float/int), boolean (bool), hex color string like `#RRGGBB[AA]` (color), array of 2-4 numbers (vec2/3/4), or a variable reference `$name` (numeric uniforms accept number variables; color uniforms accept color variables). */
> uniforms?: { [key: string]: number | boolean | string | number[] };
> } | /** Bezier-interpolated color grid, row-major. Keep edge points at default positions. */ {
> type: "mesh_gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> columns?: number;
> rows?: number;
> /** Color per vertex. */
> colors?: ColorOrVariable[];
> /** columns * rows points in [0,1]. */
> points?: (/** Auto-generated handles. */ [number, number] | /** Optional bezier handles (relative offsets); omitted = auto. */ { position: [number, number]; leftHandle?: [number, number]; rightHandle?: [number, number]; topHandle?: [number, number]; bottomHandle?: [number, number] })[];
> };
> export type Fills = Fill | Fill[];
> export interface CanHaveStroke {
>   stroke?: Fills;
>   /** Stroke thickness, uniform or per side. */
>   strokeWidth?: NumberOrVariable | { top?: NumberOrVariable; right?: NumberOrVariable; bottom?: NumberOrVariable; left?: NumberOrVariable };
>   strokeLinecap?: "butt" | "round" | "square";
>   strokeLinejoin?: "miter" | "bevel" | "round";
>   strokeAlignment?: "inner" | "center" | "outer";
> }
> export type Effect = /** Blurs the entire node. */ { enabled?: BooleanOrVariable; type: "blur"; radius?: NumberOrVariable } | /** Blurs the backdrop behind the node. */ { enabled?: BooleanOrVariable; type: "background_blur"; radius?: NumberOrVariable } | /** Inner or outer drop shadow. */ { type: "shadow"; enabled?: BooleanOrVariable; shadowType?: "inner" | "outer"; offset?: { x: NumberOrVariable; y: NumberOrVariable }; spread?: NumberOrVariable; blur?: NumberOrVariable; color?: ColorOrVariable; blendMode?: BlendMode };
> export type Effects = Effect | Effect[];
> export interface CanHaveEffects { effect?: Effects; }
> export interface CanHaveGraphics extends CanHaveEffects, CanHaveStroke { fill?: Fills; }
> export interface Entity extends Position {
>   /** Unique string; MUST NOT contain '/'. Auto-generated if omitted. */
>   id: string;
>   name?: string;
>   context?: string;
>   /** When true, can be duplicated via `ref` objects. Default false. */
>   reusable?: boolean;
>   theme?: Theme;
>   enabled?: BooleanOrVariable;
>   opacity?: NumberOrVariable;
>   flipX?: BooleanOrVariable;
>   flipY?: BooleanOrVariable;
>   /** Absolute position detaches the object from parent's layout and can be absolute positioned. Default auto */
>   layoutPosition?: "auto" | "absolute";
>   metadata?: { type: string; [key: string]: any };
>   /** Degrees CCW around top-left corner. */
>   rotation?: NumberOrVariable;
> }
> export interface Rectangleish extends Entity, Size, CanHaveGraphics { cornerRadius?: NumberOrVariable | [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable]; }
> /** Position is the top-left corner. */
> export interface Rectangle extends Rectangleish { type: "rectangle"; }
> /** Defined by its bounding rectangle. */
> export interface Ellipse extends Entity, Size, CanHaveGraphics {
>   type: "ellipse";
>   /** Ring inner/outer radius ratio. 0=solid, 1=hollow. Default 0. */
>   innerRadius?: NumberOrVariable;
>   /** Arc start angle, degrees CCW from right. Default 0. */
>   startAngle?: NumberOrVariable;
>   /** Arc length from startAngle. Positive=CCW, negative=CW. Range -360..360. Default 360. */
>   sweepAngle?: NumberOrVariable;
> }
> /** Defined by its bounding rectangle. */
> export interface Polygon extends Entity, Size, CanHaveGraphics { type: "polygon"; polygonCount?: NumberOrVariable; cornerRadius?: NumberOrVariable; }
> export interface Path extends Entity, Size, CanHaveGraphics {
>   /** Default 'nonzero'. */
>   fillRule?: "nonzero" | "evenodd";
>   /** SVG path. */
>   geometry?: string;
>   /** SVG coord-space [x,y,w,h] mapping onto the node box. Default: tight bbox of geometry. */
>   viewBox?: [number, number, number, number];
>   type: "path";
> }
> export interface TextStyle {
>   fontFamily?: StringOrVariable;
>   fontSize?: NumberOrVariable;
>   fontWeight?: StringOrVariable;
>   letterSpacing?: NumberOrVariable;
>   fontStyle?: StringOrVariable;
>   underline?: BooleanOrVariable;
>   /** Multiplier of fontSize. Defaults to font's built-in. */
>   lineHeight?: NumberOrVariable;
>   textAlign?: "left" | "center" | "right" | "justify";
>   textAlignVertical?: "top" | "middle" | "bottom";
>   strikethrough?: BooleanOrVariable;
>   href?: string;
> }
> export type TextContent = StringOrVariable;
> export interface Text extends Entity, Size, CanHaveGraphics, TextStyle {
>   type: "text";
>   content?: TextContent;
>   /** Required before width/height take effect.
> 'auto': grows to fit; no wrapping.
> 'fixed-width': width fixed, wraps; height grows.
> 'fixed-width-height': both fixed; may overflow. */
>   textGrowth?: "auto" | "fixed-width" | "fixed-width-height";
> }
> export interface CanHaveChildren { children?: Child[]; }
> /** Container to create hierarchy and layout. default layout=horizontal, width=fit_content, height=fit_content, clip=false. */
> export interface Frame extends Rectangleish, CanHaveChildren, Layout {
>   type: "frame";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   placeholder?: boolean;
>   /** Marks frame as a slot for component instances. Array entries are IDs of recommended reusable child components (e.g. menu items inside a menu bar). */
>   slot?: false | string[];
> }
> export interface Group extends Entity, CanHaveChildren, CanHaveEffects { type: "group"; }
> export interface Note extends Entity, Size, TextStyle { type: "note"; content?: TextContent; }
> export interface Prompt extends Entity, Size, TextStyle { type: "prompt"; content?: TextContent; model?: StringOrVariable; }
> export interface Context extends Entity, Size, TextStyle { type: "context"; content?: TextContent; }
> /** Icon from a library. The icon is scaled to fit the width and height. */
> export interface Icon extends Entity, Size, CanHaveEffects {
>   type: "icon";
>   /** Valid: 'lucide', 'feather', 'Material Symbols Outlined', 'Material Symbols Rounded', 'Material Symbols Sharp', 'phosphor'. */
>   library?: StringOrVariable;
>   icon?: StringOrVariable;
>   /** Variable weight, 100-700; only for libraries that support it. */
>   weight?: NumberOrVariable;
>   fill?: Fills;
> }
> /** Generates nested children from JavaScript. */
> export interface Script extends Entity, Size {
>   type: "script";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   /** JS file URI, relative to the .pen file. */
>   scriptUri?: string;
>   /** Input values by name. */
>   inputs?: { [key: string]: string | number | boolean | Variable };
> }
> /** Reuses another object. */
> export interface Ref extends Entity {
>   type: "ref";
>   /** ID of the referenced object. */
>   ref: string;
>   /** Customize descendant properties. */
>   descendants?: { [key: string /** ID path of the descendant. */]: {} /** Based on the presence of `type`:
> - `type` is not present = property overrides: the descendant node is updated with the listed properties.
> - `type` is present = replacement: the descendant node is fully replaced with a new node tree. */ };
>   [key: string]: any;
> }
> export type Child = Frame | Group | Rectangle | Ellipse | Path | Polygon | Text | Note | Prompt | Context | Icon | Script | Ref;
> export type IdPath = string;
> export interface Document { version: "2.14"; themes?: { [key: string /** RegEx: [^:]+ */]: string[] }; imports?: { [key: string]: string /** Value: relative URI of imported .pen file. Key: short alias. */ }; variables?: { [key: string /** RegEx: [^:]+ */]: { type: "boolean"; value: BooleanOrVariable | { value: BooleanOrVariable; theme?: Theme }[] } | { type: "color"; value: ColorOrVariable | { value: ColorOrVariable; theme?: Theme }[] } | { type: "number"; value: NumberOrVariable | { value: NumberOrVariable; theme?: Theme }[] } | { type: "string"; value: StringOrVariable | { value: StringOrVariable; theme?: Theme }[] } }; children: (Frame | Group | Rectangle | Ellipse | Polygon | Path | Text | Note | Context | Prompt | Icon | Script | Ref)[]; }
> ```
>
> # General instructions when editing .pen files
>
> - Pencil is an infinite canvas design tool with nested object hierarchy.
>
> - Be very thorough with your design changes and make sure all the task's needs are met.
> - Favor copying existing content and updating the copied content later, rather than generating new content.
> - When creating new variables make sure you are not accidentally overwriting any existing design.
> - Don't have multiple screens in-progress at the same time unless you are using sub-agents. Finish one screen at a time to not leave them in a broken state.
>
> - User may ask for technical modifications like removing, moving, re-ordering, clearing, and copying objects/variables, or just ask questions. Only do what's requested and nothing more.
> - Pencil is a collaborative multiplayer environment: the document can change while you work, so the state you remember may be stale. If a node is missing or no longer matches what you expected, re-read instead of recreating it, and don't undo changes the user made in the meantime.
>
> - When adding more content to a frame make sure the frame has the right layout, or is big enough to fit the new content. Resize the frame if necessary. There is no scrolling and the entire content should always be visible on the canvas.
>
> - When placing objects directly to document root and you don't have an exact position. Always start by calling `FindEmptySpace` at the start of your `batch_design` to find an empty area for your content. Never overlap root objects. Don't just pick random coordinates unless you know exact position from the context or the user request. For multiple sequential screens, use the previous element's ID as the `nodeId` parameter in `FindEmptySpace`.
> - Place components at the top and your screens below, growing to the right and down.
>
> - When creating new screens, represent each one as a top-level frame in `document`. Use `clip: true` on screen frames to prevent content overflow.
> - Keep the document root clean: only page/screen frames, reusable component frames, and other major container frames belong directly under `document`. Never place text, icons, buttons, cards, rows, images, or decorative shapes directly in `document`.
>
> - Use `get_editor_state`, `get_variables`, and `batch_get` MCP tools with reusable nodes to understand the current document structure.
> - When the design has repeated UI, consider building those as reusable components first and then instancing them, so edits to the component propagate to every instance.
>
> - Always load `get_guideline(category: guide, ...)` in order to learn how to solve the user's design task.
> - Load `get_guideline(category: style, ...)` for design inspiration
>
> - Changes in the document are presented in real-time to the user. Make the changes in a logical order as a designer would.
> - Minimize the time between the user requests and showing something on the screen. Users don't want to wait a long time before they see the progress.
> - Use the canvas as part of your thinking. You don't need to preplan every little detail. Iteratively design using the document.
>
> - Do NOT use or think in CSS/HTML properties or behavior. Pencil uses a custom format and has its own layout, rendering, and canvas behavior. Pencil has similar concepts and naming, but it's not the same as CSS/HTML.
> - Before using any property, check the pencil schema supports it and only use the properties that are specified.
> - If a property is not present in the schema, it's not supported. Find a different way to achieve the same visual effect.
> - Do NOT use: alignItems baseline/stretch, margin, percentage size. These values are not supported and will cause an error.
>
> Verify each section immediately after you are done with it. Don't wait until the end of the whole generation.
> Create a checklist to evaluate the design after you create it. Make sure to check for the following:
> - Layout it not collapsed or broken.
> - Content is not clipped outside the frame. Resize the container frames to fit the content if necessary.
> - Color contrast on text, objects, and background is sufficient.
> - Objects are properly aligned and spaced.
> - Intention and understanding of the pencil schema matches the visuals.
> After reviewing the design, do NOT delete it to make changes. If you want to fix it, always make direct updates to the existing objects.
>
> ## Style
>
> - Don't create repetitive styles and grids. Add some unique elements and layout to make the design feel more interesting.
> - Avoid wrapping every element in its own box or card. This is a common AI habit that makes designs look generic. Use a container only when it has a real structural or functional purpose.
> - Avoid excessive gradients, shadows, and rounded corners unless requested or when part of the brand identity. Be refined and intentional with effects and decorations
> - All Google fonts are available.
>
> ## Objects
>
> - All object coordinates are defined relative to the parent’s top-left corner.
> - Use a coordinate system where `x` increases to the right and `y` increases downward.
> - Objects rotate counter-clockwise around the top-left corner of their bounding box.
> - Only `frame` and `group` types can have children. Shapes, text, and other nodes cannot have children.
>
> - Properties do not cascade from parents to children. Every node is independent and must have all necessary properties specified.
> - Exclude default property values unless they are overriding a non-default value inside an instance.
>
> - Avoid duplicating the same dimension value across multiple sibling elements. If several children need to match their parent's width or height, use `fill_container` on each rather than hardcoding the parent's size repeatedly.
> - Explicitly specify `width` and `height` for shapes and other nodes whose size is not otherwise determined by layout or text behavior.
> - For layout-driven nodes, prefer `fit_content` and `fill_container` when appropriate instead of hardcoded numeric sizes.
> - Set children to `fill_container` to distribute them evenly within their parent. Use the `gap` property on the parent to add gaps between children.
>
> - Use `justifyContent: "center"` and `alignItems: "center"` on the parent to center its children both vertically and horizontally.
> - For text, follow `textGrowth` rules: do not set `width` or `height` unless `textGrowth` requires them.
> - Use `textAlign` or `textAlignVertical` to align the text within the text bounding box. `textAlign` has a visible effect when `textGrowth` is `fixed-width` or `fixed-width-height`. `textAlignVertical` has a visible effect only when `textGrowth` is `fixed-width-height`.
> - Setting `textAlign` or `textAlignVertical` will not change the position of the text bounding box. Use flexbox layout to align the object.
> - Use `textGrowth` to define text wrapping and bounding box sizing. When not specified, the default value is `"auto"`.
> - Possible `textGrowth` values:
>   - `auto`: `width` and `height` are always derived from the text content, any `width` or `height` you set is ignored. Never does line wrapping, text will always be on a single line.
>   - `fixed-width`: the `width` node property MUST be specified, `height` is calculated from the text content. Does line wrapping based on the object's bounding box width.
>   - `fixed-width-height`: both `width` and `height` node property MUST be specified. Does line wrapping based on the object's bounding box width. Text content will vertically overflow.
> - Only use `fixed-width-height` when you need to override the height of the text box. Prefer `fixed-width` with `fill_container` for text that needs to adapt to the parent container size.
> - If you want to wrap lines, you HAVE TO set the `textGrowth` to either `fixed-width` or `fixed-width-height`.
> - Never guess text dimensions, always rely on text wrapping and flexbox layout to size and position text. Any dimension guess for text will result in visual bugs.
> - Use the `lineHeight` property on text as a ratio relative to the font size: `0.0` means 0%, and `1.0` means 100%. If not specified, the font’s default line height will be applied.
>
> - Text has no `fill` by default and will be invisible. You MUST set the `fill` property on text objects to make them visible. Emoji requires `fill` as well.
> - To reference a variable, use a string value with a `$` prefix (`fill: "$primary-color"`, `gap: "$spacing-small"`)
> - `width` and `height` do not support percentage or viewport CSS values. Never use values like `"70%"`, `"100%"`, `"50vh"`, or `"calc(...)"` or even `value + "%"`. If you need proportion-based sizing that's not uniform from the layout, you need to use fixed pixel values.
> - `fill` can be set on wrapping containers to add a background color, gradient, or an image.
>
> ## Flexbox Layout
>
> - `layout` and `padding` is only accessible on `frame` type. Do NOT set `layout` and `padding` on other types of nodes.
> - **Prefer dynamic sizing over hardcoded values.** Use `fill_container` or `fit_content`, rather than repeating the parent's or children's pixel value. This makes designs more maintainable.
> - Always prefer flexbox layout; only use `layout: "none"` when truly necessary.
> - x and y properties are completely ignored when the node is in layout. Do NOT set x/y on a child unless the parent has layout: "none" or the node has layoutPosition: "absolute"
> - Only use explicit numerical sizes in rare cases when it cannot be inferred from the layout.
> - To align and distribute objects within a container with flexbox, wrap them in a parent object that has a `layout` property.
> - Frames always default to `horizontal` direction and `fit_content` sizing.
> - Padding affects ALL children uniformly - it creates space between the container's edges and its children.
> - To offset an individual child in flexbox, wrap it in a flexbox frame with padding.
> - Flexbox layout is single-axis only with no item wrapping. For grid-like layouts, manually create separate row frames.
> - A parent cannot be sized by its children using `fit_content` if all direct children are sized by the parent using `fill_container`. This creates circular dependency. Don't rely on the fallback value to resolve circular dependency.
>
> **Antipattern**
> ```js
> // WRONG: percentage values are not supported
> Insert(parent,{type:"frame",width:"100%",height:`${100/count}%`})
>
> // WRONG: padding on text is not supported, use a wrapping frame instead
> Insert(parent,{type:"text",content:"text",fontSize:12,padding:12})
>
> // WRONG: Collapses to 0 width. Parent defaults to fit_content. Child tries to fill it.
> badParent = Insert(screen, {type: "frame", layout: "vertical"});
> Insert(badParent, {type: "text", textGrowth: "fixed-width", width: "fill_container", content: "..."});
> ```
>
> ## Components and Instances
>
> - Object that has `reusable` property `true` can be also called a "component" or a "symbol"
> - Components will always have a random generated ID. It's not possible to set the ID of a component.
> - Components can be used to replicate the same object tree in multiple places, to avoid repetition. This is ideal for common widgets in a design, like buttons, form fields, toggles, cards, etc.
> - To reuse a component, use the `ref` object type that points to a reusable component. `ref` objects are also called "instances".
> - Instances have a `ref` property, which identifies the mother component.
> - The `ref` property of the instance must be set to the reused component's `id`.
> - Instances can be customized by overriding objects' properties in their subtree:
>   - To override properties of the component's root object, just put the overridden properties in the `ref` object.
>   - To override properties of an object inside the component's subtree, use the `descendants` property of the `ref`. Put the overridden properties under the customized object's `id`, path, or unique name inside the `descendants` map. If a name is not unique, use the node ID/path instead. When accessing multi-level descendant nodes in the component, use paths in the `descendants` object keys to access it, DO NOT create multiple levels of `descendants` objects.
>   - To override properties of an object inside a nested instance, the object's `id` must be prefixed by the instance's `id` followed by a slash (/). This works for arbitrarily nested component instances, e.g. consider an icon component; and a button component that contains an instance of this icon; and a menu component that contains multiple instances of the button component; and a sidebar component that contains an instance of the menu component!
>   - Parts of an instance's object tree can also be replaced with completely new objects: if the `type` property is present for a particular descendant, it means that the whole subtree will be swapped out with the override. In this case, the override must be a complete object tree, not just properties! This mechanism is useful for reusable container-type objects, such as windows, tables, grids, cards, etc.
> - An instance can emulate the deletion of a nested object from its subtree by overriding its `enabled` property with `false`.
> - You cannot reference components across files. If you want to use a component from a different file you must copy it over.
> - Try to use existing components in the document instead of always making new ones.
> - Instead of duplicating the same component multiple times with small tweaks. Try to find a way to make them more generic so the instances can use them in more places.
> - Overrides will be only applied to the object it's overriding. The changes will not be inherited to all children.
> - When parsing designs, treat "component" word broadly — some components are formally defined symbols that can be references, others are ad-hoc groupings that visually or functionally behave like components, sometimes their node name is prefixed "component/"
> - When copying nodes and modifying descendants, use the `descendants` property in the Copy operation. Never use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches.
> - When modifying component instance descendants:
>   - Use `Update(instance+"/childId", {...})` to change properties
>   - Use `newNode=Replace(instance+"/childId", {...})` to replace with a new node
>   - Use `newNode=Insert()` when the parent is a regular frame
> - IMPORTANT: DO NOT try to Update a node's descendant that you just copied (Copy), since copying will recreate the descendant nodes and it will assign new IDs to those children nodes.
> - Prefer using `fit_content` or `fill_container` size instance override to resize the component instance into the new location.
> - When an instance is not inside an object using `layout`, it must be positioned by overriding its `x` and `y` properties. Do this even if the position is (0, 0). Never override just a single position axis. Always override both if you need to specify the position.
> - An object must have a specified position, or be a child of an object using horizontal or vertical layout.
>
>
> **Pattern: Insert instance, then Update descendants**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> Update(card+"/childTitleId",{content:"Account Details"})
> Update(card+"/childDescriptionId",{content:"Manage your settings"})
> ```
>
> **Pattern: Insert instance, then Replace a slot**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> customContent=Replace(card+"/contentSlotId",{type:"frame",name:"Content",layout:"vertical"})
> item1=Insert(customContent,{type:"text",name:"Item 1",fontFamily:"Inter",content:"Item 1",fill:"#000000"})
> ```
>
> ### Text Sizing
>
> Text sizing depends on whether the parent or the text content controls the size.
>
> **Parent defines size** — parent must have flexbox layout and determines the size. Use `textGrowth:"fixed-width"` + `fill_container` (headings, descriptions, paragraphs):
>
> ```js
> section=Insert(parent,{type:"frame",name:"Header",layout:"vertical",width:400,gap:12,x:200,y:200})
> Insert(section,{type:"text",name:"Title",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Dashboard",fontSize:24,fill:"$text-primary"})
> Insert(section,{type:"text",name:"Subtitle",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Manage your account settings",fontSize:14,fill:"$text-secondary"})
> ```
>
> **Text defines size** — default `auto`, no width/height (button labels, tags, badges):
>
> ```js
> btn=Insert(parent,{type:"frame",name:"Button",padding:12,gap:8})
> Insert(btn,{type:"text",name:"Label",fontFamily:"Inter",content:"Submit",fontSize:14,fill:"$text-primary"})
> ```
>
> **Antipattern** — using pixel dimensions when layout can handle it:
>
> ```js
> container=Insert(parent,{type:"frame",name:"Button",width:200,height:100,padding:12})
> // WRONG: parent has layout, use fill_container instead of pixel width
> Insert(container,{type:"text",content:"abc",textGrowth:"fixed-width",width:320,fontSize:14})
> // WRONG: missing textGrowth after specifying width
> Insert(container,{type:"text",content:"abc",width:100,fontSize:14})
> ```
>
> ## Using placeholders
>
> - Any new, copied, or modified root frame MUST have `placeholder: true` for the entire duration of the work on it.
> - Once you start working inside a placeholder node, finish it before unsetting the flag.
> - Remove `placeholder: true` as soon as the frame is done — don't wait until all screens are finished.
>
> ## SVG Path
> - Always set an explicit `viewBox: [x, y, width, height]` on a path. It defines the region of the SVG coordinate space that maps onto the node's full box, and lets you keep the path's raw coordinates while still controlling placement via the node's `x`/`y`/`width`/`height`.
> - The viewBox region is stretched to fill the node's width/height.
>
> ### Graphs
>
> Always prefer bar charts and charts that can be built with simple layout configurations that the .pen format supports.
> Don't use absolutely positioned elements over the chart, as they won't align correctly.
> Don't manually match labels to bar positions and sizes. Rely on layout to position labels and bars correctly.
> When creating donut charts, always use `fill` color with `innerRadius` size to create the donut shape.
> Line charts cannot be easily built because the layout system cannot position individual points.
>
> ### Tables
>
> Tables need to use flex box layout.
> Tables follow strict hierarchy: **Table (frame) → Table Row (frame) → Table Cell (frame) → Table Cell Content**
> CRITICAL: Each cell is represented as a **frame** node and contains a cell content, which is usually text, label, button or instance of a component.
>
> **Antipattern** – Do NOT put content directly in the row, skipping the cell frame:
>
> ```js
> tableRow=Insert("kdl58",{type:"frame",layout:"horizontal"})
> Insert(tableRow,{type:"text",content:"John Doe"})
> Insert(tableRow,{type:"text",content:"joe.doe@example.com"})
> ```
>
> ## Scripting
>
> Use `script` node types to generate content with JavaScript. Scripts are `.js` files on disk, referenced via relative uri path in `scriptUri`.
>
> - Every script must start with `/** @schema 2.11 */` (current version). Missing this tag is an error.
> - Scripts receive a `pencil` object: `pencil.width`, `pencil.height`, `pencil.input.<name>`.
> - Scripts must return an array of node objects following the `.pen` schema.
> - Declare inputs as `@input name: type [= default]`. Available types: `number`, `string`, `boolean`, `color`, `ref`, `enum`.
> - Math.random() is deterministic in scripts and can be safely used for procedural generation.
>
> ```js
> /**
>  * @schema 2.11
>  * @input rows: number = 3
>  * @input gap: number = 4
>  * @input color: color = #3B82F6
>  * @input label: string = "Hello"
>  * @input filled: boolean = true
>  * @input layout: enum("grid", "stack", "scatter") = "grid"
>  * @input target: ref
>  */
> const rows = Math.max(1, Math.floor(pencil.input.rows));
> const cellH = (pencil.height - pencil.input.gap * (rows - 1)) / rows;
>
> const nodes = [];
> for (let r = 0; r < rows; r++) {
>   nodes.push({
>     type: "rectangle",
>     name: "Bar " + (r + 1),
>     x: 0,
>     y: r * (cellH + pencil.input.gap),
>     width: pencil.width,
>     height: cellH * Math.random(),
>     fill: pencil.input.color,
>   });
> }
>
> return nodes;
> ```
>
> ## Shaders
>
> The `shader` fill type can be used to create complex graphics effects using WebGL shaders.
>
> - Shaders are WebGL 1.0 fragment shaders (#version 100), with one addition: textureSize(sampler, lod) is available for aspect-correct texturing.
> - Supported uniform types:
>   - float, int: as numbers
>   - vec2/3/4, ivec2/3/4: as arrays of numbers or "#RRGGBB" strings for colors
>   - sampler2D: as image URL strings
> - Uniforms can be annotated with special comments:
>   - @color: marks vec3 or vec4 uniforms to use color picker controls.
>   - @default: sets the default value for the uniform.
>   - @resolution: set to the resolution of the output. e.g. can be used to normalize gl_FragCoord.
>   - @mouse: set to the mouse position in the same space as gl_FragCoord. For interactive effects.
>   - @time: set to the elapsed time in seconds. For animations.
>   - @sdf: a sampler2D set to an SDF texture of the node's shape. The r channel holds the signed distance in @resolution units (positive = inside). The gb channels hold the gradient of the distance field (direction of increasing distance), in texel space. Use gb instead of numerically differentiating the r channel!
>   - @min/@max: set the range of a uniform for better UI controls. Only applies to number uniforms.
>   - @range <min>, <max>: shorthand for @min and @max on the same line. Shows a slider in the UI.
>   - @label <text>: sets the uniform's display name in the UI. Always set the label.
>
> ```glsl
> /** @resolution */
> uniform vec2 u_resolution;
>
> /**
>  * @label Size
>  * @default 32
>  */
> uniform float u_size;
>
> /**
>  * @label Primary Color
>  * @color
>  * @default #ffffff
>  */
> uniform vec3 u_color1;
>
> /**
>  * @label Secondary Color
>  * @color
>  * @default #000000
>  */
> uniform vec3 u_color2;
>
> void main() {
>   vec2 cell = floor(gl_FragCoord.xy / u_size);
>   float check = mod(cell.x + cell.y, 2.0);
>   vec3 color = mix(u_color1, u_color2, check);
>   gl_FragColor = vec4(color, 1.0);
> }
> ```
>
> # batch_design documentation
>
> - The batch_design tool executes a small javascript snippet to modify the document.
> - Split work into multiple smaller `batch_design` calls focused on each section.
>
> - In case of an error, all modifications and the created globals will be reverted.
> - A list of warnings will be returned in the response message. Always Fix them in the next batch_design call.
>
> - Use normal JavaScript to generate repeated design structure: arrays, `for...of` loops, computed values, conditionals, object spreads, helper functions, and template strings are all useful.
> - Be smart about writing JavaScript to remove duplication and minimize the length of the generated code.
> - Prefer loops/spreads/helpers over long handwritten repetitive code when creating nav items, table rows, cards, metrics, menus, or similar repeated UI.
> - Do not include comments in the generated `batch_design` JavaScript snippet. Keep the input small.
>
> - You MUST set the `name` property with a human readable name on every node and child node you add. This will make the document cleaner and easier to understand. A mapping from names to ids will be returned at the end of each `batch_design` call so you can reference the created nodes in the next calls.
>
> - When creating style objects that are then spread when creating nodes. Make sure to include `type` in the style object.
> - Never set `id` when creating, copying, or replacing nodes or components. Pencil will always generate unique random IDs and override the input.
>
> - Always prefer the returned node id in `ref` property when creating instances.
> - You don't have access to the node properties after they are created.
>
> - Each `batch_design` is executed in it's own scope. Local variables are not shared between `batch_design` calls. To persist values between calls, don't use `const` or `let` when declaring variables, use `myNode = Insert(...)`.
>
> - Always split component creation into a separate batch_design in order to receive the generated node IDs.
>
> ## batch_design API
>
> Only these pencil functions are supported in batch_design. Use the other MCP tools for other operations.
>
> ```
> const document: string; // predefined root node
>
> Insert(parent: string, nodeData: Schema.Child): string; // insert
> Copy(path: string, parent: string, copyNodeData: Schema.Child): string; // copy
> Update(path: string, updateData: Schema.Child): void; // update
> Replace(path: string, nodeData: Schema.Child): string; // replace
> Move(path: string, parent: string | undefined, index?: number): void; // move
> Delete(path: string): void; // delete
> SetVariables(variables: Record<string, VariableDefinition>, replace?: boolean): void; // set variables/themes
> Generate(nodeId: string, type: "ai" | "stock", prompt: string): void; // generate image
> FindEmptySpace(input: { width: number; height: number; direction?: "top" | "right" | "bottom" | "left"; padding?: number; nodeId?: string }): { x: number; y: number; parentId?: string }; // find empty space
> ```
>
> The `path` argument (used by `Copy`, `Update`, `Replace`, `Move`, `Delete`) is a node ID, or a slash-separated path to a node nested inside a component instance (`instanceId/childId`). Slashes are only valid for component-instance nesting, not normal layer structure, and work for any nesting depth.
>
> ### Insert
>
> - Insert a new node at the end of the children array of the specified parent node.
> - An insert can only be a single node, if you want to add children to it, use the id return value in the next Insert call.
> - When working with components (reusable: true), insert their instances as refs with their properties overridden. Override descendant properties inline with the `descendants` map, or with subsequent Update operations.
> - Use the Replace to override children inside a component instance, e.g. `Replace("myInstance/childId",{type:"text",...})`
> - Returns the inserted node string ID
>
> ### Copy
>
> - "path": The ID of the existing node to copy. If you want to customize some properties of the copied node, just add them next to the `path` property. If you want to customize nested nodes _under_ the copied one, use the same kind of `descendants` map that `ref` nodes use!
>
> - When copying a node and modifying its descendants, you MUST use the "descendants" property in the Copy operation itself. DO NOT use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches. The copied node and its descendants receive new IDs, so Update operations referencing the original descendant IDs will fail.
> - `descendants`: Optional, used for components. Keys may be node IDs/paths or unique descendant ids inside the referenced component. If a name matches multiple descendants, use the node ID/path instead.
>
> - Copying a reusable node creates a connected instance (a `ref` node).
> - Returns the copied node string ID
>
> ### Update
>
> - Update the properties of existing nodes, without listing their children.
> - DO NOT use this to update the node's `children`, use Replace function for that.
> - This function CANNOT change the `id`, `type` or `ref` properties of any node!
> - `path`: The node to update.
>
> - `updateData": The node data to update
>
> ### Replace
>
> - Replace a node with a new node. All properties including the x/y are replaced.
> - This tool is ideal for swapping out parts of a component instance with new nodes.
> - Returns the replacement node's ID as string
> - `path`: The path of the node which will be replaced
> - `nodeData`: The properties of the new node
>
> ### Move
>
> - Move a node to a different location in the node tree in a .pen file.
> - `path`: The node to move.
> - `parent`: Optional. The new parent node. If omitted, the node stays under its current parent.
> - `index`: Optional new position of the moved node among its siblings. If omitted, the node is placed at the end.
>
> ### Delete
>
> - Delete a node from a .pen file.
> - `path`: The node to delete.
>
> ### SetVariables
>
> - Define or update the variables and themes of the .pen file. Read existing variables with the `get_variables` MCP tool first.
> - `variables`: An object keyed by variable name. Each value MUST be an object with a `type` (`"color"`, `"number"`, or `"string"`) and a `value`. Passing a bare value like `"#A3B59A"` or `16` will fail.
> - Variable names are arbitrary strings and MUST NOT begin with a dollar sign. The `$` prefix is only used when referencing a variable from a property (e.g. `fill: "$accent"`).
> - `replace` (optional, default `false`): when `false`, the variables are merged into the existing definitions. Pass `true` to completely replace the document's existing variable definitions.
> - Don't specify themes separately. If a variable uses theming, theme axes and values that aren't yet present in the document are registered automatically. For themed values, pass an array of `{value, theme}` entries.
>
> ```js
> SetVariables({
>   accent: {type:"color",value:"#A3B59A"},
>   "spacing-unit": {type:"number",value:16},
>   "font-heading": {type:"string",value:"Playfair Display"},
>   background: {type:"color",value:[
>     {value:"#F8F5F0",theme:{mode:"light"}},
>     {value:"#1A1A1A",theme:{mode:"dark"}}
>   ]}
> })
> ```
>
> ### Generate (image)
>
> - IMPORTANT: There is NO `image` node type! Images are applied as FILLS to nodes.
> - Do not guess random URLs for image fills, always use the Generate function to get an image from a stock or AI service.
> - To display an image: first Insert a frame or rectangle, then use Generate to apply the image as a fill.
> - `nodeId`: The ID of the node to apply the image fill to.
> - `type`: Either "ai" for AI-generated images or "stock" for stock photos from Unsplash.
> - `prompt`:
>   - For "ai": a detailed descriptive prompt.
>   - For "stock": 1-3 keyword search query following Stock query rules (simple, concrete, no use-case or abstract terms).
>
> ### FindEmptySpace
>
> - Finds an empty `width` x `height` area.
> - `direction` (optional, default "right"): where to search, one of "top", "right", "bottom", "left".
> - `padding` (optional, default 0): minimum distance from other elements.
> - `nodeId` (optional): anchor node used for chaining multiple screens together.
> - Returns `{x, y, parentId?}`. Insert or Copy into `parentId` (or `document` if absent) at the returned `x`/`y`.
>
> ## Examples
>
> Create the reusable `Metric` component (a vertical frame with a label and a value text) in its own `batch_design`.
>
> ```js
> const pos=FindEmptySpace({width:240,height:96,direction:"top", padding:80})
> metricCard=Insert(document,{type:"frame",name:"Metric",x:pos.x,y:pos.y,reusable:true,layout:"vertical",gap:4,placeholder:true})
> metricLabel=Insert(metricCard,{type:"text",name:"Label",fontFamily:"Inter",fontSize:13,fill:"$text-secondary",content:"Label"})
> metricValue=Insert(metricCard,{type:"text",name:"Value",fontFamily:"Inter",fontSize:28,fill:"$text-primary",content:"0"})
> Update(metricCard,{placeholder:false})
> ```
>
> Insert a screen at the document root and fill it with a loop:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> page=Insert(document,{type:"frame",name:"Landing Page",x:pos.x,y:pos.y,layout:"vertical",width:1440,padding:40,gap:24,clip:true,placeholder:true})
>
> const navItem={type:"text",fontFamily:"Inter",fontSize:14,fill:"$text-secondary"}
> nav=Insert(page,{type:"frame",name:"Nav",gap:32,alignItems:"center",width:"fill_container"})
> for (const label of ["Home","Our Story","Visit","Journal"]) {
>   Insert(nav,{...navItem,name:label,content:label})
> }
> ```
>
> Instantiate the component in a loop, keyed by the captured `metricLabel`/`metricValue` IDs:
>
> ```js
> row=Insert(page,{type:"frame",name:"Metrics",gap:16,width:"fill_container"})
> for (const [label,value] of [["Orders","1,284"],["Revenue","$48.2K"],["Customers","9,431"]]) {
>   Insert(row,{type:"ref",ref:metricCard,name:label,width:"fill_container",descendants:{[metricLabel]:{content:label},[metricValue]:{content:value}}})
> }
>
> Update(page,{placeholder:false})
> ```
>
> Copy an existing screen, customize its descendants in the same `Copy` call, and delete a node:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> dashboardV2=Copy("Xk9f2",document,{name:"Dashboard V2",x:pos.x,y:pos.y,placeholder:true,descendants:{"Jd6Ru":{fill:"#0F172A"},"Pc2Ny/Gh9Kf":{content:"Reports"}}})
> Update(dashboardV2,{placeholder:false})
>
> Delete("Vn4kP")
> ```
>
> Define the design tokens first, then reference them with `$` when building. Themed values are passed as `{value, theme}` arrays (the `dark` axis value is registered on the fly), so `$bg`/`$text-primary` references resolve per theme automatically:
>
> ```js
> SetVariables({
>   "bg":{type:"color",value:[
>     {value:"#FAFAF7",theme:{mode:"light"}},
>     {value:"#141414",theme:{mode:"dark"}}
>   ]},
>   "text-primary":{type:"color",value:[
>     {value:"#1A1A1A",theme:{mode:"light"}},
>     {value:"#F5F5F5",theme:{mode:"dark"}}
>   ]},
>   "font-body":{type:"string",value:"Inter"},
>   "gap-md":{type:"number",value:16}
> })
>
> card=Insert(document,{type:"frame",name:"Card",layout:"vertical",fill:"$bg",padding:"$gap-md",gap:"$gap-md",x:80,y:80})
> Insert(card,{type:"text",name:"Title",fontFamily:"$font-body",fontSize:20,fill:"$text-primary",content:"Tokens applied"})
> ```
> ````
>
> </details>
</details>

Yes, Pencil access is working.

- Active file: `one-app-starter.pen`
- Top-level nodes: 96
- Reusable components: 77
- Current selection: none
- Notable upload components already present: Drop Zone, Upload Progress Bar, Selected File Row, Document Checklist Card, and Request Summary Rail

This was read-only; nothing was modified.

> alright. our aim is to build both directions of the [document-upload-prd.md](docs/document-upload-prd.md) .. the designs have been created in Node ID: C7ypH and Node ID: hl9HZ . Don't forget the component driven approach. Create a detailed plan and execute

<details><summary>14 previous messages</summary>

> I’ll plan both Pencil directions at `C7ypH` and `hl9HZ` as complete, component-driven implementations of the PRD. Because this session is currently in Plan Mode, I’ll inspect and produce a decision-complete execution plan, but I won’t modify the canvas yet. I’m using the repo’s `prototype-oneapp-ui` skill plus the Pencil harness to inventory existing components, compare both directions, and define validation checkpoints.
>
> <details><summary>Explored 4 files, ran a command, called a tool</summary>
>
> <details><summary>Explored 5 files</summary>
>
> - Read `./.agent-skills/prototype-oneapp-ui/SKILL.md`
> - Read `~/.codex/skills/pencil-agent-harness/SKILL.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/design-system-extraction.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/component-recipes.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/validation-rubric.md`
>
> </details>
>
> - Ran `git status --short && sed -n '1,420p' docs/document-upload-prd.md && sed -n '1,260p' components/README.md && for f in components/button.md components/alert.md components/linear-progress.md components/list-item.md components/status-tag.md components/modal.md components/email-input.md; do echo "FILE $f"; sed -n '1,300p' "$f"; done && sed -n '1,220p' tokens/README.md && rg -n "font-family-primary|headline-page|body-default|body-supporting|color-(body|surface|line|primary|status|system)|gap-|padding-|shape-radius|height-component" tokens/tokens.css tokens/cx-fonts.css | sed -n '1,360p'`
>
> MCP tool call
>
> pencil.get_editor_state
>
> ```json
> {
>   "include_schema": true
> }
> ```
>
> ````text
> ## Currently active editor
> - `/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen`
>
> # Current Editor State 
>
> ## Selected Elements:
> - `hl9HZ` (frame): Direction B — Guided Focus Flow
>
> ### Reusable Components (77):
> - `zDTNI`: headline-page
> - `J1tfP5`: headline-section
> - `TiFMn`: headline-tile
> - `SFrI4`: data-primary
> - `mK1Ni`: data-secondary
> - `R2FdRX`: body-default
> - `Ynwlh`: body-supporting
> - `p2CLM8`: body-caption
> - `s478V`: label-large-1
> - `lXDsT`: label-default
> - `xdtxf`: label-small-1
> - `m67EKQ`: label-small-2
> - `WtzuO`: label-small-3
> - `g8khNm`: link-default
> - `yCxA1`: link-supporting
> - `IdCZz`: link-caption
> - `HXIox`: elevation-1
> - `brOMq`: elevation-2
> - `qxkJo`: elevation-3
> - `hW7DI`: Inline Loader
> - `Yqvtr`: Button
> - `ivKKx`: Badge
> - `vbCIR`: Alert
> - `etV8x`: Accordion Item
> - `m1OQY`: Bottom Nav Item
> - `L1PQ6`: Bottom Nav Bar
> - `pu7Qz`: Bottom Nav Bar / App
> - `I5RoC`: Checkbox
> - `fHLQG`: Checkbox Item
> - `PfwdN`: Dropdown Button
> - `Gfgyl`: Dropdown Menu Item
> - `um6nq`: Footer
> - `eMyOS`: Email Input
> - `F8DMV`: Standalone Text Link
> - `l3cTP`: Inline Text Link
> - `gKuqI`: List Item
> - `qsZEN`: Linear Progress
> - `px2Mh`: Toggle
> - `UgSyr`: Toast
> - `Q2LRq`: Popover Tooltip
> - `Hdd31`: Utility Nav Item
> - `Cvcl5`: Primary Nav Item
> - `z41dP`: Back Button
> - `coN5s`: Nav Menu Toggle
> - `owJch`: Web Nav Bar
> - `vo5O2`: Status Tag
> - `GVzGf`: Nudge
> - `L0laN`: Radio Button
> - `lzhBw`: Radio Button Item
> - `Yt9pb`: App Utility Nav Item
> - `bQ3SH`: App Utility Nav Group
> - `BHWrb`: App Menu Bar
> - `r4u9K`: Nav Drawer Close Button
> - `JvT5j`: Nav Drawer Utility List Item
> - `IvcEh`: Nav Drawer Navigation List Item
> - `h6SJf`: Mobile Web Nav Drawer
> - `Zc1Hw`: Modal / Basic
> - `K6ABlr`: Circular Data Visualizer
> - `YWNEH`: Snapshot Tile
> - `Fzo2q`: Snapshot Tile Header
> - `bSy4S`: Account Tile Data Item
> - `Tj3Hj`: Card Art / Type=CB
> - `TL0Hz`: Card Art / Type=BW
> - `Tnbay`: Card Art / Type=BW+
> - `D3wgD4`: Icon / Chat Lines
> - `o4vyh`: Tile Button
> - `kwrZm`: Drop Zone
> - `L4EBjh`: Upload Progress Bar
> - `nIrAd`: Rail Doc Item
> - `p3DcE`: Selected File Row
> - `Wwg0d`: Document Checklist Card
> - `q50qn`: Request Summary Rail
> - `zc9dZ`: B / Request Summary
> - `TQeTt`: B / Progress Header
> - `LMMoY`: B / Upload Zone
> - `pnQBG`: B / File Row
> - `NmACi`: B / Document Item
>
> # .pen File Schema
>
> ```typescript
> /** Theme axis -> axis value. E.g. { 'device': 'phone' } */
> export interface Theme { [key: string]: string; }
> /** Dollar-prefixed variable name; binds the property to that variable. */
> export type Variable = string;
> export type NumberOrVariable = number | Variable;
> /** Hex color: #RGB, #RRGGBB, or #RRGGBBAA. */
> export type Color = string;
> export type ColorOrVariable = Color | Variable;
> export type BooleanOrVariable = boolean | Variable;
> export type StringOrVariable = string | Variable;
> export interface Layout {
>   /** Flex layout direction. 'none'=absolutely positioned children. */
>   layout?: "none" | "vertical" | "horizontal";
>   /** Main-axis gap between children. Default 0. */
>   gap?: NumberOrVariable;
>   layoutIncludeStroke?: boolean;
>   /** Inside padding. */
>   padding?: /** all sides */ NumberOrVariable | /** [vertical, horizontal] */ [NumberOrVariable, NumberOrVariable] | /** [top, right, bottom, left] */ [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable];
>   /** Main-axis alignment. Default 'start'. */
>   justifyContent?: "start" | "center" | "end" | "space_between" | "space_around";
>   /** Cross-axis alignment. Default 'start'. */
>   alignItems?: "start" | "center" | "end";
> }
> /** Dynamic layout size:
> - fit_content: combined size of children, requires layout on the node (fallback when no children).
> - fill_container: parent size, requires layout on the parent (fallback when not in a layout or when using absolute position).
> Optional fallback in parens, e.g. 'fit_content(100)'. */
> export type SizingBehavior = string;
> /** Position relative to parent. X right, Y down. IGNORED when parent uses flex layout. */
> export interface Position { x?: number; y?: number; }
> export interface Size { width?: NumberOrVariable | SizingBehavior; height?: NumberOrVariable | SizingBehavior; }
> export type BlendMode = 'normal' | 'darken' | 'multiply' | 'linearBurn' | 'colorBurn' | 'light' | 'screen' | 'linearDodge' | 'colorDodge' | 'overlay' | 'softLight' | 'hardLight' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
> export type Fill = ColorOrVariable | {
> type: "color";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> /** Fill opacity can only be set via the hex alpha channel. */
> color: ColorOrVariable;
> } | {
> type: "gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> gradientType?: "linear" | "radial" | "angular";
> opacity?: NumberOrVariable;
> /** Normalized to bbox. Default 0.5,0.5. */
> center?: Position;
> /** Normalized to bbox. Default 1,1. Linear: height = gradient length, width ignored. Radial/Angular: ellipse diameters. */
> size?: { width?: NumberOrVariable; height?: NumberOrVariable };
> /** Degrees CCW (0° up, 90° left, 180° down). */
> rotation?: NumberOrVariable;
> colors?: { color: ColorOrVariable; position: NumberOrVariable }[];
> } | /** Image fill. URL is relative to the .pen file, e.g. `./image.jpg`. */ { type: "image"; enabled?: BooleanOrVariable; blendMode?: BlendMode; opacity?: NumberOrVariable; url?: string; mode?: "stretch" | "fill" | "fit" } | /** Shader fill. URL points to a WebGL 1.0 (#version 100) fragment shader file, relative to the .pen file, e.g. `./effect.glsl`. Uniforms are described via `@directive` annotations inside block comments in the shader source. A `vec2` uniform annotated with `@resolution` is auto-bound to the fill size in pixels. Other uniforms' user-set values are stored in `uniforms`. */ {
> type: "shader";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> url: string;
> /** Override values for shader uniforms, keyed by uniform name. Uniforms annotated with `@resolution` or `@time` must not appear here. Allowed value shapes: number (float/int), boolean (bool), hex color string like `#RRGGBB[AA]` (color), array of 2-4 numbers (vec2/3/4), or a variable reference `$name` (numeric uniforms accept number variables; color uniforms accept color variables). */
> uniforms?: { [key: string]: number | boolean | string | number[] };
> } | /** Bezier-interpolated color grid, row-major. Keep edge points at default positions. */ {
> type: "mesh_gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> columns?: number;
> rows?: number;
> /** Color per vertex. */
> colors?: ColorOrVariable[];
> /** columns * rows points in [0,1]. */
> points?: (/** Auto-generated handles. */ [number, number] | /** Optional bezier handles (relative offsets); omitted = auto. */ { position: [number, number]; leftHandle?: [number, number]; rightHandle?: [number, number]; topHandle?: [number, number]; bottomHandle?: [number, number] })[];
> };
> export type Fills = Fill | Fill[];
> export interface CanHaveStroke {
>   stroke?: Fills;
>   /** Stroke thickness, uniform or per side. */
>   strokeWidth?: NumberOrVariable | { top?: NumberOrVariable; right?: NumberOrVariable; bottom?: NumberOrVariable; left?: NumberOrVariable };
>   strokeLinecap?: "butt" | "round" | "square";
>   strokeLinejoin?: "miter" | "bevel" | "round";
>   strokeAlignment?: "inner" | "center" | "outer";
> }
> export type Effect = /** Blurs the entire node. */ { enabled?: BooleanOrVariable; type: "blur"; radius?: NumberOrVariable } | /** Blurs the backdrop behind the node. */ { enabled?: BooleanOrVariable; type: "background_blur"; radius?: NumberOrVariable } | /** Inner or outer drop shadow. */ { type: "shadow"; enabled?: BooleanOrVariable; shadowType?: "inner" | "outer"; offset?: { x: NumberOrVariable; y: NumberOrVariable }; spread?: NumberOrVariable; blur?: NumberOrVariable; color?: ColorOrVariable; blendMode?: BlendMode };
> export type Effects = Effect | Effect[];
> export interface CanHaveEffects { effect?: Effects; }
> export interface CanHaveGraphics extends CanHaveEffects, CanHaveStroke { fill?: Fills; }
> export interface Entity extends Position {
>   /** Unique string; MUST NOT contain '/'. Auto-generated if omitted. */
>   id: string;
>   name?: string;
>   context?: string;
>   /** When true, can be duplicated via `ref` objects. Default false. */
>   reusable?: boolean;
>   theme?: Theme;
>   enabled?: BooleanOrVariable;
>   opacity?: NumberOrVariable;
>   flipX?: BooleanOrVariable;
>   flipY?: BooleanOrVariable;
>   /** Absolute position detaches the object from parent's layout and can be absolute positioned. Default auto */
>   layoutPosition?: "auto" | "absolute";
>   metadata?: { type: string; [key: string]: any };
>   /** Degrees CCW around top-left corner. */
>   rotation?: NumberOrVariable;
> }
> export interface Rectangleish extends Entity, Size, CanHaveGraphics { cornerRadius?: NumberOrVariable | [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable]; }
> /** Position is the top-left corner. */
> export interface Rectangle extends Rectangleish { type: "rectangle"; }
> /** Defined by its bounding rectangle. */
> export interface Ellipse extends Entity, Size, CanHaveGraphics {
>   type: "ellipse";
>   /** Ring inner/outer radius ratio. 0=solid, 1=hollow. Default 0. */
>   innerRadius?: NumberOrVariable;
>   /** Arc start angle, degrees CCW from right. Default 0. */
>   startAngle?: NumberOrVariable;
>   /** Arc length from startAngle. Positive=CCW, negative=CW. Range -360..360. Default 360. */
>   sweepAngle?: NumberOrVariable;
> }
> /** Defined by its bounding rectangle. */
> export interface Polygon extends Entity, Size, CanHaveGraphics { type: "polygon"; polygonCount?: NumberOrVariable; cornerRadius?: NumberOrVariable; }
> export interface Path extends Entity, Size, CanHaveGraphics {
>   /** Default 'nonzero'. */
>   fillRule?: "nonzero" | "evenodd";
>   /** SVG path. */
>   geometry?: string;
>   /** SVG coord-space [x,y,w,h] mapping onto the node box. Default: tight bbox of geometry. */
>   viewBox?: [number, number, number, number];
>   type: "path";
> }
> export interface TextStyle {
>   fontFamily?: StringOrVariable;
>   fontSize?: NumberOrVariable;
>   fontWeight?: StringOrVariable;
>   letterSpacing?: NumberOrVariable;
>   fontStyle?: StringOrVariable;
>   underline?: BooleanOrVariable;
>   /** Multiplier of fontSize. Defaults to font's built-in. */
>   lineHeight?: NumberOrVariable;
>   textAlign?: "left" | "center" | "right" | "justify";
>   textAlignVertical?: "top" | "middle" | "bottom";
>   strikethrough?: BooleanOrVariable;
>   href?: string;
> }
> export type TextContent = StringOrVariable;
> export interface Text extends Entity, Size, CanHaveGraphics, TextStyle {
>   type: "text";
>   content?: TextContent;
>   /** Required before width/height take effect.
> 'auto': grows to fit; no wrapping.
> 'fixed-width': width fixed, wraps; height grows.
> 'fixed-width-height': both fixed; may overflow. */
>   textGrowth?: "auto" | "fixed-width" | "fixed-width-height";
> }
> export interface CanHaveChildren { children?: Child[]; }
> /** Container to create hierarchy and layout. default layout=horizontal, width=fit_content, height=fit_content, clip=false. */
> export interface Frame extends Rectangleish, CanHaveChildren, Layout {
>   type: "frame";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   placeholder?: boolean;
>   /** Marks frame as a slot for component instances. Array entries are IDs of recommended reusable child components (e.g. menu items inside a menu bar). */
>   slot?: false | string[];
> }
> export interface Group extends Entity, CanHaveChildren, CanHaveEffects { type: "group"; }
> export interface Note extends Entity, Size, TextStyle { type: "note"; content?: TextContent; }
> export interface Prompt extends Entity, Size, TextStyle { type: "prompt"; content?: TextContent; model?: StringOrVariable; }
> export interface Context extends Entity, Size, TextStyle { type: "context"; content?: TextContent; }
> /** Icon from a library. The icon is scaled to fit the width and height. */
> export interface Icon extends Entity, Size, CanHaveEffects {
>   type: "icon";
>   /** Valid: 'lucide', 'feather', 'Material Symbols Outlined', 'Material Symbols Rounded', 'Material Symbols Sharp', 'phosphor'. */
>   library?: StringOrVariable;
>   icon?: StringOrVariable;
>   /** Variable weight, 100-700; only for libraries that support it. */
>   weight?: NumberOrVariable;
>   fill?: Fills;
> }
> /** Generates nested children from JavaScript. */
> export interface Script extends Entity, Size {
>   type: "script";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   /** JS file URI, relative to the .pen file. */
>   scriptUri?: string;
>   /** Input values by name. */
>   inputs?: { [key: string]: string | number | boolean | Variable };
> }
> /** Reuses another object. */
> export interface Ref extends Entity {
>   type: "ref";
>   /** ID of the referenced object. */
>   ref: string;
>   /** Customize descendant properties. */
>   descendants?: { [key: string /** ID path of the descendant. */]: {} /** Based on the presence of `type`:
> - `type` is not present = property overrides: the descendant node is updated with the listed properties.
> - `type` is present = replacement: the descendant node is fully replaced with a new node tree. */ };
>   [key: string]: any;
> }
> export type Child = Frame | Group | Rectangle | Ellipse | Path | Polygon | Text | Note | Prompt | Context | Icon | Script | Ref;
> export type IdPath = string;
> export interface Document { version: "2.14"; themes?: { [key: string /** RegEx: [^:]+ */]: string[] }; imports?: { [key: string]: string /** Value: relative URI of imported .pen file. Key: short alias. */ }; variables?: { [key: string /** RegEx: [^:]+ */]: { type: "boolean"; value: BooleanOrVariable | { value: BooleanOrVariable; theme?: Theme }[] } | { type: "color"; value: ColorOrVariable | { value: ColorOrVariable; theme?: Theme }[] } | { type: "number"; value: NumberOrVariable | { value: NumberOrVariable; theme?: Theme }[] } | { type: "string"; value: StringOrVariable | { value: StringOrVariable; theme?: Theme }[] } }; children: (Frame | Group | Rectangle | Ellipse | Polygon | Path | Text | Note | Context | Prompt | Icon | Script | Ref)[]; }
> ```
>
> # General instructions when editing .pen files
>
> - Pencil is an infinite canvas design tool with nested object hierarchy.
>
> - Be very thorough with your design changes and make sure all the task's needs are met.
> - Favor copying existing content and updating the copied content later, rather than generating new content.
> - When creating new variables make sure you are not accidentally overwriting any existing design.
> - Don't have multiple screens in-progress at the same time unless you are using sub-agents. Finish one screen at a time to not leave them in a broken state.
>
> - User may ask for technical modifications like removing, moving, re-ordering, clearing, and copying objects/variables, or just ask questions. Only do what's requested and nothing more.
> - Pencil is a collaborative multiplayer environment: the document can change while you work, so the state you remember may be stale. If a node is missing or no longer matches what you expected, re-read instead of recreating it, and don't undo changes the user made in the meantime.
>
> - When adding more content to a frame make sure the frame has the right layout, or is big enough to fit the new content. Resize the frame if necessary. There is no scrolling and the entire content should always be visible on the canvas.
>
> - When placing objects directly to document root and you don't have an exact position. Always start by calling `FindEmptySpace` at the start of your `batch_design` to find an empty area for your content. Never overlap root objects. Don't just pick random coordinates unless you know exact position from the context or the user request. For multiple sequential screens, use the previous element's ID as the `nodeId` parameter in `FindEmptySpace`.
> - Place components at the top and your screens below, growing to the right and down.
>
> - When creating new screens, represent each one as a top-level frame in `document`. Use `clip: true` on screen frames to prevent content overflow.
> - Keep the document root clean: only page/screen frames, reusable component frames, and other major container frames belong directly under `document`. Never place text, icons, buttons, cards, rows, images, or decorative shapes directly in `document`.
>
> - Use `get_editor_state`, `get_variables`, and `batch_get` MCP tools with reusable nodes to understand the current document structure.
> - When the design has repeated UI, consider building those as reusable components first and then instancing them, so edits to the component propagate to every instance.
>
> - Always load `get_guideline(category: guide, ...)` in order to learn how to solve the user's design task.
> - Load `get_guideline(category: style, ...)` for design inspiration
>
> - Changes in the document are presented in real-time to the user. Make the changes in a logical order as a designer would.
> - Minimize the time between the user requests and showing something on the screen. Users don't want to wait a long time before they see the progress.
> - Use the canvas as part of your thinking. You don't need to preplan every little detail. Iteratively design using the document.
>
> - Do NOT use or think in CSS/HTML properties or behavior. Pencil uses a custom format and has its own layout, rendering, and canvas behavior. Pencil has similar concepts and naming, but it's not the same as CSS/HTML.
> - Before using any property, check the pencil schema supports it and only use the properties that are specified.
> - If a property is not present in the schema, it's not supported. Find a different way to achieve the same visual effect.
> - Do NOT use: alignItems baseline/stretch, margin, percentage size. These values are not supported and will cause an error.
>
> Verify each section immediately after you are done with it. Don't wait until the end of the whole generation.
> Create a checklist to evaluate the design after you create it. Make sure to check for the following:
> - Layout it not collapsed or broken.
> - Content is not clipped outside the frame. Resize the container frames to fit the content if necessary.
> - Color contrast on text, objects, and background is sufficient.
> - Objects are properly aligned and spaced.
> - Intention and understanding of the pencil schema matches the visuals.
> After reviewing the design, do NOT delete it to make changes. If you want to fix it, always make direct updates to the existing objects.
>
> ## Style
>
> - Don't create repetitive styles and grids. Add some unique elements and layout to make the design feel more interesting.
> - Avoid wrapping every element in its own box or card. This is a common AI habit that makes designs look generic. Use a container only when it has a real structural or functional purpose.
> - Avoid excessive gradients, shadows, and rounded corners unless requested or when part of the brand identity. Be refined and intentional with effects and decorations
> - All Google fonts are available.
>
> ## Objects
>
> - All object coordinates are defined relative to the parent’s top-left corner.
> - Use a coordinate system where `x` increases to the right and `y` increases downward.
> - Objects rotate counter-clockwise around the top-left corner of their bounding box.
> - Only `frame` and `group` types can have children. Shapes, text, and other nodes cannot have children.
>
> - Properties do not cascade from parents to children. Every node is independent and must have all necessary properties specified.
> - Exclude default property values unless they are overriding a non-default value inside an instance.
>
> - Avoid duplicating the same dimension value across multiple sibling elements. If several children need to match their parent's width or height, use `fill_container` on each rather than hardcoding the parent's size repeatedly.
> - Explicitly specify `width` and `height` for shapes and other nodes whose size is not otherwise determined by layout or text behavior.
> - For layout-driven nodes, prefer `fit_content` and `fill_container` when appropriate instead of hardcoded numeric sizes.
> - Set children to `fill_container` to distribute them evenly within their parent. Use the `gap` property on the parent to add gaps between children.
>
> - Use `justifyContent: "center"` and `alignItems: "center"` on the parent to center its children both vertically and horizontally.
> - For text, follow `textGrowth` rules: do not set `width` or `height` unless `textGrowth` requires them.
> - Use `textAlign` or `textAlignVertical` to align the text within the text bounding box. `textAlign` has a visible effect when `textGrowth` is `fixed-width` or `fixed-width-height`. `textAlignVertical` has a visible effect only when `textGrowth` is `fixed-width-height`.
> - Setting `textAlign` or `textAlignVertical` will not change the position of the text bounding box. Use flexbox layout to align the object.
> - Use `textGrowth` to define text wrapping and bounding box sizing. When not specified, the default value is `"auto"`.
> - Possible `textGrowth` values:
>   - `auto`: `width` and `height` are always derived from the text content, any `width` or `height` you set is ignored. Never does line wrapping, text will always be on a single line.
>   - `fixed-width`: the `width` node property MUST be specified, `height` is calculated from the text content. Does line wrapping based on the object's bounding box width.
>   - `fixed-width-height`: both `width` and `height` node property MUST be specified. Does line wrapping based on the object's bounding box width. Text content will vertically overflow.
> - Only use `fixed-width-height` when you need to override the height of the text box. Prefer `fixed-width` with `fill_container` for text that needs to adapt to the parent container size.
> - If you want to wrap lines, you HAVE TO set the `textGrowth` to either `fixed-width` or `fixed-width-height`.
> - Never guess text dimensions, always rely on text wrapping and flexbox layout to size and position text. Any dimension guess for text will result in visual bugs.
> - Use the `lineHeight` property on text as a ratio relative to the font size: `0.0` means 0%, and `1.0` means 100%. If not specified, the font’s default line height will be applied.
>
> - Text has no `fill` by default and will be invisible. You MUST set the `fill` property on text objects to make them visible. Emoji requires `fill` as well.
> - To reference a variable, use a string value with a `$` prefix (`fill: "$primary-color"`, `gap: "$spacing-small"`)
> - `width` and `height` do not support percentage or viewport CSS values. Never use values like `"70%"`, `"100%"`, `"50vh"`, or `"calc(...)"` or even `value + "%"`. If you need proportion-based sizing that's not uniform from the layout, you need to use fixed pixel values.
> - `fill` can be set on wrapping containers to add a background color, gradient, or an image.
>
> ## Flexbox Layout
>
> - `layout` and `padding` is only accessible on `frame` type. Do NOT set `layout` and `padding` on other types of nodes.
> - **Prefer dynamic sizing over hardcoded values.** Use `fill_container` or `fit_content`, rather than repeating the parent's or children's pixel value. This makes designs more maintainable.
> - Always prefer flexbox layout; only use `layout: "none"` when truly necessary.
> - x and y properties are completely ignored when the node is in layout. Do NOT set x/y on a child unless the parent has layout: "none" or the node has layoutPosition: "absolute"
> - Only use explicit numerical sizes in rare cases when it cannot be inferred from the layout.
> - To align and distribute objects within a container with flexbox, wrap them in a parent object that has a `layout` property.
> - Frames always default to `horizontal` direction and `fit_content` sizing.
> - Padding affects ALL children uniformly - it creates space between the container's edges and its children.
> - To offset an individual child in flexbox, wrap it in a flexbox frame with padding.
> - Flexbox layout is single-axis only with no item wrapping. For grid-like layouts, manually create separate row frames.
> - A parent cannot be sized by its children using `fit_content` if all direct children are sized by the parent using `fill_container`. This creates circular dependency. Don't rely on the fallback value to resolve circular dependency.
>
> **Antipattern**
> ```js
> // WRONG: percentage values are not supported
> Insert(parent,{type:"frame",width:"100%",height:`${100/count}%`})
>
> // WRONG: padding on text is not supported, use a wrapping frame instead
> Insert(parent,{type:"text",content:"text",fontSize:12,padding:12})
>
> // WRONG: Collapses to 0 width. Parent defaults to fit_content. Child tries to fill it.
> badParent = Insert(screen, {type: "frame", layout: "vertical"});
> Insert(badParent, {type: "text", textGrowth: "fixed-width", width: "fill_container", content: "..."});
> ```
>
> ## Components and Instances
>
> - Object that has `reusable` property `true` can be also called a "component" or a "symbol"
> - Components will always have a random generated ID. It's not possible to set the ID of a component.
> - Components can be used to replicate the same object tree in multiple places, to avoid repetition. This is ideal for common widgets in a design, like buttons, form fields, toggles, cards, etc.
> - To reuse a component, use the `ref` object type that points to a reusable component. `ref` objects are also called "instances".
> - Instances have a `ref` property, which identifies the mother component.
> - The `ref` property of the instance must be set to the reused component's `id`.
> - Instances can be customized by overriding objects' properties in their subtree:
>   - To override properties of the component's root object, just put the overridden properties in the `ref` object.
>   - To override properties of an object inside the component's subtree, use the `descendants` property of the `ref`. Put the overridden properties under the customized object's `id`, path, or unique name inside the `descendants` map. If a name is not unique, use the node ID/path instead. When accessing multi-level descendant nodes in the component, use paths in the `descendants` object keys to access it, DO NOT create multiple levels of `descendants` objects.
>   - To override properties of an object inside a nested instance, the object's `id` must be prefixed by the instance's `id` followed by a slash (/). This works for arbitrarily nested component instances, e.g. consider an icon component; and a button component that contains an instance of this icon; and a menu component that contains multiple instances of the button component; and a sidebar component that contains an instance of the menu component!
>   - Parts of an instance's object tree can also be replaced with completely new objects: if the `type` property is present for a particular descendant, it means that the whole subtree will be swapped out with the override. In this case, the override must be a complete object tree, not just properties! This mechanism is useful for reusable container-type objects, such as windows, tables, grids, cards, etc.
> - An instance can emulate the deletion of a nested object from its subtree by overriding its `enabled` property with `false`.
> - You cannot reference components across files. If you want to use a component from a different file you must copy it over.
> - Try to use existing components in the document instead of always making new ones.
> - Instead of duplicating the same component multiple times with small tweaks. Try to find a way to make them more generic so the instances can use them in more places.
> - Overrides will be only applied to the object it's overriding. The changes will not be inherited to all children.
> - When parsing designs, treat "component" word broadly — some components are formally defined symbols that can be references, others are ad-hoc groupings that visually or functionally behave like components, sometimes their node name is prefixed "component/"
> - When copying nodes and modifying descendants, use the `descendants` property in the Copy operation. Never use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches.
> - When modifying component instance descendants:
>   - Use `Update(instance+"/childId", {...})` to change properties
>   - Use `newNode=Replace(instance+"/childId", {...})` to replace with a new node
>   - Use `newNode=Insert()` when the parent is a regular frame
> - IMPORTANT: DO NOT try to Update a node's descendant that you just copied (Copy), since copying will recreate the descendant nodes and it will assign new IDs to those children nodes.
> - Prefer using `fit_content` or `fill_container` size instance override to resize the component instance into the new location.
> - When an instance is not inside an object using `layout`, it must be positioned by overriding its `x` and `y` properties. Do this even if the position is (0, 0). Never override just a single position axis. Always override both if you need to specify the position.
> - An object must have a specified position, or be a child of an object using horizontal or vertical layout.
>
>
> **Pattern: Insert instance, then Update descendants**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> Update(card+"/childTitleId",{content:"Account Details"})
> Update(card+"/childDescriptionId",{content:"Manage your settings"})
> ```
>
> **Pattern: Insert instance, then Replace a slot**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> customContent=Replace(card+"/contentSlotId",{type:"frame",name:"Content",layout:"vertical"})
> item1=Insert(customContent,{type:"text",name:"Item 1",fontFamily:"Inter",content:"Item 1",fill:"#000000"})
> ```
>
> ### Text Sizing
>
> Text sizing depends on whether the parent or the text content controls the size.
>
> **Parent defines size** — parent must have flexbox layout and determines the size. Use `textGrowth:"fixed-width"` + `fill_container` (headings, descriptions, paragraphs):
>
> ```js
> section=Insert(parent,{type:"frame",name:"Header",layout:"vertical",width:400,gap:12,x:200,y:200})
> Insert(section,{type:"text",name:"Title",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Dashboard",fontSize:24,fill:"$text-primary"})
> Insert(section,{type:"text",name:"Subtitle",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Manage your account settings",fontSize:14,fill:"$text-secondary"})
> ```
>
> **Text defines size** — default `auto`, no width/height (button labels, tags, badges):
>
> ```js
> btn=Insert(parent,{type:"frame",name:"Button",padding:12,gap:8})
> Insert(btn,{type:"text",name:"Label",fontFamily:"Inter",content:"Submit",fontSize:14,fill:"$text-primary"})
> ```
>
> **Antipattern** — using pixel dimensions when layout can handle it:
>
> ```js
> container=Insert(parent,{type:"frame",name:"Button",width:200,height:100,padding:12})
> // WRONG: parent has layout, use fill_container instead of pixel width
> Insert(container,{type:"text",content:"abc",textGrowth:"fixed-width",width:320,fontSize:14})
> // WRONG: missing textGrowth after specifying width
> Insert(container,{type:"text",content:"abc",width:100,fontSize:14})
> ```
>
> ## Using placeholders
>
> - Any new, copied, or modified root frame MUST have `placeholder: true` for the entire duration of the work on it.
> - Once you start working inside a placeholder node, finish it before unsetting the flag.
> - Remove `placeholder: true` as soon as the frame is done — don't wait until all screens are finished.
>
> ## SVG Path
> - Always set an explicit `viewBox: [x, y, width, height]` on a path. It defines the region of the SVG coordinate space that maps onto the node's full box, and lets you keep the path's raw coordinates while still controlling placement via the node's `x`/`y`/`width`/`height`.
> - The viewBox region is stretched to fill the node's width/height.
>
> ### Graphs
>
> Always prefer bar charts and charts that can be built with simple layout configurations that the .pen format supports.
> Don't use absolutely positioned elements over the chart, as they won't align correctly.
> Don't manually match labels to bar positions and sizes. Rely on layout to position labels and bars correctly.
> When creating donut charts, always use `fill` color with `innerRadius` size to create the donut shape.
> Line charts cannot be easily built because the layout system cannot position individual points.
>
> ### Tables
>
> Tables need to use flex box layout.
> Tables follow strict hierarchy: **Table (frame) → Table Row (frame) → Table Cell (frame) → Table Cell Content**
> CRITICAL: Each cell is represented as a **frame** node and contains a cell content, which is usually text, label, button or instance of a component.
>
> **Antipattern** – Do NOT put content directly in the row, skipping the cell frame:
>
> ```js
> tableRow=Insert("kdl58",{type:"frame",layout:"horizontal"})
> Insert(tableRow,{type:"text",content:"John Doe"})
> Insert(tableRow,{type:"text",content:"joe.doe@example.com"})
> ```
>
> ## Scripting
>
> Use `script` node types to generate content with JavaScript. Scripts are `.js` files on disk, referenced via relative uri path in `scriptUri`.
>
> - Every script must start with `/** @schema 2.11 */` (current version). Missing this tag is an error.
> - Scripts receive a `pencil` object: `pencil.width`, `pencil.height`, `pencil.input.<name>`.
> - Scripts must return an array of node objects following the `.pen` schema.
> - Declare inputs as `@input name: type [= default]`. Available types: `number`, `string`, `boolean`, `color`, `ref`, `enum`.
> - Math.random() is deterministic in scripts and can be safely used for procedural generation.
>
> ```js
> /**
>  * @schema 2.11
>  * @input rows: number = 3
>  * @input gap: number = 4
>  * @input color: color = #3B82F6
>  * @input label: string = "Hello"
>  * @input filled: boolean = true
>  * @input layout: enum("grid", "stack", "scatter") = "grid"
>  * @input target: ref
>  */
> const rows = Math.max(1, Math.floor(pencil.input.rows));
> const cellH = (pencil.height - pencil.input.gap * (rows - 1)) / rows;
>
> const nodes = [];
> for (let r = 0; r < rows; r++) {
>   nodes.push({
>     type: "rectangle",
>     name: "Bar " + (r + 1),
>     x: 0,
>     y: r * (cellH + pencil.input.gap),
>     width: pencil.width,
>     height: cellH * Math.random(),
>     fill: pencil.input.color,
>   });
> }
>
> return nodes;
> ```
>
> ## Shaders
>
> The `shader` fill type can be used to create complex graphics effects using WebGL shaders.
>
> - Shaders are WebGL 1.0 fragment shaders (#version 100), with one addition: textureSize(sampler, lod) is available for aspect-correct texturing.
> - Supported uniform types:
>   - float, int: as numbers
>   - vec2/3/4, ivec2/3/4: as arrays of numbers or "#RRGGBB" strings for colors
>   - sampler2D: as image URL strings
> - Uniforms can be annotated with special comments:
>   - @color: marks vec3 or vec4 uniforms to use color picker controls.
>   - @default: sets the default value for the uniform.
>   - @resolution: set to the resolution of the output. e.g. can be used to normalize gl_FragCoord.
>   - @mouse: set to the mouse position in the same space as gl_FragCoord. For interactive effects.
>   - @time: set to the elapsed time in seconds. For animations.
>   - @sdf: a sampler2D set to an SDF texture of the node's shape. The r channel holds the signed distance in @resolution units (positive = inside). The gb channels hold the gradient of the distance field (direction of increasing distance), in texel space. Use gb instead of numerically differentiating the r channel!
>   - @min/@max: set the range of a uniform for better UI controls. Only applies to number uniforms.
>   - @range <min>, <max>: shorthand for @min and @max on the same line. Shows a slider in the UI.
>   - @label <text>: sets the uniform's display name in the UI. Always set the label.
>
> ```glsl
> /** @resolution */
> uniform vec2 u_resolution;
>
> /**
>  * @label Size
>  * @default 32
>  */
> uniform float u_size;
>
> /**
>  * @label Primary Color
>  * @color
>  * @default #ffffff
>  */
> uniform vec3 u_color1;
>
> /**
>  * @label Secondary Color
>  * @color
>  * @default #000000
>  */
> uniform vec3 u_color2;
>
> void main() {
>   vec2 cell = floor(gl_FragCoord.xy / u_size);
>   float check = mod(cell.x + cell.y, 2.0);
>   vec3 color = mix(u_color1, u_color2, check);
>   gl_FragColor = vec4(color, 1.0);
> }
> ```
>
> # batch_design documentation
>
> - The batch_design tool executes a small javascript snippet to modify the document.
> - Split work into multiple smaller `batch_design` calls focused on each section.
>
> - In case of an error, all modifications and the created globals will be reverted.
> - A list of warnings will be returned in the response message. Always Fix them in the next batch_design call.
>
> - Use normal JavaScript to generate repeated design structure: arrays, `for...of` loops, computed values, conditionals, object spreads, helper functions, and template strings are all useful.
> - Be smart about writing JavaScript to remove duplication and minimize the length of the generated code.
> - Prefer loops/spreads/helpers over long handwritten repetitive code when creating nav items, table rows, cards, metrics, menus, or similar repeated UI.
> - Do not include comments in the generated `batch_design` JavaScript snippet. Keep the input small.
>
> - You MUST set the `name` property with a human readable name on every node and child node you add. This will make the document cleaner and easier to understand. A mapping from names to ids will be returned at the end of each `batch_design` call so you can reference the created nodes in the next calls.
>
> - When creating style objects that are then spread when creating nodes. Make sure to include `type` in the style object.
> - Never set `id` when creating, copying, or replacing nodes or components. Pencil will always generate unique random IDs and override the input.
>
> - Always prefer the returned node id in `ref` property when creating instances.
> - You don't have access to the node properties after they are created.
>
> - Each `batch_design` is executed in it's own scope. Local variables are not shared between `batch_design` calls. To persist values between calls, don't use `const` or `let` when declaring variables, use `myNode = Insert(...)`.
>
> - Always split component creation into a separate batch_design in order to receive the generated node IDs.
>
> ## batch_design API
>
> Only these pencil functions are supported in batch_design. Use the other MCP tools for other operations.
>
> ```
> const document: string; // predefined root node
>
> Insert(parent: string, nodeData: Schema.Child): string; // insert
> Copy(path: string, parent: string, copyNodeData: Schema.Child): string; // copy
> Update(path: string, updateData: Schema.Child): void; // update
> Replace(path: string, nodeData: Schema.Child): string; // replace
> Move(path: string, parent: string | undefined, index?: number): void; // move
> Delete(path: string): void; // delete
> SetVariables(variables: Record<string, VariableDefinition>, replace?: boolean): void; // set variables/themes
> Generate(nodeId: string, type: "ai" | "stock", prompt: string): void; // generate image
> FindEmptySpace(input: { width: number; height: number; direction?: "top" | "right" | "bottom" | "left"; padding?: number; nodeId?: string }): { x: number; y: number; parentId?: string }; // find empty space
> ```
>
> The `path` argument (used by `Copy`, `Update`, `Replace`, `Move`, `Delete`) is a node ID, or a slash-separated path to a node nested inside a component instance (`instanceId/childId`). Slashes are only valid for component-instance nesting, not normal layer structure, and work for any nesting depth.
>
> ### Insert
>
> - Insert a new node at the end of the children array of the specified parent node.
> - An insert can only be a single node, if you want to add children to it, use the id return value in the next Insert call.
> - When working with components (reusable: true), insert their instances as refs with their properties overridden. Override descendant properties inline with the `descendants` map, or with subsequent Update operations.
> - Use the Replace to override children inside a component instance, e.g. `Replace("myInstance/childId",{type:"text",...})`
> - Returns the inserted node string ID
>
> ### Copy
>
> - "path": The ID of the existing node to copy. If you want to customize some properties of the copied node, just add them next to the `path` property. If you want to customize nested nodes _under_ the copied one, use the same kind of `descendants` map that `ref` nodes use!
>
> - When copying a node and modifying its descendants, you MUST use the "descendants" property in the Copy operation itself. DO NOT use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches. The copied node and its descendants receive new IDs, so Update operations referencing the original descendant IDs will fail.
> - `descendants`: Optional, used for components. Keys may be node IDs/paths or unique descendant ids inside the referenced component. If a name matches multiple descendants, use the node ID/path instead.
>
> - Copying a reusable node creates a connected instance (a `ref` node).
> - Returns the copied node string ID
>
> ### Update
>
> - Update the properties of existing nodes, without listing their children.
> - DO NOT use this to update the node's `children`, use Replace function for that.
> - This function CANNOT change the `id`, `type` or `ref` properties of any node!
> - `path`: The node to update.
>
> - `updateData": The node data to update
>
> ### Replace
>
> - Replace a node with a new node. All properties including the x/y are replaced.
> - This tool is ideal for swapping out parts of a component instance with new nodes.
> - Returns the replacement node's ID as string
> - `path`: The path of the node which will be replaced
> - `nodeData`: The properties of the new node
>
> ### Move
>
> - Move a node to a different location in the node tree in a .pen file.
> - `path`: The node to move.
> - `parent`: Optional. The new parent node. If omitted, the node stays under its current parent.
> - `index`: Optional new position of the moved node among its siblings. If omitted, the node is placed at the end.
>
> ### Delete
>
> - Delete a node from a .pen file.
> - `path`: The node to delete.
>
> ### SetVariables
>
> - Define or update the variables and themes of the .pen file. Read existing variables with the `get_variables` MCP tool first.
> - `variables`: An object keyed by variable name. Each value MUST be an object with a `type` (`"color"`, `"number"`, or `"string"`) and a `value`. Passing a bare value like `"#A3B59A"` or `16` will fail.
> - Variable names are arbitrary strings and MUST NOT begin with a dollar sign. The `$` prefix is only used when referencing a variable from a property (e.g. `fill: "$accent"`).
> - `replace` (optional, default `false`): when `false`, the variables are merged into the existing definitions. Pass `true` to completely replace the document's existing variable definitions.
> - Don't specify themes separately. If a variable uses theming, theme axes and values that aren't yet present in the document are registered automatically. For themed values, pass an array of `{value, theme}` entries.
>
> ```js
> SetVariables({
>   accent: {type:"color",value:"#A3B59A"},
>   "spacing-unit": {type:"number",value:16},
>   "font-heading": {type:"string",value:"Playfair Display"},
>   background: {type:"color",value:[
>     {value:"#F8F5F0",theme:{mode:"light"}},
>     {value:"#1A1A1A",theme:{mode:"dark"}}
>   ]}
> })
> ```
>
> ### Generate (image)
>
> - IMPORTANT: There is NO `image` node type! Images are applied as FILLS to nodes.
> - Do not guess random URLs for image fills, always use the Generate function to get an image from a stock or AI service.
> - To display an image: first Insert a frame or rectangle, then use Generate to apply the image as a fill.
> - `nodeId`: The ID of the node to apply the image fill to.
> - `type`: Either "ai" for AI-generated images or "stock" for stock photos from Unsplash.
> - `prompt`:
>   - For "ai": a detailed descriptive prompt.
>   - For "stock": 1-3 keyword search query following Stock query rules (simple, concrete, no use-case or abstract terms).
>
> ### FindEmptySpace
>
> - Finds an empty `width` x `height` area.
> - `direction` (optional, default "right"): where to search, one of "top", "right", "bottom", "left".
> - `padding` (optional, default 0): minimum distance from other elements.
> - `nodeId` (optional): anchor node used for chaining multiple screens together.
> - Returns `{x, y, parentId?}`. Insert or Copy into `parentId` (or `document` if absent) at the returned `x`/`y`.
>
> ## Examples
>
> Create the reusable `Metric` component (a vertical frame with a label and a value text) in its own `batch_design`.
>
> ```js
> const pos=FindEmptySpace({width:240,height:96,direction:"top", padding:80})
> metricCard=Insert(document,{type:"frame",name:"Metric",x:pos.x,y:pos.y,reusable:true,layout:"vertical",gap:4,placeholder:true})
> metricLabel=Insert(metricCard,{type:"text",name:"Label",fontFamily:"Inter",fontSize:13,fill:"$text-secondary",content:"Label"})
> metricValue=Insert(metricCard,{type:"text",name:"Value",fontFamily:"Inter",fontSize:28,fill:"$text-primary",content:"0"})
> Update(metricCard,{placeholder:false})
> ```
>
> Insert a screen at the document root and fill it with a loop:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> page=Insert(document,{type:"frame",name:"Landing Page",x:pos.x,y:pos.y,layout:"vertical",width:1440,padding:40,gap:24,clip:true,placeholder:true})
>
> const navItem={type:"text",fontFamily:"Inter",fontSize:14,fill:"$text-secondary"}
> nav=Insert(page,{type:"frame",name:"Nav",gap:32,alignItems:"center",width:"fill_container"})
> for (const label of ["Home","Our Story","Visit","Journal"]) {
>   Insert(nav,{...navItem,name:label,content:label})
> }
> ```
>
> Instantiate the component in a loop, keyed by the captured `metricLabel`/`metricValue` IDs:
>
> ```js
> row=Insert(page,{type:"frame",name:"Metrics",gap:16,width:"fill_container"})
> for (const [label,value] of [["Orders","1,284"],["Revenue","$48.2K"],["Customers","9,431"]]) {
>   Insert(row,{type:"ref",ref:metricCard,name:label,width:"fill_container",descendants:{[metricLabel]:{content:label},[metricValue]:{content:value}}})
> }
>
> Update(page,{placeholder:false})
> ```
>
> Copy an existing screen, customize its descendants in the same `Copy` call, and delete a node:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> dashboardV2=Copy("Xk9f2",document,{name:"Dashboard V2",x:pos.x,y:pos.y,placeholder:true,descendants:{"Jd6Ru":{fill:"#0F172A"},"Pc2Ny/Gh9Kf":{content:"Reports"}}})
> Update(dashboardV2,{placeholder:false})
>
> Delete("Vn4kP")
> ```
>
> Define the design tokens first, then reference them with `$` when building. Themed values are passed as `{value, theme}` arrays (the `dark` axis value is registered on the fly), so `$bg`/`$text-primary` references resolve per theme automatically:
>
> ```js
> SetVariables({
>   "bg":{type:"color",value:[
>     {value:"#FAFAF7",theme:{mode:"light"}},
>     {value:"#141414",theme:{mode:"dark"}}
>   ]},
>   "text-primary":{type:"color",value:[
>     {value:"#1A1A1A",theme:{mode:"light"}},
>     {value:"#F5F5F5",theme:{mode:"dark"}}
>   ]},
>   "font-body":{type:"string",value:"Inter"},
>   "gap-md":{type:"number",value:16}
> })
>
> card=Insert(document,{type:"frame",name:"Card",layout:"vertical",fill:"$bg",padding:"$gap-md",gap:"$gap-md",x:80,y:80})
> Insert(card,{type:"text",name:"Title",fontFamily:"$font-body",fontSize:20,fill:"$text-primary",content:"Tokens applied"})
> ```
> ````
>
> </details>
>
> The canvas confirms these are already named as two distinct concepts: Direction A and “Direction B — Guided Focus Flow,” with a substantial upload-specific component set already available. I’m now mapping each direction’s current screen/state structure against the PRD and checking which parts are true component instances versus one-off composition, so the plan can specify exactly what to extend rather than rebuilding it.
>
> <details><summary>Called 29 tools</summary>
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "C7ypH"
> }
> ```
>
> ```text
> Screenshot generated for node: C7ypH
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.batch_get
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeIds": [
>     "C7ypH",
>     "hl9HZ"
>   ],
>   "readDepth": 3,
>   "resolveVariables": false,
>   "resolveInstances": false
> }
> ```
>
> ```text
> [{"children":[{"children":[{"content":"Direction A — Components","id":"L14UbI","name":"Components Title","ref":"J1tfP5","type":"ref"},{"content":"DROP ZONE","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"z5qArl","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Drop Zone","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-info","height":48,"id":"KdY4r","justifyContent":"center","name":"Upload Icon Circle","type":"frame","width":48},{"alignItems":"center","children":"...","gap":4,"id":"N77Psq","name":"Instruction Row","type":"frame"},{"content":"PDF, JPG, or PNG · 10 MB max","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"yVmVU","lineHeight":1.4286,"name":"File Hint","type":"text"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"kwrZm","justifyContent":"center","layout":"vertical","name":"Drop Zone","padding":[28,24],"reusable":true,"stroke":"$color-line-moderate","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":760},{"content":"UPLOAD PROGRESS BAR","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"cEqyF","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Upload Progress Bar","type":"text"},{"children":[{"cornerRadius":"$shape-radius-full","fill":"$color-primary","height":8,"id":"dFKdN","name":"Bar Fill","type":"rectangle","width":96,"x":0,"y":0}],"clip":true,"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":8,"id":"L4EBjh","layout":"none","name":"Upload Progress Bar","reusable":true,"type":"frame","width":240},{"content":"RAIL DOC ITEM","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"QiHZK","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Rail Doc Item","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":"...","gap":8,"id":"fBKJH","name":"Icon \u0026 Name","type":"frame"},{"content":"Outstanding","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"ctoCw","lineHeight":1.2308,"name":"State Text","type":"text"}],"gap":8,"id":"nIrAd","justifyContent":"space_between","name":"Rail Doc Item","reusable":true,"type":"frame","width":312},{"content":"SELECTED FILE ROW","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"PZuei","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Selected File Row","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":"...","gap":12,"id":"NrMCE","name":"File Info","type":"frame"},{"alignItems":"center","children":"...","gap":4,"id":"JMyrJ","name":"Actions","type":"frame"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-layer-2","gap":16,"id":"p3DcE","justifyContent":"space_between","name":"Selected File Row","padding":[12,16],"reusable":true,"type":"frame","width":760},{"content":"DOCUMENT CHECKLIST CARD","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"Ug2qs","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Document Checklist Card","type":"text"},{"children":[{"alignItems":"center","children":"...","gap":16,"id":"Q8tE7c","justifyContent":"space_between","name":"Card Header","type":"frame","width":"fill_container"},{"content":"Description of the document we need and which formats work.","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"JYzDE","lineHeight":1.25,"name":"Doc Description","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"children":"...","gap":12,"id":"lygAh","layout":"vertical","name":"Card Body","slot":["kwrZm","p3DcE"],"type":"frame","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":16,"id":"Wwg0d","layout":"vertical","name":"Document Checklist Card","padding":24,"reusable":true,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":808},{"content":"REQUEST SUMMARY RAIL","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"sSc28","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Request Summary Rail","type":"text"},{"children":[{"children":"...","gap":4,"id":"r1cRwa","layout":"vertical","name":"Request Context","type":"frame","width":"fill_container"},{"fill":"$color-line-muted","height":1,"id":"fhxgP","name":"Divider 1","type":"rectangle","width":"fill_container"},{"children":"...","gap":8,"id":"A4q6cU","layout":"vertical","name":"Session Progress","type":"frame","width":"fill_container"},{"children":"...","gap":10,"id":"OXZTD","layout":"vertical","name":"Document List","type":"frame","width":"fill_container"},{"fill":"$color-line-muted","height":1,"id":"HxnJY","name":"Divider 2","type":"rectangle","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-default","fill":"$color-surface-info","gap":8,"id":"M5aLuu","name":"Session Note","padding":12,"type":"frame","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Submit documents"},"u24Oe":{"enabled":false}},"height":48,"id":"D76Wa","name":"Submit Button","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"You can add, replace, or remove files until you submit.","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"elVGp","lineHeight":1.3,"name":"Fine Print","textAlign":"center","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":20,"id":"q50qn","layout":"vertical","name":"Request Summary Rail","padding":24,"reusable":true,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":360}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-layer-1","gap":16,"id":"VXpI0","layout":"vertical","name":"Direction A — Components","padding":40,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame"},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"V8em2","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":12,"id":"pqvZ5","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"v1vOA2","name":"Columns","type":"frame","width":"fill_container"}],"gap":32,"id":"LTMoe","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"I94Kf","layout":"vertical","name":"Desktop — Default · All Outstanding","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"WAQNk","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":12,"id":"AV53w","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"k0WGy","name":"Columns","type":"frame","width":"fill_container"}],"gap":32,"id":"leqM5","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"u2oh4H","layout":"vertical","name":"Desktop — Mixed \u0026 Edge States","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"hh1hm","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":32,"id":"mmMBx","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"Y04JX","layout":"vertical","name":"Desktop — All Uploaded This Session","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"content":"DOCUMENT CENTER ENTRY — NO ACTIVE REQUEST","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"ieqAS","letterSpacing":0.8,"lineHeight":1.4545,"name":"Context Label","type":"text"},{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":12,"id":"rBoYU","layout":"vertical","name":"No Request Card","padding":[40,32],"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"clip":true,"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-backdrop","gap":16,"id":"J5cEpv","layout":"vertical","name":"Document Center — No Active Request","padding":40,"theme":{"Breakpoint":"Desktop"},"type":"frame","width":720}],"gap":48,"id":"TYRfl","layout":"vertical","name":"Desktop — All Uploaded + No Active Request","type":"frame"},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"M3UvPC","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"f6uxG","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"k202I","layout":"vertical","name":"Session Progress Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"IFqjv","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"banknote"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of income","textGrowth":"fixed-width","width":"fill_container"}},"id":"jfZ8H","name":"Card — Proof of income","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"C915C","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"id-card"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Government-issued photo ID","textGrowth":"fixed-width","width":"fill_container"}},"id":"AagYe","name":"Card — Government-issued photo ID","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease, or mortgage statement showing your current address."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"H9Ozg","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"home"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of residence","textGrowth":"fixed-width","width":"fill_container"}},"id":"S8xTUu","name":"Card — Proof of residence","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g/dUGaZ":{"content":"Optional"},"Ol81g/qOy2z":{"icon":"circle-plus"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Add another document","fill":"$color-on-tertiary"},"u24Oe":{"fill":"$color-on-tertiary","icon":"plus"}},"fill":"$color-tertiary","height":48,"id":"On0zz","name":"Add Other Document","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Other document","textGrowth":"fixed-width","width":"fill_container"}},"id":"goY7T","name":"Card — Other document","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"q3w6SL","layout":"vertical","name":"Submit Block","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"zhk2o","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"},{"id":"Z9eqOe","name":"Bottom Nav Bar","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"zwZnb","layout":"vertical","name":"Mobile App — Checklist Hub","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"$color-surface-base","id":"j7RFi","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"VTLQR","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":12,"id":"xpuV0","layout":"vertical","name":"Active Request Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"kQq3f","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"},{"id":"k88WEw","name":"Bottom Nav Bar","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"fj673","layout":"vertical","name":"A-M1 · App — Document Center · Active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"$color-surface-base","id":"e5hH1","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"j6oKQR","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":12,"id":"ZmpUw","layout":"vertical","name":"No Request Card","padding":[40,24],"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"s8zPe","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"},{"id":"AlocF","name":"Bottom Nav Bar","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"K1Srj","layout":"vertical","name":"A-M2 · App — Document Center · No active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"qBvjT","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"a0REQ","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"Z8YSL4","layout":"vertical","name":"Session Progress Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"p3wiHm","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"banknote"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of income","textGrowth":"fixed-width","width":"fill_container"}},"id":"H48Zgb","name":"Card — Proof of income","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"HHqC5","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"id-card"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Government-issued photo ID","textGrowth":"fixed-width","width":"fill_container"}},"id":"JL8Fe","name":"Card — Government-issued photo ID","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease, or mortgage statement showing your current address."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"Rdsfg","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"home"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of residence","textGrowth":"fixed-width","width":"fill_container"}},"id":"WIUWK","name":"Card — Proof of residence","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g/dUGaZ":{"content":"Outstanding","fill":"$color-body-strong"},"Ol81g/qOy2z":{"fill":"$color-body-strong","icon":"circle-dashed"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Add another document","fill":"$color-on-tertiary"},"u24Oe":{"fill":"$color-on-tertiary","icon":"plus"}},"fill":"$color-tertiary","height":48,"id":"cc2b2","name":"Add Other Document","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Other document","textGrowth":"fixed-width","width":"fill_container"}},"id":"JO3dg","name":"Card — Other document","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"LVwu9","layout":"vertical","name":"Submit Block","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"PJ9ac","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"I41wWk","layout":"vertical","name":"A-M3 · App — Checklist · Default","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"Tvq9x","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"Z72Fi","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"DDmyo","layout":"vertical","name":"Session Progress Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads are processed after you leave this page; this list won't be saved as a receipt."},"osE4q":{"width":"fill_container"},"rwSkO":{"content":"Progress shows this visit only","textGrowth":"fixed-width","width":"fill_container"}},"id":"Nbvvn","name":"Non-persistence Alert","ref":"vbCIR","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days."},"Ol81g":{"fill":"$color-surface-positive"},"Ol81g/dUGaZ":{"content":"Uploaded · this visit","fill":"$color-body-positive"},"Ol81g/qOy2z":{"fill":"$color-body-positive","icon":"check"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"OyOE6":{"fill":"$color-surface-positive"},"cFdiS":{"content":"paystub-june-2026.pdf"},"sy3t3":{"content":"215 KB · PDF · Uploaded this visit"},"yb8dX":{"fill":"$color-body-positive","icon":"circle-check"}},"gap":8,"id":"M5e6m","justifyContent":"start","layout":"vertical","name":"Uploaded File Row","ref":"p3DcE","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"banknote"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of income","textGrowth":"fixed-width","width":"fill_container"}},"id":"wVc7J","name":"Card — Proof of income · Uploaded","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information."},"Ol81g":{"fill":"$color-surface-info"},"Ol81g/dUGaZ":{"content":"Uploading","fill":"$color-body-info"},"Ol81g/qOy2z":{"fill":"$color-body-info","icon":"loader-circle"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"JZJIe/Z9Bmr":{"content":"Cancel"},"cFdiS":{"content":"drivers-license-front.jpg"},"gkLZX":{"enabled":false},"sy3t3":{"content":"1.8 MB · JPG"},"yb8dX":{"icon":"image"}},"gap":8,"id":"V06rg","justifyContent":"start","layout":"vertical","name":"Uploading File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"alignItems":"center","children":"...","gap":12,"id":"D62eaZ","name":"Upload Progress Row","type":"frame","width":"fill_container"}]},"mf3oF":{"icon":"id-card"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Government-issued photo ID","textGrowth":"fixed-width","width":"fill_container"}},"id":"KtJCC","name":"Card — Government-issued photo ID · Uploading","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease, or mortgage statement showing your current address."},"Ol81g":{"fill":"$color-surface-negative"},"Ol81g/dUGaZ":{"content":"Upload failed","fill":"$color-body-negative"},"Ol81g/qOy2z":{"fill":"$color-body-negative","icon":"triangle-alert"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"OyOE6":{"fill":"$color-surface-negative"},"cFdiS":{"content":"utility-bill-june.pdf"},"gkLZX":{"enabled":false},"sy3t3":{"content":"412 KB · PDF · Not received"},"yb8dX":{"fill":"$color-body-negative","icon":"file-x"}},"gap":8,"id":"ESWk5","justifyContent":"start","layout":"vertical","name":"Failed File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"children":"...","gap":8,"id":"w6qDzl","name":"Upload Error Row","type":"frame","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Retry upload"},"u24Oe":{"height":14,"icon":"refresh-cw","width":14}},"height":48,"id":"LxqkG","name":"Retry Button","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"home"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of residence","textGrowth":"fixed-width","width":"fill_container"}},"id":"Xj0sg","name":"Card — Proof of residence · Failed","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g/dUGaZ":{"content":"Outstanding","fill":"$color-body-strong"},"Ol81g/qOy2z":{"fill":"$color-body-strong","icon":"circle-dashed"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Add another document","fill":"$color-on-tertiary"},"u24Oe":{"fill":"$color-on-tertiary","icon":"plus"}},"fill":"$color-tertiary","height":48,"id":"gnYKV","name":"Add Other Document","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Other document","textGrowth":"fixed-width","width":"fill_container"}},"id":"V1ly4E","name":"Card — Other document","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"Iuxxf","layout":"vertical","name":"Submit Block","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"ZBjwt","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"B1hNRM","layout":"vertical","name":"A-M4 · App — Checklist · Mixed states","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"ZhHRI","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"Hwn7a","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"k1CLmq","layout":"vertical","name":"Session Progress Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days."},"Ol81g":{"fill":"$color-surface-caution"},"Ol81g/dUGaZ":{"content":"Needs attention","fill":"$color-body-caution"},"Ol81g/qOy2z":{"fill":"$color-body-caution","icon":"circle-alert"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"OyOE6":{"fill":"$color-surface-negative"},"cFdiS":{"content":"bank-statement-q2.pdf"},"sy3t3":{"content":"18 MB · PDF"},"yb8dX":{"fill":"$color-body-negative","icon":"file-x"}},"gap":8,"id":"xDIjd","justifyContent":"start","layout":"vertical","name":"Oversize File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"children":"...","gap":8,"id":"zaRTT","name":"Validation Error Row","type":"frame","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Upload file","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":false}},"fill":"$color-primary-disabled","height":48,"id":"IH75C","name":"Upload Button — Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"banknote"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of income","textGrowth":"fixed-width","width":"fill_container"}},"id":"SSjJr","name":"Card — Proof of income · File too large","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"oV6EP","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"id-card"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Government-issued photo ID","textGrowth":"fixed-width","width":"fill_container"}},"id":"IV0Ae","name":"Card — Government-issued photo ID","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease, or mortgage statement showing your current address."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"wNAXa","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"home"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of residence","textGrowth":"fixed-width","width":"fill_container"}},"id":"hUBoy","name":"Card — Proof of residence","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g/dUGaZ":{"content":"Outstanding","fill":"$color-body-strong"},"Ol81g/qOy2z":{"fill":"$color-body-strong","icon":"circle-dashed"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Add another document","fill":"$color-on-tertiary"},"u24Oe":{"fill":"$color-on-tertiary","icon":"plus"}},"fill":"$color-tertiary","height":48,"id":"pqyCx","name":"Add Other Document","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Other document","textGrowth":"fixed-width","width":"fill_container"}},"id":"I4JiTj","name":"Card — Other document","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"MvTku","layout":"vertical","name":"Submit Block","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"R2wAUN","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"w48oV","layout":"vertical","name":"A-M5 · App — Checklist · File too large","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"Qbwzb","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"LcmbH","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"Ao8uI","layout":"vertical","name":"Session Progress Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"ZNjRL","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"banknote"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of income","textGrowth":"fixed-width","width":"fill_container"}},"id":"d9jaP","name":"Card — Proof of income","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"mDpJW","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"id-card"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Government-issued photo ID","textGrowth":"fixed-width","width":"fill_container"}},"id":"Qywlj","name":"Card — Government-issued photo ID","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease, or mortgage statement showing your current address."},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Choose a file","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"paperclip"}},"fill":"$color-secondary","height":48,"id":"HxY5z","name":"Choose File","ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"home"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of residence","textGrowth":"fixed-width","width":"fill_container"}},"id":"xowHi","name":"Card — Proof of residence","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g":{"fill":"$color-surface-caution"},"Ol81g/dUGaZ":{"content":"Needs attention","fill":"$color-body-caution"},"Ol81g/qOy2z":{"fill":"$color-body-caution","icon":"circle-alert"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"I4Tg8":{"content":"What document are you uploading?"},"TGql2":{"stroke":"$color-body-negative","strokeWidth":2},"WQuap":{"content":"e.g., 2025 tax return"},"j2tw8":{"content":"This note stays with your file so we know what it is.","enabled":true,"textGrowth":"fixed-width","width":"fill_container"},"vxQZG":{"content":"Enter the document type before you upload.","enabled":true,"textGrowth":"fixed-width","width":"fill_container"}},"id":"u0ET0z","name":"Other Note Input","ref":"eMyOS","type":"ref","width":"fill_container"},{"alignItems":"start","descendants":{"cFdiS":{"content":"2025-tax-return.pdf"},"sy3t3":{"content":"1.1 MB · PDF"}},"gap":8,"id":"unGBF","justifyContent":"start","layout":"vertical","name":"Selected File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Upload file","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":false}},"fill":"$color-primary-disabled","height":48,"id":"kq2ND","name":"Upload Button — Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Other document","textGrowth":"fixed-width","width":"fill_container"}},"id":"eGL19","name":"Card — Other document · Needs note","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"wuPYo","layout":"vertical","name":"Submit Block","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"SoLfT","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"JByYQ","layout":"vertical","name":"A-M6 · App — Checklist · Other needs a note","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"bZ45L","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":"...","gap":4,"id":"aLXde","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":12,"id":"Q2VNsC","layout":"vertical","name":"Success Card","padding":[32,16],"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"sj2cZ","layout":"vertical","name":"Uploaded List Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads are processed after you leave this page; this list won't be saved as a receipt. Your loan specialist can confirm what was received."},"osE4q":{"width":"fill_container"},"rwSkO":{"content":"Not saved as a receipt","textGrowth":"fixed-width","width":"fill_container"}},"id":"IzI4j","name":"Non-persistence Alert","ref":"vbCIR","type":"ref","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Back to Document Center"},"u24Oe":{"icon":"arrow-left"}},"height":48,"id":"GOgeH","name":"Back CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"yeA4X","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"E8l8nb","layout":"vertical","name":"A-M7 · App — All uploaded this visit","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390}],"gap":120,"id":"C7ypH","name":"Direction A — Checklist Hub","type":"frame","x":0,"y":40653},{"children":[{"children":[{"content":"Direction B — Components","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"500","id":"P10Ave","lineHeight":1.4286,"name":"Components Caption","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-base","height":40,"id":"l3VMP","justifyContent":"center","name":"Request Icon Wrap","type":"frame","width":40},{"children":"...","gap":2,"id":"PaiUw","layout":"vertical","name":"Request Text","type":"frame","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-info","gap":"$gap-x-row","id":"zc9dZ","name":"B / Request Summary","padding":16,"reusable":true,"type":"frame","width":358},{"children":[{"alignItems":"center","children":"...","id":"JVRLV","justifyContent":"space_between","name":"Progress Labels","type":"frame","width":"fill_container"},{"children":"...","gap":4,"id":"etFM8","name":"Progress Segments","type":"frame","width":"fill_container"}],"gap":"$gap-y-pair","id":"TQeTt","layout":"vertical","name":"B / Progress Header","reusable":true,"type":"frame","width":358},{"alignItems":"center","children":[{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-info-layer-1","height":48,"id":"eafn2","justifyContent":"center","name":"Zone Icon Wrap","type":"frame","width":48},{"content":"Tap to choose a file","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-default-size","fontWeight":"500","id":"dWwmd","lineHeight":1.4118,"name":"Zone Title","type":"text"},{"content":"PDF, JPG or PNG · up to 10 MB","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"ch5be","lineHeight":1.4286,"name":"Zone Hint","type":"text"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Browse files","fill":"$color-on-secondary"},"u24Oe":{"enabled":false}},"enabled":false,"fill":"$color-secondary","height":40,"id":"lhqAJ","name":"Browse Button","padding":[0,20],"ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref"},{"children":"...","enabled":false,"gap":"$gap-x-pair","id":"ZmvX6","name":"Zone Error","type":"frame","width":"fill_container(326)","x":0,"y":0}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-layer-1","gap":"$gap-y-pair","id":"LMMoY","layout":"vertical","name":"B / Upload Zone","padding":[24,16],"reusable":true,"stroke":"$color-line-default","strokeWidth":"$stroke-default","type":"frame","width":358},{"children":[{"alignItems":"center","children":"...","gap":12,"id":"Yaheu","name":"File Main","type":"frame","width":"fill_container"},{"children":"...","enabled":false,"gap":4,"id":"q4j0v","layout":"vertical","name":"File Progress","padding":[0,0,4,0],"type":"frame","width":"fill_container(334)","x":0,"y":0}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":"$gap-y-pair","id":"pnQBG","layout":"vertical","name":"B / File Row","padding":12,"reusable":true,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":358},{"alignItems":"center","children":[{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-layer-2","height":40,"id":"Lq4jA","justifyContent":"center","name":"Doc State Icon Wrap","type":"frame","width":40},{"children":"...","gap":2,"id":"N7F0N","layout":"vertical","name":"Doc Text","type":"frame","width":"fill_container"},{"fill":"$color-body-emphasis","height":24,"icon":"chevron-right","id":"qdwvw","library":"lucide","name":"Doc Chevron","type":"icon","width":24}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":"$gap-x-row","id":"NmACi","name":"B / Document Item","padding":16,"reusable":true,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":358}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":32,"id":"qyynU","layout":"vertical","name":"Direction B — Components","padding":32,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame"},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"$color-surface-base","id":"y37hS","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"content":"Document Center","id":"fIgsa","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload requested documents securely — no fax, email, or branch visit needed.","id":"n7e8Wz","name":"Intro","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":12,"id":"kO0ud","layout":"vertical","name":"Request Card","padding":16,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":"fill_container"},{"children":"...","gap":"$gap-x-pair","id":"Q3YG8y","name":"Security Note","type":"frame","width":"fill_container"}],"gap":16,"id":"fvp1U","layout":"vertical","name":"Content","padding":[24,16,32,16],"type":"frame","width":"fill_container"},{"id":"e6MLK3","name":"Bottom Nav","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"cMzk2","layout":"vertical","name":"B1 · App — Document Center · Active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"$color-surface-base","id":"fkACy","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"content":"Document Center","id":"uaFoQ","name":"Page Title","ref":"zDTNI","type":"ref"},{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":12,"id":"l7WJ3W","layout":"vertical","name":"Empty State Card","padding":[32,16],"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":"fill_container"},{"children":"...","gap":"$gap-x-pair","id":"QoTkf","name":"Security Note","type":"frame","width":"fill_container"}],"gap":16,"id":"F9D8h","layout":"vertical","name":"Content","padding":[24,16,32,16],"type":"frame","width":"fill_container"},{"id":"OaKkG","name":"Bottom Nav","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"UKY0H","layout":"vertical","name":"B2 · App — Document Center · No active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"r9Vv8","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"content":"Document Upload","id":"EdHej","name":"Page Title","ref":"zDTNI","type":"ref"},{"id":"AIG47","name":"Request Summary","ref":"zc9dZ","type":"ref","width":"fill_container"},{"descendants":{"H1yMT":{"content":"Your documents"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary-disabled"}},"id":"c3o1rq","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"children":"...","gap":"$gap-y-list","id":"Yl5CK","layout":"vertical","name":"Document List","type":"frame","width":"fill_container"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads go to your loan team as you send them. This checklist isn't saved as a receipt after you leave."},"rwSkO":{"content":"Shown for this visit only"}},"id":"pfN5E","name":"Session Note","ref":"vbCIR","type":"ref","width":"fill_container"}],"gap":16,"id":"YSP94","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"O8sAyn","layout":"vertical","name":"B3 · App — Document Upload · Overview (mixed states)","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"K2JjDG","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 1 of 4"},"KFKfP":{"content":"0 of 4 uploaded"}},"id":"y8DGT","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Proof of income","id":"jWgvw","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"A recent pay stub, W-2, or benefits statement from the last 60 days. One file per document.","id":"fzmN6","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"id":"N1y17","name":"Selected File","ref":"pnQBG","type":"ref","width":"fill_container"},{"content":"You can replace or remove this file before you upload it.","id":"Vjkp6","name":"Replace Hint","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"children":"...","gap":"$gap-y-pair","id":"z7AcD","layout":"vertical","name":"Actions","type":"frame","width":"fill_container"}],"gap":16,"id":"IT0DW","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"S1lRh1","layout":"vertical","name":"B4 · App — Step · File selected","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"IobGa","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 2 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary"}},"id":"EqYGK","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Government-issued photo ID","id":"tmgG2","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"Driver's license, state ID, or passport — include the back if it has information.","id":"n96GI","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"ZmvX6":{"enabled":true},"bMUtm":{"fill":"$color-body-negative"},"dWwmd":{"content":"Tap to choose a different file"},"eafn2":{"fill":"$color-surface-base"},"zGS4M":{"content":"That file is 18 MB — larger than the 10 MB limit. Choose a smaller PDF, JPG, or PNG."}},"fill":"$color-surface-negative","id":"X7B12s","name":"Upload Zone · Error","ref":"LMMoY","stroke":"$color-line-negative","type":"ref","width":"fill_container"},{"content":"Nothing was uploaded — your other documents aren't affected.","id":"ACMB7","name":"No Harm Note","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":true,"fill":"$color-on-primary-disabled","icon":"upload"}},"fill":"$color-primary-disabled","height":48,"id":"p2Vb56","name":"Upload CTA Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"E1wzl7","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"S68zZ","layout":"vertical","name":"B5 · App — Step · File validation error","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"w9nTM","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 4 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"VUpAy":{"fill":"$color-primary"}},"id":"Y3VRQD","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Other document","id":"ws8oW","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"Sending something we didn't list? Tell us what it is so your loan team can route it correctly.","id":"DsxKN","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"I4Tg8":{"content":"What document are you uploading?"},"TGql2":{"stroke":"$color-line-negative","strokeWidth":2},"WQuap":{"content":"e.g., Employment verification letter"},"vxQZG":{"content":"Enter the document type before you upload.","enabled":true}},"id":"D3zrZd","name":"Note Input · Error","ref":"eMyOS","type":"ref","width":"fill_container"},{"descendants":{"A5tQkx":{"content":"0.8 MB · PDF"},"fU25p":{"content":"employment-letter.pdf"}},"id":"QQthp","name":"Selected File","ref":"pnQBG","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":true,"fill":"$color-on-primary-disabled","icon":"upload"}},"fill":"$color-primary-disabled","height":48,"id":"ZY9LJ","name":"Upload CTA Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"Add the document type above to enable upload.","id":"M38Ih","name":"Enable Hint","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"gap":16,"id":"WXtUt","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"VkQpT","layout":"vertical","name":"B6 · App — Step · Other document · Note required","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"ROtgX","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 2 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary"}},"id":"WtRe9","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Government-issued photo ID","id":"eh3uS","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"descendants":{"A5tQkx":{"content":"3.4 MB · JPG"},"FMBpw":{"content":"Uploading… 60%"},"TyPrI":{"enabled":false},"fU25p":{"content":"drivers-license.jpg"},"q4j0v":{"enabled":true},"rPYod":{"width":190}},"id":"RqxFI","name":"Uploading File","ref":"pnQBG","type":"ref","width":"fill_container"},{"content":"Keep this page open while we upload your file.","id":"aajfe","name":"Keep Open Note","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Cancel upload","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":48,"id":"vfB8F","name":"Cancel Upload CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"fMKY4","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"twv9F","layout":"vertical","name":"B7 · App — Step · Uploading","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"VhRL4","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 4 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"VUpAy":{"fill":"$color-primary"}},"id":"SxQta","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Other document","id":"a9aaoJ","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Something went wrong on our end — your file and note are still here. Try again, or come back later."},"YytP0":{"fill":"$color-body-negative","icon":"triangle-alert"},"rwSkO":{"content":"We couldn't upload your file"}},"fill":"$color-surface-negative","id":"AsxCT","name":"Failure Alert","ref":"vbCIR","stroke":"$color-line-negative","type":"ref","width":"fill_container"},{"descendants":{"BY85A":{"content":"Employment verification letter","enabled":true,"width":"fill_container"},"I4Tg8":{"content":"What document are you uploading?"},"WQuap":{"enabled":false},"j2tw8":{"content":"Your note is saved for this attempt.","enabled":true}},"id":"RRYq2","name":"Note Input · Filled","ref":"eMyOS","type":"ref","width":"fill_container"},{"descendants":{"A5tQkx":{"content":"0.8 MB · PDF"},"fU25p":{"content":"employment-letter.pdf"}},"id":"J9qeQK","name":"Failed File","ref":"pnQBG","type":"ref","width":"fill_container"},{"children":"...","gap":"$gap-y-pair","id":"O5NYp","layout":"vertical","name":"Actions","type":"frame","width":"fill_container"}],"gap":16,"id":"lUJCe","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"mA5La","layout":"vertical","name":"B8 · App — Step · Upload failed · Retry","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"pKGBg","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"alignItems":"center","children":[{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-positive","height":64,"id":"siUIG","justifyContent":"center","name":"Success Icon Wrap","type":"frame","width":64},{"content":"All 4 documents uploaded","id":"W1eitQ","name":"Done Title","ref":"J1tfP5","type":"ref"},{"content":"We've sent everything to your loan team for review. They'll reach out if anything else is needed.","id":"OZQw3","name":"Done Body","ref":"Ynwlh","textAlign":"center","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"children":"...","gap":"$gap-y-list","id":"lN8bi","layout":"vertical","name":"Uploaded List","type":"frame","width":"fill_container"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"This confirmation is only shown right now — it isn't saved here as a receipt. Questions later? Contact your loan team."},"rwSkO":{"content":"Before you go"}},"id":"QCAe0","name":"Receipt Note","ref":"vbCIR","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Back to Document Center"},"u24Oe":{"enabled":false}},"height":48,"id":"mdqDh","name":"Back CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"NpboK","layout":"vertical","name":"Content","padding":[24,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"jvr2D","layout":"vertical","name":"B9 · App — All uploaded this visit","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"nPuEL","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":"$gap-y-pair","id":"d3dwd","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"mNBeB","name":"Columns","type":"frame","width":"fill_container"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads go to your loan team as you send them. This checklist isn't saved as a receipt after you leave."},"rwSkO":{"content":"Shown for this visit only"}},"id":"zsPBb","name":"Session Note","ref":"vbCIR","type":"ref","width":"fill_container"}],"gap":24,"id":"qAOta","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"bPgqn","layout":"vertical","name":"B10 · Web Desktop — Guided upload","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"h9xuK","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"content":"Document Center","id":"p4iMCa","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload requested documents securely — no fax, email, or branch visit needed.","id":"ZqjD7","name":"Intro","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":720},{"children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":16,"id":"U7UQGn","layout":"vertical","name":"Request Card","padding":24,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":720},{"children":"...","gap":"$gap-x-pair","id":"uylkB","name":"Security Note","type":"frame","width":720}],"gap":24,"id":"UAwUB","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"ELYM6","layout":"vertical","name":"B11 · Web Desktop — Document Center · Active request","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"N8y0ha","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"content":"Document Center","id":"ql8HZ","name":"Page Title","ref":"zDTNI","type":"ref"},{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":12,"id":"cG4cd","layout":"vertical","name":"Empty State Card","padding":[40,24],"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":720},{"children":"...","gap":"$gap-x-pair","id":"fbPA1","name":"Security Note","type":"frame","width":720}],"gap":24,"id":"XXUhQ","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"ElLoj","layout":"vertical","name":"B12 · Web Desktop — Document Center · No active request","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"rccUT","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":"$gap-y-pair","id":"R4kDsl","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"UaOs8","name":"Columns","type":"frame","width":"fill_container"}],"gap":24,"id":"si7bS","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"TBiql","layout":"vertical","name":"B13 · Web Desktop — Step · File selected","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"zbGjf","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":"$gap-y-pair","id":"wrNAi","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"rdhKb","name":"Columns","type":"frame","width":"fill_container"}],"gap":24,"id":"RbYF5","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"dSjDc","layout":"vertical","name":"B14 · Web Desktop — Step · File validation error","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"n2ZYvG","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":"$gap-y-pair","id":"WWx4Z","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"Z3ChMC","name":"Columns","type":"frame","width":"fill_container"}],"gap":24,"id":"lNSF9","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"tZ57p","layout":"vertical","name":"B15 · Web Desktop — Step · Other document · Note required","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"t4FdG","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":"$gap-y-pair","id":"psgEr","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"DzXRM","name":"Columns","type":"frame","width":"fill_container"}],"gap":24,"id":"kUE9G","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"cNzKe","layout":"vertical","name":"B16 · Web Desktop — Step · Uploading","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"kD6RB","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":"...","gap":"$gap-y-pair","id":"ZVcN7","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":"...","gap":32,"id":"lDpPp","name":"Columns","type":"frame","width":"fill_container"}],"gap":24,"id":"h2hB6","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"d9cED","layout":"vertical","name":"B17 · Web Desktop — Step · Upload failed · Retry","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"Vy6Pj","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"alignItems":"center","children":[{"alignItems":"center","children":"...","gap":16,"id":"GLPHO","layout":"vertical","name":"Success Column","type":"frame","width":720}],"id":"IacrB","layout":"vertical","name":"Content","padding":[48,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"UnIG6","layout":"vertical","name":"B18 · Web Desktop — All uploaded this visit","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440}],"gap":120,"id":"hl9HZ","name":"Direction B — Guided Focus Flow","type":"frame","x":0,"y":42905}]
> ```
>
> MCP tool call
>
> pencil.snapshot_layout
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "parentId": "hl9HZ",
>   "maxDepth": 3,
>   "problemsOnly": false
> }
> ```
>
> ```text
> {"children":[{"children":[{"height":20,"id":"P10Ave","width":179,"x":32,"y":32},{"children":[{"children":"...","height":40,"id":"l3VMP","width":40,"x":16,"y":17},{"children":"...","height":42,"id":"PaiUw","width":270,"x":72,"y":16}],"height":74,"id":"zc9dZ","width":358,"x":32,"y":84},{"children":[{"children":"...","height":24,"id":"JVRLV","width":358,"x":0,"y":0},{"children":"...","height":4,"id":"etFM8","width":358,"x":0,"y":32}],"height":36,"id":"TQeTt","width":358,"x":32,"y":190},{"children":[{"children":"...","height":48,"id":"eafn2","width":48,"x":155,"y":24},{"height":24,"id":"dWwmd","width":157,"x":100.5,"y":80},{"height":20,"id":"ch5be","width":193,"x":82.5,"y":112},{"children":"...","height":40,"id":"lhqAJ","problems":"fully clipped","width":124,"x":840,"y":544},{"children":"...","height":42,"id":"ZmvX6","width":326,"x":0,"y":0}],"height":156,"id":"LMMoY","width":358,"x":32,"y":258},{"children":[{"children":"...","height":62,"id":"Yaheu","width":334,"x":12,"y":12},{"children":"...","height":38,"id":"q4j0v","width":334,"x":0,"y":0}],"height":86,"id":"pnQBG","width":358,"x":32,"y":446},{"children":[{"children":"...","height":40,"id":"Lq4jA","width":40,"x":16,"y":17.5},{"children":"...","height":43,"id":"N7F0N","width":230,"x":72,"y":16},{"height":24,"id":"qdwvw","width":24,"x":318,"y":25.5}],"height":75,"id":"NmACi","width":358,"x":32,"y":564}],"height":671,"id":"qyynU","width":422,"x":0,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"y37hS/Gi7T6","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"y37hS/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"y37hS/vv0xy","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"y37hS/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"y37hS","width":390,"x":0,"y":0},{"children":[{"height":34,"id":"fIgsa","width":250,"x":16,"y":24},{"height":38,"id":"n7e8Wz","width":358,"x":16,"y":74},{"children":"...","height":258,"id":"kO0ud","width":358,"x":16,"y":128},{"children":"...","height":40,"id":"Q3YG8y","width":358,"x":16,"y":402}],"height":474,"id":"fvp1U","width":390,"x":0,"y":64},{"children":[{"children":"...","height":48,"id":"e6MLK3/v4zr0R","width":65.2,"x":16,"y":8},{"children":"...","height":48,"id":"e6MLK3/SJPy4","width":65.2,"x":89.2,"y":8},{"children":"...","height":48,"id":"e6MLK3/pnDi7","width":65.20000000000002,"x":162.4,"y":8},{"children":"...","height":48,"id":"e6MLK3/IzdiB","width":65.19999999999999,"x":235.60000000000002,"y":8},{"children":"...","height":48,"id":"e6MLK3/O2mru","width":65.19999999999999,"x":308.8,"y":8}],"height":88,"id":"e6MLK3","width":390,"x":0,"y":538}],"height":626,"id":"cMzk2","width":390,"x":542,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"fkACy/Gi7T6","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"fkACy/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"fkACy/vv0xy","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"fkACy/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"fkACy","width":390,"x":0,"y":0},{"children":[{"height":34,"id":"uaFoQ","width":250,"x":16,"y":24},{"children":"...","height":225,"id":"l7WJ3W","width":358,"x":16,"y":74},{"children":"...","height":40,"id":"QoTkf","width":358,"x":16,"y":315}],"height":387,"id":"F9D8h","width":390,"x":0,"y":64},{"children":[{"children":"...","height":48,"id":"OaKkG/v4zr0R","width":65.2,"x":16,"y":8},{"children":"...","height":48,"id":"OaKkG/SJPy4","width":65.2,"x":89.2,"y":8},{"children":"...","height":48,"id":"OaKkG/pnDi7","width":65.20000000000002,"x":162.4,"y":8},{"children":"...","height":48,"id":"OaKkG/IzdiB","width":65.19999999999999,"x":235.60000000000002,"y":8},{"children":"...","height":48,"id":"OaKkG/O2mru","width":65.19999999999999,"x":308.8,"y":8}],"height":88,"id":"OaKkG","width":390,"x":0,"y":451}],"height":539,"id":"UKY0H","width":390,"x":1052,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"r9Vv8/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"r9Vv8/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"r9Vv8/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"r9Vv8/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"r9Vv8","width":390,"x":0,"y":0},{"children":[{"height":34,"id":"EdHej","width":252,"x":16,"y":16},{"children":"...","height":74,"id":"AIG47","width":358,"x":16,"y":66},{"children":"...","height":36,"id":"c3o1rq","width":358,"x":16,"y":156},{"children":"...","height":324,"id":"Yl5CK","width":358,"x":16,"y":208},{"children":"...","height":105,"id":"pfN5E","width":358,"x":16,"y":548}],"height":693,"id":"YSP94","width":390,"x":0,"y":64}],"height":757,"id":"O8sAyn","width":390,"x":1562,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"K2JjDG/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"K2JjDG/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"K2JjDG/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"K2JjDG/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"K2JjDG","width":390,"x":0,"y":0},{"children":[{"children":"...","height":36,"id":"y8DGT","width":358,"x":16,"y":16},{"height":21,"id":"jWgvw","width":149,"x":16,"y":68},{"height":38,"id":"fzmN6","width":358,"x":16,"y":105},{"children":"...","height":86,"id":"N1y17","width":358,"x":16,"y":159},{"height":40,"id":"Vjkp6","width":358,"x":16,"y":261},{"children":"...","height":104,"id":"z7AcD","width":358,"x":16,"y":317}],"height":461,"id":"IT0DW","width":390,"x":0,"y":64}],"height":525,"id":"S1lRh1","width":390,"x":2072,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"IobGa/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"IobGa/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"IobGa/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"IobGa/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"IobGa","width":390,"x":0,"y":0},{"children":[{"children":"...","height":36,"id":"EqYGK","width":358,"x":16,"y":16},{"height":21,"id":"tmgG2","width":274,"x":16,"y":68},{"height":38,"id":"n96GI","width":358,"x":16,"y":105},{"children":"...","height":206,"id":"X7B12s","width":358,"x":16,"y":159},{"height":40,"id":"ACMB7","width":358,"x":16,"y":381},{"children":"...","height":48,"id":"p2Vb56","width":358,"x":16,"y":437}],"height":525,"id":"E1wzl7","width":390,"x":0,"y":64}],"height":589,"id":"S68zZ","width":390,"x":2582,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"w9nTM/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"w9nTM/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"w9nTM/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"w9nTM/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"w9nTM","width":390,"x":0,"y":0},{"children":[{"children":"...","height":36,"id":"Y3VRQD","width":358,"x":16,"y":16},{"height":21,"id":"ws8oW","width":157,"x":16,"y":68},{"height":38,"id":"DsxKN","width":358,"x":16,"y":105},{"children":"...","height":112,"id":"D3zrZd","width":358,"x":16,"y":159},{"children":"...","height":86,"id":"QQthp","width":358,"x":16,"y":287},{"children":"...","height":48,"id":"ZY9LJ","width":358,"x":16,"y":389},{"height":20,"id":"M38Ih","width":358,"x":16,"y":453}],"height":513,"id":"WXtUt","width":390,"x":0,"y":64}],"height":577,"id":"VkQpT","width":390,"x":3092,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"ROtgX/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"ROtgX/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"ROtgX/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"ROtgX/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"ROtgX","width":390,"x":0,"y":0},{"children":[{"children":"...","height":36,"id":"WtRe9","width":358,"x":16,"y":16},{"height":21,"id":"eh3uS","width":274,"x":16,"y":68},{"children":"...","height":112,"id":"RqxFI","width":358,"x":16,"y":105},{"height":20,"id":"aajfe","width":358,"x":16,"y":233},{"children":"...","height":48,"id":"vfB8F","width":358,"x":16,"y":269}],"height":357,"id":"fMKY4","width":390,"x":0,"y":64}],"height":421,"id":"twv9F","width":390,"x":3602,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"VhRL4/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"VhRL4/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"VhRL4/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"VhRL4/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"VhRL4","width":390,"x":0,"y":0},{"children":[{"children":"...","height":36,"id":"SxQta","width":358,"x":16,"y":16},{"height":21,"id":"a9aaoJ","width":157,"x":16,"y":68},{"children":"...","height":105,"id":"AsxCT","width":358,"x":16,"y":105},{"children":"...","height":112,"id":"RRYq2","width":358,"x":16,"y":226},{"children":"...","height":86,"id":"J9qeQK","width":358,"x":16,"y":354},{"children":"...","height":104,"id":"O5NYp","width":358,"x":16,"y":456}],"height":600,"id":"lUJCe","width":390,"x":0,"y":64}],"height":664,"id":"mA5La","width":390,"x":4112,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"pKGBg/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"pKGBg/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"pKGBg/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"pKGBg/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"pKGBg","width":390,"x":0,"y":0},{"children":[{"children":"...","height":64,"id":"siUIG","width":64,"x":163,"y":24},{"height":21,"id":"W1eitQ","width":247,"x":71.5,"y":104},{"height":38,"id":"OZQw3","width":358,"x":16,"y":141},{"children":"...","height":384,"id":"lN8bi","width":358,"x":16,"y":195},{"children":"...","height":105,"id":"QCAe0","width":358,"x":16,"y":595},{"children":"...","height":48,"id":"mdqDh","width":358,"x":16,"y":716}],"height":804,"id":"NpboK","width":390,"x":0,"y":64}],"height":868,"id":"jvr2D","width":390,"x":4622,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"nPuEL/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"nPuEL/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"nPuEL/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"nPuEL","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":64,"id":"d3dwd","width":1200,"x":120,"y":40},{"children":"...","height":412,"id":"mNBeB","width":1200,"x":120,"y":128},{"children":"...","height":68,"id":"zsPBb","width":1200,"x":120,"y":564}],"height":696,"id":"qAOta","width":1440,"x":0,"y":80}],"height":776,"id":"bPgqn","width":1440,"x":5132,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"h9xuK/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"h9xuK/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"h9xuK/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"h9xuK","width":1440,"x":0,"y":0},{"children":[{"height":36,"id":"p4iMCa","width":267,"x":120,"y":40},{"height":20,"id":"ZqjD7","width":720,"x":120,"y":100},{"children":"...","height":266,"id":"U7UQGn","width":720,"x":120,"y":144},{"children":"...","height":20,"id":"uylkB","width":720,"x":120,"y":434}],"height":518,"id":"UAwUB","width":1440,"x":0,"y":80}],"height":598,"id":"ELYM6","width":1440,"x":6692,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"N8y0ha/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"N8y0ha/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"N8y0ha/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"N8y0ha","width":1440,"x":0,"y":0},{"children":[{"height":36,"id":"ql8HZ","width":267,"x":120,"y":40},{"children":"...","height":224,"id":"cG4cd","width":720,"x":120,"y":100},{"children":"...","height":20,"id":"fbPA1","width":720,"x":120,"y":348}],"height":432,"id":"XXUhQ","width":1440,"x":0,"y":80}],"height":512,"id":"ElLoj","width":1440,"x":8252,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"rccUT/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"rccUT/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"rccUT/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"rccUT","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":64,"id":"R4kDsl","width":1200,"x":120,"y":40},{"children":"...","height":406,"id":"UaOs8","width":1200,"x":120,"y":128}],"height":598,"id":"si7bS","width":1440,"x":0,"y":80}],"height":678,"id":"TBiql","width":1440,"x":9812,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"zbGjf/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"zbGjf/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"zbGjf/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"zbGjf","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":64,"id":"wrNAi","width":1200,"x":120,"y":40},{"children":"...","height":505,"id":"rdhKb","width":1200,"x":120,"y":128}],"height":697,"id":"RbYF5","width":1440,"x":0,"y":80}],"height":777,"id":"dSjDc","width":1440,"x":11372,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"n2ZYvG/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"n2ZYvG/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"n2ZYvG/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"n2ZYvG","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":64,"id":"WWx4Z","width":1200,"x":120,"y":40},{"children":"...","height":434,"id":"Z3ChMC","width":1200,"x":120,"y":128}],"height":626,"id":"lNSF9","width":1440,"x":0,"y":80}],"height":706,"id":"tZ57p","width":1440,"x":12932,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"t4FdG/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"t4FdG/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"t4FdG/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"t4FdG","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":64,"id":"psgEr","width":1200,"x":120,"y":40},{"children":"...","height":406,"id":"DzXRM","width":1200,"x":120,"y":128}],"height":598,"id":"kUE9G","width":1440,"x":0,"y":80}],"height":678,"id":"cNzKe","width":1440,"x":14492,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"kD6RB/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"kD6RB/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"kD6RB/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"kD6RB","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":64,"id":"ZVcN7","width":1200,"x":120,"y":40},{"children":"...","height":466,"id":"lDpPp","width":1200,"x":120,"y":128}],"height":658,"id":"h2hB6","width":1440,"x":0,"y":80}],"height":738,"id":"d9cED","width":1440,"x":16052,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"Vy6Pj/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"Vy6Pj/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"Vy6Pj/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"Vy6Pj","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":668,"id":"GLPHO","width":720,"x":360,"y":48}],"height":780,"id":"IacrB","width":1440,"x":0,"y":80}],"height":860,"id":"UnIG6","width":1440,"x":17612,"y":0}],"height":868,"id":"hl9HZ","width":19052,"x":0,"y":42905}
> ```
>
> MCP tool call
>
> pencil.get_variables
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen"
> }
> ```
>
> ```text
> {"themes":{"Breakpoint":["Desktop","Mobile"]},"variables":{"color-body-attention":{"type":"color","value":"#d62940"},"color-body-caution":{"type":"color","value":"#856b05"},"color-body-default":{"type":"color","value":"#4b576c"},"color-body-emphasis":{"type":"color","value":"#051958"},"color-body-info":{"type":"color","value":"#0e45e3"},"color-body-inverse":{"type":"color","value":"#f0f0f3"},"color-body-inverse-emphasis":{"type":"color","value":"#ffffff"},"color-body-inverse-moderate":{"type":"color","value":"#e8eaec"},"color-body-moderate":{"type":"color","value":"#62738c"},"color-body-muted":{"type":"color","value":"#7e93b4"},"color-body-negative":{"type":"color","value":"#d62940"},"color-body-placeholder":{"type":"color","value":"#7e93b4"},"color-body-positive":{"type":"color","value":"#008353"},"color-body-selected":{"type":"color","value":"#002169"},"color-body-strong":{"type":"color","value":"#36445a"},"color-body-subtle":{"type":"color","value":"#cbd5e1"},"color-core-blue-100":{"type":"color","value":"#E7F0FF"},"color-core-blue-200":{"type":"color","value":"#CCDFFF"},"color-core-blue-600":{"type":"color","value":"#2749AD"},"color-core-blue-700":{"type":"color","value":"#0733A6"},"color-core-blue-800":{"type":"color","value":"#17398B"},"color-core-blue-950":{"type":"color","value":"#051958"},"color-core-green-medium":{"type":"color","value":"#51DBA9"},"color-core-red-500":{"type":"color","value":"#FF5D4F"},"color-line-attention":{"type":"color","value":"#f7e9a8"},"color-line-caution":{"type":"color","value":"#f7e9a8"},"color-line-default":{"type":"color","value":"#7e93b4"},"color-line-emphasis":{"type":"color","value":"#62738c"},"color-line-focus":{"type":"color","value":"#ac75ff"},"color-line-info":{"type":"color","value":"#ccdfff"},"color-line-inverse":{"type":"color","value":"#62738c"},"color-line-inverse-focus":{"type":"color","value":"#e3d1ff"},"color-line-moderate":{"type":"color","value":"#cbd5e1"},"color-line-muted":{"type":"color","value":"#e8eaec"},"color-line-negative":{"type":"color","value":"#ffc8c2"},"color-line-positive":{"type":"color","value":"#b5f2db"},"color-line-secondary":{"type":"color","value":"#406def"},"color-line-secondary-disabled":{"type":"color","value":"#a0b8f2"},"color-line-secondary-inverse":{"type":"color","value":"#f3f7fc"},"color-line-secondary-inverse-active":{"type":"color","value":"#ccdfff"},"color-line-secondary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-line-selected":{"type":"color","value":"#002169"},"color-line-subtle":{"type":"color","value":"#f0f0f3"},"color-on-primary":{"type":"color","value":"#ffffff"},"color-on-primary-disabled":{"type":"color","value":"#ffffff"},"color-on-primary-inverse":{"type":"color","value":"#0e45e3"},"color-on-primary-inverse-disabled":{"type":"color","value":"#4b576c"},"color-on-secondary":{"type":"color","value":"#0e45e3"},"color-on-secondary-disabled":{"type":"color","value":"#a0b8f2"},"color-on-secondary-inverse":{"type":"color","value":"#ffffff"},"color-on-secondary-inverse-active":{"type":"color","value":"#ccdfff"},"color-on-secondary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-on-tertiary":{"type":"color","value":"#0e45e3"},"color-on-tertiary-disabled":{"type":"color","value":"#a0b8f2"},"color-on-tertiary-inverse":{"type":"color","value":"#ffffff"},"color-on-tertiary-inverse-active":{"type":"color","value":"#ccdfff"},"color-on-tertiary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-primary":{"type":"color","value":"#0e45e3"},"color-primary-active":{"type":"color","value":"#0733a6"},"color-primary-disabled":{"type":"color","value":"#a0b8f2"},"color-primary-hover":{"type":"color","value":"#406def"},"color-primary-inverse":{"type":"color","value":"#ffffff"},"color-primary-inverse-active":{"type":"color","value":"#ccdfff"},"color-primary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-primary-inverse-hover":{"type":"color","value":"#e7f0ff"},"color-secondary":{"type":"color","value":"#ffffff00"},"color-secondary-active":{"type":"color","value":"#ccdfff"},"color-secondary-disabled":{"type":"color","value":"#ffffff00"},"color-secondary-hover":{"type":"color","value":"#e7f0ff"},"color-secondary-inverse":{"type":"color","value":"#ffffff00"},"color-secondary-inverse-active":{"type":"color","value":"#17398b"},"color-secondary-inverse-hover":{"type":"color","value":"#17398b"},"color-surface-backdrop":{"type":"color","value":"#f6f6f1"},"color-surface-base":{"type":"color","value":"#ffffff"},"color-surface-base-hover":{"type":"color","value":"#fafafc"},"color-surface-caution":{"type":"color","value":"#fcfaeb"},"color-surface-caution-active":{"type":"color","value":"#f7e9a8"},"color-surface-caution-hover":{"type":"color","value":"#fffddb"},"color-surface-info":{"type":"color","value":"#f3f7fc"},"color-surface-info-active":{"type":"color","value":"#ccdfff"},"color-surface-info-hover":{"type":"color","value":"#e7f0ff"},"color-surface-info-layer-1":{"type":"color","value":"#e7f0ff"},"color-surface-info-layer-2":{"type":"color","value":"#ccdfff"},"color-surface-inverse-backdrop":{"type":"color","value":"#051958"},"color-surface-inverse-backdrop-active":{"type":"color","value":"#0733a6"},"color-surface-inverse-backdrop-hover":{"type":"color","value":"#fff0f0"},"color-surface-inverse-base":{"type":"color","value":"#002169"},"color-surface-layer-1":{"type":"color","value":"#fafafc"},"color-surface-layer-2":{"type":"color","value":"#f5f6f9"},"color-surface-negative":{"type":"color","value":"#fbf3f1"},"color-surface-negative-active":{"type":"color","value":"#ffc8c2"},"color-surface-negative-disabled":{"type":"color","value":"#fbf3f1"},"color-surface-negative-hover":{"type":"color","value":"#fff0f0"},"color-surface-negative-inverse":{"type":"color","value":"#C94D53"},"color-surface-negative-inverse-active":{"type":"color","value":"#ffc8c2"},"color-surface-negative-inverse-disabled":{"type":"color","value":"#fbf3f1"},"color-surface-negative-inverse-hover":{"type":"color","value":"#fff0f0"},"color-surface-positive":{"type":"color","value":"#eefbf6"},"color-surface-positive-active":{"type":"color","value":"#b5f2db"},"color-surface-positive-hover":{"type":"color","value":"#dcfaed"},"color-surface-promo":{"type":"color","value":[{"theme":{"Breakpoint":"Desktop"},"value":"#406def"},{"theme":{"Breakpoint":"Mobile"},"value":"#406def"}]},"color-tertiary":{"type":"color","value":"#ffffff00"},"color-tertiary-active":{"type":"color","value":"#ccdfff"},"color-tertiary-disabled":{"type":"color","value":"#ffffff00"},"color-tertiary-hover":{"type":"color","value":"#e7f0ff"},"color-tertiary-inverse":{"type":"color","value":"#ffffff00"},"color-tertiary-inverse-active":{"type":"color","value":"#17398b"},"color-tertiary-inverse-disabled":{"type":"color","value":"#ffffff00"},"color-tertiary-inverse-hover":{"type":"color","value":"#17398b"},"dimension-0":{"type":"number","value":0},"dimension-104":{"type":"number","value":104},"dimension-112":{"type":"number","value":112},"dimension-12":{"type":"number","value":12},"dimension-120":{"type":"number","value":120},"dimension-16":{"type":"number","value":16},"dimension-160":{"type":"number","value":160},"dimension-2":{"type":"number","value":2},"dimension-20":{"type":"number","value":20},"dimension-200":{"type":"number","value":200},"dimension-24":{"type":"number","value":24},"dimension-240":{"type":"number","value":240},"dimension-28":{"type":"number","value":28},"dimension-280":{"type":"number","value":280},"dimension-32":{"type":"number","value":32},"dimension-320":{"type":"number","value":320},"dimension-36":{"type":"number","value":36},"dimension-360":{"type":"number","value":360},"dimension-4":{"type":"number","value":4},"dimension-40":{"type":"number","value":40},"dimension-44":{"type":"number","value":44},"dimension-48":{"type":"number","value":48},"dimension-56":{"type":"number","value":56},"dimension-64":{"type":"number","value":64},"dimension-72":{"type":"number","value":72},"dimension-8":{"type":"number","value":8},"dimension-80":{"type":"number","value":80},"dimension-88":{"type":"number","value":88},"dimension-96":{"type":"number","value":96},"elevation-1":{"type":"string","value":"1px 3px 25px 0px rgba(63, 61, 86, 0.03)"},"elevation-1-color":{"type":"color","value":"#3F3D5608"},"elevation-2":{"type":"string","value":"6px 10px 35px 0px rgba(63, 61, 86, 0.07)"},"elevation-2-color":{"type":"color","value":"#3F3D5612"},"elevation-3":{"type":"string","value":"4px 12px 30px 0px rgba(107, 107, 103, 0.15)"},"elevation-3-color":{"type":"color","value":"#6B6B6726"},"font-body-caption-letter-spacing":{"type":"number","value":0},"font-body-caption-line-height":{"type":"number","value":20},"font-body-caption-size":{"type":"number","value":14},"font-body-default-letter-spacing":{"type":"number","value":0},"font-body-default-line-height":{"type":"number","value":24},"font-body-default-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":18},{"theme":{"Breakpoint":"Mobile"},"value":17}]},"font-body-supporting-letter-spacing":{"type":"number","value":0},"font-body-supporting-line-height":{"type":"number","value":20},"font-body-supporting-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":16},{"theme":{"Breakpoint":"Mobile"},"value":15}]},"font-data-primary-letter-spacing":{"type":"number","value":-0.5},"font-data-primary-line-height":{"type":"number","value":56},"font-data-primary-size":{"type":"number","value":48},"font-data-secondary-letter-spacing":{"type":"number","value":-0.3},"font-data-secondary-line-height":{"type":"number","value":40},"font-data-secondary-size":{"type":"number","value":32},"font-family-primary":{"type":"string","value":"DM Sans"},"font-headline-page-letter-spacing":{"type":"number","value":-0.3},"font-headline-page-line-height":{"type":"number","value":36},"font-headline-page-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":30}]},"font-headline-section-letter-spacing":{"type":"number","value":0},"font-headline-section-line-height":{"type":"number","value":24},"font-headline-section-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":22},{"theme":{"Breakpoint":"Mobile"},"value":19}]},"font-headline-tile-letter-spacing":{"type":"number","value":-0.24},"font-headline-tile-line-height":{"type":"number","value":32},"font-headline-tile-size":{"type":"number","value":24},"font-input-field-line-height":{"type":"number","value":24},"font-input-field-size":{"type":"number","value":20},"font-label-default-letter-spacing":{"type":"number","value":0},"font-label-default-line-height":{"type":"number","value":24},"font-label-default-size":{"type":"number","value":17},"font-label-large-1-letter-spacing":{"type":"number","value":0},"font-label-large-1-line-height":{"type":"number","value":24},"font-label-large-1-size":{"type":"number","value":19},"font-label-small-1-letter-spacing":{"type":"number","value":0},"font-label-small-1-line-height":{"type":"number","value":24},"font-label-small-1-size":{"type":"number","value":15},"font-label-small-2-letter-spacing":{"type":"number","value":0},"font-label-small-2-line-height":{"type":"number","value":16},"font-label-small-2-size":{"type":"number","value":13},"font-label-small-3-letter-spacing":{"type":"number","value":0},"font-label-small-3-line-height":{"type":"number","value":16},"font-label-small-3-size":{"type":"number","value":11},"font-weight-bold":{"type":"number","value":700},"font-weight-light":{"type":"number","value":300},"font-weight-medium":{"type":"number","value":500},"font-weight-regular":{"type":"number","value":400},"gap-content":{"type":"number","value":32},"gap-content-area":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"gap-group-large":{"type":"number","value":24},"gap-group-small":{"type":"number","value":4},"gap-row-default":{"type":"number","value":16},"gap-row-large":{"type":"number","value":24},"gap-row-small":{"type":"number","value":8},"gap-tile-large":{"type":"number","value":24},"gap-tile-small":{"type":"number","value":12},"gap-x-component-default":{"type":"number","value":8},"gap-x-component-large":{"type":"number","value":12},"gap-x-component-small":{"type":"number","value":4},"gap-x-group":{"type":"number","value":8},"gap-x-pair":{"type":"number","value":8},"gap-x-row":{"type":"number","value":16},"gap-y-group":{"type":"number","value":16},"gap-y-list":{"type":"number","value":8},"gap-y-pair":{"type":"number","value":8},"gap-y-section":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"gap-y-surface":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"height-component-default":{"type":"number","value":48},"height-component-large-1":{"type":"number","value":56},"height-component-large-2":{"type":"number","value":64},"height-component-large-3":{"type":"number","value":80},"height-component-small-1":{"type":"number","value":40},"height-component-small-2":{"type":"number","value":36},"height-component-small-3":{"type":"number","value":32},"height-component-small-4":{"type":"number","value":28},"height-component-small-5":{"type":"number","value":24},"margin-surface-base":{"type":"number","value":0},"padding-content-area":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"padding-surface-1":{"type":"number","value":16},"padding-surface-2":{"type":"number","value":16},"padding-surface-base":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":24},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"padding-x-component-default":{"type":"number","value":24},"padding-x-component-default-icon-offset":{"type":"number","value":20},"padding-x-component-large":{"type":"number","value":24},"padding-x-component-large-1":{"type":"number","value":32},"padding-x-component-large-1-icon-offset":{"type":"number","value":28},"padding-x-component-large-2":{"type":"number","value":40},"padding-x-component-large-2-icon-offset":{"type":"number","value":36},"padding-x-component-large-icon-offset":{"type":"number","value":16},"padding-x-component-small":{"type":"number","value":16},"padding-x-component-small-1":{"type":"number","value":20},"padding-x-component-small-1-icon-offset":{"type":"number","value":16},"padding-x-component-small-2-icon-offset":{"type":"number","value":12},"padding-x-component-small-3":{"type":"number","value":12},"padding-x-component-small-4":{"type":"number","value":8},"padding-x-component-small-icon-offset":{"type":"number","value":8},"shape-radius-default":{"type":"number","value":8},"shape-radius-full":{"type":"number","value":999},"shape-radius-large-1":{"type":"number","value":16},"shape-radius-medium-1":{"type":"number","value":12},"shape-radius-small-1":{"type":"number","value":4},"shape-radius-small-2":{"type":"number","value":2},"size-icon-default":{"type":"number","value":24},"size-icon-large-1":{"type":"number","value":40},"size-icon-large-2":{"type":"number","value":32},"size-icon-small-1":{"type":"number","value":20},"size-icon-small-2":{"type":"number","value":16},"size-icon-small-3":{"type":"number","value":12},"stroke-default":{"type":"number","value":1.4},"stroke-large-1":{"type":"number","value":1.7},"stroke-large-2":{"type":"number","value":2.2},"stroke-small-1":{"type":"number","value":1.2}}}
> ```
>
> MCP tool call
>
> pencil.get_guidelines
>
> ```json
> {}
> ```
>
> ```text
> # Available Guidelines
>
> Call get_guidelines again with two arguments
>
> ## Guides
>
> - "Code": Generating code from .pen files
> - "Design System": Composing screens with design system components
> - "Landing Page": Designing landing pages and promotional websites
> - "Mobile App": Designing mobile apps
> - "Slides": Designing presentation slides
> - "Table": Working with tables and dashboards
> - "Tailwind": Tailwind CSS v4 implementation
> - "Web App": Designing web apps
>
> ## Styles
>
> - "Aerial Gravitas"
> - "Anchored Ribbon Grid"
> - "Artisan Editorial"
> - "Blueprint Technical"
> - "Centered Device Cascade"
> - "Centered Serif List"
> - "Cinematic Alternating"
> - "Cinematic Device Column"
> - "Color Block Stack"
> - "Dark Centered Platform"
> - "Editorial Landscape Stack"
> - "Editorial Scientific"
> - "Gradient Prompt Stack"
> - "Illustrated Ribbon Stack"
> - "Illustrated Warm"
> - "Inline Friendly"
> - "Modular Bento Showcase"
> - "Monumental Editorial"
> - "Narrative Illustrated"
> - "Product Data Grid"
> - "Product Demo"
> - "Saturated Code Bridge"
> - "Soft Bento"
> - "Spatial Plus"
> - "Split Inverse Showcase"
> - "Zigzag Bold Split"
> ```
>
> MCP tool call
>
> pencil.snapshot_layout
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "parentId": "C7ypH",
>   "maxDepth": 3,
>   "problemsOnly": false
> }
> ```
>
> ```text
> {"children":[{"children":[{"height":24,"id":"L14UbI","width":293,"x":40,"y":40},{"height":16,"id":"z5qArl","width":69,"x":40,"y":80},{"children":[{"children":"...","height":48,"id":"KdY4r","width":48,"x":356,"y":28},{"children":"...","height":20,"id":"N77Psq","width":327,"x":216.5,"y":84},{"height":20,"id":"yVmVU","width":189,"x":285.5,"y":112}],"height":160,"id":"kwrZm","width":760,"x":40,"y":112},{"height":16,"id":"cEqyF","width":144,"x":40,"y":288},{"children":[{"height":8,"id":"dFKdN","width":96,"x":0,"y":0}],"height":8,"id":"L4EBjh","width":240,"x":40,"y":320},{"height":16,"id":"QiHZK","width":90,"x":40,"y":344},{"children":[{"children":"...","height":24,"id":"fBKJH","width":136,"x":0,"y":0},{"height":16,"id":"ctoCw","width":75,"x":237,"y":4}],"height":24,"id":"nIrAd","width":312,"x":40,"y":376},{"height":16,"id":"PZuei","width":122,"x":40,"y":416},{"children":[{"children":"...","height":42,"id":"NrMCE","width":154,"x":16,"y":12},{"children":"...","height":32,"id":"JMyrJ","width":164,"x":580,"y":17}],"height":66,"id":"p3DcE","width":760,"x":40,"y":448},{"height":16,"id":"Ug2qs","width":177,"x":40,"y":530},{"children":[{"children":"...","height":40,"id":"Q8tE7c","width":760,"x":24,"y":24},{"height":20,"id":"JYzDE","width":760,"x":24,"y":80},{"children":"...","height":160,"id":"lygAh","width":760,"x":24,"y":116}],"height":300,"id":"Wwg0d","width":808,"x":40,"y":562},{"height":16,"id":"sSc28","width":150,"x":40,"y":878},{"children":[{"children":"...","height":68,"id":"r1cRwa","width":312,"x":24,"y":24},{"height":1,"id":"fhxgP","width":312,"x":24,"y":112},{"children":"...","height":40,"id":"A4q6cU","width":312,"x":24,"y":133},{"children":"...","height":126,"id":"OXZTD","width":312,"x":24,"y":193},{"height":1,"id":"HxnJY","width":312,"x":24,"y":339},{"children":"...","height":58,"id":"M5aLuu","width":312,"x":24,"y":360},{"children":"...","height":48,"id":"D76Wa","width":312,"x":24,"y":438},{"height":34,"id":"elVGp","width":312,"x":24,"y":506}],"height":564,"id":"q50qn","width":360,"x":40,"y":910}],"height":1514,"id":"VXpI0","width":888,"x":0,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"V8em2/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"V8em2/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"V8em2/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"V8em2","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":132,"id":"pqvZ5","width":1200,"x":120,"y":40},{"children":"...","height":1128,"id":"v1vOA2","width":1200,"x":120,"y":204}],"height":1404,"id":"LTMoe","width":1440,"x":0,"y":80}],"height":1484,"id":"I94Kf","width":1440,"x":1008,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"WAQNk/y43Fa","width":320,"x":0,"y":0},{"children":"...","height":64,"id":"WAQNk/z7l6N","width":320,"x":0,"y":0},{"children":"...","height":80,"id":"WAQNk/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"WAQNk","width":1440,"x":0,"y":0},{"children":[{"children":"...","height":132,"id":"AV53w","width":1200,"x":120,"y":40},{"children":"...","height":1202,"id":"k0WGy","width":1200,"x":120,"y":204}],"height":1478,"id":"leqM5","width":1440,"x":0,"y":80}],"height":1558,"id":"u2oh4H","width":1440,"x":2568,"y":0},{"children":[{"children":[{"children":"...","height":80,"id":"hh1hm","width":1440,"x":0,"y":0},{"children":"...","height":1396,"id":"mmMBx","width":1440,"x":0,"y":80}],"height":1476,"id":"Y04JX","width":1440,"x":0,"y":0},{"children":[{"height":16,"id":"ieqAS","width":305,"x":40,"y":40},{"children":"...","height":284,"id":"rBoYU","width":640,"x":40,"y":72}],"height":396,"id":"J5cEpv","width":720,"x":0,"y":1524}],"height":1920,"id":"TYRfl","width":1440,"x":4128,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"M3UvPC/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"M3UvPC/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"M3UvPC/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"M3UvPC/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"M3UvPC","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"f6uxG","width":358,"x":16,"y":16},{"children":"...","height":72,"id":"k202I","width":358,"x":16,"y":90},{"children":"...","height":178,"id":"jfZ8H","width":358,"x":16,"y":178},{"children":"...","height":198,"id":"AagYe","width":358,"x":16,"y":372},{"children":"...","height":178,"id":"S8xTUu","width":358,"x":16,"y":586},{"children":"...","height":178,"id":"goY7T","width":358,"x":16,"y":780},{"children":"...","height":179,"id":"q3w6SL","width":358,"x":16,"y":974}],"height":1185,"id":"zhk2o","width":390,"x":0,"y":64},{"children":[{"children":"...","height":48,"id":"Z9eqOe/v4zr0R","width":65.2,"x":16,"y":8},{"children":"...","height":48,"id":"Z9eqOe/SJPy4","width":65.2,"x":89.2,"y":8},{"children":"...","height":48,"id":"Z9eqOe/pnDi7","width":65.20000000000002,"x":162.4,"y":8},{"children":"...","height":48,"id":"Z9eqOe/IzdiB","width":65.19999999999999,"x":235.60000000000002,"y":8},{"children":"...","height":48,"id":"Z9eqOe/O2mru","width":65.19999999999999,"x":308.8,"y":8}],"height":88,"id":"Z9eqOe","width":390,"x":0,"y":1249}],"height":1337,"id":"zwZnb","width":390,"x":5688,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"j7RFi/Gi7T6","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"j7RFi/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"j7RFi/vv0xy","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"j7RFi/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"j7RFi","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"VTLQR","width":358,"x":16,"y":16},{"children":"...","height":336,"id":"xpuV0","width":358,"x":16,"y":90}],"height":458,"id":"kQq3f","width":390,"x":0,"y":64},{"children":[{"children":"...","height":48,"id":"k88WEw/v4zr0R","width":65.2,"x":16,"y":8},{"children":"...","height":48,"id":"k88WEw/SJPy4","width":65.2,"x":89.2,"y":8},{"children":"...","height":48,"id":"k88WEw/pnDi7","width":65.20000000000002,"x":162.4,"y":8},{"children":"...","height":48,"id":"k88WEw/IzdiB","width":65.19999999999999,"x":235.60000000000002,"y":8},{"children":"...","height":48,"id":"k88WEw/O2mru","width":65.19999999999999,"x":308.8,"y":8}],"height":88,"id":"k88WEw","width":390,"x":0,"y":522}],"height":610,"id":"fj673","width":390,"x":6198,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"e5hH1/Gi7T6","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"e5hH1/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"e5hH1/vv0xy","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"e5hH1/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"e5hH1","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"j6oKQR","width":358,"x":16,"y":16},{"children":"...","height":278,"id":"ZmpUw","width":358,"x":16,"y":90}],"height":400,"id":"s8zPe","width":390,"x":0,"y":64},{"children":[{"children":"...","height":48,"id":"AlocF/v4zr0R","width":65.2,"x":16,"y":8},{"children":"...","height":48,"id":"AlocF/SJPy4","width":65.2,"x":89.2,"y":8},{"children":"...","height":48,"id":"AlocF/pnDi7","width":65.20000000000002,"x":162.4,"y":8},{"children":"...","height":48,"id":"AlocF/IzdiB","width":65.19999999999999,"x":235.60000000000002,"y":8},{"children":"...","height":48,"id":"AlocF/O2mru","width":65.19999999999999,"x":308.8,"y":8}],"height":88,"id":"AlocF","width":390,"x":0,"y":464}],"height":552,"id":"K1Srj","width":390,"x":6708,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"qBvjT/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"qBvjT/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"qBvjT/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"qBvjT/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"qBvjT","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"a0REQ","width":358,"x":16,"y":16},{"children":"...","height":72,"id":"Z8YSL4","width":358,"x":16,"y":90},{"children":"...","height":178,"id":"H48Zgb","width":358,"x":16,"y":178},{"children":"...","height":198,"id":"JL8Fe","width":358,"x":16,"y":372},{"children":"...","height":178,"id":"WIUWK","width":358,"x":16,"y":586},{"children":"...","height":178,"id":"JO3dg","width":358,"x":16,"y":780},{"children":"...","height":179,"id":"LVwu9","width":358,"x":16,"y":974}],"height":1185,"id":"PJ9ac","width":390,"x":0,"y":64}],"height":1249,"id":"I41wWk","width":390,"x":7218,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"Tvq9x/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"Tvq9x/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"Tvq9x/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"Tvq9x/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"Tvq9x","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"Z72Fi","width":358,"x":16,"y":16},{"children":"...","height":72,"id":"DDmyo","width":358,"x":16,"y":90},{"children":"...","height":110,"id":"Nbvvn","width":358,"x":16,"y":178},{"children":"...","height":256,"id":"wVc7J","width":358,"x":16,"y":304},{"children":"...","height":284,"id":"KtJCC","width":358,"x":16,"y":576},{"children":"...","height":384,"id":"Xj0sg","width":358,"x":16,"y":876},{"children":"...","height":178,"id":"V1ly4E","width":358,"x":16,"y":1276},{"children":"...","height":109,"id":"Iuxxf","width":358,"x":16,"y":1470}],"height":1611,"id":"ZBjwt","width":390,"x":0,"y":64}],"height":1675,"id":"B1hNRM","width":390,"x":7728,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"ZhHRI/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"ZhHRI/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"ZhHRI/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"ZhHRI/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"ZhHRI","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"Hwn7a","width":358,"x":16,"y":16},{"children":"...","height":72,"id":"k1CLmq","width":358,"x":16,"y":90},{"children":"...","height":346,"id":"SSjJr","width":358,"x":16,"y":178},{"children":"...","height":198,"id":"IV0Ae","width":358,"x":16,"y":540},{"children":"...","height":178,"id":"hUBoy","width":358,"x":16,"y":754},{"children":"...","height":178,"id":"I4JiTj","width":358,"x":16,"y":948},{"children":"...","height":179,"id":"MvTku","width":358,"x":16,"y":1142}],"height":1353,"id":"R2wAUN","width":390,"x":0,"y":64}],"height":1417,"id":"w48oV","width":390,"x":8238,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"Qbwzb/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"Qbwzb/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"Qbwzb/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"Qbwzb/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"Qbwzb","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"LcmbH","width":358,"x":16,"y":16},{"children":"...","height":72,"id":"Ao8uI","width":358,"x":16,"y":90},{"children":"...","height":178,"id":"d9jaP","width":358,"x":16,"y":178},{"children":"...","height":198,"id":"Qywlj","width":358,"x":16,"y":372},{"children":"...","height":178,"id":"xowHi","width":358,"x":16,"y":586},{"children":"...","height":476,"id":"eGL19","width":358,"x":16,"y":780},{"children":"...","height":179,"id":"wuPYo","width":358,"x":16,"y":1272}],"height":1483,"id":"SoLfT","width":390,"x":0,"y":64}],"height":1547,"id":"JByYQ","width":390,"x":8748,"y":0},{"children":[{"children":[{"children":"...","height":64,"id":"bZ45L/Gi7T6","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"bZ45L/P10pRt","width":375,"x":0,"y":0},{"children":"...","height":64,"id":"bZ45L/vv0xy","width":390,"x":0,"y":0},{"children":"...","height":64,"id":"bZ45L/OCplz","width":375,"x":0,"y":0}],"height":64,"id":"bZ45L","width":390,"x":0,"y":0},{"children":[{"children":"...","height":58,"id":"aLXde","width":358,"x":16,"y":16},{"children":"...","height":203,"id":"Q2VNsC","width":358,"x":16,"y":90},{"children":"...","height":216,"id":"sj2cZ","width":358,"x":16,"y":309},{"children":"...","height":129,"id":"IzI4j","width":358,"x":16,"y":541},{"children":"...","height":48,"id":"GOgeH","width":358,"x":16,"y":686}],"height":766,"id":"yeA4X","width":390,"x":0,"y":64}],"height":830,"id":"E8l8nb","width":390,"x":9258,"y":0}],"height":1920,"id":"C7ypH","width":9648,"x":0,"y":40653}
> ```
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "hl9HZ"
> }
> ```
>
> ```text
> Screenshot generated for node: hl9HZ
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.batch_get
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeIds": [
>     "C7ypH",
>     "hl9HZ"
>   ],
>   "readDepth": 1,
>   "resolveInstances": false,
>   "resolveVariables": false
> }
> ```
>
> ```text
> [{"children":[{"children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-layer-1","gap":16,"id":"VXpI0","layout":"vertical","name":"Direction A — Components","padding":40,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame"},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"I94Kf","layout":"vertical","name":"Desktop — Default · All Outstanding","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"u2oh4H","layout":"vertical","name":"Desktop — Mixed \u0026 Edge States","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","gap":48,"id":"TYRfl","layout":"vertical","name":"Desktop — All Uploaded + No Active Request","type":"frame"},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"zwZnb","layout":"vertical","name":"Mobile App — Checklist Hub","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"fj673","layout":"vertical","name":"A-M1 · App — Document Center · Active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"K1Srj","layout":"vertical","name":"A-M2 · App — Document Center · No active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"I41wWk","layout":"vertical","name":"A-M3 · App — Checklist · Default","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"B1hNRM","layout":"vertical","name":"A-M4 · App — Checklist · Mixed states","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"w48oV","layout":"vertical","name":"A-M5 · App — Checklist · File too large","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"JByYQ","layout":"vertical","name":"A-M6 · App — Checklist · Other needs a note","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"E8l8nb","layout":"vertical","name":"A-M7 · App — All uploaded this visit","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390}],"gap":120,"id":"C7ypH","name":"Direction A — Checklist Hub","type":"frame","x":0,"y":40653},{"children":[{"children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":32,"id":"qyynU","layout":"vertical","name":"Direction B — Components","padding":32,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame"},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"cMzk2","layout":"vertical","name":"B1 · App — Document Center · Active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"UKY0H","layout":"vertical","name":"B2 · App — Document Center · No active request","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"O8sAyn","layout":"vertical","name":"B3 · App — Document Upload · Overview (mixed states)","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"S1lRh1","layout":"vertical","name":"B4 · App — Step · File selected","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"S68zZ","layout":"vertical","name":"B5 · App — Step · File validation error","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"VkQpT","layout":"vertical","name":"B6 · App — Step · Other document · Note required","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"twv9F","layout":"vertical","name":"B7 · App — Step · Uploading","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"mA5La","layout":"vertical","name":"B8 · App — Step · Upload failed · Retry","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"jvr2D","layout":"vertical","name":"B9 · App — All uploaded this visit","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"bPgqn","layout":"vertical","name":"B10 · Web Desktop — Guided upload","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"ELYM6","layout":"vertical","name":"B11 · Web Desktop — Document Center · Active request","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"ElLoj","layout":"vertical","name":"B12 · Web Desktop — Document Center · No active request","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"TBiql","layout":"vertical","name":"B13 · Web Desktop — Step · File selected","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"dSjDc","layout":"vertical","name":"B14 · Web Desktop — Step · File validation error","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"tZ57p","layout":"vertical","name":"B15 · Web Desktop — Step · Other document · Note required","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"cNzKe","layout":"vertical","name":"B16 · Web Desktop — Step · Uploading","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"d9cED","layout":"vertical","name":"B17 · Web Desktop — Step · Upload failed · Retry","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":"...","clip":true,"fill":"$color-surface-backdrop","id":"UnIG6","layout":"vertical","name":"B18 · Web Desktop — All uploaded this visit","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440}],"gap":120,"id":"hl9HZ","name":"Direction B — Guided Focus Flow","type":"frame","x":0,"y":42905}]
> ```
>
> MCP tool call
>
> pencil.get_guidelines
>
> ```json
> {
>   "category": "guide",
>   "name": "Design System"
> }
> ```
>
> ````text
> # Design System Composition Guidelines
>
> Helpful patterns for composing screens and dashboards using design system components in `.pen` files. These are suggestions to get you started—feel free to adapt them to your needs.
>
> ---
>
> ## 1. Common Component Patterns
>
> Component naming patterns you might encounter:
> - `Button/*` — Button variants
> - `Input/*` or `Input Group/*` — Form inputs
> - `Card` — Card containers
> - `Sidebar` — Navigation sidebar
> - `Table` or `Data Table` — Table elements
> - `Alert/*` — Feedback alerts
> - `Modal/*` or `Dialog` — Modal dialogs
>
> ---
>
> ## 2. Understanding Slots
>
> Slots are placeholder frames inside components where you insert child components. They're marked with the `slot` property containing an array of recommended component IDs.
>
> ### How to Identify Slots
>
> When reading a component, look for frames with slot property:
> ```json
> {
>   "id": "slotId",
>   "name": "Content Slot",
>   "slot": ["recommendedComponentId1", "recommendedComponentId2"]
> }
> ```
>
> ### How to Use Slots
>
> A typical approach:
> 1. **Insert the parent component** and capture its binding
> 2. **Insert children into the slot** using path: `parentBinding/slotId`
> 3. **Consider using recommended components** listed in the slot's `slot` array (though you can insert other content too)
>
> ```javascript
> sidebar=Insert(page, {type: "ref", ref: "sidebarComponentId", height: "fill_container"})
> item1=Insert(sidebar+"/contentSlotId", {type: "ref", ref: "sidebarItemId", descendants: {...}})
> item2=Insert(sidebar+"/contentSlotId", {type: "ref", ref: "sidebarItemId", descendants: {...}})
> ```
>
> If you don't need to use a particular slot in a component instance, mark the slot `enabled: false` to hide it.
>
> ---
>
> ## 3. Icons
>
> ### Available Icon Sets
>
> You can use the `icon` type with these libraries:
>
> | Library | Style | Example Names |
> |-------------|-------|---------------|
> | `lucide` | Outline, rounded | `home`, `settings`, `user`, `search`, `plus`, `x` |
> | `feather` | Outline, rounded | `home`, `settings`, `user`, `search`, `plus`, `x` |
> | `Material Symbols Outlined` | Outline | `home`, `settings`, `person`, `search`, `add`, `close` |
> | `Material Symbols Rounded` | Rounded | `home`, `settings`, `person`, `search`, `add`, `close` |
> | `Material Symbols Sharp` | Sharp corners | `home`, `settings`, `person`, `search`, `add`, `close` |
>
> ### Icon Usage
>
> Standalone icon with Lucide, and Material Symbols with weight:
>
> ```javascript
> icon=Insert(container, {type: "icon", library: "lucide", icon: "settings", width: 24, height: 24, fill: "$--foreground"})
> icon=Insert(container, {type: "icon", library: "Material Symbols Rounded", icon: "dashboard", width: 24, height: 24, fill: "$--foreground", weight: 400})
> ```
>
> ### Overriding Icons in Components
>
> When a component contains an icon, override it via descendants. Descendant keys can be node IDs/paths or unique descendant names; use IDs/paths when names are ambiguous:
> ```javascript
> descendants: {
>   "iconNodeId": { icon: "settings" }
> }
> ```
>
> ### Common Icon Names
>
> | Action | Lucide/Feather | Material Symbols |
> |--------|----------------|------------------|
> | Home | `home` | `home` |
> | Settings | `settings` | `settings` |
> | User | `user` | `person` |
> | Search | `search` | `search` |
> | Add | `plus` | `add` |
> | Close | `x` | `close` |
> | Edit | `edit`, `pencil` | `edit` |
> | Delete | `trash`, `trash-2` | `delete` |
> | Check | `check` | `check` |
> | Arrow right | `arrow-right` | `arrow_forward` |
> | Chevron down | `chevron-down` | `expand_more` |
> | Menu | `menu` | `menu` |
> | Dashboard | `layout-dashboard` | `dashboard` |
> | Folder | `folder` | `folder` |
> | File | `file` | `description` |
> | Calendar | `calendar` | `calendar_today` |
> | Mail | `mail` | `mail` |
> | Bell | `bell` | `notifications` |
>
> ---
>
> ## 4. Sidebar Composition
>
> ### Structure
>
> ```
> Sidebar Component
> ├── Header (logo, brand)
> ├── Content Slot ← Insert navigation items here
> └── Footer (user profile, settings)
> ```
>
> ### Populating Sidebar Navigation
>
> Insert the sidebar, then add section title (if available), active item, and default items:
>
> ```javascript
> sidebar=Insert(page, {type: "ref", ref: "sidebarId", height: "fill_container"})
> newSectionTitle=Insert(sidebar+"/contentSlotId", {type: "ref", ref: "sidebarSectionTitleId", descendants: {"labelTextId": {content: "Main Menu"}}})
> itemDashboard=Insert(sidebar+"/contentSlotId", {type: "ref", ref: "sidebarItemActiveId", descendants: {"iconId": {icon: "dashboard"}, "labelId": {content: "Dashboard"}}})
> itemUsers=Insert(sidebar+"/contentSlotId", {type: "ref", ref: "sidebarItemDefaultId", descendants: {"iconId": {icon: "users"}, "labelId": {content: "Users"}}})
> itemSettings=Insert(sidebar+"/contentSlotId", {type: "ref", ref: "sidebarItemDefaultId", descendants: {"iconId": {icon: "settings"}, "labelId": {content: "Settings"}}})
> ```
>
> ---
>
> ## 5. Card Composition
>
> ### Structure
>
> Cards typically have three slots:
>
> ```
> Card Component
> ├── Header Slot ← Title, description
> ├── Content Slot ← Main content
> └── Actions Slot ← Buttons
> ```
>
> ### Populating Card Slots
>
> Insert card, replace header with custom content, setup content slot for form, setup actions slot with buttons:
>
> ```javascript
> card=Insert(container, {type: "ref", ref: "cardId", width: 480})
> newNode=Replace(card+"/headerSlotId", {type: "frame", layout: "vertical", gap: 4, padding: 24, width: "fill_container", children: [
>   {type: "text", content: "Card Title", fill: "$--foreground", fontFamily: "$--font-primary", fontSize: 18, fontWeight: "600"},
>   {type: "text", content: "Card description goes here", fill: "$--muted-foreground", fontFamily: "$--font-secondary", fontSize: 14}
> ]})
> Update(card+"/contentSlotId", {layout: "vertical", gap: 16, padding: 24})
> input=Insert(card+"/contentSlotId", {type: "ref", ref: "inputGroupId", width: "fill_container", descendants: {"labelId": {content: "Email"}}})
> Update(card+"/actionsSlotId", {gap: 12, justifyContent: "end", padding: 24})
> cancelBtn=Insert(card+"/actionsSlotId", {type: "ref", ref: "buttonOutlineId", descendants: {"iconId": {enabled: false}, "labelId": {content: "Cancel"}}})
> saveBtn=Insert(card+"/actionsSlotId", {type: "ref", ref: "buttonPrimaryId", descendants: {"iconId": {enabled: false}, "labelId": {content: "Save"}}})
> ```
>
> ---
>
> ## 6. Tab Composition
>
> ### Structure
>
> ```
> Tabs Container
> └── Direct children: Tab Items (active/inactive)
> ```
>
> ### Building Tabs
>
> Insert tabs container, then add tab items directly (first one active):
>
> ```javascript
> tabs=Insert(container, {type: "ref", ref: "tabsId", width: "fit_content"})
> tab1=Insert(tabs, {type: "ref", ref: "tabItemActiveId", descendants: {"labelId": {content: "General"}}})
> tab2=Insert(tabs, {type: "ref", ref: "tabItemInactiveId", descendants: {"labelId": {content: "Security"}}})
> tab3=Insert(tabs, {type: "ref", ref: "tabItemInactiveId", descendants: {"labelId": {content: "Billing"}}})
> ```
>
> ---
>
> ## 7. Dropdown Composition
>
> ### Structure
>
> ```
> Dropdown Container
> └── Direct children: Search, Dividers, Titles, List Items
> ```
>
> ### Building Dropdowns
>
> Optional search, divider, section title, and items:
>
> ```javascript
> dropdown=Insert(container, {type: "ref", ref: "dropdownId", height: "fit_content"})
> search=Insert(dropdown, {type: "ref", ref: "searchBoxId"})
> divider=Insert(dropdown, {type: "ref", ref: "listDividerId"})
> title=Insert(dropdown, {type: "ref", ref: "listTitleId", descendants: {"labelId": {content: "Actions"}}})
> optionA=Insert(dropdown, {type: "ref", ref: "listItemCheckedId", descendants: {"labelId": {content: "Option A"}}})
> optionB=Insert(dropdown, {type: "ref", ref: "listItemUncheckedId", descendants: {"labelId": {content: "Option B"}}})
> ```
>
> ---
>
> ## 8. Table Composition
>
> ### Table Structure
>
> ```
> Table (frame)
> ├── Table Header — Search/filter + action buttons
> ├── Table Wrapper — Contains all rows
> │   ├── Header Row (frame)
> │   │   └── Cell (frame)
> │   │       └── Content (text, label, button, etc.)
> │   ├── Data Row 1 (frame)
> │   │   └── Cell (frame)
> │   │       └── Content (text, label, button, etc.)
> │   ├── Data Row 2 (frame)
> │   │   └── Cell (frame)
> │   │       └── Content (text, label, button, etc.)
> │   └── ...
> └── Table Footer — Row count + pagination
> ```
>
> ### Building Tables Step by Step
>
> ### Table Hierarchy
>
> **Important:** Tables follow this strict nesting structure:
> Table → Row → Cell (frame) → Cell Content (text, label, button, etc.)
>
> - **Table**: Container with vertical layout holding all rows
> - **Row**: Horizontal container holding cells
> - **Cell**: Frame wrapper that controls column width
> - **Cell Content**: The actual content inside the cell (text, badges, buttons, etc.)
>
> **Add data rows with cells**
>
> Note: For tables with many rows, split into multiple `batch_design` calls (e.g., 2-3 rows per call).
>
> ```javascript
> row1=Insert(table, {type: "ref", ref: "dataTableRowId", width: "fill_container"})
> nameCell=Insert(row1, {type: "ref", ref: "dataTableCellId", width: "fill_container"})
> nameText=Insert(nameCell, {type: "text", content: "John Doe"})
> emailCell=Insert(row1, {type: "ref", ref: "dataTableCellId", width: "fill_container"})
> emailText=Insert(emailCell, {type: "text", content: "john@example.com"})
> statusCell=Insert(row1, {type: "ref", ref: "dataTableCellId", width: 120})
> statusBadge=Insert(statusCell, {type: "ref", ref: "labelSuccessId", descendants: {"textId": {content: "Active"}}})
> actionsCell=Insert(row1, {type: "ref", ref: "dataTableCellId", width: 100})
> actionBtn=Insert(actionsCell, {type: "ref", ref: "iconButtonId"})
> ```
>
> ### Column Width Strategy
>
> Suggested starting points (adjust as needed):
>
> | Column Type | Typical Width |
> |-------------|-------|
> | Primary identifier (name) | 200-250px |
> | Email, URL | `fill_container` |
> | Status, badge | 100-120px |
> | Date | 120-150px |
> | Actions | 80-100px |
> | Numbers | 80-100px |
>
> ---
>
> ## 9. Pagination Composition
>
> ### Structure
>
> ```
> Pagination Component
> ├── Previous Button
> ├── Page Numbers Slot ← Insert page items here
> └── Next Button
> ```
>
> ### Building Pagination
>
> Insert page numbers into slot:
>
> ```javascript
> pagination=Insert(container, {type: "ref", ref: "paginationId"})
> page1=Insert(pagination+"/pageNumbersSlotId", {type: "ref", ref: "paginationItemActiveId", descendants: {"labelId": {content: "1"}}})
> page2=Insert(pagination+"/pageNumbersSlotId", {type: "ref", ref: "paginationItemDefaultId", descendants: {"labelId": {content: "2"}}})
> page3=Insert(pagination+"/pageNumbersSlotId", {type: "ref", ref: "paginationItemDefaultId", descendants: {"labelId": {content: "3"}}})
> ellipsis=Insert(pagination+"/pageNumbersSlotId", {type: "ref", ref: "paginationItemEllipsisId"})
> page10=Insert(pagination+"/pageNumbersSlotId", {type: "ref", ref: "paginationItemDefaultId", descendants: {"labelId": {content: "10"}}})
> ```
>
> ---
>
> ## 10. Screen Layout Patterns
>
> These patterns show the structure for common layouts. Each pattern is typically one batch_design call. Since `batch_design` input is JavaScript, use arrays, loops, object spreads, helper objects, and template strings to generate repeated design nodes without hand-writing every operation. Do not include comments in generated `batch_design` JavaScript.
>
> ### Pattern A: Sidebar + Content (Dashboard)
>
> ```
> ┌──────────┬────────────────────────────────┐
> │          │                                │
> │ Sidebar  │     Main Content Area          │
> │  280px   │      fill_container            │
> │          │                                │
> └──────────┴────────────────────────────────┘
> ```
>
> ```javascript
> screen=Insert(document, {type: "frame", name: "Dashboard", layout: "horizontal", width: 1440, height: "fit_content(900)", fill: "$--background", placeholder: true})
> sidebar=Insert(screen, {type: "ref", ref: "sidebarId", height: "fill_container"})
> main=Insert(screen, {type: "frame", layout: "vertical", width: "fill_container", height: "fill_container(900)", padding: 32, gap: 24})
> ```
>
> ### Pattern B: Header + Content
>
> ```
> ┌────────────────────────────────────────────┐
> │              Header Bar (64px)             │
> ├────────────────────────────────────────────┤
> │                                            │
> │            Content Area                    │
> │                                            │
> └────────────────────────────────────────────┘
> ```
>
> Fixed header and scrollable content:
>
> ```javascript
> screen=Insert(document, {type: "frame", layout: "vertical", width: 1200, height: "fit_content(800)", fill: "$--background", placeholder: true})
> header=Insert(screen, {type: "frame", layout: "horizontal", width: "fill_container", height: 64, padding: [0, 24], alignItems: "center", justifyContent: "space_between", strokeAlignment: "inner", stroke: "$--border", strokeWidth: {bottom: 1}})
> content=Insert(screen, {type: "frame", layout: "vertical", width: "fill_container", height: "fit_content(736)", padding: 32, gap: 24})
> ```
>
> ### Pattern C: Two-Column Layout
>
> ```
> ┌─────────────────────┬─────────────┐
> │                     │             │
> │    Main (2/3)       │  Side (1/3) │
> │   fill_container    │   360px     │
> │                     │             │
> └─────────────────────┴─────────────┘
> ```
>
> Main column (flexible) and side column (fixed):
>
> ```javascript
> columns=Insert(content, {type: "frame", layout: "horizontal", width: "fill_container", height: "fill_container(900)", gap: 24})
> mainCol=Insert(columns, {type: "frame", layout: "vertical", width: "fill_container", height: "fit_content(900)", gap: 24})
> sideCol=Insert(columns, {type: "frame", layout: "vertical", width: 360, height: "fit_content(900)", gap: 24})
> ```
>
> ### Pattern D: Card Grid
>
> ```
> ┌──────────┐ ┌──────────┐ ┌──────────┐
> │  Card 1  │ │  Card 2  │ │  Card 3  │
> └──────────┘ └──────────┘ └──────────┘
> ```
>
> ```javascript
> cardGrid=Insert(container, {type: "frame", layout: "horizontal", width: "fill_container", gap: 16})
> for (const label of ["Overview", "Activity", "Revenue"]) {
>   card=Insert(cardGrid, {type: "ref", ref: "cardId", width: "fill_container"})
>   Update(card+"/titleId", {content: label})
> }
> ```
>
> ---
>
> ## 11. Common Compositions
>
> These snippets combine with screen layout patterns, or work as standalone batch_design calls after the initial structure is created. Prefer compact JavaScript generation when a composition has repeated items.
>
> ### Page Header with Breadcrumbs + Actions
>
> Breadcrumbs on the left, action buttons on the right:
>
> ```javascript
> pageHeader=Insert(main, {type: "frame", layout: "horizontal", width: "fill_container", justifyContent: "space_between", alignItems: "center"})
> breadcrumbs=Insert(pageHeader, {type: "frame", layout: "horizontal", gap: 0, alignItems: "center"})
> const crumbs = ["Dashboard", "Users"];
> for (const [index, label] of crumbs.entries()) {
>   if (index > 0) Insert(breadcrumbs, {type: "ref", ref: "breadcrumbSeparatorId"})
>   Insert(breadcrumbs, {type: "ref", ref: index === crumbs.length - 1 ? "breadcrumbItemActiveId" : "breadcrumbItemId", descendants: {"labelId": {content: label}}})
> }
> actions=Insert(pageHeader, {type: "frame", layout: "horizontal", gap: 12})
> for (const [ref, label] of [["buttonOutlineId", "Export"], ["buttonPrimaryId", "Add User"]]) {
>   Insert(actions, {type: "ref", ref, descendants: {"iconId": {enabled: false}, "labelId": {content: label}}})
> }
> ```
>
> ### Form Layout
>
> Two fields in a row, then full-width fields:
>
> ```javascript
> card=Insert(container, {type: "ref", ref: "cardId", width: "fill_container"})
> form=Insert(card+"/contentSlotId", {type: "frame", layout: "vertical", gap: 16, width: "fill_container"})
> row=Insert(form, {type: "frame", layout: "horizontal", gap: 16, width: "fill_container"})
> for (const label of ["First Name", "Last Name"]) {
>   Insert(row, {type: "ref", ref: "inputGroupId", width: "fill_container", descendants: {"labelId": {content: label}}})
> }
> for (const field of [
>   {ref: "inputGroupId", label: "Email"},
>   {ref: "textareaGroupId", label: "Message"}
> ]) {
>   Insert(form, {type: "ref", ref: field.ref, width: "fill_container", descendants: {"labelId": {content: field.label}}})
> }
> ```
>
> ### Metric Cards
>
> Replace header with custom metric content, disable unused slots:
>
> ```javascript
> metrics=Insert(content, {type: "frame", layout: "horizontal", gap: 16, width: "fill_container"})
> const textBase = {type: "text", fontFamily: "$--font-primary"};
> for (const metric of [
>   {label: "Total Users", value: "12,543"},
>   {label: "Revenue", value: "$48.2K"},
>   {label: "Conversion", value: "7.4%"}
> ]) {
>   metricCard=Insert(metrics, {type: "ref", ref: "cardId", width: "fill_container"})
>   header=Replace(metricCard+"/headerSlotId", {type: "frame", layout: "vertical", gap: 4, padding: 24, width: "fill_container"})
>   Insert(header, {...textBase, content: metric.label, fill: "$--muted-foreground", fontSize: 14})
>   Insert(header, {...textBase, content: metric.value, fill: "$--foreground", fontSize: 32, fontWeight: "600"})
>   Update(metricCard+"/contentSlotId", {enabled: false})
>   Update(metricCard+"/actionsSlotId", {enabled: false})
> }
> ```
>
> ---
>
> ## 12. Spacing Reference
>
> Common spacing values as a starting point:
>
> | Context | Gap | Padding |
> |---------|-----|---------|
> | Screen sections | 24-32 | — |
> | Card grid | 16-24 | — |
> | Form fields (vertical) | 16 | — |
> | Form row (horizontal) | 16 | — |
> | Button groups | 12 | — |
> | Inside cards | — | 24 |
> | Inside buttons | — | [10, 16] |
> | Inside inputs | — | [8, 16] |
> | Page content area | — | 32 |
> | Sidebar items | 0 | [12, 16] |
>
> ---
>
> ## 13. Button Hierarchy
>
> A good rule of thumb: one primary action per section helps users focus. Rough priority order:
>
> | Priority | Variant | Often used for |
> |----------|---------|---------|
> | 1 | Primary/Default | Main action (Save, Submit, Create) |
> | 2 | Secondary | Alternative actions |
> | 3 | Outline | Tertiary, Cancel, Back |
> | 4 | Ghost | Inline actions, navigation |
> | 5 | Destructive | Delete, Remove |
>
> ### Button Actions Alignment
>
> Common conventions:
> - **Cards/Modals:** Right-align actions (`justifyContent: "end"`)
> - **Forms:** Right-align submit buttons
> - **Toolbars:** Left-align primary, right-align secondary
> - **Destructive + Cancel:** Cancel on left, Destructive on right
>
> ---
>
> ## 14. Design Tokens
>
> Using design token variables helps keep things consistent:
>
> ### Colors
> | Token | Usage |
> |-------|-------|
> | `$--background` | Page background |
> | `$--foreground` | Primary text |
> | `$--muted-foreground` | Secondary text, placeholders |
> | `$--card` | Card backgrounds |
> | `$--border` | Borders, dividers |
> | `$--primary` | Primary actions, brand |
> | `$--secondary` | Secondary elements |
> | `$--destructive` | Danger actions |
>
> ### Semantic Colors
> | State | Background | Foreground |
> |-------|------------|------------|
> | Success | `$--color-success` | `$--color-success-foreground` |
> | Warning | `$--color-warning` | `$--color-warning-foreground` |
> | Error | `$--color-error` | `$--color-error-foreground` |
> | Info | `$--color-info` | `$--color-info-foreground` |
>
> ### Typography
> | Token | Usage |
> |-------|-------|
> | `$--font-primary` | Headings, labels, navigation |
> | `$--font-secondary` | Body text, descriptions, inputs |
>
> ### Border Radius
> | Token | Usage |
> |-------|-------|
> | `$--radius-none` | Tables, sharp containers |
> | `$--radius-m` | Cards, modals |
> | `$--radius-pill` | Buttons, inputs, badges |
>
> ---
>
> ## 15. Design Principles
>
> These principles help ensure designs are grounded, consistent, and maintainable.
>
> ### Visual Hierarchy
> - One clear focal point per section
> - Use size, weight, and color to establish importance
> - Primary actions should be visually dominant
>
> ### Alignment & Grid
> - Align elements to an implicit grid
> - Use consistent edge alignment within containers
> - Avoid orphaned or floating elements
>
> ### Spacing Consistency
> - Always use existing gap/padding values from the design system
> - Don't mix arbitrary spacing values - pick from the established scale
> - Maintain consistent vertical rhythm between sections
>
> ### Color Usage
> - Always use `$--variable` tokens, never hardcode hex/rgb values
> - Ensure sufficient contrast for text readability
> - Use semantic colors for their intended purpose (error for errors, etc.)
>
> ### Content Density
> - Don't overcrowd - leave breathing room
> - Cards should contain one primary idea
> - Tables should have reasonable column counts (typically 4-7)
>
> ### Grounding Rules
> - Get component list via `get_editor_state` and then only get specific components you need via `batch_get`
> - Verify with `get_screenshot` after major design operations
> - Use existing components before creating custom frames
> ````
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "I94Kf"
> }
> ```
>
> ```text
> Screenshot generated for node: I94Kf
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "u2oh4H"
> }
> ```
>
> ```text
> Screenshot generated for node: u2oh4H
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "zwZnb"
> }
> ```
>
> ```text
> Screenshot generated for node: zwZnb
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "B1hNRM"
> }
> ```
>
> ```text
> Screenshot generated for node: B1hNRM
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "w48oV"
> }
> ```
>
> ```text
> Screenshot generated for node: w48oV
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "JByYQ"
> }
> ```
>
> ```text
> Screenshot generated for node: JByYQ
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "O8sAyn"
> }
> ```
>
> ```text
> Screenshot generated for node: O8sAyn
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "S1lRh1"
> }
> ```
>
> ```text
> Screenshot generated for node: S1lRh1
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "S68zZ"
> }
> ```
>
> ```text
> Screenshot generated for node: S68zZ
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "VkQpT"
> }
> ```
>
> ```text
> Screenshot generated for node: VkQpT
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "twv9F"
> }
> ```
>
> ```text
> Screenshot generated for node: twv9F
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "mA5La"
> }
> ```
>
> ```text
> Screenshot generated for node: mA5La
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "bPgqn"
> }
> ```
>
> ```text
> Screenshot generated for node: bPgqn
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "TBiql"
> }
> ```
>
> ```text
> Screenshot generated for node: TBiql
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "dSjDc"
> }
> ```
>
> ```text
> Screenshot generated for node: dSjDc
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "cNzKe"
> }
> ```
>
> ```text
> Screenshot generated for node: cNzKe
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "d9cED"
> }
> ```
>
> ```text
> Screenshot generated for node: d9cED
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.snapshot_layout
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "parentId": "hl9HZ",
>   "maxDepth": 6,
>   "problemsOnly": true
> }
> ```
>
> ```text
> {"children":[{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"lhqAJ/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":40,"id":"lhqAJ","problems":"fully clipped","width":124,"x":840,"y":544}],"height":156,"id":"LMMoY","width":358,"x":32,"y":258},{"children":[{"children":[{"children":[{"children":[{"children":"...","height":4,"id":"u56Xi/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":36,"id":"u56Xi","width":80,"x":0,"y":0}],"height":36,"id":"TyPrI","width":120,"x":214,"y":13}],"height":62,"id":"Yaheu","width":334,"x":12,"y":12}],"height":86,"id":"pnQBG","width":358,"x":32,"y":446}],"height":671,"id":"qyynU","width":422,"x":0,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"foK5h/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"foK5h","width":326,"x":16,"y":194}],"height":258,"id":"kO0ud","width":358,"x":16,"y":128}],"height":474,"id":"fvp1U","width":390,"x":0,"y":64}],"height":626,"id":"cMzk2","width":390,"x":542,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":48,"id":"pfN5E/A5vNne","problems":"partially clipped","width":48,"x":274,"y":0}],"height":24,"id":"pfN5E/Y8tcuq","width":338,"x":16,"y":4},{"children":[{"children":[{"children":"...","height":4,"id":"pfN5E/qyuNg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"pfN5E/qyuNg","width":70,"x":0,"y":0},{"children":[{"children":"...","height":4,"id":"pfN5E/Myx8L/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"pfN5E/Myx8L","width":78,"x":78,"y":0}],"height":44,"id":"pfN5E/LvumN","width":156,"x":0,"y":0}],"height":105,"id":"pfN5E","width":358,"x":16,"y":548}],"height":693,"id":"YSP94","width":390,"x":0,"y":64}],"height":757,"id":"O8sAyn","width":390,"x":1562,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"CfF6n/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"CfF6n","width":358,"x":0,"y":0},{"children":[{"children":[],"height":4,"id":"E0EWM5/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"E0EWM5","width":358,"x":0,"y":56}],"height":104,"id":"z7AcD","width":358,"x":16,"y":317}],"height":461,"id":"IT0DW","width":390,"x":0,"y":64}],"height":525,"id":"S1lRh1","width":390,"x":2072,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"X7B12s/lhqAJ/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":40,"id":"X7B12s/lhqAJ","problems":"fully clipped","width":124,"x":840,"y":544}],"height":206,"id":"X7B12s","width":358,"x":16,"y":159},{"children":[{"children":[],"height":4,"id":"p2Vb56/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"p2Vb56","width":358,"x":16,"y":437}],"height":525,"id":"E1wzl7","width":390,"x":0,"y":64}],"height":589,"id":"S68zZ","width":390,"x":2582,"y":0},{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"ZY9LJ/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"ZY9LJ","width":358,"x":16,"y":389}],"height":513,"id":"WXtUt","width":390,"x":0,"y":64}],"height":577,"id":"VkQpT","width":390,"x":3092,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":36,"id":"RqxFI/TyPrI","problems":"partially clipped","width":120,"x":214,"y":13}],"height":42,"id":"RqxFI/Yaheu","width":334,"x":12,"y":12}],"height":112,"id":"RqxFI","width":358,"x":16,"y":105},{"children":[{"children":[],"height":4,"id":"vfB8F/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"vfB8F","width":358,"x":16,"y":269}],"height":357,"id":"fMKY4","width":390,"x":0,"y":64}],"height":421,"id":"twv9F","width":390,"x":3602,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":48,"id":"AsxCT/A5vNne","problems":"partially clipped","width":48,"x":274,"y":0}],"height":24,"id":"AsxCT/Y8tcuq","width":338,"x":16,"y":4},{"children":[{"children":[{"children":"...","height":4,"id":"AsxCT/qyuNg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"AsxCT/qyuNg","width":70,"x":0,"y":0},{"children":[{"children":"...","height":4,"id":"AsxCT/Myx8L/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"AsxCT/Myx8L","width":78,"x":78,"y":0}],"height":44,"id":"AsxCT/LvumN","width":156,"x":0,"y":0}],"height":105,"id":"AsxCT","width":358,"x":16,"y":105},{"children":[{"children":[{"children":[],"height":4,"id":"w7phC/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"w7phC","width":358,"x":0,"y":0},{"children":[{"children":[],"height":4,"id":"c7FO7p/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"c7FO7p","width":358,"x":0,"y":56}],"height":104,"id":"O5NYp","width":358,"x":16,"y":456}],"height":600,"id":"lUJCe","width":390,"x":0,"y":64}],"height":664,"id":"mA5La","width":390,"x":4112,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":48,"id":"QCAe0/A5vNne","problems":"partially clipped","width":48,"x":274,"y":0}],"height":24,"id":"QCAe0/Y8tcuq","width":338,"x":16,"y":4},{"children":[{"children":[{"children":"...","height":4,"id":"QCAe0/qyuNg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"QCAe0/qyuNg","width":70,"x":0,"y":0},{"children":[{"children":"...","height":4,"id":"QCAe0/Myx8L/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"QCAe0/Myx8L","width":78,"x":78,"y":0}],"height":44,"id":"QCAe0/LvumN","width":156,"x":0,"y":0}],"height":105,"id":"QCAe0","width":358,"x":16,"y":595},{"children":[{"children":[],"height":4,"id":"mdqDh/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"mdqDh","width":358,"x":16,"y":716}],"height":804,"id":"NpboK","width":390,"x":0,"y":64}],"height":868,"id":"jvr2D","width":390,"x":4622,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"nPuEL/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"nPuEL/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"nPuEL/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"nPuEL/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"nPuEL/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"nPuEL/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"nPuEL","width":1440,"x":0,"y":0},{"children":[{"children":[{"children":[{"children":[],"height":48,"id":"zsPBb/A5vNne","problems":"partially clipped","width":48,"x":274,"y":0}],"height":24,"id":"zsPBb/Y8tcuq","width":1180,"x":16,"y":4},{"children":[{"children":[{"children":"...","height":4,"id":"zsPBb/qyuNg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"zsPBb/qyuNg","width":70,"x":0,"y":0},{"children":[{"children":"...","height":4,"id":"zsPBb/Myx8L/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"zsPBb/Myx8L","width":78,"x":78,"y":0}],"height":44,"id":"zsPBb/LvumN","width":156,"x":0,"y":0}],"height":68,"id":"zsPBb","width":1200,"x":120,"y":564}],"height":696,"id":"qAOta","width":1440,"x":0,"y":80}],"height":776,"id":"bPgqn","width":1440,"x":5132,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"h9xuK/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"h9xuK/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"h9xuK/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"h9xuK/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"h9xuK/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"h9xuK/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"h9xuK","width":1440,"x":0,"y":0},{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"Zr6M5/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"Zr6M5","width":176,"x":24,"y":194}],"height":266,"id":"U7UQGn","width":720,"x":120,"y":144}],"height":518,"id":"UAwUB","width":1440,"x":0,"y":80}],"height":598,"id":"ELYM6","width":1440,"x":6692,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"N8y0ha/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"N8y0ha/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"N8y0ha/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"N8y0ha/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"N8y0ha/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"N8y0ha/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"N8y0ha","width":1440,"x":0,"y":0}],"height":512,"id":"ElLoj","width":1440,"x":8252,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"rccUT/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"rccUT/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"rccUT/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"rccUT/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"rccUT/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"rccUT/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"rccUT","width":1440,"x":0,"y":0}],"height":678,"id":"TBiql","width":1440,"x":9812,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"zbGjf/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"zbGjf/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"zbGjf/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"zbGjf/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"zbGjf/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"zbGjf/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"zbGjf","width":1440,"x":0,"y":0}],"height":777,"id":"dSjDc","width":1440,"x":11372,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"n2ZYvG/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"n2ZYvG/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"n2ZYvG/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"n2ZYvG/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"n2ZYvG/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"n2ZYvG/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"n2ZYvG","width":1440,"x":0,"y":0}],"height":706,"id":"tZ57p","width":1440,"x":12932,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"t4FdG/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"t4FdG/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"t4FdG/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"t4FdG/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"t4FdG/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"t4FdG/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"t4FdG","width":1440,"x":0,"y":0}],"height":678,"id":"cNzKe","width":1440,"x":14492,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"kD6RB/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"kD6RB/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"kD6RB/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"kD6RB/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"kD6RB/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"kD6RB/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"kD6RB","width":1440,"x":0,"y":0}],"height":738,"id":"d9cED","width":1440,"x":16052,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"Vy6Pj/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"Vy6Pj/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"Vy6Pj/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"Vy6Pj/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"Vy6Pj/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"Vy6Pj/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"Vy6Pj","width":1440,"x":0,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"l45uv/A5vNne","problems":"partially clipped","width":48,"x":274,"y":0}],"height":24,"id":"l45uv/Y8tcuq","width":700,"x":16,"y":4}],"height":88,"id":"l45uv","width":720,"x":0,"y":516},{"children":[{"children":[],"height":4,"id":"rI3Dk/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"rI3Dk","width":226,"x":247,"y":620}],"height":668,"id":"GLPHO","width":720,"x":360,"y":48}],"height":780,"id":"IacrB","width":1440,"x":0,"y":80}],"height":860,"id":"UnIG6","width":1440,"x":17612,"y":0}],"height":868,"id":"hl9HZ","width":19052,"x":0,"y":42905}
> ```
>
> MCP tool call
>
> pencil.snapshot_layout
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "parentId": "C7ypH",
>   "maxDepth": 6,
>   "problemsOnly": true
> }
> ```
>
> ```text
> {"children":[{"children":[{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"gkLZX/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"gkLZX","width":80,"x":0,"y":0},{"children":[{"children":[],"height":4,"id":"JZJIe/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"JZJIe","width":80,"x":84,"y":0}],"height":32,"id":"JMyrJ","width":164,"x":580,"y":17}],"height":66,"id":"p3DcE","width":760,"x":40,"y":448},{"children":[{"children":[{"children":[],"height":4,"id":"D76Wa/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"D76Wa","width":312,"x":24,"y":438}],"height":564,"id":"q50qn","width":360,"x":40,"y":910}],"height":1514,"id":"VXpI0","width":888,"x":0,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"V8em2/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"V8em2/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"V8em2/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"V8em2/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"V8em2/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"V8em2/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"V8em2","width":1440,"x":0,"y":0}],"height":1484,"id":"I94Kf","width":1440,"x":1008,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":48,"id":"WAQNk/GdUna","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"WAQNk/TVbJB","problems":"fully clipped","width":82,"x":1465,"y":1569},{"children":"...","height":48,"id":"WAQNk/NNoXr","problems":"fully clipped","width":82,"x":1465,"y":1569}],"height":80,"id":"WAQNk/nte5F","width":289,"x":185,"y":0}],"height":80,"id":"WAQNk/zXeYu","width":474,"x":32,"y":0}],"height":80,"id":"WAQNk/H0KkIm","width":1440,"x":0,"y":0}],"height":80,"id":"WAQNk","width":1440,"x":0,"y":0}],"height":1558,"id":"u2oh4H","width":1440,"x":2568,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"jfZ8H/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"jfZ8H/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"jfZ8H/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"IFqjv/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"IFqjv","width":326,"x":0,"y":0}],"height":48,"id":"jfZ8H/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"jfZ8H","width":358,"x":16,"y":178},{"children":[{"children":[{"children":[{"children":"...","height":4,"id":"C915C/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"C915C","width":326,"x":0,"y":0}],"height":48,"id":"AagYe/lygAh","width":326,"x":16,"y":134}],"height":198,"id":"AagYe","width":358,"x":16,"y":372},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"S8xTUu/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"S8xTUu/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"S8xTUu/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"H9Ozg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"H9Ozg","width":326,"x":0,"y":0}],"height":48,"id":"S8xTUu/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"S8xTUu","width":358,"x":16,"y":586},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"goY7T/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"goY7T/w0PcO","width":214,"x":0,"y":0}],"height":28,"id":"goY7T/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"On0zz/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"On0zz","width":326,"x":0,"y":0}],"height":48,"id":"goY7T/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"goY7T","width":358,"x":16,"y":780},{"children":[{"children":[{"children":[],"height":4,"id":"e1iUlv/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"e1iUlv","width":326,"x":16,"y":86}],"height":179,"id":"q3w6SL","width":358,"x":16,"y":974}],"height":1185,"id":"zhk2o","width":390,"x":0,"y":64}],"height":1337,"id":"zwZnb","width":390,"x":5688,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[],"height":4,"id":"v4XU7T/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"v4XU7T","width":326,"x":16,"y":272}],"height":336,"id":"xpuV0","width":358,"x":16,"y":90}],"height":458,"id":"kQq3f","width":390,"x":0,"y":64}],"height":610,"id":"fj673","width":390,"x":6198,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"H48Zgb/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"H48Zgb/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"H48Zgb/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"p3wiHm/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"p3wiHm","width":326,"x":0,"y":0}],"height":48,"id":"H48Zgb/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"H48Zgb","width":358,"x":16,"y":178},{"children":[{"children":[{"children":[{"children":"...","height":4,"id":"HHqC5/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"HHqC5","width":326,"x":0,"y":0}],"height":48,"id":"JL8Fe/lygAh","width":326,"x":16,"y":134}],"height":198,"id":"JL8Fe","width":358,"x":16,"y":372},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"WIUWK/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"WIUWK/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"WIUWK/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"Rdsfg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"Rdsfg","width":326,"x":0,"y":0}],"height":48,"id":"WIUWK/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"WIUWK","width":358,"x":16,"y":586},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"JO3dg/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"JO3dg/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"JO3dg/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"cc2b2/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"cc2b2","width":326,"x":0,"y":0}],"height":48,"id":"JO3dg/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"JO3dg","width":358,"x":16,"y":780},{"children":[{"children":[{"children":[],"height":4,"id":"fN8Uv/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"fN8Uv","width":326,"x":16,"y":86}],"height":179,"id":"LVwu9","width":358,"x":16,"y":974}],"height":1185,"id":"PJ9ac","width":390,"x":0,"y":64}],"height":1249,"id":"I41wWk","width":390,"x":7218,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":4,"id":"Nbvvn/qyuNg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"Nbvvn/qyuNg","width":70,"x":0,"y":0},{"children":[{"children":"...","height":4,"id":"Nbvvn/Myx8L/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"Nbvvn/Myx8L","width":78,"x":78,"y":0}],"height":44,"id":"Nbvvn/LvumN","width":156,"x":0,"y":0}],"height":110,"id":"Nbvvn","width":358,"x":16,"y":178},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"Xj0sg/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"Xj0sg/w0PcO","width":182,"x":0,"y":0}],"height":28,"id":"Xj0sg/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"LxqkG/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"LxqkG","width":326,"x":0,"y":206}],"height":254,"id":"Xj0sg/lygAh","width":326,"x":16,"y":114}],"height":384,"id":"Xj0sg","width":358,"x":16,"y":876},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"V1ly4E/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"V1ly4E/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"V1ly4E/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"gnYKV/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"gnYKV","width":326,"x":0,"y":0}],"height":48,"id":"V1ly4E/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"V1ly4E","width":358,"x":16,"y":1276},{"children":[{"children":[{"children":[],"height":4,"id":"X7wtny/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"X7wtny","width":326,"x":16,"y":16}],"height":109,"id":"Iuxxf","width":358,"x":16,"y":1470}],"height":1611,"id":"ZBjwt","width":390,"x":0,"y":64}],"height":1675,"id":"B1hNRM","width":390,"x":7728,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"SSjJr/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"SSjJr/w0PcO","width":161,"x":0,"y":0}],"height":28,"id":"SSjJr/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"IH75C/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"IH75C","width":326,"x":0,"y":168}],"height":216,"id":"SSjJr/lygAh","width":326,"x":16,"y":114}],"height":346,"id":"SSjJr","width":358,"x":16,"y":178},{"children":[{"children":[{"children":[{"children":"...","height":4,"id":"oV6EP/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"oV6EP","width":326,"x":0,"y":0}],"height":48,"id":"IV0Ae/lygAh","width":326,"x":16,"y":134}],"height":198,"id":"IV0Ae","width":358,"x":16,"y":540},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"hUBoy/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"hUBoy/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"hUBoy/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"wNAXa/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"wNAXa","width":326,"x":0,"y":0}],"height":48,"id":"hUBoy/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"hUBoy","width":358,"x":16,"y":754},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"I4JiTj/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"I4JiTj/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"I4JiTj/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"pqyCx/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"pqyCx","width":326,"x":0,"y":0}],"height":48,"id":"I4JiTj/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"I4JiTj","width":358,"x":16,"y":948},{"children":[{"children":[{"children":[],"height":4,"id":"RS5Yp/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"RS5Yp","width":326,"x":16,"y":86}],"height":179,"id":"MvTku","width":358,"x":16,"y":1142}],"height":1353,"id":"R2wAUN","width":390,"x":0,"y":64}],"height":1417,"id":"w48oV","width":390,"x":8238,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"d9jaP/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"d9jaP/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"d9jaP/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"ZNjRL/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"ZNjRL","width":326,"x":0,"y":0}],"height":48,"id":"d9jaP/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"d9jaP","width":358,"x":16,"y":178},{"children":[{"children":[{"children":[{"children":"...","height":4,"id":"mDpJW/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"mDpJW","width":326,"x":0,"y":0}],"height":48,"id":"Qywlj/lygAh","width":326,"x":16,"y":134}],"height":198,"id":"Qywlj","width":358,"x":16,"y":372},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"xowHi/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"xowHi/w0PcO","width":187,"x":0,"y":0}],"height":28,"id":"xowHi/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"HxY5z/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"HxY5z","width":326,"x":0,"y":0}],"height":48,"id":"xowHi/lygAh","width":326,"x":16,"y":114}],"height":178,"id":"xowHi","width":358,"x":16,"y":586},{"children":[{"children":[{"children":[{"children":"...","height":40,"id":"eGL19/alTwg","problems":"partially clipped","width":40,"x":0,"y":0}],"height":24,"id":"eGL19/w0PcO","width":161,"x":0,"y":0}],"height":28,"id":"eGL19/Q8tE7c","width":326,"x":16,"y":16},{"children":[{"children":[{"children":"...","height":4,"id":"kq2ND/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"kq2ND","width":326,"x":0,"y":298}],"height":346,"id":"eGL19/lygAh","width":326,"x":16,"y":114}],"height":476,"id":"eGL19","width":358,"x":16,"y":780},{"children":[{"children":[{"children":[],"height":4,"id":"OmPHK/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"OmPHK","width":326,"x":16,"y":86}],"height":179,"id":"wuPYo","width":358,"x":16,"y":1272}],"height":1483,"id":"SoLfT","width":390,"x":0,"y":64}],"height":1547,"id":"JByYQ","width":390,"x":8748,"y":0},{"children":[{"children":[{"children":[{"children":[{"children":[{"children":"...","height":4,"id":"IzI4j/qyuNg/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"IzI4j/qyuNg","width":70,"x":0,"y":0},{"children":[{"children":"...","height":4,"id":"IzI4j/Myx8L/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":32,"id":"IzI4j/Myx8L","width":78,"x":78,"y":0}],"height":44,"id":"IzI4j/LvumN","width":156,"x":0,"y":0}],"height":129,"id":"IzI4j","width":358,"x":16,"y":541},{"children":[{"children":[],"height":4,"id":"GOgeH/P0AFdL","problems":"fully clipped","width":24,"x":1000,"y":562}],"height":48,"id":"GOgeH","width":358,"x":16,"y":686}],"height":766,"id":"yeA4X","width":390,"x":0,"y":64}],"height":830,"id":"E8l8nb","width":390,"x":9258,"y":0}],"height":1920,"id":"C7ypH","width":9648,"x":0,"y":40653}
> ```
>
> MCP tool call
>
> pencil.batch_get
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeIds": [
>     "VXpI0",
>     "qyynU"
>   ],
>   "readDepth": 3,
>   "resolveInstances": false,
>   "resolveVariables": false
> }
> ```
>
> ```text
> [{"children":[{"content":"Direction A — Components","id":"L14UbI","name":"Components Title","ref":"J1tfP5","type":"ref"},{"content":"DROP ZONE","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"z5qArl","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Drop Zone","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":24,"icon":"upload","id":"y8X77J","library":"lucide","name":"Upload Icon","type":"icon","weight":"$stroke-default","width":24}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-info","height":48,"id":"KdY4r","justifyContent":"center","name":"Upload Icon Circle","type":"frame","width":48},{"alignItems":"center","children":[{"content":"Drag and drop your file here, or","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"HksuX","lineHeight":1.25,"name":"Drag Text","type":"text"},{"content":"browse files","fill":"$color-body-info","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"500","id":"ZZQNu","lineHeight":1.25,"name":"Browse Link","type":"text"}],"gap":4,"id":"N77Psq","name":"Instruction Row","type":"frame"},{"content":"PDF, JPG, or PNG · 10 MB max","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"yVmVU","lineHeight":1.4286,"name":"File Hint","type":"text"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"kwrZm","justifyContent":"center","layout":"vertical","name":"Drop Zone","padding":[28,24],"reusable":true,"stroke":"$color-line-moderate","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":760},{"content":"UPLOAD PROGRESS BAR","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"cEqyF","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Upload Progress Bar","type":"text"},{"children":[{"cornerRadius":"$shape-radius-full","fill":"$color-primary","height":8,"id":"dFKdN","name":"Bar Fill","type":"rectangle","width":96,"x":0,"y":0}],"clip":true,"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":8,"id":"L4EBjh","layout":"none","name":"Upload Progress Bar","reusable":true,"type":"frame","width":240},{"content":"RAIL DOC ITEM","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"QiHZK","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Rail Doc Item","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-moderate","height":16,"icon":"circle-dashed","id":"PYIPa","library":"lucide","name":"State Icon","type":"icon","weight":"$stroke-default","width":16},{"content":"Proof of income","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"gv6o1","lineHeight":1.6,"name":"Doc Name","type":"text"}],"gap":8,"id":"fBKJH","name":"Icon \u0026 Name","type":"frame"},{"content":"Outstanding","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"ctoCw","lineHeight":1.2308,"name":"State Text","type":"text"}],"gap":8,"id":"nIrAd","justifyContent":"space_between","name":"Rail Doc Item","reusable":true,"type":"frame","width":312},{"content":"SELECTED FILE ROW","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"PZuei","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Selected File Row","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":[{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-info","height":40,"id":"OyOE6","justifyContent":"center","name":"File Icon Circle","type":"frame","width":40},{"children":"...","gap":2,"id":"J8Zgb","layout":"vertical","name":"Name \u0026 Meta","type":"frame"}],"gap":12,"id":"NrMCE","name":"File Info","type":"frame"},{"alignItems":"center","children":[{"descendants":{"Z9Bmr":{"content":"Replace","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","gap":"$gap-x-component-small","height":32,"id":"gkLZX","name":"Replace","padding":[0,12],"ref":"Yqvtr","type":"ref"},{"descendants":{"Z9Bmr":{"content":"Remove","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","gap":"$gap-x-component-small","height":32,"id":"JZJIe","name":"Remove","padding":[0,12],"ref":"Yqvtr","type":"ref"}],"gap":4,"id":"JMyrJ","name":"Actions","type":"frame"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-layer-2","gap":16,"id":"p3DcE","justifyContent":"space_between","name":"Selected File Row","padding":[12,16],"reusable":true,"type":"frame","width":760},{"content":"DOCUMENT CHECKLIST CARD","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"Ug2qs","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Document Checklist Card","type":"text"},{"children":[{"alignItems":"center","children":[{"alignItems":"center","children":"...","gap":12,"id":"w0PcO","name":"Title Group","type":"frame"},{"descendants":{"dUGaZ":{"content":"Outstanding","fill":"$color-body-strong"},"qOy2z":{"enabled":true,"fill":"$color-body-strong","icon":"circle-dashed"}},"fill":"$color-surface-layer-2","id":"Ol81g","name":"Status Tag","ref":"vo5O2","type":"ref","width":"fit_content"}],"gap":16,"id":"Q8tE7c","justifyContent":"space_between","name":"Card Header","type":"frame","width":"fill_container"},{"content":"Description of the document we need and which formats work.","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"JYzDE","lineHeight":1.25,"name":"Doc Description","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"children":[{"id":"ScMkx","name":"Drop Zone","ref":"kwrZm","type":"ref","width":"fill_container"}],"gap":12,"id":"lygAh","layout":"vertical","name":"Card Body","slot":["kwrZm","p3DcE"],"type":"frame","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":16,"id":"Wwg0d","layout":"vertical","name":"Document Checklist Card","padding":24,"reusable":true,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":808},{"content":"REQUEST SUMMARY RAIL","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"sSc28","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Request Summary Rail","type":"text"},{"children":[{"children":[{"content":"ACTIVE REQUEST","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"gEGjA","letterSpacing":0.8,"lineHeight":1.4545,"name":"Kicker","type":"text"},{"content":"Personal loan","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-headline-section-size","fontWeight":"700","id":"Dfi07","lineHeight":1.0909,"name":"Request Title","type":"text"},{"content":"Request #4821 · Requested Jul 10, 2026","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"aFBQC","lineHeight":1.4286,"name":"Request Meta","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":4,"id":"r1cRwa","layout":"vertical","name":"Request Context","type":"frame","width":"fill_container"},{"fill":"$color-line-muted","height":1,"id":"fhxgP","name":"Divider 1","type":"rectangle","width":"fill_container"},{"children":[{"alignItems":"center","children":"...","id":"zq31w","justifyContent":"space_between","name":"Progress Labels","type":"frame","width":"fill_container"},{"descendants":{"dFKdN":{"enabled":false}},"id":"Ftrx3","name":"Progress Bar","ref":"L4EBjh","type":"ref","width":"fill_container"}],"gap":8,"id":"A4q6cU","layout":"vertical","name":"Session Progress","type":"frame","width":"fill_container"},{"children":[{"descendants":{"gv6o1":{"content":"Proof of income"}},"id":"S2c8h4","name":"Item — Proof of income","ref":"nIrAd","type":"ref","width":"fill_container"},{"descendants":{"gv6o1":{"content":"Government-issued photo ID"}},"id":"OSslv","name":"Item — Government-issued photo ID","ref":"nIrAd","type":"ref","width":"fill_container"},{"descendants":{"gv6o1":{"content":"Proof of residence"}},"id":"jHX6H","name":"Item — Proof of residence","ref":"nIrAd","type":"ref","width":"fill_container"},{"descendants":{"PYIPa":{"icon":"circle-plus"},"ctoCw":{"content":"Optional"},"gv6o1":{"content":"Other document"}},"id":"EI5rT","name":"Item — Other document","ref":"nIrAd","type":"ref","width":"fill_container"}],"gap":10,"id":"OXZTD","layout":"vertical","name":"Document List","type":"frame","width":"fill_container"},{"fill":"$color-line-muted","height":1,"id":"HxnJY","name":"Divider 2","type":"rectangle","width":"fill_container"},{"children":[{"fill":"$color-body-info","height":16,"icon":"info","id":"D5mxP8","library":"lucide","name":"Note Icon","type":"icon","weight":"$stroke-default","width":16},{"content":"Uploads are processed after you leave this page; this list won't be saved as a receipt.","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"f3aqwv","lineHeight":1.3,"name":"Note Text","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"cornerRadius":"$shape-radius-default","fill":"$color-surface-info","gap":8,"id":"M5aLuu","name":"Session Note","padding":12,"type":"frame","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Submit documents"},"u24Oe":{"enabled":false}},"height":48,"id":"D76Wa","name":"Submit Button","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"You can add, replace, or remove files until you submit.","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"elVGp","lineHeight":1.3,"name":"Fine Print","textAlign":"center","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":20,"id":"q50qn","layout":"vertical","name":"Request Summary Rail","padding":24,"reusable":true,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":360}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-layer-1","gap":16,"id":"VXpI0","layout":"vertical","name":"Direction A — Components","padding":40,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame"},{"children":[{"content":"Direction B — Components","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"500","id":"P10Ave","lineHeight":1.4286,"name":"Components Caption","type":"text"},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":20,"icon":"folder-open","id":"zoqYC","library":"lucide","name":"Request Icon","type":"icon","width":20}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-base","height":40,"id":"l3VMP","justifyContent":"center","name":"Request Icon Wrap","type":"frame","width":40},{"children":[{"content":"Personal loan · Request #4821","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"ltc64","lineHeight":1.3333,"name":"Request Title","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"content":"Requested Jul 10, 2026 · 4 documents","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"Yn30d","lineHeight":1.4286,"name":"Request Meta","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":2,"id":"PaiUw","layout":"vertical","name":"Request Text","type":"frame","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-info","gap":"$gap-x-row","id":"zc9dZ","name":"B / Request Summary","padding":16,"reusable":true,"type":"frame","width":358},{"children":[{"alignItems":"center","children":[{"content":"Document 1 of 4","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"H1yMT","lineHeight":1.6,"name":"Progress Step","type":"text"},{"content":"0 of 4 uploaded","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"KFKfP","lineHeight":1.4286,"name":"Progress Count","type":"text"}],"id":"JVRLV","justifyContent":"space_between","name":"Progress Labels","type":"frame","width":"fill_container"},{"children":[{"cornerRadius":"$shape-radius-full","fill":"$color-primary","height":4,"id":"vfV7X","name":"Seg 1","type":"rectangle","width":"fill_container"},{"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":4,"id":"fMAN4","name":"Seg 2","type":"rectangle","width":"fill_container"},{"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":4,"id":"s88Bq0","name":"Seg 3","type":"rectangle","width":"fill_container"},{"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":4,"id":"VUpAy","name":"Seg 4","type":"rectangle","width":"fill_container"}],"gap":4,"id":"etFM8","name":"Progress Segments","type":"frame","width":"fill_container"}],"gap":"$gap-y-pair","id":"TQeTt","layout":"vertical","name":"B / Progress Header","reusable":true,"type":"frame","width":358},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":24,"icon":"upload","id":"bMUtm","library":"lucide","name":"Zone Icon","type":"icon","width":24}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-info-layer-1","height":48,"id":"eafn2","justifyContent":"center","name":"Zone Icon Wrap","type":"frame","width":48},{"content":"Tap to choose a file","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-default-size","fontWeight":"500","id":"dWwmd","lineHeight":1.4118,"name":"Zone Title","type":"text"},{"content":"PDF, JPG or PNG · up to 10 MB","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"ch5be","lineHeight":1.4286,"name":"Zone Hint","type":"text"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Browse files","fill":"$color-on-secondary"},"u24Oe":{"enabled":false}},"enabled":false,"fill":"$color-secondary","height":40,"id":"lhqAJ","name":"Browse Button","padding":[0,20],"ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref"},{"children":[{"fill":"$color-body-negative","height":16,"icon":"circle-alert","id":"ch71Q","library":"lucide","name":"Zone Error Icon","type":"icon","width":16},{"content":"This file type isn't supported. Choose a PDF, JPG, or PNG under 10 MB.","fill":"$color-body-negative","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"zGS4M","lineHeight":1.4,"name":"Zone Error Text","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"enabled":false,"gap":"$gap-x-pair","id":"ZmvX6","name":"Zone Error","type":"frame","width":"fill_container(326)","x":0,"y":0}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-layer-1","gap":"$gap-y-pair","id":"LMMoY","layout":"vertical","name":"B / Upload Zone","padding":[24,16],"reusable":true,"stroke":"$color-line-default","strokeWidth":"$stroke-default","type":"frame","width":358},{"children":[{"alignItems":"center","children":[{"alignItems":"center","children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-info-layer-1","height":40,"id":"qKPpy","justifyContent":"center","name":"File Icon Wrap","type":"frame","width":40},{"children":"...","gap":2,"id":"R5VzQ","layout":"vertical","name":"File Text","type":"frame","width":"fill_container"},{"alignItems":"center","children":"...","gap":4,"id":"TyPrI","name":"File Actions","type":"frame"}],"gap":12,"id":"Yaheu","name":"File Main","type":"frame","width":"fill_container"},{"children":[{"content":"Uploading… 60%","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"FMBpw","lineHeight":1.6,"name":"File Progress Status","type":"text"},{"children":"...","cornerRadius":"$shape-radius-full","fill":"$color-surface-layer-2","height":6,"id":"qADQY","name":"File Progress Track","type":"frame","width":"fill_container"}],"enabled":false,"gap":4,"id":"q4j0v","layout":"vertical","name":"File Progress","padding":[0,0,4,0],"type":"frame","width":"fill_container(334)","x":0,"y":0}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":"$gap-y-pair","id":"pnQBG","layout":"vertical","name":"B / File Row","padding":12,"reusable":true,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":358},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-strong","height":20,"icon":"file-text","id":"crgVM","library":"lucide","name":"Doc State Icon","type":"icon","width":20}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-layer-2","height":40,"id":"Lq4jA","justifyContent":"center","name":"Doc State Icon Wrap","type":"frame","width":40},{"children":[{"content":"Document name","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"gcAFV","lineHeight":1.4,"name":"Doc Name","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"content":"Not started","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"kEfRh","lineHeight":1.4286,"name":"Doc Status","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":2,"id":"N7F0N","layout":"vertical","name":"Doc Text","type":"frame","width":"fill_container"},{"fill":"$color-body-emphasis","height":24,"icon":"chevron-right","id":"qdwvw","library":"lucide","name":"Doc Chevron","type":"icon","width":24}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":"$gap-x-row","id":"NmACi","name":"B / Document Item","padding":16,"reusable":true,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":358}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":32,"id":"qyynU","layout":"vertical","name":"Direction B — Components","padding":32,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame"}]
> ```
>
> </details>
>
> The comparison shows a deliberate product split:
>
> - Direction A is a checklist hub that stages several files in one place and culminates in a single “Submit documents” action.
> - Direction B is a guided, document-by-document flow where each file is uploaded immediately, then the user returns to the overview.
> - Direction B already has near-complete mobile/desktop state parity. Direction A has strong component coverage but only partial flow parity—especially on desktop—and needs coherent staged, submitting, retry, and entry screens rather than relying mainly on one mixed-state board.
> - The canvas currently hard-codes `PDF/JPG/PNG · 10 MB`, even though the PRD explicitly leaves those limits undecided.
>
> I need to lock three choices that materially change the implementation plan.
>
> User input response
>
> - What should “build both directions” deliver in this phase?
>   - I meant build in code the directions that have been defined in pencil
> - Should the two concepts keep their distinct submission models?
>   - Keep distinct (Recommended)
> - How much mobile and desktop coverage should each direction have?
>   - Full parity (Recommended)
>
> That changes the target: the Pencil nodes are the design source, but the deliverable is two coded, responsive prototype directions. I’m now using the frontend application builder guidance to choose a minimal implementation architecture and the Pencil “Code” guide to define how component instances, tokens, and responsive layouts translate into code. No code will be written while Plan Mode is active.
>
> <details><summary>Ran a command, called a tool</summary>
>
> <details><summary>Explored 2 files</summary>
>
> - Read `~/.codex/plugins/cache/openai-curated-remote/build-web-apps/0.1.2/skills/frontend-app-builder/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/build-web-apps/0.1.2/skills/react-best-practices/SKILL.md`
>
> </details>
>
> - Ran `find . -maxdepth 3 -type f \( -name 'package.json' -o -name 'vite.config.*' -o -name 'next.config.*' -o -name 'tsconfig*.json' -o -name 'pnpm-lock.yaml' -o -name 'package-lock.json' -o -name 'yarn.lock' -o -name 'bun.lock*' -o -name 'README.md' \) -not -path './.git/*' -print | sort && git ls-files | sed -n '1,160p' && git status --short`
>
> MCP tool call
>
> pencil.get_guidelines
>
> ```json
> {
>   "category": "guide",
>   "name": "Code"
> }
> ```
>
> ```text
> # Instructions when generating code from .pen files
>
> - IMPORTANT: Make sure to use the frontend frameworks that are already used in the project. For example, if the project is using React, always generate compliant React code.
> - IMPORTANT: After generating code, DO NOT output Markdown files of the changes. Just stick to generating code and nothing else.
> - IMPORTANT: Make sure to use and leverage the CSS libraries, design systems and other UI coding utilities that are already used in the project. For example, if the project is using Tailwind, make sure to style your code using Tailwind.
> - IMPORTANT: Make sure when using CSS libraries and frameworks that you identify the installed version and always use the correct APIs that are supported by the installed versions.
> - IMPORTANT: When generating code from .pen designs, always make sure to use the same text labels, icons ans spacing as what is in the design.
> - DO NOT create documentations for the changes when generating code from design.
> - Explore the workspace to find if the design elements you are translating to code are already exist in the code base.
> - Make sure to awlays use the correct font, icons, and UI details like border radius when generating the code from a design.
> - If you are not sure what frontend frameworks and UI libraries are used in the project, explore it in the workspace.
> - If the UI design element you are turning code into already exist in the codebase, update it, not generate a new one.
> - When changing existing components and UI elements in the code, make sure to not break the functionality.
>
> ## Initial Setup
>
> ### Project Initialization
>
> - Identify the frontend framework and language used in the project (e.g., React, Vue, Angular, Svelte, etc.)
> - Use the same framework, language, and conventions as the existing project
> - Identify the styling approach (e.g., Tailwind, CSS Modules, styled-components, etc.)
> - If using Tailwind, refer to 'tailwind' topic for implementation details
>
> ### Pre-Implementation Verification
>
> - Ensure CSS/styles compile without errors
> - Verify all CSS variables are accessible (if using CSS custom properties)
> - Confirm styling system is properly configured and loaded
>
> ## Component Implementation Workflow
>
> ### Step 1: Component Analysis and Extraction
>
> #### 1A. Identify Required Components
>
> - Read the target frame/design
> - Identify which reusable components (refs) are used in this specific frame
> - **IMPORTANT**: Only process components that appear in the current frame
> - Count instances of each component (helps catch missing instances later)
> - Document: "Component X used N times"
>
> #### 1B. Extract Component Definitions
>
> - Use `batch_get` to get component structure
> - Extract full component tree with all nested children
> - Process components ONE AT A TIME:
>   1. Extract component with full depth
>   2. Recreate in React (Step 2)
>   3. Validate (Step 3)
>   4. Move to next component only after validation passes
>
> #### 1C. Map Component Instances
>
> - Read the target frame structure
> - For each component, identify ALL instances
> - Document for each instance:
>   * Instance ID and location
>   * Nested component overrides (`descendants` map)
>   * Props/values being passed
> - **Nested Component Analysis**:
>   * Check base component definition: Does it always include nested components?
>   * Check all instances: Do any override/hide nested components?
>   * **Decision Rule**:
>     - If NO instances override away → Nested component is REQUIRED (always render)
>     - If ANY instances override away → Nested component is OPTIONAL (conditional render)
>   * Verify each nested component ref in base definition against all instances
> - **Visual Verification**:
>   * Use `get_screenshot` on instances in context (not just base definition)
>   * Verify visible elements (borders, backgrounds, shadows)
>   * Check if styling should be on outer container or nested elements
>   * Match visual appearance in frame context
>
> ### Step 2: React Component Creation
>
> #### Component Structure
>
> - Create `.tsx` file in `src/components/` with component name
> - Use named exports
> - Define TypeScript interfaces for all props
>
> #### Props Interface Design
>
> - Review ALL instances from Step 1C mapping
> - Support all properties used by any instance (including optional ones)
> - **Nested Component Rendering**:
>   * Apply decision rule from Step 1C:
>     - NO instances override away → Always render (required)
>     - ANY instances override away → Conditional render (optional)
>   * Verify against instance mapping before making props optional
> - Document required vs optional props based on actual usage
> - Cross-reference with instance mapping to ensure completeness
>
> #### Style Implementation
>
> - Use Tailwind classes exclusively (NO inline styles)
> - Refer to tailwind.md sections: "Layout Conversion", "Style Implementation", "CSS Custom Properties and Font Stacks"
> - Match design values exactly (use arbitrary values when needed)
> - Use CSS variables for colors (no hardcoded values)
>
> #### SVG Path Implementation
>
> When implementing SVG elements from the design:
>
> **1. Extract Exact Geometry**
> - Use `batch_get` with `includePathGeometry: true`
> - NEVER approximate paths - extract exact `geometry` property from design
>
> **2. Properties to Extract**
> - `geometry` - use as `d` attribute in `<path>`
> - `fill` - convert design variables to CSS variables (e.g., `$primary` → `var(--primary)`)
> - `stroke` properties if present (`strokeColor`, `strokeThickness`)
> - `width` and `height` for viewBox calculation
>
> **3. Implementation**
> - Use exact geometry string in `d` attribute
> - Set `viewBox="0 0 {width} {height}"`
> - Preserve all stroke properties
> - For styling, see tailwind.md "SVG Styling" section for Tailwind-specific syntax
>
> **4. Logos and Complex Icons**
> - Extract complete geometry even if very long
> - Don't simplify or approximate
> - Maintain precision for brand assets
>
> ### Step 3: Component Validation
>
> 1. **Visual Verification**:
>    - Use `get_screenshot` on design component
>    - Compare with rendered React component
>    - Verify pixel-perfect match
>
> 2. **Style Verification**:
>    - Inspect computed CSS properties
>    - Verify dimensions, spacing, colors, typography match design
>    - Ensure CSS variables resolve correctly
>
> 3. **Behavior Verification**:
>    - Test fill_container elements expand properly
>    - Test fit_content elements size to content
>    - Verify no overflow issues
>
> 4. **Iterative Fixing**:
>    - Fix discrepancies immediately
>    - Re-validate after each fix
>    - Only proceed to next component when current is perfect
>
> ### Step 4: Frame Integration
>
> #### Pre-Integration Analysis
>
> - Read complete target frame with `maxDepth: 10`
> - Map component tree structure
> - Identify all component instances
>
> #### Instance Configuration
>
> - Document all property overrides for each instance
> - Verify nested component overrides
> - Create instance mapping with exact props
> - **Layout Context**:
>   * Check parent container layout mode
>   * If flex container with multiple `fill_container` children → each needs `flex-1`
>   * Document which components need `flex-1` based on parent layout
>
> #### Completeness Verification
>
> - Count component instances in design vs implementation
> - Verify all props match design overrides
> - Confirm nested components follow required/optional decision from Step 1C
> - Use checklist:
>   * [ ] All instances accounted for
>   * [ ] All props match overrides
>   * [ ] Nested components render correctly (always vs conditional)
>   * [ ] Layout classes applied correctly (`flex-1`, etc.)
>
> ### Step 5: Final Validation
>
> - Verify component positions and spacing match design
> - Verify colors resolve correctly
> - Verify typography matches
> - Verify responsive behavior:
>   * Layout adapts to different viewport sizes
>   * Scrollable areas work when content exceeds space
>   * No horizontal overflow
>   * `fill_container` elements expand properly
>   * `fit_content` elements size to content
> - Verify no console errors
> - Verify all interactive elements function correctly
>
> ## Key Principles
>
> - Use the project's styling system consistently (avoid inline styles when possible)
> - If using Tailwind, see tailwind.md for Tailwind-specific implementation details
> - Match design values exactly
> - Use the project's color system (CSS variables, design tokens, theme files, etc.) - avoid hardcoded values
> - Process components one at a time with validation
> - Verify nested component rendering requirements
> - Ensure proper styling and layout based on parent context
> ```
>
> </details>
>
> The repo has no application scaffold, so the code plan must choose the stack and interaction harness rather than inherit one. The most faithful low-overhead architecture is a React + Vite + TypeScript single-page prototype with shared design-system components, route-addressable Direction A and B flows, repository CSS tokens, Merchant webfonts, and local-only upload simulation. Before I lock that, I’m checking the exact PRD acceptance boundaries and the component overrides used in each direction, then I’ll ask only the remaining implementation choices.
>
> <details><summary>Explored 2 files, a search, a list, called a tool</summary>
>
> MCP tool call
>
> pencil.batch_get
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeIds": [
>     "I94Kf",
>     "u2oh4H",
>     "B1hNRM",
>     "O8sAyn",
>     "S1lRh1",
>     "S68zZ",
>     "VkQpT",
>     "twv9F",
>     "mA5La",
>     "bPgqn"
>   ],
>   "readDepth": 4,
>   "resolveInstances": false,
>   "resolveVariables": false
> }
> ```
>
> ```text
> [{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"V8em2","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":[{"children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":16,"icon":"arrow-left","id":"mDFS3","library":"lucide","name":"Back Icon","type":"icon","weight":"$stroke-default","width":16},{"content":"Document Center","fill":"$color-body-info","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"e8na1","lineHeight":1.6,"name":"Back Label","type":"text"}],"gap":6,"id":"FLk4b","name":"Back Link","type":"frame"},{"content":"Document Upload","id":"LJ86C","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload the documents requested for your personal loan. Add files one at a time — you can replace or remove anything before you submit.","id":"VYXgR","name":"Page Intro","ref":"R2FdRX","textGrowth":"fixed-width","type":"ref","width":720}],"gap":12,"id":"pqvZ5","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"children":[{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days that shows your income."},"mf3oF":{"icon":"banknote"},"zGVfT":{"content":"Proof of income"}},"id":"LmZ7g","name":"Card — Proof of income","ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information on it."},"mf3oF":{"icon":"id-card"},"zGVfT":{"content":"Government-issued photo ID"}},"id":"MoO5m","name":"Card — Government-issued photo ID","ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease agreement, or mortgage statement that shows your current address."},"mf3oF":{"icon":"home"},"zGVfT":{"content":"Proof of residence"}},"id":"rmlfH","name":"Card — Proof of residence","ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g/dUGaZ":{"content":"Optional"},"Ol81g/qOy2z":{"icon":"circle-plus"},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Add another document","fill":"$color-on-secondary"},"u24Oe":{"fill":"$color-on-secondary","icon":"plus"}},"fill":"$color-secondary","height":40,"id":"f07UD","name":"Add Other Document","padding":[0,20,0,16],"ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref"}]},"mf3oF":{"icon":"plus"},"zGVfT":{"content":"Other document"}},"id":"APvCf","name":"Card — Other document","ref":"Wwg0d","type":"ref","width":"fill_container"}],"gap":16,"id":"Po1mE","layout":"vertical","name":"Checklist Column","type":"frame","width":"fill_container"},{"children":[{"descendants":{"D76Wa":{"fill":"$color-primary-disabled"},"D76Wa/Z9Bmr":{"content":"Submit documents","fill":"$color-on-primary-disabled"}},"id":"I1DZM","name":"Summary Rail","ref":"q50qn","type":"ref","width":"fill_container"}],"id":"WAkr9","layout":"vertical","name":"Summary Column","type":"frame","width":360}],"gap":32,"id":"v1vOA2","name":"Columns","type":"frame","width":"fill_container"}],"gap":32,"id":"LTMoe","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"I94Kf","layout":"vertical","name":"Desktop — Default · All Outstanding","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"WAQNk","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":[{"children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":16,"icon":"arrow-left","id":"MLOPc","library":"lucide","name":"Back Icon","type":"icon","weight":"$stroke-default","width":16},{"content":"Document Center","fill":"$color-body-info","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"ZeZUa","lineHeight":1.6,"name":"Back Label","type":"text"}],"gap":6,"id":"TaRJk","name":"Back Link","type":"frame"},{"content":"Document Upload","id":"U6imxC","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload the documents requested for your personal loan. Add files one at a time — you can replace or remove anything before you submit.","id":"Vvx93","name":"Page Intro","ref":"R2FdRX","textGrowth":"fixed-width","type":"ref","width":720}],"gap":12,"id":"AV53w","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"children":[{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days that shows your income."},"Ol81g":{"fill":"$color-surface-positive"},"Ol81g/dUGaZ":{"content":"Uploaded","fill":"$color-body-positive"},"Ol81g/qOy2z":{"fill":"$color-body-positive","icon":"check"},"alTwg":{"fill":"$color-surface-positive"},"lygAh":{"children":[{"descendants":{"OyOE6":{"fill":"$color-surface-positive"},"cFdiS":{"content":"paystub-june-2026.pdf"},"sy3t3":{"content":"215 KB · PDF · Uploaded this session"},"yb8dX":{"fill":"$color-body-positive","icon":"circle-check"}},"id":"wQqQA","name":"Uploaded File Row","ref":"p3DcE","type":"ref","width":"fill_container"}]},"mf3oF":{"fill":"$color-body-positive","icon":"check"},"zGVfT":{"content":"Proof of income"}},"id":"B2DVrD","name":"Card — Proof of income · Uploaded","ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information on it."},"Ol81g":{"fill":"$color-surface-info"},"Ol81g/dUGaZ":{"content":"Uploading","fill":"$color-body-info"},"Ol81g/qOy2z":{"fill":"$color-body-info","icon":"loader-circle"},"alTwg":{"fill":"$color-surface-info"},"lygAh":{"children":[{"descendants":{"JZJIe/Z9Bmr":{"content":"Cancel"},"cFdiS":{"content":"drivers-license-front.jpg"},"gkLZX":{"enabled":false},"sy3t3":{"content":"1.8 MB · JPG"},"yb8dX":{"icon":"image"}},"id":"h3nC6k","name":"Uploading File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"alignItems":"center","children":"...","gap":12,"id":"P8OxeI","name":"Upload Progress Row","type":"frame","width":"fill_container"}]},"mf3oF":{"fill":"$color-body-info","icon":"id-card"},"zGVfT":{"content":"Government-issued photo ID"}},"id":"cAmlz","name":"Card — Government ID · Uploading","ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease agreement, or mortgage statement that shows your current address."},"Ol81g":{"fill":"$color-surface-negative"},"Ol81g/dUGaZ":{"content":"Upload failed","fill":"$color-body-negative"},"Ol81g/qOy2z":{"fill":"$color-body-negative","icon":"triangle-alert"},"alTwg":{"fill":"$color-surface-negative"},"lygAh":{"children":[{"descendants":{"OyOE6":{"fill":"$color-surface-negative"},"cFdiS":{"content":"utility-bill-june.pdf"},"gkLZX":{"fill":"$color-primary","padding":[0,16,0,12]},"gkLZX/Z9Bmr":{"content":"Retry upload","fill":"$color-on-primary"},"gkLZX/u24Oe":{"enabled":true,"fill":"$color-on-primary","height":14,"icon":"refresh-cw","width":14},"sy3t3":{"content":"412 KB · PDF · Not received"},"yb8dX":{"fill":"$color-body-negative","icon":"file-x"}},"id":"b2cF2","name":"Failed File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"children":"...","gap":8,"id":"CbLsN","name":"Upload Error Row","type":"frame","width":"fill_container"}]},"mf3oF":{"fill":"$color-body-negative","icon":"triangle-alert"},"zGVfT":{"content":"Proof of residence"}},"id":"O4F9n5","name":"Card — Proof of residence · Failed","ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g":{"fill":"$color-surface-caution"},"Ol81g/dUGaZ":{"content":"Needs attention","fill":"$color-body-caution"},"Ol81g/qOy2z":{"fill":"$color-body-caution","icon":"circle-alert"},"lygAh":{"children":[{"descendants":{"BY85A":{"content":"2025 tax return — first two pages","enabled":true,"width":"fill_container"},"I4Tg8":{"content":"What document are you uploading?"},"WQuap":{"enabled":false},"j2tw8":{"content":"Required — tell us what this file is before you submit.","enabled":true}},"id":"vnr55","name":"Other Note Input","ref":"eMyOS","type":"ref","width":"fill_container"},{"descendants":{"HksuX":{"content":"Drop your file to attach it to Other document","fill":"$color-body-info","fontWeight":"500"},"ZZQNu":{"enabled":false}},"fill":"$color-surface-info-hover","id":"lw2Ry","name":"Drop Zone — Drag Over","ref":"kwrZm","stroke":"$color-primary","strokeWidth":2,"type":"ref","width":"fill_container"},{"children":"...","gap":8,"id":"FS0Wf","name":"Validation Error Row","type":"frame","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"zGVfT":{"content":"Other document"}},"id":"IxBwv","name":"Card — Other document · Expanded","ref":"Wwg0d","type":"ref","width":"fill_container"}],"gap":16,"id":"UH7VV","layout":"vertical","name":"Checklist Column","type":"frame","width":"fill_container"},{"children":[{"descendants":{"EI5rT/PYIPa":{"fill":"$color-body-caution","icon":"circle-alert"},"EI5rT/ctoCw":{"content":"Needs note","fill":"$color-body-caution"},"Ftrx3/dFKdN":{"enabled":true,"width":104},"OSslv/PYIPa":{"fill":"$color-body-info","icon":"loader-circle"},"OSslv/ctoCw":{"content":"Uploading…","fill":"$color-body-info"},"S2c8h4/PYIPa":{"fill":"$color-body-positive","icon":"circle-check"},"S2c8h4/ctoCw":{"content":"Uploaded","fill":"$color-body-positive"},"jHX6H/PYIPa":{"fill":"$color-body-negative","icon":"triangle-alert"},"jHX6H/ctoCw":{"content":"Failed","fill":"$color-body-negative"},"rq4MC":{"content":"1 of 3 uploaded"}},"id":"Ny7RK","name":"Summary Rail","ref":"q50qn","type":"ref","width":"fill_container"}],"id":"qCRwl","layout":"vertical","name":"Summary Column","type":"frame","width":360}],"gap":32,"id":"k0WGy","name":"Columns","type":"frame","width":"fill_container"}],"gap":32,"id":"leqM5","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"u2oh4H","layout":"vertical","name":"Desktop — Mixed \u0026 Edge States","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"Tvq9x","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":[{"content":"Document Upload","id":"Up940","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Personal loan · Request #4821 · Requested Jul 10, 2026","id":"aRDAm","name":"Request Context","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"gap":4,"id":"Z72Fi","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"alignItems":"center","children":[{"content":"Session progress","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"hu5bt","lineHeight":1.6,"name":"Progress Title","type":"text"},{"content":"1 of 4 uploaded","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"PaEI1","lineHeight":1.6,"name":"Progress Count","type":"text"}],"id":"Z5nc5","justifyContent":"space_between","name":"Progress Labels","type":"frame","width":"fill_container"},{"descendants":{"dFKdN":{"enabled":true,"width":82}},"id":"Xo2HY","name":"Progress Bar","ref":"L4EBjh","type":"ref","width":"fill_container"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"DDmyo","layout":"vertical","name":"Session Progress Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads are processed after you leave this page; this list won't be saved as a receipt."},"osE4q":{"width":"fill_container"},"rwSkO":{"content":"Progress shows this visit only","textGrowth":"fixed-width","width":"fill_container"}},"id":"Nbvvn","name":"Non-persistence Alert","ref":"vbCIR","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days."},"Ol81g":{"fill":"$color-surface-positive"},"Ol81g/dUGaZ":{"content":"Uploaded · this visit","fill":"$color-body-positive"},"Ol81g/qOy2z":{"fill":"$color-body-positive","icon":"check"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"OyOE6":{"fill":"$color-surface-positive"},"cFdiS":{"content":"paystub-june-2026.pdf"},"sy3t3":{"content":"215 KB · PDF · Uploaded this visit"},"yb8dX":{"fill":"$color-body-positive","icon":"circle-check"}},"gap":8,"id":"M5e6m","justifyContent":"start","layout":"vertical","name":"Uploaded File Row","ref":"p3DcE","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"banknote"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of income","textGrowth":"fixed-width","width":"fill_container"}},"id":"wVc7J","name":"Card — Proof of income · Uploaded","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information."},"Ol81g":{"fill":"$color-surface-info"},"Ol81g/dUGaZ":{"content":"Uploading","fill":"$color-body-info"},"Ol81g/qOy2z":{"fill":"$color-body-info","icon":"loader-circle"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"JZJIe/Z9Bmr":{"content":"Cancel"},"cFdiS":{"content":"drivers-license-front.jpg"},"gkLZX":{"enabled":false},"sy3t3":{"content":"1.8 MB · JPG"},"yb8dX":{"icon":"image"}},"gap":8,"id":"V06rg","justifyContent":"start","layout":"vertical","name":"Uploading File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"alignItems":"center","children":[{"descendants":{"dFKdN":{"width":140}},"id":"w1YQeQ","name":"Progress Bar","ref":"L4EBjh","type":"ref","width":"fill_container"},{"content":"Uploading… 64%","fill":"$color-body-info","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"500","id":"kuRwP","lineHeight":1.2308,"name":"Progress Text","type":"text"}],"gap":12,"id":"D62eaZ","name":"Upload Progress Row","type":"frame","width":"fill_container"}]},"mf3oF":{"icon":"id-card"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Government-issued photo ID","textGrowth":"fixed-width","width":"fill_container"}},"id":"KtJCC","name":"Card — Government-issued photo ID · Uploading","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease, or mortgage statement showing your current address."},"Ol81g":{"fill":"$color-surface-negative"},"Ol81g/dUGaZ":{"content":"Upload failed","fill":"$color-body-negative"},"Ol81g/qOy2z":{"fill":"$color-body-negative","icon":"triangle-alert"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"OyOE6":{"fill":"$color-surface-negative"},"cFdiS":{"content":"utility-bill-june.pdf"},"gkLZX":{"enabled":false},"sy3t3":{"content":"412 KB · PDF · Not received"},"yb8dX":{"fill":"$color-body-negative","icon":"file-x"}},"gap":8,"id":"ESWk5","justifyContent":"start","layout":"vertical","name":"Failed File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"children":[{"fill":"$color-body-negative","height":16,"icon":"circle-alert","id":"k2KqPe","library":"lucide","name":"Error Icon","type":"icon","weight":"$stroke-default","width":16},{"content":"We couldn't finish uploading this file because the connection was interrupted — nothing was received. Retrying keeps the file linked to Proof of residence.","fill":"$color-body-negative","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"rFwHt","lineHeight":1.25,"name":"Error Text","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":8,"id":"w6qDzl","name":"Upload Error Row","type":"frame","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Retry upload"},"u24Oe":{"height":14,"icon":"refresh-cw","width":14}},"height":48,"id":"LxqkG","name":"Retry Button","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"home"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of residence","textGrowth":"fixed-width","width":"fill_container"}},"id":"Xj0sg","name":"Card — Proof of residence · Failed","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g/dUGaZ":{"content":"Outstanding","fill":"$color-body-strong"},"Ol81g/qOy2z":{"fill":"$color-body-strong","icon":"circle-dashed"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Add another document","fill":"$color-on-tertiary"},"u24Oe":{"fill":"$color-on-tertiary","icon":"plus"}},"fill":"$color-tertiary","height":48,"id":"gnYKV","name":"Add Other Document","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Other document","textGrowth":"fixed-width","width":"fill_container"}},"id":"V1ly4E","name":"Card — Other document","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"children":[{"descendants":{"Z9Bmr":{"content":"Submit documents","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":false}},"fill":"$color-primary-disabled","height":48,"id":"X7wtny","name":"Submit Button","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"You can add, replace, or remove files until you submit.","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"Tt3oP","lineHeight":1.3,"name":"Fine Print","textAlign":"center","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"Iuxxf","layout":"vertical","name":"Submit Block","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"ZBjwt","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"B1hNRM","layout":"vertical","name":"A-M4 · App — Checklist · Mixed states","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"r9Vv8","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"content":"Document Upload","id":"EdHej","name":"Page Title","ref":"zDTNI","type":"ref"},{"id":"AIG47","name":"Request Summary","ref":"zc9dZ","type":"ref","width":"fill_container"},{"descendants":{"H1yMT":{"content":"Your documents"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary-disabled"}},"id":"c3o1rq","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"children":[{"descendants":{"Lq4jA":{"fill":"$color-surface-positive"},"crgVM":{"fill":"$color-body-positive","icon":"check"},"gcAFV":{"content":"Proof of income"},"kEfRh":{"content":"Uploaded · this visit","fill":"$color-body-positive"}},"id":"Ud4QX","name":"Item · Uploaded","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"Lq4jA":{"fill":"$color-surface-info-layer-1"},"crgVM":{"fill":"$color-body-info","icon":"upload"},"gcAFV":{"content":"Government-issued photo ID"},"kEfRh":{"content":"Uploading… 60%"}},"id":"flB3z","name":"Item · Uploading","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"Lq4jA":{"fill":"$color-surface-negative"},"crgVM":{"fill":"$color-body-negative","icon":"triangle-alert"},"gcAFV":{"content":"Proof of residence"},"kEfRh":{"content":"Upload failed — tap to retry","fill":"$color-body-negative"}},"id":"v7eXiT","name":"Item · Failed","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"crgVM":{"icon":"file-plus"},"gcAFV":{"content":"Other document"},"kEfRh":{"content":"Add something we didn't list"}},"id":"lvtn2","name":"Item · Other","ref":"NmACi","type":"ref","width":"fill_container"}],"gap":"$gap-y-list","id":"Yl5CK","layout":"vertical","name":"Document List","type":"frame","width":"fill_container"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads go to your loan team as you send them. This checklist isn't saved as a receipt after you leave."},"rwSkO":{"content":"Shown for this visit only"}},"id":"pfN5E","name":"Session Note","ref":"vbCIR","type":"ref","width":"fill_container"}],"gap":16,"id":"YSP94","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"O8sAyn","layout":"vertical","name":"B3 · App — Document Upload · Overview (mixed states)","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"K2JjDG","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 1 of 4"},"KFKfP":{"content":"0 of 4 uploaded"}},"id":"y8DGT","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Proof of income","id":"jWgvw","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"A recent pay stub, W-2, or benefits statement from the last 60 days. One file per document.","id":"fzmN6","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"id":"N1y17","name":"Selected File","ref":"pnQBG","type":"ref","width":"fill_container"},{"content":"You can replace or remove this file before you upload it.","id":"Vjkp6","name":"Replace Hint","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"children":[{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document"},"u24Oe":{"enabled":true,"icon":"upload"}},"height":48,"id":"CfF6n","name":"Upload CTA","ref":"Yqvtr","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Cancel","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":48,"id":"E0EWM5","name":"Cancel CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":"$gap-y-pair","id":"z7AcD","layout":"vertical","name":"Actions","type":"frame","width":"fill_container"}],"gap":16,"id":"IT0DW","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"S1lRh1","layout":"vertical","name":"B4 · App — Step · File selected","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"IobGa","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 2 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary"}},"id":"EqYGK","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Government-issued photo ID","id":"tmgG2","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"Driver's license, state ID, or passport — include the back if it has information.","id":"n96GI","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"ZmvX6":{"enabled":true},"bMUtm":{"fill":"$color-body-negative"},"dWwmd":{"content":"Tap to choose a different file"},"eafn2":{"fill":"$color-surface-base"},"zGS4M":{"content":"That file is 18 MB — larger than the 10 MB limit. Choose a smaller PDF, JPG, or PNG."}},"fill":"$color-surface-negative","id":"X7B12s","name":"Upload Zone · Error","ref":"LMMoY","stroke":"$color-line-negative","type":"ref","width":"fill_container"},{"content":"Nothing was uploaded — your other documents aren't affected.","id":"ACMB7","name":"No Harm Note","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":true,"fill":"$color-on-primary-disabled","icon":"upload"}},"fill":"$color-primary-disabled","height":48,"id":"p2Vb56","name":"Upload CTA Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"E1wzl7","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"S68zZ","layout":"vertical","name":"B5 · App — Step · File validation error","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"w9nTM","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 4 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"VUpAy":{"fill":"$color-primary"}},"id":"Y3VRQD","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Other document","id":"ws8oW","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"Sending something we didn't list? Tell us what it is so your loan team can route it correctly.","id":"DsxKN","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"I4Tg8":{"content":"What document are you uploading?"},"TGql2":{"stroke":"$color-line-negative","strokeWidth":2},"WQuap":{"content":"e.g., Employment verification letter"},"vxQZG":{"content":"Enter the document type before you upload.","enabled":true}},"id":"D3zrZd","name":"Note Input · Error","ref":"eMyOS","type":"ref","width":"fill_container"},{"descendants":{"A5tQkx":{"content":"0.8 MB · PDF"},"fU25p":{"content":"employment-letter.pdf"}},"id":"QQthp","name":"Selected File","ref":"pnQBG","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":true,"fill":"$color-on-primary-disabled","icon":"upload"}},"fill":"$color-primary-disabled","height":48,"id":"ZY9LJ","name":"Upload CTA Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"Add the document type above to enable upload.","id":"M38Ih","name":"Enable Hint","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"gap":16,"id":"WXtUt","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"VkQpT","layout":"vertical","name":"B6 · App — Step · Other document · Note required","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"ROtgX","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 2 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary"}},"id":"WtRe9","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Government-issued photo ID","id":"eh3uS","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"descendants":{"A5tQkx":{"content":"3.4 MB · JPG"},"FMBpw":{"content":"Uploading… 60%"},"TyPrI":{"enabled":false},"fU25p":{"content":"drivers-license.jpg"},"q4j0v":{"enabled":true},"rPYod":{"width":190}},"id":"RqxFI","name":"Uploading File","ref":"pnQBG","type":"ref","width":"fill_container"},{"content":"Keep this page open while we upload your file.","id":"aajfe","name":"Keep Open Note","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Cancel upload","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":48,"id":"vfB8F","name":"Cancel Upload CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"fMKY4","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"twv9F","layout":"vertical","name":"B7 · App — Step · Uploading","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"VhRL4","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 4 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"VUpAy":{"fill":"$color-primary"}},"id":"SxQta","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Other document","id":"a9aaoJ","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Something went wrong on our end — your file and note are still here. Try again, or come back later."},"YytP0":{"fill":"$color-body-negative","icon":"triangle-alert"},"rwSkO":{"content":"We couldn't upload your file"}},"fill":"$color-surface-negative","id":"AsxCT","name":"Failure Alert","ref":"vbCIR","stroke":"$color-line-negative","type":"ref","width":"fill_container"},{"descendants":{"BY85A":{"content":"Employment verification letter","enabled":true,"width":"fill_container"},"I4Tg8":{"content":"What document are you uploading?"},"WQuap":{"enabled":false},"j2tw8":{"content":"Your note is saved for this attempt.","enabled":true}},"id":"RRYq2","name":"Note Input · Filled","ref":"eMyOS","type":"ref","width":"fill_container"},{"descendants":{"A5tQkx":{"content":"0.8 MB · PDF"},"fU25p":{"content":"employment-letter.pdf"}},"id":"J9qeQK","name":"Failed File","ref":"pnQBG","type":"ref","width":"fill_container"},{"children":[{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Try again"},"u24Oe":{"enabled":true,"icon":"refresh-cw"}},"height":48,"id":"w7phC","name":"Retry CTA","ref":"Yqvtr","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Choose a different file","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":48,"id":"c7FO7p","name":"Choose Different CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":"$gap-y-pair","id":"O5NYp","layout":"vertical","name":"Actions","type":"frame","width":"fill_container"}],"gap":16,"id":"lUJCe","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"mA5La","layout":"vertical","name":"B8 · App — Step · Upload failed · Retry","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"nPuEL","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":[{"content":"Document Upload","id":"P6m2w","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload the documents requested for your personal loan. You can add them in any order.","id":"GyIPS","name":"Page Intro","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"gap":"$gap-y-pair","id":"d3dwd","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"children":[{"id":"FOlyU","name":"Request Summary","ref":"zc9dZ","type":"ref","width":"fill_container"},{"descendants":{"Lq4jA":{"fill":"$color-surface-positive"},"crgVM":{"fill":"$color-body-positive","icon":"check"},"gcAFV":{"content":"Proof of income"},"kEfRh":{"content":"Uploaded · this visit","fill":"$color-body-positive"}},"id":"M9wmdj","name":"Rail · Uploaded","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"Lq4jA":{"fill":"$color-surface-info-layer-1"},"crgVM":{"fill":"$color-body-info","icon":"file-text"},"gcAFV":{"content":"Government-issued photo ID"},"kEfRh":{"content":"In progress — choose a file"}},"id":"H8pbUA","name":"Rail · Active","ref":"NmACi","stroke":"$color-line-selected","strokeWidth":2,"type":"ref","width":"fill_container"},{"descendants":{"gcAFV":{"content":"Proof of residence"},"kEfRh":{"content":"Not started"}},"id":"ue5wB","name":"Rail · Outstanding","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"crgVM":{"icon":"file-plus"},"gcAFV":{"content":"Other document"},"kEfRh":{"content":"Add something we didn't list"}},"id":"wWKpw","name":"Rail · Other","ref":"NmACi","type":"ref","width":"fill_container"}],"gap":"$gap-y-list","id":"cO4OT","layout":"vertical","name":"Rail","type":"frame","width":400},{"children":[{"content":"Government-issued photo ID","id":"JzvAb","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"Driver's license, state ID, or passport — include the back if it has information.","id":"meUyS","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"ch5be":{"content":"PDF, JPG or PNG · up to 10 MB"},"dWwmd":{"content":"Drag and drop your file here"},"lhqAJ":{"enabled":true}},"id":"J7EADB","name":"Drop Zone","padding":[40,24],"ref":"LMMoY","type":"ref","width":"fill_container"},{"content":"Prefer not to drag? Use Browse files — it works with a keyboard and screen reader too.","id":"pOuwz","name":"A11y Hint","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":16,"id":"w1ErlI","layout":"vertical","name":"Step Card","padding":32,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":32,"id":"mNBeB","name":"Columns","type":"frame","width":"fill_container"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads go to your loan team as you send them. This checklist isn't saved as a receipt after you leave."},"rwSkO":{"content":"Shown for this visit only"}},"id":"zsPBb","name":"Session Note","ref":"vbCIR","type":"ref","width":"fill_container"}],"gap":24,"id":"qAOta","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"bPgqn","layout":"vertical","name":"B10 · Web Desktop — Guided upload","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440}]
> ```
>
> <details><summary>Explored 2 files, a search, a list</summary>
>
> - Searched for `^## (5|6|7|8|9|10|13|14|15|16)|^###|\*\*(UX|A11Y|AC)-|^\| FR-` in `document-upload-prd.md`
> - Read `./tokens/tokens.css`
> - Listed files in `tokens`
> - Read `./docs/document-upload-prd.md`
>
> </details>
>
> </details>
>
> Two PRD corrections need to override the current Pencil copy in code:
>
> - `Other document` is a backend-requested catchall, not an optional arbitrary attachment. In the sample request it should count as the fourth required document, and its note must be present before upload.
> - Uploaded/completed state is session-only; the prototype must not use local storage or imply a durable receipt.
>
> The remaining choices are implementation preferences rather than repo facts.
>
> User input response
>
> - Which implementation stack should the new prototype use?
>   - React + Vite (Recommended)
> - How should code handle the currently undecided file limits shown in Pencil?
>   - Configurable assumption (Recommended)
> - How should reviewers reach both directions and their edge states?
>   - Prototype launcher (Recommended)
>
> Plan
>
> # Build Both Document Upload Directions in Code
>
> ## Summary
>
> Create a new React + Vite + TypeScript prototype that faithfully implements the two Pencil concepts as responsive, interactive flows:
>
> - Direction A: checklist hub with files staged and submitted in batches.
> - Direction B: guided document-by-document upload.
> - Both directions support complete mobile and desktop behavior, share the same domain model and reusable components, and remain separately addressable for comparison.
> - Pencil nodes `C7ypH` and `hl9HZ` remain unchanged and serve as the visual specifications.
> - Use npm, current stable compatible package versions, and a committed lockfile.
>
> ## Architecture and Interfaces
>
> - Scaffold a Vite React TypeScript application with React Router, Lucide icons, plain CSS, existing `tokens/tokens.css`, Merchant webfonts, ESLint, Vitest, Testing Library, Playwright, and axe.
> - Organize reusable UI under `src/components`, shared upload logic under `src/features/document-upload`, and automated coverage under `tests`.
> - Add these routes:
>   - `/`: non-product prototype launcher with direction and scenario links.
>   - `/components`: visual component/state gallery.
>   - `/direction-a/document-center` and `/direction-a/upload`.
>   - `/direction-b/document-center`, `/direction-b/upload`, and `/direction-b/upload/:documentId`.
> - Support launcher scenarios through `?scenario=no-request|default|selected|validation-error|uploading|failed|complete`. Scenario parameters seed state only; they never appear in customer-facing UI.
>
> Define shared types:
>
> - `DocumentRequest`: request identity, product context, eligibility, and requested documents.
> - `RequestedDocument`: identifier, predefined or catchall category, copy, required state, note, selected file, progress, attempt count, and upload status.
> - `UploadStatus`: `outstanding | selected | uploading | uploaded | failed`.
> - `SelectedFile`: the in-memory `File` plus safe display metadata.
> - `UploadPolicy`: accepted MIME types/extensions and maximum bytes.
> - `UploadService`: `upload`, progress callback, cancellation signal, and typed success/failure result.
> - `AnalyticsSink`: typed PRD event names and privacy-safe properties.
>
> Use one reducer/provider for both directions. Pass a submission strategy of `batch` or `per-document` so state rules, validation, analytics, retry, and completion logic remain shared.
>
> ## Implementation Changes
>
> ### Shared component system
>
> Build and validate components before composing either flow:
>
> - Base primitives: responsive app header, Button variants, Alert, StatusTag, TextInput, continuous and segmented progress indicators, and session-only notice.
> - Upload components: DropZone/native file input, FileRow, DocumentStatus, RequestSummary, and accessible validation/status messaging.
> - Direction A components: ChecklistDocumentCard and BatchSummaryRail.
> - Direction B components: DocumentListItem, GuidedProgressHeader, and GuidedDocumentStep.
> - Use named TypeScript exports and explicit props/variants; do not duplicate markup between mobile and desktop or between directions.
> - Use the component gallery to render every interactive and semantic state before screen integration.
>
> Translate Pencil spacing, colors, borders, icons, and layouts through existing CSS variables. Use Merchant rather than the Pencil document’s current DM Sans variable because the repository explicitly identifies Merchant as the implementation font. Use a 720px responsive breakpoint, 390px mobile reference, and 1440px desktop reference.
>
> ### Shared prototype behavior
>
> - Seed one eligible personal-loan request with four required items: proof of income, government-issued photo ID, proof of residence, and the backend-provided `Other document` catchall.
> - Correct the Pencil concepts where the PRD takes precedence: `Other document` is required in this sample, is not an arbitrary optional attachment, and requires a trimmed non-empty note.
> - Configure the provisional policy centrally as PDF, JPEG, or PNG up to 10 MiB and identify it in code as an unresolved PRD assumption.
> - Use real native file selection and desktop drag-and-drop. Never read file contents or send files to a network service.
> - Simulate upload progress deterministically with cancellation support. The `failed` scenario fails the designated document’s first attempt and succeeds on retry.
> - Keep file association and the `Other` note after failure. Replacing or removing a file updates only its associated document.
> - Update only the successfully uploaded document; show completion once all four required documents are uploaded.
> - Store everything in memory. Refreshing, leaving the app, or starting another launcher scenario resets the session.
> - Emit the PRD analytics events to an in-memory sink only. Exclude filenames, note text, file contents, and sensitive identifiers from event properties.
>
> ### Direction A
>
> - Implement active-request and no-request Document Center entry states.
> - Render a responsive checklist: two-column checklist plus summary rail on desktop and a single stacked hub with submit block on mobile.
> - Allow one or more valid files to be staged, replaced, or removed before submission.
> - Enable `Submit documents` when at least one valid file is staged and every staged catchall has its required note.
> - Submit staged files as one batch while rendering per-document progress and outcomes.
> - Preserve successful items, leave failures recoverable, and allow individual retry or replacement without restarting the batch.
> - Include coherent default, selected, validation-error, submitting, mixed-result, retry, and complete states rather than relying on one mixed-state showcase.
>
> ### Direction B
>
> - Implement active-request and no-request Document Center entry states.
> - Render a mobile overview that opens one document step at a time; desktop uses the same route/state with a persistent document rail and active step panel.
> - Allow selection, replacement, removal, validation, upload, cancellation, and retry for the current document.
> - Return to the overview after success and preserve the uploaded status for the session.
> - Retain the catchall note through failed upload and retry.
> - Include default overview, selected file, validation error, required-note error, uploading, failed, retry, and complete states.
>
> ### Accessibility and fidelity
>
> - Use native buttons, links, labels, file inputs, and `<progress>` elements.
> - Provide keyboard-equivalent file selection for drag-and-drop, visible focus, meaningful status text, and no color-only states.
> - Use scoped polite live regions for progress/success and alerts for actionable validation/failure; avoid unnecessary focus movement.
> - Focus the new page/step heading after route transitions and return focus to the updated document item after a guided upload.
> - Support 320px reflow, 200% text zoom, long filenames, reduced motion, forced colors, and minimum 24px targets.
> - Re-read each relevant Pencil component and screen immediately before implementation, then compare browser screenshots against the corresponding `C7ypH` and `hl9HZ` screens at 390px and 1440px. Record PRD-driven deviations such as Merchant typography and required catchall behavior.
>
> ## Test Plan
>
> - Unit-test file policy validation, reducer transitions, batch versus per-document strategy, replacement/removal, cancellation, completion, failure-once retry, catchall note retention, and analytics privacy.
> - Component-test accessible names, keyboard operation, drag/drop equivalence, disabled/busy behavior, progress announcements, error relationships, and all reusable variants.
> - Run axe checks on the launcher, entry states, both active flows, errors, and completion screens.
> - Playwright-test both directions on desktop and mobile:
>   - Eligible and ineligible entry.
>   - Valid file selection, replacement, and removal.
>   - Invalid type and oversized file correction.
>   - Desktop drag/drop and keyboard file-picker paths.
>   - Direction A partial and multi-file batch submission.
>   - Direction B guided upload and return to overview.
>   - Catchall note gating and retry retention.
>   - Progress, cancellation, failure, retry, and completion.
>   - Refresh resets all uploaded state.
> - Verify at 320px, 390px, 1440px, and 200% zoom with no clipped required actions or horizontal overflow.
> - Run formatting, lint, TypeScript, unit tests, production build, Playwright, and browser-based visual comparison before handoff.
>
> ## Assumptions
>
> - This is a local prototype with no backend, authentication, malware scanning, storage, or external analytics.
> - Direction A and Direction B intentionally keep different submission models.
> - Both directions receive full responsive parity from one shared codebase.
> - The launcher and component gallery are development surfaces and are not part of the customer experience.
> - PDF/JPEG/PNG and 10 MiB remain configurable prototype assumptions until product, security, and engineering resolve the PRD’s open policy decision.
> - The existing untracked repository assets and Pencil canvas are preserved; implementation does not rewrite the PRD or `.pen` file.
>
> Plan implementation
>
> Status: completed
> # Build Both Document Upload Directions in Code
>
> ## Summary
>
> Create a new React + Vite + TypeScript prototype that faithfully implements the two Pencil concepts as responsive, interactive flows:
>
> - Direction A: checklist hub with files staged and submitted in batches.
> - Direction B: guided document-by-document upload.
> - Both directions support complete mobile and desktop behavior, share the same domain model and reusable components, and remain separately addressable for comparison.
> - Pencil nodes `C7ypH` and `hl9HZ` remain unchanged and serve as the visual specifications.
> - Use npm, current stable compatible package versions, and a committed lockfile.
>
> ## Architecture and Interfaces
>
> - Scaffold a Vite React TypeScript application with React Router, Lucide icons, plain CSS, existing `tokens/tokens.css`, Merchant webfonts, ESLint, Vitest, Testing Library, Playwright, and axe.
> - Organize reusable UI under `src/components`, shared upload logic under `src/features/document-upload`, and automated coverage under `tests`.
> - Add these routes:
>   - `/`: non-product prototype launcher with direction and scenario links.
>   - `/components`: visual component/state gallery.
>   - `/direction-a/document-center` and `/direction-a/upload`.
>   - `/direction-b/document-center`, `/direction-b/upload`, and `/direction-b/upload/:documentId`.
> - Support launcher scenarios through `?scenario=no-request|default|selected|validation-error|uploading|failed|complete`. Scenario parameters seed state only; they never appear in customer-facing UI.
>
> Define shared types:
>
> - `DocumentRequest`: request identity, product context, eligibility, and requested documents.
> - `RequestedDocument`: identifier, predefined or catchall category, copy, required state, note, selected file, progress, attempt count, and upload status.
> - `UploadStatus`: `outstanding | selected | uploading | uploaded | failed`.
> - `SelectedFile`: the in-memory `File` plus safe display metadata.
> - `UploadPolicy`: accepted MIME types/extensions and maximum bytes.
> - `UploadService`: `upload`, progress callback, cancellation signal, and typed success/failure result.
> - `AnalyticsSink`: typed PRD event names and privacy-safe properties.
>
> Use one reducer/provider for both directions. Pass a submission strategy of `batch` or `per-document` so state rules, validation, analytics, retry, and completion logic remain shared.
>
> ## Implementation Changes
>
> ### Shared component system
>
> Build and validate components before composing either flow:
>
> - Base primitives: responsive app header, Button variants, Alert, StatusTag, TextInput, continuous and segmented progress indicators, and session-only notice.
> - Upload components: DropZone/native file input, FileRow, DocumentStatus, RequestSummary, and accessible validation/status messaging.
> - Direction A components: ChecklistDocumentCard and BatchSummaryRail.
> - Direction B components: DocumentListItem, GuidedProgressHeader, and GuidedDocumentStep.
> - Use named TypeScript exports and explicit props/variants; do not duplicate markup between mobile and desktop or between directions.
> - Use the component gallery to render every interactive and semantic state before screen integration.
>
> Translate Pencil spacing, colors, borders, icons, and layouts through existing CSS variables. Use Merchant rather than the Pencil document’s current DM Sans variable because the repository explicitly identifies Merchant as the implementation font. Use a 720px responsive breakpoint, 390px mobile reference, and 1440px desktop reference.
>
> ### Shared prototype behavior
>
> - Seed one eligible personal-loan request with four required items: proof of income, government-issued photo ID, proof of residence, and the backend-provided `Other document` catchall.
> - Correct the Pencil concepts where the PRD takes precedence: `Other document` is required in this sample, is not an arbitrary optional attachment, and requires a trimmed non-empty note.
> - Configure the provisional policy centrally as PDF, JPEG, or PNG up to 10 MiB and identify it in code as an unresolved PRD assumption.
> - Use real native file selection and desktop drag-and-drop. Never read file contents or send files to a network service.
> - Simulate upload progress deterministically with cancellation support. The `failed` scenario fails the designated document’s first attempt and succeeds on retry.
> - Keep file association and the `Other` note after failure. Replacing or removing a file updates only its associated document.
> - Update only the successfully uploaded document; show completion once all four required documents are uploaded.
> - Store everything in memory. Refreshing, leaving the app, or starting another launcher scenario resets the session.
> - Emit the PRD analytics events to an in-memory sink only. Exclude filenames, note text, file contents, and sensitive identifiers from event properties.
>
> ### Direction A
>
> - Implement active-request and no-request Document Center entry states.
> - Render a responsive checklist: two-column checklist plus summary rail on desktop and a single stacked hub with submit block on mobile.
> - Allow one or more valid files to be staged, replaced, or removed before submission.
> - Enable `Submit documents` when at least one valid file is staged and every staged catchall has its required note.
> - Submit staged files as one batch while rendering per-document progress and outcomes.
> - Preserve successful items, leave failures recoverable, and allow individual retry or replacement without restarting the batch.
> - Include coherent default, selected, validation-error, submitting, mixed-result, retry, and complete states rather than relying on one mixed-state showcase.
>
> ### Direction B
>
> - Implement active-request and no-request Document Center entry states.
> - Render a mobile overview that opens one document step at a time; desktop uses the same route/state with a persistent document rail and active step panel.
> - Allow selection, replacement, removal, validation, upload, cancellation, and retry for the current document.
> - Return to the overview after success and preserve the uploaded status for the session.
> - Retain the catchall note through failed upload and retry.
> - Include default overview, selected file, validation error, required-note error, uploading, failed, retry, and complete states.
>
> ### Accessibility and fidelity
>
> - Use native buttons, links, labels, file inputs, and `<progress>` elements.
> - Provide keyboard-equivalent file selection for drag-and-drop, visible focus, meaningful status text, and no color-only states.
> - Use scoped polite live regions for progress/success and alerts for actionable validation/failure; avoid unnecessary focus movement.
> - Focus the new page/step heading after route transitions and return focus to the updated document item after a guided upload.
> - Support 320px reflow, 200% text zoom, long filenames, reduced motion, forced colors, and minimum 24px targets.
> - Re-read each relevant Pencil component and screen immediately before implementation, then compare browser screenshots against the corresponding `C7ypH` and `hl9HZ` screens at 390px and 1440px. Record PRD-driven deviations such as Merchant typography and required catchall behavior.
>
> ## Test Plan
>
> - Unit-test file policy validation, reducer transitions, batch versus per-document strategy, replacement/removal, cancellation, completion, failure-once retry, catchall note retention, and analytics privacy.
> - Component-test accessible names, keyboard operation, drag/drop equivalence, disabled/busy behavior, progress announcements, error relationships, and all reusable variants.
> - Run axe checks on the launcher, entry states, both active flows, errors, and completion screens.
> - Playwright-test both directions on desktop and mobile:
>   - Eligible and ineligible entry.
>   - Valid file selection, replacement, and removal.
>   - Invalid type and oversized file correction.
>   - Desktop drag/drop and keyboard file-picker paths.
>   - Direction A partial and multi-file batch submission.
>   - Direction B guided upload and return to overview.
>   - Catchall note gating and retry retention.
>   - Progress, cancellation, failure, retry, and completion.
>   - Refresh resets all uploaded state.
> - Verify at 320px, 390px, 1440px, and 200% zoom with no clipped required actions or horizontal overflow.
> - Run formatting, lint, TypeScript, unit tests, production build, Playwright, and browser-based visual comparison before handoff.
>
> ## Assumptions
>
> - This is a local prototype with no backend, authentication, malware scanning, storage, or external analytics.
> - Direction A and Direction B intentionally keep different submission models.
> - Both directions receive full responsive parity from one shared codebase.
> - The launcher and component gallery are development surfaces and are not part of the customer experience.
> - PDF/JPEG/PNG and 10 MiB remain configurable prototype assumptions until product, security, and engineering resolve the PRD’s open policy decision.
> - The existing untracked repository assets and Pencil canvas are preserved; implementation does not rewrite the PRD or `.pen` file.
</details>

> before you implement, I'd like to clarify if the non-product prototype launcher direction we've chosen will still include the actual interactions. i.e. reviewers should be able to go through a flow and be able to try to upload files.

<details><summary>2 previous messages</summary>

> Plan
>
> # Build Both Document Upload Directions in Code
>
> ## Summary
>
> Create a new React + Vite + TypeScript prototype that faithfully implements the two Pencil concepts as responsive, interactive flows:
>
> - Direction A: checklist hub with files staged and submitted in batches.
> - Direction B: guided document-by-document upload.
> - Both directions support complete mobile and desktop behavior, share the same domain model and reusable components, and remain separately addressable for comparison.
> - Pencil nodes `C7ypH` and `hl9HZ` remain unchanged and serve as the visual specifications.
> - Use npm, current stable compatible package versions, and a committed lockfile.
>
> ## Architecture and Interfaces
>
> - Scaffold a Vite React TypeScript application with React Router, Lucide icons, plain CSS, existing `tokens/tokens.css`, Merchant webfonts, ESLint, Vitest, Testing Library, Playwright, and axe.
> - Organize reusable UI under `src/components`, shared upload logic under `src/features/document-upload`, and automated coverage under `tests`.
> - Add these routes:
>   - `/`: non-product prototype launcher with direction and scenario links.
>   - `/components`: visual component/state gallery.
>   - `/direction-a/document-center` and `/direction-a/upload`.
>   - `/direction-b/document-center`, `/direction-b/upload`, and `/direction-b/upload/:documentId`.
> - Support launcher scenarios through `?scenario=no-request|default|selected|validation-error|uploading|failed|complete`. Scenario parameters seed state only; they never appear in customer-facing UI.
>
> Define shared types:
>
> - `DocumentRequest`: request identity, product context, eligibility, and requested documents.
> - `RequestedDocument`: identifier, predefined or catchall category, copy, required state, note, selected file, progress, attempt count, and upload status.
> - `UploadStatus`: `outstanding | selected | uploading | uploaded | failed`.
> - `SelectedFile`: the in-memory `File` plus safe display metadata.
> - `UploadPolicy`: accepted MIME types/extensions and maximum bytes.
> - `UploadService`: `upload`, progress callback, cancellation signal, and typed success/failure result.
> - `AnalyticsSink`: typed PRD event names and privacy-safe properties.
>
> Use one reducer/provider for both directions. Pass a submission strategy of `batch` or `per-document` so state rules, validation, analytics, retry, and completion logic remain shared.
>
> ## Implementation Changes
>
> ### Shared component system
>
> Build and validate components before composing either flow:
>
> - Base primitives: responsive app header, Button variants, Alert, StatusTag, TextInput, continuous and segmented progress indicators, and session-only notice.
> - Upload components: DropZone/native file input, FileRow, DocumentStatus, RequestSummary, and accessible validation/status messaging.
> - Direction A components: ChecklistDocumentCard and BatchSummaryRail.
> - Direction B components: DocumentListItem, GuidedProgressHeader, and GuidedDocumentStep.
> - Use named TypeScript exports and explicit props/variants; do not duplicate markup between mobile and desktop or between directions.
> - Use the component gallery to render every interactive and semantic state before screen integration.
>
> Translate Pencil spacing, colors, borders, icons, and layouts through existing CSS variables. Use Merchant rather than the Pencil document’s current DM Sans variable because the repository explicitly identifies Merchant as the implementation font. Use a 720px responsive breakpoint, 390px mobile reference, and 1440px desktop reference.
>
> ### Shared prototype behavior
>
> - Seed one eligible personal-loan request with four required items: proof of income, government-issued photo ID, proof of residence, and the backend-provided `Other document` catchall.
> - Correct the Pencil concepts where the PRD takes precedence: `Other document` is required in this sample, is not an arbitrary optional attachment, and requires a trimmed non-empty note.
> - Configure the provisional policy centrally as PDF, JPEG, or PNG up to 10 MiB and identify it in code as an unresolved PRD assumption.
> - Use real native file selection and desktop drag-and-drop. Never read file contents or send files to a network service.
> - Simulate upload progress deterministically with cancellation support. The `failed` scenario fails the designated document’s first attempt and succeeds on retry.
> - Keep file association and the `Other` note after failure. Replacing or removing a file updates only its associated document.
> - Update only the successfully uploaded document; show completion once all four required documents are uploaded.
> - Store everything in memory. Refreshing, leaving the app, or starting another launcher scenario resets the session.
> - Emit the PRD analytics events to an in-memory sink only. Exclude filenames, note text, file contents, and sensitive identifiers from event properties.
>
> ### Direction A
>
> - Implement active-request and no-request Document Center entry states.
> - Render a responsive checklist: two-column checklist plus summary rail on desktop and a single stacked hub with submit block on mobile.
> - Allow one or more valid files to be staged, replaced, or removed before submission.
> - Enable `Submit documents` when at least one valid file is staged and every staged catchall has its required note.
> - Submit staged files as one batch while rendering per-document progress and outcomes.
> - Preserve successful items, leave failures recoverable, and allow individual retry or replacement without restarting the batch.
> - Include coherent default, selected, validation-error, submitting, mixed-result, retry, and complete states rather than relying on one mixed-state showcase.
>
> ### Direction B
>
> - Implement active-request and no-request Document Center entry states.
> - Render a mobile overview that opens one document step at a time; desktop uses the same route/state with a persistent document rail and active step panel.
> - Allow selection, replacement, removal, validation, upload, cancellation, and retry for the current document.
> - Return to the overview after success and preserve the uploaded status for the session.
> - Retain the catchall note through failed upload and retry.
> - Include default overview, selected file, validation error, required-note error, uploading, failed, retry, and complete states.
>
> ### Accessibility and fidelity
>
> - Use native buttons, links, labels, file inputs, and `<progress>` elements.
> - Provide keyboard-equivalent file selection for drag-and-drop, visible focus, meaningful status text, and no color-only states.
> - Use scoped polite live regions for progress/success and alerts for actionable validation/failure; avoid unnecessary focus movement.
> - Focus the new page/step heading after route transitions and return focus to the updated document item after a guided upload.
> - Support 320px reflow, 200% text zoom, long filenames, reduced motion, forced colors, and minimum 24px targets.
> - Re-read each relevant Pencil component and screen immediately before implementation, then compare browser screenshots against the corresponding `C7ypH` and `hl9HZ` screens at 390px and 1440px. Record PRD-driven deviations such as Merchant typography and required catchall behavior.
>
> ## Test Plan
>
> - Unit-test file policy validation, reducer transitions, batch versus per-document strategy, replacement/removal, cancellation, completion, failure-once retry, catchall note retention, and analytics privacy.
> - Component-test accessible names, keyboard operation, drag/drop equivalence, disabled/busy behavior, progress announcements, error relationships, and all reusable variants.
> - Run axe checks on the launcher, entry states, both active flows, errors, and completion screens.
> - Playwright-test both directions on desktop and mobile:
>   - Eligible and ineligible entry.
>   - Valid file selection, replacement, and removal.
>   - Invalid type and oversized file correction.
>   - Desktop drag/drop and keyboard file-picker paths.
>   - Direction A partial and multi-file batch submission.
>   - Direction B guided upload and return to overview.
>   - Catchall note gating and retry retention.
>   - Progress, cancellation, failure, retry, and completion.
>   - Refresh resets all uploaded state.
> - Verify at 320px, 390px, 1440px, and 200% zoom with no clipped required actions or horizontal overflow.
> - Run formatting, lint, TypeScript, unit tests, production build, Playwright, and browser-based visual comparison before handoff.
>
> ## Assumptions
>
> - This is a local prototype with no backend, authentication, malware scanning, storage, or external analytics.
> - Direction A and Direction B intentionally keep different submission models.
> - Both directions receive full responsive parity from one shared codebase.
> - The launcher and component gallery are development surfaces and are not part of the customer experience.
> - The launcher provides access to fully interactive flows; scenario presets are optional review shortcuts rather than static substitutes.
> - The prototype accepts real local file selections but never reads or transmits file contents.
> - PDF/JPEG/PNG and 10 MiB remain configurable prototype assumptions until product, security, and engineering resolve the PRD’s open policy decision.
> - The existing untracked repository assets and Pencil canvas are preserved; implementation does not rewrite the PRD or `.pen` file.
>
> Plan implementation
>
> Status: completed
> # Build Both Document Upload Directions in Code
>
> ## Summary
>
> Create a new React + Vite + TypeScript prototype that faithfully implements the two Pencil concepts as responsive, interactive flows:
>
> - Direction A: checklist hub with files staged and submitted in batches.
> - Direction B: guided document-by-document upload.
> - Both directions support complete mobile and desktop behavior, share the same domain model and reusable components, and remain separately addressable for comparison.
> - Pencil nodes `C7ypH` and `hl9HZ` remain unchanged and serve as the visual specifications.
> - Use npm, current stable compatible package versions, and a committed lockfile.
>
> ## Architecture and Interfaces
>
> - Scaffold a Vite React TypeScript application with React Router, Lucide icons, plain CSS, existing `tokens/tokens.css`, Merchant webfonts, ESLint, Vitest, Testing Library, Playwright, and axe.
> - Organize reusable UI under `src/components`, shared upload logic under `src/features/document-upload`, and automated coverage under `tests`.
> - Add these routes:
>   - `/`: non-product prototype launcher with direction and scenario links.
>   - `/components`: visual component/state gallery.
>   - `/direction-a/document-center` and `/direction-a/upload`.
>   - `/direction-b/document-center`, `/direction-b/upload`, and `/direction-b/upload/:documentId`.
> - Support launcher scenarios through `?scenario=no-request|default|selected|validation-error|uploading|failed|complete`. Scenario parameters seed state only; they never appear in customer-facing UI.
>
> Define shared types:
>
> - `DocumentRequest`: request identity, product context, eligibility, and requested documents.
> - `RequestedDocument`: identifier, predefined or catchall category, copy, required state, note, selected file, progress, attempt count, and upload status.
> - `UploadStatus`: `outstanding | selected | uploading | uploaded | failed`.
> - `SelectedFile`: the in-memory `File` plus safe display metadata.
> - `UploadPolicy`: accepted MIME types/extensions and maximum bytes.
> - `UploadService`: `upload`, progress callback, cancellation signal, and typed success/failure result.
> - `AnalyticsSink`: typed PRD event names and privacy-safe properties.
>
> Use one reducer/provider for both directions. Pass a submission strategy of `batch` or `per-document` so state rules, validation, analytics, retry, and completion logic remain shared.
>
> ## Implementation Changes
>
> ### Shared component system
>
> Build and validate components before composing either flow:
>
> - Base primitives: responsive app header, Button variants, Alert, StatusTag, TextInput, continuous and segmented progress indicators, and session-only notice.
> - Upload components: DropZone/native file input, FileRow, DocumentStatus, RequestSummary, and accessible validation/status messaging.
> - Direction A components: ChecklistDocumentCard and BatchSummaryRail.
> - Direction B components: DocumentListItem, GuidedProgressHeader, and GuidedDocumentStep.
> - Use named TypeScript exports and explicit props/variants; do not duplicate markup between mobile and desktop or between directions.
> - Use the component gallery to render every interactive and semantic state before screen integration.
>
> Translate Pencil spacing, colors, borders, icons, and layouts through existing CSS variables. Use Merchant rather than the Pencil document’s current DM Sans variable because the repository explicitly identifies Merchant as the implementation font. Use a 720px responsive breakpoint, 390px mobile reference, and 1440px desktop reference.
>
> ### Shared prototype behavior
>
> - Seed one eligible personal-loan request with four required items: proof of income, government-issued photo ID, proof of residence, and the backend-provided `Other document` catchall.
> - Correct the Pencil concepts where the PRD takes precedence: `Other document` is required in this sample, is not an arbitrary optional attachment, and requires a trimmed non-empty note.
> - Configure the provisional policy centrally as PDF, JPEG, or PNG up to 10 MiB and identify it in code as an unresolved PRD assumption.
> - Use real native file selection and desktop drag-and-drop. Never read file contents or send files to a network service.
> - Simulate upload progress deterministically with cancellation support. The `failed` scenario fails the designated document’s first attempt and succeeds on retry.
> - Keep file association and the `Other` note after failure. Replacing or removing a file updates only its associated document.
> - Update only the successfully uploaded document; show completion once all four required documents are uploaded.
> - Store everything in memory. Refreshing, leaving the app, or starting another launcher scenario resets the session.
> - Emit the PRD analytics events to an in-memory sink only. Exclude filenames, note text, file contents, and sensitive identifiers from event properties.
>
> ### Direction A
>
> - Implement active-request and no-request Document Center entry states.
> - Render a responsive checklist: two-column checklist plus summary rail on desktop and a single stacked hub with submit block on mobile.
> - Allow one or more valid files to be staged, replaced, or removed before submission.
> - Enable `Submit documents` when at least one valid file is staged and every staged catchall has its required note.
> - Submit staged files as one batch while rendering per-document progress and outcomes.
> - Preserve successful items, leave failures recoverable, and allow individual retry or replacement without restarting the batch.
> - Include coherent default, selected, validation-error, submitting, mixed-result, retry, and complete states rather than relying on one mixed-state showcase.
>
> ### Direction B
>
> - Implement active-request and no-request Document Center entry states.
> - Render a mobile overview that opens one document step at a time; desktop uses the same route/state with a persistent document rail and active step panel.
> - Allow selection, replacement, removal, validation, upload, cancellation, and retry for the current document.
> - Return to the overview after success and preserve the uploaded status for the session.
> - Retain the catchall note through failed upload and retry.
> - Include default overview, selected file, validation error, required-note error, uploading, failed, retry, and complete states.
>
> ### Accessibility and fidelity
>
> - Use native buttons, links, labels, file inputs, and `<progress>` elements.
> - Provide keyboard-equivalent file selection for drag-and-drop, visible focus, meaningful status text, and no color-only states.
> - Use scoped polite live regions for progress/success and alerts for actionable validation/failure; avoid unnecessary focus movement.
> - Focus the new page/step heading after route transitions and return focus to the updated document item after a guided upload.
> - Support 320px reflow, 200% text zoom, long filenames, reduced motion, forced colors, and minimum 24px targets.
> - Re-read each relevant Pencil component and screen immediately before implementation, then compare browser screenshots against the corresponding `C7ypH` and `hl9HZ` screens at 390px and 1440px. Record PRD-driven deviations such as Merchant typography and required catchall behavior.
>
> ## Test Plan
>
> - Unit-test file policy validation, reducer transitions, batch versus per-document strategy, replacement/removal, cancellation, completion, failure-once retry, catchall note retention, and analytics privacy.
> - Component-test accessible names, keyboard operation, drag/drop equivalence, disabled/busy behavior, progress announcements, error relationships, and all reusable variants.
> - Run axe checks on the launcher, entry states, both active flows, errors, and completion screens.
> - Playwright-test both directions on desktop and mobile:
>   - Eligible and ineligible entry.
>   - Valid file selection, replacement, and removal.
>   - Invalid type and oversized file correction.
>   - Desktop drag/drop and keyboard file-picker paths.
>   - Direction A partial and multi-file batch submission.
>   - Direction B guided upload and return to overview.
>   - Catchall note gating and retry retention.
>   - Progress, cancellation, failure, retry, and completion.
>   - Refresh resets all uploaded state.
> - Verify at 320px, 390px, 1440px, and 200% zoom with no clipped required actions or horizontal overflow.
> - Run formatting, lint, TypeScript, unit tests, production build, Playwright, and browser-based visual comparison before handoff.
>
> ## Assumptions
>
> - This is a local prototype with no backend, authentication, malware scanning, storage, or external analytics.
> - Direction A and Direction B intentionally keep different submission models.
> - Both directions receive full responsive parity from one shared codebase.
> - The launcher and component gallery are development surfaces and are not part of the customer experience.
> - The launcher provides access to fully interactive flows; scenario presets are optional review shortcuts rather than static substitutes.
> - The prototype accepts real local file selections but never reads or transmits file contents.
> - PDF/JPEG/PNG and 10 MiB remain configurable prototype assumptions until product, security, and engineering resolve the PRD’s open policy decision.
> - The existing untracked repository assets and Pencil canvas are preserved; implementation does not rewrite the PRD or `.pen` file.
</details>

Yes. The launcher is only a navigation and scenario-selection surface. Each direction remains a fully interactive prototype where reviewers can:

- Choose or drag real local files.
- Trigger type and size validation.
- Replace or remove selected files.
- Enter the required `Other document` description.
- Submit files through Direction A’s batch flow.
- Upload files individually through Direction B’s guided flow.
- Observe simulated progress, cancel uploads, encounter deterministic failures, and retry.
- Reach the session-only completion state.

Files remain local: the prototype uses their metadata to simulate uploading but does not read or transmit their contents. Scenario presets provide shortcuts for review; they do not replace the end-to-end interactions.

> PLEASE IMPLEMENT THIS PLAN:
> # Build Both Document Upload Directions in Code
>
> ## Summary
>
> Create a new React + Vite + TypeScript prototype that faithfully implements the two Pencil concepts as responsive, interactive flows:
>
> - Direction A: checklist hub with files staged and submitted in batches.
> - Direction B: guided document-by-document upload.
> - Both directions support complete mobile and desktop behavior, share the same domain model and reusable components, and remain separately addressable for comparison.
> - Pencil nodes `C7ypH` and `hl9HZ` remain unchanged and serve as the visual specifications.
> - Use npm, current stable compatible package versions, and a committed lockfile.
>
> ## Architecture and Interfaces
>
> - Scaffold a Vite React TypeScript application with React Router, Lucide icons, plain CSS, existing `tokens/tokens.css`, Merchant webfonts, ESLint, Vitest, Testing Library, Playwright, and axe.
> - Organize reusable UI under `src/components`, shared upload logic under `src/features/document-upload`, and automated coverage under `tests`.
> - Add these routes:
>   - `/`: non-product prototype launcher with direction and scenario links.
>   - `/components`: visual component/state gallery.
>   - `/direction-a/document-center` and `/direction-a/upload`.
>   - `/direction-b/document-center`, `/direction-b/upload`, and `/direction-b/upload/:documentId`.
> - Support launcher scenarios through `?scenario=no-request|default|selected|validation-error|uploading|failed|complete`. Scenario parameters seed state only; they never appear in customer-facing UI.
>
> Define shared types:
>
> - `DocumentRequest`: request identity, product context, eligibility, and requested documents.
> - `RequestedDocument`: identifier, predefined or catchall category, copy, required state, note, selected file, progress, attempt count, and upload status.
> - `UploadStatus`: `outstanding | selected | uploading | uploaded | failed`.
> - `SelectedFile`: the in-memory `File` plus safe display metadata.
> - `UploadPolicy`: accepted MIME types/extensions and maximum bytes.
> - `UploadService`: `upload`, progress callback, cancellation signal, and typed success/failure result.
> - `AnalyticsSink`: typed PRD event names and privacy-safe properties.
>
> Use one reducer/provider for both directions. Pass a submission strategy of `batch` or `per-document` so state rules, validation, analytics, retry, and completion logic remain shared.
>
> ## Implementation Changes
>
> ### Shared component system
>
> Build and validate components before composing either flow:
>
> - Base primitives: responsive app header, Button variants, Alert, StatusTag, TextInput, continuous and segmented progress indicators, and session-only notice.
> - Upload components: DropZone/native file input, FileRow, DocumentStatus, RequestSummary, and accessible validation/status messaging.
> - Direction A components: ChecklistDocumentCard and BatchSummaryRail.
> - Direction B components: DocumentListItem, GuidedProgressHeader, and GuidedDocumentStep.
> - Use named TypeScript exports and explicit props/variants; do not duplicate markup between mobile and desktop or between directions.
> - Use the component gallery to render every interactive and semantic state before screen integration.
>
> Translate Pencil spacing, colors, borders, icons, and layouts through existing CSS variables. Use Merchant rather than the Pencil document’s current DM Sans variable because the repository explicitly identifies Merchant as the implementation font. Use a 720px responsive breakpoint, 390px mobile reference, and 1440px desktop reference.
>
> ### Shared prototype behavior
>
> - Seed one eligible personal-loan request with four required items: proof of income, government-issued photo ID, proof of residence, and the backend-provided `Other document` catchall.
> - Correct the Pencil concepts where the PRD takes precedence: `Other document` is required in this sample, is not an arbitrary optional attachment, and requires a trimmed non-empty note.
> - Configure the provisional policy centrally as PDF, JPEG, or PNG up to 10 MiB and identify it in code as an unresolved PRD assumption.
> - Use real native file selection and desktop drag-and-drop. Never read file contents or send files to a network service.
> - Simulate upload progress deterministically with cancellation support. The `failed` scenario fails the designated document’s first attempt and succeeds on retry.
> - Keep file association and the `Other` note after failure. Replacing or removing a file updates only its associated document.
> - Update only the successfully uploaded document; show completion once all four required documents are uploaded.
> - Store everything in memory. Refreshing, leaving the app, or starting another launcher scenario resets the session.
> - Emit the PRD analytics events to an in-memory sink only. Exclude filenames, note text, file contents, and sensitive identifiers from event properties.
>
> ### Direction A
>
> - Implement active-request and no-request Document Center entry states.
> - Render a responsive checklist: two-column checklist plus summary rail on desktop and a single stacked hub with submit block on mobile.
> - Allow one or more valid files to be staged, replaced, or removed before submission.
> - Enable `Submit documents` when at least one valid file is staged and every staged catchall has its required note.
> - Submit staged files as one batch while rendering per-document progress and outcomes.
> - Preserve successful items, leave failures recoverable, and allow individual retry or replacement without restarting the batch.
> - Include coherent default, selected, validation-error, submitting, mixed-result, retry, and complete states rather than relying on one mixed-state showcase.
>
> ### Direction B
>
> - Implement active-request and no-request Document Center entry states.
> - Render a mobile overview that opens one document step at a time; desktop uses the same route/state with a persistent document rail and active step panel.
> - Allow selection, replacement, removal, validation, upload, cancellation, and retry for the current document.
> - Return to the overview after success and preserve the uploaded status for the session.
> - Retain the catchall note through failed upload and retry.
> - Include default overview, selected file, validation error, required-note error, uploading, failed, retry, and complete states.
>
> ### Accessibility and fidelity
>
> - Use native buttons, links, labels, file inputs, and `<progress>` elements.
> - Provide keyboard-equivalent file selection for drag-and-drop, visible focus, meaningful status text, and no color-only states.
> - Use scoped polite live regions for progress/success and alerts for actionable validation/failure; avoid unnecessary focus movement.
> - Focus the new page/step heading after route transitions and return focus to the updated document item after a guided upload.
> - Support 320px reflow, 200% text zoom, long filenames, reduced motion, forced colors, and minimum 24px targets.
> - Re-read each relevant Pencil component and screen immediately before implementation, then compare browser screenshots against the corresponding `C7ypH` and `hl9HZ` screens at 390px and 1440px. Record PRD-driven deviations such as Merchant typography and required catchall behavior.
>
> ## Test Plan
>
> - Unit-test file policy validation, reducer transitions, batch versus per-document strategy, replacement/removal, cancellation, completion, failure-once retry, catchall note retention, and analytics privacy.
> - Component-test accessible names, keyboard operation, drag/drop equivalence, disabled/busy behavior, progress announcements, error relationships, and all reusable variants.
> - Run axe checks on the launcher, entry states, both active flows, errors, and completion screens.
> - Playwright-test both directions on desktop and mobile:
>   - Eligible and ineligible entry.
>   - Valid file selection, replacement, and removal.
>   - Invalid type and oversized file correction.
>   - Desktop drag/drop and keyboard file-picker paths.
>   - Direction A partial and multi-file batch submission.
>   - Direction B guided upload and return to overview.
>   - Catchall note gating and retry retention.
>   - Progress, cancellation, failure, retry, and completion.
>   - Refresh resets all uploaded state.
> - Verify at 320px, 390px, 1440px, and 200% zoom with no clipped required actions or horizontal overflow.
> - Run formatting, lint, TypeScript, unit tests, production build, Playwright, and browser-based visual comparison before handoff.
>
> ## Assumptions
>
> - This is a local prototype with no backend, authentication, malware scanning, storage, or external analytics.
> - Direction A and Direction B intentionally keep different submission models.
> - Both directions receive full responsive parity from one shared codebase.
> - The launcher and component gallery are development surfaces and are not part of the customer experience.
> - The launcher provides access to fully interactive flows; scenario presets are optional review shortcuts rather than static substitutes.
> - The prototype accepts real local file selections but never reads or transmits file contents.
> - PDF/JPEG/PNG and 10 MiB remain configurable prototype assumptions until product, security, and engineering resolve the PRD’s open policy decision.
> - The existing untracked repository assets and Pencil canvas are preserved; implementation does not rewrite the PRD or `.pen` file.

<details><summary>6 previous messages</summary>

> I’m implementing the accepted plan now. I’ll use the repository’s prototype skill, the Pencil harness for design-to-code extraction, the frontend app builder and React guidance for the new application, and the frontend testing skill for rendered verification. I’ll preserve the `.pen` file and existing untracked assets, build shared components before composing either direction, then validate interactions and fidelity in the browser.
>
> <details><summary>Explored 4 files, ran a command, called 7 tools</summary>
>
> <details><summary>Explored 8 files</summary>
>
> - Read `./.agent-skills/prototype-oneapp-ui/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/build-web-apps/0.1.2/skills/frontend-app-builder/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/build-web-apps/0.1.2/skills/react-best-practices/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/build-web-apps/0.1.2/skills/frontend-testing-debugging/SKILL.md`
> - Read `~/.codex/skills/pencil-agent-harness/SKILL.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/design-system-extraction.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/component-recipes.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/validation-rubric.md`
>
> </details>
>
> - Ran `git status --short && git branch --show-current && node --version && npm --version && find . -maxdepth 2 -type f -not -path './.git/*' -not -name '*.pen' | sort | sed -n '1,220p'`
>
> MCP tool call
>
> pencil.get_editor_state
>
> ```json
> {
>   "include_schema": true
> }
> ```
>
> ````text
> ## Currently active editor
> - `/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen`
>
> # Current Editor State 
>
> ## Selected Elements:
> - `hl9HZ` (frame): Direction B — Guided Focus Flow
>
> ### Reusable Components (77):
> - `zDTNI`: headline-page
> - `J1tfP5`: headline-section
> - `TiFMn`: headline-tile
> - `SFrI4`: data-primary
> - `mK1Ni`: data-secondary
> - `R2FdRX`: body-default
> - `Ynwlh`: body-supporting
> - `p2CLM8`: body-caption
> - `s478V`: label-large-1
> - `lXDsT`: label-default
> - `xdtxf`: label-small-1
> - `m67EKQ`: label-small-2
> - `WtzuO`: label-small-3
> - `g8khNm`: link-default
> - `yCxA1`: link-supporting
> - `IdCZz`: link-caption
> - `HXIox`: elevation-1
> - `brOMq`: elevation-2
> - `qxkJo`: elevation-3
> - `hW7DI`: Inline Loader
> - `Yqvtr`: Button
> - `ivKKx`: Badge
> - `vbCIR`: Alert
> - `etV8x`: Accordion Item
> - `m1OQY`: Bottom Nav Item
> - `L1PQ6`: Bottom Nav Bar
> - `pu7Qz`: Bottom Nav Bar / App
> - `I5RoC`: Checkbox
> - `fHLQG`: Checkbox Item
> - `PfwdN`: Dropdown Button
> - `Gfgyl`: Dropdown Menu Item
> - `um6nq`: Footer
> - `eMyOS`: Email Input
> - `F8DMV`: Standalone Text Link
> - `l3cTP`: Inline Text Link
> - `gKuqI`: List Item
> - `qsZEN`: Linear Progress
> - `px2Mh`: Toggle
> - `UgSyr`: Toast
> - `Q2LRq`: Popover Tooltip
> - `Hdd31`: Utility Nav Item
> - `Cvcl5`: Primary Nav Item
> - `z41dP`: Back Button
> - `coN5s`: Nav Menu Toggle
> - `owJch`: Web Nav Bar
> - `vo5O2`: Status Tag
> - `GVzGf`: Nudge
> - `L0laN`: Radio Button
> - `lzhBw`: Radio Button Item
> - `Yt9pb`: App Utility Nav Item
> - `bQ3SH`: App Utility Nav Group
> - `BHWrb`: App Menu Bar
> - `r4u9K`: Nav Drawer Close Button
> - `JvT5j`: Nav Drawer Utility List Item
> - `IvcEh`: Nav Drawer Navigation List Item
> - `h6SJf`: Mobile Web Nav Drawer
> - `Zc1Hw`: Modal / Basic
> - `K6ABlr`: Circular Data Visualizer
> - `YWNEH`: Snapshot Tile
> - `Fzo2q`: Snapshot Tile Header
> - `bSy4S`: Account Tile Data Item
> - `Tj3Hj`: Card Art / Type=CB
> - `TL0Hz`: Card Art / Type=BW
> - `Tnbay`: Card Art / Type=BW+
> - `D3wgD4`: Icon / Chat Lines
> - `o4vyh`: Tile Button
> - `kwrZm`: Drop Zone
> - `L4EBjh`: Upload Progress Bar
> - `nIrAd`: Rail Doc Item
> - `p3DcE`: Selected File Row
> - `Wwg0d`: Document Checklist Card
> - `q50qn`: Request Summary Rail
> - `zc9dZ`: B / Request Summary
> - `TQeTt`: B / Progress Header
> - `LMMoY`: B / Upload Zone
> - `pnQBG`: B / File Row
> - `NmACi`: B / Document Item
>
> # .pen File Schema
>
> ```typescript
> /** Theme axis -> axis value. E.g. { 'device': 'phone' } */
> export interface Theme { [key: string]: string; }
> /** Dollar-prefixed variable name; binds the property to that variable. */
> export type Variable = string;
> export type NumberOrVariable = number | Variable;
> /** Hex color: #RGB, #RRGGBB, or #RRGGBBAA. */
> export type Color = string;
> export type ColorOrVariable = Color | Variable;
> export type BooleanOrVariable = boolean | Variable;
> export type StringOrVariable = string | Variable;
> export interface Layout {
>   /** Flex layout direction. 'none'=absolutely positioned children. */
>   layout?: "none" | "vertical" | "horizontal";
>   /** Main-axis gap between children. Default 0. */
>   gap?: NumberOrVariable;
>   layoutIncludeStroke?: boolean;
>   /** Inside padding. */
>   padding?: /** all sides */ NumberOrVariable | /** [vertical, horizontal] */ [NumberOrVariable, NumberOrVariable] | /** [top, right, bottom, left] */ [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable];
>   /** Main-axis alignment. Default 'start'. */
>   justifyContent?: "start" | "center" | "end" | "space_between" | "space_around";
>   /** Cross-axis alignment. Default 'start'. */
>   alignItems?: "start" | "center" | "end";
> }
> /** Dynamic layout size:
> - fit_content: combined size of children, requires layout on the node (fallback when no children).
> - fill_container: parent size, requires layout on the parent (fallback when not in a layout or when using absolute position).
> Optional fallback in parens, e.g. 'fit_content(100)'. */
> export type SizingBehavior = string;
> /** Position relative to parent. X right, Y down. IGNORED when parent uses flex layout. */
> export interface Position { x?: number; y?: number; }
> export interface Size { width?: NumberOrVariable | SizingBehavior; height?: NumberOrVariable | SizingBehavior; }
> export type BlendMode = 'normal' | 'darken' | 'multiply' | 'linearBurn' | 'colorBurn' | 'light' | 'screen' | 'linearDodge' | 'colorDodge' | 'overlay' | 'softLight' | 'hardLight' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
> export type Fill = ColorOrVariable | {
> type: "color";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> /** Fill opacity can only be set via the hex alpha channel. */
> color: ColorOrVariable;
> } | {
> type: "gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> gradientType?: "linear" | "radial" | "angular";
> opacity?: NumberOrVariable;
> /** Normalized to bbox. Default 0.5,0.5. */
> center?: Position;
> /** Normalized to bbox. Default 1,1. Linear: height = gradient length, width ignored. Radial/Angular: ellipse diameters. */
> size?: { width?: NumberOrVariable; height?: NumberOrVariable };
> /** Degrees CCW (0° up, 90° left, 180° down). */
> rotation?: NumberOrVariable;
> colors?: { color: ColorOrVariable; position: NumberOrVariable }[];
> } | /** Image fill. URL is relative to the .pen file, e.g. `./image.jpg`. */ { type: "image"; enabled?: BooleanOrVariable; blendMode?: BlendMode; opacity?: NumberOrVariable; url?: string; mode?: "stretch" | "fill" | "fit" } | /** Shader fill. URL points to a WebGL 1.0 (#version 100) fragment shader file, relative to the .pen file, e.g. `./effect.glsl`. Uniforms are described via `@directive` annotations inside block comments in the shader source. A `vec2` uniform annotated with `@resolution` is auto-bound to the fill size in pixels. Other uniforms' user-set values are stored in `uniforms`. */ {
> type: "shader";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> url: string;
> /** Override values for shader uniforms, keyed by uniform name. Uniforms annotated with `@resolution` or `@time` must not appear here. Allowed value shapes: number (float/int), boolean (bool), hex color string like `#RRGGBB[AA]` (color), array of 2-4 numbers (vec2/3/4), or a variable reference `$name` (numeric uniforms accept number variables; color uniforms accept color variables). */
> uniforms?: { [key: string]: number | boolean | string | number[] };
> } | /** Bezier-interpolated color grid, row-major. Keep edge points at default positions. */ {
> type: "mesh_gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> columns?: number;
> rows?: number;
> /** Color per vertex. */
> colors?: ColorOrVariable[];
> /** columns * rows points in [0,1]. */
> points?: (/** Auto-generated handles. */ [number, number] | /** Optional bezier handles (relative offsets); omitted = auto. */ { position: [number, number]; leftHandle?: [number, number]; rightHandle?: [number, number]; topHandle?: [number, number]; bottomHandle?: [number, number] })[];
> };
> export type Fills = Fill | Fill[];
> export interface CanHaveStroke {
>   stroke?: Fills;
>   /** Stroke thickness, uniform or per side. */
>   strokeWidth?: NumberOrVariable | { top?: NumberOrVariable; right?: NumberOrVariable; bottom?: NumberOrVariable; left?: NumberOrVariable };
>   strokeLinecap?: "butt" | "round" | "square";
>   strokeLinejoin?: "miter" | "bevel" | "round";
>   strokeAlignment?: "inner" | "center" | "outer";
> }
> export type Effect = /** Blurs the entire node. */ { enabled?: BooleanOrVariable; type: "blur"; radius?: NumberOrVariable } | /** Blurs the backdrop behind the node. */ { enabled?: BooleanOrVariable; type: "background_blur"; radius?: NumberOrVariable } | /** Inner or outer drop shadow. */ { type: "shadow"; enabled?: BooleanOrVariable; shadowType?: "inner" | "outer"; offset?: { x: NumberOrVariable; y: NumberOrVariable }; spread?: NumberOrVariable; blur?: NumberOrVariable; color?: ColorOrVariable; blendMode?: BlendMode };
> export type Effects = Effect | Effect[];
> export interface CanHaveEffects { effect?: Effects; }
> export interface CanHaveGraphics extends CanHaveEffects, CanHaveStroke { fill?: Fills; }
> export interface Entity extends Position {
>   /** Unique string; MUST NOT contain '/'. Auto-generated if omitted. */
>   id: string;
>   name?: string;
>   context?: string;
>   /** When true, can be duplicated via `ref` objects. Default false. */
>   reusable?: boolean;
>   theme?: Theme;
>   enabled?: BooleanOrVariable;
>   opacity?: NumberOrVariable;
>   flipX?: BooleanOrVariable;
>   flipY?: BooleanOrVariable;
>   /** Absolute position detaches the object from parent's layout and can be absolute positioned. Default auto */
>   layoutPosition?: "auto" | "absolute";
>   metadata?: { type: string; [key: string]: any };
>   /** Degrees CCW around top-left corner. */
>   rotation?: NumberOrVariable;
> }
> export interface Rectangleish extends Entity, Size, CanHaveGraphics { cornerRadius?: NumberOrVariable | [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable]; }
> /** Position is the top-left corner. */
> export interface Rectangle extends Rectangleish { type: "rectangle"; }
> /** Defined by its bounding rectangle. */
> export interface Ellipse extends Entity, Size, CanHaveGraphics {
>   type: "ellipse";
>   /** Ring inner/outer radius ratio. 0=solid, 1=hollow. Default 0. */
>   innerRadius?: NumberOrVariable;
>   /** Arc start angle, degrees CCW from right. Default 0. */
>   startAngle?: NumberOrVariable;
>   /** Arc length from startAngle. Positive=CCW, negative=CW. Range -360..360. Default 360. */
>   sweepAngle?: NumberOrVariable;
> }
> /** Defined by its bounding rectangle. */
> export interface Polygon extends Entity, Size, CanHaveGraphics { type: "polygon"; polygonCount?: NumberOrVariable; cornerRadius?: NumberOrVariable; }
> export interface Path extends Entity, Size, CanHaveGraphics {
>   /** Default 'nonzero'. */
>   fillRule?: "nonzero" | "evenodd";
>   /** SVG path. */
>   geometry?: string;
>   /** SVG coord-space [x,y,w,h] mapping onto the node box. Default: tight bbox of geometry. */
>   viewBox?: [number, number, number, number];
>   type: "path";
> }
> export interface TextStyle {
>   fontFamily?: StringOrVariable;
>   fontSize?: NumberOrVariable;
>   fontWeight?: StringOrVariable;
>   letterSpacing?: NumberOrVariable;
>   fontStyle?: StringOrVariable;
>   underline?: BooleanOrVariable;
>   /** Multiplier of fontSize. Defaults to font's built-in. */
>   lineHeight?: NumberOrVariable;
>   textAlign?: "left" | "center" | "right" | "justify";
>   textAlignVertical?: "top" | "middle" | "bottom";
>   strikethrough?: BooleanOrVariable;
>   href?: string;
> }
> export type TextContent = StringOrVariable;
> export interface Text extends Entity, Size, CanHaveGraphics, TextStyle {
>   type: "text";
>   content?: TextContent;
>   /** Required before width/height take effect.
> 'auto': grows to fit; no wrapping.
> 'fixed-width': width fixed, wraps; height grows.
> 'fixed-width-height': both fixed; may overflow. */
>   textGrowth?: "auto" | "fixed-width" | "fixed-width-height";
> }
> export interface CanHaveChildren { children?: Child[]; }
> /** Container to create hierarchy and layout. default layout=horizontal, width=fit_content, height=fit_content, clip=false. */
> export interface Frame extends Rectangleish, CanHaveChildren, Layout {
>   type: "frame";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   placeholder?: boolean;
>   /** Marks frame as a slot for component instances. Array entries are IDs of recommended reusable child components (e.g. menu items inside a menu bar). */
>   slot?: false | string[];
> }
> export interface Group extends Entity, CanHaveChildren, CanHaveEffects { type: "group"; }
> export interface Note extends Entity, Size, TextStyle { type: "note"; content?: TextContent; }
> export interface Prompt extends Entity, Size, TextStyle { type: "prompt"; content?: TextContent; model?: StringOrVariable; }
> export interface Context extends Entity, Size, TextStyle { type: "context"; content?: TextContent; }
> /** Icon from a library. The icon is scaled to fit the width and height. */
> export interface Icon extends Entity, Size, CanHaveEffects {
>   type: "icon";
>   /** Valid: 'lucide', 'feather', 'Material Symbols Outlined', 'Material Symbols Rounded', 'Material Symbols Sharp', 'phosphor'. */
>   library?: StringOrVariable;
>   icon?: StringOrVariable;
>   /** Variable weight, 100-700; only for libraries that support it. */
>   weight?: NumberOrVariable;
>   fill?: Fills;
> }
> /** Generates nested children from JavaScript. */
> export interface Script extends Entity, Size {
>   type: "script";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   /** JS file URI, relative to the .pen file. */
>   scriptUri?: string;
>   /** Input values by name. */
>   inputs?: { [key: string]: string | number | boolean | Variable };
> }
> /** Reuses another object. */
> export interface Ref extends Entity {
>   type: "ref";
>   /** ID of the referenced object. */
>   ref: string;
>   /** Customize descendant properties. */
>   descendants?: { [key: string /** ID path of the descendant. */]: {} /** Based on the presence of `type`:
> - `type` is not present = property overrides: the descendant node is updated with the listed properties.
> - `type` is present = replacement: the descendant node is fully replaced with a new node tree. */ };
>   [key: string]: any;
> }
> export type Child = Frame | Group | Rectangle | Ellipse | Path | Polygon | Text | Note | Prompt | Context | Icon | Script | Ref;
> export type IdPath = string;
> export interface Document { version: "2.14"; themes?: { [key: string /** RegEx: [^:]+ */]: string[] }; imports?: { [key: string]: string /** Value: relative URI of imported .pen file. Key: short alias. */ }; variables?: { [key: string /** RegEx: [^:]+ */]: { type: "boolean"; value: BooleanOrVariable | { value: BooleanOrVariable; theme?: Theme }[] } | { type: "color"; value: ColorOrVariable | { value: ColorOrVariable; theme?: Theme }[] } | { type: "number"; value: NumberOrVariable | { value: NumberOrVariable; theme?: Theme }[] } | { type: "string"; value: StringOrVariable | { value: StringOrVariable; theme?: Theme }[] } }; children: (Frame | Group | Rectangle | Ellipse | Polygon | Path | Text | Note | Context | Prompt | Icon | Script | Ref)[]; }
> ```
>
> # General instructions when editing .pen files
>
> - Pencil is an infinite canvas design tool with nested object hierarchy.
>
> - Be very thorough with your design changes and make sure all the task's needs are met.
> - Favor copying existing content and updating the copied content later, rather than generating new content.
> - When creating new variables make sure you are not accidentally overwriting any existing design.
> - Don't have multiple screens in-progress at the same time unless you are using sub-agents. Finish one screen at a time to not leave them in a broken state.
>
> - User may ask for technical modifications like removing, moving, re-ordering, clearing, and copying objects/variables, or just ask questions. Only do what's requested and nothing more.
> - Pencil is a collaborative multiplayer environment: the document can change while you work, so the state you remember may be stale. If a node is missing or no longer matches what you expected, re-read instead of recreating it, and don't undo changes the user made in the meantime.
>
> - When adding more content to a frame make sure the frame has the right layout, or is big enough to fit the new content. Resize the frame if necessary. There is no scrolling and the entire content should always be visible on the canvas.
>
> - When placing objects directly to document root and you don't have an exact position. Always start by calling `FindEmptySpace` at the start of your `batch_design` to find an empty area for your content. Never overlap root objects. Don't just pick random coordinates unless you know exact position from the context or the user request. For multiple sequential screens, use the previous element's ID as the `nodeId` parameter in `FindEmptySpace`.
> - Place components at the top and your screens below, growing to the right and down.
>
> - When creating new screens, represent each one as a top-level frame in `document`. Use `clip: true` on screen frames to prevent content overflow.
> - Keep the document root clean: only page/screen frames, reusable component frames, and other major container frames belong directly under `document`. Never place text, icons, buttons, cards, rows, images, or decorative shapes directly in `document`.
>
> - Use `get_editor_state`, `get_variables`, and `batch_get` MCP tools with reusable nodes to understand the current document structure.
> - When the design has repeated UI, consider building those as reusable components first and then instancing them, so edits to the component propagate to every instance.
>
> - Always load `get_guideline(category: guide, ...)` in order to learn how to solve the user's design task.
> - Load `get_guideline(category: style, ...)` for design inspiration
>
> - Changes in the document are presented in real-time to the user. Make the changes in a logical order as a designer would.
> - Minimize the time between the user requests and showing something on the screen. Users don't want to wait a long time before they see the progress.
> - Use the canvas as part of your thinking. You don't need to preplan every little detail. Iteratively design using the document.
>
> - Do NOT use or think in CSS/HTML properties or behavior. Pencil uses a custom format and has its own layout, rendering, and canvas behavior. Pencil has similar concepts and naming, but it's not the same as CSS/HTML.
> - Before using any property, check the pencil schema supports it and only use the properties that are specified.
> - If a property is not present in the schema, it's not supported. Find a different way to achieve the same visual effect.
> - Do NOT use: alignItems baseline/stretch, margin, percentage size. These values are not supported and will cause an error.
>
> Verify each section immediately after you are done with it. Don't wait until the end of the whole generation.
> Create a checklist to evaluate the design after you create it. Make sure to check for the following:
> - Layout it not collapsed or broken.
> - Content is not clipped outside the frame. Resize the container frames to fit the content if necessary.
> - Color contrast on text, objects, and background is sufficient.
> - Objects are properly aligned and spaced.
> - Intention and understanding of the pencil schema matches the visuals.
> After reviewing the design, do NOT delete it to make changes. If you want to fix it, always make direct updates to the existing objects.
>
> ## Style
>
> - Don't create repetitive styles and grids. Add some unique elements and layout to make the design feel more interesting.
> - Avoid wrapping every element in its own box or card. This is a common AI habit that makes designs look generic. Use a container only when it has a real structural or functional purpose.
> - Avoid excessive gradients, shadows, and rounded corners unless requested or when part of the brand identity. Be refined and intentional with effects and decorations
> - All Google fonts are available.
>
> ## Objects
>
> - All object coordinates are defined relative to the parent’s top-left corner.
> - Use a coordinate system where `x` increases to the right and `y` increases downward.
> - Objects rotate counter-clockwise around the top-left corner of their bounding box.
> - Only `frame` and `group` types can have children. Shapes, text, and other nodes cannot have children.
>
> - Properties do not cascade from parents to children. Every node is independent and must have all necessary properties specified.
> - Exclude default property values unless they are overriding a non-default value inside an instance.
>
> - Avoid duplicating the same dimension value across multiple sibling elements. If several children need to match their parent's width or height, use `fill_container` on each rather than hardcoding the parent's size repeatedly.
> - Explicitly specify `width` and `height` for shapes and other nodes whose size is not otherwise determined by layout or text behavior.
> - For layout-driven nodes, prefer `fit_content` and `fill_container` when appropriate instead of hardcoded numeric sizes.
> - Set children to `fill_container` to distribute them evenly within their parent. Use the `gap` property on the parent to add gaps between children.
>
> - Use `justifyContent: "center"` and `alignItems: "center"` on the parent to center its children both vertically and horizontally.
> - For text, follow `textGrowth` rules: do not set `width` or `height` unless `textGrowth` requires them.
> - Use `textAlign` or `textAlignVertical` to align the text within the text bounding box. `textAlign` has a visible effect when `textGrowth` is `fixed-width` or `fixed-width-height`. `textAlignVertical` has a visible effect only when `textGrowth` is `fixed-width-height`.
> - Setting `textAlign` or `textAlignVertical` will not change the position of the text bounding box. Use flexbox layout to align the object.
> - Use `textGrowth` to define text wrapping and bounding box sizing. When not specified, the default value is `"auto"`.
> - Possible `textGrowth` values:
>   - `auto`: `width` and `height` are always derived from the text content, any `width` or `height` you set is ignored. Never does line wrapping, text will always be on a single line.
>   - `fixed-width`: the `width` node property MUST be specified, `height` is calculated from the text content. Does line wrapping based on the object's bounding box width.
>   - `fixed-width-height`: both `width` and `height` node property MUST be specified. Does line wrapping based on the object's bounding box width. Text content will vertically overflow.
> - Only use `fixed-width-height` when you need to override the height of the text box. Prefer `fixed-width` with `fill_container` for text that needs to adapt to the parent container size.
> - If you want to wrap lines, you HAVE TO set the `textGrowth` to either `fixed-width` or `fixed-width-height`.
> - Never guess text dimensions, always rely on text wrapping and flexbox layout to size and position text. Any dimension guess for text will result in visual bugs.
> - Use the `lineHeight` property on text as a ratio relative to the font size: `0.0` means 0%, and `1.0` means 100%. If not specified, the font’s default line height will be applied.
>
> - Text has no `fill` by default and will be invisible. You MUST set the `fill` property on text objects to make them visible. Emoji requires `fill` as well.
> - To reference a variable, use a string value with a `$` prefix (`fill: "$primary-color"`, `gap: "$spacing-small"`)
> - `width` and `height` do not support percentage or viewport CSS values. Never use values like `"70%"`, `"100%"`, `"50vh"`, or `"calc(...)"` or even `value + "%"`. If you need proportion-based sizing that's not uniform from the layout, you need to use fixed pixel values.
> - `fill` can be set on wrapping containers to add a background color, gradient, or an image.
>
> ## Flexbox Layout
>
> - `layout` and `padding` is only accessible on `frame` type. Do NOT set `layout` and `padding` on other types of nodes.
> - **Prefer dynamic sizing over hardcoded values.** Use `fill_container` or `fit_content`, rather than repeating the parent's or children's pixel value. This makes designs more maintainable.
> - Always prefer flexbox layout; only use `layout: "none"` when truly necessary.
> - x and y properties are completely ignored when the node is in layout. Do NOT set x/y on a child unless the parent has layout: "none" or the node has layoutPosition: "absolute"
> - Only use explicit numerical sizes in rare cases when it cannot be inferred from the layout.
> - To align and distribute objects within a container with flexbox, wrap them in a parent object that has a `layout` property.
> - Frames always default to `horizontal` direction and `fit_content` sizing.
> - Padding affects ALL children uniformly - it creates space between the container's edges and its children.
> - To offset an individual child in flexbox, wrap it in a flexbox frame with padding.
> - Flexbox layout is single-axis only with no item wrapping. For grid-like layouts, manually create separate row frames.
> - A parent cannot be sized by its children using `fit_content` if all direct children are sized by the parent using `fill_container`. This creates circular dependency. Don't rely on the fallback value to resolve circular dependency.
>
> **Antipattern**
> ```js
> // WRONG: percentage values are not supported
> Insert(parent,{type:"frame",width:"100%",height:`${100/count}%`})
>
> // WRONG: padding on text is not supported, use a wrapping frame instead
> Insert(parent,{type:"text",content:"text",fontSize:12,padding:12})
>
> // WRONG: Collapses to 0 width. Parent defaults to fit_content. Child tries to fill it.
> badParent = Insert(screen, {type: "frame", layout: "vertical"});
> Insert(badParent, {type: "text", textGrowth: "fixed-width", width: "fill_container", content: "..."});
> ```
>
> ## Components and Instances
>
> - Object that has `reusable` property `true` can be also called a "component" or a "symbol"
> - Components will always have a random generated ID. It's not possible to set the ID of a component.
> - Components can be used to replicate the same object tree in multiple places, to avoid repetition. This is ideal for common widgets in a design, like buttons, form fields, toggles, cards, etc.
> - To reuse a component, use the `ref` object type that points to a reusable component. `ref` objects are also called "instances".
> - Instances have a `ref` property, which identifies the mother component.
> - The `ref` property of the instance must be set to the reused component's `id`.
> - Instances can be customized by overriding objects' properties in their subtree:
>   - To override properties of the component's root object, just put the overridden properties in the `ref` object.
>   - To override properties of an object inside the component's subtree, use the `descendants` property of the `ref`. Put the overridden properties under the customized object's `id`, path, or unique name inside the `descendants` map. If a name is not unique, use the node ID/path instead. When accessing multi-level descendant nodes in the component, use paths in the `descendants` object keys to access it, DO NOT create multiple levels of `descendants` objects.
>   - To override properties of an object inside a nested instance, the object's `id` must be prefixed by the instance's `id` followed by a slash (/). This works for arbitrarily nested component instances, e.g. consider an icon component; and a button component that contains an instance of this icon; and a menu component that contains multiple instances of the button component; and a sidebar component that contains an instance of the menu component!
>   - Parts of an instance's object tree can also be replaced with completely new objects: if the `type` property is present for a particular descendant, it means that the whole subtree will be swapped out with the override. In this case, the override must be a complete object tree, not just properties! This mechanism is useful for reusable container-type objects, such as windows, tables, grids, cards, etc.
> - An instance can emulate the deletion of a nested object from its subtree by overriding its `enabled` property with `false`.
> - You cannot reference components across files. If you want to use a component from a different file you must copy it over.
> - Try to use existing components in the document instead of always making new ones.
> - Instead of duplicating the same component multiple times with small tweaks. Try to find a way to make them more generic so the instances can use them in more places.
> - Overrides will be only applied to the object it's overriding. The changes will not be inherited to all children.
> - When parsing designs, treat "component" word broadly — some components are formally defined symbols that can be references, others are ad-hoc groupings that visually or functionally behave like components, sometimes their node name is prefixed "component/"
> - When copying nodes and modifying descendants, use the `descendants` property in the Copy operation. Never use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches.
> - When modifying component instance descendants:
>   - Use `Update(instance+"/childId", {...})` to change properties
>   - Use `newNode=Replace(instance+"/childId", {...})` to replace with a new node
>   - Use `newNode=Insert()` when the parent is a regular frame
> - IMPORTANT: DO NOT try to Update a node's descendant that you just copied (Copy), since copying will recreate the descendant nodes and it will assign new IDs to those children nodes.
> - Prefer using `fit_content` or `fill_container` size instance override to resize the component instance into the new location.
> - When an instance is not inside an object using `layout`, it must be positioned by overriding its `x` and `y` properties. Do this even if the position is (0, 0). Never override just a single position axis. Always override both if you need to specify the position.
> - An object must have a specified position, or be a child of an object using horizontal or vertical layout.
>
>
> **Pattern: Insert instance, then Update descendants**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> Update(card+"/childTitleId",{content:"Account Details"})
> Update(card+"/childDescriptionId",{content:"Manage your settings"})
> ```
>
> **Pattern: Insert instance, then Replace a slot**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> customContent=Replace(card+"/contentSlotId",{type:"frame",name:"Content",layout:"vertical"})
> item1=Insert(customContent,{type:"text",name:"Item 1",fontFamily:"Inter",content:"Item 1",fill:"#000000"})
> ```
>
> ### Text Sizing
>
> Text sizing depends on whether the parent or the text content controls the size.
>
> **Parent defines size** — parent must have flexbox layout and determines the size. Use `textGrowth:"fixed-width"` + `fill_container` (headings, descriptions, paragraphs):
>
> ```js
> section=Insert(parent,{type:"frame",name:"Header",layout:"vertical",width:400,gap:12,x:200,y:200})
> Insert(section,{type:"text",name:"Title",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Dashboard",fontSize:24,fill:"$text-primary"})
> Insert(section,{type:"text",name:"Subtitle",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Manage your account settings",fontSize:14,fill:"$text-secondary"})
> ```
>
> **Text defines size** — default `auto`, no width/height (button labels, tags, badges):
>
> ```js
> btn=Insert(parent,{type:"frame",name:"Button",padding:12,gap:8})
> Insert(btn,{type:"text",name:"Label",fontFamily:"Inter",content:"Submit",fontSize:14,fill:"$text-primary"})
> ```
>
> **Antipattern** — using pixel dimensions when layout can handle it:
>
> ```js
> container=Insert(parent,{type:"frame",name:"Button",width:200,height:100,padding:12})
> // WRONG: parent has layout, use fill_container instead of pixel width
> Insert(container,{type:"text",content:"abc",textGrowth:"fixed-width",width:320,fontSize:14})
> // WRONG: missing textGrowth after specifying width
> Insert(container,{type:"text",content:"abc",width:100,fontSize:14})
> ```
>
> ## Using placeholders
>
> - Any new, copied, or modified root frame MUST have `placeholder: true` for the entire duration of the work on it.
> - Once you start working inside a placeholder node, finish it before unsetting the flag.
> - Remove `placeholder: true` as soon as the frame is done — don't wait until all screens are finished.
>
> ## SVG Path
> - Always set an explicit `viewBox: [x, y, width, height]` on a path. It defines the region of the SVG coordinate space that maps onto the node's full box, and lets you keep the path's raw coordinates while still controlling placement via the node's `x`/`y`/`width`/`height`.
> - The viewBox region is stretched to fill the node's width/height.
>
> ### Graphs
>
> Always prefer bar charts and charts that can be built with simple layout configurations that the .pen format supports.
> Don't use absolutely positioned elements over the chart, as they won't align correctly.
> Don't manually match labels to bar positions and sizes. Rely on layout to position labels and bars correctly.
> When creating donut charts, always use `fill` color with `innerRadius` size to create the donut shape.
> Line charts cannot be easily built because the layout system cannot position individual points.
>
> ### Tables
>
> Tables need to use flex box layout.
> Tables follow strict hierarchy: **Table (frame) → Table Row (frame) → Table Cell (frame) → Table Cell Content**
> CRITICAL: Each cell is represented as a **frame** node and contains a cell content, which is usually text, label, button or instance of a component.
>
> **Antipattern** – Do NOT put content directly in the row, skipping the cell frame:
>
> ```js
> tableRow=Insert("kdl58",{type:"frame",layout:"horizontal"})
> Insert(tableRow,{type:"text",content:"John Doe"})
> Insert(tableRow,{type:"text",content:"joe.doe@example.com"})
> ```
>
> ## Scripting
>
> Use `script` node types to generate content with JavaScript. Scripts are `.js` files on disk, referenced via relative uri path in `scriptUri`.
>
> - Every script must start with `/** @schema 2.11 */` (current version). Missing this tag is an error.
> - Scripts receive a `pencil` object: `pencil.width`, `pencil.height`, `pencil.input.<name>`.
> - Scripts must return an array of node objects following the `.pen` schema.
> - Declare inputs as `@input name: type [= default]`. Available types: `number`, `string`, `boolean`, `color`, `ref`, `enum`.
> - Math.random() is deterministic in scripts and can be safely used for procedural generation.
>
> ```js
> /**
>  * @schema 2.11
>  * @input rows: number = 3
>  * @input gap: number = 4
>  * @input color: color = #3B82F6
>  * @input label: string = "Hello"
>  * @input filled: boolean = true
>  * @input layout: enum("grid", "stack", "scatter") = "grid"
>  * @input target: ref
>  */
> const rows = Math.max(1, Math.floor(pencil.input.rows));
> const cellH = (pencil.height - pencil.input.gap * (rows - 1)) / rows;
>
> const nodes = [];
> for (let r = 0; r < rows; r++) {
>   nodes.push({
>     type: "rectangle",
>     name: "Bar " + (r + 1),
>     x: 0,
>     y: r * (cellH + pencil.input.gap),
>     width: pencil.width,
>     height: cellH * Math.random(),
>     fill: pencil.input.color,
>   });
> }
>
> return nodes;
> ```
>
> ## Shaders
>
> The `shader` fill type can be used to create complex graphics effects using WebGL shaders.
>
> - Shaders are WebGL 1.0 fragment shaders (#version 100), with one addition: textureSize(sampler, lod) is available for aspect-correct texturing.
> - Supported uniform types:
>   - float, int: as numbers
>   - vec2/3/4, ivec2/3/4: as arrays of numbers or "#RRGGBB" strings for colors
>   - sampler2D: as image URL strings
> - Uniforms can be annotated with special comments:
>   - @color: marks vec3 or vec4 uniforms to use color picker controls.
>   - @default: sets the default value for the uniform.
>   - @resolution: set to the resolution of the output. e.g. can be used to normalize gl_FragCoord.
>   - @mouse: set to the mouse position in the same space as gl_FragCoord. For interactive effects.
>   - @time: set to the elapsed time in seconds. For animations.
>   - @sdf: a sampler2D set to an SDF texture of the node's shape. The r channel holds the signed distance in @resolution units (positive = inside). The gb channels hold the gradient of the distance field (direction of increasing distance), in texel space. Use gb instead of numerically differentiating the r channel!
>   - @min/@max: set the range of a uniform for better UI controls. Only applies to number uniforms.
>   - @range <min>, <max>: shorthand for @min and @max on the same line. Shows a slider in the UI.
>   - @label <text>: sets the uniform's display name in the UI. Always set the label.
>
> ```glsl
> /** @resolution */
> uniform vec2 u_resolution;
>
> /**
>  * @label Size
>  * @default 32
>  */
> uniform float u_size;
>
> /**
>  * @label Primary Color
>  * @color
>  * @default #ffffff
>  */
> uniform vec3 u_color1;
>
> /**
>  * @label Secondary Color
>  * @color
>  * @default #000000
>  */
> uniform vec3 u_color2;
>
> void main() {
>   vec2 cell = floor(gl_FragCoord.xy / u_size);
>   float check = mod(cell.x + cell.y, 2.0);
>   vec3 color = mix(u_color1, u_color2, check);
>   gl_FragColor = vec4(color, 1.0);
> }
> ```
>
> # batch_design documentation
>
> - The batch_design tool executes a small javascript snippet to modify the document.
> - Split work into multiple smaller `batch_design` calls focused on each section.
>
> - In case of an error, all modifications and the created globals will be reverted.
> - A list of warnings will be returned in the response message. Always Fix them in the next batch_design call.
>
> - Use normal JavaScript to generate repeated design structure: arrays, `for...of` loops, computed values, conditionals, object spreads, helper functions, and template strings are all useful.
> - Be smart about writing JavaScript to remove duplication and minimize the length of the generated code.
> - Prefer loops/spreads/helpers over long handwritten repetitive code when creating nav items, table rows, cards, metrics, menus, or similar repeated UI.
> - Do not include comments in the generated `batch_design` JavaScript snippet. Keep the input small.
>
> - You MUST set the `name` property with a human readable name on every node and child node you add. This will make the document cleaner and easier to understand. A mapping from names to ids will be returned at the end of each `batch_design` call so you can reference the created nodes in the next calls.
>
> - When creating style objects that are then spread when creating nodes. Make sure to include `type` in the style object.
> - Never set `id` when creating, copying, or replacing nodes or components. Pencil will always generate unique random IDs and override the input.
>
> - Always prefer the returned node id in `ref` property when creating instances.
> - You don't have access to the node properties after they are created.
>
> - Each `batch_design` is executed in it's own scope. Local variables are not shared between `batch_design` calls. To persist values between calls, don't use `const` or `let` when declaring variables, use `myNode = Insert(...)`.
>
> - Always split component creation into a separate batch_design in order to receive the generated node IDs.
>
> ## batch_design API
>
> Only these pencil functions are supported in batch_design. Use the other MCP tools for other operations.
>
> ```
> const document: string; // predefined root node
>
> Insert(parent: string, nodeData: Schema.Child): string; // insert
> Copy(path: string, parent: string, copyNodeData: Schema.Child): string; // copy
> Update(path: string, updateData: Schema.Child): void; // update
> Replace(path: string, nodeData: Schema.Child): string; // replace
> Move(path: string, parent: string | undefined, index?: number): void; // move
> Delete(path: string): void; // delete
> SetVariables(variables: Record<string, VariableDefinition>, replace?: boolean): void; // set variables/themes
> Generate(nodeId: string, type: "ai" | "stock", prompt: string): void; // generate image
> FindEmptySpace(input: { width: number; height: number; direction?: "top" | "right" | "bottom" | "left"; padding?: number; nodeId?: string }): { x: number; y: number; parentId?: string }; // find empty space
> ```
>
> The `path` argument (used by `Copy`, `Update`, `Replace`, `Move`, `Delete`) is a node ID, or a slash-separated path to a node nested inside a component instance (`instanceId/childId`). Slashes are only valid for component-instance nesting, not normal layer structure, and work for any nesting depth.
>
> ### Insert
>
> - Insert a new node at the end of the children array of the specified parent node.
> - An insert can only be a single node, if you want to add children to it, use the id return value in the next Insert call.
> - When working with components (reusable: true), insert their instances as refs with their properties overridden. Override descendant properties inline with the `descendants` map, or with subsequent Update operations.
> - Use the Replace to override children inside a component instance, e.g. `Replace("myInstance/childId",{type:"text",...})`
> - Returns the inserted node string ID
>
> ### Copy
>
> - "path": The ID of the existing node to copy. If you want to customize some properties of the copied node, just add them next to the `path` property. If you want to customize nested nodes _under_ the copied one, use the same kind of `descendants` map that `ref` nodes use!
>
> - When copying a node and modifying its descendants, you MUST use the "descendants" property in the Copy operation itself. DO NOT use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches. The copied node and its descendants receive new IDs, so Update operations referencing the original descendant IDs will fail.
> - `descendants`: Optional, used for components. Keys may be node IDs/paths or unique descendant ids inside the referenced component. If a name matches multiple descendants, use the node ID/path instead.
>
> - Copying a reusable node creates a connected instance (a `ref` node).
> - Returns the copied node string ID
>
> ### Update
>
> - Update the properties of existing nodes, without listing their children.
> - DO NOT use this to update the node's `children`, use Replace function for that.
> - This function CANNOT change the `id`, `type` or `ref` properties of any node!
> - `path`: The node to update.
>
> - `updateData": The node data to update
>
> ### Replace
>
> - Replace a node with a new node. All properties including the x/y are replaced.
> - This tool is ideal for swapping out parts of a component instance with new nodes.
> - Returns the replacement node's ID as string
> - `path`: The path of the node which will be replaced
> - `nodeData`: The properties of the new node
>
> ### Move
>
> - Move a node to a different location in the node tree in a .pen file.
> - `path`: The node to move.
> - `parent`: Optional. The new parent node. If omitted, the node stays under its current parent.
> - `index`: Optional new position of the moved node among its siblings. If omitted, the node is placed at the end.
>
> ### Delete
>
> - Delete a node from a .pen file.
> - `path`: The node to delete.
>
> ### SetVariables
>
> - Define or update the variables and themes of the .pen file. Read existing variables with the `get_variables` MCP tool first.
> - `variables`: An object keyed by variable name. Each value MUST be an object with a `type` (`"color"`, `"number"`, or `"string"`) and a `value`. Passing a bare value like `"#A3B59A"` or `16` will fail.
> - Variable names are arbitrary strings and MUST NOT begin with a dollar sign. The `$` prefix is only used when referencing a variable from a property (e.g. `fill: "$accent"`).
> - `replace` (optional, default `false`): when `false`, the variables are merged into the existing definitions. Pass `true` to completely replace the document's existing variable definitions.
> - Don't specify themes separately. If a variable uses theming, theme axes and values that aren't yet present in the document are registered automatically. For themed values, pass an array of `{value, theme}` entries.
>
> ```js
> SetVariables({
>   accent: {type:"color",value:"#A3B59A"},
>   "spacing-unit": {type:"number",value:16},
>   "font-heading": {type:"string",value:"Playfair Display"},
>   background: {type:"color",value:[
>     {value:"#F8F5F0",theme:{mode:"light"}},
>     {value:"#1A1A1A",theme:{mode:"dark"}}
>   ]}
> })
> ```
>
> ### Generate (image)
>
> - IMPORTANT: There is NO `image` node type! Images are applied as FILLS to nodes.
> - Do not guess random URLs for image fills, always use the Generate function to get an image from a stock or AI service.
> - To display an image: first Insert a frame or rectangle, then use Generate to apply the image as a fill.
> - `nodeId`: The ID of the node to apply the image fill to.
> - `type`: Either "ai" for AI-generated images or "stock" for stock photos from Unsplash.
> - `prompt`:
>   - For "ai": a detailed descriptive prompt.
>   - For "stock": 1-3 keyword search query following Stock query rules (simple, concrete, no use-case or abstract terms).
>
> ### FindEmptySpace
>
> - Finds an empty `width` x `height` area.
> - `direction` (optional, default "right"): where to search, one of "top", "right", "bottom", "left".
> - `padding` (optional, default 0): minimum distance from other elements.
> - `nodeId` (optional): anchor node used for chaining multiple screens together.
> - Returns `{x, y, parentId?}`. Insert or Copy into `parentId` (or `document` if absent) at the returned `x`/`y`.
>
> ## Examples
>
> Create the reusable `Metric` component (a vertical frame with a label and a value text) in its own `batch_design`.
>
> ```js
> const pos=FindEmptySpace({width:240,height:96,direction:"top", padding:80})
> metricCard=Insert(document,{type:"frame",name:"Metric",x:pos.x,y:pos.y,reusable:true,layout:"vertical",gap:4,placeholder:true})
> metricLabel=Insert(metricCard,{type:"text",name:"Label",fontFamily:"Inter",fontSize:13,fill:"$text-secondary",content:"Label"})
> metricValue=Insert(metricCard,{type:"text",name:"Value",fontFamily:"Inter",fontSize:28,fill:"$text-primary",content:"0"})
> Update(metricCard,{placeholder:false})
> ```
>
> Insert a screen at the document root and fill it with a loop:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> page=Insert(document,{type:"frame",name:"Landing Page",x:pos.x,y:pos.y,layout:"vertical",width:1440,padding:40,gap:24,clip:true,placeholder:true})
>
> const navItem={type:"text",fontFamily:"Inter",fontSize:14,fill:"$text-secondary"}
> nav=Insert(page,{type:"frame",name:"Nav",gap:32,alignItems:"center",width:"fill_container"})
> for (const label of ["Home","Our Story","Visit","Journal"]) {
>   Insert(nav,{...navItem,name:label,content:label})
> }
> ```
>
> Instantiate the component in a loop, keyed by the captured `metricLabel`/`metricValue` IDs:
>
> ```js
> row=Insert(page,{type:"frame",name:"Metrics",gap:16,width:"fill_container"})
> for (const [label,value] of [["Orders","1,284"],["Revenue","$48.2K"],["Customers","9,431"]]) {
>   Insert(row,{type:"ref",ref:metricCard,name:label,width:"fill_container",descendants:{[metricLabel]:{content:label},[metricValue]:{content:value}}})
> }
>
> Update(page,{placeholder:false})
> ```
>
> Copy an existing screen, customize its descendants in the same `Copy` call, and delete a node:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> dashboardV2=Copy("Xk9f2",document,{name:"Dashboard V2",x:pos.x,y:pos.y,placeholder:true,descendants:{"Jd6Ru":{fill:"#0F172A"},"Pc2Ny/Gh9Kf":{content:"Reports"}}})
> Update(dashboardV2,{placeholder:false})
>
> Delete("Vn4kP")
> ```
>
> Define the design tokens first, then reference them with `$` when building. Themed values are passed as `{value, theme}` arrays (the `dark` axis value is registered on the fly), so `$bg`/`$text-primary` references resolve per theme automatically:
>
> ```js
> SetVariables({
>   "bg":{type:"color",value:[
>     {value:"#FAFAF7",theme:{mode:"light"}},
>     {value:"#141414",theme:{mode:"dark"}}
>   ]},
>   "text-primary":{type:"color",value:[
>     {value:"#1A1A1A",theme:{mode:"light"}},
>     {value:"#F5F5F5",theme:{mode:"dark"}}
>   ]},
>   "font-body":{type:"string",value:"Inter"},
>   "gap-md":{type:"number",value:16}
> })
>
> card=Insert(document,{type:"frame",name:"Card",layout:"vertical",fill:"$bg",padding:"$gap-md",gap:"$gap-md",x:80,y:80})
> Insert(card,{type:"text",name:"Title",fontFamily:"$font-body",fontSize:20,fill:"$text-primary",content:"Tokens applied"})
> ```
> ````
>
> MCP tool call
>
> pencil.get_variables
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen"
> }
> ```
>
> ```text
> {"themes":{"Breakpoint":["Desktop","Mobile"]},"variables":{"color-body-attention":{"type":"color","value":"#d62940"},"color-body-caution":{"type":"color","value":"#856b05"},"color-body-default":{"type":"color","value":"#4b576c"},"color-body-emphasis":{"type":"color","value":"#051958"},"color-body-info":{"type":"color","value":"#0e45e3"},"color-body-inverse":{"type":"color","value":"#f0f0f3"},"color-body-inverse-emphasis":{"type":"color","value":"#ffffff"},"color-body-inverse-moderate":{"type":"color","value":"#e8eaec"},"color-body-moderate":{"type":"color","value":"#62738c"},"color-body-muted":{"type":"color","value":"#7e93b4"},"color-body-negative":{"type":"color","value":"#d62940"},"color-body-placeholder":{"type":"color","value":"#7e93b4"},"color-body-positive":{"type":"color","value":"#008353"},"color-body-selected":{"type":"color","value":"#002169"},"color-body-strong":{"type":"color","value":"#36445a"},"color-body-subtle":{"type":"color","value":"#cbd5e1"},"color-core-blue-100":{"type":"color","value":"#E7F0FF"},"color-core-blue-200":{"type":"color","value":"#CCDFFF"},"color-core-blue-600":{"type":"color","value":"#2749AD"},"color-core-blue-700":{"type":"color","value":"#0733A6"},"color-core-blue-800":{"type":"color","value":"#17398B"},"color-core-blue-950":{"type":"color","value":"#051958"},"color-core-green-medium":{"type":"color","value":"#51DBA9"},"color-core-red-500":{"type":"color","value":"#FF5D4F"},"color-line-attention":{"type":"color","value":"#f7e9a8"},"color-line-caution":{"type":"color","value":"#f7e9a8"},"color-line-default":{"type":"color","value":"#7e93b4"},"color-line-emphasis":{"type":"color","value":"#62738c"},"color-line-focus":{"type":"color","value":"#ac75ff"},"color-line-info":{"type":"color","value":"#ccdfff"},"color-line-inverse":{"type":"color","value":"#62738c"},"color-line-inverse-focus":{"type":"color","value":"#e3d1ff"},"color-line-moderate":{"type":"color","value":"#cbd5e1"},"color-line-muted":{"type":"color","value":"#e8eaec"},"color-line-negative":{"type":"color","value":"#ffc8c2"},"color-line-positive":{"type":"color","value":"#b5f2db"},"color-line-secondary":{"type":"color","value":"#406def"},"color-line-secondary-disabled":{"type":"color","value":"#a0b8f2"},"color-line-secondary-inverse":{"type":"color","value":"#f3f7fc"},"color-line-secondary-inverse-active":{"type":"color","value":"#ccdfff"},"color-line-secondary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-line-selected":{"type":"color","value":"#002169"},"color-line-subtle":{"type":"color","value":"#f0f0f3"},"color-on-primary":{"type":"color","value":"#ffffff"},"color-on-primary-disabled":{"type":"color","value":"#ffffff"},"color-on-primary-inverse":{"type":"color","value":"#0e45e3"},"color-on-primary-inverse-disabled":{"type":"color","value":"#4b576c"},"color-on-secondary":{"type":"color","value":"#0e45e3"},"color-on-secondary-disabled":{"type":"color","value":"#a0b8f2"},"color-on-secondary-inverse":{"type":"color","value":"#ffffff"},"color-on-secondary-inverse-active":{"type":"color","value":"#ccdfff"},"color-on-secondary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-on-tertiary":{"type":"color","value":"#0e45e3"},"color-on-tertiary-disabled":{"type":"color","value":"#a0b8f2"},"color-on-tertiary-inverse":{"type":"color","value":"#ffffff"},"color-on-tertiary-inverse-active":{"type":"color","value":"#ccdfff"},"color-on-tertiary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-primary":{"type":"color","value":"#0e45e3"},"color-primary-active":{"type":"color","value":"#0733a6"},"color-primary-disabled":{"type":"color","value":"#a0b8f2"},"color-primary-hover":{"type":"color","value":"#406def"},"color-primary-inverse":{"type":"color","value":"#ffffff"},"color-primary-inverse-active":{"type":"color","value":"#ccdfff"},"color-primary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-primary-inverse-hover":{"type":"color","value":"#e7f0ff"},"color-secondary":{"type":"color","value":"#ffffff00"},"color-secondary-active":{"type":"color","value":"#ccdfff"},"color-secondary-disabled":{"type":"color","value":"#ffffff00"},"color-secondary-hover":{"type":"color","value":"#e7f0ff"},"color-secondary-inverse":{"type":"color","value":"#ffffff00"},"color-secondary-inverse-active":{"type":"color","value":"#17398b"},"color-secondary-inverse-hover":{"type":"color","value":"#17398b"},"color-surface-backdrop":{"type":"color","value":"#f6f6f1"},"color-surface-base":{"type":"color","value":"#ffffff"},"color-surface-base-hover":{"type":"color","value":"#fafafc"},"color-surface-caution":{"type":"color","value":"#fcfaeb"},"color-surface-caution-active":{"type":"color","value":"#f7e9a8"},"color-surface-caution-hover":{"type":"color","value":"#fffddb"},"color-surface-info":{"type":"color","value":"#f3f7fc"},"color-surface-info-active":{"type":"color","value":"#ccdfff"},"color-surface-info-hover":{"type":"color","value":"#e7f0ff"},"color-surface-info-layer-1":{"type":"color","value":"#e7f0ff"},"color-surface-info-layer-2":{"type":"color","value":"#ccdfff"},"color-surface-inverse-backdrop":{"type":"color","value":"#051958"},"color-surface-inverse-backdrop-active":{"type":"color","value":"#0733a6"},"color-surface-inverse-backdrop-hover":{"type":"color","value":"#fff0f0"},"color-surface-inverse-base":{"type":"color","value":"#002169"},"color-surface-layer-1":{"type":"color","value":"#fafafc"},"color-surface-layer-2":{"type":"color","value":"#f5f6f9"},"color-surface-negative":{"type":"color","value":"#fbf3f1"},"color-surface-negative-active":{"type":"color","value":"#ffc8c2"},"color-surface-negative-disabled":{"type":"color","value":"#fbf3f1"},"color-surface-negative-hover":{"type":"color","value":"#fff0f0"},"color-surface-negative-inverse":{"type":"color","value":"#C94D53"},"color-surface-negative-inverse-active":{"type":"color","value":"#ffc8c2"},"color-surface-negative-inverse-disabled":{"type":"color","value":"#fbf3f1"},"color-surface-negative-inverse-hover":{"type":"color","value":"#fff0f0"},"color-surface-positive":{"type":"color","value":"#eefbf6"},"color-surface-positive-active":{"type":"color","value":"#b5f2db"},"color-surface-positive-hover":{"type":"color","value":"#dcfaed"},"color-surface-promo":{"type":"color","value":[{"theme":{"Breakpoint":"Desktop"},"value":"#406def"},{"theme":{"Breakpoint":"Mobile"},"value":"#406def"}]},"color-tertiary":{"type":"color","value":"#ffffff00"},"color-tertiary-active":{"type":"color","value":"#ccdfff"},"color-tertiary-disabled":{"type":"color","value":"#ffffff00"},"color-tertiary-hover":{"type":"color","value":"#e7f0ff"},"color-tertiary-inverse":{"type":"color","value":"#ffffff00"},"color-tertiary-inverse-active":{"type":"color","value":"#17398b"},"color-tertiary-inverse-disabled":{"type":"color","value":"#ffffff00"},"color-tertiary-inverse-hover":{"type":"color","value":"#17398b"},"dimension-0":{"type":"number","value":0},"dimension-104":{"type":"number","value":104},"dimension-112":{"type":"number","value":112},"dimension-12":{"type":"number","value":12},"dimension-120":{"type":"number","value":120},"dimension-16":{"type":"number","value":16},"dimension-160":{"type":"number","value":160},"dimension-2":{"type":"number","value":2},"dimension-20":{"type":"number","value":20},"dimension-200":{"type":"number","value":200},"dimension-24":{"type":"number","value":24},"dimension-240":{"type":"number","value":240},"dimension-28":{"type":"number","value":28},"dimension-280":{"type":"number","value":280},"dimension-32":{"type":"number","value":32},"dimension-320":{"type":"number","value":320},"dimension-36":{"type":"number","value":36},"dimension-360":{"type":"number","value":360},"dimension-4":{"type":"number","value":4},"dimension-40":{"type":"number","value":40},"dimension-44":{"type":"number","value":44},"dimension-48":{"type":"number","value":48},"dimension-56":{"type":"number","value":56},"dimension-64":{"type":"number","value":64},"dimension-72":{"type":"number","value":72},"dimension-8":{"type":"number","value":8},"dimension-80":{"type":"number","value":80},"dimension-88":{"type":"number","value":88},"dimension-96":{"type":"number","value":96},"elevation-1":{"type":"string","value":"1px 3px 25px 0px rgba(63, 61, 86, 0.03)"},"elevation-1-color":{"type":"color","value":"#3F3D5608"},"elevation-2":{"type":"string","value":"6px 10px 35px 0px rgba(63, 61, 86, 0.07)"},"elevation-2-color":{"type":"color","value":"#3F3D5612"},"elevation-3":{"type":"string","value":"4px 12px 30px 0px rgba(107, 107, 103, 0.15)"},"elevation-3-color":{"type":"color","value":"#6B6B6726"},"font-body-caption-letter-spacing":{"type":"number","value":0},"font-body-caption-line-height":{"type":"number","value":20},"font-body-caption-size":{"type":"number","value":14},"font-body-default-letter-spacing":{"type":"number","value":0},"font-body-default-line-height":{"type":"number","value":24},"font-body-default-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":18},{"theme":{"Breakpoint":"Mobile"},"value":17}]},"font-body-supporting-letter-spacing":{"type":"number","value":0},"font-body-supporting-line-height":{"type":"number","value":20},"font-body-supporting-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":16},{"theme":{"Breakpoint":"Mobile"},"value":15}]},"font-data-primary-letter-spacing":{"type":"number","value":-0.5},"font-data-primary-line-height":{"type":"number","value":56},"font-data-primary-size":{"type":"number","value":48},"font-data-secondary-letter-spacing":{"type":"number","value":-0.3},"font-data-secondary-line-height":{"type":"number","value":40},"font-data-secondary-size":{"type":"number","value":32},"font-family-primary":{"type":"string","value":"DM Sans"},"font-headline-page-letter-spacing":{"type":"number","value":-0.3},"font-headline-page-line-height":{"type":"number","value":36},"font-headline-page-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":30}]},"font-headline-section-letter-spacing":{"type":"number","value":0},"font-headline-section-line-height":{"type":"number","value":24},"font-headline-section-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":22},{"theme":{"Breakpoint":"Mobile"},"value":19}]},"font-headline-tile-letter-spacing":{"type":"number","value":-0.24},"font-headline-tile-line-height":{"type":"number","value":32},"font-headline-tile-size":{"type":"number","value":24},"font-input-field-line-height":{"type":"number","value":24},"font-input-field-size":{"type":"number","value":20},"font-label-default-letter-spacing":{"type":"number","value":0},"font-label-default-line-height":{"type":"number","value":24},"font-label-default-size":{"type":"number","value":17},"font-label-large-1-letter-spacing":{"type":"number","value":0},"font-label-large-1-line-height":{"type":"number","value":24},"font-label-large-1-size":{"type":"number","value":19},"font-label-small-1-letter-spacing":{"type":"number","value":0},"font-label-small-1-line-height":{"type":"number","value":24},"font-label-small-1-size":{"type":"number","value":15},"font-label-small-2-letter-spacing":{"type":"number","value":0},"font-label-small-2-line-height":{"type":"number","value":16},"font-label-small-2-size":{"type":"number","value":13},"font-label-small-3-letter-spacing":{"type":"number","value":0},"font-label-small-3-line-height":{"type":"number","value":16},"font-label-small-3-size":{"type":"number","value":11},"font-weight-bold":{"type":"number","value":700},"font-weight-light":{"type":"number","value":300},"font-weight-medium":{"type":"number","value":500},"font-weight-regular":{"type":"number","value":400},"gap-content":{"type":"number","value":32},"gap-content-area":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"gap-group-large":{"type":"number","value":24},"gap-group-small":{"type":"number","value":4},"gap-row-default":{"type":"number","value":16},"gap-row-large":{"type":"number","value":24},"gap-row-small":{"type":"number","value":8},"gap-tile-large":{"type":"number","value":24},"gap-tile-small":{"type":"number","value":12},"gap-x-component-default":{"type":"number","value":8},"gap-x-component-large":{"type":"number","value":12},"gap-x-component-small":{"type":"number","value":4},"gap-x-group":{"type":"number","value":8},"gap-x-pair":{"type":"number","value":8},"gap-x-row":{"type":"number","value":16},"gap-y-group":{"type":"number","value":16},"gap-y-list":{"type":"number","value":8},"gap-y-pair":{"type":"number","value":8},"gap-y-section":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"gap-y-surface":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"height-component-default":{"type":"number","value":48},"height-component-large-1":{"type":"number","value":56},"height-component-large-2":{"type":"number","value":64},"height-component-large-3":{"type":"number","value":80},"height-component-small-1":{"type":"number","value":40},"height-component-small-2":{"type":"number","value":36},"height-component-small-3":{"type":"number","value":32},"height-component-small-4":{"type":"number","value":28},"height-component-small-5":{"type":"number","value":24},"margin-surface-base":{"type":"number","value":0},"padding-content-area":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"padding-surface-1":{"type":"number","value":16},"padding-surface-2":{"type":"number","value":16},"padding-surface-base":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":24},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"padding-x-component-default":{"type":"number","value":24},"padding-x-component-default-icon-offset":{"type":"number","value":20},"padding-x-component-large":{"type":"number","value":24},"padding-x-component-large-1":{"type":"number","value":32},"padding-x-component-large-1-icon-offset":{"type":"number","value":28},"padding-x-component-large-2":{"type":"number","value":40},"padding-x-component-large-2-icon-offset":{"type":"number","value":36},"padding-x-component-large-icon-offset":{"type":"number","value":16},"padding-x-component-small":{"type":"number","value":16},"padding-x-component-small-1":{"type":"number","value":20},"padding-x-component-small-1-icon-offset":{"type":"number","value":16},"padding-x-component-small-2-icon-offset":{"type":"number","value":12},"padding-x-component-small-3":{"type":"number","value":12},"padding-x-component-small-4":{"type":"number","value":8},"padding-x-component-small-icon-offset":{"type":"number","value":8},"shape-radius-default":{"type":"number","value":8},"shape-radius-full":{"type":"number","value":999},"shape-radius-large-1":{"type":"number","value":16},"shape-radius-medium-1":{"type":"number","value":12},"shape-radius-small-1":{"type":"number","value":4},"shape-radius-small-2":{"type":"number","value":2},"size-icon-default":{"type":"number","value":24},"size-icon-large-1":{"type":"number","value":40},"size-icon-large-2":{"type":"number","value":32},"size-icon-small-1":{"type":"number","value":20},"size-icon-small-2":{"type":"number","value":16},"size-icon-small-3":{"type":"number","value":12},"stroke-default":{"type":"number","value":1.4},"stroke-large-1":{"type":"number","value":1.7},"stroke-large-2":{"type":"number","value":2.2},"stroke-small-1":{"type":"number","value":1.2}}}
> ```
>
> MCP tool call
>
> pencil.batch_get
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeIds": [
>     "I94Kf",
>     "u2oh4H",
>     "B1hNRM",
>     "O8sAyn",
>     "S1lRh1",
>     "S68zZ",
>     "VkQpT",
>     "twv9F",
>     "mA5La",
>     "bPgqn"
>   ],
>   "readDepth": 3,
>   "resolveInstances": false,
>   "resolveVariables": false
> }
> ```
>
> ```text
> [{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"V8em2","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":[{"children":[{"alignItems":"center","children":"...","gap":6,"id":"FLk4b","name":"Back Link","type":"frame"},{"content":"Document Upload","id":"LJ86C","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload the documents requested for your personal loan. Add files one at a time — you can replace or remove anything before you submit.","id":"VYXgR","name":"Page Intro","ref":"R2FdRX","textGrowth":"fixed-width","type":"ref","width":720}],"gap":12,"id":"pqvZ5","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"children":"...","gap":16,"id":"Po1mE","layout":"vertical","name":"Checklist Column","type":"frame","width":"fill_container"},{"children":"...","id":"WAkr9","layout":"vertical","name":"Summary Column","type":"frame","width":360}],"gap":32,"id":"v1vOA2","name":"Columns","type":"frame","width":"fill_container"}],"gap":32,"id":"LTMoe","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"I94Kf","layout":"vertical","name":"Desktop — Default · All Outstanding","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"WAQNk","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":[{"children":[{"alignItems":"center","children":"...","gap":6,"id":"TaRJk","name":"Back Link","type":"frame"},{"content":"Document Upload","id":"U6imxC","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload the documents requested for your personal loan. Add files one at a time — you can replace or remove anything before you submit.","id":"Vvx93","name":"Page Intro","ref":"R2FdRX","textGrowth":"fixed-width","type":"ref","width":720}],"gap":12,"id":"AV53w","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"children":"...","gap":16,"id":"UH7VV","layout":"vertical","name":"Checklist Column","type":"frame","width":"fill_container"},{"children":"...","id":"qCRwl","layout":"vertical","name":"Summary Column","type":"frame","width":360}],"gap":32,"id":"k0WGy","name":"Columns","type":"frame","width":"fill_container"}],"gap":32,"id":"leqM5","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"u2oh4H","layout":"vertical","name":"Desktop — Mixed \u0026 Edge States","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"Tvq9x","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"children":[{"content":"Document Upload","id":"Up940","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Personal loan · Request #4821 · Requested Jul 10, 2026","id":"aRDAm","name":"Request Context","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"gap":4,"id":"Z72Fi","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"alignItems":"center","children":"...","id":"Z5nc5","justifyContent":"space_between","name":"Progress Labels","type":"frame","width":"fill_container"},{"descendants":{"dFKdN":{"enabled":true,"width":82}},"id":"Xo2HY","name":"Progress Bar","ref":"L4EBjh","type":"ref","width":"fill_container"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"DDmyo","layout":"vertical","name":"Session Progress Card","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"},{"descendants":{"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads are processed after you leave this page; this list won't be saved as a receipt."},"osE4q":{"width":"fill_container"},"rwSkO":{"content":"Progress shows this visit only","textGrowth":"fixed-width","width":"fill_container"}},"id":"Nbvvn","name":"Non-persistence Alert","ref":"vbCIR","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A recent pay stub, W-2, or a bank statement from the last 60 days."},"Ol81g":{"fill":"$color-surface-positive"},"Ol81g/dUGaZ":{"content":"Uploaded · this visit","fill":"$color-body-positive"},"Ol81g/qOy2z":{"fill":"$color-body-positive","icon":"check"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"OyOE6":{"fill":"$color-surface-positive"},"cFdiS":{"content":"paystub-june-2026.pdf"},"sy3t3":{"content":"215 KB · PDF · Uploaded this visit"},"yb8dX":{"fill":"$color-body-positive","icon":"circle-check"}},"gap":8,"id":"M5e6m","justifyContent":"start","layout":"vertical","name":"Uploaded File Row","ref":"p3DcE","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"banknote"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of income","textGrowth":"fixed-width","width":"fill_container"}},"id":"wVc7J","name":"Card — Proof of income · Uploaded","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A driver's license, passport, or state ID. Include the back if it has information."},"Ol81g":{"fill":"$color-surface-info"},"Ol81g/dUGaZ":{"content":"Uploading","fill":"$color-body-info"},"Ol81g/qOy2z":{"fill":"$color-body-info","icon":"loader-circle"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"JZJIe/Z9Bmr":{"content":"Cancel"},"cFdiS":{"content":"drivers-license-front.jpg"},"gkLZX":{"enabled":false},"sy3t3":{"content":"1.8 MB · JPG"},"yb8dX":{"icon":"image"}},"gap":8,"id":"V06rg","justifyContent":"start","layout":"vertical","name":"Uploading File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"alignItems":"center","children":[{"descendants":{"dFKdN":{"width":140}},"id":"w1YQeQ","name":"Progress Bar","ref":"L4EBjh","type":"ref","width":"fill_container"},{"content":"Uploading… 64%","fill":"$color-body-info","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"500","id":"kuRwP","lineHeight":1.2308,"name":"Progress Text","type":"text"}],"gap":12,"id":"D62eaZ","name":"Upload Progress Row","type":"frame","width":"fill_container"}]},"mf3oF":{"icon":"id-card"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Government-issued photo ID","textGrowth":"fixed-width","width":"fill_container"}},"id":"KtJCC","name":"Card — Government-issued photo ID · Uploading","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"A utility bill, lease, or mortgage statement showing your current address."},"Ol81g":{"fill":"$color-surface-negative"},"Ol81g/dUGaZ":{"content":"Upload failed","fill":"$color-body-negative"},"Ol81g/qOy2z":{"fill":"$color-body-negative","icon":"triangle-alert"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"alignItems":"start","descendants":{"OyOE6":{"fill":"$color-surface-negative"},"cFdiS":{"content":"utility-bill-june.pdf"},"gkLZX":{"enabled":false},"sy3t3":{"content":"412 KB · PDF · Not received"},"yb8dX":{"fill":"$color-body-negative","icon":"file-x"}},"gap":8,"id":"ESWk5","justifyContent":"start","layout":"vertical","name":"Failed File Row","ref":"p3DcE","type":"ref","width":"fill_container"},{"children":[{"fill":"$color-body-negative","height":16,"icon":"circle-alert","id":"k2KqPe","library":"lucide","name":"Error Icon","type":"icon","weight":"$stroke-default","width":16},{"content":"We couldn't finish uploading this file because the connection was interrupted — nothing was received. Retrying keeps the file linked to Proof of residence.","fill":"$color-body-negative","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"rFwHt","lineHeight":1.25,"name":"Error Text","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":8,"id":"w6qDzl","name":"Upload Error Row","type":"frame","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Retry upload"},"u24Oe":{"height":14,"icon":"refresh-cw","width":14}},"height":48,"id":"LxqkG","name":"Retry Button","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"home"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Proof of residence","textGrowth":"fixed-width","width":"fill_container"}},"id":"Xj0sg","name":"Card — Proof of residence · Failed","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"descendants":{"JYzDE":{"content":"Sharing something we didn't ask for? Add it here — we'll ask you to note what it is."},"Ol81g/dUGaZ":{"content":"Outstanding","fill":"$color-body-strong"},"Ol81g/qOy2z":{"fill":"$color-body-strong","icon":"circle-dashed"},"Q8tE7c":{"alignItems":"start"},"alTwg":{"enabled":false},"lygAh":{"children":[{"descendants":{"Z9Bmr":{"content":"Add another document","fill":"$color-on-tertiary"},"u24Oe":{"fill":"$color-on-tertiary","icon":"plus"}},"fill":"$color-tertiary","height":48,"id":"gnYKV","name":"Add Other Document","ref":"Yqvtr","type":"ref","width":"fill_container"}]},"mf3oF":{"icon":"plus"},"w0PcO":{"width":"fill_container"},"zGVfT":{"content":"Other document","textGrowth":"fixed-width","width":"fill_container"}},"id":"V1ly4E","name":"Card — Other document","padding":16,"ref":"Wwg0d","type":"ref","width":"fill_container"},{"children":[{"descendants":{"Z9Bmr":{"content":"Submit documents","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":false}},"fill":"$color-primary-disabled","height":48,"id":"X7wtny","name":"Submit Button","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"You can add, replace, or remove files until you submit.","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"Tt3oP","lineHeight":1.3,"name":"Fine Print","textAlign":"center","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":12,"id":"Iuxxf","layout":"vertical","name":"Submit Block","padding":16,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":16,"id":"ZBjwt","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"B1hNRM","layout":"vertical","name":"A-M4 · App — Checklist · Mixed states","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"r9Vv8","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"content":"Document Upload","id":"EdHej","name":"Page Title","ref":"zDTNI","type":"ref"},{"id":"AIG47","name":"Request Summary","ref":"zc9dZ","type":"ref","width":"fill_container"},{"descendants":{"H1yMT":{"content":"Your documents"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary-disabled"}},"id":"c3o1rq","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"children":[{"descendants":{"Lq4jA":{"fill":"$color-surface-positive"},"crgVM":{"fill":"$color-body-positive","icon":"check"},"gcAFV":{"content":"Proof of income"},"kEfRh":{"content":"Uploaded · this visit","fill":"$color-body-positive"}},"id":"Ud4QX","name":"Item · Uploaded","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"Lq4jA":{"fill":"$color-surface-info-layer-1"},"crgVM":{"fill":"$color-body-info","icon":"upload"},"gcAFV":{"content":"Government-issued photo ID"},"kEfRh":{"content":"Uploading… 60%"}},"id":"flB3z","name":"Item · Uploading","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"Lq4jA":{"fill":"$color-surface-negative"},"crgVM":{"fill":"$color-body-negative","icon":"triangle-alert"},"gcAFV":{"content":"Proof of residence"},"kEfRh":{"content":"Upload failed — tap to retry","fill":"$color-body-negative"}},"id":"v7eXiT","name":"Item · Failed","ref":"NmACi","type":"ref","width":"fill_container"},{"descendants":{"crgVM":{"icon":"file-plus"},"gcAFV":{"content":"Other document"},"kEfRh":{"content":"Add something we didn't list"}},"id":"lvtn2","name":"Item · Other","ref":"NmACi","type":"ref","width":"fill_container"}],"gap":"$gap-y-list","id":"Yl5CK","layout":"vertical","name":"Document List","type":"frame","width":"fill_container"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads go to your loan team as you send them. This checklist isn't saved as a receipt after you leave."},"rwSkO":{"content":"Shown for this visit only"}},"id":"pfN5E","name":"Session Note","ref":"vbCIR","type":"ref","width":"fill_container"}],"gap":16,"id":"YSP94","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"O8sAyn","layout":"vertical","name":"B3 · App — Document Upload · Overview (mixed states)","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"K2JjDG","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 1 of 4"},"KFKfP":{"content":"0 of 4 uploaded"}},"id":"y8DGT","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Proof of income","id":"jWgvw","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"A recent pay stub, W-2, or benefits statement from the last 60 days. One file per document.","id":"fzmN6","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"id":"N1y17","name":"Selected File","ref":"pnQBG","type":"ref","width":"fill_container"},{"content":"You can replace or remove this file before you upload it.","id":"Vjkp6","name":"Replace Hint","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"children":[{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document"},"u24Oe":{"enabled":true,"icon":"upload"}},"height":48,"id":"CfF6n","name":"Upload CTA","ref":"Yqvtr","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Cancel","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":48,"id":"E0EWM5","name":"Cancel CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":"$gap-y-pair","id":"z7AcD","layout":"vertical","name":"Actions","type":"frame","width":"fill_container"}],"gap":16,"id":"IT0DW","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"S1lRh1","layout":"vertical","name":"B4 · App — Step · File selected","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"IobGa","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 2 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary"}},"id":"EqYGK","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Government-issued photo ID","id":"tmgG2","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"Driver's license, state ID, or passport — include the back if it has information.","id":"n96GI","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"ZmvX6":{"enabled":true},"bMUtm":{"fill":"$color-body-negative"},"dWwmd":{"content":"Tap to choose a different file"},"eafn2":{"fill":"$color-surface-base"},"zGS4M":{"content":"That file is 18 MB — larger than the 10 MB limit. Choose a smaller PDF, JPG, or PNG."}},"fill":"$color-surface-negative","id":"X7B12s","name":"Upload Zone · Error","ref":"LMMoY","stroke":"$color-line-negative","type":"ref","width":"fill_container"},{"content":"Nothing was uploaded — your other documents aren't affected.","id":"ACMB7","name":"No Harm Note","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":true,"fill":"$color-on-primary-disabled","icon":"upload"}},"fill":"$color-primary-disabled","height":48,"id":"p2Vb56","name":"Upload CTA Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"E1wzl7","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"S68zZ","layout":"vertical","name":"B5 · App — Step · File validation error","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"w9nTM","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 4 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"VUpAy":{"fill":"$color-primary"}},"id":"Y3VRQD","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Other document","id":"ws8oW","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"content":"Sending something we didn't list? Tell us what it is so your loan team can route it correctly.","id":"DsxKN","name":"Doc Description","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"I4Tg8":{"content":"What document are you uploading?"},"TGql2":{"stroke":"$color-line-negative","strokeWidth":2},"WQuap":{"content":"e.g., Employment verification letter"},"vxQZG":{"content":"Enter the document type before you upload.","enabled":true}},"id":"D3zrZd","name":"Note Input · Error","ref":"eMyOS","type":"ref","width":"fill_container"},{"descendants":{"A5tQkx":{"content":"0.8 MB · PDF"},"fU25p":{"content":"employment-letter.pdf"}},"id":"QQthp","name":"Selected File","ref":"pnQBG","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Upload document","fill":"$color-on-primary-disabled"},"u24Oe":{"enabled":true,"fill":"$color-on-primary-disabled","icon":"upload"}},"fill":"$color-primary-disabled","height":48,"id":"ZY9LJ","name":"Upload CTA Disabled","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"Add the document type above to enable upload.","id":"M38Ih","name":"Enable Hint","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"gap":16,"id":"WXtUt","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"VkQpT","layout":"vertical","name":"B6 · App — Step · Other document · Note required","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"ROtgX","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 2 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"fMAN4":{"fill":"$color-primary"}},"id":"WtRe9","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Government-issued photo ID","id":"eh3uS","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"descendants":{"A5tQkx":{"content":"3.4 MB · JPG"},"FMBpw":{"content":"Uploading… 60%"},"TyPrI":{"enabled":false},"fU25p":{"content":"drivers-license.jpg"},"q4j0v":{"enabled":true},"rPYod":{"width":190}},"id":"RqxFI","name":"Uploading File","ref":"pnQBG","type":"ref","width":"fill_container"},{"content":"Keep this page open while we upload your file.","id":"aajfe","name":"Keep Open Note","ref":"p2CLM8","textGrowth":"fixed-width","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Cancel upload","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":48,"id":"vfB8F","name":"Cancel Upload CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":16,"id":"fMKY4","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"twv9F","layout":"vertical","name":"B7 · App — Step · Uploading","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"$color-surface-base","id":"VhRL4","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":[{"descendants":{"H1yMT":{"content":"Document 4 of 4"},"KFKfP":{"content":"1 of 4 uploaded"},"VUpAy":{"fill":"$color-primary"}},"id":"SxQta","name":"Progress","ref":"TQeTt","type":"ref","width":"fill_container"},{"content":"Other document","id":"a9aaoJ","name":"Doc Title","ref":"J1tfP5","type":"ref"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Something went wrong on our end — your file and note are still here. Try again, or come back later."},"YytP0":{"fill":"$color-body-negative","icon":"triangle-alert"},"rwSkO":{"content":"We couldn't upload your file"}},"fill":"$color-surface-negative","id":"AsxCT","name":"Failure Alert","ref":"vbCIR","stroke":"$color-line-negative","type":"ref","width":"fill_container"},{"descendants":{"BY85A":{"content":"Employment verification letter","enabled":true,"width":"fill_container"},"I4Tg8":{"content":"What document are you uploading?"},"WQuap":{"enabled":false},"j2tw8":{"content":"Your note is saved for this attempt.","enabled":true}},"id":"RRYq2","name":"Note Input · Filled","ref":"eMyOS","type":"ref","width":"fill_container"},{"descendants":{"A5tQkx":{"content":"0.8 MB · PDF"},"fU25p":{"content":"employment-letter.pdf"}},"id":"J9qeQK","name":"Failed File","ref":"pnQBG","type":"ref","width":"fill_container"},{"children":[{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Try again"},"u24Oe":{"enabled":true,"icon":"refresh-cw"}},"height":48,"id":"w7phC","name":"Retry CTA","ref":"Yqvtr","type":"ref","width":"fill_container"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Choose a different file","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":48,"id":"c7FO7p","name":"Choose Different CTA","ref":"Yqvtr","type":"ref","width":"fill_container"}],"gap":"$gap-y-pair","id":"O5NYp","layout":"vertical","name":"Actions","type":"frame","width":"fill_container"}],"gap":16,"id":"lUJCe","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"mA5La","layout":"vertical","name":"B8 · App — Step · Upload failed · Retry","theme":{"Breakpoint":"Mobile"},"type":"frame","width":390},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"$color-surface-base","height":80,"id":"nPuEL","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":[{"children":[{"content":"Document Upload","id":"P6m2w","name":"Page Title","ref":"zDTNI","type":"ref"},{"content":"Upload the documents requested for your personal loan. You can add them in any order.","id":"GyIPS","name":"Page Intro","ref":"Ynwlh","textGrowth":"fixed-width","type":"ref","width":"fill_container"}],"gap":"$gap-y-pair","id":"d3dwd","layout":"vertical","name":"Page Header","type":"frame","width":"fill_container"},{"children":[{"children":"...","gap":"$gap-y-list","id":"cO4OT","layout":"vertical","name":"Rail","type":"frame","width":400},{"children":"...","cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":16,"id":"w1ErlI","layout":"vertical","name":"Step Card","padding":32,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":"fill_container"}],"gap":32,"id":"mNBeB","name":"Columns","type":"frame","width":"fill_container"},{"descendants":{"A5vNne":{"enabled":false},"KmDVy":{"enabled":true},"M55Yl":{"content":"Uploads go to your loan team as you send them. This checklist isn't saved as a receipt after you leave."},"rwSkO":{"content":"Shown for this visit only"}},"id":"zsPBb","name":"Session Note","ref":"vbCIR","type":"ref","width":"fill_container"}],"gap":24,"id":"qAOta","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"$color-surface-backdrop","id":"bPgqn","layout":"vertical","name":"B10 · Web Desktop — Guided upload","theme":{"Breakpoint":"Desktop"},"type":"frame","width":1440}]
> ```
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "I94Kf"
> }
> ```
>
> ```text
> Screenshot generated for node: I94Kf
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_guidelines
>
> ```json
> {
>   "category": "guide",
>   "name": "Code"
> }
> ```
>
> ```text
> # Instructions when generating code from .pen files
>
> - IMPORTANT: Make sure to use the frontend frameworks that are already used in the project. For example, if the project is using React, always generate compliant React code.
> - IMPORTANT: After generating code, DO NOT output Markdown files of the changes. Just stick to generating code and nothing else.
> - IMPORTANT: Make sure to use and leverage the CSS libraries, design systems and other UI coding utilities that are already used in the project. For example, if the project is using Tailwind, make sure to style your code using Tailwind.
> - IMPORTANT: Make sure when using CSS libraries and frameworks that you identify the installed version and always use the correct APIs that are supported by the installed versions.
> - IMPORTANT: When generating code from .pen designs, always make sure to use the same text labels, icons ans spacing as what is in the design.
> - DO NOT create documentations for the changes when generating code from design.
> - Explore the workspace to find if the design elements you are translating to code are already exist in the code base.
> - Make sure to awlays use the correct font, icons, and UI details like border radius when generating the code from a design.
> - If you are not sure what frontend frameworks and UI libraries are used in the project, explore it in the workspace.
> - If the UI design element you are turning code into already exist in the codebase, update it, not generate a new one.
> - When changing existing components and UI elements in the code, make sure to not break the functionality.
>
> ## Initial Setup
>
> ### Project Initialization
>
> - Identify the frontend framework and language used in the project (e.g., React, Vue, Angular, Svelte, etc.)
> - Use the same framework, language, and conventions as the existing project
> - Identify the styling approach (e.g., Tailwind, CSS Modules, styled-components, etc.)
> - If using Tailwind, refer to 'tailwind' topic for implementation details
>
> ### Pre-Implementation Verification
>
> - Ensure CSS/styles compile without errors
> - Verify all CSS variables are accessible (if using CSS custom properties)
> - Confirm styling system is properly configured and loaded
>
> ## Component Implementation Workflow
>
> ### Step 1: Component Analysis and Extraction
>
> #### 1A. Identify Required Components
>
> - Read the target frame/design
> - Identify which reusable components (refs) are used in this specific frame
> - **IMPORTANT**: Only process components that appear in the current frame
> - Count instances of each component (helps catch missing instances later)
> - Document: "Component X used N times"
>
> #### 1B. Extract Component Definitions
>
> - Use `batch_get` to get component structure
> - Extract full component tree with all nested children
> - Process components ONE AT A TIME:
>   1. Extract component with full depth
>   2. Recreate in React (Step 2)
>   3. Validate (Step 3)
>   4. Move to next component only after validation passes
>
> #### 1C. Map Component Instances
>
> - Read the target frame structure
> - For each component, identify ALL instances
> - Document for each instance:
>   * Instance ID and location
>   * Nested component overrides (`descendants` map)
>   * Props/values being passed
> - **Nested Component Analysis**:
>   * Check base component definition: Does it always include nested components?
>   * Check all instances: Do any override/hide nested components?
>   * **Decision Rule**:
>     - If NO instances override away → Nested component is REQUIRED (always render)
>     - If ANY instances override away → Nested component is OPTIONAL (conditional render)
>   * Verify each nested component ref in base definition against all instances
> - **Visual Verification**:
>   * Use `get_screenshot` on instances in context (not just base definition)
>   * Verify visible elements (borders, backgrounds, shadows)
>   * Check if styling should be on outer container or nested elements
>   * Match visual appearance in frame context
>
> ### Step 2: React Component Creation
>
> #### Component Structure
>
> - Create `.tsx` file in `src/components/` with component name
> - Use named exports
> - Define TypeScript interfaces for all props
>
> #### Props Interface Design
>
> - Review ALL instances from Step 1C mapping
> - Support all properties used by any instance (including optional ones)
> - **Nested Component Rendering**:
>   * Apply decision rule from Step 1C:
>     - NO instances override away → Always render (required)
>     - ANY instances override away → Conditional render (optional)
>   * Verify against instance mapping before making props optional
> - Document required vs optional props based on actual usage
> - Cross-reference with instance mapping to ensure completeness
>
> #### Style Implementation
>
> - Use Tailwind classes exclusively (NO inline styles)
> - Refer to tailwind.md sections: "Layout Conversion", "Style Implementation", "CSS Custom Properties and Font Stacks"
> - Match design values exactly (use arbitrary values when needed)
> - Use CSS variables for colors (no hardcoded values)
>
> #### SVG Path Implementation
>
> When implementing SVG elements from the design:
>
> **1. Extract Exact Geometry**
> - Use `batch_get` with `includePathGeometry: true`
> - NEVER approximate paths - extract exact `geometry` property from design
>
> **2. Properties to Extract**
> - `geometry` - use as `d` attribute in `<path>`
> - `fill` - convert design variables to CSS variables (e.g., `$primary` → `var(--primary)`)
> - `stroke` properties if present (`strokeColor`, `strokeThickness`)
> - `width` and `height` for viewBox calculation
>
> **3. Implementation**
> - Use exact geometry string in `d` attribute
> - Set `viewBox="0 0 {width} {height}"`
> - Preserve all stroke properties
> - For styling, see tailwind.md "SVG Styling" section for Tailwind-specific syntax
>
> **4. Logos and Complex Icons**
> - Extract complete geometry even if very long
> - Don't simplify or approximate
> - Maintain precision for brand assets
>
> ### Step 3: Component Validation
>
> 1. **Visual Verification**:
>    - Use `get_screenshot` on design component
>    - Compare with rendered React component
>    - Verify pixel-perfect match
>
> 2. **Style Verification**:
>    - Inspect computed CSS properties
>    - Verify dimensions, spacing, colors, typography match design
>    - Ensure CSS variables resolve correctly
>
> 3. **Behavior Verification**:
>    - Test fill_container elements expand properly
>    - Test fit_content elements size to content
>    - Verify no overflow issues
>
> 4. **Iterative Fixing**:
>    - Fix discrepancies immediately
>    - Re-validate after each fix
>    - Only proceed to next component when current is perfect
>
> ### Step 4: Frame Integration
>
> #### Pre-Integration Analysis
>
> - Read complete target frame with `maxDepth: 10`
> - Map component tree structure
> - Identify all component instances
>
> #### Instance Configuration
>
> - Document all property overrides for each instance
> - Verify nested component overrides
> - Create instance mapping with exact props
> - **Layout Context**:
>   * Check parent container layout mode
>   * If flex container with multiple `fill_container` children → each needs `flex-1`
>   * Document which components need `flex-1` based on parent layout
>
> #### Completeness Verification
>
> - Count component instances in design vs implementation
> - Verify all props match design overrides
> - Confirm nested components follow required/optional decision from Step 1C
> - Use checklist:
>   * [ ] All instances accounted for
>   * [ ] All props match overrides
>   * [ ] Nested components render correctly (always vs conditional)
>   * [ ] Layout classes applied correctly (`flex-1`, etc.)
>
> ### Step 5: Final Validation
>
> - Verify component positions and spacing match design
> - Verify colors resolve correctly
> - Verify typography matches
> - Verify responsive behavior:
>   * Layout adapts to different viewport sizes
>   * Scrollable areas work when content exceeds space
>   * No horizontal overflow
>   * `fill_container` elements expand properly
>   * `fit_content` elements size to content
> - Verify no console errors
> - Verify all interactive elements function correctly
>
> ## Key Principles
>
> - Use the project's styling system consistently (avoid inline styles when possible)
> - If using Tailwind, see tailwind.md for Tailwind-specific implementation details
> - Match design values exactly
> - Use the project's color system (CSS variables, design tokens, theme files, etc.) - avoid hardcoded values
> - Process components one at a time with validation
> - Verify nested component rendering requirements
> - Ensure proper styling and layout based on parent context
> ```
>
> MCP tool call
>
> pencil.batch_get
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeIds": [
>     "Yqvtr",
>     "vbCIR",
>     "eMyOS",
>     "kwrZm",
>     "p3DcE",
>     "Wwg0d",
>     "q50qn",
>     "zc9dZ",
>     "TQeTt",
>     "LMMoY",
>     "pnQBG",
>     "NmACi"
>   ],
>   "readDepth": 4,
>   "resolveInstances": false,
>   "resolveVariables": false
> }
> ```
>
> ```text
> [{"alignItems":"center","children":[{"fill":"$color-on-primary","height":16,"icon":"pencil","id":"u24Oe","library":"lucide","name":"Leading Icon","type":"icon","width":16},{"content":"Button","fill":"$color-on-primary","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"Z9Bmr","letterSpacing":"$font-label-small-1-letter-spacing","lineHeight":1.6,"name":"Label","type":"text"},{"enabled":false,"fill":"$color-on-primary","height":16,"icon":"pencil","id":"B6bSK","library":"lucide","name":"Trailing Icon","type":"icon","width":16,"x":0,"y":0},{"enabled":false,"id":"P0AFdL","name":"Inline Loader","ref":"hW7DI","type":"ref"}],"cornerRadius":"$shape-radius-full","fill":"$color-primary","gap":"$gap-x-component-default","height":40,"id":"Yqvtr","justifyContent":"center","name":"Button","padding":[0,"$padding-x-component-default",0,"$padding-x-component-small-1"],"reusable":true,"type":"frame","x":840,"y":544},{"children":[{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":24,"icon":"info","id":"YytP0","library":"lucide","name":"Status Icon","type":"icon","width":24},{"content":"Alert","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-body-default-size","fontWeight":"normal","id":"rwSkO","lineHeight":1.3333,"name":"Title","type":"text"}],"gap":"$gap-x-pair","id":"osE4q","name":"Icon \u0026 Text","type":"frame"},{"alignItems":"center","children":[{"fill":"$color-body-emphasis","height":24,"icon":"x","id":"CdMXI","library":"lucide","name":"Close","type":"icon","width":24}],"height":48,"id":"A5vNne","justifyContent":"center","layout":"vertical","name":"Close Target","type":"frame","width":48}],"id":"Y8tcuq","justifyContent":"space_between","name":"Default Row","type":"frame","width":"fill_container"},{"children":[{"content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"M55Yl","lineHeight":1.25,"name":"Supporting Text","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"enabled":false,"id":"KmDVy","name":"Supporting Row","padding":[0,12,"$gap-tile-small",0],"type":"frame","width":"fill_container(0)","x":0,"y":0},{"alignItems":"center","children":[{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Action","fill":"$color-on-primary","fontSize":"$font-label-small-1-size","lineHeight":1.6},"u24Oe":{"enabled":false}},"fill":"$color-primary","gap":"$gap-x-component-default","height":32,"id":"qyuNg","name":"Action","padding":[0,12],"ref":"Yqvtr","type":"ref"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Dismiss","fill":"$color-on-tertiary","fontSize":"$font-label-small-1-size","lineHeight":1.6},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","gap":"$gap-x-component-default","height":32,"id":"Myx8L","name":"Dismiss","padding":[0,12],"ref":"Yqvtr","type":"ref"}],"enabled":false,"gap":"$gap-row-small","id":"LvumN","name":"Button Row","padding":[0,0,"$dimension-12",0],"type":"frame","x":0,"y":0}],"cornerRadius":"$shape-radius-default","fill":"$color-surface-info","gap":4,"id":"vbCIR","layout":"vertical","name":"Alert","padding":[4,4,4,16],"reusable":true,"stroke":"$color-line-info","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":342,"x":840,"y":644},{"children":[{"alignItems":"center","children":[{"content":"Email","fill":"$color-core-blue-800","fontFamily":"$font-family-primary","fontSize":"$font-label-default-size","fontWeight":"500","id":"I4Tg8","letterSpacing":"$font-label-default-letter-spacing","lineHeight":1.4118,"name":"Label","type":"text"},{"content":"(optional)","enabled":false,"fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"j8kZE","letterSpacing":"$font-label-small-1-letter-spacing","lineHeight":1.6,"name":"Optional","type":"text","x":0,"y":0},{"content":"What's this?","enabled":false,"fill":"$color-body-info","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"500","id":"hYNjy","letterSpacing":"$font-label-small-2-letter-spacing","lineHeight":1.2308,"name":"Tooltip Label","type":"text","x":0,"y":0}],"gap":"$gap-x-component-default","id":"X0AC1m","name":"Label Row","type":"frame","width":"fill_container"},{"children":[{"alignItems":"center","children":[{"enabled":false,"fill":"$color-body-default","height":24,"icon":"mail","id":"vCnzw","library":"lucide","name":"Leading Icon","type":"icon","width":24,"x":0,"y":0},{"content":"$","enabled":false,"fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-large-1-size","fontWeight":"normal","id":"i3u30X","letterSpacing":"$font-label-large-1-letter-spacing","lineHeight":1.2632,"name":"Prefix Text","type":"text","x":0,"y":0},{"content":"myemail-email.cob","enabled":false,"fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-large-1-size","fontWeight":"500","id":"BY85A","letterSpacing":"$font-label-large-1-letter-spacing","lineHeight":1.2632,"name":"Input Text","textGrowth":"fixed-width","type":"text","width":250,"x":0,"y":0},{"content":"name@email.com","fill":"$color-body-subtle","fontFamily":"$font-family-primary","fontSize":"$font-label-large-1-size","fontWeight":"500","id":"WQuap","letterSpacing":"$font-label-large-1-letter-spacing","lineHeight":1.2632,"name":"Placeholder Text","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"content":"myemail@","enabled":false,"fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-large-1-size","fontWeight":"500","id":"QVI1v","letterSpacing":"$font-label-large-1-letter-spacing","lineHeight":1.2632,"name":"Typing Text","textGrowth":"fixed-width","type":"text","width":250,"x":0,"y":0},{"content":"|","enabled":false,"fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-large-1-size","fontWeight":"500","id":"YKLFS","lineHeight":1.2632,"name":"Text Cursor","type":"text","x":0,"y":0},{"content":"/mo","enabled":false,"fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-large-1-size","fontWeight":"normal","id":"ChuJ8","letterSpacing":"$font-label-large-1-letter-spacing","lineHeight":1.2632,"name":"Suffix Text","type":"text","x":0,"y":0},{"enabled":false,"fill":"$color-body-default","height":24,"icon":"circle-x","id":"dae56","library":"lucide","name":"Clear Button","type":"icon","width":24,"x":0,"y":0},{"enabled":false,"fill":"$color-body-default","height":24,"icon":"eye","id":"Z3mMq","library":"lucide","name":"Mask Toggle","type":"icon","width":24,"x":0,"y":0}],"cornerRadius":"$shape-radius-default","gap":"$gap-x-component-default","height":48,"id":"TGql2","name":"Input Field","padding":[0,"$padding-x-component-small-3"],"stroke":"$color-line-emphasis","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":"fill_container"}],"cornerRadius":"$shape-radius-default","fill":"$color-surface-layer-1","height":48,"id":"piCVD","name":"Field Wrapper","type":"frame","width":"fill_container"},{"content":"This is some helper text","enabled":false,"fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"j2tw8","letterSpacing":"$font-label-small-1-letter-spacing","lineHeight":1.6,"name":"Helper Text","type":"text","x":0,"y":0},{"content":"Please enter a valid email","enabled":false,"fill":"$color-body-negative","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"vxQZG","letterSpacing":"$font-label-small-1-letter-spacing","lineHeight":1.6,"name":"Error Text","type":"text","x":0,"y":0},{"content":"Looks good","enabled":false,"fill":"$color-body-positive","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"TkMPX","letterSpacing":"$font-label-small-1-letter-spacing","lineHeight":1.6,"name":"Success Text","type":"text","x":0,"y":0}],"gap":"$gap-y-pair","id":"eMyOS","layout":"vertical","name":"Email Input","reusable":true,"type":"frame","width":358,"x":1465,"y":630},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":24,"icon":"upload","id":"y8X77J","library":"lucide","name":"Upload Icon","type":"icon","weight":"$stroke-default","width":24}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-info","height":48,"id":"KdY4r","justifyContent":"center","name":"Upload Icon Circle","type":"frame","width":48},{"alignItems":"center","children":[{"content":"Drag and drop your file here, or","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"HksuX","lineHeight":1.25,"name":"Drag Text","type":"text"},{"content":"browse files","fill":"$color-body-info","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"500","id":"ZZQNu","lineHeight":1.25,"name":"Browse Link","type":"text"}],"gap":4,"id":"N77Psq","name":"Instruction Row","type":"frame"},{"content":"PDF, JPG, or PNG · 10 MB max","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"yVmVU","lineHeight":1.4286,"name":"File Hint","type":"text"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":8,"id":"kwrZm","justifyContent":"center","layout":"vertical","name":"Drop Zone","padding":[28,24],"reusable":true,"stroke":"$color-line-moderate","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":760},{"alignItems":"center","children":[{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":20,"icon":"file-text","id":"yb8dX","library":"lucide","name":"File Icon","type":"icon","weight":"$stroke-default","width":20}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-info","height":40,"id":"OyOE6","justifyContent":"center","name":"File Icon Circle","type":"frame","width":40},{"children":[{"content":"document.pdf","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"cFdiS","lineHeight":1.6,"name":"File Name","type":"text"},{"content":"215 KB · PDF","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"sy3t3","lineHeight":1.2308,"name":"File Meta","type":"text"}],"gap":2,"id":"J8Zgb","layout":"vertical","name":"Name \u0026 Meta","type":"frame"}],"gap":12,"id":"NrMCE","name":"File Info","type":"frame"},{"alignItems":"center","children":[{"descendants":{"Z9Bmr":{"content":"Replace","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","gap":"$gap-x-component-small","height":32,"id":"gkLZX","name":"Replace","padding":[0,12],"ref":"Yqvtr","type":"ref"},{"descendants":{"Z9Bmr":{"content":"Remove","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","gap":"$gap-x-component-small","height":32,"id":"JZJIe","name":"Remove","padding":[0,12],"ref":"Yqvtr","type":"ref"}],"gap":4,"id":"JMyrJ","name":"Actions","type":"frame"}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-layer-2","gap":16,"id":"p3DcE","justifyContent":"space_between","name":"Selected File Row","padding":[12,16],"reusable":true,"type":"frame","width":760},{"children":[{"alignItems":"center","children":[{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-strong","height":20,"icon":"file-text","id":"mf3oF","library":"lucide","name":"Doc Icon","type":"icon","weight":"$stroke-default","width":20}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-layer-2","height":40,"id":"alTwg","justifyContent":"center","name":"Doc Icon Circle","type":"frame","width":40},{"content":"Document name","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-large-1-size","fontWeight":"700","id":"zGVfT","lineHeight":1.2632,"name":"Doc Title","type":"text"}],"gap":12,"id":"w0PcO","name":"Title Group","type":"frame"},{"descendants":{"dUGaZ":{"content":"Outstanding","fill":"$color-body-strong"},"qOy2z":{"enabled":true,"fill":"$color-body-strong","icon":"circle-dashed"}},"fill":"$color-surface-layer-2","id":"Ol81g","name":"Status Tag","ref":"vo5O2","type":"ref","width":"fit_content"}],"gap":16,"id":"Q8tE7c","justifyContent":"space_between","name":"Card Header","type":"frame","width":"fill_container"},{"content":"Description of the document we need and which formats work.","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-body-supporting-size","fontWeight":"normal","id":"JYzDE","lineHeight":1.25,"name":"Doc Description","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"children":[{"id":"ScMkx","name":"Drop Zone","ref":"kwrZm","type":"ref","width":"fill_container"}],"gap":12,"id":"lygAh","layout":"vertical","name":"Card Body","slot":["kwrZm","p3DcE"],"type":"frame","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":16,"id":"Wwg0d","layout":"vertical","name":"Document Checklist Card","padding":24,"reusable":true,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":808},{"children":[{"children":[{"content":"ACTIVE REQUEST","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-3-size","fontWeight":"700","id":"gEGjA","letterSpacing":0.8,"lineHeight":1.4545,"name":"Kicker","type":"text"},{"content":"Personal loan","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-headline-section-size","fontWeight":"700","id":"Dfi07","lineHeight":1.0909,"name":"Request Title","type":"text"},{"content":"Request #4821 · Requested Jul 10, 2026","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"aFBQC","lineHeight":1.4286,"name":"Request Meta","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":4,"id":"r1cRwa","layout":"vertical","name":"Request Context","type":"frame","width":"fill_container"},{"fill":"$color-line-muted","height":1,"id":"fhxgP","name":"Divider 1","type":"rectangle","width":"fill_container"},{"children":[{"alignItems":"center","children":[{"content":"Session progress","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"TLIZV","lineHeight":1.6,"name":"Progress Title","type":"text"},{"content":"0 of 3 uploaded","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"rq4MC","lineHeight":1.6,"name":"Progress Count","type":"text"}],"id":"zq31w","justifyContent":"space_between","name":"Progress Labels","type":"frame","width":"fill_container"},{"descendants":{"dFKdN":{"enabled":false}},"id":"Ftrx3","name":"Progress Bar","ref":"L4EBjh","type":"ref","width":"fill_container"}],"gap":8,"id":"A4q6cU","layout":"vertical","name":"Session Progress","type":"frame","width":"fill_container"},{"children":[{"descendants":{"gv6o1":{"content":"Proof of income"}},"id":"S2c8h4","name":"Item — Proof of income","ref":"nIrAd","type":"ref","width":"fill_container"},{"descendants":{"gv6o1":{"content":"Government-issued photo ID"}},"id":"OSslv","name":"Item — Government-issued photo ID","ref":"nIrAd","type":"ref","width":"fill_container"},{"descendants":{"gv6o1":{"content":"Proof of residence"}},"id":"jHX6H","name":"Item — Proof of residence","ref":"nIrAd","type":"ref","width":"fill_container"},{"descendants":{"PYIPa":{"icon":"circle-plus"},"ctoCw":{"content":"Optional"},"gv6o1":{"content":"Other document"}},"id":"EI5rT","name":"Item — Other document","ref":"nIrAd","type":"ref","width":"fill_container"}],"gap":10,"id":"OXZTD","layout":"vertical","name":"Document List","type":"frame","width":"fill_container"},{"fill":"$color-line-muted","height":1,"id":"HxnJY","name":"Divider 2","type":"rectangle","width":"fill_container"},{"children":[{"fill":"$color-body-info","height":16,"icon":"info","id":"D5mxP8","library":"lucide","name":"Note Icon","type":"icon","weight":"$stroke-default","width":16},{"content":"Uploads are processed after you leave this page; this list won't be saved as a receipt.","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"f3aqwv","lineHeight":1.3,"name":"Note Text","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"cornerRadius":"$shape-radius-default","fill":"$color-surface-info","gap":8,"id":"M5aLuu","name":"Session Note","padding":12,"type":"frame","width":"fill_container"},{"descendants":{"Z9Bmr":{"content":"Submit documents"},"u24Oe":{"enabled":false}},"height":48,"id":"D76Wa","name":"Submit Button","ref":"Yqvtr","type":"ref","width":"fill_container"},{"content":"You can add, replace, or remove files until you submit.","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-label-small-2-size","fontWeight":"normal","id":"elVGp","lineHeight":1.3,"name":"Fine Print","textAlign":"center","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":20,"id":"q50qn","layout":"vertical","name":"Request Summary Rail","padding":24,"reusable":true,"stroke":"$color-line-muted","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":360},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":20,"icon":"folder-open","id":"zoqYC","library":"lucide","name":"Request Icon","type":"icon","width":20}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-base","height":40,"id":"l3VMP","justifyContent":"center","name":"Request Icon Wrap","type":"frame","width":40},{"children":[{"content":"Personal loan · Request #4821","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"ltc64","lineHeight":1.3333,"name":"Request Title","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"content":"Requested Jul 10, 2026 · 4 documents","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"Yn30d","lineHeight":1.4286,"name":"Request Meta","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":2,"id":"PaiUw","layout":"vertical","name":"Request Text","type":"frame","width":"fill_container"}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-info","gap":"$gap-x-row","id":"zc9dZ","name":"B / Request Summary","padding":16,"reusable":true,"type":"frame","width":358},{"children":[{"alignItems":"center","children":[{"content":"Document 1 of 4","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"H1yMT","lineHeight":1.6,"name":"Progress Step","type":"text"},{"content":"0 of 4 uploaded","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"KFKfP","lineHeight":1.4286,"name":"Progress Count","type":"text"}],"id":"JVRLV","justifyContent":"space_between","name":"Progress Labels","type":"frame","width":"fill_container"},{"children":[{"cornerRadius":"$shape-radius-full","fill":"$color-primary","height":4,"id":"vfV7X","name":"Seg 1","type":"rectangle","width":"fill_container"},{"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":4,"id":"fMAN4","name":"Seg 2","type":"rectangle","width":"fill_container"},{"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":4,"id":"s88Bq0","name":"Seg 3","type":"rectangle","width":"fill_container"},{"cornerRadius":"$shape-radius-full","fill":"$color-line-muted","height":4,"id":"VUpAy","name":"Seg 4","type":"rectangle","width":"fill_container"}],"gap":4,"id":"etFM8","name":"Progress Segments","type":"frame","width":"fill_container"}],"gap":"$gap-y-pair","id":"TQeTt","layout":"vertical","name":"B / Progress Header","reusable":true,"type":"frame","width":358},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":24,"icon":"upload","id":"bMUtm","library":"lucide","name":"Zone Icon","type":"icon","width":24}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-info-layer-1","height":48,"id":"eafn2","justifyContent":"center","name":"Zone Icon Wrap","type":"frame","width":48},{"content":"Tap to choose a file","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-default-size","fontWeight":"500","id":"dWwmd","lineHeight":1.4118,"name":"Zone Title","type":"text"},{"content":"PDF, JPG or PNG · up to 10 MB","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"ch5be","lineHeight":1.4286,"name":"Zone Hint","type":"text"},{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Browse files","fill":"$color-on-secondary"},"u24Oe":{"enabled":false}},"enabled":false,"fill":"$color-secondary","height":40,"id":"lhqAJ","name":"Browse Button","padding":[0,20],"ref":"Yqvtr","stroke":"$color-line-secondary","strokeAlignment":"inner","strokeWidth":1,"type":"ref"},{"children":[{"fill":"$color-body-negative","height":16,"icon":"circle-alert","id":"ch71Q","library":"lucide","name":"Zone Error Icon","type":"icon","width":16},{"content":"This file type isn't supported. Choose a PDF, JPG, or PNG under 10 MB.","fill":"$color-body-negative","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"zGS4M","lineHeight":1.4,"name":"Zone Error Text","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"enabled":false,"gap":"$gap-x-pair","id":"ZmvX6","name":"Zone Error","type":"frame","width":"fill_container(326)","x":0,"y":0}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-layer-1","gap":"$gap-y-pair","id":"LMMoY","layout":"vertical","name":"B / Upload Zone","padding":[24,16],"reusable":true,"stroke":"$color-line-default","strokeWidth":"$stroke-default","type":"frame","width":358},{"children":[{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-info","height":20,"icon":"file-text","id":"qWT4m","library":"lucide","name":"File Icon","type":"icon","width":20}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-info-layer-1","height":40,"id":"qKPpy","justifyContent":"center","name":"File Icon Wrap","type":"frame","width":40},{"children":[{"content":"paystub-june-2026.pdf","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"fU25p","lineHeight":1.3333,"name":"File Name","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"content":"1.2 MB · PDF","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"A5tQkx","lineHeight":1.4286,"name":"File Meta","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":2,"id":"R5VzQ","layout":"vertical","name":"File Text","type":"frame","width":"fill_container"},{"alignItems":"center","children":[{"descendants":{"B6bSK":{"enabled":false},"Z9Bmr":{"content":"Replace","fill":"$color-on-tertiary"},"u24Oe":{"enabled":false}},"fill":"$color-tertiary","height":36,"id":"u56Xi","name":"Replace Button","padding":[0,12],"ref":"Yqvtr","type":"ref"},{"alignItems":"center","children":[{"fill":"$color-body-default","height":20,"icon":"trash-2","id":"LJdON","library":"lucide","name":"Remove Icon","type":"icon","width":20}],"cornerRadius":"$shape-radius-full","height":36,"id":"K8mysH","justifyContent":"center","name":"Remove Button","type":"frame","width":36}],"gap":4,"id":"TyPrI","name":"File Actions","type":"frame"}],"gap":12,"id":"Yaheu","name":"File Main","type":"frame","width":"fill_container"},{"children":[{"content":"Uploading… 60%","fill":"$color-body-default","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"normal","id":"FMBpw","lineHeight":1.6,"name":"File Progress Status","type":"text"},{"children":[{"cornerRadius":"$shape-radius-full","fill":"$color-primary","height":6,"id":"rPYod","name":"File Progress Fill","type":"rectangle","width":200}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-layer-2","height":6,"id":"qADQY","name":"File Progress Track","type":"frame","width":"fill_container"}],"enabled":false,"gap":4,"id":"q4j0v","layout":"vertical","name":"File Progress","padding":[0,0,4,0],"type":"frame","width":"fill_container(334)","x":0,"y":0}],"cornerRadius":"$shape-radius-medium-1","fill":"$color-surface-base","gap":"$gap-y-pair","id":"pnQBG","layout":"vertical","name":"B / File Row","padding":12,"reusable":true,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":358},{"alignItems":"center","children":[{"alignItems":"center","children":[{"fill":"$color-body-strong","height":20,"icon":"file-text","id":"crgVM","library":"lucide","name":"Doc State Icon","type":"icon","width":20}],"cornerRadius":"$shape-radius-full","fill":"$color-surface-layer-2","height":40,"id":"Lq4jA","justifyContent":"center","name":"Doc State Icon Wrap","type":"frame","width":40},{"children":[{"content":"Document name","fill":"$color-body-emphasis","fontFamily":"$font-family-primary","fontSize":"$font-label-small-1-size","fontWeight":"500","id":"gcAFV","lineHeight":1.4,"name":"Doc Name","textGrowth":"fixed-width","type":"text","width":"fill_container"},{"content":"Not started","fill":"$color-body-moderate","fontFamily":"$font-family-primary","fontSize":"$font-body-caption-size","fontWeight":"normal","id":"kEfRh","lineHeight":1.4286,"name":"Doc Status","textGrowth":"fixed-width","type":"text","width":"fill_container"}],"gap":2,"id":"N7F0N","layout":"vertical","name":"Doc Text","type":"frame","width":"fill_container"},{"fill":"$color-body-emphasis","height":24,"icon":"chevron-right","id":"qdwvw","library":"lucide","name":"Doc Chevron","type":"icon","width":24}],"cornerRadius":"$shape-radius-large-1","fill":"$color-surface-base","gap":"$gap-x-row","id":"NmACi","name":"B / Document Item","padding":16,"reusable":true,"stroke":"$color-line-muted","strokeWidth":1,"type":"frame","width":358}]
> ```
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "bPgqn"
> }
> ```
>
> ```text
> Screenshot generated for node: bPgqn
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> </details>
>
> Context compaction
>
> Source: automatic
> Status: completed
>
> The design references and repo contracts are now grounded. I’m moving into the code scaffold, then I’ll build the shared state/components before composing either direction so the interaction model stays consistent.
>
> <details><summary>Ran a command</summary>
>
> - Ran `pwd && rg --files -g '!*.pen' | sed -n '1,220p' && git status --short && node --version && npm --version`
>
> </details>
>
> <details><summary>Plan</summary>
>
> - [x] Reconfirm Pencil references, reusable component anatomy, and PRD-driven deviations
> - [ ] Scaffold the React, TypeScript, tooling, and token/font foundation
> - [ ] Implement the shared domain model, simulator, analytics, and reusable components
> - [ ] Compose Direction A, Direction B, launcher, scenarios, and component gallery
> - [ ] Add unit, component, accessibility, and end-to-end coverage
> - [ ] Run code checks and browser-based responsive and visual QA
>
> </details>
</details>

> wait actually. I'd like to do something first before we implement the designs. I'd like to send the pencil designs to Figma so I can make some changes, then we can proceed to code. Check if you have access to [Doc Center Doc Upload](https://www.figma.com/design/PS96rH7QrUVTZinM1uTZbk/Doc-Center-Doc-Upload?node-id=0-1&t=PBX0JuL6AMOccCOT-1)

<details><summary>4 previous messages</summary>

> I’m pausing implementation before any scaffold or source changes. I’ll verify access to that exact Figma file and node first; the Figma-use skill governs this check so I’m loading it before contacting Figma.
>
> <details><summary>Explored a file, called a tool</summary>
>
> <details><summary>Explored 3 files</summary>
>
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-use/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-use/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-use/references/plugin-api-standalone.index.md`
>
> </details>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Verify access to the provided Figma design file and report its basic structure without changing it",
>   "skillNames": "figma-use",
>   "code": "return { fileKey: figma.fileKey, fileName: figma.root.name, editorType: figma.editorType, currentUser: figma.currentUser ? { name: figma.currentUser.name, id: figma.currentUser.id } : null, pages: figma.root.children.map(page => ({ id: page.id, name: page.name })) };"
> }
> ```
>
> ```text
> Error: in get_currentUser: "currentUser" is not a supported API
>     at get (<input>:35:11)
>     at <anonymous> (PLUGIN_1_SOURCE:1:141)
>     at <eval> (PLUGIN_1_SOURCE:2:3)
> ```
>
> ```text
> Figma Debug UUID: a294b658-be8d-4e37-aef0-942bc9f958d4
> ```
>
> </details>
>
> The file connection itself reached Figma, but the first read used an identity field that this Figma runtime does not expose. That read was atomic and made no changes; I’m rerunning the access check using only supported document metadata.
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Verify access to the provided Figma design file and report its basic structure without changing it",
>   "skillNames": "figma-use",
>   "code": "return { fileKey: figma.fileKey, fileName: figma.root.name, editorType: figma.editorType, pages: figma.root.children.map(page => ({ id: page.id, name: page.name })) };"
> }
> ```
>
> ```text
> {"fileKey":"PS96rH7QrUVTZinM1uTZbk","fileName":"Document","editorType":"figma","pages":[{"id":"0:1","name":"Doc Upload"},{"id":"4:116","name":"Local Components"},{"id":"13:1227","name":"archive"}]}
> ```
</details>

Yes—I can access the Figma file. It contains:

- `Doc Upload` (`0:1`)
- `Local Components` (`4:116`)
- `archive` (`13:1227`)

No changes were made. Code implementation remains paused while we move the Pencil designs into Figma.

> Okay let's do it. Create a new page in that file. Btw don't delete the designs that are in Pencil.

> Also, be sure to use the cx design library as an asset for this work. it contains all the design tokens as well as the base components you can use. If there's any component that's not available in that library, create it as a local component in the doc-upload file

<details><summary>13 previous messages</summary>

> I’ll move both Pencil directions into a new editable Figma page and leave `one-app-starter.pen` untouched. I’m using the repo’s OneApp prototype skill, the Pencil harness, and Figma’s design/library workflows because this transfer needs to preserve the accepted layouts while reusing CX tokens and base components; only missing upload-specific pieces will become local Figma components.
>
> <details><summary>Explored 18 files</summary>
>
> - Read `./.agent-skills/prototype-oneapp-ui/SKILL.md`
> - Read `~/.codex/skills/pencil-agent-harness/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-use/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-design/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-library/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-use/references/working-with-design-systems/wwds.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-design/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-library/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-library/references/discovery-phase.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-library/references/component-creation.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-use/references/gotchas.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-use/references/plugin-api-standalone.index.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/design-system-extraction.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/layout-recipes.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/component-recipes.md`
> - Read `~/.codex/skills/pencil-agent-harness/references/validation-rubric.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-design/SKILL.md`
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-library/SKILL.md`
>
> </details>
>
> Phase 0 Checklist
>
> - `P0.a` Inventory the Pencil source, repo contracts, fonts, tokens, and any Code Connect mappings.
> - `P0.b` Inspect the target Figma file’s existing screens, local components, variables, and styles.
> - `P0.c` Discover the CX design library and map reusable components, variables, and styles.
> - `P0.d` Lock the transfer scope: both directions, responsive/state frames, and upload-specific local components only.
> - `P0.e` Map Pencil → CX library → local Figma components and record any conflicts.
> - `P0.f` Present the gap analysis and migration map.
>
> Exit criteria: the new page contents, CX reuse list, local-component list, and any fidelity deviations are explicit before the first Figma write. Per the Figma library workflow, I’ll pause for your approval after this discovery phase, then create the page and designs.
>
> <details><summary>Explored a file, a search, a list, ran a command, called a tool</summary>
>
> - Ran `git status --short && rg --files -g '*.figma.ts' -g '*.figma.tsx' -g '*.figma.js' -g '*.kt' -g '*.swift' . && rg -n "Merchant|font-family|--omf-|#" tokens/README.md tokens/tokens.css tokens/cx-fonts.css components/{button,alert,status-tag,linear-progress,web-nav-bar,email-input}.md | sed -n '1,260p'`
>
> MCP tool call
>
> pencil.get_editor_state
>
> ```json
> {
>   "include_schema": true
> }
> ```
>
> ````text
> ## Currently active editor
> - `/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen`
>
> # Current Editor State 
>
> ## Selected Elements:
> - `l7WJ3W` (frame): Empty State Card
>
> ### Reusable Components (77):
> - `zDTNI`: headline-page
> - `J1tfP5`: headline-section
> - `TiFMn`: headline-tile
> - `SFrI4`: data-primary
> - `mK1Ni`: data-secondary
> - `R2FdRX`: body-default
> - `Ynwlh`: body-supporting
> - `p2CLM8`: body-caption
> - `s478V`: label-large-1
> - `lXDsT`: label-default
> - `xdtxf`: label-small-1
> - `m67EKQ`: label-small-2
> - `WtzuO`: label-small-3
> - `g8khNm`: link-default
> - `yCxA1`: link-supporting
> - `IdCZz`: link-caption
> - `HXIox`: elevation-1
> - `brOMq`: elevation-2
> - `qxkJo`: elevation-3
> - `hW7DI`: Inline Loader
> - `Yqvtr`: Button
> - `ivKKx`: Badge
> - `vbCIR`: Alert
> - `etV8x`: Accordion Item
> - `m1OQY`: Bottom Nav Item
> - `L1PQ6`: Bottom Nav Bar
> - `pu7Qz`: Bottom Nav Bar / App
> - `I5RoC`: Checkbox
> - `fHLQG`: Checkbox Item
> - `PfwdN`: Dropdown Button
> - `Gfgyl`: Dropdown Menu Item
> - `um6nq`: Footer
> - `eMyOS`: Email Input
> - `F8DMV`: Standalone Text Link
> - `l3cTP`: Inline Text Link
> - `gKuqI`: List Item
> - `qsZEN`: Linear Progress
> - `px2Mh`: Toggle
> - `UgSyr`: Toast
> - `Q2LRq`: Popover Tooltip
> - `Hdd31`: Utility Nav Item
> - `Cvcl5`: Primary Nav Item
> - `z41dP`: Back Button
> - `coN5s`: Nav Menu Toggle
> - `owJch`: Web Nav Bar
> - `vo5O2`: Status Tag
> - `GVzGf`: Nudge
> - `L0laN`: Radio Button
> - `lzhBw`: Radio Button Item
> - `Yt9pb`: App Utility Nav Item
> - `bQ3SH`: App Utility Nav Group
> - `BHWrb`: App Menu Bar
> - `r4u9K`: Nav Drawer Close Button
> - `JvT5j`: Nav Drawer Utility List Item
> - `IvcEh`: Nav Drawer Navigation List Item
> - `h6SJf`: Mobile Web Nav Drawer
> - `Zc1Hw`: Modal / Basic
> - `K6ABlr`: Circular Data Visualizer
> - `YWNEH`: Snapshot Tile
> - `Fzo2q`: Snapshot Tile Header
> - `bSy4S`: Account Tile Data Item
> - `Tj3Hj`: Card Art / Type=CB
> - `TL0Hz`: Card Art / Type=BW
> - `Tnbay`: Card Art / Type=BW+
> - `D3wgD4`: Icon / Chat Lines
> - `o4vyh`: Tile Button
> - `kwrZm`: Drop Zone
> - `L4EBjh`: Upload Progress Bar
> - `nIrAd`: Rail Doc Item
> - `p3DcE`: Selected File Row
> - `Wwg0d`: Document Checklist Card
> - `q50qn`: Request Summary Rail
> - `zc9dZ`: B / Request Summary
> - `TQeTt`: B / Progress Header
> - `LMMoY`: B / Upload Zone
> - `pnQBG`: B / File Row
> - `NmACi`: B / Document Item
>
> # .pen File Schema
>
> ```typescript
> /** Theme axis -> axis value. E.g. { 'device': 'phone' } */
> export interface Theme { [key: string]: string; }
> /** Dollar-prefixed variable name; binds the property to that variable. */
> export type Variable = string;
> export type NumberOrVariable = number | Variable;
> /** Hex color: #RGB, #RRGGBB, or #RRGGBBAA. */
> export type Color = string;
> export type ColorOrVariable = Color | Variable;
> export type BooleanOrVariable = boolean | Variable;
> export type StringOrVariable = string | Variable;
> export interface Layout {
>   /** Flex layout direction. 'none'=absolutely positioned children. */
>   layout?: "none" | "vertical" | "horizontal";
>   /** Main-axis gap between children. Default 0. */
>   gap?: NumberOrVariable;
>   layoutIncludeStroke?: boolean;
>   /** Inside padding. */
>   padding?: /** all sides */ NumberOrVariable | /** [vertical, horizontal] */ [NumberOrVariable, NumberOrVariable] | /** [top, right, bottom, left] */ [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable];
>   /** Main-axis alignment. Default 'start'. */
>   justifyContent?: "start" | "center" | "end" | "space_between" | "space_around";
>   /** Cross-axis alignment. Default 'start'. */
>   alignItems?: "start" | "center" | "end";
> }
> /** Dynamic layout size:
> - fit_content: combined size of children, requires layout on the node (fallback when no children).
> - fill_container: parent size, requires layout on the parent (fallback when not in a layout or when using absolute position).
> Optional fallback in parens, e.g. 'fit_content(100)'. */
> export type SizingBehavior = string;
> /** Position relative to parent. X right, Y down. IGNORED when parent uses flex layout. */
> export interface Position { x?: number; y?: number; }
> export interface Size { width?: NumberOrVariable | SizingBehavior; height?: NumberOrVariable | SizingBehavior; }
> export type BlendMode = 'normal' | 'darken' | 'multiply' | 'linearBurn' | 'colorBurn' | 'light' | 'screen' | 'linearDodge' | 'colorDodge' | 'overlay' | 'softLight' | 'hardLight' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
> export type Fill = ColorOrVariable | {
> type: "color";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> /** Fill opacity can only be set via the hex alpha channel. */
> color: ColorOrVariable;
> } | {
> type: "gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> gradientType?: "linear" | "radial" | "angular";
> opacity?: NumberOrVariable;
> /** Normalized to bbox. Default 0.5,0.5. */
> center?: Position;
> /** Normalized to bbox. Default 1,1. Linear: height = gradient length, width ignored. Radial/Angular: ellipse diameters. */
> size?: { width?: NumberOrVariable; height?: NumberOrVariable };
> /** Degrees CCW (0° up, 90° left, 180° down). */
> rotation?: NumberOrVariable;
> colors?: { color: ColorOrVariable; position: NumberOrVariable }[];
> } | /** Image fill. URL is relative to the .pen file, e.g. `./image.jpg`. */ { type: "image"; enabled?: BooleanOrVariable; blendMode?: BlendMode; opacity?: NumberOrVariable; url?: string; mode?: "stretch" | "fill" | "fit" } | /** Shader fill. URL points to a WebGL 1.0 (#version 100) fragment shader file, relative to the .pen file, e.g. `./effect.glsl`. Uniforms are described via `@directive` annotations inside block comments in the shader source. A `vec2` uniform annotated with `@resolution` is auto-bound to the fill size in pixels. Other uniforms' user-set values are stored in `uniforms`. */ {
> type: "shader";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> url: string;
> /** Override values for shader uniforms, keyed by uniform name. Uniforms annotated with `@resolution` or `@time` must not appear here. Allowed value shapes: number (float/int), boolean (bool), hex color string like `#RRGGBB[AA]` (color), array of 2-4 numbers (vec2/3/4), or a variable reference `$name` (numeric uniforms accept number variables; color uniforms accept color variables). */
> uniforms?: { [key: string]: number | boolean | string | number[] };
> } | /** Bezier-interpolated color grid, row-major. Keep edge points at default positions. */ {
> type: "mesh_gradient";
> enabled?: BooleanOrVariable;
> blendMode?: BlendMode;
> opacity?: NumberOrVariable;
> columns?: number;
> rows?: number;
> /** Color per vertex. */
> colors?: ColorOrVariable[];
> /** columns * rows points in [0,1]. */
> points?: (/** Auto-generated handles. */ [number, number] | /** Optional bezier handles (relative offsets); omitted = auto. */ { position: [number, number]; leftHandle?: [number, number]; rightHandle?: [number, number]; topHandle?: [number, number]; bottomHandle?: [number, number] })[];
> };
> export type Fills = Fill | Fill[];
> export interface CanHaveStroke {
>   stroke?: Fills;
>   /** Stroke thickness, uniform or per side. */
>   strokeWidth?: NumberOrVariable | { top?: NumberOrVariable; right?: NumberOrVariable; bottom?: NumberOrVariable; left?: NumberOrVariable };
>   strokeLinecap?: "butt" | "round" | "square";
>   strokeLinejoin?: "miter" | "bevel" | "round";
>   strokeAlignment?: "inner" | "center" | "outer";
> }
> export type Effect = /** Blurs the entire node. */ { enabled?: BooleanOrVariable; type: "blur"; radius?: NumberOrVariable } | /** Blurs the backdrop behind the node. */ { enabled?: BooleanOrVariable; type: "background_blur"; radius?: NumberOrVariable } | /** Inner or outer drop shadow. */ { type: "shadow"; enabled?: BooleanOrVariable; shadowType?: "inner" | "outer"; offset?: { x: NumberOrVariable; y: NumberOrVariable }; spread?: NumberOrVariable; blur?: NumberOrVariable; color?: ColorOrVariable; blendMode?: BlendMode };
> export type Effects = Effect | Effect[];
> export interface CanHaveEffects { effect?: Effects; }
> export interface CanHaveGraphics extends CanHaveEffects, CanHaveStroke { fill?: Fills; }
> export interface Entity extends Position {
>   /** Unique string; MUST NOT contain '/'. Auto-generated if omitted. */
>   id: string;
>   name?: string;
>   context?: string;
>   /** When true, can be duplicated via `ref` objects. Default false. */
>   reusable?: boolean;
>   theme?: Theme;
>   enabled?: BooleanOrVariable;
>   opacity?: NumberOrVariable;
>   flipX?: BooleanOrVariable;
>   flipY?: BooleanOrVariable;
>   /** Absolute position detaches the object from parent's layout and can be absolute positioned. Default auto */
>   layoutPosition?: "auto" | "absolute";
>   metadata?: { type: string; [key: string]: any };
>   /** Degrees CCW around top-left corner. */
>   rotation?: NumberOrVariable;
> }
> export interface Rectangleish extends Entity, Size, CanHaveGraphics { cornerRadius?: NumberOrVariable | [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable]; }
> /** Position is the top-left corner. */
> export interface Rectangle extends Rectangleish { type: "rectangle"; }
> /** Defined by its bounding rectangle. */
> export interface Ellipse extends Entity, Size, CanHaveGraphics {
>   type: "ellipse";
>   /** Ring inner/outer radius ratio. 0=solid, 1=hollow. Default 0. */
>   innerRadius?: NumberOrVariable;
>   /** Arc start angle, degrees CCW from right. Default 0. */
>   startAngle?: NumberOrVariable;
>   /** Arc length from startAngle. Positive=CCW, negative=CW. Range -360..360. Default 360. */
>   sweepAngle?: NumberOrVariable;
> }
> /** Defined by its bounding rectangle. */
> export interface Polygon extends Entity, Size, CanHaveGraphics { type: "polygon"; polygonCount?: NumberOrVariable; cornerRadius?: NumberOrVariable; }
> export interface Path extends Entity, Size, CanHaveGraphics {
>   /** Default 'nonzero'. */
>   fillRule?: "nonzero" | "evenodd";
>   /** SVG path. */
>   geometry?: string;
>   /** SVG coord-space [x,y,w,h] mapping onto the node box. Default: tight bbox of geometry. */
>   viewBox?: [number, number, number, number];
>   type: "path";
> }
> export interface TextStyle {
>   fontFamily?: StringOrVariable;
>   fontSize?: NumberOrVariable;
>   fontWeight?: StringOrVariable;
>   letterSpacing?: NumberOrVariable;
>   fontStyle?: StringOrVariable;
>   underline?: BooleanOrVariable;
>   /** Multiplier of fontSize. Defaults to font's built-in. */
>   lineHeight?: NumberOrVariable;
>   textAlign?: "left" | "center" | "right" | "justify";
>   textAlignVertical?: "top" | "middle" | "bottom";
>   strikethrough?: BooleanOrVariable;
>   href?: string;
> }
> export type TextContent = StringOrVariable;
> export interface Text extends Entity, Size, CanHaveGraphics, TextStyle {
>   type: "text";
>   content?: TextContent;
>   /** Required before width/height take effect.
> 'auto': grows to fit; no wrapping.
> 'fixed-width': width fixed, wraps; height grows.
> 'fixed-width-height': both fixed; may overflow. */
>   textGrowth?: "auto" | "fixed-width" | "fixed-width-height";
> }
> export interface CanHaveChildren { children?: Child[]; }
> /** Container to create hierarchy and layout. default layout=horizontal, width=fit_content, height=fit_content, clip=false. */
> export interface Frame extends Rectangleish, CanHaveChildren, Layout {
>   type: "frame";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   placeholder?: boolean;
>   /** Marks frame as a slot for component instances. Array entries are IDs of recommended reusable child components (e.g. menu items inside a menu bar). */
>   slot?: false | string[];
> }
> export interface Group extends Entity, CanHaveChildren, CanHaveEffects { type: "group"; }
> export interface Note extends Entity, Size, TextStyle { type: "note"; content?: TextContent; }
> export interface Prompt extends Entity, Size, TextStyle { type: "prompt"; content?: TextContent; model?: StringOrVariable; }
> export interface Context extends Entity, Size, TextStyle { type: "context"; content?: TextContent; }
> /** Icon from a library. The icon is scaled to fit the width and height. */
> export interface Icon extends Entity, Size, CanHaveEffects {
>   type: "icon";
>   /** Valid: 'lucide', 'feather', 'Material Symbols Outlined', 'Material Symbols Rounded', 'Material Symbols Sharp', 'phosphor'. */
>   library?: StringOrVariable;
>   icon?: StringOrVariable;
>   /** Variable weight, 100-700; only for libraries that support it. */
>   weight?: NumberOrVariable;
>   fill?: Fills;
> }
> /** Generates nested children from JavaScript. */
> export interface Script extends Entity, Size {
>   type: "script";
>   /** Clip overflow. Default false. */
>   clip?: BooleanOrVariable;
>   /** JS file URI, relative to the .pen file. */
>   scriptUri?: string;
>   /** Input values by name. */
>   inputs?: { [key: string]: string | number | boolean | Variable };
> }
> /** Reuses another object. */
> export interface Ref extends Entity {
>   type: "ref";
>   /** ID of the referenced object. */
>   ref: string;
>   /** Customize descendant properties. */
>   descendants?: { [key: string /** ID path of the descendant. */]: {} /** Based on the presence of `type`:
> - `type` is not present = property overrides: the descendant node is updated with the listed properties.
> - `type` is present = replacement: the descendant node is fully replaced with a new node tree. */ };
>   [key: string]: any;
> }
> export type Child = Frame | Group | Rectangle | Ellipse | Path | Polygon | Text | Note | Prompt | Context | Icon | Script | Ref;
> export type IdPath = string;
> export interface Document { version: "2.14"; themes?: { [key: string /** RegEx: [^:]+ */]: string[] }; imports?: { [key: string]: string /** Value: relative URI of imported .pen file. Key: short alias. */ }; variables?: { [key: string /** RegEx: [^:]+ */]: { type: "boolean"; value: BooleanOrVariable | { value: BooleanOrVariable; theme?: Theme }[] } | { type: "color"; value: ColorOrVariable | { value: ColorOrVariable; theme?: Theme }[] } | { type: "number"; value: NumberOrVariable | { value: NumberOrVariable; theme?: Theme }[] } | { type: "string"; value: StringOrVariable | { value: StringOrVariable; theme?: Theme }[] } }; children: (Frame | Group | Rectangle | Ellipse | Polygon | Path | Text | Note | Context | Prompt | Icon | Script | Ref)[]; }
> ```
>
> # General instructions when editing .pen files
>
> - Pencil is an infinite canvas design tool with nested object hierarchy.
>
> - Be very thorough with your design changes and make sure all the task's needs are met.
> - Favor copying existing content and updating the copied content later, rather than generating new content.
> - When creating new variables make sure you are not accidentally overwriting any existing design.
> - Don't have multiple screens in-progress at the same time unless you are using sub-agents. Finish one screen at a time to not leave them in a broken state.
>
> - User may ask for technical modifications like removing, moving, re-ordering, clearing, and copying objects/variables, or just ask questions. Only do what's requested and nothing more.
> - Pencil is a collaborative multiplayer environment: the document can change while you work, so the state you remember may be stale. If a node is missing or no longer matches what you expected, re-read instead of recreating it, and don't undo changes the user made in the meantime.
>
> - When adding more content to a frame make sure the frame has the right layout, or is big enough to fit the new content. Resize the frame if necessary. There is no scrolling and the entire content should always be visible on the canvas.
>
> - When placing objects directly to document root and you don't have an exact position. Always start by calling `FindEmptySpace` at the start of your `batch_design` to find an empty area for your content. Never overlap root objects. Don't just pick random coordinates unless you know exact position from the context or the user request. For multiple sequential screens, use the previous element's ID as the `nodeId` parameter in `FindEmptySpace`.
> - Place components at the top and your screens below, growing to the right and down.
>
> - When creating new screens, represent each one as a top-level frame in `document`. Use `clip: true` on screen frames to prevent content overflow.
> - Keep the document root clean: only page/screen frames, reusable component frames, and other major container frames belong directly under `document`. Never place text, icons, buttons, cards, rows, images, or decorative shapes directly in `document`.
>
> - Use `get_editor_state`, `get_variables`, and `batch_get` MCP tools with reusable nodes to understand the current document structure.
> - When the design has repeated UI, consider building those as reusable components first and then instancing them, so edits to the component propagate to every instance.
>
> - Always load `get_guideline(category: guide, ...)` in order to learn how to solve the user's design task.
> - Load `get_guideline(category: style, ...)` for design inspiration
>
> - Changes in the document are presented in real-time to the user. Make the changes in a logical order as a designer would.
> - Minimize the time between the user requests and showing something on the screen. Users don't want to wait a long time before they see the progress.
> - Use the canvas as part of your thinking. You don't need to preplan every little detail. Iteratively design using the document.
>
> - Do NOT use or think in CSS/HTML properties or behavior. Pencil uses a custom format and has its own layout, rendering, and canvas behavior. Pencil has similar concepts and naming, but it's not the same as CSS/HTML.
> - Before using any property, check the pencil schema supports it and only use the properties that are specified.
> - If a property is not present in the schema, it's not supported. Find a different way to achieve the same visual effect.
> - Do NOT use: alignItems baseline/stretch, margin, percentage size. These values are not supported and will cause an error.
>
> Verify each section immediately after you are done with it. Don't wait until the end of the whole generation.
> Create a checklist to evaluate the design after you create it. Make sure to check for the following:
> - Layout it not collapsed or broken.
> - Content is not clipped outside the frame. Resize the container frames to fit the content if necessary.
> - Color contrast on text, objects, and background is sufficient.
> - Objects are properly aligned and spaced.
> - Intention and understanding of the pencil schema matches the visuals.
> After reviewing the design, do NOT delete it to make changes. If you want to fix it, always make direct updates to the existing objects.
>
> ## Style
>
> - Don't create repetitive styles and grids. Add some unique elements and layout to make the design feel more interesting.
> - Avoid wrapping every element in its own box or card. This is a common AI habit that makes designs look generic. Use a container only when it has a real structural or functional purpose.
> - Avoid excessive gradients, shadows, and rounded corners unless requested or when part of the brand identity. Be refined and intentional with effects and decorations
> - All Google fonts are available.
>
> ## Objects
>
> - All object coordinates are defined relative to the parent’s top-left corner.
> - Use a coordinate system where `x` increases to the right and `y` increases downward.
> - Objects rotate counter-clockwise around the top-left corner of their bounding box.
> - Only `frame` and `group` types can have children. Shapes, text, and other nodes cannot have children.
>
> - Properties do not cascade from parents to children. Every node is independent and must have all necessary properties specified.
> - Exclude default property values unless they are overriding a non-default value inside an instance.
>
> - Avoid duplicating the same dimension value across multiple sibling elements. If several children need to match their parent's width or height, use `fill_container` on each rather than hardcoding the parent's size repeatedly.
> - Explicitly specify `width` and `height` for shapes and other nodes whose size is not otherwise determined by layout or text behavior.
> - For layout-driven nodes, prefer `fit_content` and `fill_container` when appropriate instead of hardcoded numeric sizes.
> - Set children to `fill_container` to distribute them evenly within their parent. Use the `gap` property on the parent to add gaps between children.
>
> - Use `justifyContent: "center"` and `alignItems: "center"` on the parent to center its children both vertically and horizontally.
> - For text, follow `textGrowth` rules: do not set `width` or `height` unless `textGrowth` requires them.
> - Use `textAlign` or `textAlignVertical` to align the text within the text bounding box. `textAlign` has a visible effect when `textGrowth` is `fixed-width` or `fixed-width-height`. `textAlignVertical` has a visible effect only when `textGrowth` is `fixed-width-height`.
> - Setting `textAlign` or `textAlignVertical` will not change the position of the text bounding box. Use flexbox layout to align the object.
> - Use `textGrowth` to define text wrapping and bounding box sizing. When not specified, the default value is `"auto"`.
> - Possible `textGrowth` values:
>   - `auto`: `width` and `height` are always derived from the text content, any `width` or `height` you set is ignored. Never does line wrapping, text will always be on a single line.
>   - `fixed-width`: the `width` node property MUST be specified, `height` is calculated from the text content. Does line wrapping based on the object's bounding box width.
>   - `fixed-width-height`: both `width` and `height` node property MUST be specified. Does line wrapping based on the object's bounding box width. Text content will vertically overflow.
> - Only use `fixed-width-height` when you need to override the height of the text box. Prefer `fixed-width` with `fill_container` for text that needs to adapt to the parent container size.
> - If you want to wrap lines, you HAVE TO set the `textGrowth` to either `fixed-width` or `fixed-width-height`.
> - Never guess text dimensions, always rely on text wrapping and flexbox layout to size and position text. Any dimension guess for text will result in visual bugs.
> - Use the `lineHeight` property on text as a ratio relative to the font size: `0.0` means 0%, and `1.0` means 100%. If not specified, the font’s default line height will be applied.
>
> - Text has no `fill` by default and will be invisible. You MUST set the `fill` property on text objects to make them visible. Emoji requires `fill` as well.
> - To reference a variable, use a string value with a `$` prefix (`fill: "$primary-color"`, `gap: "$spacing-small"`)
> - `width` and `height` do not support percentage or viewport CSS values. Never use values like `"70%"`, `"100%"`, `"50vh"`, or `"calc(...)"` or even `value + "%"`. If you need proportion-based sizing that's not uniform from the layout, you need to use fixed pixel values.
> - `fill` can be set on wrapping containers to add a background color, gradient, or an image.
>
> ## Flexbox Layout
>
> - `layout` and `padding` is only accessible on `frame` type. Do NOT set `layout` and `padding` on other types of nodes.
> - **Prefer dynamic sizing over hardcoded values.** Use `fill_container` or `fit_content`, rather than repeating the parent's or children's pixel value. This makes designs more maintainable.
> - Always prefer flexbox layout; only use `layout: "none"` when truly necessary.
> - x and y properties are completely ignored when the node is in layout. Do NOT set x/y on a child unless the parent has layout: "none" or the node has layoutPosition: "absolute"
> - Only use explicit numerical sizes in rare cases when it cannot be inferred from the layout.
> - To align and distribute objects within a container with flexbox, wrap them in a parent object that has a `layout` property.
> - Frames always default to `horizontal` direction and `fit_content` sizing.
> - Padding affects ALL children uniformly - it creates space between the container's edges and its children.
> - To offset an individual child in flexbox, wrap it in a flexbox frame with padding.
> - Flexbox layout is single-axis only with no item wrapping. For grid-like layouts, manually create separate row frames.
> - A parent cannot be sized by its children using `fit_content` if all direct children are sized by the parent using `fill_container`. This creates circular dependency. Don't rely on the fallback value to resolve circular dependency.
>
> **Antipattern**
> ```js
> // WRONG: percentage values are not supported
> Insert(parent,{type:"frame",width:"100%",height:`${100/count}%`})
>
> // WRONG: padding on text is not supported, use a wrapping frame instead
> Insert(parent,{type:"text",content:"text",fontSize:12,padding:12})
>
> // WRONG: Collapses to 0 width. Parent defaults to fit_content. Child tries to fill it.
> badParent = Insert(screen, {type: "frame", layout: "vertical"});
> Insert(badParent, {type: "text", textGrowth: "fixed-width", width: "fill_container", content: "..."});
> ```
>
> ## Components and Instances
>
> - Object that has `reusable` property `true` can be also called a "component" or a "symbol"
> - Components will always have a random generated ID. It's not possible to set the ID of a component.
> - Components can be used to replicate the same object tree in multiple places, to avoid repetition. This is ideal for common widgets in a design, like buttons, form fields, toggles, cards, etc.
> - To reuse a component, use the `ref` object type that points to a reusable component. `ref` objects are also called "instances".
> - Instances have a `ref` property, which identifies the mother component.
> - The `ref` property of the instance must be set to the reused component's `id`.
> - Instances can be customized by overriding objects' properties in their subtree:
>   - To override properties of the component's root object, just put the overridden properties in the `ref` object.
>   - To override properties of an object inside the component's subtree, use the `descendants` property of the `ref`. Put the overridden properties under the customized object's `id`, path, or unique name inside the `descendants` map. If a name is not unique, use the node ID/path instead. When accessing multi-level descendant nodes in the component, use paths in the `descendants` object keys to access it, DO NOT create multiple levels of `descendants` objects.
>   - To override properties of an object inside a nested instance, the object's `id` must be prefixed by the instance's `id` followed by a slash (/). This works for arbitrarily nested component instances, e.g. consider an icon component; and a button component that contains an instance of this icon; and a menu component that contains multiple instances of the button component; and a sidebar component that contains an instance of the menu component!
>   - Parts of an instance's object tree can also be replaced with completely new objects: if the `type` property is present for a particular descendant, it means that the whole subtree will be swapped out with the override. In this case, the override must be a complete object tree, not just properties! This mechanism is useful for reusable container-type objects, such as windows, tables, grids, cards, etc.
> - An instance can emulate the deletion of a nested object from its subtree by overriding its `enabled` property with `false`.
> - You cannot reference components across files. If you want to use a component from a different file you must copy it over.
> - Try to use existing components in the document instead of always making new ones.
> - Instead of duplicating the same component multiple times with small tweaks. Try to find a way to make them more generic so the instances can use them in more places.
> - Overrides will be only applied to the object it's overriding. The changes will not be inherited to all children.
> - When parsing designs, treat "component" word broadly — some components are formally defined symbols that can be references, others are ad-hoc groupings that visually or functionally behave like components, sometimes their node name is prefixed "component/"
> - When copying nodes and modifying descendants, use the `descendants` property in the Copy operation. Never use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches.
> - When modifying component instance descendants:
>   - Use `Update(instance+"/childId", {...})` to change properties
>   - Use `newNode=Replace(instance+"/childId", {...})` to replace with a new node
>   - Use `newNode=Insert()` when the parent is a regular frame
> - IMPORTANT: DO NOT try to Update a node's descendant that you just copied (Copy), since copying will recreate the descendant nodes and it will assign new IDs to those children nodes.
> - Prefer using `fit_content` or `fill_container` size instance override to resize the component instance into the new location.
> - When an instance is not inside an object using `layout`, it must be positioned by overriding its `x` and `y` properties. Do this even if the position is (0, 0). Never override just a single position axis. Always override both if you need to specify the position.
> - An object must have a specified position, or be a child of an object using horizontal or vertical layout.
>
>
> **Pattern: Insert instance, then Update descendants**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> Update(card+"/childTitleId",{content:"Account Details"})
> Update(card+"/childDescriptionId",{content:"Manage your settings"})
> ```
>
> **Pattern: Insert instance, then Replace a slot**
>
> ```js
> card=Insert("Casf3fX",{type:"ref",ref:"abc",name:"Account Card"})
> customContent=Replace(card+"/contentSlotId",{type:"frame",name:"Content",layout:"vertical"})
> item1=Insert(customContent,{type:"text",name:"Item 1",fontFamily:"Inter",content:"Item 1",fill:"#000000"})
> ```
>
> ### Text Sizing
>
> Text sizing depends on whether the parent or the text content controls the size.
>
> **Parent defines size** — parent must have flexbox layout and determines the size. Use `textGrowth:"fixed-width"` + `fill_container` (headings, descriptions, paragraphs):
>
> ```js
> section=Insert(parent,{type:"frame",name:"Header",layout:"vertical",width:400,gap:12,x:200,y:200})
> Insert(section,{type:"text",name:"Title",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Dashboard",fontSize:24,fill:"$text-primary"})
> Insert(section,{type:"text",name:"Subtitle",textGrowth:"fixed-width",width:"fill_container",fontFamily:"Inter",content:"Manage your account settings",fontSize:14,fill:"$text-secondary"})
> ```
>
> **Text defines size** — default `auto`, no width/height (button labels, tags, badges):
>
> ```js
> btn=Insert(parent,{type:"frame",name:"Button",padding:12,gap:8})
> Insert(btn,{type:"text",name:"Label",fontFamily:"Inter",content:"Submit",fontSize:14,fill:"$text-primary"})
> ```
>
> **Antipattern** — using pixel dimensions when layout can handle it:
>
> ```js
> container=Insert(parent,{type:"frame",name:"Button",width:200,height:100,padding:12})
> // WRONG: parent has layout, use fill_container instead of pixel width
> Insert(container,{type:"text",content:"abc",textGrowth:"fixed-width",width:320,fontSize:14})
> // WRONG: missing textGrowth after specifying width
> Insert(container,{type:"text",content:"abc",width:100,fontSize:14})
> ```
>
> ## Using placeholders
>
> - Any new, copied, or modified root frame MUST have `placeholder: true` for the entire duration of the work on it.
> - Once you start working inside a placeholder node, finish it before unsetting the flag.
> - Remove `placeholder: true` as soon as the frame is done — don't wait until all screens are finished.
>
> ## SVG Path
> - Always set an explicit `viewBox: [x, y, width, height]` on a path. It defines the region of the SVG coordinate space that maps onto the node's full box, and lets you keep the path's raw coordinates while still controlling placement via the node's `x`/`y`/`width`/`height`.
> - The viewBox region is stretched to fill the node's width/height.
>
> ### Graphs
>
> Always prefer bar charts and charts that can be built with simple layout configurations that the .pen format supports.
> Don't use absolutely positioned elements over the chart, as they won't align correctly.
> Don't manually match labels to bar positions and sizes. Rely on layout to position labels and bars correctly.
> When creating donut charts, always use `fill` color with `innerRadius` size to create the donut shape.
> Line charts cannot be easily built because the layout system cannot position individual points.
>
> ### Tables
>
> Tables need to use flex box layout.
> Tables follow strict hierarchy: **Table (frame) → Table Row (frame) → Table Cell (frame) → Table Cell Content**
> CRITICAL: Each cell is represented as a **frame** node and contains a cell content, which is usually text, label, button or instance of a component.
>
> **Antipattern** – Do NOT put content directly in the row, skipping the cell frame:
>
> ```js
> tableRow=Insert("kdl58",{type:"frame",layout:"horizontal"})
> Insert(tableRow,{type:"text",content:"John Doe"})
> Insert(tableRow,{type:"text",content:"joe.doe@example.com"})
> ```
>
> ## Scripting
>
> Use `script` node types to generate content with JavaScript. Scripts are `.js` files on disk, referenced via relative uri path in `scriptUri`.
>
> - Every script must start with `/** @schema 2.11 */` (current version). Missing this tag is an error.
> - Scripts receive a `pencil` object: `pencil.width`, `pencil.height`, `pencil.input.<name>`.
> - Scripts must return an array of node objects following the `.pen` schema.
> - Declare inputs as `@input name: type [= default]`. Available types: `number`, `string`, `boolean`, `color`, `ref`, `enum`.
> - Math.random() is deterministic in scripts and can be safely used for procedural generation.
>
> ```js
> /**
>  * @schema 2.11
>  * @input rows: number = 3
>  * @input gap: number = 4
>  * @input color: color = #3B82F6
>  * @input label: string = "Hello"
>  * @input filled: boolean = true
>  * @input layout: enum("grid", "stack", "scatter") = "grid"
>  * @input target: ref
>  */
> const rows = Math.max(1, Math.floor(pencil.input.rows));
> const cellH = (pencil.height - pencil.input.gap * (rows - 1)) / rows;
>
> const nodes = [];
> for (let r = 0; r < rows; r++) {
>   nodes.push({
>     type: "rectangle",
>     name: "Bar " + (r + 1),
>     x: 0,
>     y: r * (cellH + pencil.input.gap),
>     width: pencil.width,
>     height: cellH * Math.random(),
>     fill: pencil.input.color,
>   });
> }
>
> return nodes;
> ```
>
> ## Shaders
>
> The `shader` fill type can be used to create complex graphics effects using WebGL shaders.
>
> - Shaders are WebGL 1.0 fragment shaders (#version 100), with one addition: textureSize(sampler, lod) is available for aspect-correct texturing.
> - Supported uniform types:
>   - float, int: as numbers
>   - vec2/3/4, ivec2/3/4: as arrays of numbers or "#RRGGBB" strings for colors
>   - sampler2D: as image URL strings
> - Uniforms can be annotated with special comments:
>   - @color: marks vec3 or vec4 uniforms to use color picker controls.
>   - @default: sets the default value for the uniform.
>   - @resolution: set to the resolution of the output. e.g. can be used to normalize gl_FragCoord.
>   - @mouse: set to the mouse position in the same space as gl_FragCoord. For interactive effects.
>   - @time: set to the elapsed time in seconds. For animations.
>   - @sdf: a sampler2D set to an SDF texture of the node's shape. The r channel holds the signed distance in @resolution units (positive = inside). The gb channels hold the gradient of the distance field (direction of increasing distance), in texel space. Use gb instead of numerically differentiating the r channel!
>   - @min/@max: set the range of a uniform for better UI controls. Only applies to number uniforms.
>   - @range <min>, <max>: shorthand for @min and @max on the same line. Shows a slider in the UI.
>   - @label <text>: sets the uniform's display name in the UI. Always set the label.
>
> ```glsl
> /** @resolution */
> uniform vec2 u_resolution;
>
> /**
>  * @label Size
>  * @default 32
>  */
> uniform float u_size;
>
> /**
>  * @label Primary Color
>  * @color
>  * @default #ffffff
>  */
> uniform vec3 u_color1;
>
> /**
>  * @label Secondary Color
>  * @color
>  * @default #000000
>  */
> uniform vec3 u_color2;
>
> void main() {
>   vec2 cell = floor(gl_FragCoord.xy / u_size);
>   float check = mod(cell.x + cell.y, 2.0);
>   vec3 color = mix(u_color1, u_color2, check);
>   gl_FragColor = vec4(color, 1.0);
> }
> ```
>
> # batch_design documentation
>
> - The batch_design tool executes a small javascript snippet to modify the document.
> - Split work into multiple smaller `batch_design` calls focused on each section.
>
> - In case of an error, all modifications and the created globals will be reverted.
> - A list of warnings will be returned in the response message. Always Fix them in the next batch_design call.
>
> - Use normal JavaScript to generate repeated design structure: arrays, `for...of` loops, computed values, conditionals, object spreads, helper functions, and template strings are all useful.
> - Be smart about writing JavaScript to remove duplication and minimize the length of the generated code.
> - Prefer loops/spreads/helpers over long handwritten repetitive code when creating nav items, table rows, cards, metrics, menus, or similar repeated UI.
> - Do not include comments in the generated `batch_design` JavaScript snippet. Keep the input small.
>
> - You MUST set the `name` property with a human readable name on every node and child node you add. This will make the document cleaner and easier to understand. A mapping from names to ids will be returned at the end of each `batch_design` call so you can reference the created nodes in the next calls.
>
> - When creating style objects that are then spread when creating nodes. Make sure to include `type` in the style object.
> - Never set `id` when creating, copying, or replacing nodes or components. Pencil will always generate unique random IDs and override the input.
>
> - Always prefer the returned node id in `ref` property when creating instances.
> - You don't have access to the node properties after they are created.
>
> - Each `batch_design` is executed in it's own scope. Local variables are not shared between `batch_design` calls. To persist values between calls, don't use `const` or `let` when declaring variables, use `myNode = Insert(...)`.
>
> - Always split component creation into a separate batch_design in order to receive the generated node IDs.
>
> ## batch_design API
>
> Only these pencil functions are supported in batch_design. Use the other MCP tools for other operations.
>
> ```
> const document: string; // predefined root node
>
> Insert(parent: string, nodeData: Schema.Child): string; // insert
> Copy(path: string, parent: string, copyNodeData: Schema.Child): string; // copy
> Update(path: string, updateData: Schema.Child): void; // update
> Replace(path: string, nodeData: Schema.Child): string; // replace
> Move(path: string, parent: string | undefined, index?: number): void; // move
> Delete(path: string): void; // delete
> SetVariables(variables: Record<string, VariableDefinition>, replace?: boolean): void; // set variables/themes
> Generate(nodeId: string, type: "ai" | "stock", prompt: string): void; // generate image
> FindEmptySpace(input: { width: number; height: number; direction?: "top" | "right" | "bottom" | "left"; padding?: number; nodeId?: string }): { x: number; y: number; parentId?: string }; // find empty space
> ```
>
> The `path` argument (used by `Copy`, `Update`, `Replace`, `Move`, `Delete`) is a node ID, or a slash-separated path to a node nested inside a component instance (`instanceId/childId`). Slashes are only valid for component-instance nesting, not normal layer structure, and work for any nesting depth.
>
> ### Insert
>
> - Insert a new node at the end of the children array of the specified parent node.
> - An insert can only be a single node, if you want to add children to it, use the id return value in the next Insert call.
> - When working with components (reusable: true), insert their instances as refs with their properties overridden. Override descendant properties inline with the `descendants` map, or with subsequent Update operations.
> - Use the Replace to override children inside a component instance, e.g. `Replace("myInstance/childId",{type:"text",...})`
> - Returns the inserted node string ID
>
> ### Copy
>
> - "path": The ID of the existing node to copy. If you want to customize some properties of the copied node, just add them next to the `path` property. If you want to customize nested nodes _under_ the copied one, use the same kind of `descendants` map that `ref` nodes use!
>
> - When copying a node and modifying its descendants, you MUST use the "descendants" property in the Copy operation itself. DO NOT use separate Update operations for descendants of copied nodes, as this will fail due to ID mismatches. The copied node and its descendants receive new IDs, so Update operations referencing the original descendant IDs will fail.
> - `descendants`: Optional, used for components. Keys may be node IDs/paths or unique descendant ids inside the referenced component. If a name matches multiple descendants, use the node ID/path instead.
>
> - Copying a reusable node creates a connected instance (a `ref` node).
> - Returns the copied node string ID
>
> ### Update
>
> - Update the properties of existing nodes, without listing their children.
> - DO NOT use this to update the node's `children`, use Replace function for that.
> - This function CANNOT change the `id`, `type` or `ref` properties of any node!
> - `path`: The node to update.
>
> - `updateData": The node data to update
>
> ### Replace
>
> - Replace a node with a new node. All properties including the x/y are replaced.
> - This tool is ideal for swapping out parts of a component instance with new nodes.
> - Returns the replacement node's ID as string
> - `path`: The path of the node which will be replaced
> - `nodeData`: The properties of the new node
>
> ### Move
>
> - Move a node to a different location in the node tree in a .pen file.
> - `path`: The node to move.
> - `parent`: Optional. The new parent node. If omitted, the node stays under its current parent.
> - `index`: Optional new position of the moved node among its siblings. If omitted, the node is placed at the end.
>
> ### Delete
>
> - Delete a node from a .pen file.
> - `path`: The node to delete.
>
> ### SetVariables
>
> - Define or update the variables and themes of the .pen file. Read existing variables with the `get_variables` MCP tool first.
> - `variables`: An object keyed by variable name. Each value MUST be an object with a `type` (`"color"`, `"number"`, or `"string"`) and a `value`. Passing a bare value like `"#A3B59A"` or `16` will fail.
> - Variable names are arbitrary strings and MUST NOT begin with a dollar sign. The `$` prefix is only used when referencing a variable from a property (e.g. `fill: "$accent"`).
> - `replace` (optional, default `false`): when `false`, the variables are merged into the existing definitions. Pass `true` to completely replace the document's existing variable definitions.
> - Don't specify themes separately. If a variable uses theming, theme axes and values that aren't yet present in the document are registered automatically. For themed values, pass an array of `{value, theme}` entries.
>
> ```js
> SetVariables({
>   accent: {type:"color",value:"#A3B59A"},
>   "spacing-unit": {type:"number",value:16},
>   "font-heading": {type:"string",value:"Playfair Display"},
>   background: {type:"color",value:[
>     {value:"#F8F5F0",theme:{mode:"light"}},
>     {value:"#1A1A1A",theme:{mode:"dark"}}
>   ]}
> })
> ```
>
> ### Generate (image)
>
> - IMPORTANT: There is NO `image` node type! Images are applied as FILLS to nodes.
> - Do not guess random URLs for image fills, always use the Generate function to get an image from a stock or AI service.
> - To display an image: first Insert a frame or rectangle, then use Generate to apply the image as a fill.
> - `nodeId`: The ID of the node to apply the image fill to.
> - `type`: Either "ai" for AI-generated images or "stock" for stock photos from Unsplash.
> - `prompt`:
>   - For "ai": a detailed descriptive prompt.
>   - For "stock": 1-3 keyword search query following Stock query rules (simple, concrete, no use-case or abstract terms).
>
> ### FindEmptySpace
>
> - Finds an empty `width` x `height` area.
> - `direction` (optional, default "right"): where to search, one of "top", "right", "bottom", "left".
> - `padding` (optional, default 0): minimum distance from other elements.
> - `nodeId` (optional): anchor node used for chaining multiple screens together.
> - Returns `{x, y, parentId?}`. Insert or Copy into `parentId` (or `document` if absent) at the returned `x`/`y`.
>
> ## Examples
>
> Create the reusable `Metric` component (a vertical frame with a label and a value text) in its own `batch_design`.
>
> ```js
> const pos=FindEmptySpace({width:240,height:96,direction:"top", padding:80})
> metricCard=Insert(document,{type:"frame",name:"Metric",x:pos.x,y:pos.y,reusable:true,layout:"vertical",gap:4,placeholder:true})
> metricLabel=Insert(metricCard,{type:"text",name:"Label",fontFamily:"Inter",fontSize:13,fill:"$text-secondary",content:"Label"})
> metricValue=Insert(metricCard,{type:"text",name:"Value",fontFamily:"Inter",fontSize:28,fill:"$text-primary",content:"0"})
> Update(metricCard,{placeholder:false})
> ```
>
> Insert a screen at the document root and fill it with a loop:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> page=Insert(document,{type:"frame",name:"Landing Page",x:pos.x,y:pos.y,layout:"vertical",width:1440,padding:40,gap:24,clip:true,placeholder:true})
>
> const navItem={type:"text",fontFamily:"Inter",fontSize:14,fill:"$text-secondary"}
> nav=Insert(page,{type:"frame",name:"Nav",gap:32,alignItems:"center",width:"fill_container"})
> for (const label of ["Home","Our Story","Visit","Journal"]) {
>   Insert(nav,{...navItem,name:label,content:label})
> }
> ```
>
> Instantiate the component in a loop, keyed by the captured `metricLabel`/`metricValue` IDs:
>
> ```js
> row=Insert(page,{type:"frame",name:"Metrics",gap:16,width:"fill_container"})
> for (const [label,value] of [["Orders","1,284"],["Revenue","$48.2K"],["Customers","9,431"]]) {
>   Insert(row,{type:"ref",ref:metricCard,name:label,width:"fill_container",descendants:{[metricLabel]:{content:label},[metricValue]:{content:value}}})
> }
>
> Update(page,{placeholder:false})
> ```
>
> Copy an existing screen, customize its descendants in the same `Copy` call, and delete a node:
>
> ```js
> const pos=FindEmptySpace({width:1440,height:1024,padding:80})
> dashboardV2=Copy("Xk9f2",document,{name:"Dashboard V2",x:pos.x,y:pos.y,placeholder:true,descendants:{"Jd6Ru":{fill:"#0F172A"},"Pc2Ny/Gh9Kf":{content:"Reports"}}})
> Update(dashboardV2,{placeholder:false})
>
> Delete("Vn4kP")
> ```
>
> Define the design tokens first, then reference them with `$` when building. Themed values are passed as `{value, theme}` arrays (the `dark` axis value is registered on the fly), so `$bg`/`$text-primary` references resolve per theme automatically:
>
> ```js
> SetVariables({
>   "bg":{type:"color",value:[
>     {value:"#FAFAF7",theme:{mode:"light"}},
>     {value:"#141414",theme:{mode:"dark"}}
>   ]},
>   "text-primary":{type:"color",value:[
>     {value:"#1A1A1A",theme:{mode:"light"}},
>     {value:"#F5F5F5",theme:{mode:"dark"}}
>   ]},
>   "font-body":{type:"string",value:"Inter"},
>   "gap-md":{type:"number",value:16}
> })
>
> card=Insert(document,{type:"frame",name:"Card",layout:"vertical",fill:"$bg",padding:"$gap-md",gap:"$gap-md",x:80,y:80})
> Insert(card,{type:"text",name:"Title",fontFamily:"$font-body",fontSize:20,fill:"$text-primary",content:"Tokens applied"})
> ```
> ````
>
> <details><summary>Explored a file, a search, a list</summary>
>
> - Listed files in `.`
> - Searched for `Merchant|font-family|--omf-|#[0-9A-Fa-f]{3,8}` in `README.md`
> - Read `./docs/document-upload-prd.md`
>
> </details>
>
> </details>
>
> Working on Phase 0.a: Pencil and repo source inventory. The repo has no Code Connect mappings, so CX reuse will be resolved from the existing Figma screens and the published library. Merchant is the product typeface, and the PRD—not the exploratory canvas copy—remains authoritative for required `Other document` behavior.
>
> <details><summary>Explored a search, called 2 tools</summary>
>
> MCP tool call
>
> pencil.get_variables
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen"
> }
> ```
>
> ```text
> {"themes":{"Breakpoint":["Desktop","Mobile"]},"variables":{"color-body-attention":{"type":"color","value":"#d62940"},"color-body-caution":{"type":"color","value":"#856b05"},"color-body-default":{"type":"color","value":"#4b576c"},"color-body-emphasis":{"type":"color","value":"#051958"},"color-body-info":{"type":"color","value":"#0e45e3"},"color-body-inverse":{"type":"color","value":"#f0f0f3"},"color-body-inverse-emphasis":{"type":"color","value":"#ffffff"},"color-body-inverse-moderate":{"type":"color","value":"#e8eaec"},"color-body-moderate":{"type":"color","value":"#62738c"},"color-body-muted":{"type":"color","value":"#7e93b4"},"color-body-negative":{"type":"color","value":"#d62940"},"color-body-placeholder":{"type":"color","value":"#7e93b4"},"color-body-positive":{"type":"color","value":"#008353"},"color-body-selected":{"type":"color","value":"#002169"},"color-body-strong":{"type":"color","value":"#36445a"},"color-body-subtle":{"type":"color","value":"#cbd5e1"},"color-core-blue-100":{"type":"color","value":"#E7F0FF"},"color-core-blue-200":{"type":"color","value":"#CCDFFF"},"color-core-blue-600":{"type":"color","value":"#2749AD"},"color-core-blue-700":{"type":"color","value":"#0733A6"},"color-core-blue-800":{"type":"color","value":"#17398B"},"color-core-blue-950":{"type":"color","value":"#051958"},"color-core-green-medium":{"type":"color","value":"#51DBA9"},"color-core-red-500":{"type":"color","value":"#FF5D4F"},"color-line-attention":{"type":"color","value":"#f7e9a8"},"color-line-caution":{"type":"color","value":"#f7e9a8"},"color-line-default":{"type":"color","value":"#7e93b4"},"color-line-emphasis":{"type":"color","value":"#62738c"},"color-line-focus":{"type":"color","value":"#ac75ff"},"color-line-info":{"type":"color","value":"#ccdfff"},"color-line-inverse":{"type":"color","value":"#62738c"},"color-line-inverse-focus":{"type":"color","value":"#e3d1ff"},"color-line-moderate":{"type":"color","value":"#cbd5e1"},"color-line-muted":{"type":"color","value":"#e8eaec"},"color-line-negative":{"type":"color","value":"#ffc8c2"},"color-line-positive":{"type":"color","value":"#b5f2db"},"color-line-secondary":{"type":"color","value":"#406def"},"color-line-secondary-disabled":{"type":"color","value":"#a0b8f2"},"color-line-secondary-inverse":{"type":"color","value":"#f3f7fc"},"color-line-secondary-inverse-active":{"type":"color","value":"#ccdfff"},"color-line-secondary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-line-selected":{"type":"color","value":"#002169"},"color-line-subtle":{"type":"color","value":"#f0f0f3"},"color-on-primary":{"type":"color","value":"#ffffff"},"color-on-primary-disabled":{"type":"color","value":"#ffffff"},"color-on-primary-inverse":{"type":"color","value":"#0e45e3"},"color-on-primary-inverse-disabled":{"type":"color","value":"#4b576c"},"color-on-secondary":{"type":"color","value":"#0e45e3"},"color-on-secondary-disabled":{"type":"color","value":"#a0b8f2"},"color-on-secondary-inverse":{"type":"color","value":"#ffffff"},"color-on-secondary-inverse-active":{"type":"color","value":"#ccdfff"},"color-on-secondary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-on-tertiary":{"type":"color","value":"#0e45e3"},"color-on-tertiary-disabled":{"type":"color","value":"#a0b8f2"},"color-on-tertiary-inverse":{"type":"color","value":"#ffffff"},"color-on-tertiary-inverse-active":{"type":"color","value":"#ccdfff"},"color-on-tertiary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-primary":{"type":"color","value":"#0e45e3"},"color-primary-active":{"type":"color","value":"#0733a6"},"color-primary-disabled":{"type":"color","value":"#a0b8f2"},"color-primary-hover":{"type":"color","value":"#406def"},"color-primary-inverse":{"type":"color","value":"#ffffff"},"color-primary-inverse-active":{"type":"color","value":"#ccdfff"},"color-primary-inverse-disabled":{"type":"color","value":"#7e93b4"},"color-primary-inverse-hover":{"type":"color","value":"#e7f0ff"},"color-secondary":{"type":"color","value":"#ffffff00"},"color-secondary-active":{"type":"color","value":"#ccdfff"},"color-secondary-disabled":{"type":"color","value":"#ffffff00"},"color-secondary-hover":{"type":"color","value":"#e7f0ff"},"color-secondary-inverse":{"type":"color","value":"#ffffff00"},"color-secondary-inverse-active":{"type":"color","value":"#17398b"},"color-secondary-inverse-hover":{"type":"color","value":"#17398b"},"color-surface-backdrop":{"type":"color","value":"#f6f6f1"},"color-surface-base":{"type":"color","value":"#ffffff"},"color-surface-base-hover":{"type":"color","value":"#fafafc"},"color-surface-caution":{"type":"color","value":"#fcfaeb"},"color-surface-caution-active":{"type":"color","value":"#f7e9a8"},"color-surface-caution-hover":{"type":"color","value":"#fffddb"},"color-surface-info":{"type":"color","value":"#f3f7fc"},"color-surface-info-active":{"type":"color","value":"#ccdfff"},"color-surface-info-hover":{"type":"color","value":"#e7f0ff"},"color-surface-info-layer-1":{"type":"color","value":"#e7f0ff"},"color-surface-info-layer-2":{"type":"color","value":"#ccdfff"},"color-surface-inverse-backdrop":{"type":"color","value":"#051958"},"color-surface-inverse-backdrop-active":{"type":"color","value":"#0733a6"},"color-surface-inverse-backdrop-hover":{"type":"color","value":"#fff0f0"},"color-surface-inverse-base":{"type":"color","value":"#002169"},"color-surface-layer-1":{"type":"color","value":"#fafafc"},"color-surface-layer-2":{"type":"color","value":"#f5f6f9"},"color-surface-negative":{"type":"color","value":"#fbf3f1"},"color-surface-negative-active":{"type":"color","value":"#ffc8c2"},"color-surface-negative-disabled":{"type":"color","value":"#fbf3f1"},"color-surface-negative-hover":{"type":"color","value":"#fff0f0"},"color-surface-negative-inverse":{"type":"color","value":"#C94D53"},"color-surface-negative-inverse-active":{"type":"color","value":"#ffc8c2"},"color-surface-negative-inverse-disabled":{"type":"color","value":"#fbf3f1"},"color-surface-negative-inverse-hover":{"type":"color","value":"#fff0f0"},"color-surface-positive":{"type":"color","value":"#eefbf6"},"color-surface-positive-active":{"type":"color","value":"#b5f2db"},"color-surface-positive-hover":{"type":"color","value":"#dcfaed"},"color-surface-promo":{"type":"color","value":[{"theme":{"Breakpoint":"Desktop"},"value":"#406def"},{"theme":{"Breakpoint":"Mobile"},"value":"#406def"}]},"color-tertiary":{"type":"color","value":"#ffffff00"},"color-tertiary-active":{"type":"color","value":"#ccdfff"},"color-tertiary-disabled":{"type":"color","value":"#ffffff00"},"color-tertiary-hover":{"type":"color","value":"#e7f0ff"},"color-tertiary-inverse":{"type":"color","value":"#ffffff00"},"color-tertiary-inverse-active":{"type":"color","value":"#17398b"},"color-tertiary-inverse-disabled":{"type":"color","value":"#ffffff00"},"color-tertiary-inverse-hover":{"type":"color","value":"#17398b"},"dimension-0":{"type":"number","value":0},"dimension-104":{"type":"number","value":104},"dimension-112":{"type":"number","value":112},"dimension-12":{"type":"number","value":12},"dimension-120":{"type":"number","value":120},"dimension-16":{"type":"number","value":16},"dimension-160":{"type":"number","value":160},"dimension-2":{"type":"number","value":2},"dimension-20":{"type":"number","value":20},"dimension-200":{"type":"number","value":200},"dimension-24":{"type":"number","value":24},"dimension-240":{"type":"number","value":240},"dimension-28":{"type":"number","value":28},"dimension-280":{"type":"number","value":280},"dimension-32":{"type":"number","value":32},"dimension-320":{"type":"number","value":320},"dimension-36":{"type":"number","value":36},"dimension-360":{"type":"number","value":360},"dimension-4":{"type":"number","value":4},"dimension-40":{"type":"number","value":40},"dimension-44":{"type":"number","value":44},"dimension-48":{"type":"number","value":48},"dimension-56":{"type":"number","value":56},"dimension-64":{"type":"number","value":64},"dimension-72":{"type":"number","value":72},"dimension-8":{"type":"number","value":8},"dimension-80":{"type":"number","value":80},"dimension-88":{"type":"number","value":88},"dimension-96":{"type":"number","value":96},"elevation-1":{"type":"string","value":"1px 3px 25px 0px rgba(63, 61, 86, 0.03)"},"elevation-1-color":{"type":"color","value":"#3F3D5608"},"elevation-2":{"type":"string","value":"6px 10px 35px 0px rgba(63, 61, 86, 0.07)"},"elevation-2-color":{"type":"color","value":"#3F3D5612"},"elevation-3":{"type":"string","value":"4px 12px 30px 0px rgba(107, 107, 103, 0.15)"},"elevation-3-color":{"type":"color","value":"#6B6B6726"},"font-body-caption-letter-spacing":{"type":"number","value":0},"font-body-caption-line-height":{"type":"number","value":20},"font-body-caption-size":{"type":"number","value":14},"font-body-default-letter-spacing":{"type":"number","value":0},"font-body-default-line-height":{"type":"number","value":24},"font-body-default-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":18},{"theme":{"Breakpoint":"Mobile"},"value":17}]},"font-body-supporting-letter-spacing":{"type":"number","value":0},"font-body-supporting-line-height":{"type":"number","value":20},"font-body-supporting-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":16},{"theme":{"Breakpoint":"Mobile"},"value":15}]},"font-data-primary-letter-spacing":{"type":"number","value":-0.5},"font-data-primary-line-height":{"type":"number","value":56},"font-data-primary-size":{"type":"number","value":48},"font-data-secondary-letter-spacing":{"type":"number","value":-0.3},"font-data-secondary-line-height":{"type":"number","value":40},"font-data-secondary-size":{"type":"number","value":32},"font-family-primary":{"type":"string","value":"DM Sans"},"font-headline-page-letter-spacing":{"type":"number","value":-0.3},"font-headline-page-line-height":{"type":"number","value":36},"font-headline-page-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":30}]},"font-headline-section-letter-spacing":{"type":"number","value":0},"font-headline-section-line-height":{"type":"number","value":24},"font-headline-section-size":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":22},{"theme":{"Breakpoint":"Mobile"},"value":19}]},"font-headline-tile-letter-spacing":{"type":"number","value":-0.24},"font-headline-tile-line-height":{"type":"number","value":32},"font-headline-tile-size":{"type":"number","value":24},"font-input-field-line-height":{"type":"number","value":24},"font-input-field-size":{"type":"number","value":20},"font-label-default-letter-spacing":{"type":"number","value":0},"font-label-default-line-height":{"type":"number","value":24},"font-label-default-size":{"type":"number","value":17},"font-label-large-1-letter-spacing":{"type":"number","value":0},"font-label-large-1-line-height":{"type":"number","value":24},"font-label-large-1-size":{"type":"number","value":19},"font-label-small-1-letter-spacing":{"type":"number","value":0},"font-label-small-1-line-height":{"type":"number","value":24},"font-label-small-1-size":{"type":"number","value":15},"font-label-small-2-letter-spacing":{"type":"number","value":0},"font-label-small-2-line-height":{"type":"number","value":16},"font-label-small-2-size":{"type":"number","value":13},"font-label-small-3-letter-spacing":{"type":"number","value":0},"font-label-small-3-line-height":{"type":"number","value":16},"font-label-small-3-size":{"type":"number","value":11},"font-weight-bold":{"type":"number","value":700},"font-weight-light":{"type":"number","value":300},"font-weight-medium":{"type":"number","value":500},"font-weight-regular":{"type":"number","value":400},"gap-content":{"type":"number","value":32},"gap-content-area":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"gap-group-large":{"type":"number","value":24},"gap-group-small":{"type":"number","value":4},"gap-row-default":{"type":"number","value":16},"gap-row-large":{"type":"number","value":24},"gap-row-small":{"type":"number","value":8},"gap-tile-large":{"type":"number","value":24},"gap-tile-small":{"type":"number","value":12},"gap-x-component-default":{"type":"number","value":8},"gap-x-component-large":{"type":"number","value":12},"gap-x-component-small":{"type":"number","value":4},"gap-x-group":{"type":"number","value":8},"gap-x-pair":{"type":"number","value":8},"gap-x-row":{"type":"number","value":16},"gap-y-group":{"type":"number","value":16},"gap-y-list":{"type":"number","value":8},"gap-y-pair":{"type":"number","value":8},"gap-y-section":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"gap-y-surface":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"height-component-default":{"type":"number","value":48},"height-component-large-1":{"type":"number","value":56},"height-component-large-2":{"type":"number","value":64},"height-component-large-3":{"type":"number","value":80},"height-component-small-1":{"type":"number","value":40},"height-component-small-2":{"type":"number","value":36},"height-component-small-3":{"type":"number","value":32},"height-component-small-4":{"type":"number","value":28},"height-component-small-5":{"type":"number","value":24},"margin-surface-base":{"type":"number","value":0},"padding-content-area":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":32},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"padding-surface-1":{"type":"number","value":16},"padding-surface-2":{"type":"number","value":16},"padding-surface-base":{"type":"number","value":[{"theme":{"Breakpoint":"Desktop"},"value":24},{"theme":{"Breakpoint":"Mobile"},"value":16}]},"padding-x-component-default":{"type":"number","value":24},"padding-x-component-default-icon-offset":{"type":"number","value":20},"padding-x-component-large":{"type":"number","value":24},"padding-x-component-large-1":{"type":"number","value":32},"padding-x-component-large-1-icon-offset":{"type":"number","value":28},"padding-x-component-large-2":{"type":"number","value":40},"padding-x-component-large-2-icon-offset":{"type":"number","value":36},"padding-x-component-large-icon-offset":{"type":"number","value":16},"padding-x-component-small":{"type":"number","value":16},"padding-x-component-small-1":{"type":"number","value":20},"padding-x-component-small-1-icon-offset":{"type":"number","value":16},"padding-x-component-small-2-icon-offset":{"type":"number","value":12},"padding-x-component-small-3":{"type":"number","value":12},"padding-x-component-small-4":{"type":"number","value":8},"padding-x-component-small-icon-offset":{"type":"number","value":8},"shape-radius-default":{"type":"number","value":8},"shape-radius-full":{"type":"number","value":999},"shape-radius-large-1":{"type":"number","value":16},"shape-radius-medium-1":{"type":"number","value":12},"shape-radius-small-1":{"type":"number","value":4},"shape-radius-small-2":{"type":"number","value":2},"size-icon-default":{"type":"number","value":24},"size-icon-large-1":{"type":"number","value":40},"size-icon-large-2":{"type":"number","value":32},"size-icon-small-1":{"type":"number","value":20},"size-icon-small-2":{"type":"number","value":16},"size-icon-small-3":{"type":"number","value":12},"stroke-default":{"type":"number","value":1.4},"stroke-large-1":{"type":"number","value":1.7},"stroke-large-2":{"type":"number","value":2.2},"stroke-small-1":{"type":"number","value":1.2}}}
> ```
>
> MCP tool call
>
> pencil.batch_get
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeIds": [
>     "C7ypH",
>     "hl9HZ"
>   ],
>   "readDepth": 2,
>   "resolveVariables": true
> }
> ```
>
> ```text
> [{"children":[{"children":[{"content":"Direction A — Components","id":"L14UbI","name":"Components Title","ref":"J1tfP5","type":"ref"},{"content":"DROP ZONE","fill":"#62738c","fontFamily":"DM Sans","fontSize":11,"fontWeight":"700","id":"z5qArl","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Drop Zone","type":"text"},{"alignItems":"center","children":"...","cornerRadius":12,"fill":"#ffffff","gap":8,"id":"kwrZm","justifyContent":"center","layout":"vertical","name":"Drop Zone","padding":[28,24],"reusable":true,"stroke":"#cbd5e1","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":760},{"content":"UPLOAD PROGRESS BAR","fill":"#62738c","fontFamily":"DM Sans","fontSize":11,"fontWeight":"700","id":"cEqyF","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Upload Progress Bar","type":"text"},{"children":"...","clip":true,"cornerRadius":999,"fill":"#e8eaec","height":8,"id":"L4EBjh","layout":"none","name":"Upload Progress Bar","reusable":true,"type":"frame","width":240},{"content":"RAIL DOC ITEM","fill":"#62738c","fontFamily":"DM Sans","fontSize":11,"fontWeight":"700","id":"QiHZK","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Rail Doc Item","type":"text"},{"alignItems":"center","children":"...","gap":8,"id":"nIrAd","justifyContent":"space_between","name":"Rail Doc Item","reusable":true,"type":"frame","width":312},{"content":"SELECTED FILE ROW","fill":"#62738c","fontFamily":"DM Sans","fontSize":11,"fontWeight":"700","id":"PZuei","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Selected File Row","type":"text"},{"alignItems":"center","children":"...","cornerRadius":12,"fill":"#f5f6f9","gap":16,"id":"p3DcE","justifyContent":"space_between","name":"Selected File Row","padding":[12,16],"reusable":true,"type":"frame","width":760},{"content":"DOCUMENT CHECKLIST CARD","fill":"#62738c","fontFamily":"DM Sans","fontSize":11,"fontWeight":"700","id":"Ug2qs","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Document Checklist Card","type":"text"},{"children":"...","cornerRadius":16,"fill":"#ffffff","gap":16,"id":"Wwg0d","layout":"vertical","name":"Document Checklist Card","padding":24,"reusable":true,"stroke":"#e8eaec","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":808},{"content":"REQUEST SUMMARY RAIL","fill":"#62738c","fontFamily":"DM Sans","fontSize":11,"fontWeight":"700","id":"sSc28","letterSpacing":0.8,"lineHeight":1.4545,"name":"Section Label — Request Summary Rail","type":"text"},{"children":"...","cornerRadius":16,"fill":"#ffffff","gap":20,"id":"q50qn","layout":"vertical","name":"Request Summary Rail","padding":24,"reusable":true,"stroke":"#e8eaec","strokeAlignment":"inner","strokeWidth":1,"type":"frame","width":360}],"cornerRadius":16,"fill":"#fafafc","gap":16,"id":"VXpI0","layout":"vertical","name":"Direction A — Components","padding":40,"stroke":"#e8eaec","strokeAlignment":"inner","strokeWidth":1,"type":"frame"},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"V8em2","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":32,"id":"LTMoe","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"I94Kf","layout":"vertical","name":"Desktop — Default · All Outstanding","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"height":80,"id":"WAQNk","name":"Web Nav Bar","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":32,"id":"leqM5","layout":"vertical","name":"Page Content","padding":[40,120,72,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"u2oh4H","layout":"vertical","name":"Desktop — Mixed \u0026 Edge States","type":"frame","width":1440},{"children":[{"children":"...","clip":true,"fill":"#f6f6f1","id":"Y04JX","layout":"vertical","name":"Desktop — All Uploaded This Session","type":"frame","width":1440},{"children":"...","clip":true,"cornerRadius":16,"fill":"#f6f6f1","gap":16,"id":"J5cEpv","layout":"vertical","name":"Document Center — No Active Request","padding":40,"type":"frame","width":720}],"gap":48,"id":"TYRfl","layout":"vertical","name":"Desktop — All Uploaded + No Active Request","type":"frame"},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"M3UvPC","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"zhk2o","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"},{"id":"Z9eqOe","name":"Bottom Nav Bar","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"zwZnb","layout":"vertical","name":"Mobile App — Checklist Hub","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"#ffffff","id":"j7RFi","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"kQq3f","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"},{"id":"k88WEw","name":"Bottom Nav Bar","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"fj673","layout":"vertical","name":"A-M1 · App — Document Center · Active request","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"#ffffff","id":"e5hH1","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"s8zPe","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"},{"id":"AlocF","name":"Bottom Nav Bar","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"K1Srj","layout":"vertical","name":"A-M2 · App — Document Center · No active request","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"qBvjT","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"PJ9ac","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"I41wWk","layout":"vertical","name":"A-M3 · App — Checklist · Default","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"Tvq9x","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"ZBjwt","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"B1hNRM","layout":"vertical","name":"A-M4 · App — Checklist · Mixed states","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"ZhHRI","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"R2wAUN","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"w48oV","layout":"vertical","name":"A-M5 · App — Checklist · File too large","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"Qbwzb","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"SoLfT","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"JByYQ","layout":"vertical","name":"A-M6 · App — Checklist · Other needs a note","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"bZ45L","name":"App Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"yeA4X","layout":"vertical","name":"Page Content","padding":[16,16,32,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"E8l8nb","layout":"vertical","name":"A-M7 · App — All uploaded this visit","type":"frame","width":390}],"gap":120,"id":"C7ypH","name":"Direction A — Checklist Hub","type":"frame","x":0,"y":40653},{"children":[{"children":[{"content":"Direction B — Components","fill":"#62738c","fontFamily":"DM Sans","fontSize":14,"fontWeight":"500","id":"P10Ave","lineHeight":1.4286,"name":"Components Caption","type":"text"},{"alignItems":"center","children":"...","cornerRadius":16,"fill":"#f3f7fc","gap":16,"id":"zc9dZ","name":"B / Request Summary","padding":16,"reusable":true,"type":"frame","width":358},{"children":"...","gap":8,"id":"TQeTt","layout":"vertical","name":"B / Progress Header","reusable":true,"type":"frame","width":358},{"alignItems":"center","children":"...","cornerRadius":12,"fill":"#fafafc","gap":8,"id":"LMMoY","layout":"vertical","name":"B / Upload Zone","padding":[24,16],"reusable":true,"stroke":"#7e93b4","strokeWidth":1.4,"type":"frame","width":358},{"children":"...","cornerRadius":12,"fill":"#ffffff","gap":8,"id":"pnQBG","layout":"vertical","name":"B / File Row","padding":12,"reusable":true,"stroke":"#e8eaec","strokeWidth":1,"type":"frame","width":358},{"alignItems":"center","children":"...","cornerRadius":16,"fill":"#ffffff","gap":16,"id":"NmACi","name":"B / Document Item","padding":16,"reusable":true,"stroke":"#e8eaec","strokeWidth":1,"type":"frame","width":358}],"cornerRadius":16,"fill":"#ffffff","gap":32,"id":"qyynU","layout":"vertical","name":"Direction B — Components","padding":32,"stroke":"#e8eaec","strokeWidth":1,"type":"frame"},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"#ffffff","id":"y37hS","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"fvp1U","layout":"vertical","name":"Content","padding":[24,16,32,16],"type":"frame","width":"fill_container"},{"id":"e6MLK3","name":"Bottom Nav","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"cMzk2","layout":"vertical","name":"B1 · App — Document Center · Active request","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"width":390}},"fill":"#ffffff","id":"fkACy","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"F9D8h","layout":"vertical","name":"Content","padding":[24,16,32,16],"type":"frame","width":"fill_container"},{"id":"OaKkG","name":"Bottom Nav","ref":"pu7Qz","type":"ref","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"UKY0H","layout":"vertical","name":"B2 · App — Document Center · No active request","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"r9Vv8","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"YSP94","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"O8sAyn","layout":"vertical","name":"B3 · App — Document Upload · Overview (mixed states)","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"K2JjDG","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"IT0DW","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"S1lRh1","layout":"vertical","name":"B4 · App — Step · File selected","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"IobGa","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"E1wzl7","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"S68zZ","layout":"vertical","name":"B5 · App — Step · File validation error","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"w9nTM","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"WXtUt","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"VkQpT","layout":"vertical","name":"B6 · App — Step · Other document · Note required","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"ROtgX","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"fMKY4","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"twv9F","layout":"vertical","name":"B7 · App — Step · Uploading","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"VhRL4","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"children":"...","gap":16,"id":"lUJCe","layout":"vertical","name":"Content","padding":[16,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"mA5La","layout":"vertical","name":"B8 · App — Step · Upload failed · Retry","type":"frame","width":390},{"children":[{"descendants":{"Gi7T6":{"enabled":false},"ZGzv2/P6O70":{"content":"Help"},"vv0xy":{"enabled":true,"width":390}},"fill":"#ffffff","id":"pKGBg","name":"Menu Bar","ref":"BHWrb","type":"ref","width":390},{"alignItems":"center","children":"...","gap":16,"id":"NpboK","layout":"vertical","name":"Content","padding":[24,16,40,16],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"jvr2D","layout":"vertical","name":"B9 · App — All uploaded this visit","type":"frame","width":390},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"nPuEL","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"qAOta","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"bPgqn","layout":"vertical","name":"B10 · Web Desktop — Guided upload","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"h9xuK","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"UAwUB","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"ELYM6","layout":"vertical","name":"B11 · Web Desktop — Document Center · Active request","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"N8y0ha","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"XXUhQ","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"ElLoj","layout":"vertical","name":"B12 · Web Desktop — Document Center · No active request","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"rccUT","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"si7bS","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"TBiql","layout":"vertical","name":"B13 · Web Desktop — Step · File selected","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"zbGjf","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"RbYF5","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"dSjDc","layout":"vertical","name":"B14 · Web Desktop — Step · File validation error","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"n2ZYvG","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"lNSF9","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"tZ57p","layout":"vertical","name":"B15 · Web Desktop — Step · Other document · Note required","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"t4FdG","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"kUE9G","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"cNzKe","layout":"vertical","name":"B16 · Web Desktop — Step · Uploading","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"kD6RB","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"children":"...","gap":24,"id":"h2hB6","layout":"vertical","name":"Content","padding":[40,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"d9cED","layout":"vertical","name":"B17 · Web Desktop — Step · Upload failed · Retry","type":"frame","width":1440},{"children":[{"descendants":{"H0KkIm":{"enabled":true,"width":1440},"y43Fa":{"enabled":false}},"fill":"#ffffff","height":80,"id":"Vy6Pj","name":"Web Nav","ref":"owJch","type":"ref","width":1440},{"alignItems":"center","children":"...","id":"IacrB","layout":"vertical","name":"Content","padding":[48,120,64,120],"type":"frame","width":"fill_container"}],"clip":true,"fill":"#f6f6f1","id":"UnIG6","layout":"vertical","name":"B18 · Web Desktop — All uploaded this visit","type":"frame","width":1440}],"gap":120,"id":"hl9HZ","name":"Direction B — Guided Focus Flow","type":"frame","x":0,"y":42905}]
> ```
>
> <details><summary>Explored a search</summary>
>
> - Searched for `getMainComponentAsync|mainComponent:` in `plugin-api-standalone.d.ts`
>
> </details>
>
> </details>
>
> Working on Phase 0.b: target Figma file inspection. I’m checking the existing `Doc Upload` and `Local Components` pages first so the new work matches the file’s conventions and reuses any already-instanced CX assets before searching the library.
>
> <details><summary>Called 3 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Inspect the existing Doc Upload page for reusable component instances, variables, styles, and layout conventions without changing it",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const page = await figma.getNodeByIdAsync(\"0:1\");\nawait figma.setCurrentPageAsync(page);\nfigma.skipInvisibleInstanceChildren = true;\nconst topLevel = page.children.map(n => ({id:n.id,name:n.name,type:n.type,x:n.x,y:n.y,width:n.width,height:n.height}));\nconst instances = page.findAllWithCriteria({types:[\"INSTANCE\"]});\nconst mainComponents = await Promise.all(instances.map(i => i.getMainComponentAsync()));\nconst components = new Map();\nfor (let index=0; index<instances.length; index++) {\n  const inst = instances[index];\n  const mc = mainComponents[index];\n  if (!mc) continue;\n  const parent = mc.parent && mc.parent.type === \"COMPONENT_SET\" ? mc.parent : null;\n  const key = parent?.key || mc.key;\n  if (key && !components.has(key)) components.set(key,{instanceName:inst.name,componentName:parent?.name || mc.name,key,isSet:!!parent,remote:mc.remote,sampleVariant:mc.name});\n}\nconst all = [page,...page.findAll(() => true)];\nconst varIds = new Set();\nconst textStyleIds = new Set();\nconst effectStyleIds = new Set();\nfor (const n of all) {\n  for (const binding of Object.values(n.boundVariables || {})) {\n    for (const item of (Array.isArray(binding) ? binding : [binding])) if (item?.id) varIds.add(item.id);\n  }\n  if (\"textStyleId\" in n && typeof n.textStyleId === \"string\" && n.textStyleId) textStyleIds.add(n.textStyleId);\n  if (\"effectStyleId\" in n && typeof n.effectStyleId === \"string\" && n.effectStyleId) effectStyleIds.add(n.effectStyleId);\n}\nconst variables = (await Promise.all([...varIds].map(id => figma.variables.getVariableByIdAsync(id)))).filter(Boolean).map(v=>({name:v.name,id:v.id,key:v.key,type:v.resolvedType,remote:v.remote}));\nconst textStyles = (await Promise.all([...textStyleIds].map(id=>figma.getStyleByIdAsync(id)))).filter(Boolean).map(s=>({name:s.name,id:s.id,key:s.key,remote:s.remote}));\nconst effectStyles = (await Promise.all([...effectStyleIds].map(id=>figma.getStyleByIdAsync(id)))).filter(Boolean).map(s=>({name:s.name,id:s.id,key:s.key,remote:s.remote}));\nreturn {page:{id:page.id,name:page.name},topLevel,componentInstanceCount:instances.length,components:[...components.values()],variables,textStyles,effectStyles};"
> }
> ```
>
> ```text
> {"page":{"id":"0:1","name":"Doc Upload"},"topLevel":[{"id":"4:117","name":"Doc Upload / Overview","type":"FRAME","x":0,"y":0,"width":1250,"height":150},{"id":"4:120","name":"Current States","type":"FRAME","x":0,"y":190,"width":1250,"height":940},{"id":"4:122","name":"Initial States — No uploads yet","type":"FRAME","x":0,"y":1487,"width":1250,"height":940},{"id":"17:5975","name":"Frame - 390px","type":"FRAME","x":-945,"y":239,"width":390,"height":984},{"id":"17:6206","name":"Frame - 390px","type":"FRAME","x":-515,"y":239,"width":390,"height":980},{"id":"17:6438","name":"Other Document Upload Item / Needed","type":"INSTANCE","x":-1157,"y":1511,"width":358,"height":216}],"componentInstanceCount":191,"components":[{"instanceName":"Document Upload App Bar","componentName":"Document Upload App Bar","key":"88a2daffd572ac31aee5b3e3d81fee49c65639ab","isSet":false,"remote":false,"sampleVariant":"Document Upload App Bar"},{"instanceName":"CX Back Button","componentName":"Back Button","key":"2d874c88b025d3127921d0fdd0e668f693def659","isSet":true,"remote":true,"sampleVariant":"Show Headline=False"},{"instanceName":"arrow-left","componentName":"arrow-left","key":"41ee07e92ebb434b23679b1d48d205a2b89a8f1e","isSet":false,"remote":true,"sampleVariant":"arrow-left"},{"instanceName":"Document Request Summary","componentName":"Document Request Summary","key":"4cc398a0aff92c239a8c06ddc12f654d7daf554e","isSet":true,"remote":false,"sampleVariant":"Progress=Partial"},{"instanceName":"Status-Tag","componentName":"Status-Tag","key":"c636fb0e47c184362a85971bdd3abfc12310f724","isSet":true,"remote":true,"sampleVariant":"Size=Default, Sentiment=Informative, Layout=No Icon"},{"instanceName":"Other Document Upload Item / Failed","componentName":"Other Document Upload Item","key":"56048f24ab54cb339e04ffcf9e84cfbd707d2ae9","isSet":true,"remote":false,"sampleVariant":"State=Failed"},{"instanceName":"page-flip","componentName":"page-flip","key":"b3827f91ecd110d9141c999f84897cc440a6bdc9","isSet":false,"remote":true,"sampleVariant":"page-flip"},{"instanceName":"CX Text Input / Document type","componentName":"Text Input","key":"d61e13ad0473c59d3ffc7f508fe2930b5594d8a2","isSet":true,"remote":true,"sampleVariant":"State=Error"},{"instanceName":"warning-circle","componentName":"warning-circle","key":"2a679758b0678360456c98d3b5e5fa03d255bfe0","isSet":false,"remote":true,"sampleVariant":"warning-circle"},{"instanceName":"CX Button / Retry","componentName":"Button","key":"93c929f1ab62af6beb62211797d1506066995587","isSet":true,"remote":true,"sampleVariant":"Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Enabled, Polarity=Default"},{"instanceName":"Nested Icon Component","componentName":"refresh-double","key":"5eb60fd4f45144863ae848c14250d581ee50ef61","isSet":false,"remote":true,"sampleVariant":"refresh-double"},{"instanceName":"Document Upload Item / Uploaded","componentName":"Document Upload Item","key":"03f824b633ba525e7422a8ac87b42e6e725926dd","isSet":true,"remote":false,"sampleVariant":"State=Uploaded"},{"instanceName":"Nested Icon Component","componentName":"edit-pencil","key":"671ef3fe3ec653da4004b22b47e72addcd134bae","isSet":false,"remote":true,"sampleVariant":"edit-pencil"},{"instanceName":"Nested Icon Component","componentName":"upload","key":"87442b1bbb38a45fa26942cf781c956cb011a58c","isSet":false,"remote":true,"sampleVariant":"upload"},{"instanceName":"CX Loan Request List Item","componentName":"List Item","key":"ba1d31e66c08df94cb93982fe7ab5784eef5ce4c","isSet":true,"remote":true,"sampleVariant":"Type=Navigation, 👀 Tile=True"},{"instanceName":"nav-arrow-right","componentName":"nav-arrow-right","key":"b616dbd8ec674441f1f89bb405f6d78fabe179f2","isSet":false,"remote":true,"sampleVariant":"nav-arrow-right"},{"instanceName":"Guided Upload Card","componentName":"Guided Upload Card","key":"2df7de61e7d00d1cf550f09df8d8abd974dcaa55","isSet":true,"remote":false,"sampleVariant":"type=Default"},{"instanceName":"Button Stack","componentName":"Button Stack","key":"493eb042a6bd218c9f833fdaf27e2088ca003f7e","isSet":true,"remote":true,"sampleVariant":"Device=Mobile, Show Buttons=1 + 3"},{"instanceName":"CX Bottom Nav Bar","componentName":"Bottom Nav Bar","key":"d4c7816fd6e23a898338f1ad5bde90a1e4260e91","isSet":true,"remote":true,"sampleVariant":"Items=4, Breakpoint=375"},{"instanceName":".Bottom Nav Item","componentName":".Bottom Nav Item","key":"41ed1665843851df6633970a1203872f19b5d5d3","isSet":true,"remote":true,"sampleVariant":"Selected=True, State=Enabled, Breakpoint=Default"},{"instanceName":"heart-filled","componentName":"heart-filled","key":"71c9f99f900984cfbdeaee110af04db4065e32e5","isSet":false,"remote":true,"sampleVariant":"heart-filled"},{"instanceName":"heart-outline","componentName":"heart-outline","key":"ca195938b175504078aa1ab9f666fd69c4e0776e","isSet":false,"remote":true,"sampleVariant":"heart-outline"},{"instanceName":"CX Alert / Error","componentName":"Alert","key":"b5a2890843d77dd7e88c587d6fb55dbeaa7c45a6","isSet":true,"remote":true,"sampleVariant":"Type=Error"},{"instanceName":"Icon","componentName":"info-circle","key":"fa04c28754066cb95b7dad1fa4f20bd44e644204","isSet":false,"remote":true,"sampleVariant":"info-circle"},{"instanceName":"Menu Bar","componentName":"Menu Bar","key":"3a735a2be078b27b7f34aa8e4505d6a321d523f0","isSet":true,"remote":true,"sampleVariant":"Page Level=Secondary, State=Scrolling, Show Actions=False"},{"instanceName":".Back Button","componentName":".Back Button","key":"bd2c0b7c85a0264adfea4bd16a96d2887c32fa8a","isSet":true,"remote":true,"sampleVariant":"State=Enabled"},{"instanceName":"OneApp Navigation > Mobile Native","componentName":"OneApp Navigation > Mobile Native","key":"436a315bfd018c870eabf9aac6bbac004ae1f146","isSet":true,"remote":true,"sampleVariant":"Current Tab=Home"},{"instanceName":"home-filled","componentName":"home-filled","key":"79afe97bc078e0cf2c9edb0787045c132f00217e","isSet":false,"remote":true,"sampleVariant":"home-filled"},{"instanceName":"dollar-circle","componentName":"dollar-circle","key":"81e6e48ff3730b8f034a9785ed8271c9682c2ab7","isSet":false,"remote":true,"sampleVariant":"dollar-circle"},{"instanceName":"credit-card-outline","componentName":"credit-card-outline","key":"c1763f12d4f17c7b5c75d0365c7f94f4fa9ca18f","isSet":false,"remote":true,"sampleVariant":"credit-card-outline"},{"instanceName":"graph-up-outline","componentName":"graph-up-outline","key":"add2ca96c69eb59c690d55fe0738b69900b156af","isSet":false,"remote":true,"sampleVariant":"graph-up-outline"}],"variables":[{"name":"surface/surface-layer-1","id":"VariableID:25eb4a5fbeac907c74912e0703de0885b5b35c8c/21076:53","key":"25eb4a5fbeac907c74912e0703de0885b5b35c8c","type":"COLOR","remote":true},{"name":"body/body-emphasis","id":"VariableID:e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5/21076:77","key":"e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5","type":"COLOR","remote":true},{"name":"Headline/Tile/Letter Spacing","id":"VariableID:b7421b8058acd993f5f8ce6066ce5cc5fe1d28a1/21251:39","key":"b7421b8058acd993f5f8ce6066ce5cc5fe1d28a1","type":"FLOAT","remote":true},{"name":"Headline/Tile/Size","id":"VariableID:45704892b433427feda28e4e8939cd0521b04d17/21093:177","key":"45704892b433427feda28e4e8939cd0521b04d17","type":"FLOAT","remote":true},{"name":"core/FontPrimary","id":"VariableID:597c8dcea4d02abdedc2be201bc501127c21c083/3069:22","key":"597c8dcea4d02abdedc2be201bc501127c21c083","type":"STRING","remote":true},{"name":"Headline/Tile/Line Height","id":"VariableID:ce661a946dceb8aa8811a85041bec108e05b2390/21093:179","key":"ce661a946dceb8aa8811a85041bec108e05b2390","type":"FLOAT","remote":true},{"name":"Weight/Medium","id":"VariableID:7a79acda099e5943e69e28f48be6afc52538f900/21271:1","key":"7a79acda099e5943e69e28f48be6afc52538f900","type":"FLOAT","remote":true},{"name":"body/body-moderate","id":"VariableID:6b85ffe601c780c2b3d8cfd6ddee17358efacf4a/21076:80","key":"6b85ffe601c780c2b3d8cfd6ddee17358efacf4a","type":"COLOR","remote":true},{"name":"Label/Small 1/Letter Spacing","id":"VariableID:2ac626f851a426b278bace355714568b2be32a4d/21251:47","key":"2ac626f851a426b278bace355714568b2be32a4d","type":"FLOAT","remote":true},{"name":"Label/Small 1/Size","id":"VariableID:f7c3a7b169bed91bfb19d916a522c80fa08bbcdf/21096:227","key":"f7c3a7b169bed91bfb19d916a522c80fa08bbcdf","type":"FLOAT","remote":true},{"name":"Label/Small 1/Line Height","id":"VariableID:58be3dd79918081401f483573294ddfb9f3301a0/21096:231","key":"58be3dd79918081401f483573294ddfb9f3301a0","type":"FLOAT","remote":true},{"name":"Weight/Regular","id":"VariableID:47c76f88562d0278df97953a9c46c893ab87db58/21271:2","key":"47c76f88562d0278df97953a9c46c893ab87db58","type":"FLOAT","remote":true},{"name":"Label/Default/Letter Spacing","id":"VariableID:4f8c4f4041cf33c1ee69d0e0cde6b2fa5cf50533/21251:46","key":"4f8c4f4041cf33c1ee69d0e0cde6b2fa5cf50533","type":"FLOAT","remote":true},{"name":"Label/Default/Size","id":"VariableID:b4d879257ac86c1f2b6b868d68568d9ffb020d03/21096:219","key":"b4d879257ac86c1f2b6b868d68568d9ffb020d03","type":"FLOAT","remote":true},{"name":"Label/Default/Line Height","id":"VariableID:664ce58535b4b62485f149fb39aa6a023521a01c/21096:223","key":"664ce58535b4b62485f149fb39aa6a023521a01c","type":"FLOAT","remote":true},{"name":"surface/surface-backdrop","id":"VariableID:7c1862f3b2d88c49151ec1476c14b7e0b5ae135f/21076:50","key":"7c1862f3b2d88c49151ec1476c14b7e0b5ae135f","type":"COLOR","remote":true},{"name":"gap/gap-x-pair","id":"VariableID:5cc0037dc81fe644456c32f85bdf34b7ccb98357/19230:152","key":"5cc0037dc81fe644456c32f85bdf34b7ccb98357","type":"FLOAT","remote":true},{"name":"stroke/stroke-default","id":"VariableID:7fc0c5aec0149a61a1ad60019f1237d6830e0eb9/21093:167","key":"7fc0c5aec0149a61a1ad60019f1237d6830e0eb9","type":"FLOAT","remote":true},{"name":"primary/primary","id":"VariableID:681a8692631646db0e3429baaff64ab2a4013d47/21076:8","key":"681a8692631646db0e3429baaff64ab2a4013d47","type":"COLOR","remote":true},{"name":"gap/gap-x-component-small","id":"VariableID:61f7d2f88840037f77a473e4901dbe5b6bbfcb9e/21089:139","key":"61f7d2f88840037f77a473e4901dbe5b6bbfcb9e","type":"FLOAT","remote":true},{"name":"Headline/Page/Letter Spacing","id":"VariableID:40a9ccb13c7384322b56c7dae5962d671a7c20c0/21251:37","key":"40a9ccb13c7384322b56c7dae5962d671a7c20c0","type":"FLOAT","remote":true},{"name":"Headline/Page/Size","id":"VariableID:0260cc1e366f4591b302439511751ca359357bed/21093:169","key":"0260cc1e366f4591b302439511751ca359357bed","type":"FLOAT","remote":true},{"name":"Headline/Page/Line Height","id":"VariableID:a6513a5588217088f3d13661a4ab4a2219ff20a2/21093:171","key":"a6513a5588217088f3d13661a4ab4a2219ff20a2","type":"FLOAT","remote":true},{"name":"gap/gap-tile-small","id":"VariableID:84071545f33b16816dd47a1c7b43241abbf06694/21089:131","key":"84071545f33b16816dd47a1c7b43241abbf06694","type":"FLOAT","remote":true},{"name":"padding/padding-surface-base","id":"VariableID:f8291cb087425019b1b8723f3ed7f60702e043ee/21086:110","key":"f8291cb087425019b1b8723f3ed7f60702e043ee","type":"FLOAT","remote":true},{"name":"radius-large-1","id":"VariableID:daf259c9f52407453df55460e0226b60dc35ff50/21096:261","key":"daf259c9f52407453df55460e0226b60dc35ff50","type":"FLOAT","remote":true},{"name":"surface/surface-base","id":"VariableID:55416e4c1a1deae84265fd6039b8403bdd4f1deb/21076:51","key":"55416e4c1a1deae84265fd6039b8403bdd4f1deb","type":"COLOR","remote":true},{"name":"line/line-muted","id":"VariableID:73a0ee5c388edf54f537b576cada7cb87d190fcf/21076:98","key":"73a0ee5c388edf54f537b576cada7cb87d190fcf","type":"COLOR","remote":true},{"name":"Body/Default/Letter Spacing","id":"VariableID:72389b03914142485a2da3125bb78ba4d25f91a4/21251:40","key":"72389b03914142485a2da3125bb78ba4d25f91a4","type":"FLOAT","remote":true},{"name":"Body/Default/Size","id":"VariableID:60d09ae8f1e815edcad2b86003743280e88aa8c9/21093:181","key":"60d09ae8f1e815edcad2b86003743280e88aa8c9","type":"FLOAT","remote":true},{"name":"Body/Default/Line Height","id":"VariableID:dfe3ec64947dfdd35c82bfce08a2482ebacd0409/21093:185","key":"dfe3ec64947dfdd35c82bfce08a2482ebacd0409","type":"FLOAT","remote":true},{"name":"padding/padding-x-component-small-3","id":"VariableID:7752756741c378ebda7bc7bd5df7614d7eabad37/21089:124","key":"7752756741c378ebda7bc7bd5df7614d7eabad37","type":"FLOAT","remote":true},{"name":"padding/padding-x-component-small-2-iconOffset","id":"VariableID:192d270d4107c9744c4448b6a77cb5052594fb92/21089:123","key":"192d270d4107c9744c4448b6a77cb5052594fb92","type":"FLOAT","remote":true},{"name":"height/height-component-small4","id":"VariableID:66af10a23376effbc7e7675e1740caeb743641c5/21093:156","key":"66af10a23376effbc7e7675e1740caeb743641c5","type":"FLOAT","remote":true},{"name":"radius-full","id":"VariableID:fd4492406543257ba71aac908d7402fa6d76de80/21096:259","key":"fd4492406543257ba71aac908d7402fa6d76de80","type":"FLOAT","remote":true},{"name":"surface/surface-info","id":"VariableID:608dd64dfb7660ccf019b1b3a397969c0344b1a3/21076:55","key":"608dd64dfb7660ccf019b1b3a397969c0344b1a3","type":"COLOR","remote":true},{"name":"body/body-info","id":"VariableID:9828300da50f5a0c25317b4e0af17e95c5fd3472/21076:83","key":"9828300da50f5a0c25317b4e0af17e95c5fd3472","type":"COLOR","remote":true},{"name":"Body/Supporting/Letter Spacing","id":"VariableID:0ffea39f2fe3bc1b4e2e90571e6ecf175a9c2870/21251:41","key":"0ffea39f2fe3bc1b4e2e90571e6ecf175a9c2870","type":"FLOAT","remote":true},{"name":"Body/Supporting/Size","id":"VariableID:a1cc215f10b53b6e3eb5285e8e70914277c77003/21093:189","key":"a1cc215f10b53b6e3eb5285e8e70914277c77003","type":"FLOAT","remote":true},{"name":"Body/Supporting/Line Height","id":"VariableID:97ae28555d22e8d039859d93e617df472e871958/21093:193","key":"97ae28555d22e8d039859d93e617df472e871958","type":"FLOAT","remote":true},{"name":"Headline/Section/Letter Spacing","id":"VariableID:12ab1a0e09673515db9e2b7acc8eb0624d5f68e1/21251:38","key":"12ab1a0e09673515db9e2b7acc8eb0624d5f68e1","type":"FLOAT","remote":true},{"name":"Headline/Section/Size","id":"VariableID:82b824c84822b8f189dc33f67ffb07505e90d903/21093:173","key":"82b824c84822b8f189dc33f67ffb07505e90d903","type":"FLOAT","remote":true},{"name":"Headline/Section/Line Height","id":"VariableID:28c717b57c6fa4fb969e4eec5e97dd45a2bad73d/21093:175","key":"28c717b57c6fa4fb969e4eec5e97dd45a2bad73d","type":"FLOAT","remote":true},{"name":"Weight/Bold","id":"VariableID:93819bdfc97cb78f34bac52e424314c7d8337223/21271:0","key":"93819bdfc97cb78f34bac52e424314c7d8337223","type":"FLOAT","remote":true},{"name":"line/line-negative","id":"VariableID:b62c9f294c108836c4fa2405bc089b1a6dcb103b/21083:103","key":"b62c9f294c108836c4fa2405bc089b1a6dcb103b","type":"COLOR","remote":true},{"name":"gap/gap-row-small","id":"VariableID:cf06ec50491972f4f654934b0daf178aa6669e25/21089:136","key":"cf06ec50491972f4f654934b0daf178aa6669e25","type":"FLOAT","remote":true},{"name":"gap/gap-row-default","id":"VariableID:837aa126daedc9fd1244e1f0d203d32ba103efcf/21089:135","key":"837aa126daedc9fd1244e1f0d203d32ba103efcf","type":"FLOAT","remote":true},{"name":"surface/surface-info-layer-1","id":"VariableID:77fd27d5c2b11cd480a82bffda5d842ef685025e/21076:58","key":"77fd27d5c2b11cd480a82bffda5d842ef685025e","type":"COLOR","remote":true},{"name":"gap/gap-group-small","id":"VariableID:1a57b57df80ac462c47f9d1f863c10df1dfadc05/21089:133","key":"1a57b57df80ac462c47f9d1f863c10df1dfadc05","type":"FLOAT","remote":true},{"name":"Body/Caption/Letter Spacing","id":"VariableID:054608f87fa2629274a082bb8adab5120ebe5119/21251:42","key":"054608f87fa2629274a082bb8adab5120ebe5119","type":"FLOAT","remote":true},{"name":"Body/Caption/Size","id":"VariableID:c0e96aaca98b490439052a8be66c4f983dfa1a39/21093:197","key":"c0e96aaca98b490439052a8be66c4f983dfa1a39","type":"FLOAT","remote":true},{"name":"Body/Caption/Line Height","id":"VariableID:1b63a67a0fd94a212c3fad2c24b427b975fb74c1/21093:200","key":"1b63a67a0fd94a212c3fad2c24b427b975fb74c1","type":"FLOAT","remote":true},{"name":"surface/surface-negative","id":"VariableID:1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7/21076:66","key":"1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7","type":"COLOR","remote":true},{"name":"body/body-negative","id":"VariableID:2cd1abbfaba19c691d50bc75d4a75a3f56229bd1/21076:86","key":"2cd1abbfaba19c691d50bc75d4a75a3f56229bd1","type":"COLOR","remote":true},{"name":"gap/gap-y-pair","id":"VariableID:0c17dc7041f93d049f8699e997e6549513611fbc/19230:151","key":"0c17dc7041f93d049f8699e997e6549513611fbc","type":"FLOAT","remote":true},{"name":"radius-default","id":"VariableID:f52202a2c5afb063f455960b9aaab5f5c37a423a/21096:263","key":"f52202a2c5afb063f455960b9aaab5f5c37a423a","type":"FLOAT","remote":true},{"name":"Label/Large 1/Letter Spacing","id":"VariableID:c306da112ddb1432fc5d9fc04ce5206becc79ca2/21251:45","key":"c306da112ddb1432fc5d9fc04ce5206becc79ca2","type":"FLOAT","remote":true},{"name":"Label/Large 1/Size","id":"VariableID:4cb812848be57f5c605331045b5aaa15b14cc26f/21096:211","key":"4cb812848be57f5c605331045b5aaa15b14cc26f","type":"FLOAT","remote":true},{"name":"Label/Large 1/Line Height","id":"VariableID:b9345b90135d15c5e9a64162f8d76e418c8d6dec/21096:215","key":"b9345b90135d15c5e9a64162f8d76e418c8d6dec","type":"FLOAT","remote":true},{"name":"dimension-4","id":"VariableID:00abf49026dbded037a6b6edd8ac48eadb56e554/3054:713","key":"00abf49026dbded037a6b6edd8ac48eadb56e554","type":"FLOAT","remote":true},{"name":"size/size-icon-small2","id":"VariableID:041264a85ea4936bd1c8838c8e444e6109db1ea9/21093:144","key":"041264a85ea4936bd1c8838c8e444e6109db1ea9","type":"FLOAT","remote":true},{"name":"stroke/stroke-small-1","id":"VariableID:975780c37b3bad32ed649c5f5022a20ec2b1a5d5/21093:168","key":"975780c37b3bad32ed649c5f5022a20ec2b1a5d5","type":"FLOAT","remote":true},{"name":"padding/padding-x-component-small-2","id":"VariableID:db4f435633bd89979df2657ce74429e11c3ed7c1/21089:126","key":"db4f435633bd89979df2657ce74429e11c3ed7c1","type":"FLOAT","remote":true},{"name":"height/height-component-small3","id":"VariableID:ccc89950fa7b909c213ab2f4015428a6eed6de3d/21093:155","key":"ccc89950fa7b909c213ab2f4015428a6eed6de3d","type":"FLOAT","remote":true},{"name":"secondary/secondary","id":"VariableID:d0f43beff768da67ceaa032f840cf95f924163f1/21076:21","key":"d0f43beff768da67ceaa032f840cf95f924163f1","type":"COLOR","remote":true},{"name":"secondary/line-secondary","id":"VariableID:a00cb74fcd8396c875db659b800cd902d5bfcdee/21076:26","key":"a00cb74fcd8396c875db659b800cd902d5bfcdee","type":"COLOR","remote":true},{"name":"secondary/on-secondary","id":"VariableID:26db6278c9136a60f429f0177220266879f75fce/21076:24","key":"26db6278c9136a60f429f0177220266879f75fce","type":"COLOR","remote":true},{"name":"surface/surface-positive","id":"VariableID:dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a/21076:60","key":"dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a","type":"COLOR","remote":true},{"name":"body/body-positive","id":"VariableID:99f60187c3fae0ae0b19a0c72dce7c5d922682ca/21076:84","key":"99f60187c3fae0ae0b19a0c72dce7c5d922682ca","type":"COLOR","remote":true},{"name":"surface/surface-caution","id":"VariableID:08860b61a9dd3a6955294c52d821435044def791/21076:63","key":"08860b61a9dd3a6955294c52d821435044def791","type":"COLOR","remote":true},{"name":"body/body-caution","id":"VariableID:731ff3ea00acd4c2b3cb4267c1a1a065c718b207/21076:85","key":"731ff3ea00acd4c2b3cb4267c1a1a065c718b207","type":"COLOR","remote":true},{"name":"primary/on-primary","id":"VariableID:511a56c8d269738b1136e189937643db538226f4/21076:12","key":"511a56c8d269738b1136e189937643db538226f4","type":"COLOR","remote":true},{"name":"body/body-default","id":"VariableID:c36da5ec9ad6a92d45552a5a4b316865717bb715/21076:79","key":"c36da5ec9ad6a92d45552a5a4b316865717bb715","type":"COLOR","remote":true},{"name":"gap/gap-tile-large","id":"VariableID:b312e86fdf06147fc8b1edccff6114abec7d44cc/21089:130","key":"b312e86fdf06147fc8b1edccff6114abec7d44cc","type":"FLOAT","remote":true},{"name":"padding/padding-content-area","id":"VariableID:d64c795f207703a9856d1fcabbd1c7c3b18950c5/21086:109","key":"d64c795f207703a9856d1fcabbd1c7c3b18950c5","type":"FLOAT","remote":true},{"name":"gap/gap-x-component-default","id":"VariableID:15adc4b2fd802b4118f94e1884e12b2fa6f6924b/21089:138","key":"15adc4b2fd802b4118f94e1884e12b2fa6f6924b","type":"FLOAT","remote":true},{"name":"padding/padding-x-component-default","id":"VariableID:d3cba692bbd70cc03ba0bf0537d2d3760bc508d5/21089:117","key":"d3cba692bbd70cc03ba0bf0537d2d3760bc508d5","type":"FLOAT","remote":true},{"name":"height/height-component-small1","id":"VariableID:30e// truncated to 20kb
> ```
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Inspect the Local Components page for reusable upload-specific components and their design-system dependencies without changing it",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const page = await figma.getNodeByIdAsync(\"4:116\");\nawait figma.setCurrentPageAsync(page);\nfigma.skipInvisibleInstanceChildren = true;\nconst topLevel = page.children.map(n=>({id:n.id,name:n.name,type:n.type,x:n.x,y:n.y,width:n.width,height:n.height,key:\"key\" in n?n.key:undefined}));\nconst components = page.findAllWithCriteria({types:[\"COMPONENT\",\"COMPONENT_SET\"]}).map(n=>({id:n.id,name:n.name,type:n.type,key:n.key,description:n.description,width:n.width,height:n.height}));\nconst instances = page.findAllWithCriteria({types:[\"INSTANCE\"]});\nconst mains = await Promise.all(instances.map(i=>i.getMainComponentAsync()));\nconst dependencies = new Map();\nfor (let i=0;i<instances.length;i++) {\n  const mc=mains[i]; if(!mc) continue;\n  const set=mc.parent?.type===\"COMPONENT_SET\"?mc.parent:null;\n  const key=set?.key||mc.key;\n  if(key&&!dependencies.has(key)) dependencies.set(key,{instanceName:instances[i].name,componentName:set?.name||mc.name,key,remote:mc.remote,isSet:!!set,sampleVariant:mc.name});\n}\nreturn {page:{id:page.id,name:page.name},topLevel,components,instanceCount:instances.length,dependencies:[...dependencies.values()]};"
> }
> ```
>
> ```text
> {"page":{"id":"4:116","name":"Local Components"},"topLevel":[{"id":"5:13","name":"Document Upload App Bar","type":"COMPONENT","x":40,"y":160,"width":390,"height":80,"key":"88a2daffd572ac31aee5b3e3d81fee49c65639ab"},{"id":"5:258","name":"Document Request Summary","type":"COMPONENT_SET","x":40,"y":520,"width":812,"height":184,"key":"4cc398a0aff92c239a8c06ddc12f654d7daf554e"},{"id":"5:259","name":"Document Upload Item","type":"COMPONENT_SET","x":900,"y":520,"width":812,"height":360,"key":"03f824b633ba525e7422a8ac87b42e6e725926dd"},{"id":"5:260","name":"Other Document Upload Item","type":"COMPONENT_SET","x":900,"y":1080,"width":812,"height":324,"key":"56048f24ab54cb339e04ffcf9e84cfbd707d2ae9"},{"id":"5:261","name":"Page title","type":"TEXT","x":40,"y":-34,"width":309,"height":44},{"id":"5:262","name":"Page description","type":"TEXT","x":40,"y":22,"width":1100,"height":40},{"id":"5:263","name":"Component label","type":"TEXT","x":40,"y":105,"width":220,"height":22},{"id":"5:264","name":"Component label","type":"TEXT","x":1022,"y":-397,"width":171,"height":22},{"id":"5:265","name":"Component label","type":"TEXT","x":40,"y":480,"width":240,"height":22},{"id":"5:266","name":"Component label","type":"TEXT","x":900,"y":454,"width":189,"height":22},{"id":"5:267","name":"Component label","type":"TEXT","x":900,"y":1013,"width":241,"height":22},{"id":"13:1119","name":"Document Upload Item","type":"FRAME","x":-295,"y":1556,"width":358,"height":128},{"id":"13:1204","name":"Document Upload Item","type":"FRAME","x":169,"y":1556,"width":358,"height":156},{"id":"13:1145","name":"Document Upload Item","type":"FRAME","x":-295,"y":1749,"width":358,"height":128},{"id":"13:1169","name":"Document Upload Item","type":"FRAME","x":-295,"y":2003,"width":358,"height":84},{"id":"16:924","name":"CTA","type":"INSTANCE","x":990,"y":135,"width":391,"height":88},{"id":"17:6497","name":"Guided Upload Card","type":"COMPONENT_SET","x":1022,"y":-344,"width":398,"height":836,"key":"2df7de61e7d00d1cf550f09df8d8abd974dcaa55"}],"components":[{"id":"5:13","name":"Document Upload App Bar","type":"COMPONENT","key":"88a2daffd572ac31aee5b3e3d81fee49c65639ab","description":"","width":390,"height":80},{"id":"5:258","name":"Document Request Summary","type":"COMPONENT_SET","key":"4cc398a0aff92c239a8c06ddc12f654d7daf554e","description":"Summarizes the active loan document request and completion progress.","width":812,"height":184},{"id":"5:25","name":"Progress=Empty","type":"COMPONENT","key":"62de9dd71e0493d586bd502e977c77a9238bc32d","description":"","width":358,"height":120},{"id":"5:34","name":"Progress=Partial","type":"COMPONENT","key":"b2ef6a54ddfa0c0b3ca6d7cc0f75095b5d3e3db4","description":"","width":358,"height":120},{"id":"5:259","name":"Document Upload Item","type":"COMPONENT_SET","key":"03f824b633ba525e7422a8ac87b42e6e725926dd","description":"Represents a requested document in needed, uploaded, or failed state.","width":812,"height":360},{"id":"5:44","name":"State=Needed","type":"COMPONENT","key":"069d955620b25151dff06575bcf46e711c6f1521","description":"","width":358,"height":124},{"id":"5:60","name":"State=Uploaded","type":"COMPONENT","key":"a77012d9773eb8c194f201a6c3f83219b868b9a1","description":"","width":358,"height":176},{"id":"5:71","name":"State=Failed","type":"COMPONENT","key":"31a0c7cfb6b21a1b80399b08b3ec69e2cbb93e81","description":"","width":358,"height":124},{"id":"5:260","name":"Other Document Upload Item","type":"COMPONENT_SET","key":"56048f24ab54cb339e04ffcf9e84cfbd707d2ae9","description":"Catchall upload item for backend requests without an explicit document type. The customer identifies the document before uploading.","width":812,"height":324},{"id":"5:96","name":"State=Needed","type":"COMPONENT","key":"0c09223a5a129e92e589cd7052e66ba4ce8156c3","description":"","width":358,"height":216},{"id":"5:178","name":"State=Failed","type":"COMPONENT","key":"7efe9a3463579aa39b90d30d2174729330c6e942","description":"","width":358,"height":248},{"id":"17:6497","name":"Guided Upload Card","type":"COMPONENT_SET","key":"2df7de61e7d00d1cf550f09df8d8abd974dcaa55","description":"","width":398,"height":836},{"id":"5:85","name":"type=Default","type":"COMPONENT","key":"c781aa7377458389b897258d5e9c6886524bd79e","description":"","width":358,"height":316},{"id":"17:6498","name":"type=compact","type":"COMPONENT","key":"c5f5ac3ec3098eba8b2cc5ee68180a5fc38ef387","description":"","width":358,"height":220},{"id":"17:6636","name":"type=xs","type":"COMPONENT","key":"c1d3a0f56d0c4494392f9076240ff3cb0b203976","description":"","width":358,"height":168}],"instanceCount":51,"dependencies":[{"instanceName":"CX Back Button","componentName":"Back Button","key":"2d874c88b025d3127921d0fdd0e668f693def659","remote":true,"isSet":true,"sampleVariant":"Show Headline=False"},{"instanceName":"arrow-left","componentName":"arrow-left","key":"41ee07e92ebb434b23679b1d48d205a2b89a8f1e","remote":true,"isSet":false,"sampleVariant":"arrow-left"},{"instanceName":"Status-Tag","componentName":"Status-Tag","key":"c636fb0e47c184362a85971bdd3abfc12310f724","remote":true,"isSet":true,"sampleVariant":"Size=Default, Sentiment=Informative, Layout=No Icon"},{"instanceName":"page-flip","componentName":"page-flip","key":"b3827f91ecd110d9141c999f84897cc440a6bdc9","remote":true,"isSet":false,"sampleVariant":"page-flip"},{"instanceName":"CX Button / Upload","componentName":"Button","key":"93c929f1ab62af6beb62211797d1506066995587","remote":true,"isSet":true,"sampleVariant":"Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Enabled, Polarity=Default"},{"instanceName":"Nested Icon Component","componentName":"upload","key":"87442b1bbb38a45fa26942cf781c956cb011a58c","remote":true,"isSet":false,"sampleVariant":"upload"},{"instanceName":"Nested Icon Component","componentName":"edit-pencil","key":"671ef3fe3ec653da4004b22b47e72addcd134bae","remote":true,"isSet":false,"sampleVariant":"edit-pencil"},{"instanceName":"Nested Icon Component","componentName":"refresh-double","key":"5eb60fd4f45144863ae848c14250d581ee50ef61","remote":true,"isSet":false,"sampleVariant":"refresh-double"},{"instanceName":"CX Text Input / Document type","componentName":"Text Input","key":"d61e13ad0473c59d3ffc7f508fe2930b5594d8a2","remote":true,"isSet":true,"sampleVariant":"State=Enabled"},{"instanceName":"warning-circle","componentName":"warning-circle","key":"2a679758b0678360456c98d3b5e5fa03d255bfe0","remote":true,"isSet":false,"sampleVariant":"warning-circle"},{"instanceName":"CTA","componentName":"CTA","key":"b6c78dae0ca0bac9635e8bf130ec6d67026a7dd8","remote":true,"isSet":true,"sampleVariant":"Type=Stack"},{"instanceName":"Button Stack","componentName":"Button Stack","key":"493eb042a6bd218c9f833fdaf27e2088ca003f7e","remote":true,"isSet":true,"sampleVariant":"Device=Mobile, Show Buttons=1 + 3"}]}
> ```
>
> MCP tool call
>
> codex_apps.figma.get_libraries
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk"
> }
> ```
>
> ```text
> {
>   "libraries_added_to_file": [
>     {
>       "name": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "description": "",
>       "source": "team"
>     },
>     {
>       "name": "OneApp: Components Library",
>       "libraryKey": "lk-a9eacdb88e2f763eca59e2e9b6cb607d80af9d315881e7f2494987e230b037ac0ea32ea8335e750176740cbc4f4247dfd1f80520310f2e3ed9d2d9966a9c96c2",
>       "description": "",
>       "source": "team"
>     }
>   ],
>   "libraries_available_to_add": [
>     {
>       "name": "Material 3 Design Kit",
>       "libraryKey": "lk-5a31d104cabc6a74d4edf6425e7bc6575e9c0f18cda7efb746193aef4d915b077d115c985e6cf49d36d97d455a17d5127a2cbbfbc618b8a70a38669dccb61462",
>       "description": "<h2><strong>Introducing Material Design 3</strong></h2><p>Meet <strong>Material Design 3</strong>, Material Design’s most personal design system yet. The Material 3 Design Kit provides a comprehensive introduction to the design system, with styles and components to help you get started.</p><p><br></p><p><strong>Visualize dynamic color in your UI</strong></p><p>The Material 3 Design Kit is built to work with the <strong><a href=\"https://goo.gle/material-theme-builder-figma\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Material Theme Builder</a></strong> Figma plugin. Select an image or color to visualize dynamic color in your UI. <em>Questions or comments about the theme builder should be directed <a href=\"https://github.com/material-foundation/material-theme-builder/issues/new/\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">here</a> (not to design kit feedback channels).</em></p><p><br></p><p>Looking for icons? Try the <strong><a href=\"https://www.figma.com/community/file/1014241558898418245?fuid=771462962926009319\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Google Icons Library</a></strong></p><p><br></p><p><strong>Suggestions and/or feedback on design kit? </strong></p><p><strong>Email <a href=\"mailto:m3-design-kit-feedback@google.com\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">m3-design-kit-feedback@google.com</a></strong></p><p><strong>Fill out this <a href=\"https://docs.google.com/forms/d/1AKqbaIz0oAC9VgLb_CseAP9RVekmgv_AQvlFrb5_79Y/edit\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Google feedback form</a></strong></p><p><strong>or ping us <a href=\"https://twitter.com/MaterialDesign\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">@materialdesign</a> on Twitter.</strong></p><p><br></p><p>By downloading this file, you agree to the <a href=\"https://policies.google.com/terms\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Google Terms of Service</a>. The <a href=\"https://policies.google.com/privacy\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Google Privacy Policy</a> describes how data is handled in this service.</p><h2><br></h2><h2><strong>Changelog</strong></h2><p>05.19.26 V1.25</p><p><br></p><p><strong>Material Android is Compose-first.</strong> Use this design kit for Jetpack Compose. The Material Views (MDC-Android) library is in maintenance mode. <a href=\"https://m3.material.io/blog/material-is-compose-first\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Read about the Compose-first strategy</a></p><p><br></p><p>Updates:</p><p>• Slots added to Bottom Sheets, Side Sheets, Cards, Nav Rails, Nav Drawers, lists, menus, Dialogs, Tabs, and Toolbar</p><p><br></p><p>Bugs:</p><p>•&nbsp;2 line accordion list item padding fixed</p><p>• Fixed clear button label on date picker</p><p><br></p><p>03.02.26 V1.24</p><p>Additions:</p><p>• Expressive search layout</p><p><br></p><p>Updates:</p><p>• Search view renamed to search layout (baseline)</p><p><br></p><p><strong>12.08.25 V1.23</strong></p><p>Additions:</p><p>• Expressive Lists</p><p><br></p><p>Updates:</p><p>• Lists renamed to Lists (baseline)</p><p><br></p><p><strong>11.14.25 V1.22</strong></p><p><br></p><p>Additions:</p><p>• Expressive Menus</p><p>• Multi-aspect ratio carousel</p><p><br></p><p>Updates:</p><p>•&nbsp;Menus renamed Menu (baseline)</p><p><br></p><p><strong>09.02.25 V1.21</strong></p><p><br></p><p>⚠ Due to Buttons and Icon Buttons being rebuilt users may see resets to their component instances when accepting this update if they were using the UI kit version.</p><p><br></p><p>Additions:</p><p>•&nbsp;XR Toolbar</p><p><br></p><p>Updates:</p><p>•&nbsp;Button and Icon buttons have been rebuilt for optimization</p><p>•&nbsp;Toolbar and Connected Button Group optimized</p><p><br></p><p><br></p><p><strong>06.03.25 V1.20.1</strong></p><p>Additions:</p><p>•&nbsp;Shape set</p><p><br></p><p>Updates:</p><p>State-layer names changed to \"onPrimary\" format</p><p>State-layer opacity names changed to \"opacity-0.10\"</p><p><br></p><p><strong>05.13.25 V1.20</strong></p><p>Major update:</p><p><br></p><p>⚠ M3 Expressive is an update to the Material 3 design system that provides tools and capabilities for apps to create differentiated and delightful user experiences. It includes a new shape set, emphasized typography, intuitive motion, vibrant colors, and flexible components.</p><p><br></p><p>New components:</p><p>• Button groups</p><p>• FAB menu</p><p>• Split button</p><p>• Loading indicator</p><p><br></p><p>Updated components:</p><p>•&nbsp;App bars</p><p>•&nbsp;Buttons</p><p>•&nbsp;FAB</p><p>•&nbsp;Extended FAB</p><p>•&nbsp;Icon Buttons</p><p>•&nbsp;Progress indicators</p><p>•&nbsp;Navigation bars</p><p>•&nbsp;Navigation rails</p><p>•&nbsp;Sliders</p><p>•&nbsp;Toolbar</p><p><br></p><p>XR additions:</p><p>•&nbsp;XR App bars</p><p>•&nbsp;XR Dialogs</p><p><br></p><p><strong>12.12.24 V1.19</strong></p><p><br></p><p>Additions:</p><p>• XR Navigation Rail</p><p>• XR Navigation Bar</p><p><br></p><p><strong>10.04.24 V1.18</strong></p><p><br></p><p>Additions:</p><p>• 12 New color theme modes</p><p>• Slots added</p><p><br></p><p>Updates:</p><p>• Tabs divider changed outline-variant</p><p>• Slider and Progress indicator</p><p><br></p><p><strong>09.20.24 V1.17</strong></p><p><br></p><p>Updates:</p><p>• Chips outline update from \"Outline\" to \"Outline-variant\"</p><p>• On-primary-container, On-secondary-container, On-tertiary-container, On-error-container colors updated</p><p>• Component colors are using style w/ variables</p><p><br></p><p><strong>06.24.24 V1.16</strong></p><p>Big Updates 🎉</p><p><br></p><p>Additions:</p><ol><li data-list=\"bullet\"><strong>Variables added: color, typography, and state layers </strong></li><li data-list=\"bullet\"><strong>Jetpack Compose Code Snippets</strong></li><li data-list=\"bullet\"><strong>Example screens</strong></li></ol><p>Updates:</p><ol><li data-list=\"bullet\"><strong>Cover art</strong></li><li data-list=\"bullet\"><strong>Information architecture</strong></li></ol><p><br></p><p><strong>1.16.24 V1.15</strong></p><p>Additions:</p><ol><li data-list=\"bullet\">Sliders have a new style and configurations</li><li data-list=\"bullet\">Progress Indicators new style and configurations</li><li data-list=\"bullet\">Carousel variants</li></ol><p><br></p><p><strong>11.30.23 V1.14</strong></p><p>Additions:</p><ol><li data-list=\"bullet\">Badges added to Tabs</li></ol><p>Updates:</p><ol><li data-list=\"bullet\">Drag handle opacity in Bottom app bars</li></ol><p><br></p><p><strong>10.27.23 V1.13</strong></p><p>Additions:</p><ol><li data-list=\"bullet\">Carousel - Hero variant</li></ol><p>Updates:</p><ol><li data-list=\"bullet\">Better support for resizing</li></ol><p><br></p><p><strong>08.15.23 V1.12</strong></p><p>Updates:</p><ol><li data-list=\"bullet\">Several small updates components</li></ol><p><br></p><p><strong>06.12.23 V1.11</strong></p><p>Updates:</p><ol><li data-list=\"bullet\">Updated device gesture bars in Elements</li></ol><p><br></p><p><strong>05.09.23 V1.10</strong></p><p>Additions:</p><ol><li data-list=\"bullet\">Two prominent label text styles</li></ol><p><br></p><p><strong>04.19.23 V1.9</strong></p><p>Components added:</p><ol><li data-list=\"bullet\">Carousel&nbsp;</li><li data-list=\"bullet\">Tooltips</li></ol><p>Updates:</p><ol><li data-list=\"bullet\">Menus reconstructed</li></ol><p><br></p><p><strong>03.28.23 V1.8</strong></p><p>Major updates:</p><p>⚠ New tonal surfaces and fixed accents are here!</p><p>The latest update introduces Surfaces based on tone values, these are no longer read-only overlays. Surfaces 1–5 will remain in the M3 design kit and material theme builder for current users, but we recommend migrating to new surface tokens as soon as possible.</p><p>⚠ We added prototyping to components!</p><p><br></p><p>Bugs adressed:&nbsp;</p><ol><li data-list=\"bullet\">Added text styles that were missing on Search</li><li data-list=\"bullet\">Fixes on Top App Bar</li><li data-list=\"bullet\">Fixes on Dialogs</li></ol><p><br></p><p><strong>02.09.23 V1.7</strong></p><p>Added:&nbsp;</p><ol><li data-list=\"bullet\">Side Sheets</li></ol><p>Updates:</p><ol><li data-list=\"bullet\">a11y update to the Date Picker</li></ol><p><br></p><p><strong>12.15.22 V1.6</strong></p><p>Components and Styles Added:&nbsp;</p><ol><li data-list=\"bullet\">Search bar and modal</li><li data-list=\"bullet\">Avatar imagery with metadata</li></ol><p>Updates:</p><ol><li data-list=\"bullet\">Cover art refresh</li></ol><p><br></p><p><strong>10.18.22 V1.5</strong></p><p>Huge update 🎉</p><p>Components and Styles Added:&nbsp;</p><ol><li data-list=\"bullet\">Badge</li><li data-list=\"bullet\">Small FABs</li><li data-list=\"bullet\">Progress indicators</li><li data-list=\"bullet\">Checkboxes</li><li data-list=\"bullet\">Tabs</li><li data-list=\"bullet\">Dividers</li><li data-list=\"bullet\">Segmented buttons</li><li data-list=\"bullet\">Bottom sheets&nbsp;</li><li data-list=\"bullet\">Time pickers</li><li data-list=\"bullet\">Date pickers</li><li data-list=\"bullet\">Sliders</li><li data-list=\"bullet\">Lists</li><li data-list=\"bullet\">Snackbars</li><li data-list=\"bullet\">Navigation drawers (Dark)</li><li data-list=\"bullet\">Outline-variant color role</li><li data-list=\"bullet\">Keyboards added</li></ol><p><br></p><p><strong>07.01.22 V1.4</strong></p><ol><li data-list=\"bullet\">Fixed switches</li><li data-list=\"bullet\">Updated color role structure</li></ol><p><br></p><p><strong>05.11.22 V1.3</strong></p><ol><li data-list=\"bullet\">New components: Icon Buttons, Switches, and Bottom App Bars&nbsp;</li></ol><p><br></p><p><strong>02.14.22 V1.2</strong></p><ol><li data-list=\"bullet\">🎉Our top request - now includes Text Fields!&nbsp;</li><li data-list=\"bullet\">Updated chips variants</li></ol><p><br></p><p><strong>11.10.21 V1.1</strong></p><ol><li data-list=\"bullet\">Updated links for color and typography</li></ol><p><br></p><p><strong>10.27.21 V1</strong></p><ol><li data-list=\"bullet\">Kit release</li></ol>",
>       "source": "community"
>     },
>     {
>       "name": "Simple Design System",
>       "libraryKey": "lk-e0ffcff14368019c4f30f45401cd233d6cbc5f869988484192d04cbbef801fb0064ef68feaa8a2775ee4f1f05d9a4af1a6d07b2658eac4aefb7afb18728c4066",
>       "description": "<p>Introducing the Simple Design System: A UI kit built by Figma to help you get started faster using pre-built examples and components. This library covers Figma’s best practices for building a basic design system, and includes a full range of resources to enable core design use cases – like designing for web, mobile, and more.</p><p><br></p><p>Key features include:</p><p><br></p><ol><li data-list=\"bullet\">Examples – Full screen mockups that can be inserted into your file to go from blank page to polished designs quickly</li><li data-list=\"bullet\">400+ components, backed by code (Code Connect available on paid plans only)</li><li data-list=\"bullet\">Styles and variables support, including light and dark mode</li><li data-list=\"bullet\">Commonly used icons</li></ol><p><br></p><p>The code is available to view on Figma's Github account: <a href=\"https://github.com/figma/sds\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">https://github.com/figma/sds</a>. The repository contains icons, variables, and components as well as useful scripts for getting started with Code Connect.</p><p><br></p><p>Figma's Simple Design System UI Kit is licensed by Figma under CC BY 4.0.</p><p><br></p><p>--</p><p><br></p><h2><strong>Changelog</strong></h2><p><br></p><p>📆 <strong>Tuesday March 12 2026</strong></p><p><code><strong>Added</strong></code></p><ol><li data-list=\"bullet\">Example page template with slot for main content</li><li data-list=\"bullet\">Form (Slot) – Vanilla container for adding form elements inside</li><li data-list=\"bullet\">Hero (Slot) – Empty responsive hero section with slot container</li><li data-list=\"bullet\">Card (Slot) – Empty card container with slot for main content</li></ol><p><br></p><p><code><strong>Fixed</strong></code></p><ol><li data-list=\"bullet\">Removed stray annotations on Example page</li><li data-list=\"bullet\">Text Link List – Fixed bug with auto layout on Text Strong instance’s width</li><li data-list=\"bullet\">Text List – Fixed bug with auto layout on Text Strong instance’s width</li></ol><p><br></p><p><code><strong>Changed</strong></code></p><ol><li data-list=\"bullet\">Accordion – Child items have been wrapped in a Slot</li><li data-list=\"bullet\">AI Chat – Components have been refactored to add Slots to repeatable content • opportunities</li><li data-list=\"bullet\">Avatar Group – Avatars wrapped in a Slot</li><li data-list=\"bullet\">Card – Converted Body to slot</li><li data-list=\"bullet\">Dialog – A new auto layout frame has been added to the dialog body, and converted to a slot</li><li data-list=\"bullet\">Menu – A new auto layout frame is wrapping the content, and has been converted to a slot</li><li data-list=\"bullet\">Navigation Pill List – Wrapped menu items in a slot auto layout frame</li><li data-list=\"bullet\">Pagination List – Page list components wrapped in new auto layout frame and converted to slot</li><li data-list=\"bullet\">Tabs – Items been wrapped in a new auto layout frame, which has been converted to a Slot</li><li data-list=\"bullet\">Tag Toggle Group – Tags have been wrapped in a new auto layout frame, which has been converted to a Slot</li><li data-list=\"bullet\">Tooltip – Wrapped body content in a new Slot autolayout frame</li><li data-list=\"bullet\">Text Link List – Added slot auto layout wrapper to list items</li><li data-list=\"bullet\">Text List – Added slot auto layout wrapper to list items</li><li data-list=\"bullet\">Footer – Wrapped title section and menu item section in slots</li><li data-list=\"bullet\">Panel Image Content – Text Content Flow converted to slot</li><li data-list=\"bullet\">Panel Image Content Reverse – Text Content Flow converted to slot</li><li data-list=\"bullet\">Card Grid Pricing – Card Grid converted to slot</li><li data-list=\"bullet\">Card Grid Icon – Cards converted to slot</li><li data-list=\"bullet\">Card Grid Image – Wrapped Card auto layout frames in a new auto layout frame and converted to a slot</li><li data-list=\"bullet\">Card Grid Content List – Converted Cards to a slot container</li><li data-list=\"bullet\">Card Grid Testimonials – Converted Cards to a slot container</li><li data-list=\"bullet\">Page Product – Converted Column to slot</li><li data-list=\"bullet\">Page Product Results – Added new auto layout frame inside Filter Menu and converted to slot</li><li data-list=\"bullet\">Page Product Results – Converted Card Grid to slot</li><li data-list=\"bullet\">Navigation Button List – Wrapped menu items in slot</li><li data-list=\"bullet\">Examples – Removed blank “link” menu item from header</li></ol><h2><br></h2><p><strong>📆 Monday November 17 2025</strong></p><p><code><strong>Added</strong></code></p><ol><li data-list=\"ordered\">Date Input Field component</li><li data-list=\"ordered\">Date Picker Field component</li><li data-list=\"ordered\">Calendar component</li><li data-list=\"ordered\">AI Chat Box component</li><li data-list=\"ordered\">AI Chat Example page</li><li data-list=\"ordered\">Blue primitive ramp</li></ol><p><br></p><p><code><strong>Fixed</strong></code></p><ol><li data-list=\"ordered\">Restored previously unpublished Button component</li><li data-list=\"ordered\">Warning tag is using wrong icon variable</li><li data-list=\"ordered\">Warning tag secondary is using wrong background fill variable</li><li data-list=\"ordered\">Examples/Contact Us used the wrong background variable</li><li data-list=\"ordered\">Change Slider to hug and add min-width of 80</li><li data-list=\"ordered\">Change textarea min-width from 240 to 120</li><li data-list=\"ordered\">Change Checkbox from fixed to hug and add min-width of 120 to children</li><li data-list=\"ordered\">Checkbox is using a ghost variable for the border</li><li data-list=\"ordered\">Change Radio from fixed to hug and add min-width of 120 to children</li><li data-list=\"ordered\">Change Search from fixed to min-width 120</li><li data-list=\"ordered\">Change Switch from fixed to min-width 120</li><li data-list=\"ordered\">Textarea disabled border is using a ghost value</li><li data-list=\"ordered\">Select field disabled state is not using a variable</li><li data-list=\"ordered\">Input field disabled state is not using a variable</li><li data-list=\"ordered\">Date field disabled state is not using a variable</li><li data-list=\"ordered\">Search field disabled state is not using a variable</li><li data-list=\"ordered\">Remove Brand B Light from Color collection</li><li data-list=\"ordered\">Change disabled colors from Brand to Gray primitives</li></ol><p><br></p><p><code><strong>Changed</strong></code></p><ol><li data-list=\"ordered\">Input Fields variants have been rearranged. Now types are arranged horizontally, and variations vertically</li><li data-list=\"ordered\">Inputs page documentation rearranged to be more grid-like</li><li data-list=\"ordered\">Default state of Search Value Type property renamed to Filled</li><li data-list=\"ordered\">Default variant of Search component changed to Placeholder, Default</li><li data-list=\"ordered\">Reorganised Sections page</li><li data-list=\"ordered\">Replace min-width on inputs with 120 instead of 240</li><li data-list=\"ordered\">Change Select from fixed to hug</li><li data-list=\"ordered\">Un-hide text components</li><li data-list=\"ordered\">Document hidden text components, explaining when and why they are used</li><li data-list=\"ordered\">Add auto layout to bullet list text components</li><li data-list=\"ordered\">Detached all icon variants, split them into sections based on size</li></ol><h2><br></h2><p>📆 June 3 2025</p><p><code><strong>Fixed</strong></code></p><ol><li data-list=\"ordered\">Restored previously unpublished Button component</li></ol>",
>       "source": "community"
>     },
>     {
>       "name": "iOS and iPadOS 26",
>       "libraryKey": "lk-a5b98decf0fb24381005421a2986b813149fcf20f37a1169316d44e2802c483494c6fc98ab8e083540a73bd5e45cf892a38123ee61981aee097d5f4eb8487a17",
>       "description": "<p><strong>Updated April 3, 2026</strong></p><p>See change log for details</p><p><br></p><p>Apple’s iOS and iPadOS 26 UI kit for Figma helps you quickly and easily create highly accurate iPhone and iPad design comps and user flows. The kit contains components for all common controls and views, design templates, text styles, color styles, materials, and layout guides.</p><p><br></p><p>This UI Kit was fully overhauled to support the new design language for iOS and iPadOS 26 including Liquid Glass controls and views, updated control sizes, layouts, and corner radii, updated system colors, and so much more!</p><p><br></p><p>If you have requests, find bugs, or have other feedback, please use <a href=\"https://developer.apple.com/bug-reporting/\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Feedback Assistant</a>. Select Developer Tools &gt; Apple Design Resources.</p><p><br></p><p>Important: Make sure to install the latest version of <a href=\"https://developer.apple.com/sf-symbols/\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">SF Symbols</a> before using this library.</p>",
>       "source": "community"
>     },
>     {
>       "name": "watchOS 26",
>       "libraryKey": "lk-32bda072ec15e732e76d56aa8bd25314051f296f8519a8d868031b46eaabb5ade1290829d0d7deca926b5388f760e9e94aa76d56bfe2ead33d78adeeeb7d15fb",
>       "description": "<p><strong>Updated February 21, 2026</strong></p><p>See Change Log for updates</p><p><br></p><p>Apple’s watchOS 26 UI kit for Figma helps you quickly and easily create highly accurate Apple Watch design comps and user flows. The kit contains components for all common controls, templates, text styles, color styles, materials, and layout guides.</p><p><br></p><p>See the Change Log page for full details.</p><p><br></p><p>If you have requests, find bugs, or have other feedback, please use <a href=\"http://feedbackassistant.apple.com/new?form=developertools.fba&amp;answers%5B:area%5D=seedx:appledesignresources\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Feedback Assistant</a>.</p><p><br></p><p><strong>Important: </strong>Make sure to install the latest version of SF Symbols before using this library.</p>",
>       "source": "community"
>     },
>     {
>       "name": "visionOS 26",
>       "libraryKey": "lk-4f44e69da5f723deffc1c2461604f793251559fb3fb0f1f6af7c4fffaa12c05a33c40283401af5f2edf0db0639d516ccef9b73ae6aadff7e6588df60cbd36dd4",
>       "description": "<p><strong>Updated December 12, 2025</strong></p><p>See the Change Log for details</p><p><br></p><p>Apple’s initial visionOS design kit for Figma contains a comprehensive set of UI components, views, system interfaces, text styles, color styles, and materials. All of the core ingredients you need to quickly create highly realistic visionOS app designs.</p><p><br></p><p>If you have requests, find bugs, or have other feedback for us, please use <a href=\"http://feedbackassistant.apple.com/new?form=developertools.fba&amp;answers%5B:area%5D=seedx:appledesignresources\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">Feedback Assistant</a>.</p><p><br></p><p><strong>Important</strong>: Make sure to install the latest version of SF Symbols before using this library.</p>",
>       "source": "community"
>     },
>     {
>       "name": "macOS 26",
>       "libraryKey": "lk-52492a50a550123b626cdfcd7639929209dc66307681f3f8cf9937770a714f2d76ade248aff2d8a0e42da17e343a440cebc0a04f1800ad34ae6d86e1a7f7aa9a",
>       "description": "<p><strong>Updated February 25, 2026</strong></p><p>See the Change Log for details</p><p><br></p><p>Apple’s official macOS 26 UI kit for Figma contains a comprehensive set of components, text styles, color styles, and materials. All the core ingredients you need to quickly create highly realistic macOS app designs.</p><p><br></p><p><strong>Some key features include:</strong></p><p><br></p><ol><li data-list=\"bullet\">Comprehensive set of macOS UI components including sidebar, toolbar, tables, buttons, menus, cursors and more</li><li data-list=\"bullet\">Views and system components including windows, alerts, popovers, sheets, and save dialogs</li><li data-list=\"bullet\">Desktop templates including menubar, dock, notifications and wallpapers</li><li data-list=\"bullet\">System colors, materials, text styles and vibrancy effects</li><li data-list=\"bullet\">If you have requests, find bugs, or have other feedback for us, please use Feedback Assistant. Select Developer Tools &gt; Apple Design Resources.</li></ol><p><br></p><p>Important: Make sure to install the latest version of <a href=\"https://developer.apple.com/sf-symbols/\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">SF Symbols</a> before using this library.</p>",
>       "source": "community"
>     },
>     {
>       "name": "iOS and iPadOS 27",
>       "libraryKey": "lk-3167e7e1386e96621fc3b20782e2ec1b199754eeceff2ef04bf90d28a124be6414b67982dc8fb71ea1896b0310c316f54d7b9f0ac598cb3111748728c039a567",
>       "description": "<p><strong>Updated July 3, 2026</strong></p><p>See change log for details</p><p><br></p><p>Apple’s iOS and iPadOS 27 UI kit for Figma helps you quickly and easily create highly accurate iPhone and iPad design comps and user flows. The kit contains components for all common controls and views, design templates, text styles, color styles, and materials.</p><p><br></p><p>This UI Kit was fully overhauled to support iOS and iPadOS 27 changes including updates to Liquid Glass, layout, sidebar colors, scroll edge effects, and more.</p><p><br></p><p>If you have requests, find bugs, or have other feedback, please use Feedback Assistant. Select Developer Tools &gt; Apple Design Resources.</p><p><br></p><p>Important: Make sure to install the latest version of <a href=\"https://developer.apple.com/sf-symbols/\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">SF Symbols</a> before using this library.</p>",
>       "source": "community"
>     },
>     {
>       "name": "macOS 27",
>       "libraryKey": "lk-9b6046629e11db2bbe15e5a3fa0443ecd557a34812bc69997a2b8598852d86fb806d4036ca6c146521c7e1cf898a1e3d46dda55a15bf1f86579794b29480aa80",
>       "description": "<p><strong>Updated July 3, 2026</strong></p><p>See the Change Log for details</p><p><br></p><p>Apple’s official macOS 27 UI kit for Figma contains a comprehensive set of components, text styles, color styles, and materials. All the core ingredients you need to quickly create highly realistic macOS app designs.</p><p><br></p><p>Some key features include:</p><p><br></p><ol><li data-list=\"bullet\">Comprehensive set of macOS UI components including sidebar, toolbar, tables, buttons, menus, pointers and more</li><li data-list=\"bullet\">Full dark mode and window state support</li><li data-list=\"bullet\">Views and system components including windows, alerts, popovers, sheets, and dialogs</li><li data-list=\"bullet\">Desktop templates including menubar, dock, notifications and wallpapers</li><li data-list=\"bullet\">System colors, materials, text styles and vibrancy effects</li></ol><p><br></p><p>If you have requests, find bugs, or have other feedback for us, please use Feedback Assistant. Select Developer Tools &gt; Apple Design Resources.</p><p><br></p><p>Important: Make sure to install the latest version of <a href=\"https://developer.apple.com/sf-symbols/\" rel=\"noreferrer noopener nofollow ugc\" target=\"_blank\">SF Symbols</a> before using this library.</p>",
>       "source": "community"
>     },
>     {
>       "name": "Collections",
>       "libraryKey": "lk-9217008c43652169719c2e2df543df30f0a8f4e1cc98e84d108a887a40138ae77fecc0d25885fd643e9463ae8424d2a5a47fff1d753f5e1251c863dbb43ed4a8",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "Graduation Concept Working File",
>       "libraryKey": "lk-dfe8a3736b329fd8c35c54123c0725f4d2dd58bde9145713ff501256af30b79c3a2318ff70e616a18cee1c6c17e7793ef79b28ea2762e18d246ecc8f1e6bcd45",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "Spending",
>       "libraryKey": "lk-8ecac83f192e96fb57e98b9c1452f95e537c0771a71f91d0149293e3facaa4c25d6d635e37338237e504da820fcdda149413bb4ba9939772888aa9789725a61c",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "OneApp MVP Design System",
>       "libraryKey": "lk-1cc74161108d4cdf9ca91cc1887adb3412606958919f1b8c52935610d88732e00d6fd4624b3d5f9c2ca1d25508cfc06b7b7e02a9f91ef1ef6452829ce7fb63bc",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "OMF Sketch Component Library_transfer",
>       "libraryKey": "lk-9958717c903e4187e8e2fc503cd9a8250a690fdc73f49605e7e9ce166688f67e5eef1d610b5a48006a7cd84ecffa9cc4950eafbb9ae189caa1fa08169904d63b",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "TM Design Kit_v1.0.0",
>       "libraryKey": "lk-5574814b0c435ec0c186ed332c2edff2c97bdd4573f9472b873e17aad6a7076d2f2cd72ea36b243b39d4c03012fe10af3717b450b374b9432016e061b8b69fb5",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "BrightWay Components",
>       "libraryKey": "lk-3bf7b8632a59bb212358496c429541f4ad2901b87bc8768dd32444d21b74cdedab41e0f9357b0734a94b27b2b377f301157da8f78bbb25f70ae8a2512859a5b3",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "03 BW Components — Marketing",
>       "libraryKey": "lk-8aa31035f830cb1f1d0b3094b2d724f26ae80398c4c1dc81244cce2e06b16a865a72a67372865821421d3b5888b0a8dd1c13e7e9f419fed492b6114dc96f2b8c",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "Cover Permutations",
>       "libraryKey": "lk-9d9c12b805433c10997b0297a3ef33a4d35d31f1c896528ab92a235176c905ebf0af68e6721db6af852f9e2fcfcea387a05247cff584cc2d1e8bea28ae233d77",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "MyMoney Updates- OneApp",
>       "libraryKey": "lk-f4f32711e886bfbbe318d006947ae0d248746c873c42aeaffed2553ea6ebaf6e612ea7f79a401c5790d0513478204c80f77a667c2f8f3b2591e8679b110d9cc7",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "BW Components — Responsive",
>       "libraryKey": "lk-399cfecce0535b0732e4d4179e1f6d37144ebf0f0eab257a93708f60d5d9c83a36f5b6c7783b6b66ec80acfd00605482aab7b3ceed2c4034ea12655eaaa55624",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "01 BW Styleguide — Product Base",
>       "libraryKey": "lk-0784c40d70bb196573fa1249ded501c6efd34538c893c4d544cc6e7057a6a75d1fcff2d4024494f6b8a79eb16ddeda6146d8218f48b286f0d5eca4db106e2ae4",
>       "description": "",
>       "source": "organization"
>     },
>     {
>       "name": "Handoff Helpers [Archive]",
>       "libraryKey": "lk-9085b57729630dd1d33d1ae4d060c781ff45c8fc4a6ccd2657be666d1020714f6c893ac7c99c6c48ae8422b67033ee5b7db44d691063a8b86514e8fac7f3fe36",
>       "description": "",
>       "source": "organization"
>     }
>   ],
>   "libraries_available_to_add_next_offset": 20
> }
> ```
>
> ```text
> The above JSON contains two lists: libraries_added_to_file (currently subscribed) and libraries_available_to_add (community UI kits and org libraries). Use the libraryKey values to scope searches with search_design_system by passing them as includeLibraryKeys. More organization libraries are available. To fetch the next page, call get_libraries again with the offset parameter set to libraries_available_to_add_next_offset. If the user is looking for a specific library by name and it isn't in the current page, page further or ask them to subscribe it to the file.
> ```
>
> </details>
>
> Working on Phase 0.c: CX library discovery. The file is already subscribed to `CX Design Library`; I’m scoping searches to that library and confirming exact keys/variants for the base components and token families needed by both directions.
>
> <details><summary>Called 17 tools</summary>
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Text Input",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Text Input",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "d61e13ad0473c59d3ffc7f508fe2930b5594d8a2",
>       "description": "Text Input let people enter text into a UI",
>       "filePath": "design_systems/CX Design Library/components/Text Input"
>     },
>     {
>       "name": "MFA Input",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "63c29a5c089b4855531a842febfdfe8323a3381a",
>       "description": "MFA Input lets people enter a 6-digit multi-factor authentication code into a UI.",
>       "filePath": "design_systems/CX Design Library/components/MFA Input"
>     },
>     {
>       "name": "Text Area",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "74ece38d68c7a53b8acf8e369514f200730b9f57",
>       "description": "Text Area let people enter multiple lines of text into a UI.",
>       "filePath": "design_systems/CX Design Library/components/Text Area"
>     },
>     {
>       "name": "Password Input [WIP] *",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "c6053841d19539015d7fe2f8ef4e483c1aa7cf8e",
>       "description": "Password Input lets people securely enter a password into a UI.",
>       "filePath": "design_systems/CX Design Library/components/Password Input _WIP_ _"
>     },
>     {
>       "name": "more-horiz",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:28Z",
>       "componentKey": "80bfa40ae4918997c3a7cf5d267befee8e094dd5",
>       "filePath": "design_systems/CX Design Library/components/more-horiz"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Alert",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Alert",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "b5a2890843d77dd7e88c587d6fb55dbeaa7c45a6",
>       "description": "Alerts communicate conditions, events, and responses to user actions",
>       "filePath": "design_systems/CX Design Library/components/Alert"
>     },
>     {
>       "name": "warning-triangle",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:28Z",
>       "componentKey": "3c8f3a78cf413ad7ea30d1d5810260ff4ef95105",
>       "filePath": "design_systems/CX Design Library/components/warning-triangle"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Navigation",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Navigation Drawer",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "2512c0ed4d6d24be968dda01d460f1d617f5312a",
>       "filePath": "design_systems/CX Design Library/components/Navigation Drawer"
>     },
>     {
>       "name": "OneApp Navigation > Mobile Native",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:22:34Z",
>       "componentKey": "436a315bfd018c870eabf9aac6bbac004ae1f146",
>       "filePath": "design_systems/CX Design Library/components/OneApp Navigation _ Mobile Native"
>     },
>     {
>       "name": "OneApp Navigation > Desktop Web Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:22:34Z",
>       "componentKey": "dbb6c29507dd5a31fe162635ffcb86d18d26abcc",
>       "filePath": "design_systems/CX Design Library/components/OneApp Navigation _ Desktop Web Bar"
>     },
>     {
>       "name": "OneApp Navigation > Mobile Web Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-03-17T15:22:45Z",
>       "componentKey": "b4ba0ca399a3a615b3c067c005265764548970a9",
>       "filePath": "design_systems/CX Design Library/components/OneApp Navigation _ Mobile Web Bar"
>     },
>     {
>       "name": "OneApp Navigation > Mobile Web Drawer",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-02-05T17:08:23Z",
>       "componentKey": "43d684b9b548ecb8073ded9b8f65d3ca8747cd8f",
>       "filePath": "design_systems/CX Design Library/components/OneApp Navigation _ Mobile Web Drawer"
>     },
>     {
>       "name": "Navigation List Item",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "84ff19f9adf51476983c3a270d1510f8a4794325",
>       "filePath": "design_systems/CX Design Library/components/Navigation List Item"
>     },
>     {
>       "name": "List Item",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "ba1d31e66c08df94cb93982fe7ab5784eef5ce4c",
>       "filePath": "design_systems/CX Design Library/components/List Item"
>     },
>     {
>       "name": "send",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:29Z",
>       "componentKey": "f08c362b3538fa3fd5ed0a9c2e49d7b5f98db268",
>       "filePath": "design_systems/CX Design Library/components/send"
>     },
>     {
>       "name": "Badge",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "afbc5c2ec8bed0b68f969e42bb47cb0f2a9bb756",
>       "description": "Badges show notifications, counts, or status information on navigation items and icons",
>       "filePath": "design_systems/CX Design Library/components/Badge"
>     },
>     {
>       "name": "Utility List Item",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:54Z",
>       "componentKey": "65c263f76d2145156a724fed2598064cf2bfec85",
>       "filePath": "design_systems/CX Design Library/components/Utility List Item"
>     },
>     {
>       "name": "Close Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "d6048d15688498ca98ce9731a595774fc4c9f3d1",
>       "filePath": "design_systems/CX Design Library/components/Close Button"
>     },
>     {
>       "name": "List Item [WIP] *",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:06Z",
>       "componentKey": "21e55bff0e820a9cd5ecd30eb47f174b88a8e5ac",
>       "filePath": "design_systems/CX Design Library/components/List Item _WIP_ _"
>     },
>     {
>       "name": "Web Nav Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "e6f30335b69b90d5b46f14d180b541f17ddd7349",
>       "filePath": "design_systems/CX Design Library/components/Web Nav Bar"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Status Tag",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Bottom Nav Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:44Z",
>       "componentKey": "d4c7816fd6e23a898338f1ad5bde90a1e4260e91",
>       "description": "Bottom Nav Bar lets people switch between the primary views of a native mobile app.",
>       "filePath": "design_systems/CX Design Library/components/Bottom Nav Bar"
>     },
>     {
>       "name": "Tooltip",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-03-17T15:43:54Z",
>       "componentKey": "032a11c2f3a14b39295129585284e077c6b21eb6",
>       "filePath": "design_systems/CX Design Library/components/Tooltip"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Button",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:30Z",
>       "componentKey": "93c929f1ab62af6beb62211797d1506066995587",
>       "description": "Use buttons to prompt actions in a UI",
>       "filePath": "design_systems/CX Design Library/components/Button"
>     },
>     {
>       "name": "Button Stack",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "493eb042a6bd218c9f833fdaf27e2088ca003f7e",
>       "description": "Use a Button Stack for the main set of actions on a focused page, flow, or modal",
>       "filePath": "design_systems/CX Design Library/components/Button Stack"
>     },
>     {
>       "name": "Button Row",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "8fdedc9ffe0fb26ffa935500ccae11d145578992",
>       "description": "Use buttons to prompt actions in a UI",
>       "filePath": "design_systems/CX Design Library/components/Button Row"
>     },
>     {
>       "name": "Radio Button Item",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "3090a1bd1fac95d479e8ffc7b81b15ee3555b3aa",
>       "description": "Radio Button Item lets people select one item in a list.",
>       "filePath": "design_systems/CX Design Library/components/Radio Button Item"
>     },
>     {
>       "name": "Tile Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "1d905cb13bc9fda6a0218d44e309effeca903927",
>       "description": "Tile Button is a tile layout that can be pressed like a button.",
>       "filePath": "design_systems/CX Design Library/components/Tile Button"
>     },
>     {
>       "name": "Back Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "2d874c88b025d3127921d0fdd0e668f693def659",
>       "filePath": "design_systems/CX Design Library/components/Back Button"
>     },
>     {
>       "name": "List Item",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "ba1d31e66c08df94cb93982fe7ab5784eef5ce4c",
>       "filePath": "design_systems/CX Design Library/components/List Item"
>     },
>     {
>       "name": "Radio List",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "ad0bc309f0b0817e88829fd601262f02f128a3f1",
>       "description": "Radio Button List lets people select one option from a list of options.",
>       "filePath": "design_systems/CX Design Library/components/Radio List"
>     },
>     {
>       "name": "Close Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "d6048d15688498ca98ce9731a595774fc4c9f3d1",
>       "filePath": "design_systems/CX Design Library/components/Close Button"
>     },
>     {
>       "name": "Dropdown Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "867192031a81802c8f9d3475c5191e5fedac93cd",
>       "filePath": "design_systems/CX Design Library/components/Dropdown Button"
>     },
>     {
>       "name": "Tile Button Layout",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "ce14c1ebfd6454cae81d25f33c51b1d0c76eac13",
>       "filePath": "design_systems/CX Design Library/components/Tile Button Layout"
>     },
>     {
>       "name": "Card Action Row [WIP] *",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-03-17T15:43:54Z",
>       "componentKey": "f13149f0a4886fd2cc2815fb509d74f24ea5a39d",
>       "description": "Horizontal row of card action buttons. Contains Card Action instances with icon and label.",
>       "filePath": "design_systems/CX Design Library/components/Card Action Row _WIP_ _"
>     },
>     {
>       "name": "Web Nav Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "e6f30335b69b90d5b46f14d180b541f17ddd7349",
>       "filePath": "design_systems/CX Design Library/components/Web Nav Bar"
>     },
>     {
>       "name": "Tooltip",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-03-17T15:43:54Z",
>       "componentKey": "032a11c2f3a14b39295129585284e077c6b21eb6",
>       "filePath": "design_systems/CX Design Library/components/Tooltip"
>     },
>     {
>       "name": "Selector [WIP] *",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:06Z",
>       "componentKey": "a488da92b4eb77ae197e97ec8250c933a477fbbb",
>       "description": "A selectable card with a radio button indicator. Used for account selection and similar single-choice lists.",
>       "filePath": "design_systems/CX Design Library/components/Selector _WIP_ _"
>     },
>     {
>       "name": "Table cell [WIP] *",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:06Z",
>       "componentKey": "812bc5ad8e943610771eca2d73e799eafa522353",
>       "filePath": "design_systems/CX Design Library/components/Table cell _WIP_ _"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Progress",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Linear Progress",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "2fd384381dcdd5f680c8b247dcdbcaab63388462",
>       "description": "Linear Progress visualizes a data value on a linear axis.",
>       "filePath": "design_systems/CX Design Library/components/Linear Progress"
>     },
>     {
>       "name": "Circular-Data-Visualizer-Desktop",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "8490980de31926245f3be05d1629b1ae83bb382c",
>       "description": "Circular Progress represents a data value on a circular axis.",
>       "filePath": "design_systems/CX Design Library/components/Circular-Data-Visualizer-Desktop"
>     },
>     {
>       "name": "graph-up-outline",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:29Z",
>       "componentKey": "add2ca96c69eb59c690d55fe0738b69900b156af",
>       "filePath": "design_systems/CX Design Library/components/graph-up-outline"
>     },
>     {
>       "name": "Inline Loader",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "c566a1eb3b034f9fa803ffed696778ebba506ebb",
>       "description": "Use to communicate in-progress states within UI components",
>       "filePath": "design_systems/CX Design Library/components/Inline Loader"
>     },
>     {
>       "name": "Circular-Data-Visualizer-Mobile",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:43Z",
>       "componentKey": "3e69f2c8cc50f23b17871c3651f60c653229c19a",
>       "description": "Circular Progress represents a data value on a circular axis.",
>       "filePath": "design_systems/CX Design Library/components/Circular-Data-Visualizer-Mobile"
>     },
>     {
>       "name": "Table cell [WIP] *",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:06Z",
>       "componentKey": "812bc5ad8e943610771eca2d73e799eafa522353",
>       "filePath": "design_systems/CX Design Library/components/Table cell _WIP_ _"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Status-Tag",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Bottom Nav Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:44Z",
>       "componentKey": "d4c7816fd6e23a898338f1ad5bde90a1e4260e91",
>       "description": "Bottom Nav Bar lets people switch between the primary views of a native mobile app.",
>       "filePath": "design_systems/CX Design Library/components/Bottom Nav Bar"
>     },
>     {
>       "name": "Tooltip",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-03-17T15:43:54Z",
>       "componentKey": "032a11c2f3a14b39295129585284e077c6b21eb6",
>       "filePath": "design_systems/CX Design Library/components/Tooltip"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Menu Bar",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "Menu Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:54Z",
>       "componentKey": "3a735a2be078b27b7f34aa8e4505d6a321d523f0",
>       "description": "Menu Bar lets people access supporting menus and actions in native mobile apps.",
>       "filePath": "design_systems/CX Design Library/components/Menu Bar"
>     },
>     {
>       "name": "Web Nav Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "e6f30335b69b90d5b46f14d180b541f17ddd7349",
>       "filePath": "design_systems/CX Design Library/components/Web Nav Bar"
>     },
>     {
>       "name": "OneApp Navigation > Mobile Web Bar",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-03-17T15:22:45Z",
>       "componentKey": "b4ba0ca399a3a615b3c067c005265764548970a9",
>       "filePath": "design_systems/CX Design Library/components/OneApp Navigation _ Mobile Web Bar"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "body",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "body/body-info",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "9828300da50f5a0c25317b4e0af17e95c5fd3472",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-info"
>     },
>     {
>       "name": "Body/Caption/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "c0e96aaca98b490439052a8be66c4f983dfa1a39",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Body/Caption/Size"
>     },
>     {
>       "name": "body/body-muted",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "156d3c66efc9a7322ad8eafd46c624e0397197bf",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-muted"
>     },
>     {
>       "name": "Body/Default/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "60d09ae8f1e815edcad2b86003743280e88aa8c9",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Body/Default/Size"
>     },
>     {
>       "name": "body/body-subtle",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "e976f3e1858dd34c59989394344fc90305485eea",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-subtle"
>     },
>     {
>       "name": "Body/Supporting/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "a1cc215f10b53b6e3eb5285e8e70914277c77003",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Body/Supporting/Size"
>     },
>     {
>       "name": "body/body-strong",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "67b76805163ca0ee33adb50e375da4bfa388ffba",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-strong"
>     },
>     {
>       "name": "body/body-inverse",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "e400061cfdca92986b2178b5e1218ba8841dc408",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-inverse"
>     },
>     {
>       "name": "body/body-default",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "c36da5ec9ad6a92d45552a5a4b316865717bb715",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-default"
>     },
>     {
>       "name": "body/body-caution",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "731ff3ea00acd4c2b3cb4267c1a1a065c718b207",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-caution"
>     },
>     {
>       "name": "Body/Supporting/Weight",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "96940cc9106253ac9aef5356955713b2a2d109d3",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Body/Supporting/Weight"
>     },
>     {
>       "name": "body/body-emphasis",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-emphasis"
>     },
>     {
>       "name": "body/body-positive",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "99f60187c3fae0ae0b19a0c72dce7c5d922682ca",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-positive"
>     },
>     {
>       "name": "body/body-selected",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "4531b77a7c2871e6d5a7c8a7e12e528e7e814b2f",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/body/body-selected"
>     }
>   ],
>   "styles": [
>     {
>       "name": "Body/Caption/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "7003fe772e04e761a01b3eb7ef7c6f2e36d9c09b",
>       "filePath": "design_systems/CX Design Library/styles/text/Body/Caption/Medium"
>     },
>     {
>       "name": "Body/Caption/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "72b0281b62247ceeab485d1c9ae32c9d0a025fda",
>       "filePath": "design_systems/CX Design Library/styles/text/Body/Caption/Medium"
>     },
>     {
>       "name": "Body/Default/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "ef032958aaa164ff09f6b925dedfa9664915fb9f",
>       "filePath": "design_systems/CX Design Library/styles/text/Body/Default/Medium"
>     },
>     {
>       "name": "Body/Default/Regular",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "74f4263acb0039c1b395b4a282159dd0ba9154a2",
>       "filePath": "design_systems/CX Design Library/styles/text/Body/Default/Regular"
>     },
>     {
>       "name": "Body/Caption/Regular",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "e5d56b9e89252d8489d2be6d35031d9ba90dce8f",
>       "filePath": "design_systems/CX Design Library/styles/text/Body/Caption/Regular"
>     },
>     {
>       "name": "Body/Supporting/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "5dc57139cfb57a2cabaca4faffc985b627bfdde6",
>       "filePath": "design_systems/CX Design Library/styles/text/Body/Supporting/Medium"
>     },
>     {
>       "name": "Body/Supporting/Regular",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "5600a3dd5568b269e1d5d08f7d0b3bbfc1868a48",
>       "filePath": "design_systems/CX Design Library/styles/text/Body/Supporting/Regular"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "radius",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "radius-full",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "2faeef4e83c1b80db73ab2ed31583c5a37d1e7b6",
>       "key": "fd4492406543257ba71aac908d7402fa6d76de80",
>       "scopes": [
>         "CORNER_RADIUS"
>       ],
>       "variableCollectionName": "Shape",
>       "filePath": "design_systems/CX Design Library/variables/Shape/float/radius-full"
>     },
>     {
>       "name": "radius-small-2",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "2faeef4e83c1b80db73ab2ed31583c5a37d1e7b6",
>       "key": "f4758b533021e9922edbc350dc0e5288c5d3e662",
>       "scopes": [
>         "CORNER_RADIUS"
>       ],
>       "variableCollectionName": "Shape",
>       "filePath": "design_systems/CX Design Library/variables/Shape/float/radius-small-2"
>     },
>     {
>       "name": "radius-large-2",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "2faeef4e83c1b80db73ab2ed31583c5a37d1e7b6",
>       "key": "7621be9004b2a47e2d311f76f69203a47bd291d0",
>       "scopes": [
>         "CORNER_RADIUS"
>       ],
>       "variableCollectionName": "Shape",
>       "filePath": "design_systems/CX Design Library/variables/Shape/float/radius-large-2"
>     },
>     {
>       "name": "radius-large-1",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "2faeef4e83c1b80db73ab2ed31583c5a37d1e7b6",
>       "key": "daf259c9f52407453df55460e0226b60dc35ff50",
>       "scopes": [
>         "CORNER_RADIUS"
>       ],
>       "variableCollectionName": "Shape",
>       "filePath": "design_systems/CX Design Library/variables/Shape/float/radius-large-1"
>     },
>     {
>       "name": "radius-small-1",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "2faeef4e83c1b80db73ab2ed31583c5a37d1e7b6",
>       "key": "4133f5b49b8d5fc50a70c183c0430ddbca469899",
>       "scopes": [
>         "CORNER_RADIUS"
>       ],
>       "variableCollectionName": "Shape",
>       "filePath": "design_systems/CX Design Library/variables/Shape/float/radius-small-1"
>     },
>     {
>       "name": "radius-default",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "2faeef4e83c1b80db73ab2ed31583c5a37d1e7b6",
>       "key": "f52202a2c5afb063f455960b9aaab5f5c37a423a",
>       "scopes": [
>         "CORNER_RADIUS"
>       ],
>       "variableCollectionName": "Shape",
>       "filePath": "design_systems/CX Design Library/variables/Shape/float/radius-default"
>     },
>     {
>       "name": "radius-medium-1",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "2faeef4e83c1b80db73ab2ed31583c5a37d1e7b6",
>       "key": "f066d1b0af34c16ff954c872c5bd2b1920bd0092",
>       "scopes": [
>         "CORNER_RADIUS"
>       ],
>       "variableCollectionName": "Shape",
>       "filePath": "design_systems/CX Design Library/variables/Shape/float/radius-medium-1"
>     }
>   ],
>   "styles": []
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "gap",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "gap/gap-content",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "6d180e8837273bf51ded235bd9393680ba431d9a",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-content"
>     },
>     {
>       "name": "gap/gap-section",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "8ea1f43f97c2e2df79b3501de92aa6e07cb5522b",
>       "scopes": [
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-section"
>     },
>     {
>       "name": "gap/gap-row-large",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "44354caf777ea1f64fbde8830b7e12482f811c00",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-row-large"
>     },
>     {
>       "name": "gap/gap-row-small",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "cf06ec50491972f4f654934b0daf178aa6669e25",
>       "scopes": [
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-row-small"
>     },
>     {
>       "name": "gap/gap-tile-large",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "b312e86fdf06147fc8b1edccff6114abec7d44cc",
>       "scopes": [
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-tile-large"
>     },
>     {
>       "name": "gap/gap-tile-small",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "84071545f33b16816dd47a1c7b43241abbf06694",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-tile-small"
>     },
>     {
>       "name": "gap/gap-group-small",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "1a57b57df80ac462c47f9d1f863c10df1dfadc05",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-group-small"
>     },
>     {
>       "name": "gap/gap-group-large",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "7474934e454348302e6ea9f6d1245fed3951106b",
>       "scopes": [
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-group-large"
>     },
>     {
>       "name": "gap/gap-row-default",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "837aa126daedc9fd1244e1f0d203d32ba103efcf",
>       "scopes": [
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-row-default"
>     },
>     {
>       "name": "gap/gap-content-area",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "6e629c65c8b3ac524d5005270593430c0bc037b4",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-content-area"
>     },
>     {
>       "name": "gap/gap-calendar-header",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "d86a3c9d33ccc79e195ce2c914dc7d7b8ca5aed4",
>       "scopes": [
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/gap/gap-calendar-header"
>     }
>   ],
>   "styles": []
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "surface",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "surface/surface-info",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "608dd64dfb7660ccf019b1b3a397969c0344b1a3",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-info"
>     },
>     {
>       "name": "surface/surface-base",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "55416e4c1a1deae84265fd6039b8403bdd4f1deb",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-base"
>     },
>     {
>       "name": "surface/surface-promo",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "24ed42cda6f6ba16055a6d7e4c6a7886b6024da5",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-promo"
>     },
>     {
>       "name": "table/surface-alt",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "6dcf3098e38e2dc8063dd8f8f10c2cd6b6dbe422",
>       "description": "Table alternating row background",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/table/surface-alt"
>     },
>     {
>       "name": "surface/surface-layer-2",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "a9de31a8df5c219c02506a3398b864224054e2ae",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-layer-2"
>     },
>     {
>       "name": "surface/surface-layer-1",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "25eb4a5fbeac907c74912e0703de0885b5b35c8c",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-layer-1"
>     },
>     {
>       "name": "surface/surface-caution",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "08860b61a9dd3a6955294c52d821435044def791",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-caution"
>     },
>     {
>       "name": "table/surface-hover",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "3780a67fd083651f969fa12be2b819939047281d",
>       "description": "Table row hover / alternating row background",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/table/surface-hover"
>     },
>     {
>       "name": "surface/surface-positive",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-positive"
>     },
>     {
>       "name": "surface/surface-backdrop",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "7c1862f3b2d88c49151ec1476c14b7e0b5ae135f",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-backdrop"
>     },
>     {
>       "name": "surface/surface-negative",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-negative"
>     },
>     {
>       "name": "table/surface-default",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "04c149636815016d743d4b4e5176c4d6c97fdd5e",
>       "description": "Table default background",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/table/surface-default"
>     },
>     {
>       "name": "surface/surface-info-hover",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "8c1886ee5626dbfc695e09cb80cce532f8feb784",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-info-hover"
>     },
>     {
>       "name": "surface/surface-base-hover",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "95d3ebd09bde9ed7e93adb593198770156813543",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/surface/surface-base-hover"
>     }
>   ],
>   "styles": []
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "padding",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "padding/padding-content-area",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "d64c795f207703a9856d1fcabbd1c7c3b18950c5",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/padding/padding-content-area"
>     },
>     {
>       "name": "padding/padding-minimal",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "e586df2274293268ed34be773ff0c9fe4aecfb58",
>       "scopes": [
>         "WIDTH_HEIGHT",
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/padding/padding-minimal"
>     },
>     {
>       "name": "padding/padding-surface-base",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "f8291cb087425019b1b8723f3ed7f60702e043ee",
>       "scopes": [
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/padding/padding-surface-base"
>     },
>     {
>       "name": "padding/padding-x-component-tiny",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "d829a478d060b83e735589013025e911aa2c41f7",
>       "scopes": [
>         "WIDTH_HEIGHT",
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/padding/padding-x-component-tiny"
>     },
>     {
>       "name": "padding/padding-x-component-micro",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "7148f844567d649596b80c517a605f2e511abb17",
>       "scopes": [
>         "WIDTH_HEIGHT",
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/padding/padding-x-component-micro"
>     }
>   ],
>   "styles": []
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "line",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "line/line-info",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "1439bbbfc9a0946d18b45acb60320f11062616e4",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/line/line-info"
>     },
>     {
>       "name": "line/line-focus",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "08f179527d56f43a6e4734369dd32c15c455b676",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/line/line-focus"
>     },
>     {
>       "name": "line/line-muted",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "73a0ee5c388edf54f537b576cada7cb87d190fcf",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/line/line-muted"
>     },
>     {
>       "name": "line/line-subtle",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "10664659e12a133b54a907af4331a5ae0c5a8c96",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/line/line-subtle"
>     },
>     {
>       "name": "Label/Large 1/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "b9345b90135d15c5e9a64162f8d76e418c8d6dec",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Large 1/Line Height"
>     },
>     {
>       "name": "line/line-caution",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "2f73eaac341e51fedbdea5e7aa6d1b8e7b5bd216",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/line/line-caution"
>     },
>     {
>       "name": "line/line-default",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "b309a3f41051b0a5b283133d50dc2e3e19a01efe",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/line/line-default"
>     },
>     {
>       "name": "line/line-inverse",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "COLOR",
>       "variableSetKey": "6cdc182dea76f46e64e15c579544bb895b023d88",
>       "key": "ddcc59ea2d5ede6ef5f93e96ae60be09fdba881e",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Colors",
>       "filePath": "design_systems/CX Design Library/variables/Colors/color/line/line-inverse"
>     },
>     {
>       "name": "Label/Small 2/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "746618f89e4c00121c6f165f7f1930bbb0ab5aac",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 2/Line Height"
>     },
>     {
>       "name": "Headline/Page/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "a6513a5588217088f3d13661a4ab4a2219ff20a2",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Page/Line Height"
>     },
>     {
>       "name": "Label/Small 1/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "58be3dd79918081401f483573294ddfb9f3301a0",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 1/Line Height"
>     },
>     {
>       "name": "Headline/Tile/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "ce661a946dceb8aa8811a85041bec108e05b2390",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Tile/Line Height"
>     },
>     {
>       "name": "Label/Small 3/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "3cab117e9171c754e21c166492805600ad4d5442",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 3/Line Height"
>     },
>     {
>       "name": "Body/Default/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "dfe3ec64947dfdd35c82bfce08a2482ebacd0409",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Body/Default/Line Height"
>     }
>   ],
>   "styles": []
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Headline",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "Headline/Tile/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "45704892b433427feda28e4e8939cd0521b04d17",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Tile/Size"
>     },
>     {
>       "name": "Headline/Page/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "0260cc1e366f4591b302439511751ca359357bed",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Page/Size"
>     },
>     {
>       "name": "Headline/Section/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "82b824c84822b8f189dc33f67ffb07505e90d903",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Section/Size"
>     },
>     {
>       "name": "Headline/Tile/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "ce661a946dceb8aa8811a85041bec108e05b2390",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Tile/Line Height"
>     },
>     {
>       "name": "Headline/Page/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "a6513a5588217088f3d13661a4ab4a2219ff20a2",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Page/Line Height"
>     },
>     {
>       "name": "Headline/Section/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "28c717b57c6fa4fb969e4eec5e97dd45a2bad73d",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Section/Line Height"
>     },
>     {
>       "name": "Headline/Page/Letter Spacing",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "40a9ccb13c7384322b56c7dae5962d671a7c20c0",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Page/Letter Spacing"
>     },
>     {
>       "name": "Headline/Tile/Letter Spacing",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "b7421b8058acd993f5f8ce6066ce5cc5fe1d28a1",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Tile/Letter Spacing"
>     },
>     {
>       "name": "Headline/Section/Letter Spacing",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "12ab1a0e09673515db9e2b7acc8eb0624d5f68e1",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Headline/Section/Letter Spacing"
>     }
>   ],
>   "styles": [
>     {
>       "name": "Headline/Tile",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "bf0a74e22932e05a4cfbec90cac892ba290fa95f",
>       "filePath": "design_systems/CX Design Library/styles/text/Headline/Tile"
>     },
>     {
>       "name": "Headline/Page",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "069b1f7e74f4fec85cbaa43aa2f5e4f5c670579c",
>       "filePath": "design_systems/CX Design Library/styles/text/Headline/Page"
>     },
>     {
>       "name": "Headline/Section",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "2a4fdae6d47dbf7188d800e9f78160730acef58b",
>       "filePath": "design_systems/CX Design Library/styles/text/Headline/Section"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Merchant",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [],
>   "styles": []
> }
> ```
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Inspect representative CX and local component instance properties and product fonts for the document-upload migration without changing the file",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const page=await figma.getNodeByIdAsync(\"0:1\");\nawait figma.setCurrentPageAsync(page);\nfigma.skipInvisibleInstanceChildren=true;\nconst wanted=new Set([\"Button\",\"Alert\",\"Text Input\",\"Status-Tag\",\"Menu Bar\",\"Bottom Nav Bar\",\"List Item\",\"Back Button\",\"Document Request Summary\",\"Document Upload Item\",\"Other Document Upload Item\",\"Guided Upload Card\"]);\nconst instances=page.findAllWithCriteria({types:[\"INSTANCE\"]});\nconst out=[];\nfor(const inst of instances){\n  const mc=await inst.getMainComponentAsync(); if(!mc) continue;\n  const set=mc.parent?.type===\"COMPONENT_SET\"?mc.parent:null;\n  const name=set?.name||mc.name;\n  if(wanted.has(name)&&!out.some(x=>x.componentName===name)){\n    out.push({instanceId:inst.id,instanceName:inst.name,componentName:name,variant:mc.name,componentKey:set?.key||mc.key,properties:Object.fromEntries(Object.entries(inst.componentProperties||{}).map(([k,v])=>[k,{type:v.type,value:v.value}]))});\n  }\n}\nconst fonts=new Map();\nfor(const text of page.findAllWithCriteria({types:[\"TEXT\"]})){\n  for(const seg of text.getStyledTextSegments([\"fontName\"])){\n    const f=seg.fontName;\n    if(f&&typeof f===\"object\")fonts.set(f.family+\"|\"+f.style,{family:f.family,style:f.style});\n  }\n}\nreturn {samples:out,fonts:[...fonts.values()]};"
> }
> ```
>
> ```text
> Error: in get_componentProperties: Component set for node has existing errors
>     at get (<input>:35:11)
>     at <anonymous> (PLUGIN_1_SOURCE:12:171)
> ```
>
> ```text
> Figma Debug UUID: d1dd299b-d5a9-4e52-99c7-f10be9567e23
> ```
>
> </details>
>
> One read-only inspection hit an existing Figma component-set error while querying its exposed properties. The operation was atomic and changed nothing. I’m following the Figma error-recovery guidance, then I’ll isolate the problematic set so it doesn’t block the rest of the inventory.
>
> <details><summary>Explored a file</summary>
>
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-library/references/error-recovery.md`
>
> </details>
>
> <details><summary>Plan</summary>
>
> Implementation is paused. The active task is now transferring both Pencil directions into a new editable Figma page using the CX design library, while preserving the Pencil source.
>
> - [ ] P0.a–P0.f: inspect Pencil, repo, target Figma file, and CX library; lock the migration map
> - [ ] P1: verify/import CX token, typography, and style foundations without duplicating them locally
> - [ ] P2: create the new Figma page and its Direction A, Direction B, and local-component sections
> - [ ] P3: create missing upload-specific local components, then compose every mobile and desktop state
> - [ ] P4: validate structure, component linkage, tokens, typography, accessibility, and visual fidelity
>
> </details>
</details>

> Another nuance to note. Vertical gaps should use gap-group.. or gap-tile. horizontal gaps should use gap-row

<details><summary>3 previous messages</summary>

> Noted and locked into the migration rules:
>
> - Vertical spacing between related elements will use CX `gap-group-*` or `gap-tile-*`.
> - Horizontal spacing between siblings will use CX `gap-row-*`.
>
> I’ll avoid the more ambiguous `gap-x-*`/`gap-y-*` tokens in the transferred layouts unless a CX component instance already owns that internal spacing. This will be included in the Phase 0 mapping and final token audit.
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Inspect representative CX and local component instance properties and product fonts while isolating any existing malformed component sets",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const page=await figma.getNodeByIdAsync(\"0:1\");\nawait figma.setCurrentPageAsync(page);\nfigma.skipInvisibleInstanceChildren=true;\nconst wanted=new Set([\"Button\",\"Alert\",\"Text Input\",\"Status-Tag\",\"Menu Bar\",\"Bottom Nav Bar\",\"List Item\",\"Back Button\",\"Document Request Summary\",\"Document Upload Item\",\"Other Document Upload Item\",\"Guided Upload Card\"]);\nconst instances=page.findAllWithCriteria({types:[\"INSTANCE\"]});\nconst out=[];\nfor(const inst of instances){\n  const mc=await inst.getMainComponentAsync(); if(!mc) continue;\n  const set=mc.parent?.type===\"COMPONENT_SET\"?mc.parent:null;\n  const name=set?.name||mc.name;\n  if(wanted.has(name)&&!out.some(x=>x.componentName===name)){\n    let properties={}; let propertyError=null;\n    try{properties=Object.fromEntries(Object.entries(inst.componentProperties||{}).map(([k,v])=>[k,{type:v.type,value:v.value}]));}\n    catch(e){propertyError=String(e.message||e);}\n    out.push({instanceId:inst.id,instanceName:inst.name,componentName:name,variant:mc.name,componentKey:set?.key||mc.key,properties,propertyError});\n  }\n}\nconst fonts=new Map();\nfor(const text of page.findAllWithCriteria({types:[\"TEXT\"]})){\n  for(const seg of text.getStyledTextSegments([\"fontName\"])){\n    const f=seg.fontName;\n    if(f&&typeof f===\"object\")fonts.set(f.family+\"|\"+f.style,{family:f.family,style:f.style});\n  }\n}\nreturn {samples:out,fonts:[...fonts.values()]};"
> }
> ```
>
> ```text
> {"samples":[{"instanceId":"I7:11;5:14","instanceName":"CX Back Button","componentName":"Back Button","variant":"Show Headline=False","componentKey":"2d874c88b025d3127921d0fdd0e668f693def659","properties":{"Show Headline":{"type":"VARIANT","value":"False"}},"propertyError":null},{"instanceId":"7:58","instanceName":"Document Request Summary","componentName":"Document Request Summary","variant":"Progress=Partial","componentKey":"4cc398a0aff92c239a8c06ddc12f654d7daf554e","properties":{"Count#5:14":{"type":"TEXT","value":"1 of 3"},"Loan#5:13":{"type":"TEXT","value":"Present loan ••••5839"},"Progress":{"type":"VARIANT","value":"Partial"}},"propertyError":null},{"instanceId":"I7:58;16:810","instanceName":"Status-Tag","componentName":"Status-Tag","variant":"Size=Default, Sentiment=Informative, Layout=No Icon","componentKey":"c636fb0e47c184362a85971bdd3abfc12310f724","properties":{},"propertyError":"in get_componentProperties: Component set for node has existing errors"},{"instanceId":"7:69","instanceName":"Other Document Upload Item / Failed","componentName":"Other Document Upload Item","variant":"State=Failed","componentKey":"56048f24ab54cb339e04ffcf9e84cfbd707d2ae9","properties":{"State":{"type":"VARIANT","value":"Failed"}},"propertyError":null},{"instanceId":"I7:69;5:190","instanceName":"CX Text Input / Document type","componentName":"Text Input","variant":"State=Error","componentKey":"d61e13ad0473c59d3ffc7f508fe2930b5594d8a2","properties":{"✏️ Tooltip Label#16205:32":{"type":"TEXT","value":"What’s this?"},"✏️ Success Test#16205:8":{"type":"TEXT","value":"Validated message text"},"✏️ Typing Text#16198:29":{"type":"TEXT","value":"Typing somethi"},"🔄 Leading Icon#16198:17":{"type":"INSTANCE_SWAP","value":"4:8130"},"👀 Typing Text#16198:28":{"type":"BOOLEAN","value":false},"✏️ Prefix Text#16205:40":{"type":"TEXT","value":"$"},"👀 Placeholder Text#16198:27":{"type":"BOOLEAN","value":false},"✏️ Helper Text#16205:16":{"type":"TEXT","value":"This is some helper text"},"✏️ Placeholder Text#16198:26":{"type":"TEXT","value":"e.g., employment letter"},"👀 Input Text#16198:25":{"type":"BOOLEAN","value":true},"✏️ Input Text#16198:24":{"type":"TEXT","value":"Employment verification letter"},"👀 Tooltip Toggle#16198:23":{"type":"BOOLEAN","value":false},"👀 Mask Toggle#16198:22":{"type":"BOOLEAN","value":false},"✏️ Suffix Text#16205:48":{"type":"TEXT","value":"/mo"},"👀 Clear Button#16198:21":{"type":"BOOLEAN","value":false},"✏️ Error Text#16205:0":{"type":"TEXT","value":"Tell us what document you are uploading"},"👀 Prefix Text#16198:19":{"type":"BOOLEAN","value":false},"👀 Leading Icon#16198:18":{"type":"BOOLEAN","value":false},"👀 Optional#16198:16":{"type":"BOOLEAN","value":false},"👀 Helper Text#16205:24":{"type":"BOOLEAN","value":false},"👀 Suffix Text#16198:20":{"type":"BOOLEAN","value":false},"Label#16198:15":{"type":"TEXT","value":"Document type"},"State":{"type":"VARIANT","value":"Error"}},"propertyError":null},{"instanceId":"I7:69;5:256","instanceName":"CX Button / Retry","componentName":"Button","variant":"Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Enabled, Polarity=Default","componentKey":"93c929f1ab62af6beb62211797d1506066995587","properties":{"Label#16116:0":{"type":"TEXT","value":"Retry"},"Swap Icon#5403:0":{"type":"INSTANCE_SWAP","value":"13:991"},"Size":{"type":"VARIANT","value":"Small"},"Hierarchy":{"type":"VARIANT","value":"Secondary"},"Layout":{"type":"VARIANT","value":"Left Icon"},"State":{"type":"VARIANT","value":"Enabled"},"Polarity":{"type":"VARIANT","value":"Default"}},"propertyError":null},{"instanceId":"7:202","instanceName":"Document Upload Item / Uploaded","componentName":"Document Upload Item","variant":"State=Uploaded","componentKey":"03f824b633ba525e7422a8ac87b42e6e725926dd","properties":{"Metadata#5:16":{"type":"TEXT","value":"Uploaded just now"},"Title#5:15":{"type":"TEXT","value":"Recent pay stub"},"State":{"type":"VARIANT","value":"Uploaded"}},"propertyError":null},{"instanceId":"7:283","instanceName":"CX Loan Request List Item","componentName":"List Item","variant":"Type=Navigation, 👀 Tile=True","componentKey":"ba1d31e66c08df94cb93982fe7ab5784eef5ce4c","properties":{"👀 Icon#18367:4":{"type":"BOOLEAN","value":false},"✏️ Label#18367:2":{"type":"TEXT","value":"Present loan ••••5839"},"✏️ Sub-Label#18367:1":{"type":"TEXT","value":"1 of 3 documents uploaded"},"🔄 Icon#18367:3":{"type":"INSTANCE_SWAP","value":"4:7863"},"👀 Sub-Label#18367:0":{"type":"BOOLEAN","value":true},"Type":{"type":"VARIANT","value":"Navigation"},"👀 Tile":{"type":"VARIANT","value":"True"}},"propertyError":null},{"instanceId":"7:299","instanceName":"Guided Upload Card","componentName":"Guided Upload Card","variant":"type=Default","componentKey":"2df7de61e7d00d1cf550f09df8d8abd974dcaa55","properties":{"Body#17:1":{"type":"TEXT","value":"Choose a utility bill or lease that shows your current address."},"Title#17:0":{"type":"TEXT","value":"Upload proof of address"},"type":{"type":"VARIANT","value":"Default"}},"propertyError":null},{"instanceId":"7:452","instanceName":"CX Bottom Nav Bar","componentName":"Bottom Nav Bar","variant":"Items=4, Breakpoint=375","componentKey":"d4c7816fd6e23a898338f1ad5bde90a1e4260e91","properties":{"Items":{"type":"VARIANT","value":"4"},"Breakpoint":{"type":"VARIANT","value":"375"}},"propertyError":null},{"instanceId":"7:487","instanceName":"CX Alert / Error","componentName":"Alert","variant":"Type=Error","componentKey":"b5a2890843d77dd7e88c587d6fb55dbeaa7c45a6","properties":{"Show Button Set#13087:0":{"type":"BOOLEAN","value":false},"Show Close Button#10330:5":{"type":"BOOLEAN","value":false},"Show Supporting Text#10324:0":{"type":"BOOLEAN","value":true},"Text#10114:3":{"type":"TEXT","value":"1 upload needs attention"},"Supporting Text#10114:0":{"type":"TEXT","value":"employment-letter.pdf was not saved. Review the error and try again."},"Type":{"type":"VARIANT","value":"Error"}},"propertyError":null},{"instanceId":"17:5990","instanceName":"Menu Bar","componentName":"Menu Bar","variant":"Page Level=Secondary, State=Scrolling, Show Actions=False","componentKey":"3a735a2be078b27b7f34aa8e4505d6a321d523f0","properties":{"Page Level":{"type":"VARIANT","value":"Secondary"},"State":{"type":"VARIANT","value":"Scrolling"},"Show Actions":{"type":"VARIANT","value":"False"}},"propertyError":null}],"fonts":[{"family":"Merchant","style":"Bold"},{"family":"Merchant","style":"Regular"},{"family":"Merchant","style":"Medium"},{"family":"SF Pro","style":"Semibold"}]}
> ```
>
> <details><summary>Called 4 tools</summary>
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "B1hNRM"
> }
> ```
>
> ```text
> Screenshot generated for node: B1hNRM
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "bPgqn"
> }
> ```
>
> ```text
> Screenshot generated for node: bPgqn
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "I94Kf"
> }
> ```
>
> ```text
> Screenshot generated for node: I94Kf
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> MCP tool call
>
> pencil.get_screenshot
>
> ```json
> {
>   "filePath": "/Users/kai.jei/Documents/docs/_projects/doc-upload/one-app-starter.pen",
>   "nodeId": "O8sAyn"
> }
> ```
>
> ```text
> Screenshot generated for node: O8sAyn
> Analyze the image that it satisfies the requirements. Verify there is no broken, collapsed, or overflowing layout issue.
> ```
>
> Image output: image/png
>
> </details>
</details>

> sorry I shold have been more specific. here's the gap hierarchy:
> - vertical or horizontal gaps between content sections should use gap-content
> - vertical gaps within a section should use gap-section
> - vertical gaps grouping content inside a card/tile should use gap-tile or gap-group
> -  horizontal gaps inside a card/tile should use gap-row

<details><summary>2 previous messages</summary>

> Thanks—that supersedes my earlier shorthand. The spacing contract is now:
>
> - `gap-content`: vertical or horizontal separation between content sections
> - `gap-section`: vertical separation within a section
> - `gap-tile-*` / `gap-group-*`: vertical grouping inside cards or tiles
> - `gap-row-*`: horizontal grouping inside cards or tiles
>
> The CX library exposes each of these token families, so the transfer can bind to them directly.
>
> <details><summary>Plan</summary>
>
> Phase 0 discovery and mapping are complete. No Figma or Pencil designs have been changed. Awaiting the required Phase 0 approval before creating the new Figma page.
>
> - [ ] P0.a–P0.f: inspect Pencil, repo, target Figma file, and CX library; lock the migration map
> - [ ] P1: verify/import CX token, typography, and style foundations without duplicating them locally
> - [ ] P2: create the new Figma page and its Direction A and Direction B sections
> - [ ] P3: create missing upload-specific local components, then compose every mobile and desktop state
> - [ ] P4: validate structure, component linkage, tokens, typography, accessibility, and visual fidelity
>
> </details>
</details>

## Phase 0 Summary

- `P0.a` Pencil and repo inventory complete.
- `P0.b` Existing Figma screens, variables, styles, and local components inspected.
- `P0.c` CX Design Library confirmed as subscribed and accessible.
- `P0.d` Transfer scope locked to all 30 responsive/state screens from `C7ypH` and `hl9HZ`.
- `P0.e` Pencil-to-Figma component mapping complete.
- `P0.f` Gap analysis below.

No Pencil or Figma designs have been changed.

### Migration map

New page: `Doc Upload — Pencil Directions`

CX components to reuse include:

- Button and Button Stack
- Alert
- Text Input
- Linear Progress
- Status-Tag
- List Item and Back Button
- Menu Bar and Bottom Nav Bar
- Web Nav Bar and OneApp navigation
- CX icons

Existing local Figma components to reuse where their contracts fit:

- Document Upload App Bar
- Document Request Summary
- Document Upload Item
- Other Document Upload Item
- Guided Upload Card

Missing upload-specific patterns will be created as local components on the existing `Local Components` page, including the drop zone, selected-file row, checklist card, batch summary rail, guided progress header, and any required state wrappers.

### Token rules

- `gap-content`: between content sections, vertically or horizontally
- `gap-section`: vertical spacing within a section
- `gap-tile-*` / `gap-group-*`: vertical grouping inside cards and tiles
- `gap-row-*`: horizontal grouping inside cards and tiles
- CX color, radius, padding, typography, and elevation variables throughout
- Merchant typography rather than Pencil’s temporary DM Sans setting

### Intentional deviations from Pencil

- `Other document` remains required when included by backend request data.
- Its document-type note remains required.
- PRD status and accessibility requirements override exploratory copy.
- Existing Figma pages and designs remain untouched.
- `one-app-starter.pen`, including `C7ypH` and `hl9HZ`, remains untouched.

One CX `Status-Tag` set currently reports an existing component-property error through Figma’s API. I’ll still reuse the CX asset where possible; if that error prevents configuration, I’ll place it inside a local document-status wrapper rather than recreating the CX base component.

Please approve Phase 0, and I’ll create the new page and begin the transfer.

> don't use any of the current local components. outside of that, Phase 0 Approved

<details><summary>38 previous messages</summary>

> Phase 0 is approved with one revision: none of the existing local components will be used or modified. They’ll remain in the file for their current designs, while this transfer uses CX assets plus a new, isolated set of upload-specific local components.
>
> Phase 1 Checklist
>
> - `P1.a` Confirm the subscribed CX library is the sole foundation source for this transfer.
> - `P1.b` Import the required CX semantic variables in small validated batches.
> - `P1.c` Import the required CX text styles and verify Merchant is available.
> - `P1.d` Verify there are no new local token collections or duplicate base styles.
>
> Exit criteria: every foundation needed by the new components is available from CX, Merchant is confirmed, and no parallel token system is created.
>
> <details><summary>Created a file, explored a file, a list</summary>
>
> - Wrote `/tmp/dsb-state-doc-upload-pencil-transfer-20260714.json` (+18 -0)
>
> <details><summary>Explored a file, a list</summary>
>
> - Listed files in `dsb-state-doc-upload-pencil-transfer-20260714.json`
> - Read `/tmp/dsb-state-doc-upload-pencil-transfer-20260714.json`
>
> </details>
>
> </details>
>
> Working on Phase 1.b: CX semantic color foundations. I’m importing only references to the published CX variables—no local color collection or copied raw values.
>
> <details><summary>Called 2 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Import the first CX semantic color variable batch for the new document-upload directions",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const vars=await Promise.all([\"7c1862f3b2d88c49151ec1476c14b7e0b5ae135f\",\"55416e4c1a1deae84265fd6039b8403bdd4f1deb\",\"25eb4a5fbeac907c74912e0703de0885b5b35c8c\",\"608dd64dfb7660ccf019b1b3a397969c0344b1a3\",\"dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a\",\"1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7\",\"08860b61a9dd3a6955294c52d821435044def791\",\"e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5\",\"c36da5ec9ad6a92d45552a5a4b316865717bb715\",\"6b85ffe601c780c2b3d8cfd6ddee17358efacf4a\"].map(key=>figma.variables.importVariableByKeyAsync(key)));\nreturn {mutatedVariableIds:vars.map(v=>v.id),variables:vars.map(v=>({name:v.name,id:v.id,key:v.key,remote:v.remote,type:v.resolvedType}))};"
> }
> ```
>
> ```text
> {"mutatedVariableIds":["VariableID:7c1862f3b2d88c49151ec1476c14b7e0b5ae135f/21076:50","VariableID:55416e4c1a1deae84265fd6039b8403bdd4f1deb/21076:51","VariableID:25eb4a5fbeac907c74912e0703de0885b5b35c8c/21076:53","VariableID:608dd64dfb7660ccf019b1b3a397969c0344b1a3/21076:55","VariableID:dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a/21076:60","VariableID:1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7/21076:66","VariableID:08860b61a9dd3a6955294c52d821435044def791/21076:63","VariableID:e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5/21076:77","VariableID:c36da5ec9ad6a92d45552a5a4b316865717bb715/21076:79","VariableID:6b85ffe601c780c2b3d8cfd6ddee17358efacf4a/21076:80"],"variables":[{"name":"surface/surface-backdrop","id":"VariableID:7c1862f3b2d88c49151ec1476c14b7e0b5ae135f/21076:50","key":"7c1862f3b2d88c49151ec1476c14b7e0b5ae135f","remote":true,"type":"COLOR"},{"name":"surface/surface-base","id":"VariableID:55416e4c1a1deae84265fd6039b8403bdd4f1deb/21076:51","key":"55416e4c1a1deae84265fd6039b8403bdd4f1deb","remote":true,"type":"COLOR"},{"name":"surface/surface-layer-1","id":"VariableID:25eb4a5fbeac907c74912e0703de0885b5b35c8c/21076:53","key":"25eb4a5fbeac907c74912e0703de0885b5b35c8c","remote":true,"type":"COLOR"},{"name":"surface/surface-info","id":"VariableID:608dd64dfb7660ccf019b1b3a397969c0344b1a3/21076:55","key":"608dd64dfb7660ccf019b1b3a397969c0344b1a3","remote":true,"type":"COLOR"},{"name":"surface/surface-positive","id":"VariableID:dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a/21076:60","key":"dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a","remote":true,"type":"COLOR"},{"name":"surface/surface-negative","id":"VariableID:1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7/21076:66","key":"1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7","remote":true,"type":"COLOR"},{"name":"surface/surface-caution","id":"VariableID:08860b61a9dd3a6955294c52d821435044def791/21076:63","key":"08860b61a9dd3a6955294c52d821435044def791","remote":true,"type":"COLOR"},{"name":"body/body-emphasis","id":"VariableID:e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5/21076:77","key":"e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5","remote":true,"type":"COLOR"},{"name":"body/body-default","id":"VariableID:c36da5ec9ad6a92d45552a5a4b316865717bb715/21076:79","key":"c36da5ec9ad6a92d45552a5a4b316865717bb715","remote":true,"type":"COLOR"},{"name":"body/body-moderate","id":"VariableID:6b85ffe601c780c2b3d8cfd6ddee17358efacf4a/21076:80","key":"6b85ffe601c780c2b3d8cfd6ddee17358efacf4a","remote":true,"type":"COLOR"}]}
> ```
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Import the second CX semantic color and line variable batch for the new document-upload directions",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const vars=await Promise.all([\"9828300da50f5a0c25317b4e0af17e95c5fd3472\",\"99f60187c3fae0ae0b19a0c72dce7c5d922682ca\",\"2cd1abbfaba19c691d50bc75d4a75a3f56229bd1\",\"731ff3ea00acd4c2b3cb4267c1a1a065c718b207\",\"73a0ee5c388edf54f537b576cada7cb87d190fcf\",\"b309a3f41051b0a5b283133d50dc2e3e19a01efe\",\"b62c9f294c108836c4fa2405bc089b1a6dcb103b\",\"681a8692631646db0e3429baaff64ab2a4013d47\",\"511a56c8d269738b1136e189937643db538226f4\",\"10664659e12a133b54a907af4331a5ae0c5a8c96\"].map(key=>figma.variables.importVariableByKeyAsync(key)));\nreturn {mutatedVariableIds:vars.map(v=>v.id),variables:vars.map(v=>({name:v.name,id:v.id,key:v.key,remote:v.remote,type:v.resolvedType}))};"
> }
> ```
>
> ```text
> {"mutatedVariableIds":["VariableID:9828300da50f5a0c25317b4e0af17e95c5fd3472/21076:83","VariableID:99f60187c3fae0ae0b19a0c72dce7c5d922682ca/21076:84","VariableID:2cd1abbfaba19c691d50bc75d4a75a3f56229bd1/21076:86","VariableID:731ff3ea00acd4c2b3cb4267c1a1a065c718b207/21076:85","VariableID:73a0ee5c388edf54f537b576cada7cb87d190fcf/21076:98","VariableID:b309a3f41051b0a5b283133d50dc2e3e19a01efe/21076:96","VariableID:b62c9f294c108836c4fa2405bc089b1a6dcb103b/21083:103","VariableID:681a8692631646db0e3429baaff64ab2a4013d47/21076:8","VariableID:511a56c8d269738b1136e189937643db538226f4/21076:12","VariableID:10664659e12a133b54a907af4331a5ae0c5a8c96/21076:99"],"variables":[{"name":"body/body-info","id":"VariableID:9828300da50f5a0c25317b4e0af17e95c5fd3472/21076:83","key":"9828300da50f5a0c25317b4e0af17e95c5fd3472","remote":true,"type":"COLOR"},{"name":"body/body-positive","id":"VariableID:99f60187c3fae0ae0b19a0c72dce7c5d922682ca/21076:84","key":"99f60187c3fae0ae0b19a0c72dce7c5d922682ca","remote":true,"type":"COLOR"},{"name":"body/body-negative","id":"VariableID:2cd1abbfaba19c691d50bc75d4a75a3f56229bd1/21076:86","key":"2cd1abbfaba19c691d50bc75d4a75a3f56229bd1","remote":true,"type":"COLOR"},{"name":"body/body-caution","id":"VariableID:731ff3ea00acd4c2b3cb4267c1a1a065c718b207/21076:85","key":"731ff3ea00acd4c2b3cb4267c1a1a065c718b207","remote":true,"type":"COLOR"},{"name":"line/line-muted","id":"VariableID:73a0ee5c388edf54f537b576cada7cb87d190fcf/21076:98","key":"73a0ee5c388edf54f537b576cada7cb87d190fcf","remote":true,"type":"COLOR"},{"name":"line/line-default","id":"VariableID:b309a3f41051b0a5b283133d50dc2e3e19a01efe/21076:96","key":"b309a3f41051b0a5b283133d50dc2e3e19a01efe","remote":true,"type":"COLOR"},{"name":"line/line-negative","id":"VariableID:b62c9f294c108836c4fa2405bc089b1a6dcb103b/21083:103","key":"b62c9f294c108836c4fa2405bc089b1a6dcb103b","remote":true,"type":"COLOR"},{"name":"primary/primary","id":"VariableID:681a8692631646db0e3429baaff64ab2a4013d47/21076:8","key":"681a8692631646db0e3429baaff64ab2a4013d47","remote":true,"type":"COLOR"},{"name":"primary/on-primary","id":"VariableID:511a56c8d269738b1136e189937643db538226f4/21076:12","key":"511a56c8d269738b1136e189937643db538226f4","remote":true,"type":"COLOR"},{"name":"line/line-subtle","id":"VariableID:10664659e12a133b54a907af4331a5ae0c5a8c96/21076:99","key":"10664659e12a133b54a907af4331a5ae0c5a8c96","remote":true,"type":"COLOR"}]}
> ```
>
> </details>
>
> Working on Phase 1.b: CX spacing foundations. The import follows the approved hierarchy exactly—content, section, tile/group, then row tokens.
>
> <details><summary>Called 3 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Import the approved CX content, section, tile, group, row, and content-area spacing variables",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const vars=await Promise.all([\"6d180e8837273bf51ded235bd9393680ba431d9a\",\"8ea1f43f97c2e2df79b3501de92aa6e07cb5522b\",\"84071545f33b16816dd47a1c7b43241abbf06694\",\"b312e86fdf06147fc8b1edccff6114abec7d44cc\",\"1a57b57df80ac462c47f9d1f863c10df1dfadc05\",\"7474934e454348302e6ea9f6d1245fed3951106b\",\"cf06ec50491972f4f654934b0daf178aa6669e25\",\"837aa126daedc9fd1244e1f0d203d32ba103efcf\",\"44354caf777ea1f64fbde8830b7e12482f811c00\",\"d64c795f207703a9856d1fcabbd1c7c3b18950c5\"].map(key=>figma.variables.importVariableByKeyAsync(key)));\nreturn {mutatedVariableIds:vars.map(v=>v.id),variables:vars.map(v=>({name:v.name,id:v.id,key:v.key,remote:v.remote,type:v.resolvedType}))};"
> }
> ```
>
> ```text
> {"mutatedVariableIds":["VariableID:6d180e8837273bf51ded235bd9393680ba431d9a/21089:128","VariableID:8ea1f43f97c2e2df79b3501de92aa6e07cb5522b/21089:129","VariableID:84071545f33b16816dd47a1c7b43241abbf06694/21089:131","VariableID:b312e86fdf06147fc8b1edccff6114abec7d44cc/21089:130","VariableID:1a57b57df80ac462c47f9d1f863c10df1dfadc05/21089:133","VariableID:7474934e454348302e6ea9f6d1245fed3951106b/21089:132","VariableID:cf06ec50491972f4f654934b0daf178aa6669e25/21089:136","VariableID:837aa126daedc9fd1244e1f0d203d32ba103efcf/21089:135","VariableID:44354caf777ea1f64fbde8830b7e12482f811c00/21089:134","VariableID:d64c795f207703a9856d1fcabbd1c7c3b18950c5/21086:109"],"variables":[{"name":"gap/gap-content","id":"VariableID:6d180e8837273bf51ded235bd9393680ba431d9a/21089:128","key":"6d180e8837273bf51ded235bd9393680ba431d9a","remote":true,"type":"FLOAT"},{"name":"gap/gap-section","id":"VariableID:8ea1f43f97c2e2df79b3501de92aa6e07cb5522b/21089:129","key":"8ea1f43f97c2e2df79b3501de92aa6e07cb5522b","remote":true,"type":"FLOAT"},{"name":"gap/gap-tile-small","id":"VariableID:84071545f33b16816dd47a1c7b43241abbf06694/21089:131","key":"84071545f33b16816dd47a1c7b43241abbf06694","remote":true,"type":"FLOAT"},{"name":"gap/gap-tile-large","id":"VariableID:b312e86fdf06147fc8b1edccff6114abec7d44cc/21089:130","key":"b312e86fdf06147fc8b1edccff6114abec7d44cc","remote":true,"type":"FLOAT"},{"name":"gap/gap-group-small","id":"VariableID:1a57b57df80ac462c47f9d1f863c10df1dfadc05/21089:133","key":"1a57b57df80ac462c47f9d1f863c10df1dfadc05","remote":true,"type":"FLOAT"},{"name":"gap/gap-group-large","id":"VariableID:7474934e454348302e6ea9f6d1245fed3951106b/21089:132","key":"7474934e454348302e6ea9f6d1245fed3951106b","remote":true,"type":"FLOAT"},{"name":"gap/gap-row-small","id":"VariableID:cf06ec50491972f4f654934b0daf178aa6669e25/21089:136","key":"cf06ec50491972f4f654934b0daf178aa6669e25","remote":true,"type":"FLOAT"},{"name":"gap/gap-row-default","id":"VariableID:837aa126daedc9fd1244e1f0d203d32ba103efcf/21089:135","key":"837aa126daedc9fd1244e1f0d203d32ba103efcf","remote":true,"type":"FLOAT"},{"name":"gap/gap-row-large","id":"VariableID:44354caf777ea1f64fbde8830b7e12482f811c00/21089:134","key":"44354caf777ea1f64fbde8830b7e12482f811c00","remote":true,"type":"FLOAT"},{"name":"padding/padding-content-area","id":"VariableID:d64c795f207703a9856d1fcabbd1c7c3b18950c5/21086:109","key":"d64c795f207703a9856d1fcabbd1c7c3b18950c5","remote":true,"type":"FLOAT"}]}
> ```
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Import the remaining CX surface padding radius and stroke foundations",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const vars=await Promise.all([\"f8291cb087425019b1b8723f3ed7f60702e043ee\",\"f52202a2c5afb063f455960b9aaab5f5c37a423a\",\"daf259c9f52407453df55460e0226b60dc35ff50\",\"fd4492406543257ba71aac908d7402fa6d76de80\",\"7fc0c5aec0149a61a1ad60019f1237d6830e0eb9\",\"a9de31a8df5c219c02506a3398b864224054e2ae\"].map(key=>figma.variables.importVariableByKeyAsync(key)));\nreturn {mutatedVariableIds:vars.map(v=>v.id),variables:vars.map(v=>({name:v.name,id:v.id,key:v.key,remote:v.remote,type:v.resolvedType}))};"
> }
> ```
>
> ```text
> {"mutatedVariableIds":["VariableID:f8291cb087425019b1b8723f3ed7f60702e043ee/21086:110","VariableID:f52202a2c5afb063f455960b9aaab5f5c37a423a/21096:263","VariableID:daf259c9f52407453df55460e0226b60dc35ff50/21096:261","VariableID:fd4492406543257ba71aac908d7402fa6d76de80/21096:259","VariableID:7fc0c5aec0149a61a1ad60019f1237d6830e0eb9/21093:167","VariableID:a9de31a8df5c219c02506a3398b864224054e2ae/21076:54"],"variables":[{"name":"padding/padding-surface-base","id":"VariableID:f8291cb087425019b1b8723f3ed7f60702e043ee/21086:110","key":"f8291cb087425019b1b8723f3ed7f60702e043ee","remote":true,"type":"FLOAT"},{"name":"radius-default","id":"VariableID:f52202a2c5afb063f455960b9aaab5f5c37a423a/21096:263","key":"f52202a2c5afb063f455960b9aaab5f5c37a423a","remote":true,"type":"FLOAT"},{"name":"radius-large-1","id":"VariableID:daf259c9f52407453df55460e0226b60dc35ff50/21096:261","key":"daf259c9f52407453df55460e0226b60dc35ff50","remote":true,"type":"FLOAT"},{"name":"radius-full","id":"VariableID:fd4492406543257ba71aac908d7402fa6d76de80/21096:259","key":"fd4492406543257ba71aac908d7402fa6d76de80","remote":true,"type":"FLOAT"},{"name":"stroke/stroke-default","id":"VariableID:7fc0c5aec0149a61a1ad60019f1237d6830e0eb9/21093:167","key":"7fc0c5aec0149a61a1ad60019f1237d6830e0eb9","remote":true,"type":"FLOAT"},{"name":"surface/surface-layer-2","id":"VariableID:a9de31a8df5c219c02506a3398b864224054e2ae/21076:54","key":"a9de31a8df5c219c02506a3398b864224054e2ae","remote":true,"type":"COLOR"}]}
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "Label/Default",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": true
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "Label/Default/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "b4d879257ac86c1f2b6b868d68568d9ffb020d03",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Default/Size"
>     },
>     {
>       "name": "Label/Default/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "664ce58535b4b62485f149fb39aa6a023521a01c",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Default/Line Height"
>     },
>     {
>       "name": "Label/Default/Letter Spacing",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "4f8c4f4041cf33c1ee69d0e0cde6b2fa5cf50533",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Default/Letter Spacing"
>     },
>     {
>       "name": "Label/Large 1/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "4cb812848be57f5c605331045b5aaa15b14cc26f",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Large 1/Size"
>     },
>     {
>       "name": "Label/Small 2/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "245e8eec7abd8c62a7550887814d163cdca0f5a8",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 2/Size"
>     },
>     {
>       "name": "Label/Small 3/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "8fa77c0a3d35752b0d0f216e5ca112c708530cde",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 3/Size"
>     },
>     {
>       "name": "Label/Small 1/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "f7c3a7b169bed91bfb19d916a522c80fa08bbcdf",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 1/Size"
>     },
>     {
>       "name": "Label/Large 1/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "b9345b90135d15c5e9a64162f8d76e418c8d6dec",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Large 1/Line Height"
>     },
>     {
>       "name": "Body/Default/Size",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "60d09ae8f1e815edcad2b86003743280e88aa8c9",
>       "scopes": [
>         "FONT_SIZE"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Body/Default/Size"
>     },
>     {
>       "name": "Label/Small 2/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "746618f89e4c00121c6f165f7f1930bbb0ab5aac",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 2/Line Height"
>     },
>     {
>       "name": "Label/Small 3/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "3cab117e9171c754e21c166492805600ad4d5442",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 3/Line Height"
>     },
>     {
>       "name": "Label/Small 1/Line Height",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "58be3dd79918081401f483573294ddfb9f3301a0",
>       "scopes": [
>         "LINE_HEIGHT"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 1/Line Height"
>     },
>     {
>       "name": "Label/Large 1/Letter Spacing",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "c306da112ddb1432fc5d9fc04ce5206becc79ca2",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Large 1/Letter Spacing"
>     },
>     {
>       "name": "Label/Small 2/Letter Spacing",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "3d46728df9e1026b03d3b76d3291346880876343",
>       "key": "153ab80357d4fed9b3c77d5bb2259dec3187e433",
>       "scopes": [
>         "ALL_SCOPES"
>       ],
>       "variableCollectionName": "Fonts",
>       "filePath": "design_systems/CX Design Library/variables/Fonts/float/Label/Small 2/Letter Spacing"
>     }
>   ],
>   "styles": [
>     {
>       "name": "Label/Default/Bold",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "0e1db707aa2304928804036845b4e0d164b898d7",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Default/Bold"
>     },
>     {
>       "name": "Label/Default/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "25866c19b4d9ac7a659d17f87884390d049fe6c1",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Default/Medium"
>     },
>     {
>       "name": "Label/Default/Regular",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "ad03c0b23fd2e6cc5843518cb8e7f10ab0e8e2c8",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Default/Regular"
>     },
>     {
>       "name": "Label/Large 1/Bold",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "534689e6e441d0fc5e3ea3856102fe09713fed07",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Large 1/Bold"
>     },
>     {
>       "name": "Link/Default",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "df75df4eaf1967b582a83bd836fcfa560c59e045",
>       "filePath": "design_systems/CX Design Library/styles/text/Link/Default"
>     },
>     {
>       "name": "Label/Small 3/Bold",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "40557937dcf088087c2d1f6aefde4555ffa2594f",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Small 3/Bold"
>     },
>     {
>       "name": "Label/Small 1/Bold",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "59c39ea4967dd27d5121fc75c76c871f8864f980",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Small 1/Bold"
>     },
>     {
>       "name": "Label/Large 1/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "9e61222d2d569484a4dd6acc9ac4ee24619abeaf",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Large 1/Medium"
>     },
>     {
>       "name": "Label/Small 2/Bold",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "0bf4951623a4c470a0a041e2dc05c403b9fdffe3",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Small 2/Bold"
>     },
>     {
>       "name": "Label/Large 1/Regular",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "e530f067149eb9aca63150758d6936a7c7495709",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Large 1/Regular"
>     },
>     {
>       "name": "Label/Small 2/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "ded2a782a665bef7d033b768ea5d603b2fb20e8a",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Small 2/Medium"
>     },
>     {
>       "name": "Label/Small 3/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "0cee6c7a6da41b005505b2223e3f3ab31a989c4b",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Small 3/Medium"
>     },
>     {
>       "name": "Label/Small 1/Medium",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "e734d8321e84634c5bf39adf9f0d86487137cbcd",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Small 1/Medium"
>     },
>     {
>       "name": "Label/Small 2/Regular",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "styleType": "TEXT",
>       "key": "7364712a9a5bf68abd9919b0b60feba014ddc290",
>       "filePath": "design_systems/CX Design Library/styles/text/Label/Small 2/Regular"
>     }
>   ]
> }
> ```
>
> </details>
>
> Working on Phase 1.c: CX typography foundations. I’m importing the published CX text styles and explicitly checking that their font family resolves to Merchant before any screen text is created.
>
> <details><summary>Edited a file, explored a file, called 2 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Import CX headline body caption and label text styles and verify Merchant font availability",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const [styles,fonts]=await Promise.all([\n  Promise.all([\"069b1f7e74f4fec85cbaa43aa2f5e4f5c670579c\",\"2a4fdae6d47dbf7188d800e9f78160730acef58b\",\"bf0a74e22932e05a4cfbec90cac892ba290fa95f\",\"74f4263acb0039c1b395b4a282159dd0ba9154a2\",\"ef032958aaa164ff09f6b925dedfa9664915fb9f\",\"5600a3dd5568b269e1d5d08f7d0b3bbfc1868a48\",\"5dc57139cfb57a2cabaca4faffc985b627bfdde6\",\"e5d56b9e89252d8489d2be6d35031d9ba90dce8f\",\"25866c19b4d9ac7a659d17f87884390d049fe6c1\",\"ad03c0b23fd2e6cc5843518cb8e7f10ab0e8e2c8\"].map(key=>figma.importStyleByKeyAsync(key))),\n  figma.listAvailableFontsAsync()\n]);\nconst merchant=fonts.filter(f=>f.fontName.family===\"Merchant\").map(f=>f.fontName);\nreturn {mutatedStyleIds:styles.map(s=>s.id),styles:styles.map(s=>({name:s.name,id:s.id,key:s.key,remote:s.remote,fontName:s.fontName,fontSize:s.fontSize,lineHeight:s.lineHeight})),merchantFonts:merchant};"
> }
> ```
>
> ```text
> {"mutatedStyleIds":["S:069b1f7e74f4fec85cbaa43aa2f5e4f5c670579c,21481:2","S:2a4fdae6d47dbf7188d800e9f78160730acef58b,21512:88","S:bf0a74e22932e05a4cfbec90cac892ba290fa95f,21493:29","S:74f4263acb0039c1b395b4a282159dd0ba9154a2,21481:12","S:ef032958aaa164ff09f6b925dedfa9664915fb9f,21481:15","S:5600a3dd5568b269e1d5d08f7d0b3bbfc1868a48,21481:19","S:5dc57139cfb57a2cabaca4faffc985b627bfdde6,21481:21","S:e5d56b9e89252d8489d2be6d35031d9ba90dce8f,21481:24","S:25866c19b4d9ac7a659d17f87884390d049fe6c1,21508:64","S:ad03c0b23fd2e6cc5843518cb8e7f10ab0e8e2c8,21508:62"],"styles":[{"name":"Headline/Page","id":"S:069b1f7e74f4fec85cbaa43aa2f5e4f5c670579c,21481:2","key":"069b1f7e74f4fec85cbaa43aa2f5e4f5c670579c","remote":true,"fontName":{"family":"Merchant","style":"Medium"},"fontSize":30,"lineHeight":{"unit":"PIXELS","value":36}},{"name":"Headline/Section","id":"S:2a4fdae6d47dbf7188d800e9f78160730acef58b,21512:88","key":"2a4fdae6d47dbf7188d800e9f78160730acef58b","remote":true,"fontName":{"family":"Merchant","style":"Bold"},"fontSize":19,"lineHeight":{"unit":"PIXELS","value":24}},{"name":"Headline/Tile","id":"S:bf0a74e22932e05a4cfbec90cac892ba290fa95f,21493:29","key":"bf0a74e22932e05a4cfbec90cac892ba290fa95f","remote":true,"fontName":{"family":"Merchant","style":"Medium"},"fontSize":24,"lineHeight":{"unit":"PIXELS","value":32}},{"name":"Body/Default/Regular","id":"S:74f4263acb0039c1b395b4a282159dd0ba9154a2,21481:12","key":"74f4263acb0039c1b395b4a282159dd0ba9154a2","remote":true,"fontName":{"family":"Merchant","style":"Regular"},"fontSize":17,"lineHeight":{"unit":"PIXELS","value":24}},{"name":"Body/Default/Medium","id":"S:ef032958aaa164ff09f6b925dedfa9664915fb9f,21481:15","key":"ef032958aaa164ff09f6b925dedfa9664915fb9f","remote":true,"fontName":{"family":"Merchant","style":"Medium"},"fontSize":17,"lineHeight":{"unit":"PIXELS","value":24}},{"name":"Body/Supporting/Regular","id":"S:5600a3dd5568b269e1d5d08f7d0b3bbfc1868a48,21481:19","key":"5600a3dd5568b269e1d5d08f7d0b3bbfc1868a48","remote":true,"fontName":{"family":"Merchant","style":"Regular"},"fontSize":15,"lineHeight":{"unit":"PIXELS","value":20}},{"name":"Body/Supporting/Medium","id":"S:5dc57139cfb57a2cabaca4faffc985b627bfdde6,21481:21","key":"5dc57139cfb57a2cabaca4faffc985b627bfdde6","remote":true,"fontName":{"family":"Merchant","style":"Medium"},"fontSize":15,"lineHeight":{"unit":"PIXELS","value":20}},{"name":"Body/Caption/Regular","id":"S:e5d56b9e89252d8489d2be6d35031d9ba90dce8f,21481:24","key":"e5d56b9e89252d8489d2be6d35031d9ba90dce8f","remote":true,"fontName":{"family":"Merchant","style":"Regular"},"fontSize":14,"lineHeight":{"unit":"PIXELS","value":20}},{"name":"Label/Default/Medium","id":"S:25866c19b4d9ac7a659d17f87884390d049fe6c1,21508:64","key":"25866c19b4d9ac7a659d17f87884390d049fe6c1","remote":true,"fontName":{"family":"Merchant","style":"Medium"},"fontSize":17,"lineHeight":{"unit":"PIXELS","value":24}},{"name":"Label/Default/Regular","id":"S:ad03c0b23fd2e6cc5843518cb8e7f10ab0e8e2c8,21508:62","key":"ad03c0b23fd2e6cc5843518cb8e7f10ab0e8e2c8","remote":true,"fontName":{"family":"Merchant","style":"Regular"},"fontSize":17,"lineHeight":{"unit":"PIXELS","value":24}}],"merchantFonts":[{"family":"Merchant","style":"Bold"},{"family":"Merchant","style":"Bold Italic"},{"family":"Merchant","style":"Italic"},{"family":"Merchant","style":"Light"},{"family":"Merchant","style":"Light Italic"},{"family":"Merchant","style":"Medium"},{"family":"Merchant","style":"Medium Italic"},{"family":"Merchant","style":"Regular"}]}
> ```
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Verify imported foundations remain remote CX assets and that no local token or text-style collections were created",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const [collections,localVars,localTextStyles,localEffectStyles]=await Promise.all([\n figma.variables.getLocalVariableCollectionsAsync(),\n figma.variables.getLocalVariablesAsync(),\n figma.getLocalTextStylesAsync(),\n figma.getLocalEffectStylesAsync()\n]);\nreturn {localVariableCollections:collections.map(c=>({id:c.id,name:c.name,variableCount:c.variableIds.length})),localVariableCount:localVars.length,localTextStyles:localTextStyles.map(s=>({id:s.id,name:s.name})),localEffectStyles:localEffectStyles.map(s=>({id:s.id,name:s.name}))};"
> }
> ```
>
> ```text
> {"localVariableCollections":[],"localVariableCount":0,"localTextStyles":[],"localEffectStyles":[]}
> ```
>
> - Wrote `/tmp/dsb-state-doc-upload-pencil-transfer-20260714.json` (+285 -6)
>
> <details><summary>Explored 2 files</summary>
>
> - Read `/tmp/dsb-state-doc-upload-pencil-transfer-20260714.json`
> - Read `/tmp/dsb-state-doc-upload-pencil-transfer-20260714.json`
>
> </details>
>
> </details>
>
> Phase 1 Summary
>
> - `P1.a` CX Design Library confirmed as the foundation source.
> - `P1.b` 36 CX semantic variables imported as remote references, including the approved gap hierarchy.
> - `P1.c` 10 CX text styles imported; every imported style resolves to Merchant, and all Merchant weights are available.
> - `P1.d` Validation found zero local variable collections, zero local variables, and zero local text/effect styles. No duplicate foundation was created.
>
> Phase 2 Checklist
>
> - `P2.a` Create the idempotently named page `Doc Upload — Pencil Directions`.
> - `P2.b` Create isolated sections for transfer notes, new local components, and each direction/device family.
> - `P2.c` Tag every created object to this migration run and record its ID.
> - `P2.d` Validate section names, sizes, placement, and non-overlap.
>
> Exit criteria: the page exists once, contains a clean isolated structure, and none of the existing Figma pages or local components have been modified.
>
> <details><summary>Explored a search</summary>
>
> - Searched for `interface SectionNode|resizeWithoutConstraints|resize\(` in `plugin-api-standalone.d.ts`
>
> </details>
>
> Working on Phase 2.a: creating the isolated destination page. This write only adds the new page and leaves every existing page and Pencil node untouched.
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Create the isolated Doc Upload Pencil Directions page idempotently",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";\nconst KEY=\"page/doc-upload-pencil-directions\";\nconst NAME=\"Doc Upload — Pencil Directions\";\nlet page=figma.root.children.find(p=>p.getSharedPluginData(\"dsb\",\"key\")===KEY)||figma.root.children.find(p=>p.name===NAME);\nconst alreadyExisted=!!page;\nif(!page){\n page=figma.createPage();\n page.name=NAME;\n page.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);\n page.setSharedPluginData(\"dsb\",\"phase\",\"phase2\");\n page.setSharedPluginData(\"dsb\",\"key\",KEY);\n}\nreturn {createdNodeIds:alreadyExisted?[]:[page.id],mutatedNodeIds:[],pageId:page.id,pageName:page.name,alreadyExisted};"
> }
> ```
>
> ```text
> {"createdNodeIds":["101:963"],"mutatedNodeIds":[],"pageId":"101:963","pageName":"Doc Upload — Pencil Directions","alreadyExisted":false}
> ```
>
> Working on Phase 2.b: creating the page’s isolated section skeleton. The component section is specifically for new transfer components; the pre-existing `Local Components` page will not be referenced.
>
> <details><summary>Edited a file, explored a file, called 2 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Create isolated component and screen-family sections on the new document-upload directions page",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";\nconst page=await figma.getNodeByIdAsync(\"101:963\");\nawait figma.setCurrentPageAsync(page);\nconst specs=[\n {key:\"section/notes\",name:\"00 — Transfer Notes\",x:0,y:0,w:1600,h:800},\n {key:\"section/components\",name:\"01 — New Local Components\",x:0,y:1000,w:1600,h:3000},\n {key:\"section/a-desktop\",name:\"02 — Direction A · Desktop\",x:1800,y:0,w:3300,h:4200},\n {key:\"section/a-mobile\",name:\"03 — Direction A · Mobile\",x:0,y:4200,w:2200,h:4300},\n {key:\"section/b-desktop\",name:\"04 — Direction B · Desktop\",x:5300,y:0,w:4800,h:4200},\n {key:\"section/b-mobile\",name:\"05 — Direction B · Mobile\",x:2300,y:4400,w:2200,h:4300}\n];\nconst created=[];\nconst sections={};\nfor(const spec of specs){\n let section=page.children.find(n=>n.type===\"SECTION\"&&n.getSharedPluginData(\"dsb\",\"key\")===spec.key);\n if(!section){\n  section=figma.createSection();\n  section.name=spec.name;\n  section.x=spec.x; section.y=spec.y;\n  section.resizeWithoutConstraints(spec.w,spec.h);\n  section.placeholder=true;\n  section.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);\n  section.setSharedPluginData(\"dsb\",\"phase\",\"phase2\");\n  section.setSharedPluginData(\"dsb\",\"key\",spec.key);\n  page.appendChild(section);\n  created.push(section.id);\n }\n sections[spec.key]={id:section.id,name:section.name,x:section.x,y:section.y,width:section.width,height:section.height};\n}\nreturn {createdNodeIds:created,mutatedNodeIds:[],sections};"
> }
> ```
>
> ```text
> {"createdNodeIds":["103:963","103:964","103:965","103:966","103:967","103:968"],"mutatedNodeIds":[],"sections":{"section/notes":{"id":"103:963","name":"00 — Transfer Notes","x":0,"y":0,"width":1600,"height":800},"section/components":{"id":"103:964","name":"01 — New Local Components","x":0,"y":1000,"width":1600,"height":3000},"section/a-desktop":{"id":"103:965","name":"02 — Direction A · Desktop","x":1800,"y":0,"width":3300,"height":4200},"section/a-mobile":{"id":"103:966","name":"03 — Direction A · Mobile","x":0,"y":4200,"width":2200,"height":4300},"section/b-desktop":{"id":"103:967","name":"04 — Direction B · Desktop","x":5300,"y":0,"width":4800,"height":4200},"section/b-mobile":{"id":"103:968","name":"05 — Direction B · Mobile","x":2300,"y":4400,"width":2200,"height":4300}}}
> ```
>
> MCP tool call
>
> codex_apps.figma.get_metadata
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "101:963",
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> <canvas id="101:963" name="Doc Upload — Pencil Directions" x="0" y="0" width="0" height="0">
>   <section id="103:963" name="00 — Transfer Notes" x="0" y="0" width="1600" height="800" />
>   <section id="103:964" name="01 — New Local Components" x="0" y="1000" width="1600" height="3000" />
>   <section id="103:965" name="02 — Direction A · Desktop" x="1800" y="0" width="3300" height="4200" />
>   <section id="103:966" name="03 — Direction A · Mobile" x="0" y="4200" width="2200" height="4300" />
>   <section id="103:967" name="04 — Direction B · Desktop" x="5300" y="0" width="4800" height="4200" />
>   <section id="103:968" name="05 — Direction B · Mobile" x="2300" y="4400" width="2200" height="4300" />
> </canvas>
> ```
>
> ```text
> IMPORTANT: After you call this tool, you MUST call get_design_context if trying to implement the design, since this tool only returns metadata. If you do not call get_design_context, the agent will not be able to implement the design.
> ```
>
> <details><summary>Explored a file</summary>
>
> - Read `/tmp/dsb-state-doc-upload-pencil-transfer-20260714.json`
>
> </details>
>
> - Wrote `/tmp/dsb-state-doc-upload-pencil-transfer-20260714.json` (+20 -7)
>
> </details>
>
> Phase 2 Summary
>
> - `P2.a` Created `Doc Upload — Pencil Directions` once.
> - `P2.b` Added six isolated sections for notes, new components, and the four direction/device families.
> - `P2.c` Tagged all seven created objects to this migration run.
> - `P2.d` Metadata validation confirms the sections are named, sized, and separated without overlap.
>
> No existing Figma page or component was modified.
>
> Phase 3 Checklist
>
> - `P3.a` Build a new request summary component from CX assets.
> - `P3.b` Build new upload drop-zone and selected-file components.
> - `P3.c` Build a new document-status component.
> - `P3.d` Build Direction A checklist-card and batch-summary components.
> - `P3.e` Build Direction B progress-header, document-item, and guided-step components.
> - `P3.f` Validate every new component structurally and visually before screen composition.
> - `P3.g` Compose all 12 Direction A and 18 Direction B screens using instances.
>
> Exit criteria: no current local component is referenced; repeated UI is instance-based; CX components/tokens remain linked; all 30 screens are editable and visually validated.
>
> Working on Phase 3.a–3.c: resolving the remaining CX icon and base-component dependencies before creating the first isolated upload components.
>
> <details><summary>Explored a file, called 6 tools</summary>
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "warning-circle",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "warning-circle",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:33Z",
>       "componentKey": "2a679758b0678360456c98d3b5e5fa03d255bfe0",
>       "filePath": "design_systems/CX Design Library/components/warning-circle"
>     },
>     {
>       "name": "Close Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "d6048d15688498ca98ce9731a595774fc4c9f3d1",
>       "filePath": "design_systems/CX Design Library/components/Close Button"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "check-circle",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "check-circle",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:28Z",
>       "componentKey": "661200252cd53a26fdf54016f9b53d53319e49f1",
>       "filePath": "design_systems/CX Design Library/components/check-circle"
>     },
>     {
>       "name": "check-circle-solid",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:28Z",
>       "componentKey": "3f393e670e3d837125f0f2a185f09466dc846955",
>       "filePath": "design_systems/CX Design Library/components/check-circle-solid"
>     },
>     {
>       "name": "security-pass",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:33Z",
>       "componentKey": "0e2e934fbd8c608d6cfe770db5e06a262569e328",
>       "filePath": "design_systems/CX Design Library/components/security-pass"
>     },
>     {
>       "name": "Close Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "d6048d15688498ca98ce9731a595774fc4c9f3d1",
>       "filePath": "design_systems/CX Design Library/components/Close Button"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "trash",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "trash",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:28Z",
>       "componentKey": "7e808547be1542c293caba2fa7db5aae33ae5601",
>       "filePath": "design_systems/CX Design Library/components/trash"
>     },
>     {
>       "name": "Close Button",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:25Z",
>       "componentKey": "d6048d15688498ca98ce9731a595774fc4c9f3d1",
>       "filePath": "design_systems/CX Design Library/components/Close Button"
>     }
>   ]
> }
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "upload",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "upload",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:33Z",
>       "componentKey": "87442b1bbb38a45fa26942cf781c956cb011a58c",
>       "filePath": "design_systems/CX Design Library/components/upload"
>     },
>     {
>       "name": "share",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:29Z",
>       "componentKey": "f451c89b4b59af4ba61e523cb1fb41da3e13bdb9",
>       "filePath": "design_systems/CX Design Library/components/share"
>     },
>     {
>       "name": "Linear Progress",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:42:41Z",
>       "componentKey": "2fd384381dcdd5f680c8b247dcdbcaab63388462",
>       "description": "Linear Progress visualizes a data value on a linear axis.",
>       "filePath": "design_systems/CX Design Library/components/Linear Progress"
>     }
>   ]
> }
> ```
>
> <details><summary>Explored a file</summary>
>
> - Read `~/.codex/plugins/cache/openai-curated-remote/figma/2.0.14/skills/figma-generate-library/references/component-creation.md`
>
> </details>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Import and inspect the CX base component sets needed by the isolated document-upload components and screens",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const entries=[[\"Button\",\"93c929f1ab62af6beb62211797d1506066995587\"],[\"Alert\",\"b5a2890843d77dd7e88c587d6fb55dbeaa7c45a6\"],[\"TextInput\",\"d61e13ad0473c59d3ffc7f508fe2930b5594d8a2\"],[\"LinearProgress\",\"2fd384381dcdd5f680c8b247dcdbcaab63388462\"],[\"MenuBar\",\"3a735a2be078b27b7f34aa8e4505d6a321d523f0\"],[\"BottomNav\",\"d4c7816fd6e23a898338f1ad5bde90a1e4260e91\"],[\"WebNavBar\",\"e6f30335b69b90d5b46f14d180b541f17ddd7349\"],[\"OneAppDesktopNav\",\"dbb6c29507dd5a31fe162635ffcb86d18d26abcc\"],[\"OneAppMobileNav\",\"436a315bfd018c870eabf9aac6bbac004ae1f146\"]];\nconst sets=await Promise.all(entries.map(([,key])=>figma.importComponentSetByKeyAsync(key)));\nreturn {dependencies:sets.map((set,i)=>({alias:entries[i][0],id:set.id,name:set.name,key:set.key,variants:set.children.filter(n=>n.type===\"COMPONENT\").map(n=>n.name)}))};"
> }
> ```
>
> ```text
> {"dependencies":[{"alias":"Button","id":"4:4502","name":"Button","key":"93c929f1ab62af6beb62211797d1506066995587","variants":["Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Hover, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Busy, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Focus, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Busy, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Focus, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Focus, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Busy, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Focus, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Busy, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Pressed, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Busy, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Focus, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Default, Hierarchy=Destructive, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Enabled, Polarity=Default","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Disabled, Polarity=Default","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Hover, Polarity=Default","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Pressed, Polarity=Default","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Busy, Polarity=Default","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Focus, Polarity=Default","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Large 1, Hierarchy=Destructive, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Focus, Polarity=Default","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Hover, Polarity=Default","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Busy, Polarity=Default","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Large 1, Hierarchy=Secondary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Enabled, Polarity=Default","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Disabled, Polarity=Default","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Hover, Polarity=Default","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Pressed, Polarity=Default","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Busy, Polarity=Default","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Focus, Polarity=Default","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Enabled, Polarity=Inverse","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Hover, Polarity=Inverse","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Focus, Polarity=Inverse","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Pressed, Polarity=Inverse","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Busy, Polarity=Inverse","Size=Large 1, Hierarchy=Tertiary, Layout=No Icon, State=Disabled, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Hover, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Busy, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Focus, Polarity=Default","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Large 1, Hierarchy=Primary, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Busy, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Focus, Polarity=Default","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Default, Hierarchy=Primary, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Primary, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Secondary, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Tertiary, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Hover, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Busy, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Focus, Polarity=Default","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Small, Hierarchy=Destructive, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Focus, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Busy, Polarity=Default","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Default, Hierarchy=Secondary, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Focus, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Pressed, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Busy, Polarity=Default","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Enabled, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Hover, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Focus, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Pressed, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Busy, Polarity=Inverse","Size=Default, Hierarchy=Tertiary, Layout=Left Icon, State=Disabled, Polarity=Inverse","Size=Default, Hierarchy=Destructive, Layout=Left Icon, State=Enabled, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=Left Icon, State=Disabled, Polarity=Default","Size=Default, Hierarchy=Destructive, Layout=Left Icon, State=Hover, Polarity=Default","Size=Default, Hierarchy=Destructive// truncated to 20kb
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "folder",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": true,
>   "includeVariables": false,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "components": [
>     {
>       "name": "folder",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component",
>       "updatedAt": "2026-01-26T23:23:33Z",
>       "componentKey": "aea74c9bf569e2607cb06c3cd3f017a04dd19953",
>       "filePath": "design_systems/CX Design Library/components/folder"
>     },
>     {
>       "name": "Modal",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "assetType": "component_set",
>       "updatedAt": "2026-03-17T15:43:44Z",
>       "componentKey": "ebdb3a24083fae35ccb719f87d0cc9677d9f8763",
>       "description": "A Modal is a temporary, dismissible content surface that displays over the current page.",
>       "filePath": "design_systems/CX Design Library/components/Modal"
>     }
>   ]
> }
> ```
>
> </details>
>
> Working on Phase 3.a: new `Doc Upload / Request Summary`. It is being built from the CX folder icon, CX text styles, and CX surface/spacing/radius variables; no existing local summary component is involved.
>
> <details><summary>Ran a command, called 3 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Create the isolated request summary local component from CX assets and tokens",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";\nconst section=await figma.getNodeByIdAsync(\"103:964\");\nawait figma.setCurrentPageAsync(section.parent);\nconst [folder,fillVar,textVar,mutedVar,padVar,rowGap,groupGap,radiusVar,titleStyle,bodyStyle,captionStyle]=await Promise.all([\n figma.importComponentByKeyAsync(\"aea74c9bf569e2607cb06c3cd3f017a04dd19953\"),\n figma.variables.importVariableByKeyAsync(\"608dd64dfb7660ccf019b1b3a397969c0344b1a3\"),\n figma.variables.importVariableByKeyAsync(\"e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5\"),\n figma.variables.importVariableByKeyAsync(\"6b85ffe601c780c2b3d8cfd6ddee17358efacf4a\"),\n figma.variables.importVariableByKeyAsync(\"f8291cb087425019b1b8723f3ed7f60702e043ee\"),\n figma.variables.importVariableByKeyAsync(\"837aa126daedc9fd1244e1f0d203d32ba103efcf\"),\n figma.variables.importVariableByKeyAsync(\"1a57b57df80ac462c47f9d1f863c10df1dfadc05\"),\n figma.variables.importVariableByKeyAsync(\"daf259c9f52407453df55460e0226b60dc35ff50\"),\n figma.importStyleByKeyAsync(\"ef032958aaa164ff09f6b925dedfa9664915fb9f\"),\n figma.importStyleByKeyAsync(\"5600a3dd5568b269e1d5d08f7d0b3bbfc1868a48\"),\n figma.importStyleByKeyAsync(\"e5d56b9e89252d8489d2be6d35031d9ba90dce8f\")\n]);\nawait Promise.all([titleStyle,bodyStyle,captionStyle].map(s=>figma.loadFontAsync(s.fontName)));\nconst existing=section.findAllWithCriteria({types:[\"COMPONENT\"],sharedPluginData:{namespace:\"dsb\",keys:[\"key\"]}}).find(n=>n.getSharedPluginData(\"dsb\",\"key\")===\"component/request-summary\");\nif(existing)return {createdNodeIds:[],componentId:existing.id,alreadyExisted:true};\nconst tag=(n,key)=>{n.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);n.setSharedPluginData(\"dsb\",\"phase\",\"phase3\");n.setSharedPluginData(\"dsb\",\"key\",key);};\nconst comp=figma.createComponent(); tag(comp,\"component/request-summary\");\ncomp.name=\"Doc Upload / Request Summary\";\ncomp.description=\"Summarizes the active document request and session-only completion progress.\";\ncomp.layoutMode=\"HORIZONTAL\";comp.primaryAxisSizingMode=\"FIXED\";comp.counterAxisSizingMode=\"AUTO\";\ncomp.primaryAxisAlignItems=\"SPACE_BETWEEN\";comp.counterAxisAlignItems=\"CENTER\";\ncomp.resize(760,100);\nfor(const p of [\"paddingTop\",\"paddingBottom\",\"paddingLeft\",\"paddingRight\"])comp.setBoundVariable(p,padVar);\ncomp.setBoundVariable(\"itemSpacing\",rowGap);\nfor(const p of [\"topLeftRadius\",\"topRightRadius\",\"bottomLeftRadius\",\"bottomRightRadius\"])comp.setBoundVariable(p,radiusVar);\ncomp.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:1,g:1,b:1}},\"color\",fillVar)];\nsection.appendChild(comp);comp.x=80;comp.y=120;\nconst left=figma.createAutoLayout(\"HORIZONTAL\",{name:\"Request identity\"});tag(left,\"component/request-summary/identity\");comp.appendChild(left);left.layoutSizingHorizontal=\"FILL\";left.setBoundVariable(\"itemSpacing\",rowGap);left.counterAxisAlignItems=\"CENTER\";\nconst icon=folder.createInstance();tag(icon,\"component/request-summary/icon\");left.appendChild(icon);icon.resize(24,24);icon.layoutSizingHorizontal=\"FIXED\";icon.layoutSizingVertical=\"FIXED\";\nconst copy=figma.createAutoLayout(\"VERTICAL\",{name:\"Request copy\"});tag(copy,\"component/request-summary/copy\");left.appendChild(copy);copy.layoutSizingHorizontal=\"FILL\";copy.setBoundVariable(\"itemSpacing\",groupGap);\nconst title=figma.createText();tag(title,\"component/request-summary/title\");title.name=\"Request title\";title.textStyleId=titleStyle.id;title.characters=\"Personal loan · Request #4821\";title.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",textVar)];title.textAutoResize=\"HEIGHT\";title.resize(480,24);copy.appendChild(title);title.layoutSizingHorizontal=\"FILL\";\nconst date=figma.createText();tag(date,\"component/request-summary/date\");date.name=\"Requested date\";date.textStyleId=captionStyle.id;date.characters=\"Requested Jul 10, 2026\";date.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",mutedVar)];date.textAutoResize=\"HEIGHT\";date.resize(480,20);copy.appendChild(date);date.layoutSizingHorizontal=\"FILL\";\nconst progress=figma.createText();tag(progress,\"component/request-summary/progress\");progress.name=\"Progress\";progress.textStyleId=bodyStyle.id;progress.characters=\"1 of 4 uploaded\";progress.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",mutedVar)];comp.appendChild(progress);\nconst titleKey=comp.addComponentProperty(\"Request title\",\"TEXT\",\"Personal loan · Request #4821\");\nconst dateKey=comp.addComponentProperty(\"Requested date\",\"TEXT\",\"Requested Jul 10, 2026\");\nconst progressKey=comp.addComponentProperty(\"Progress\",\"TEXT\",\"1 of 4 uploaded\");\ntitle.componentPropertyReferences={characters:titleKey};date.componentPropertyReferences={characters:dateKey};progress.componentPropertyReferences={characters:progressKey};\ncomp.placeholder=false;\nreturn {createdNodeIds:[comp.id,left.id,icon.id,copy.id,title.id,date.id,progress.id],componentId:comp.id,propertyKeys:{titleKey,dateKey,progressKey},alreadyExisted:false};"
> }
> ```
>
> ```text
> {"createdNodeIds":["105:965","105:966","105:967","105:969","105:970","105:971","105:972"],"componentId":"105:965","propertyKeys":{"titleKey":"Request title#105:0","dateKey":"Requested date#105:1","progressKey":"Progress#105:2"},"alreadyExisted":false}
> ```
>
> MCP tool call
>
> codex_apps.figma.get_metadata
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "105:965",
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> <symbol id="105:965" name="Doc Upload / Request Summary" x="80" y="120" width="760" height="80" />
> ```
>
> ```text
> IMPORTANT: After you call this tool, you MUST call get_design_context if trying to implement the design, since this tool only returns metadata. If you do not call get_design_context, the agent will not be able to implement the design.
> ```
>
> MCP tool call
>
> codex_apps.figma.get_screenshot
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "105:965",
>   "maxDimension": 1200,
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> {"image_url":"https://www.figma.com/api/mcp/asset/c70cefdf-52fa-4908-bc4e-4cca6a81172a","width":760,"height":80,"format":"png","original_width":760,"original_height":80}
> ```
>
> ```text
> The screenshot is hosted at the URL in the first content entry (as JSON). Download the PNG by running:
>
>   curl -L -o screenshot.png "https://www.figma.com/api/mcp/asset/c70cefdf-52fa-4908-bc4e-4cca6a81172a"
>
> The URL returns raw PNG bytes (Content-Type: image/png). The URL is short-lived — treat it like a secret.
> ```
>
> - Ran `curl -L -o /tmp/figma-request-summary.png 'https://www.figma.com/api/mcp/asset/c70cefdf-52fa-4908-bc4e-4cca6a81172a'`
>
> </details>
>
> Viewed an image
>
> Working on Phase 3.b: new upload drop zone. It uses the CX upload icon and Button component, with vertical grouping bound to `gap-tile`/`gap-group` and horizontal internals bound to `gap-row`.
>
> <details><summary>Ran a command, called 3 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Create the isolated upload drop-zone component from CX Button icon typography and semantic tokens",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";\nconst section=await figma.getNodeByIdAsync(\"103:964\");\nawait figma.setCurrentPageAsync(section.parent);\nconst [uploadIcon,buttonSet,bgVar,lineVar,textVar,mutedVar,padVar,tileGap,groupGap,radiusVar,strokeVar,bodyStyle,captionStyle]=await Promise.all([\n figma.importComponentByKeyAsync(\"87442b1bbb38a45fa26942cf781c956cb011a58c\"),\n figma.importComponentSetByKeyAsync(\"93c929f1ab62af6beb62211797d1506066995587\"),\n figma.variables.importVariableByKeyAsync(\"55416e4c1a1deae84265fd6039b8403bdd4f1deb\"),\n figma.variables.importVariableByKeyAsync(\"b309a3f41051b0a5b283133d50dc2e3e19a01efe\"),\n figma.variables.importVariableByKeyAsync(\"e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5\"),\n figma.variables.importVariableByKeyAsync(\"6b85ffe601c780c2b3d8cfd6ddee17358efacf4a\"),\n figma.variables.importVariableByKeyAsync(\"f8291cb087425019b1b8723f3ed7f60702e043ee\"),\n figma.variables.importVariableByKeyAsync(\"84071545f33b16816dd47a1c7b43241abbf06694\"),\n figma.variables.importVariableByKeyAsync(\"1a57b57df80ac462c47f9d1f863c10df1dfadc05\"),\n figma.variables.importVariableByKeyAsync(\"f52202a2c5afb063f455960b9aaab5f5c37a423a\"),\n figma.variables.importVariableByKeyAsync(\"7fc0c5aec0149a61a1ad60019f1237d6830e0eb9\"),\n figma.importStyleByKeyAsync(\"ef032958aaa164ff09f6b925dedfa9664915fb9f\"),\n figma.importStyleByKeyAsync(\"e5d56b9e89252d8489d2be6d35031d9ba90dce8f\")\n]);\nawait Promise.all([figma.loadFontAsync(bodyStyle.fontName),figma.loadFontAsync(captionStyle.fontName)]);\nconst existing=section.findAllWithCriteria({types:[\"COMPONENT\"],sharedPluginData:{namespace:\"dsb\",keys:[\"key\"]}}).find(n=>n.getSharedPluginData(\"dsb\",\"key\")===\"component/upload-drop-zone\");\nif(existing)return {createdNodeIds:[],componentId:existing.id,alreadyExisted:true};\nconst tag=(n,key)=>{n.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);n.setSharedPluginData(\"dsb\",\"phase\",\"phase3\");n.setSharedPluginData(\"dsb\",\"key\",key);};\nconst comp=figma.createComponent();tag(comp,\"component/upload-drop-zone\");comp.name=\"Doc Upload / Upload Drop Zone\";comp.description=\"File selection target for picker and desktop drag-and-drop. The picker remains the keyboard-equivalent path.\";\ncomp.layoutMode=\"VERTICAL\";comp.primaryAxisSizingMode=\"AUTO\";comp.counterAxisSizingMode=\"FIXED\";comp.counterAxisAlignItems=\"CENTER\";comp.resize(760,100);\nfor(const p of [\"paddingTop\",\"paddingBottom\",\"paddingLeft\",\"paddingRight\"])comp.setBoundVariable(p,padVar);\ncomp.setBoundVariable(\"itemSpacing\",tileGap);\nfor(const p of [\"topLeftRadius\",\"topRightRadius\",\"bottomLeftRadius\",\"bottomRightRadius\"])comp.setBoundVariable(p,radiusVar);\ncomp.setBoundVariable(\"strokeWeight\",strokeVar);\ncomp.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:1,g:1,b:1}},\"color\",bgVar)];\ncomp.strokes=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",lineVar)];\nsection.appendChild(comp);comp.x=80;comp.y=320;\nconst icon=uploadIcon.createInstance();tag(icon,\"component/upload-drop-zone/icon\");comp.appendChild(icon);icon.resize(24,24);\nconst copy=figma.createAutoLayout(\"VERTICAL\",{name:\"Instructions\"});tag(copy,\"component/upload-drop-zone/copy\");comp.appendChild(copy);copy.layoutSizingHorizontal=\"FILL\";copy.counterAxisAlignItems=\"CENTER\";copy.setBoundVariable(\"itemSpacing\",groupGap);\nconst title=figma.createText();tag(title,\"component/upload-drop-zone/title\");title.name=\"Title\";title.textStyleId=bodyStyle.id;title.characters=\"Drag and drop your file here\";title.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",textVar)];copy.appendChild(title);\nconst support=figma.createText();tag(support,\"component/upload-drop-zone/support\");support.name=\"Supporting text\";support.textStyleId=captionStyle.id;support.characters=\"PDF, JPEG, or PNG · up to 10 MB\";support.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",mutedVar)];copy.appendChild(support);\nconst btnVariant=buttonSet.children.find(n=>n.type===\"COMPONENT\"&&n.name===\"Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Default\");\nconst button=btnVariant.createInstance();tag(button,\"component/upload-drop-zone/button\");button.name=\"CX Button / Choose file\";button.setProperties({\"Label#16116:0\":\"Choose file\"});comp.appendChild(button);\nconst titleKey=comp.addComponentProperty(\"Title\",\"TEXT\",\"Drag and drop your file here\");\nconst supportKey=comp.addComponentProperty(\"Supporting text\",\"TEXT\",\"PDF, JPEG, or PNG · up to 10 MB\");\ntitle.componentPropertyReferences={characters:titleKey};support.componentPropertyReferences={characters:supportKey};\ncomp.placeholder=false;\nreturn {createdNodeIds:[comp.id,icon.id,copy.id,title.id,support.id,button.id],componentId:comp.id,propertyKeys:{titleKey,supportKey},alreadyExisted:false};"
> }
> ```
>
> ```text
> {"createdNodeIds":["106:964","106:965","106:968","106:969","106:970","106:971"],"componentId":"106:964","propertyKeys":{"titleKey":"Title#106:0","supportKey":"Supporting text#106:1"},"alreadyExisted":false}
> ```
>
> MCP tool call
>
> codex_apps.figma.get_screenshot
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "106:964",
>   "maxDimension": 1200,
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> {"image_url":"https://www.figma.com/api/mcp/asset/b1e9ece6-7fc5-4c4f-99e8-c7c0a5b07a41","width":760,"height":160,"format":"png","original_width":760,"original_height":160}
> ```
>
> ```text
> The screenshot is hosted at the URL in the first content entry (as JSON). Download the PNG by running:
>
>   curl -L -o screenshot.png "https://www.figma.com/api/mcp/asset/b1e9ece6-7fc5-4c4f-99e8-c7c0a5b07a41"
>
> The URL returns raw PNG bytes (Content-Type: image/png). The URL is short-lived — treat it like a secret.
> ```
>
> MCP tool call
>
> codex_apps.figma.get_metadata
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "106:964",
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> <symbol id="106:964" name="Doc Upload / Upload Drop Zone" x="80" y="320" width="760" height="160" />
> ```
>
> ```text
> IMPORTANT: After you call this tool, you MUST call get_design_context if trying to implement the design, since this tool only returns metadata. If you do not call get_design_context, the agent will not be able to implement the design.
> ```
>
> - Ran `curl -L -o /tmp/figma-drop-zone.png 'https://www.figma.com/api/mcp/asset/b1e9ece6-7fc5-4c4f-99e8-c7c0a5b07a41'`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran a command, called 3 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Create the isolated selected-file row component from CX icons buttons typography and semantic tokens",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";\nconst section=await figma.getNodeByIdAsync(\"103:964\");await figma.setCurrentPageAsync(section.parent);\nconst [fileIcon,buttonSet,bgVar,textVar,mutedVar,padVar,rowGap,rowSmall,groupGap,radiusVar,bodyStyle,captionStyle]=await Promise.all([\n figma.importComponentByKeyAsync(\"b3827f91ecd110d9141c999f84897cc440a6bdc9\"),\n figma.importComponentSetByKeyAsync(\"93c929f1ab62af6beb62211797d1506066995587\"),\n figma.variables.importVariableByKeyAsync(\"a9de31a8df5c219c02506a3398b864224054e2ae\"),\n figma.variables.importVariableByKeyAsync(\"e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5\"),\n figma.variables.importVariableByKeyAsync(\"6b85ffe601c780c2b3d8cfd6ddee17358efacf4a\"),\n figma.variables.importVariableByKeyAsync(\"f8291cb087425019b1b8723f3ed7f60702e043ee\"),\n figma.variables.importVariableByKeyAsync(\"837aa126daedc9fd1244e1f0d203d32ba103efcf\"),\n figma.variables.importVariableByKeyAsync(\"cf06ec50491972f4f654934b0daf178aa6669e25\"),\n figma.variables.importVariableByKeyAsync(\"1a57b57df80ac462c47f9d1f863c10df1dfadc05\"),\n figma.variables.importVariableByKeyAsync(\"f52202a2c5afb063f455960b9aaab5f5c37a423a\"),\n figma.importStyleByKeyAsync(\"ef032958aaa164ff09f6b925dedfa9664915fb9f\"),\n figma.importStyleByKeyAsync(\"e5d56b9e89252d8489d2be6d35031d9ba90dce8f\")\n]);await Promise.all([figma.loadFontAsync(bodyStyle.fontName),figma.loadFontAsync(captionStyle.fontName)]);\nconst existing=section.findAllWithCriteria({types:[\"COMPONENT\"],sharedPluginData:{namespace:\"dsb\",keys:[\"key\"]}}).find(n=>n.getSharedPluginData(\"dsb\",\"key\")===\"component/selected-file-row\");if(existing)return {createdNodeIds:[],componentId:existing.id,alreadyExisted:true};\nconst tag=(n,key)=>{n.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);n.setSharedPluginData(\"dsb\",\"phase\",\"phase3\");n.setSharedPluginData(\"dsb\",\"key\",key);};\nconst comp=figma.createComponent();tag(comp,\"component/selected-file-row\");comp.name=\"Doc Upload / Selected File Row\";comp.description=\"Shows the file associated with one requested document and its replace/remove actions.\";\ncomp.layoutMode=\"HORIZONTAL\";comp.primaryAxisSizingMode=\"FIXED\";comp.counterAxisSizingMode=\"AUTO\";comp.primaryAxisAlignItems=\"SPACE_BETWEEN\";comp.counterAxisAlignItems=\"CENTER\";comp.resize(760,100);\nfor(const p of [\"paddingTop\",\"paddingBottom\",\"paddingLeft\",\"paddingRight\"])comp.setBoundVariable(p,padVar);comp.setBoundVariable(\"itemSpacing\",rowGap);for(const p of [\"topLeftRadius\",\"topRightRadius\",\"bottomLeftRadius\",\"bottomRightRadius\"])comp.setBoundVariable(p,radiusVar);\ncomp.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:1,g:1,b:1}},\"color\",bgVar)];section.appendChild(comp);comp.x=80;comp.y=560;\nconst identity=figma.createAutoLayout(\"HORIZONTAL\",{name:\"File identity\"});tag(identity,\"component/selected-file-row/identity\");comp.appendChild(identity);identity.layoutSizingHorizontal=\"FILL\";identity.counterAxisAlignItems=\"CENTER\";identity.setBoundVariable(\"itemSpacing\",rowGap);\nconst icon=fileIcon.createInstance();tag(icon,\"component/selected-file-row/icon\");identity.appendChild(icon);icon.resize(24,24);\nconst copy=figma.createAutoLayout(\"VERTICAL\",{name:\"File copy\"});tag(copy,\"component/selected-file-row/copy\");identity.appendChild(copy);copy.layoutSizingHorizontal=\"FILL\";copy.setBoundVariable(\"itemSpacing\",groupGap);\nconst name=figma.createText();tag(name,\"component/selected-file-row/name\");name.name=\"Filename\";name.textStyleId=bodyStyle.id;name.characters=\"income-statement.pdf\";name.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",textVar)];name.textAutoResize=\"HEIGHT\";name.resize(420,24);copy.appendChild(name);name.layoutSizingHorizontal=\"FILL\";\nconst meta=figma.createText();tag(meta,\"component/selected-file-row/meta\");meta.name=\"File metadata\";meta.textStyleId=captionStyle.id;meta.characters=\"PDF · 2.4 MB\";meta.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",mutedVar)];copy.appendChild(meta);\nconst actions=figma.createAutoLayout(\"HORIZONTAL\",{name:\"Actions\"});tag(actions,\"component/selected-file-row/actions\");comp.appendChild(actions);actions.counterAxisAlignItems=\"CENTER\";actions.setBoundVariable(\"itemSpacing\",rowSmall);\nconst replaceVariant=buttonSet.children.find(n=>n.type===\"COMPONENT\"&&n.name===\"Size=Small, Hierarchy=Tertiary, Layout=No Icon, State=Enabled, Polarity=Default\");\nconst removeVariant=buttonSet.children.find(n=>n.type===\"COMPONENT\"&&n.name===\"Size=Small, Hierarchy=Destructive, Layout=No Icon, State=Enabled, Polarity=Default\");\nconst replace=replaceVariant.createInstance();tag(replace,\"component/selected-file-row/replace\");replace.name=\"CX Button / Replace\";replace.setProperties({\"Label#16116:0\":\"Replace\"});actions.appendChild(replace);\nconst remove=removeVariant.createInstance();tag(remove,\"component/selected-file-row/remove\");remove.name=\"CX Button / Remove\";remove.setProperties({\"Label#16116:0\":\"Remove\"});actions.appendChild(remove);\nconst nameKey=comp.addComponentProperty(\"Filename\",\"TEXT\",\"income-statement.pdf\");const metaKey=comp.addComponentProperty(\"File metadata\",\"TEXT\",\"PDF · 2.4 MB\");name.componentPropertyReferences={characters:nameKey};meta.componentPropertyReferences={characters:metaKey};comp.placeholder=false;\nreturn {createdNodeIds:[comp.id,identity.id,icon.id,copy.id,name.id,meta.id,actions.id,replace.id,remove.id],componentId:comp.id,propertyKeys:{nameKey,metaKey},alreadyExisted:false};"
> }
> ```
>
> ```text
> {"createdNodeIds":["108:967","108:968","108:969","108:974","108:975","108:976","108:977","108:978","108:980"],"componentId":"108:967","propertyKeys":{"nameKey":"Filename#108:0","metaKey":"File metadata#108:1"},"alreadyExisted":false}
> ```
>
> MCP tool call
>
> codex_apps.figma.get_metadata
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "108:967",
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> <symbol id="108:967" name="Doc Upload / Selected File Row" x="80" y="560" width="760" height="80" />
> ```
>
> ```text
> IMPORTANT: After you call this tool, you MUST call get_design_context if trying to implement the design, since this tool only returns metadata. If you do not call get_design_context, the agent will not be able to implement the design.
> ```
>
> MCP tool call
>
> codex_apps.figma.get_screenshot
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "108:967",
>   "maxDimension": 1200,
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> {"image_url":"https://www.figma.com/api/mcp/asset/4520d26b-3b1d-4a8a-8e0d-d5bccb3f7de2","width":760,"height":80,"format":"png","original_width":760,"original_height":80}
> ```
>
> ```text
> The screenshot is hosted at the URL in the first content entry (as JSON). Download the PNG by running:
>
>   curl -L -o screenshot.png "https://www.figma.com/api/mcp/asset/4520d26b-3b1d-4a8a-8e0d-d5bccb3f7de2"
>
> The URL returns raw PNG bytes (Content-Type: image/png). The URL is short-lived — treat it like a secret.
> ```
>
> - Ran `curl -L -o /tmp/figma-selected-file.png 'https://www.figma.com/api/mcp/asset/4520d26b-3b1d-4a8a-8e0d-d5bccb3f7de2'`
>
> </details>
>
> Viewed an image
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Inspect the CX Status-Tag variants before creating the isolated document-status wrapper",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const set=await figma.importComponentSetByKeyAsync(\"c636fb0e47c184362a85971bdd3abfc12310f724\");\nreturn {id:set.id,name:set.name,key:set.key,variants:set.children.filter(n=>n.type===\"COMPONENT\").map(n=>n.name)};"
> }
> ```
>
> ```text
> Error: Component set with key "c636fb0e47c184362a85971bdd3abfc12310f724" not found
>     at <anonymous> (<input>:1:22)
> ```
>
> ```text
> Figma Debug UUID: b6a221f4-1436-4d81-b2be-e9aeca93cd43
> ```
>
> The CX Status-Tag wrapper cannot be imported by its published set key—the file’s existing instance points to a set that Figma reports as unavailable, matching the earlier component-set error. I’m inspecting that existing remote instance only to identify whether a valid individual variant key survives; I will not reuse the local component that contains it.
>
> <details><summary>Called 2 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Inspect the surviving CX Status-Tag instance and its individual remote component key without modifying it",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const page=await figma.getNodeByIdAsync(\"0:1\");await figma.setCurrentPageAsync(page);\nconst inst=await figma.getNodeByIdAsync(\"I7:58;16:810\");\nconst mc=inst&&inst.type===\"INSTANCE\"?await inst.getMainComponentAsync():null;\nreturn {instance:inst?{id:inst.id,name:inst.name,type:inst.type}:null,mainComponent:mc?{id:mc.id,name:mc.name,key:mc.key,remote:mc.remote,parent:mc.parent?{id:mc.parent.id,name:mc.parent.name,type:mc.parent.type,key:\"key\" in mc.parent?mc.parent.key:null}:null}:null};"
> }
> ```
>
> ```text
> {"instance":{"id":"I7:58;16:810","name":"Status-Tag","type":"INSTANCE"},"mainComponent":{"id":"13:733","name":"Size=Default, Sentiment=Informative, Layout=No Icon","key":"abd569962a63db2b670141eba4a9ccfd68a7ddd0","remote":true,"parent":{"id":"13:730","name":"Status-Tag","type":"COMPONENT_SET","key":"c636fb0e47c184362a85971bdd3abfc12310f724"}}}
> ```
>
> MCP tool call
>
> codex_apps.figma.search_design_system
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "query": "padding-x-component-small-4",
>   "includeLibraryKeys": [
>     "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5"
>   ],
>   "includeComponents": false,
>   "includeVariables": true,
>   "includeStyles": false
> }
> ```
>
> ```text
> {
>   "variables": [
>     {
>       "name": "padding/padding-x-component-tiny",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "d829a478d060b83e735589013025e911aa2c41f7",
>       "scopes": [
>         "WIDTH_HEIGHT",
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/padding/padding-x-component-tiny"
>     },
>     {
>       "name": "padding/padding-x-component-micro",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "7148f844567d649596b80c517a605f2e511abb17",
>       "scopes": [
>         "WIDTH_HEIGHT",
>         "GAP"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/padding/padding-x-component-micro"
>     },
>     {
>       "name": "height/height-component-small3",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "ccc89950fa7b909c213ab2f4015428a6eed6de3d",
>       "scopes": [
>         "WIDTH_HEIGHT"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/height/height-component-small3"
>     },
>     {
>       "name": "height/height-component-small1",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "30eea0558489801eebc5bcce99cafb5bb3877823",
>       "scopes": [
>         "WIDTH_HEIGHT"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/height/height-component-small1"
>     },
>     {
>       "name": "height/height-component-small5",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "f18d2f8f67ff9c416931007bf5c7c02c7cb26c97",
>       "scopes": [
>         "WIDTH_HEIGHT"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/height/height-component-small5"
>     },
>     {
>       "name": "height/height-component-small2",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "ae1af93a6d36462f7fa68d56d59233d5e4ddb9c5",
>       "scopes": [
>         "WIDTH_HEIGHT"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/height/height-component-small2"
>     },
>     {
>       "name": "height/height-component-small4",
>       "libraryName": "CX Design Library",
>       "libraryKey": "lk-ab641cffe857558a199e3d03c1004a4db0356b0d3b570af536f6331be300437b5c2a993b2361e201438c4aabe9ab526cfa7d2d3dd62955692c4f5405f2fe36b5",
>       "variableType": "FLOAT",
>       "variableSetKey": "9dd2f6cf5976aa1fc44e59c225743d4bf754da09",
>       "key": "66af10a23376effbc7e7675e1740caeb743641c5",
>       "scopes": [
>         "WIDTH_HEIGHT"
>       ],
>       "variableCollectionName": "Dimensions",
>       "filePath": "design_systems/CX Design Library/variables/Dimensions/float/height/height-component-small4"
>     }
>   ]
> }
> ```
>
> </details>
>
> Working on Phase 3.c: `Doc Upload / Document Status`. Because the published CX Status-Tag set is unavailable through Figma’s import API, I’m applying the approved fallback: a new local status set built from CX icons, typography, semantic colors, and spacing variables.
>
> <details><summary>Ran a command, called 4 tools</summary>
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Create the five document-status variant components from CX icons text styles colors and spacing variables",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";const section=await figma.getNodeByIdAsync(\"103:964\");await figma.setCurrentPageAsync(section.parent);\nconst existing=section.findAllWithCriteria({types:[\"COMPONENT_SET\"],sharedPluginData:{namespace:\"dsb\",keys:[\"key\"]}}).find(n=>n.getSharedPluginData(\"dsb\",\"key\")===\"componentset/document-status\");if(existing)return {createdNodeIds:[],variantIds:existing.children.map(c=>c.id),alreadyExisted:true};\nconst [fileIcon,uploadIcon,checkIcon,warnIcon,infoBg,posBg,negBg,infoText,posText,negText,tinyPad,microPad,rowGap,radius,style]=await Promise.all([\n figma.importComponentByKeyAsync(\"b3827f91ecd110d9141c999f84897cc440a6bdc9\"),\n figma.importComponentByKeyAsync(\"87442b1bbb38a45fa26942cf781c956cb011a58c\"),\n figma.importComponentByKeyAsync(\"661200252cd53a26fdf54016f9b53d53319e49f1\"),\n figma.importComponentByKeyAsync(\"2a679758b0678360456c98d3b5e5fa03d255bfe0\"),\n figma.variables.importVariableByKeyAsync(\"608dd64dfb7660ccf019b1b3a397969c0344b1a3\"),\n figma.variables.importVariableByKeyAsync(\"dc61beb9654aa4572b1db1ff1bdb56ba973f2f5a\"),\n figma.variables.importVariableByKeyAsync(\"1b7f19caa8adae0d8d83dbb5c2077cd8babd3bd7\"),\n figma.variables.importVariableByKeyAsync(\"9828300da50f5a0c25317b4e0af17e95c5fd3472\"),\n figma.variables.importVariableByKeyAsync(\"99f60187c3fae0ae0b19a0c72dce7c5d922682ca\"),\n figma.variables.importVariableByKeyAsync(\"2cd1abbfaba19c691d50bc75d4a75a3f56229bd1\"),\n figma.variables.importVariableByKeyAsync(\"d829a478d060b83e735589013025e911aa2c41f7\"),\n figma.variables.importVariableByKeyAsync(\"7148f844567d649596b80c517a605f2e511abb17\"),\n figma.variables.importVariableByKeyAsync(\"cf06ec50491972f4f654934b0daf178aa6669e25\"),\n figma.variables.importVariableByKeyAsync(\"fd4492406543257ba71aac908d7402fa6d76de80\"),\n figma.importStyleByKeyAsync(\"7003fe772e04e761a01b3eb7ef7c6f2e36d9c09b\")\n]);await figma.loadFontAsync(style.fontName);\nconst tag=(n,key)=>{n.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);n.setSharedPluginData(\"dsb\",\"phase\",\"phase3\");n.setSharedPluginData(\"dsb\",\"key\",key);};\nconst specs=[\n [\"Outstanding\",\"Outstanding\",fileIcon,infoBg,infoText],\n [\"Selected\",\"Selected\",uploadIcon,infoBg,infoText],\n [\"Uploading\",\"Uploading 60%\",uploadIcon,infoBg,infoText],\n [\"Uploaded\",\"Uploaded\",checkIcon,posBg,posText],\n [\"Failed\",\"Failed\",warnIcon,negBg,negText]\n];\nconst variants=[];const created=[];\nfor(const [state,label,iconComp,bg,textColor] of specs){\n const comp=figma.createComponent();tag(comp,\"component/document-status/\"+state.toLowerCase());comp.name=\"State=\"+state;comp.layoutMode=\"HORIZONTAL\";comp.primaryAxisSizingMode=\"AUTO\";comp.counterAxisSizingMode=\"AUTO\";comp.counterAxisAlignItems=\"CENTER\";\n comp.setBoundVariable(\"paddingLeft\",tinyPad);comp.setBoundVariable(\"paddingRight\",tinyPad);comp.setBoundVariable(\"paddingTop\",microPad);comp.setBoundVariable(\"paddingBottom\",microPad);comp.setBoundVariable(\"itemSpacing\",rowGap);for(const p of [\"topLeftRadius\",\"topRightRadius\",\"bottomLeftRadius\",\"bottomRightRadius\"])comp.setBoundVariable(p,radius);\n comp.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:1,g:1,b:1}},\"color\",bg)];section.appendChild(comp);\n const icon=iconComp.createInstance();tag(icon,\"component/document-status/\"+state.toLowerCase()+\"/icon\");comp.appendChild(icon);icon.resize(16,16);\n const text=figma.createText();tag(text,\"component/document-status/\"+state.toLowerCase()+\"/label\");text.name=\"Label\";text.textStyleId=style.id;text.characters=label;text.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",textColor)];comp.appendChild(text);\n variants.push(comp);created.push(comp.id,icon.id,text.id);\n}\nreturn {createdNodeIds:created,variantIds:variants.map(v=>v.id),alreadyExisted:false};"
> }
> ```
>
> ```text
> {"createdNodeIds":["110:979","110:980","110:985","110:986","110:987","110:990","110:991","110:992","110:995","110:996","110:997","110:1000","110:1001","110:1002","110:1006"],"variantIds":["110:979","110:986","110:991","110:996","110:1001"],"alreadyExisted":false}
> ```
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Combine and lay out the new document-status variants as a local component set",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";const section=await figma.getNodeByIdAsync(\"103:964\");await figma.setCurrentPageAsync(section.parent);\nconst existing=section.findAllWithCriteria({types:[\"COMPONENT_SET\"],sharedPluginData:{namespace:\"dsb\",keys:[\"key\"]}}).find(n=>n.getSharedPluginData(\"dsb\",\"key\")===\"componentset/document-status\");if(existing)return {createdNodeIds:[],componentSetId:existing.id,alreadyExisted:true};\nconst nodes=(await Promise.all([\"110:979\",\"110:986\",\"110:991\",\"110:996\",\"110:1001\"].map(id=>figma.getNodeByIdAsync(id)))).filter(n=>n&&n.type===\"COMPONENT\");\nconst cs=figma.combineAsVariants(nodes,section);cs.name=\"Doc Upload / Document Status\";cs.description=\"Session-only document status with a text label and icon; status is never communicated by color alone.\";cs.x=80;cs.y=720;cs.fills=[];\ncs.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);cs.setSharedPluginData(\"dsb\",\"phase\",\"phase3\");cs.setSharedPluginData(\"dsb\",\"key\",\"componentset/document-status\");\nlet x=24;let maxH=0;for(const child of cs.children){child.x=x;child.y=24;x+=child.width+24;maxH=Math.max(maxH,child.height);}cs.resizeWithoutConstraints(x,maxH+48);cs.placeholder=false;\nreturn {createdNodeIds:[cs.id],mutatedNodeIds:cs.children.map(c=>c.id),componentSetId:cs.id,variants:cs.children.map(c=>({id:c.id,name:c.name,x:c.x,y:c.y,width:c.width,height:c.height})),alreadyExisted:false};"
> }
> ```
>
> ```text
> {"createdNodeIds":["110:1125"],"mutatedNodeIds":["110:979","110:986","110:991","110:996","110:1001"],"componentSetId":"110:1125","variants":[{"id":"110:979","name":"State=Outstanding","x":24,"y":24,"width":98,"height":28},{"id":"110:986","name":"State=Selected","x":146,"y":24,"width":78,"height":28},{"id":"110:991","name":"State=Uploading","x":248,"y":24,"width":114,"height":28},{"id":"110:996","name":"State=Uploaded","x":386,"y":24,"width":83,"height":28},{"id":"110:1001","name":"State=Failed","x":493,"y":24,"width":62,"height":28}],"alreadyExisted":false}
> ```
>
> MCP tool call
>
> codex_apps.figma.get_metadata
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "110:1125",
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> <frame id="110:1125" name="Doc Upload / Document Status" x="80" y="720" width="579" height="76">
>   <symbol id="110:979" name="State=Outstanding" x="24" y="24" width="98" height="28" />
>   <symbol id="110:986" name="State=Selected" x="146" y="24" width="78" height="28" />
>   <symbol id="110:991" name="State=Uploading" x="248" y="24" width="114" height="28" />
>   <symbol id="110:996" name="State=Uploaded" x="386" y="24" width="83" height="28" />
>   <symbol id="110:1001" name="State=Failed" x="493" y="24" width="62" height="28" />
> </frame>
> ```
>
> ```text
> IMPORTANT: After you call this tool, you MUST call get_design_context if trying to implement the design, since this tool only returns metadata. If you do not call get_design_context, the agent will not be able to implement the design.
> ```
>
> MCP tool call
>
> codex_apps.figma.get_screenshot
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "nodeId": "110:1125",
>   "maxDimension": 1200,
>   "clientFrameworks": "unknown",
>   "clientLanguages": "unknown"
> }
> ```
>
> ```text
> {"image_url":"https://www.figma.com/api/mcp/asset/efa87ed4-ca8f-417d-a304-20e3709c4e39","width":579,"height":76,"format":"png","original_width":579,"original_height":76}
> ```
>
> ```text
> The screenshot is hosted at the URL in the first content entry (as JSON). Download the PNG by running:
>
>   curl -L -o screenshot.png "https://www.figma.com/api/mcp/asset/efa87ed4-ca8f-417d-a304-20e3709c4e39"
>
> The URL returns raw PNG bytes (Content-Type: image/png). The URL is short-lived — treat it like a secret.
> ```
>
> - Ran `curl -L -o /tmp/figma-status.png 'https://www.figma.com/api/mcp/asset/efa87ed4-ca8f-417d-a304-20e3709c4e39'`
>
> </details>
>
> Viewed an image
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Inspect CX Linear Progress variants before embedding progress in upload states",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const set=await figma.importComponentSetByKeyAsync(\"2fd384381dcdd5f680c8b247dcdbcaab63388462\");return {id:set.id,name:set.name,variants:set.children.filter(n=>n.type===\"COMPONENT\").map(n=>n.name)};"
> }
> ```
>
> ```text
> {"id":"111:969","name":"Linear Progress","variants":["Sample Value=Low, Size=Default","Sample Value=Medium, Size=Default","Sample Value=High, Size=Default","Sample Value=Low, Size=Desktop","Sample Value=Medium, Size=Desktop","Sample Value=High, Size=Desktop"]}
> ```
>
> Working on Phase 3.d: the Direction A checklist-card state set. Seven states will share one component contract and reuse the new status, drop-zone, and file-row components plus CX Alert, Text Input, Linear Progress, and Button instances.
>
> MCP tool call
>
> figma.use_figma
>
> ```json
> {
>   "fileKey": "PS96rH7QrUVTZinM1uTZbk",
>   "description": "Create the seven checklist document card state variants from isolated local components and CX base assets",
>   "skillNames": "figma-use,figma-generate-design,figma-generate-library",
>   "code": "const RUN_ID=\"doc-upload-pencil-transfer-20260714\";const section=await figma.getNodeByIdAsync(\"103:964\");await figma.setCurrentPageAsync(section.parent);\nconst existing=section.findAllWithCriteria({types:[\"COMPONENT_SET\"],sharedPluginData:{namespace:\"dsb\",keys:[\"key\"]}}).find(n=>n.getSharedPluginData(\"dsb\",\"key\")===\"componentset/checklist-card\");if(existing)return {createdNodeIds:[],variantIds:existing.children.map(c=>c.id),alreadyExisted:true};\nconst [statusSet,dropComp,fileComp,alertSet,inputSet,progressSet,buttonSet,bg,line,text,muted,pad,tileGap,groupGap,rowGap,radius,stroke,titleStyle,bodyStyle]=await Promise.all([\n figma.getNodeByIdAsync(\"110:1125\"),figma.getNodeByIdAsync(\"106:964\"),figma.getNodeByIdAsync(\"108:967\"),\n figma.importComponentSetByKeyAsync(\"b5a2890843d77dd7e88c587d6fb55dbeaa7c45a6\"),figma.importComponentSetByKeyAsync(\"d61e13ad0473c59d3ffc7f508fe2930b5594d8a2\"),\n figma.importComponentSetByKeyAsync(\"2fd384381dcdd5f680c8b247dcdbcaab63388462\"),figma.importComponentSetByKeyAsync(\"93c929f1ab62af6beb62211797d1506066995587\"),\n figma.variables.importVariableByKeyAsync(\"55416e4c1a1deae84265fd6039b8403bdd4f1deb\"),figma.variables.importVariableByKeyAsync(\"73a0ee5c388edf54f537b576cada7cb87d190fcf\"),\n figma.variables.importVariableByKeyAsync(\"e35d4c0f96a67b435f8d7d55b3a8a8d1deaf07f5\"),figma.variables.importVariableByKeyAsync(\"6b85ffe601c780c2b3d8cfd6ddee17358efacf4a\"),\n figma.variables.importVariableByKeyAsync(\"f8291cb087425019b1b8723f3ed7f60702e043ee\"),figma.variables.importVariableByKeyAsync(\"b312e86fdf06147fc8b1edccff6114abec7d44cc\"),\n figma.variables.importVariableByKeyAsync(\"1a57b57df80ac462c47f9d1f863c10df1dfadc05\"),figma.variables.importVariableByKeyAsync(\"837aa126daedc9fd1244e1f0d203d32ba103efcf\"),\n figma.variables.importVariableByKeyAsync(\"daf259c9f52407453df55460e0226b60dc35ff50\"),figma.variables.importVariableByKeyAsync(\"7fc0c5aec0149a61a1ad60019f1237d6830e0eb9\"),\n figma.importStyleByKeyAsync(\"ef032958aaa164ff09f6b925dedfa9664915fb9f\"),figma.importStyleByKeyAsync(\"5600a3dd5568b269e1d5d08f7d0b3bbfc1868a48\")\n]);await Promise.all([figma.loadFontAsync(titleStyle.fontName),figma.loadFontAsync(bodyStyle.fontName)]);\nconst tag=(n,key)=>{n.setSharedPluginData(\"dsb\",\"run_id\",RUN_ID);n.setSharedPluginData(\"dsb\",\"phase\",\"phase3\");n.setSharedPluginData(\"dsb\",\"key\",key);};\nconst statusBy=Object.fromEntries(statusSet.children.map(c=>[c.name.replace(\"State=\",\"\"),c]));\nconst alertError=alertSet.children.find(n=>n.type===\"COMPONENT\"&&n.name===\"Type=Error\");\nconst inputError=inputSet.children.find(n=>n.type===\"COMPONENT\"&&n.name===\"State=Error\");\nconst progressMedium=progressSet.children.find(n=>n.type===\"COMPONENT\"&&n.name===\"Sample Value=Medium, Size=Default\");\nconst retryVariant=buttonSet.children.find(n=>n.type===\"COMPONENT\"&&n.name===\"Size=Small, Hierarchy=Secondary, Layout=No Icon, State=Enabled, Polarity=Default\");\nconst states=[\"Outstanding\",\"Selected\",\"Uploading\",\"Uploaded\",\"Failed\",\"Validation Error\",\"Note Required\"];const created=[];const variants=[];\nfor(const state of states){\n const keyState=state.toLowerCase().replaceAll(\" \",\"-\");const comp=figma.createComponent();tag(comp,\"component/checklist-card/\"+keyState);comp.name=\"State=\"+state;comp.placeholder=true;comp.layoutMode=\"VERTICAL\";comp.primaryAxisSizingMode=\"AUTO\";comp.counterAxisSizingMode=\"FIXED\";comp.resize(808,100);\n for(const p of [\"paddingTop\",\"paddingBottom\",\"paddingLeft\",\"paddingRight\"])comp.setBoundVariable(p,pad);comp.setBoundVariable(\"itemSpacing\",tileGap);for(const p of [\"topLeftRadius\",\"topRightRadius\",\"bottomLeftRadius\",\"bottomRightRadius\"])comp.setBoundVariable(p,radius);comp.setBoundVariable(\"strokeWeight\",stroke);\n comp.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:1,g:1,b:1}},\"color\",bg)];comp.strokes=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",line)];section.appendChild(comp);\n const header=figma.createAutoLayout(\"VERTICAL\",{name:\"Document header\"});tag(header,\"component/checklist-card/\"+keyState+\"/header\");comp.appendChild(header);header.layoutSizingHorizontal=\"FILL\";header.setBoundVariable(\"itemSpacing\",groupGap);\n const titleRow=figma.createAutoLayout(\"HORIZONTAL\",{name:\"Title row\"});tag(titleRow,\"component/checklist-card/\"+keyState+\"/title-row\");header.appendChild(titleRow);titleRow.layoutSizingHorizontal=\"FILL\";titleRow.primaryAxisAlignItems=\"SPACE_BETWEEN\";titleRow.counterAxisAlignItems=\"CENTER\";titleRow.setBoundVariable(\"itemSpacing\",rowGap);\n const title=figma.createText();tag(title,\"component/checklist-card/\"+keyState+\"/title\");title.name=\"Title\";title.textStyleId=titleStyle.id;title.characters=\"Proof of income\";title.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",text)];title.textAutoResize=\"HEIGHT\";title.resize(500,24);titleRow.appendChild(title);title.layoutSizingHorizontal=\"FILL\";\n const mapped=state===\"Validation Error\"?\"Outstanding\":state===\"Note Required\"?\"Selected\":state;const statusInst=statusBy[mapped].createInstance();tag(statusInst,\"component/checklist-card/\"+keyState+\"/status\");titleRow.appendChild(statusInst);\n const desc=figma.createText();tag(desc,\"component/checklist-card/\"+keyState+\"/description\");desc.name=\"Description\";desc.textStyleId=bodyStyle.id;desc.characters=\"Upload a recent pay stub, W-2, or bank statement from the last 60 days.\";desc.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",muted)];desc.textAutoResize=\"HEIGHT\";desc.resize(700,40);header.appendChild(desc);desc.layoutSizingHorizontal=\"FILL\";\n if(state===\"Outstanding\"){const inst=dropComp.createInstance();tag(inst,\"component/checklist-card/\"+keyState+\"/drop-zone\");comp.appendChild(inst);inst.layoutSizingHorizontal=\"FILL\";}\n if(state===\"Selected\"){const inst=fileComp.createInstance();tag(inst,\"component/checklist-card/\"+keyState+\"/file\");comp.appendChild(inst);inst.layoutSizingHorizontal=\"FILL\";}\n if(state===\"Uploading\"){const inst=fileComp.createInstance();tag(inst,\"component/checklist-card/\"+keyState+\"/file\");comp.appendChild(inst);inst.layoutSizingHorizontal=\"FILL\";const prog=progressMedium.createInstance();tag(prog,\"component/checklist-card/\"+keyState+\"/progress\");comp.appendChild(prog);prog.layoutSizingHorizontal=\"FILL\";}\n if(state===\"Uploaded\"){const done=figma.createText();tag(done,\"component/checklist-card/\"+keyState+\"/message\");done.name=\"Completion message\";done.textStyleId=bodyStyle.id;done.characters=\"Uploaded this visit\";done.fills=[figma.variables.setBoundVariableForPaint({type:\"SOLID\",color:{r:0,g:0,b:0}},\"color\",muted)];comp.appendChild(done);}\n if(state===\"Failed\"){const alert=alertError.createInstance();tag(alert,\"component/checklist-card/\"+keyState+\"/alert\");alert.setProperties({\"Text#10114:3\":\"Upload failed\",\"Supporting Text#10114:0\":\"Your file was not uploaded. Try again or choose another file.\",\"Show Supporting Text#10324:0\":true,\"Show Close Button#10330:5\":false,\"Show Button Set#13087:0\":false});comp.appendChild(alert);alert.layoutSizingHorizontal=\"FILL\";const inst=fileComp.createInstance();tag(inst,\"component/checklist-card/\"+keyState+\"/file\");comp.appendChild(inst);inst.layoutSizingHorizontal=\"FILL\";const retry=retryVariant.createInstance();tag(retry,\"component/checklist-card/\"+keyState+\"/retry\");retry.setProperties({\"Label#16116:0\":\"Retry upload\"});comp.appendChild(retry);}\n if(state===\"Validation Error\"){const alert=alertError.createInstance();tag(alert,\"component/checklist-card/\"+keyState+\"/alert\");alert.setProperties({\"Text#10114:3\":\"Choose a supported file\",\"Supporting Text#10114:0\":\"Use a PDF, JPEG, or PNG file up to 10 MB.\",\"Show Supporting Text#10324:0\":true,\"Show Close Button#10330:5\":false,\"Show Button Set#13087:0\":false});comp.appendChild(alert);alert.layoutSizingHorizontal=\"FILL\";const inst=dropComp.createInstance();tag(inst,\"component/checklist-card/\"+keyState+\"/drop-zone\");comp.appendChild(inst);inst.layoutSizingHorizontal=\"FILL\";}\n if(state===\"Note Required\"){const input=inputError.createInstance();tag(input,\"component/checklist-card/\"+keyState+\"/input\");input.setProperties({\"Label#16198:15\":\"Document type\",\"✏️ Placeholder Text#16198:26\":\"e.g., employment verification letter\",\"✏️ Error Text#16205:0\":\"Tell us what document you are uploading\",\"👀 Optional#16198:16\":false,\"State\":\"Error\"});comp.appendChild(input);input.layoutSizingHorizontal=\"FILL\";const inst=fileComp.createInstance();tag(inst,\"component/checklist-card/\"+keyState+\"/file\");comp.appendChild(inst);inst.layoutSizingHorizontal=\"FILL\";}\n comp.placeholder=false;variants.push(comp);created.push(comp.id,header.id,titleRow.id,title.id,statusInst.id,desc.id);\n}\nreturn {createdNodeIds:created,variantIds:variants.map(v=>v.id),alreadyExisted:false};"
> }
> ```
>
> ```text
> {"createdNodeIds":["112:1075","112:1076","112:1077","112:1078","112:1079","112:1086","112:1096","112:1097","112:1098","112:1099","112:1100","112:1105","112:1121","112:1122","112:1123","112:1124","112:1125","112:1130","112:1160","112:1161","112:1162","112:1163","112:1164","112:1169","112:1171","112:1172","112:1173","112:1174","112:1175","112:1181","112:1226","112:1227","112:1228","112:1229","112:1230","112:1237","112:1267","112:1268","112:1269","112:1270","112:1271","112:1276"],"variantIds":["112:1075","112:1096","112:1121","112:1160","112:1171","112:1226","112:1267"],"alreadyExisted":false}
> ```
>
> Context compaction
>
> Source: automatic
> Status: completed
>
> Phase 0’s constraint is carried forward: I’m using only CX library assets plus newly created components on the new transfer page. I’m continuing Phase 3 now by finishing the Direction A card system, then I’ll build the guided-flow components and compose the screen set.
>
> System error
>
> You hit your spend cap set by the owner of your workspace. Ask an owner to increase your spend cap to continue.
>
> <details><summary>Plan</summary>
>
> Phase 0 approved with the explicit constraint that no current local components may be reused. New upload-specific components will be isolated and built from CX library assets.
>
> - [x] P0.a–P0.f: inspect Pencil, repo, target Figma file, and CX library; lock the migration map
> - [ ] P1: verify/import CX token, typography, and style foundations without duplicating them locally
> - [ ] P2: create the new Figma page and its Direction A and Direction B sections
> - [ ] P3: create isolated upload-specific local components from CX assets, then compose every mobile and desktop state
> - [ ] P4: validate structure, component linkage, tokens, typography, accessibility, and visual fidelity
>
> </details>
</details>

Model changed

gpt-5.6-sol -> gpt-5.6-terra

> try again

<details><summary>1 previous message</summary>

> System error
>
> You hit your spend cap set by the owner of your workspace. Ask an owner to increase your spend cap to continue.
</details>
