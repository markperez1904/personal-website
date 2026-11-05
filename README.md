# Mark's Personal Website

My personal website, built with **Nuxt 4.6.4** and statically generated for
Netlify. Blog content is managed in [Prismic](https://prismic.io) and read
through Prismic's REST API with `@prismicio/client`.

## Setup

- Clone the repo
- `cd` into the directory
- Use Node.js 22 (see `.nvmrc`)
- run `npm install`
- run `npm run dev` to view live changes

## Build

```sh
npm run generate
```

The static site is written to `.output/public`. The build fails on prerender
errors, and `scripts/verify-dist.js` checks that every blog post listed in
`sitemap.xml` was actually generated.

Netlify runs `npm run generate` and publishes `.output/public` (see
`netlify.toml`).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `GOOGLE_ANALYTICS` | Optional GA4 (`G-…`) or Google Ads (`AW-…`) measurement ID. Universal Analytics `UA-…` IDs are ignored because Google shut that service down. |
| `GOOGLE_ADSENSE_PUBLISHER` | Optional AdSense publisher ID, e.g. `ca-pub-…`. |

Both are exposed as public runtime config and baked into the static build.

## Project layout

```
app/
  components/     Vue 3 components (NavBar, DisqusComments, Typewriter, …)
  layouts/        Default layout
  lib/            Prismic client + rich text/SEO helpers
  pages/          Routes
  plugins/        Client-only AdSense, gtag, and SilentBox plugins
server/routes/    Prerendered sitemap.xml route
public/           Static assets, fonts, icons, robots.txt, ads.txt
scripts/          Post-generate verification
```

Blog posts are fetched at build time; the blog index ships all post summaries
so pagination is instant. Full-text search lazily fetches a small prerendered
`search-index.json`. Disqus comments are loaded client-side with the Prismic
document ID, so existing threads are preserved.
