<template>
  <div id="portfolio" class="hero is-light is-bold is-medium">
    <h3 class="hero-head has-text-centered">Portfolio</h3>
    <header class="hero-body container">
      <app-portfolio></app-portfolio>
    </header>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'

export default {
  data() {
    return {
      title: 'Mark Perez',
      description:
        'SEO Specialist and Self-learning enthusiast in technology. Producing content on YouTube.'
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:type', // open graph type
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'apple-mobile-web-app-title', // open graph mobile web app title
          name: 'apple-mobile-web-app-title',
          content: this.title
        },
        {
          hid: 'og:title', // open graph title
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description', // open graph description
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url', // open graph url
          name: 'og:url',
          content: 'https://markperez.dev' + this.$route.fullPath
        },
        {
          hid: 'og:image', // open graph image
          name: 'og:image',
          content: 'https://markperez.dev/_nuxt/img/588a4a6.png'
        },
        {
          hid: 'og:image:secure_url', // open graph image secure url
          name: 'og:image:secure_url',
          content: 'https://markperez.dev/_nuxt/img/588a4a6.png'
        }
      ]
    }
  },

  components: {
    'app-portfolio': Portfolio
  }
}
</script>

<style scoped>
.hero-head {
  margin-top: 2rem;
  font-size: 2.3rem;
  letter-spacing: 15px;
}
</style>
