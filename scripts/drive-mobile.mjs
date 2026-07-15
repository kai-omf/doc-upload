// Mobile drill-in driver: overview -> tap a doc -> doc step -> upload -> uploaded -> back.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:5174/";
const out = process.argv[3] ?? "/tmp/drive-m";
mkdirSync(out, { recursive: true });
const pdf = (name) => ({ name, mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4 fake") });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
async function shot(name) {
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
}
await page.goto(base, { waitUntil: "networkidle" });

// Tap "Proof of income" list item to drill in.
await page.click('du-document-item[data-doc-id="proof-of-income"] button');
await page.waitForSelector("du-drop-zone");
await shot("m1-doc-step");
// Select + upload.
await page.setInputFiles("du-drop-zone input[type=file]", pdf("paystub.pdf"));
await page.click('oneapp-poc-button[data-action="upload"] button');
await page.waitForSelector('text=Uploaded · just now', { timeout: 5000 });
await shot("m2-uploaded");
// Next document (photo ID).
await page.click('oneapp-poc-button[data-action="next"] button');
await page.waitForSelector("du-drop-zone");
await shot("m3-next-doc");
// Back to documents (contextual back in the chrome).
await page.click("du-web-nav .back-btn");
await page.waitForSelector("du-progress-header");
await shot("m4-back-overview");

await browser.close();
console.log("mobile shots done");
