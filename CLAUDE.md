# zachjohnson-dev-next

Personal portfolio site for Zach Johnson — Next.js 16 + TypeScript + Tailwind CSS v4.

## Commands
```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Static build → ./out/
npm run lint     # ESLint
```

## Architecture
- **Static export** (`output: "export"`) deployed to Render
- **File-based content**: MDX files in `content/projects/` and `content/blog/` with gray-matter frontmatter
- **No backend** — pure static site with Formspree for contact form

## Key Paths
- `app/page.tsx` — Homepage (hero, about, skills, featured projects, blog, press, CTA)
- `app/components/` — All shared components (Navbar, Footer, FadeIn, ProjectCard, etc.)
- `lib/content.ts` — MDX parsing helpers (getProjects, getBlogPosts, etc.)
- `lib/skills.ts` — Skills data with simple-icons slugs
- `content/projects/*.mdx` — Project files with frontmatter
- `content/blog/*.mdx` — Blog posts with frontmatter

## Design System
- **Background**: #0a0a0a, **Surface**: #141414, **Border**: #262626
- **Fonts**: Bebas Neue (headings), Space Grotesk (body), JetBrains Mono (code)
- **Images**: `unoptimized: true` for static export
