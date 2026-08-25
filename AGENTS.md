<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Space Portofolio

Personal portfolio website for Aditya Imam Zuhdi — a near 1:1 rebuild of [izaditya.my.id](https://www.izaditya.my.id). Content is centralized in `src/lib/content.ts` (ID/EN via react-i18next).

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** Tailwind CSS v4 (oklch design tokens), shadcn/ui primitives
- **Animation:** framer-motion, GSAP + ScrollTrigger, Lenis smooth scroll
- **Video:** hls.js (Mux HLS background streams)
- **Deployment:** Vercel

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style

- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles (except data-driven values)
- 2-space indentation, mobile-first responsive

## Project Structure

```
src/
  app/               # Routes (layout, page, globals.css)
  components/        # Section components + MuxVideoBackground, ScrollRevealText, TanyaAiButton
  hooks/useContent.ts# i18n content hook
  lib/content.ts     # Loader: reads data/*.json into typed SiteContent
  store/             # Redux (UI state)
  types/             # TypeScript interfaces
data/                # Single source of truth for ALL site content (per section, ID/EN)
public/images/       # Tech icons, project images, posters
docs/                # Reference material (saved original site + cloning-website skill guides)
```

## Content Editing

All portfolio data (name, links, projects, experience, education, chat AI, etc.) lives in `data/*.json`, split per section and per locale (`id`/`en` keys). Edit the JSON — no Next.js code changes needed.

## Reference

- Original website: https://www.izaditya.my.id by [@adityaimamz](https://github.com/adityaimamz)
- Saved HTML snapshot + assets: `docs/`
- Website-cloning skill guide (kept for reuse): `docs/cloning-website/`
