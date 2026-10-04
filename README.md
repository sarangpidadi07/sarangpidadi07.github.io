# Sarang Pidadi — Software Engineering Portfolio

Personal portfolio for showcasing software engineering experience, product work, architecture decisions, and selected projects.

**Live:** https://sarangpidadi07.github.io/

## Focus

The site is intentionally designed as an engineering portfolio rather than a résumé template. It highlights:

- Full-stack product engineering
- Enterprise software experience
- SaaS architecture and multi-tenant systems
- Frontend, backend, APIs, data, security, and product architecture
- Astrybit as an active product-engineering case study
- A responsive, minimal developer-focused interface

## Stack

- Next.js
- React
- TypeScript
- Custom CSS
- Static export
- GitHub Pages

No UI framework, backend, database, authentication layer, or deployment automation is required for the portfolio itself.

## Engineering highlights

### Static-first architecture

The site uses Next.js static export so the production output can be hosted directly on GitHub Pages without a runtime server.

### Responsive system

Desktop and mobile layouts are deliberately designed rather than relying on simple proportional scaling. Navigation, project layouts, engineering workflow, technology groups, and the hero visualization adapt independently across breakpoints.

### System intelligence hero

The hero contains an original neural/attention-inspired engineering visualization representing the product-development loop:

`Understand → Design → Build → Secure → Refine → Scale`

The animation uses lightweight CSS and SVG rather than a visualization library.

### Accessibility

- Keyboard-visible focus states
- Semantic section structure
- Reduced-motion support
- Mobile touch targets
- Responsive navigation
- Minimum layout support down to 320px

## Project structure

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  EngineeringStack.tsx
  LineIcon.tsx
  NeuralBuildSystem.tsx
  Reveal.tsx
  SiteHeader.tsx

public/
  .nojekyll
  robots.txt
  sitemap.xml
```

## Local development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
```

Next.js exports the production site to:

```text
out/
```

## Deployment

Deployment is intentionally manual.

The source lives on `master`; the generated static output is published to `gh-pages`.

No GitHub Actions or CI/CD workflow is used for this portfolio.

## Selected content

- About
- Experience
- Engineering workflow
- Astrybit case study
- Engineering stack
- Education and certifications
- Contact

## Contact

- Portfolio: https://sarangpidadi07.github.io/
- LinkedIn: https://www.linkedin.com/in/sarang-pidadi-144160116/
- GitHub: https://github.com/sarangpidadi07
