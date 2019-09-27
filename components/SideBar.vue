<template>
  <div>
    <section class="columns is-multiline is-vcentered is-centered">
      <!-- Email Lead Generator -->
      <aside class="column">
        <app-email></app-email>
      </aside>

      <!-- PayPal Link -->
      <aside class="column is-narrow is-12-widescreen is-12-desktop">
        <a
          href="https://www.paypal.com/paypalme2/markperez1904"
          target="_blank"
          aria-label="paypal"
          rel="noopener"
        >
          <img
            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
            alt="PayPal"
          />
        </a>
      </aside>

      <!-- YouTube Subscription Button -->
      <script src="https://apis.google.com/js/platform.js"></script>
      <aside class="column is-narrow is-12-widescreen is-12-desktop">
        <div
          class="g-ytsubscribe"
          data-channelid="UCCZ1Yo4NOdWW03jamsNFA8w"
          data-layout="full"
          data-count="default"
        ></div>
      </aside>

      <!-- AdSense component -->
      <aside class="column is-narrow is-12-widescreen is-12-desktop">
        <adsbygoogle ad-slot="2763616750" />
      </aside>
    </section>
  </div>
</template>

<script>
import Email from '@/components/Email.vue'

export default {
  components: {
    'app-email': Email
  }
}
</script>

<style scoped>
.section {
  padding-bottom: 1rem;
}

.column {
  text-align: center;
}
</style>
