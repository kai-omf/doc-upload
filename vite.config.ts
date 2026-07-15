import { defineConfig } from "vite";

// Minimal ambient declaration so the config typechecks without pulling in @types/node.
declare const process: { env: Record<string, string | undefined> };

// Root-level Vite app. The design system (tokens/tokens.css + tokens/cx-fonts.css)
// and self-hosted Merchant fonts (tokens/fonts/merchant/) are imported from src/main.ts;
// Vite rewrites the relative font url()s in tokens.css, so the fonts resolve without moving them.
// `base` defaults to "/" (local dev, Vercel served at root). GitHub Pages serves under a repo
// subpath, so the Pages workflow sets BASE_PATH=/doc-upload/ to prefix built asset URLs.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  server: { open: false },
  build: { outDir: "dist", target: "es2022" },
});
