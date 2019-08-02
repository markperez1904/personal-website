<template>
  <nuxt-link :to="link">
    <h2 class="title is-4">{{ $prismic.richTextAsPlain(post.data.title) }}</h2>
    <img :src="post.data.image.url" alt />
  </nuxt-link>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'

export default {
  props: ['post'],
  data() {
    return {
      link: ''
    }
  },
  name: 'app-blogpost',
  created() {
    this.link = LinkResolver(this.post)
  }
}
</script>

<style scoped>
</style>
