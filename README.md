# Junaid Iqbal — Portfolio

Personal site and CV for [Junaid Iqbal](https://github.com/Junaid-Dawar-88), full stack
developer in Peshawar, Pakistan.

**Live:** https://junaid-dawar-portfolio.vercel.app

## Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | Next.js 16 (App Router), React 19        |
| Language  | TypeScript 5                             |
| Styling   | Tailwind CSS 4 with a CSS-variable token layer |
| Motion    | Motion (`motion/react`) + CSS scroll-driven animation |
| Fonts     | Sora, Instrument Serif, Inter, JetBrains Mono (`next/font`) |
| PDF       | jsPDF — the CV generates itself in the browser |
| Package manager | pnpm                               |

## Design

The visual system is **Aurora Editorial**: a warm near-black canvas lit by three
accents — iris, aqua and flare — over a film-grain texture. Light mode is warm
paper rather than clinical white. Every colour is a CSS custom property defined
once in [`app/globals.css`](app/globals.css) and exposed to Tailwind through
`@theme inline`, so the whole palette can be retuned from one block.

Notes on the implementation:

- **Content entrances run in JS** (Motion's `whileInView`) so they work in every
  engine. Native CSS scroll-driven animation (`animation-timeline: view()`) is
  used only for decoration — the drifting quote card and the growing rail in the
  "How I work" section — behind an `@supports` guard, so browsers without it
  simply see the static version.
- **Motion is opt-out.** `prefers-reduced-motion: reduce` stops the marquee, the
  ribbon drift and every transition.
- **`color-scheme` is declared in the viewport export**, so the browser themes
  its own scrollbars and form controls before first paint, and an inline script
  applies the stored theme before hydration to avoid a flash.
- **Typography** uses `text-wrap: balance` on headings and `text-wrap: pretty` on
  body copy, scoped rather than global — both algorithms cost more than the
  default greedy wrap.

## Content

Projects, stack and CV data all come from one module,
[`app/lib/data.ts`](app/lib/data.ts). The site and the generated PDF read the same
objects, so they cannot drift apart. Each project's tech list reflects what the
repository actually ships.

To add a project, append to `projects` in that file — the filter counts, the
featured grid and the index list all derive from it.

## Structure

```
app/
├─ lib/data.ts          profile, skills, projects, CV content
├─ lib/motion.ts        shared easing and variants
├─ globals.css          design tokens, signature surfaces, keyframes
├─ components/          aurora graphics, reveal, section heading, theme toggle
├─ header/              nav with active-section tracking + scroll progress
├─ hero/                name, portrait, counters
├─ text-movement/       counter-running stack marquee
├─ approach/            how-I-work rail and pull quote
├─ skills/              bento grid of the stack
├─ select-project/      filterable featured grid + project index
├─ footer/              contact
└─ cv/                  CV sheet and the jsPDF generator
```

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build      # production build
pnpm lint       # eslint
```

## Deployment

Deployed on Vercel. pnpm is the only package manager used — do not add a
`package-lock.json` or `yarn.lock`, as a second lockfile breaks the Vercel build.
