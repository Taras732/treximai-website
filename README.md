# TreximAI Website

Marketing site for [trexim.ai](https://trexim.ai) — AI logistics platform for Ukraine.

**Status:** v1 in active development (2026-05-04). Iteration plan: build one page at a time, review with Тарас, then move to next.

## Stack

- **Astro 5** — static site generator
- **Tailwind v4** — CSS framework via `@tailwindcss/vite`
- **TypeScript strict** — `astro/tsconfigs/strict`
- **i18n** — UA primary, EN coming soon (Astro native i18n)
- **GitHub Pages** — auto-deploy on push to `main` (via `actions/deploy-pages`)

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321/treximai-website/
npm run build    # static dist/ ready for Pages
npm run preview  # local preview of build
```

## Project structure

```
src/
├── assets/images/       # all 20 image assets per page
├── components/          # Header, Footer, Button, ...
├── data/site.ts         # site metadata + URLs + brand
├── i18n/translations.ts # all UI copy (UA + EN stubs)
├── layouts/BaseLayout.astro
├── pages/               # one .astro file per route
└── styles/global.css    # Tailwind v4 + brand tokens
```

## Brand tokens

Defined as `@theme` CSS variables in `src/styles/global.css`. Tailwind v4 exposes them as utility classes (`bg-brand-blue`, `text-brand-orange`, etc.).

| Token | Value |
|---|---|
| `--color-brand-blue` | `#2F4A86` |
| `--color-brand-blue-dark` | `#243764` |
| `--color-brand-orange` | `#E9771A` |
| `--color-brand-orange-light` | `#FF903E` |
| Font display | `Montserrat` 400/500/600/700 |

## Roadmap (per Тарас)

- [x] Scaffold Astro + Tailwind + GH Pages config
- [x] Home page (iteration 1) — first review pass
- [ ] About Us
- [ ] Opportunities
- [ ] Partners
- [ ] Tariffs
- [ ] Contacts page
- [ ] Form modal (booking)
- [ ] 404
- [ ] Custom domain `trexim.ai` (Phase 2)

## Source of truth

- Figma: see `figma_links.md.txt` in the vault project folder
- Spec: `D:/Obsidian/Obdsidian_2026/10_Projects/TreximAI/Website_v2/Drafts/figma-spec-desktop.md`

## Deploy

Push to `main` → GitHub Action builds → publishes to `https://taras732.github.io/treximai-website/`.

When `trexim.ai` DNS is wired:
1. Update `astro.config.mjs` → `site: "https://trexim.ai"`, `base: "/"`
2. Add `public/CNAME` containing `trexim.ai`
3. Configure DNS A/AAAA records to GitHub Pages IPs
4. Enable HTTPS in repo Pages settings
