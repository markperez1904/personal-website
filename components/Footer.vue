<template>
  <div class="container has-text-centered">
    <hr />
    <footer class="columns is-centered">
      <!-- YouTube -->
      <a
        href="https://www.youtube.com/channel/UCCZ1Yo4NOdWW03jamsNFA8w/videos"
        target="_blank"
        aria-label="youtube"
        rel="noopener"
      >
        <i class="icon-youtube"></i>
      </a>

      <!-- Odysee (LBRY) -->
      <a
        href="https://odysee.com/@markster1904:7"
        target="_blank"
        aria-label="odysee"
        rel="noopener"
      >
        <i class="icon-odysee"></i>
      </a>

      <!-- GitHub -->
      <a
        href="https://github.com/markperez1904"
        target="_blank"
        aria-label="github"
        rel="noopener"
      >
        <i class="icon-github"></i>
      </a>

      <!-- Paypal -->
      <a
        href="https://www.paypal.com/paypalme2/markperez1904"
        target="_blank"
        aria-label="paypal"
        rel="noopener"
      >
        <i class="icon-paypal"></i>
      </a>
    </footer>
    <footer class="columns is-centered">
      <small class="column is-narrow">&copy; {{ getYear }} Mark Perez</small>
      <small class="column is-narrow">
        Made with 💚 &nbsp;in
        <a
          class="framework"
          href="https://nuxtjs.org"
          target="_blank"
          aria-label="nuxt"
          rel="noopener"
          >Nuxt</a
        >
      </small>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
i {
  font-size: 28px;
  margin-right: 10px;
}

a {
  text-decoration: unset;
}

.framework {
  font-weight: bold;
}
</style>
