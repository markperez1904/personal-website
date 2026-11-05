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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// Netlify's build network occasionally rate-limits or drops a request. Retry
// transient failures instead of failing the whole static build.
async function retryingFetch(input, init) {
  let lastError

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(input, init)

      if (
        (response.status === 429 || response.status >= 500) &&
        attempt < 2
      ) {
        await sleep(500 * (attempt + 1))
        continue
      }

      return response
    } catch (error) {
      lastError = error

      if (attempt < 2) {
        await sleep(500 * (attempt + 1))
        continue
      }

      throw error
    }
  }

  throw lastError
}

export const prismic = createClient(PRISMIC_REPOSITORY, {
  fetch: retryingFetch
})

// The build renders every page. Fetch the full post set once and reuse it for
// post pages, the index summaries, the sidebar, and the homepage count.
let allPostsPromise = null

export function getAllPosts() {
  if (!allPostsPromise) {
    allPostsPromise = prismic
      .getAllByType('blog_posts', {
        lang: PRISMIC_LANG,
        orderings: 'my.blog_posts.date desc'
      })
      .catch(error => {
        allPostsPromise = null
        throw error
      })
  }

  return allPostsPromise
}

export async function getPostSummaries() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    ...post,
    data: {
      title: post.data.title,
      image: post.data.image,
      date: post.data.date,
      description: post.data.description
    }
  }))
}

export async function getRecentPosts(limit = 3) {
  const posts = await getAllPosts()

  return {
    results: posts.slice(0, limit).map(post => ({
      ...post,
      data: {
        image: post.data.image,
        title: post.data.title
      }
    })),
    page: 1,
    results_per_page: limit,
    results_size: Math.min(limit, posts.length),
    total_results_size: posts.length,
    total_pages: 1
  }
}

export async function getPost(uid) {
  const posts = await getAllPosts()
  const post = posts.find(candidate => candidate.uid === uid)

  if (!post) {
    throw new Error(`Prismic post not found: ${uid}`)
  }

  return post
}

export async function getPostCount() {
  const posts = await getAllPosts()
  return posts.length
}
