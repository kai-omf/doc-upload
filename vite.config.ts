import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// Root-level Vite app. The design system (tokens/tokens.css + tokens/cx-fonts.css)
// and self-hosted Merchant fonts (tokens/fonts/merchant/) are imported from src/main.ts;
// Vite rewrites the relative font url()s in tokens.css, so the fonts resolve without moving them.
// `base` defaults to "/" (local dev, Vercel served at root). GitHub Pages serves under a repo
// subpath, so the Pages workflow sets BASE_PATH=/doc-upload/ to prefix built asset URLs.
const shared = fileURLToPath(new URL("./src/shared", import.meta.url));

// Multi-page: "/" home selector, "/a/" Option A, "/b/" Option B. Shared primitives via @shared/*.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  resolve: { alias: { "@shared": shared } },
  server: { open: false },
  build: {
    outDir: "dist",
    target: "es2022",
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        a: fileURLToPath(new URL("./a/index.html", import.meta.url)),
        b: fileURLToPath(new URL("./b/index.html", import.meta.url)),
      },
    },
  },
});
