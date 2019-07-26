<template>
  <div id="portfolio" class="hero is-black is-medium">
    <h3 class="hero-head has-text-centered">Portfolio</h3>
    <app-portfolio></app-portfolio>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'
export default {
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
