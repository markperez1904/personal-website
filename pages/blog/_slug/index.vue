<!-- pages/blog/_slug/index.vue -->
<template>
  <div class="container">
    <section class="columns is-centered is-multiline">
      <!-- Blog Post -->
      <article class="column is-7">
        <!-- CJ Affiliate Banner -->
        <figure class="banner">
          <a
            href="https://www.kqzyfj.com/click-9174765-10658620"
            target="_blank"
            rel="noopener"
            aria-label="logitech banner"
          >
            <img
              class="box banner-image"
              src="https://www.awltovhc.com/image-9174765-10658620"
              alt="Shop for Keyboards, Mice, and more at Logitech"
            />
          </a>
        </figure>

        <!-- Title, Date, and Description -->
        <h1>{{ blog_posts.title[0].text }}</h1>
        <p class="date">{{ blog_posts.date | moment("MMM DD, YYYY") }}</p>
        <h2>{{ blog_posts.description[0].text }}</h2>

        <!-- Main image -->
        <img class="featured-img" :src="blog_posts.image.url" :alt="blog_posts.image.alt" />
        <br />

        <!-- Blog Content -->
        <div v-html="PrismicDOM.RichText.asHtml(blog_posts.content, linkResolver, htmlSerializer)"></div>

        <!-- Disqus Comment Section -->
        <div class="comments">
          <vue-disqus
            shortname="mark-perez"
            :identifier="blog_posts._meta.id"
            :url="`https://markperez.dev/blog/${getRoute}/`"
          ></vue-disqus>
        </div>
      </article>

      <!-- Side Bar -->
      <aside class="section column is-3-desktop is-7-tablet is-10-touch is-12-mobile">
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
      date
      description
      image
      content
      _meta {
        id
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

.date {
  font-size: 15px;
  color: #666;
  margin: 0 0 30px;
  letter-spacing: 1px;
}

.featured-img {
  margin: 1rem 0;
  border-radius: 6px;
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.banner {
  text-align: center;
  margin: 1rem 0 0 0;
}

.banner .box {
  padding: unset;
  display: inline-block;
}

.banner-image {
  border-radius: 6px;
}

h1 {
  font-size: 30px;
  padding-top: 2rem;
  letter-spacing: 1px;
}

h2 {
  margin: 1rem;
  font-weight: bold;
}

aside {
  margin: 1rem;
  margin-top: 3rem;
}

h1,
h2,
.date {
  text-align: center;
}
</style>
