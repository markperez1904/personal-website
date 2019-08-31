<template>
  <div id="portfolio" class="hero is-black is-medium">
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
      content:
        'SEO Specialist and Front-End Developer. Self-learning enthusiast in tech. Producing content on YouTube.'
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
