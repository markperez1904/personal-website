<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ content }}</h2>
    <section class="columns is-multiline is-centered">
      <article
        class="post box column is-3-widescreen is-4-tablet"
        v-for="(post, index) in posts"
        :key="index"
      >
        <nuxt-link :to="`/blog/${post.uid}`">
          <img :src="post.data.image.url" alt />
          <h3 class="title is-6">{{ Dom.RichText.asText(post.data.title) }}</h3>
        </nuxt-link>
      </article>
    </section>

    <!-- I want to PAGINATE my posts here -->
    <nav class="pagination column">
      <nuxt-link :to="`?page=${currentPage}`" class="pagination-previous">
        <b-button @click="previousPage" class="is-black">&#x3c;</b-button>
      </nuxt-link>

      <nuxt-link :to="`?page=${currentPage}`" class="pagination-next">
        <b-button @click="nextPage" class="is-black">&#x3e;</b-button>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import { initApi, generatePageData } from '@/prismic.config'

export default {
  watchQuery: ['page'],

  data() {
    return {
		Dom: PrismicDOM,
		currentPage: 1,
      title: 'Blog',
      content:
        'Welcome to my blog. Browse through a streamline of tech tutorials that suits you needs.'
    }
  },

  methods: {
    nextPage() {
      this.currentPage++
    },
    previousPage() {
      if (this.currentPage > 1) this.currentPage--
      else this.currentPage
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
  },

  asyncData(context) {
    if (context.payload) {
      return generatePageData('blog_page', context.payload)
    } else {
      return initApi().then(api => {
        return api
          .query(Prismic.Predicates.at('document.type', 'blog_posts'), {
            pageSize: 2,
            page: 2
          })
          .then(response => {
            return generatePageData('blog_page', response.results)
          })
      })
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
.title {
  text-align: center;
  padding: 1rem 0;
}

.pagination {
  margin: 1rem;
}
.button {
  font-weight: bold;
}
</style>
