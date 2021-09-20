<template>
  <div class="container has-text-centered">
    <hr />
    <!-- social media icon links -->
    <footer class="columns is-centered start">
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

    <!-- legal pages and copyright message -->
    <footer class="columns is-centered end">
      <small class="column is-narrow">
        <n-link to="/terms/" class="legal">Terms of Service</n-link>
      </small>
      <small class="column is-narrow">
        <n-link to="/privacy/" class="legal">Privacy Policy</n-link>
      </small>
      <small class="column is-narrow">&copy;{{ getYear }} MP Digital</small>
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

small .legal {
  color: #2f495e;
}

.framework {
  font-weight: bold;
}

.start {
  margin-top: 1rem;
}

.end {
  margin-bottom: 1rem;
}
</style>
