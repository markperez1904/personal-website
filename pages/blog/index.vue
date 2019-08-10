<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ content }}</h2>
    <section class="columns is-multiline is-centered">
      <article
        v-for="post in allBlog_postss.edges"
        :key="post.node._meta.id"
        class="box column is-3-widescreen is-4-tablet"
      >
        <nuxt-link :to="`/blog/${post.node._meta.uid}`">
          <img :src="post.node.image.url" :alt="post.node.image.alt" />
          <h3 class="title is-6">{{post.node.title[0].text}}</h3>
        </nuxt-link>
      </article>
      <p></p>
    </section>

    <!-- I want to PAGINATE my posts here -->
    <nav class="pagination column">
      <a class="pagination-previous">
        <b-button class="is-black">&#x3c;</b-button>
      </a>

      <a class="pagination-next">
        <b-button class="is-black">&#x3e;</b-button>
      </a>
    </nav>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import PrismicDOM from 'prismic-dom'

const posts = gql`
  {
    allBlog_postss(sortBy: title_ASC) {
      edges {
        node {
          title
          image
          content
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
  data() {
    return {
      title: 'Blog',
      content:
        'Welcome to my blog. Browse through a streamline of tech tutorials that suits you needs.'
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

  apollo: {
    allBlog_postss: {
		 query: posts
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
