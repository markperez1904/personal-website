<template>
  <div class="container">
    <nuxt />
    <app-header></app-header>
    <app-navbar></app-navbar>
    <hr>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    'app-header': Header,
    'app-navbar': NavBar
  }
}
</script>

<style scoped>
ul {
  display: flex;
}
</style>
