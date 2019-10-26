<template>
  <div>
    <app-navbar></app-navbar>

    <nuxt />
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  computed: {
    getPath() {
      return this.$route.fullPath
    }
  },
  components: {
    'app-navbar': NavBar,
    'app-footer': Footer,
  }
}
</script>
