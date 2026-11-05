import { asText, createClient } from '@prismicio/client'

function toText(field) {
  return field ? asText(field) : ''
}

export default defineEventHandler(async () => {
  const client = createClient('marks-personal-website')
  const posts = await client.getAllByType('blog_posts', {
    lang: 'en-us',
    orderings: 'my.blog_posts.date desc'
  })

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
