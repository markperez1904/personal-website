import { asText } from '@prismicio/client'
import { getAllPostsForServer } from '../utils/prismic'

function toText(field) {
  return field ? asText(field) : ''
}

export default defineEventHandler(async () => {
  const posts = await getAllPostsForServer()

  return posts
    .filter(post => post.uid)
    .map(post => ({
      uid: post.uid,
      text: [
        toText(post.data.title),
        toText(post.data.description),
        toText(post.data.content)
      ]
        .filter(Boolean)
        .join(' ')
        .replace(/\s+/g, ' ')
        .toLowerCase()
    }))
})
