<template>
  <div>
    <no-ssr>
      <app-homenav v-if="getPath == '/'"></app-homenav>
      <app-navbar v-else></app-navbar>
      <nuxt />
      <hr />
      <app-footer></app-footer>
    </no-ssr>
	 <link href="https://fonts.googleapis.com/css?family=Oxygen&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
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
body {
	font-family: 'Oxygen', sans-serif;
}
</style>
