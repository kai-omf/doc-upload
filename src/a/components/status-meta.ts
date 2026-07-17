// Shared per-status presentation for Direction A: the glyph, label, and colour tone used by the
// status pill and the request-rail checklist rows, so the two never drift. Status is always icon +
// text; `tone` maps to the Pencil status palette (neutral / info / caution / positive / negative).
import type { IconName } from "@shared/icons";
import type { DocStatus } from "../state/store-a";

export type StatusTone = "neutral" | "info" | "caution" | "positive" | "negative";

export interface StatusMeta {
  glyph: IconName;
  label: string;
  tone: StatusTone;
}

export const STATUS_META: Record<DocStatus, StatusMeta> = {
  "not-started": { glyph: "dashed-circle", label: "Not started", tone: "neutral" },
  ready: { glyph: "check-dashed-circle", label: "Ready", tone: "info" },
  "validation-error": { glyph: "warning-circle", label: "Needs attention", tone: "caution" },
  "note-required": { glyph: "warning-circle", label: "Needs attention", tone: "caution" },
  submitting: { glyph: "upload", label: "Submitting", tone: "info" },
  submitted: { glyph: "check-circle", label: "Submitted", tone: "positive" },
  failed: { glyph: "warning-triangle", label: "Failed", tone: "negative" },
};

// The body text colour for each tone (icons + right-aligned rail labels).
export const TONE_COLOR: Record<StatusTone, string> = {
  neutral: "var(--omf-cx-core-color-body-moderate, #62738c)",
  info: "var(--omf-cx-core-color-body-info, #0e45e3)",
  caution: "var(--omf-cx-core-color-body-caution, #856b05)",
  positive: "var(--omf-cx-core-color-body-positive, #008353)",
  negative: "var(--omf-cx-core-color-body-negative, #d62940)",
};
