#!/usr/bin/env node

/**
 * Fail the build if the generated site is missing pages that the sitemap
 * advertises. Nuxt 4's prerenderer should already fail on route errors, but
 * this keeps the old Nuxt 2-era guarantee that a partial site is never
 * published.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(dirname, '..', '.output', 'public')
const errors = []

const requiredFiles = [
  'index.html',
  'sitemap.xml',
  'search-index.json',
  'blog/index.html',
  'contact/index.html',
  'gear/index.html',
  'thanks/index.html'
]

requiredFiles.forEach(file => {
  const fullPath = path.join(distDir, file)
  if (!fs.existsSync(fullPath)) {
    errors.push(`missing ${file}`)
  }
})

const sitemapPath = path.join(distDir, 'sitemap.xml')

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8')
  const locations = Array.from(
    sitemap.matchAll(/<loc>([^<]+)<\/loc>/g),
    match => match[1]
  )

  const blogPosts = locations.filter(url => {
    const pathname = new URL(url).pathname
    return pathname.startsWith('/blog/') && pathname !== '/blog/'
  })

  if (!blogPosts.length) {
    errors.push('sitemap.xml does not list any blog posts')
  }

  blogPosts.forEach(url => {
    const pathname = decodeURIComponent(new URL(url).pathname)
    const pagePath = path.join(distDir, pathname, 'index.html')

    if (!fs.existsSync(pagePath)) {
      errors.push(
        `sitemap lists ${url} but ${path.relative(distDir, pagePath)} is missing`
      )
    }
  })

  console.log(`Verified ${blogPosts.length} blog post pages from sitemap.xml`)
}

if (errors.length) {
  console.error('\nGenerated site is incomplete:')
  errors.forEach(error => console.error(`  - ${error}`))
  process.exit(1)
}

console.log('Generated site looks complete.')
