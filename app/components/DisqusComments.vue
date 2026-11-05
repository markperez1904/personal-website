<template>
  <div class="comments">
    <div id="disqus_thread"></div>
    <p v-if="failed" class="disqus-fallback">
      Comments are temporarily unavailable. Please try again later.
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  shortname: {
    type: String,
    required: true
  },
  identifier: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
})

const failed = ref(false)

function disqusConfig() {
  this.page.url = props.url
  this.page.identifier = props.identifier
  this.page.title = props.title
}

function load() {
  if (!import.meta.client) return

  failed.value = false
  window.disqus_config = disqusConfig

  if (window.DISQUS) {
    window.DISQUS.reset({
      reload: true,
      config: disqusConfig
    })
    return
  }

  if (document.getElementById('disqus-embed')) return

  const script = document.createElement('script')
  script.id = 'disqus-embed'
  script.src = `https://${props.shortname}.disqus.com/embed.js`
  script.async = true
  script.setAttribute('data-timestamp', String(Date.now()))
  script.onerror = () => {
    failed.value = true
  }
  document.head.appendChild(script)
}

onMounted(load)

watch(
  () => [props.identifier, props.url],
  () => load()
)
</script>

<style scoped>
.comments {
  margin-top: 2rem;
}

.disqus-fallback {
  margin-top: 1rem;
  color: #718096;
  font-size: 14px;
}
</style>
