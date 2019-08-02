<template>
  <div class="container">
    <h1 class="blog-title">{{ $prismic.richTextAsPlain(title) }}</h1>
	 <img :src="image" alt="">
    <p>{{ $prismic.richTextAsPlain(content) }}</p>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'

export default {
  name: 'post',
  async asyncData({ params, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })

      const post = await api.getByUID('blog_posts', params.uid)

      // Returns data to be used in template
      return {
		  title: post.data.title,
		  image: post.data.image.url,
        content: post.data.content
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 2rem;
}
</style>
