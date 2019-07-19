<template>
  <div class="container">
    <app-header></app-header>
    <app-navbar></app-navbar>
    <hr />
    <nuxt />
    <hr />
    <app-footer></app-footer>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-navbar': NavBar,
    'app-footer': Footer
  }
}
</script>

<style>
</style>
