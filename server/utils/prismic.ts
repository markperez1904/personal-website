import { createClient } from '@prismicio/client'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

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

export const serverPrismic = createClient('marks-personal-website', {
  fetch: retryingFetch
})

let postsPromise = null

export function getAllPostsForServer() {
  if (!postsPromise) {
    postsPromise = serverPrismic
      .getAllByType('blog_posts', {
        lang: 'en-us',
        orderings: 'my.blog_posts.date desc'
      })
      .catch(error => {
        postsPromise = null
        throw error
      })
  }

  return postsPromise
}
