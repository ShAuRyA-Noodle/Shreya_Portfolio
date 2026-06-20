# Shreya Punj — Portfolio

A personal portfolio website for Shreya Punj, an Administrative and Medical Administrative Assistant based in the Greater Toronto Area. The site presents her background, experience, skills, education, and selected work in an editorial, motion-led single page, with direct ways to get in touch.

Built as a fast, static single-page application with React, TypeScript, and Vite, styled with Tailwind CSS and animated with Framer Motion and GSAP.

## Highlights

- Single-page editorial layout: hero, about, experience, education, skills, a project carousel, and contact.
- Smooth scrolling (Lenis), custom cursor, grain overlay, scroll progress, and an intro loader for a polished feel.
- Accessible, component-driven UI built on Radix primitives via shadcn/ui.
- Contact is intentionally backend-free: email and phone links only, so there is no form handler, no spam surface, and no API keys to leak.
- Fully typed with TypeScript and unit-tested with Vitest.

## Tech stack

- React 18 and React Router 6
- TypeScript and Vite 6
- Tailwind CSS 3 with the typography plugin
- Radix UI / shadcn/ui components
- Framer Motion, GSAP, and Lenis for motion and smooth scroll
- TanStack Query, React Hook Form, and Zod
- Vitest with Testing Library and jsdom

## Getting started

Requirements: Node.js 18 or newer and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:8080)
npm run dev

# type-aware production build
npm run build

# preview the production build locally
npm run preview
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 8080. |
| `npm run build` | Build the production bundle into `dist/`. |
| `npm run build:dev` | Build using the development mode configuration. |
| `npm run preview` | Serve the built `dist/` bundle locally. |
| `npm run lint` | Run ESLint across the project. |
| `npm run test` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |

## Project structure

```text
src/
  components/
    portfolio/        # page sections (hero, about, experience, etc.)
      shared/         # cursor, smooth scroll, marquee, reveals, and effects
    ui/               # shadcn/ui component library
  hooks/              # reusable React hooks
  lib/                # utilities
  pages/              # Index and NotFound routes
  test/               # Vitest setup and example test
public/
  documents/          # CV and supporting portfolio documents
```

## Deployment

The app is a static SPA and deploys cleanly to any static host. `npm run build` produces the `dist/` directory ready to serve, with a catch-all route that renders the in-app NotFound page.

## Security and maintenance

- Dependabot alerts and automated security fixes are enabled; dependencies are kept current through grouped minor and patch updates.
- `npm audit` is kept at zero known vulnerabilities.
- No secrets are stored in the repository. The published email, phone, and LinkedIn details are intentional public contact information.

## License

This repository is private and not licensed for redistribution. All portfolio content, documents, and copy belong to Shreya Punj.
