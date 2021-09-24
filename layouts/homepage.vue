<template>
  <div>
    <nuxt />
    <!-- <app-footer></app-footer> -->
    <home-footer></home-footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import HomeFooter from '@/components/HomeFooter.vue'

export default {
  computed: {
    getPath() {
      return this.$route.fullPath
    }
  },
  components: {
    'app-footer': Footer,
    'home-footer': HomeFooter
  }
}
</script>
