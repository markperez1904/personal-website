<template>
  <div>
    <nuxt />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  computed: {
    getPath() {
      return this.$route.fullPath
    }
  },
  components: {
    'app-footer': Footer
  }
}
</script>
