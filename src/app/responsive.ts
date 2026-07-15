// Breakpoint observer. The design system switches from the two-column list-detail layout to the
// single-column drill-in at 839px, i.e. two-column applies at >=840px.
const DESKTOP_QUERY = "(min-width: 840px)";

const mql = window.matchMedia(DESKTOP_QUERY);

export function isDesktop(): boolean {
  return mql.matches;
}

export function onBreakpointChange(cb: () => void): () => void {
  const handler = () => cb();
  mql.addEventListener("change", handler);
  return () => mql.removeEventListener("change", handler);
}
