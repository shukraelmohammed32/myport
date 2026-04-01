# Tech Stack

## Framework & Runtime
- **Next.js 15** (App Router, React 19, strict mode enabled)
- **TypeScript 5** — strict mode, no `allowJs`, path alias `@/*` maps to project root

## Styling
- **Tailwind CSS 3** with `darkMode: "class"`
- Custom design tokens via CSS variables (defined in `styles/globals.css`)
- Utility classes extended in `@layer components`: `.section-gap`, `.panel`, `.panel-muted`, `.chip`, `.input-field`, `.link-hover`, `.glow-ring`
- Fonts: `Manrope` (sans) and `Space Grotesk` (display) via `next/font/google`, exposed as CSS vars `--font-sans` / `--font-display`

## Animation
- **Framer Motion 12** — used via the `FadeIn` component; always respects `useReducedMotion`

## Icons
- **Lucide React** — use named imports, e.g. `import { Github } from "lucide-react"`

## Utilities
- **clsx** — wrapped in `lib/cn.ts` as `cn(...inputs)` for conditional class merging

## Images
- Next.js `<Image>` for static assets; `formats: ["image/avif", "image/webp"]` enabled in `next.config.js`
- Fall back to `<img>` only for data URIs (base64 uploads)

## Common Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint via next lint
npm run typecheck  # tsc --noEmit (type check without emitting)
```
