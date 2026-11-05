import { createClient } from '@prismicio/client'

const SITE_URL = 'https://markperez.dev'

export default defineEventHandler(async event => {
  const client = createClient('marks-personal-website')
  const posts = await client.getAllByType('blog_posts', {
    lang: 'en-us',
    orderings: 'my.blog_posts.date desc',
    fetch: ['blog_posts.title']
  })

  const paths = [
    ...posts
      .filter(post => post.uid)
      .map(post => `/blog/${post.uid}/`),
    '/',
    '/blog/',
    '/contact/',
    '/gear/',
    '/thanks/'
  ]

  const urls = paths
    .map(path => `<url><loc>${SITE_URL}${path}</loc></url>`)
    .join('')

  setHeader(event, 'Content-Type', 'application/xml')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
