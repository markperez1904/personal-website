#!/usr/bin/env node

/**
 * Fail the build if the generated site is missing pages that the sitemap
 * advertises. Nuxt 4's prerenderer should already fail on route errors, but
 * this keeps the old Nuxt 2-era guarantee that a partial site is never
 * published.
 *
 * The output directory depends on the Nitro preset:
 *   - local `nuxi generate` -> .output/public
 *   - Netlify (netlify-static preset) -> dist
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(dirname, '..')
const candidates = [
  path.join(rootDir, '.output', 'public'),
  path.join(rootDir, 'dist')
]

const distDir =
  candidates.find(dir => fs.existsSync(path.join(dir, 'index.html'))) ||
  candidates[0]
const errors = []

console.log(`Using generated output: ${path.relative(rootDir, distDir) || '.'}`)

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

// Keep a dist copy for local builds and for Netlify projects whose publish
// directory is still configured to `dist`. On Netlify the preset already
// writes dist, so don't remove the directory we just verified.
const publishDir = path.join(rootDir, 'dist')
if (path.resolve(distDir) !== path.resolve(publishDir)) {
  fs.rmSync(publishDir, { recursive: true, force: true })
  fs.cpSync(distDir, publishDir, { recursive: true })
  console.log('Copied output to dist/ for Netlify publish compatibility.')
}
