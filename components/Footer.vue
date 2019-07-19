<template>
  <div>
    <footer class="container">
      <a href="https://www.youtube.com/channel/UCCZ1Yo4NOdWW03jamsNFA8w/videos" target="_blank">
        <ion-icon name="logo-youtube"></ion-icon>
      </a>
      <a href="https://www.linkedin.com/in/markpereztech/" target="_blank">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
      <a href="https://github.com/markperez1904" target="_blank">
        <ion-icon name="logo-github"></ion-icon>
      </a>
      <a href="https://www.instagram.com/mperez1904/" target="_blank">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </footer>
    <footer class="level">
      <small class="level-left">&copy; {{ getYear }} Mark Perez</small>
      <small>
        Made with &#x2764; in
        <a href="nuxtjs.org" target="_blank">Nuxt</a>
      </small>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: ''
    }
  },
  computed: {
    getYear() {
      return (this.currentYear = new Date().getFullYear())
    }
  }
}
</script>

<style scoped>
footer {
  text-align: center;
}
ion-icon {
  font-size: 28px;
  margin-right: 10px;
}
a {
  color: rgb(29, 88, 29);
}
footer {
	margin: auto 1rem;
}
</style>

