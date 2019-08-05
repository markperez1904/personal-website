<!-- pages/blog/_slug/index.vue -->
<template>
  <div class="container">
    <h1 v-html="title"></h1>
    <h2 v-html="description"></h2>
    <img :src="image" /> <br>
    <p v-html="content"></p>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import { initApi, generatePageData } from '@/prismic.config'

export default {
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  },

  asyncData(context) {
    if (context.payload) {
      return generatePageData('blog_posts', context.payload.data)
    } else {
      return initApi().then(api => {
        return api
          .query(
            Prismic.Predicates.at('my.blog_posts.uid', context.params.slug)
          )
          .then(response => {
            return generatePageData('blog_posts', response.results[0].data)
          })
      })
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

img {
  display: block;
  width: 50%;
  margin: 0 auto;
}

h1,
h2 {
  text-align: center;
}
</style>
