<template>
  <div>
    <section class="columns is-multiline is-vcentered is-centered">
      <!-- Email Lead Generator -->
      <aside class="column is-narrow is-12-widescreen is-4-tablet">
        <p class="sidebar-title box">Free Linux Guide</p>
        <app-email></app-email>
      </aside>

      <!-- 3 Recent Blog Posts -->
      <aside class="column is-narrow is-12-widescreen is-4-tablet">
        <p class="sidebar-title box">Recent Posts</p>
        <article
          v-for="post in allBlog_postss.edges"
          :key="post.node._meta.id"
          class=""
        >
          <nuxt-link :to="`/blog/${post.node._meta.uid}/`">
            <img
              class="post-image"
              :src="post.node.image.url"
              :alt="post.node.image.alt"
            />
          </nuxt-link>
        </article>
      </aside>

      <!-- AdSense component -->
      <aside class="column is-narrow is-12-widescreen is-12-desktop ">
        <adsbygoogle ad-slot="2763616750" />
      </aside>
    </section>
  </div>
</template>

<script>
import Email from '@/components/Email.vue'
import gql from 'graphql-tag'

const recentPosts = gql`
  query {
    allBlog_postss(lang: "en-us", sortBy: date_DESC, first: 3) {
      edges {
        node {
          image
          _meta {
            uid
            id
          }
        }
      }
    }
  }
`

export default {
  components: {
    'app-email': Email
  },

  apollo: {
    allBlog_postss: {
      query: recentPosts,
      fetchPolicy: 'cache-and-network'
    }
  }
}
</script>

<style scoped>
.section {
  padding-bottom: 1rem;
}

.sidebar-title {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  background-color: #edf2f7;
}

.post-image {
  transition: all 0.2s;
  margin-bottom: 0.5rem;
}

.post-image {
  border-radius: 6px;
  width: 90%;
}

.post-image:hover {
  transition: all 0.2s;
  transform: scale(1.03);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.box {
  padding: 0.3rem;
}

.column {
  text-align: center;
}
</style>
