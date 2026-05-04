import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages base path. When trexim.ai DNS is wired, set site to "https://trexim.ai" and base to "/".
const SITE = "https://taras732.github.io";
const BASE = "/treximai-website";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  compressHTML: true,
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "en"],
    routing: {
      prefixDefaultLocale: false, // / = uk, /en/ = en
    },
  },
  build: {
    inlineStylesheets: "auto",
    assets: "_assets",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
