import { createClient } from '@prismicio/client'

export const SITE_URL = 'https://markperez.dev'
export const PRISMIC_REPOSITORY = 'marks-personal-website'
export const PRISMIC_LANG = 'en-us'
export const PLACEHOLDER_IMAGE = '/images/blog-placeholder.png'

export const POST_SUMMARY_FIELDS = [
  'blog_posts.title',
  'blog_posts.image',
  'blog_posts.date',
  'blog_posts.description'
]

export const prismic = createClient(PRISMIC_REPOSITORY)

// The static build renders 37 post pages. Cache the queries that are identical
// for every page so the build doesn't hit Prismic 30+ times for recent posts.
let summariesPromise = null
let countPromise = null
const recentPromises = new Map()

export function getPostSummaries() {
  if (!summariesPromise) {
    summariesPromise = prismic
      .getAllByType('blog_posts', {
        lang: PRISMIC_LANG,
        orderings: 'my.blog_posts.date desc',
        fetch: POST_SUMMARY_FIELDS
      })
      .catch(error => {
        summariesPromise = null
        throw error
      })
  }

  return summariesPromise
}

export function getRecentPosts(limit = 3) {
  if (!recentPromises.has(limit)) {
    const promise = prismic
      .getByType('blog_posts', {
        lang: PRISMIC_LANG,
        pageSize: limit,
        orderings: 'my.blog_posts.date desc',
        fetch: ['blog_posts.image', 'blog_posts.title']
      })
      .catch(error => {
        recentPromises.delete(limit)
        throw error
      })

    recentPromises.set(limit, promise)
  }

  return recentPromises.get(limit)
}

export function getPost(uid: string) {
  return prismic.getByUID('blog_posts', uid, { lang: PRISMIC_LANG })
}

export function getPostCount() {
  if (!countPromise) {
    countPromise = prismic
      .getByType('blog_posts', {
        lang: PRISMIC_LANG,
        pageSize: 1,
        fetch: ['blog_posts.title']
      })
      .then(response => response.total_results_size)
      .catch(error => {
        countPromise = null
        throw error
      })
  }

  return countPromise
}
