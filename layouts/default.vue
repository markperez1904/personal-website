<template>
  <div>
    <app-homenav v-if="getPath == '/'"></app-homenav>
    <app-navbar v-else></app-navbar>

    <nuxt />
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeNav from '@/components/HomeNav.vue'

export default {
  computed: {
    getPath() {
      return this.$route.fullPath
    }
  },
  components: {
    'app-navbar': NavBar,
    'app-footer': Footer,
    'app-homenav': HomeNav
  }
}
</script>

<style>
/* Main font on website */
body {
  font-family: 'Oxygen', sans-serif;
  color: #304455;
}

/* Font on unix commands */
pre {
  font-family: monospace;
  font-size: 14px;
  margin: 0 0 1rem;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  border-radius: 0.5rem;
}

/* Font on <code> tags */
code {
  font-family: monospace;
  font-size: 14px;
  background-color: #333;
  color: #fff;
  padding: 0.125rem 0.25rem;
  border-radius: 5px;
}
</style>
