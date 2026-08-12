// Demo-only: a mock "document" image (data URL) used by seeded scenarios so the file rows and the
// preview modal have something realistic to show without a real uploaded file. Not used in the
// normal flow (which holds genuine object URLs from files the user picks).
// Use Option C's FileInfo (a superset that also carries the raw byte size, for running totals).
// Assignable to Option A/B's FileInfo wherever those scenarios use it.
import type { FileInfo } from "../../c/state/store-c";

function buildSvg(): string {
  const line = (y: number, w: number, c = "#e8eaec") =>
    `<rect x="40" y="${y}" width="${w}" height="10" rx="5" fill="${c}"/>`;
  const rows = [220, 246, 272, 298].map((y) => line(y, 520 - ((y - 220) / 26) * 40)).join("");
  const table = [360, 392, 424, 456, 488]
    .map(
      (y) =>
        `${line(y, 220)}<rect x="440" y="${y}" width="120" height="10" rx="5" fill="#e8eaec"/>`,
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="620" height="800" viewBox="0 0 620 800">
    <rect width="620" height="800" fill="#ffffff"/>
    <rect x="0" y="0" width="620" height="96" fill="#002169"/>
    <text x="40" y="58" fill="#ffffff" font-family="Arial, sans-serif" font-size="26" font-weight="700">OneMain Financial</text>
    <text x="40" y="164" fill="#051958" font-family="Arial, sans-serif" font-size="22" font-weight="700">Document preview</text>
    ${rows}
    <rect x="40" y="330" width="540" height="1" fill="#cbd5e1"/>
    ${table}
    <rect x="40" y="540" width="540" height="1" fill="#cbd5e1"/>
    <rect x="40" y="700" width="200" height="12" rx="6" fill="#0e45e3"/>
  </svg>`;
}

/** A data-URL image standing in for an uploaded document (renders in <img> and <iframe>). */
export const SAMPLE_DOC = `data:image/svg+xml,${encodeURIComponent(buildSvg())}`;

/** Approximate raw bytes from a size label like "179 KB" — good enough for a demo running total. */
function bytesFromLabel(label: string): number {
  const m = /^([\d.]+)\s*(B|KB|MB)$/i.exec(label.trim());
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const unit = m[2].toUpperCase();
  return Math.round(unit === "MB" ? n * 1024 * 1024 : unit === "KB" ? n * 1024 : n);
}

/** Build a FileInfo for a seeded scenario, pointing at the mock document image. */
export function sampleFile(
  name: string,
  typeLabel: string,
  sizeLabel: string,
  bytes = bytesFromLabel(sizeLabel),
): FileInfo {
  return { name, typeLabel, sizeLabel, bytes, url: SAMPLE_DOC };
}
