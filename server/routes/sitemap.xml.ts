import { getAllPostsForServer } from '../utils/prismic'

const SITE_URL = 'https://markperez.dev'

export default defineEventHandler(async event => {
  const posts = await getAllPostsForServer()

  const paths = [
    ...posts.filter(post => post.uid).map(post => `/blog/${post.uid}/`),
    '/',
    '/blog/',
    '/contact/',
    '/gear/'
  ]

  const urls = paths
    .map(path => `<url><loc>${SITE_URL}${path}</loc></url>`)
    .join('')

  setHeader(event, 'Content-Type', 'application/xml')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
