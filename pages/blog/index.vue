<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ content }}</h2>
    <section class="columns is-multiline is-centered">
      <article v-for="post in posts" :key="post.id" :post="post" class="box column is-3">
        <app-blogpost :post="post"></app-blogpost>
      </article>
    </section>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config'

export default {
  components: {
    'app-blogpost': BlogPost
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })

      const document = await api.query(
        Prismic.Predicates.at('document.type', 'blog_posts')
      )

      return {
        posts: document.results,
        title: 'Blog',
        content:
          'Welcome to my blog. Browse through a streamline of tech tutorials that suits you needs.'
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  padding-top: 2rem;
}

h2 {
  margin: 2rem 0;
}
.container {
  padding: 0 2rem;
}
.box {
  margin: 1rem;
}
</style>
