<template>
  <div class="mailchimp-popup-anchor" aria-hidden="true"></div>
</template>

<script setup>
import { onMounted } from 'vue'

const MAILCHIMP_CONFIG = {
  baseUrl: 'mc.us20.list-manage.com',
  uuid: '0e646f9cc09aa7c7a450ae8b6',
  lid: 'a5dd106a2e',
  uniqueMethods: true
}

function start() {
  if (typeof window.dojoRequire !== 'function') return

  window.dojoRequire(['mojo/signup-forms/Loader'], (loader) => {
    loader.start(MAILCHIMP_CONFIG)
  })
}

onMounted(() => {
  if (!import.meta.client) return

  if (typeof window.dojoRequire === 'function') {
    start()
    return
  }

  const existing = document.querySelector(
    'script[src*="mailchimp.com/js/signup-forms"]'
  )

  if (!existing) {
    const script = document.createElement('script')
    script.src =
      '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js'
    script.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false')
    script.onload = start
    document.head.appendChild(script)
  }

  // The embed defines dojoRequire asynchronously even after its onload event
  // in some browsers, so poll briefly instead of dropping the popup.
  let attempts = 0
  const interval = setInterval(() => {
    attempts++
    if (typeof window.dojoRequire === 'function') {
      clearInterval(interval)
      start()
    } else if (attempts > 20) {
      clearInterval(interval)
    }
  }, 250)
})
</script>
