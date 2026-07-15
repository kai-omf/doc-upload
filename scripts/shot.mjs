// Dev verification helper: screenshot a URL at a given viewport.
// Usage: node scripts/shot.mjs <url> <out.png> [width=1440] [height=1000] [fullPage=0]
import { chromium } from "playwright";

const [url, out, width = "1440", height = "1000", fullPage = "0"] = process.argv.slice(2);
if (!url || !out) {
  console.error("usage: node scripts/shot.mjs <url> <out.png> [width] [height] [fullPage]");
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(width), height: Number(height) },
  deviceScaleFactor: 2,
});
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(250);
await page.screenshot({ path: out, fullPage: fullPage === "1" });
await browser.close();
console.log("shot ->", out);
