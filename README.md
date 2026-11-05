# Mark's Personal Website
This is my personal website built with Nuxt.js, with each page statically generated.

I implemented a headless CMS called Prismic.io to manage the blog content on my webpages.

I used GraphQL with Apollo Client to query each post and parsed what I wanted.

### Setup
- Clone the repo
- `cd` into the directory
- Use Node.js 22 (see `.nvmrc`)
- run `npm install`
- run `npm run dev` to view live changes.

`npm run generate` fails on any page-generation error and verifies that every
blog post listed in `sitemap.xml` was written to `dist/`. The Netlify build
command is `npm run generate` and publishes `dist/`.
