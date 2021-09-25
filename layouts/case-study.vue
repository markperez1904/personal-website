<template>
  <div>
    <nuxt />

    <app-footerlogo></app-footerlogo>
  </div>
</template>

<script>
import FooterLogo from '@/components/FooterLogo.vue'

export default {
  computed: {
    getPath() {
      return this.$route.fullPath
    }
  },
  components: {
    'app-footerlogo': FooterLogo
  }
}
</script>
