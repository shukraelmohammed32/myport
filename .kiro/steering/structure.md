# Project Structure

## Directory Layout

```
app/                  # Next.js App Router pages
  layout.tsx          # Root layout (fonts, metadata, theme init, header/footer)
  page.tsx            # Home page — composes section components
  about/page.tsx
  projects/page.tsx
  contact/page.tsx
  admin/page.tsx      # Client-side project manager

components/           # All UI components (no subdirectories)
  SiteHeader.tsx      # Re-exports from Navbar.tsx
  SiteFooter.tsx
  Navbar.tsx
  Hero.tsx / HeroSection.tsx
  AboutSection.tsx
  SkillsSection.tsx / Skills.tsx
  ProjectsSection.tsx / ProjectCard.tsx
  ContactSection.tsx
  Container.tsx       # Max-width wrapper (max-w-6xl, responsive padding)
  FadeIn.tsx          # Framer Motion scroll-reveal wrapper
  SectionTitle.tsx    # Eyebrow + title + description pattern
  ScrollProgress.tsx
  ThemeToggle.tsx
  ButtonLink.tsx

data/                 # Static content / seed data (plain TS exports)
  site.ts             # siteConfig, navigation, socialLinks, aboutParagraphs, etc.
  projects.ts         # Default Project[] array
  skills.ts           # Skill categories and items

lib/                  # Utility modules
  cn.ts               # clsx wrapper
  projectStore.ts     # localStorage CRUD for projects

types/
  portfolio.ts        # Shared TypeScript types (Project, Skill, NavItem, etc.)

styles/
  globals.css         # Tailwind directives, CSS variables (design tokens), component layer

public/
  images/             # Static images (profile photo, project previews, skill icons)
  Shukrael_Resume.pdf
```

## Conventions

- Pages live in `app/` and compose section-level components — keep page files thin
- All reusable UI goes in `components/` — flat structure, no subdirectories
- Shared types are defined in `types/portfolio.ts` — add new types there
- Static/seed content goes in `data/` — components import from here, not inline
- Use the `@/` path alias for all internal imports (never relative `../../`)
- Client components get `"use client"` at the top; prefer server components by default
- Wrap page sections in `<Container>` for consistent max-width and padding
- Use `<FadeIn>` for scroll-reveal animations on section content
- Use `<SectionTitle eyebrow="..." title="..." description="..." />` for section headings
- CSS variables (`var(--ink)`, `var(--surface)`, etc.) for colors — avoid hardcoded hex in components
- Use `.panel` / `.panel-muted` CSS classes for card/box surfaces
- Use `.chip` for tech stack badge pills
