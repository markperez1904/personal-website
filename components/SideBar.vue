<template>
  <div>
    <app-email></app-email>

    <script src="https://apis.google.com/js/platform.js"></script>

    <div
      class="g-ytsubscribe"
      data-channelid="UCCZ1Yo4NOdWW03jamsNFA8w"
      data-layout="full"
      data-count="default"
    ></div>
    <br />
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
