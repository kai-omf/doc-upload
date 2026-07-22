// Shared per-status presentation for the checklist flows (A "Single Page" batch + C "Instant Upload"):
// the glyph, label, and colour tone used by the status pill and the request-rail checklist rows, so
// the two never drift. Status is always icon + text; `tone` maps to the Pencil status palette
// (neutral / info / caution / positive / negative).
//
// This module owns the **superset** DocStatus used by the shared checklist components. Each flow's
// store emits a subset: A uses ready/submitting/submitted (batch); C uses selected/uploading/uploaded
// (instant). Both share not-started / validation-error / note-required / failed.
import type { IconName } from "@shared/icons";

export type DocStatus =
  | "not-started"
  | "validation-error"
  | "note-required"
  | "ready" // A: staged + valid, waiting for the batch submit
  | "selected" // C: staged + valid, waiting for this doc's Upload
  | "submitting" // A: in the batch submit cascade
  | "uploading" // C: this doc is uploading
  | "submitted" // A: sent (batch), read-only
  | "uploaded" // C: sent (instant), read-only
  | "failed";

export type StatusTone = "neutral" | "info" | "caution" | "positive" | "negative";

export interface StatusMeta {
  glyph: IconName;
  label: string;
  tone: StatusTone;
}

export const STATUS_META: Record<DocStatus, StatusMeta> = {
  "not-started": { glyph: "dashed-circle", label: "Not started", tone: "neutral" },
  ready: { glyph: "check-dashed-circle", label: "Ready", tone: "info" },
  selected: { glyph: "check-dashed-circle", label: "Ready", tone: "info" },
  "validation-error": { glyph: "warning-circle", label: "Needs attention", tone: "caution" },
  "note-required": { glyph: "warning-circle", label: "Needs attention", tone: "caution" },
  submitting: { glyph: "upload", label: "Submitting", tone: "info" },
  uploading: { glyph: "upload", label: "Uploading", tone: "info" },
  submitted: { glyph: "check-circle", label: "Submitted", tone: "positive" },
  uploaded: { glyph: "check-circle", label: "Uploaded", tone: "positive" },
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
