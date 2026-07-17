// Demo scenarios for Option A (Checklist Hub) — each jumps the store straight to an edge case /
// state so reviewers can explore without walking the whole flow. Consumed by the scenario dock.
import { storeA, type DocState } from "./store-a";
import { sampleFile } from "../../shared/dev/sample-doc";

export interface Scenario {
  id: string;
  label: string;
  group?: string;
  apply: () => void;
}

const FILE: Record<string, DocState["file"]> = {
  "proof-of-income": sampleFile("paystub-june-2026.pdf", "PDF", "215 KB"),
  "photo-id": sampleFile("drivers-license-front.jpg", "JPG", "1.4 MB"),
  "proof-of-residence": sampleFile("utility-bill-june.pdf", "PDF", "412 KB"),
  other: sampleFile("bank-statement.pdf", "PDF", "2.4 MB"),
};
const readyAll: Record<string, Partial<DocState>> = {
  "proof-of-income": { status: "ready", file: FILE["proof-of-income"] },
  "photo-id": { status: "ready", file: FILE["photo-id"] },
  "proof-of-residence": { status: "ready", file: FILE["proof-of-residence"] },
  other: { status: "ready", file: FILE["other"], note: "Bank statement" },
};
const submittedAll: Record<string, Partial<DocState>> = {
  "proof-of-income": { status: "submitted", file: FILE["proof-of-income"] },
  "photo-id": { status: "submitted", file: FILE["photo-id"] },
  "proof-of-residence": { status: "submitted", file: FILE["proof-of-residence"] },
  other: { status: "submitted", file: FILE["other"], note: "Bank statement" },
};

export const SCENARIOS_A: Scenario[] = [
  { id: "default", label: "Empty — all not started", group: "States", apply: () => storeA.reset() },
  {
    id: "mixed",
    label: "Mixed — error + note + ready",
    group: "States",
    apply: () =>
      storeA.loadScenario({
        "proof-of-income": { status: "ready", file: FILE["proof-of-income"] },
        "photo-id": {
          status: "validation-error",
          message:
            "That file is 12.4 MB — larger than the 10 MB limit. Choose a smaller PDF, JPG, or PNG file.",
        },
        other: { status: "note-required", file: FILE["other"], note: "" },
      }),
  },
  { id: "all-ready", label: "All staged — ready to submit", group: "States", apply: () => storeA.loadScenario(readyAll) },
  { id: "all-submitted", label: "Complete — all submitted", group: "States", apply: () => storeA.loadScenario(submittedAll) },
  {
    id: "one-failed",
    label: "One failed after submit",
    group: "States",
    apply: () =>
      storeA.loadScenario({
        ...submittedAll,
        "photo-id": {
          status: "failed",
          file: FILE["photo-id"],
          message: "Something went wrong on our end — your file and note are still here. Try again.",
        },
      }),
  },
  {
    id: "cascade",
    label: "▶ Run submit cascade",
    group: "Animations",
    apply: () => {
      storeA.loadScenario(readyAll);
      storeA.submitAll();
    },
  },
];
