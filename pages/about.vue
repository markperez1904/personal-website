<template>
  <div>
    <app-about></app-about>
  </div>
</template>

<script>
import About from '@/components/homepage/AboutUs.vue'

export default {
  components: {
    'app-about': About
  },

  data() {
    return {
      title: 'About',
      description:
        'MP Digital is a small SEO Agency empowering beauty salons to be 1st-choice within their region.'
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
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'apple-mobile-web-app-title', // open graph mobile web app title
          name: 'apple-mobile-web-app-title',
          content: this.title
        },
        {
          hid: 'og:title', // open graph title
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description', // open graph description
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url', // open graph url
          property: 'og:url',
          content: 'https://mpdigital.org' + this.$route.fullPath
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content: 'https://mpdigital.org/mp-digital-logo-dark.png'
        }
      ]
    }
  }
}
</script>

<style></style>
