<template>
  <div>
    <app-homenav v-if="getPath == '/'"></app-homenav>
    <app-navbar v-else></app-navbar>

    <nuxt />
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
