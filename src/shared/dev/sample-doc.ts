// Demo-only: realistic-looking mock "documents" (data-URL SVGs) used by seeded scenarios, so the
// preview modal in the scenario explorer shows something believable rather than a wireframe. The
// content is entirely fake placeholder data and each image carries a "sample" note. NOT used in the
// normal flow, which holds genuine object URLs from files the customer actually picked.
// Use Option C's FileInfo (a superset that also carries the raw byte size, for running totals).
// Assignable to Option A/B's FileInfo wherever those scenarios use it.
import type { FileInfo } from "../../c/state/store-c";

const FONT = `font-family='Helvetica, Arial, sans-serif'`;
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const toUrl = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

interface Field {
  label: string;
  value: string;
}

// A believable single-page document: OneMain letterhead, title, a labelled details block, a short
// body, a signature line, and a footer noting it is a prototype sample.
function docSvg(title: string, subtitle: string, fields: Field[], body: string[]): string {
  const fieldRows = fields
    .map((f, i) => {
      const x = i % 2 === 0 ? 40 : 320;
      const yBase = 280 + Math.floor(i / 2) * 64;
      return `<text x='${x}' y='${yBase}' fill='#8a94a6' ${FONT} font-size='11' letter-spacing='0.6'>${esc(
        f.label.toUpperCase(),
      )}</text><text x='${x}' y='${yBase + 24}' fill='#051958' ${FONT} font-size='15' font-weight='600'>${esc(
        f.value,
      )}</text>`;
    })
    .join("");
  const bodyLines = body
    .map((t, i) => `<text x='40' y='${466 + i * 24}' fill='#4b576c' ${FONT} font-size='13'>${esc(t)}</text>`)
    .join("");
  return `<svg xmlns='http://www.w3.org/2000/svg' width='620' height='800' viewBox='0 0 620 800'>
    <rect width='620' height='800' fill='#ffffff'/>
    <rect width='620' height='84' fill='#002169'/>
    <rect y='84' width='620' height='4' fill='#ff6b17'/>
    <text x='40' y='42' fill='#ffffff' ${FONT} font-size='22' font-weight='700'>OneMain Financial</text>
    <text x='40' y='64' fill='#c9d4ef' ${FONT} font-size='11'>601 NW Second Street, Evansville, IN 47708</text>
    <text x='580' y='50' fill='#c9d4ef' ${FONT} font-size='11' text-anchor='end'>Member Services 1-800-742-5465</text>
    <text x='40' y='150' fill='#051958' ${FONT} font-size='26' font-weight='700'>${esc(title)}</text>
    <text x='40' y='176' fill='#62738c' ${FONT} font-size='14'>${esc(subtitle)}</text>
    <rect x='40' y='200' width='540' height='1' fill='#e8eaec'/>
    <text x='40' y='244' fill='#051958' ${FONT} font-size='15' font-weight='700'>Details</text>
    ${fieldRows}
    <rect x='40' y='408' width='540' height='1' fill='#e8eaec'/>
    <text x='40' y='440' fill='#051958' ${FONT} font-size='15' font-weight='700'>Summary</text>
    ${bodyLines}
    <rect x='40' y='662' width='260' height='1' fill='#cbd5e1'/>
    <text x='40' y='686' fill='#62738c' ${FONT} font-size='12'>Authorized signature</text>
    <text x='320' y='686' fill='#62738c' ${FONT} font-size='12'>Date</text>
    <rect x='320' y='662' width='180' height='1' fill='#cbd5e1'/>
    <text x='40' y='784' fill='#98a2b3' ${FONT} font-size='10'>Sample document generated for a design prototype. Not a real record.</text>
  </svg>`;
}

// A simple side-view car standing in for an uploaded vehicle photo.
function vehiclePhotoSvg(): string {
  return `<svg xmlns='http://www.w3.org/2000/svg' width='620' height='800' viewBox='0 0 620 800'>
    <defs><linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0' stop-color='#cfe0f4'/><stop offset='1' stop-color='#edf3fb'/></linearGradient></defs>
    <rect width='620' height='800' fill='#eaeef3'/>
    <rect x='40' y='150' width='540' height='420' rx='10' fill='url(#sky)'/>
    <rect x='40' y='430' width='540' height='140' fill='#cdd6e0'/>
    <rect x='40' y='430' width='540' height='3' fill='#b7c2cf'/>
    <ellipse cx='318' cy='500' rx='185' ry='18' fill='#9aa6b4' opacity='0.5'/>
    <rect x='158' y='412' width='330' height='58' rx='18' fill='#2f5bd0'/>
    <path d='M240 412 L276 366 Q284 358 300 358 L396 358 Q414 358 426 372 L452 412 Z' fill='#3f68d8'/>
    <path d='M286 372 L344 372 L344 404 L264 404 Z' fill='#dbe6f7'/>
    <path d='M354 372 L396 372 Q408 372 417 382 L434 404 L354 404 Z' fill='#dbe6f7'/>
    <rect x='348' y='398' width='2' height='60' fill='#254aa8'/>
    <rect x='478' y='424' width='12' height='12' rx='3' fill='#ffe08a'/>
    <circle cx='232' cy='470' r='38' fill='#20262f'/><circle cx='232' cy='470' r='16' fill='#9aa4b2'/>
    <circle cx='420' cy='470' r='38' fill='#20262f'/><circle cx='420' cy='470' r='16' fill='#9aa4b2'/>
    <text x='310' y='612' fill='#62738c' ${FONT} font-size='13' text-anchor='middle'>Vehicle photo — sample image for a design prototype</text>
  </svg>`;
}

const DOC_INSURANCE = toUrl(
  docSvg(
    "Automobile Insurance Policy",
    "Personal Auto — Declarations Page",
    [
      { label: "Policy number", value: "OMF-AUTO-4821" },
      { label: "Policy period", value: "06/12/2026 – 12/12/2026" },
      { label: "Named insured", value: "Jordan A. Rivera" },
      { label: "Insured vehicle", value: "2021 Honda Civic LX" },
    ],
    [
      "This declarations page summarizes the coverage in force for the vehicle",
      "described above. Bodily injury liability is $100,000 per person and",
      "$300,000 per accident. Property damage liability is $50,000. Comprehensive",
      "and collision coverage each apply with a $500 deductible. Refer to the full",
      "policy for complete terms, conditions, and exclusions.",
    ],
  ),
);

const DOC_BILL_OF_SALE = toUrl(
  docSvg(
    "Motor Vehicle Bill of Sale",
    "Transfer of ownership",
    [
      { label: "Seller", value: "Bay City Motors" },
      { label: "Buyer", value: "Jordan A. Rivera" },
      { label: "Sale date", value: "June 10, 2026" },
      { label: "VIN", value: "2HGFE2F5XMH••••12" },
    ],
    [
      "The seller named above transfers ownership of the following vehicle to the",
      "buyer for the agreed sale price. Vehicle: 2021 Honda Civic LX, odometer",
      "24,180 miles. Sale price: $18,750.00, paid in full. The vehicle is sold",
      "as-is. Both parties affirm the information above is accurate as of the",
      "sale date shown.",
    ],
  ),
);

const DOC_PAYOFF = toUrl(
  docSvg(
    "Auto Loan Payoff Statement",
    "Amount required to pay this loan in full",
    [
      { label: "Account number", value: "••••4821" },
      { label: "Payoff amount", value: "$12,430.55" },
      { label: "Good through", value: "July 15, 2026" },
      { label: "Per diem interest", value: "$2.14 / day" },
    ],
    [
      "The amount shown above is the total required to pay this loan in full through",
      "the good-through date. Interest accrues daily at the per-diem shown, so a",
      "payment received after that date may leave a small remaining balance.",
      "Please contact Member Services to confirm the current payoff figure before",
      "remitting funds.",
    ],
  ),
);

const DOC_GENERIC = toUrl(
  docSvg(
    "Supporting Document",
    "Uploaded for your loan request",
    [
      { label: "Reference", value: "DOC-4821" },
      { label: "Date", value: "June 2026" },
      { label: "Prepared for", value: "Jordan A. Rivera" },
      { label: "Pages", value: "1" },
    ],
    [
      "This is a sample supporting document included so the preview has realistic",
      "content to display. The text here is placeholder copy and does not represent",
      "a real record. In the live experience this preview shows the actual file the",
      "customer uploaded.",
    ],
  ),
);

const PHOTO_VEHICLE = toUrl(vehiclePhotoSvg());

/** Back-compat: the generic document, kept as the default export name. */
export const SAMPLE_DOC = DOC_GENERIC;

// Pick a believable mock based on the file name / type.
function mockUrlFor(name: string, typeLabel: string): string {
  const n = name.toLowerCase();
  const isImage = /jpe?g|png|gif|webp/i.test(typeLabel) || /\.(jpe?g|png|gif|webp)$/i.test(n);
  if (isImage && /(vehicle|car|front|back|photo)/.test(n)) return PHOTO_VEHICLE;
  if (n.includes("insurance")) return DOC_INSURANCE;
  if (n.includes("bill")) return DOC_BILL_OF_SALE;
  if (n.includes("payoff")) return DOC_PAYOFF;
  return DOC_GENERIC;
}

/** Approximate raw bytes from a size label like "179 KB" — good enough for a demo running total. */
function bytesFromLabel(label: string): number {
  const m = /^([\d.]+)\s*(B|KB|MB)$/i.exec(label.trim());
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const unit = m[2].toUpperCase();
  return Math.round(unit === "MB" ? n * 1024 * 1024 : unit === "KB" ? n * 1024 : n);
}

/** Build a FileInfo for a seeded scenario, pointing at a realistic mock document/photo. */
export function sampleFile(
  name: string,
  typeLabel: string,
  sizeLabel: string,
  bytes = bytesFromLabel(sizeLabel),
): FileInfo {
  return { name, typeLabel, sizeLabel, bytes, url: mockUrlFor(name, typeLabel) };
}
