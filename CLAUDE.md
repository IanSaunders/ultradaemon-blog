# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start development server (http://localhost:8000)
yarn build      # Production build (outputs to public/)
yarn clean      # Clear Gatsby cache and public/ directory
```

> Note: All scripts prepend `NODE_OPTIONS=--openssl-legacy-provider` due to a legacy OpenSSL compatibility requirement with this version of Node/Gatsby.

## Architecture

This is a **Gatsby 2** site using the [`@narative/gatsby-theme-novela`](https://github.com/IanSaunders/gatsby-theme-novela) theme (a private fork). All content is local MDX.

### Key directories

- `content/posts/` — Blog posts as MDX files. Each post lives in a dated folder (`YYYY-MM-DD-slug/`) containing `index.mdx` and an `images/` subfolder.
- `content/authors/` — Author definitions in `authors.yml`. At least one author must have `featured: true`.
- `src/@narative/gatsby-theme-novela/` — **Component shadowing** overrides for the theme. Only override what you need here; everything else is served from the theme package.
- `src/gatsby-plugin-theme-ui/` — Theme UI color/style overrides. Extends `novelaTheme` from the theme package.
- `static/` — Files copied verbatim to `public/`. Currently holds a Netlify `_redirects` file.

### Component shadowing

To override any theme component, mirror its path under `src/@narative/gatsby-theme-novela/`. Current overrides:
- `components/Logo/` — Custom SVG text logo
- `components/Navigation/Navigation.Header.tsx` — Header with Tools nav link
- `sections/articles/Articles.Hero.tsx` — Hero heading on homepage
- `sections/articles/Articles.List.Context.tsx` — Grid layout state management

### Adding a new page

Gatsby auto-creates pages from files in `src/pages/`. The Novela theme provides the layout wrapper. Create `src/pages/about.js` (or `.tsx`) to add an `/about` route.

### Post frontmatter

```yaml
---
title: Post Title
author: Ian Saunders   # must match name in authors.yml
date: YYYY-MM-DD
hero: ./images/hero.jpg
excerpt: Short summary (140 char limit)
---
```

### Deployment

Hosted on Netlify. `yarn build` copies `static/_redirects` into `public/` as a post-build step.
