<template>
  <ins
    v-if="publisher"
    class="adsbygoogle"
    style="display: block"
    :data-ad-client="publisher"
    :data-ad-slot="adSlot"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  adSlot: {
    type: String,
    required: true
  }
})

const publisher = useRuntimeConfig().public.googleAdsensePublisher

onMounted(() => {
  if (!publisher) return

  try {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (error) {
    // Ad blockers and failed ad requests should never break the page.
  }
})
</script>
