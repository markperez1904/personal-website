<template>
  <div>
    <home-nav></home-nav>

    <nuxt />

    <app-footer></app-footer>
  </div>
</template>

<script>
import NavHome from '@/components/NavHome.vue'
import Footer from '@/components/Footer.vue'

export default {
  computed: {
    getPath() {
      return this.$route.fullPath
    }
  },
  components: {
    'home-nav': NavHome,
    'app-footer': Footer
  }
}
</script>
