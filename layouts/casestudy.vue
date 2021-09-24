<template>
  <div>
    <home-nav></home-nav>

    <nuxt />

    <home-footer></home-footer>
  </div>
</template>

<script>
import NavHome from '@/components/NavHome.vue'
import HomeFooter from '@/components/HomeFooter.vue'

export default {
  computed: {
    getPath() {
      return this.$route.fullPath
    }
  },
  components: {
    'home-nav': NavHome,
    'home-footer': HomeFooter
  }
}
</script>
