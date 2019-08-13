<!-- pages/blog/_slug/index.vue -->
<template>
  <div class="container">
    <section class="columns is-centered">
      <!-- Blog Post -->
      <article class="column is-7">
        <!-- Title, Date, and Description -->
        <h1>{{ blog_posts.title[0].text }}</h1>
        <h6>{{ blog_posts._meta.firstPublicationDate | moment("MMM DD, YYYY") }}</h6>
        <h2>{{ blog_posts.description[0].text }}</h2>

        <!-- Main image -->
        <img :src="blog_posts.image.url" :alt="blog_posts.image.alt" />
        <br />

        <!-- Blog Content -->
        <div v-html="PrismicDOM.RichText.asHtml(blog_posts.content, linkResolver, htmlSerializer)"></div>

        <!-- Disqus Comment Section -->
        <div class="comments">
          <vue-disqus
            shortname="mark-perez"
            :identifier="blog_posts._meta.id"
            :url="`http://markperez.dev/blog/${getRoute}`"
          ></vue-disqus>
        </div>
      </article>

      <!-- Side Bar -->
      <aside class="column is-4 section">
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
      _meta {
        id
        firstPublicationDate
      }
    }
  }
`

export default {
  components: {
    'app-sidebar': SideBar
  },

  data() {
    return {
      blog_posts: '', // required in order to set the meta field
      PrismicDOM,
      linkResolver,
      htmlSerializer
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

  computed: {
    getRoute() {
      return this.$route.params.slug
    }
  },

  apollo: {
    blog_posts: {
      query: post,

      variables() {
        return {
          uid: this.getRoute
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

img {
  margin: 1rem 0;
}

h1 {
  font-size: 30px;
  padding-top: 2rem;
  letter-spacing: 1px;
  font-weight: bold
}

h2 {
  margin: 1rem;
  font-weight: bold
}

h6 {
  font-size: 15px;
  color: #999;
  margin: 0 0 30px;
  letter-spacing: 1px;
  font-weight: bold
}

aside {
  margin: 1rem;
  margin-top: 3rem;
}

h1,
h2,
h6 {
  text-align: center;
}
</style>
