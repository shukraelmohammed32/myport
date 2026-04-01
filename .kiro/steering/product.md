# Product

This is a personal developer portfolio for Shukreal, a full-stack developer based in Dire Dawa, Ethiopia. The site showcases projects, skills, and contact information, and includes a client-side admin panel for managing portfolio projects.

## Pages

- `/` — Home: hero, about (compact), skills, featured projects, contact (compact)
- `/about` — Full about section
- `/projects` — Full project listing
- `/contact` — Contact form/section
- `/admin` — Client-side project manager (add/delete projects stored in localStorage)

## Key Content Sources

- `data/site.ts` — Personal info, navigation, social links, stats, about text, principles
- `data/projects.ts` — Default project list (seed data)
- `data/skills.ts` — Skills and categories
- `lib/projectStore.ts` — localStorage-backed project CRUD (falls back to `data/projects.ts`)

## Notes

- No backend or database — all dynamic data is stored in the browser's localStorage
- The admin page is unprotected (client-side only, no auth)
- Profile image and resume PDF are served from `public/`
