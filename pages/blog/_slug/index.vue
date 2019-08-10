<!-- pages/blog/_slug/index.vue -->
<template>
  <div class="container">
    <section class="columns">
      <!-- Blog Post -->
      <article class="column is-8">
        <h1>{{ blog_posts.title[0].text }}</h1>

        <h2>
          <strong>{{ blog_posts.description[0].text }}</strong>
        </h2>

        <img :src="blog_posts.image.url" :alt="blog_posts.image.alt" />
        <br />

        <div v-html="PrismicDOM.RichText.asHtml(blog_posts.content, linkResolver, htmlSerializer)"></div>
      </article>

		<!-- Side Bar -->
      <aside class="section">
        <app-sidebar></app-sidebar>
      </aside>
    </section>
  </div>
</template>

<script>
import { linkResolver, htmlSerializer } from '@/plugins/prismic-config.js'
import PrismicDOM from 'prismic-dom'
import gql from 'graphql-tag'

import SideBar from '@/components/SideBar.vue'

const post = gql`
  query blog_posts($uid: String!) {
    blog_posts(uid: $uid, lang: "en-us") {
      title
      description
      image
      content
    }
  }
`

export default {
  components: {
    'app-sidebar': SideBar
  },

  data() {
    return {
      PrismicDOM,
      linkResolver,
      htmlSerializer,
      blog_posts: '' // reqiured in order to set the meta tag
    }
  },

  head() {
    return {
      title: this.blog_posts.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog_posts.description[0].text
        }
      ]
    }
  },

  apollo: {
    blog_posts: {
      query: post,

      variables() {
        return {
          uid: this.$route.params.slug
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 2rem;
}

h1 {
  font-size: 30px;
  padding-top: 2rem;
}

h2 {
  margin: 2rem 0;
}

aside {
  margin: 1rem;
  margin-top: 3rem;
}

h1,
h2 {
  text-align: center;
}
</style>
