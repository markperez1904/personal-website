<template>
  <span class="typewriter">{{ display }}</span><span
    class="typewriter-caret"
    aria-hidden="true"
  ></span>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  text: {
    type: Array,
    default: () => []
  },
  typeDelay: {
    type: Number,
    default: 70
  },
  eraseDelay: {
    type: Number,
    default: 250
  },
  preTypeDelay: {
    type: Number,
    default: 70
  },
  preEraseDelay: {
    type: Number,
    default: 2000
  }
})

const display = ref('')
let timer = null
let index = 0
let char = 0
let deleting = false

function clearTimer() {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

function schedule(delay) {
  clearTimer()
  timer = setTimeout(tick, delay)
}

function tick() {
  const items = props.text.filter(Boolean)
  if (!items.length) {
    display.value = ''
    return
  }

  if (index >= items.length) index = 0

  const current = items[index]

  if (!deleting) {
    char++
    display.value = current.slice(0, char)

    if (char >= current.length) {
      deleting = true
      schedule(props.preEraseDelay)
    } else {
      schedule(props.typeDelay)
    }
    return
  }

  char--
  display.value = current.slice(0, Math.max(char, 0))

  if (char <= 0) {
    deleting = false
    index = (index + 1) % items.length
    schedule(props.preTypeDelay)
  } else {
    schedule(props.eraseDelay)
  }
}

function reset() {
  clearTimer()
  display.value = ''
  index = 0
  char = 0
  deleting = false
  schedule(props.preTypeDelay)
}

onMounted(() => {
  if (props.text.length) schedule(props.preTypeDelay)
})

onBeforeUnmount(clearTimer)

watch(() => props.text, reset, { deep: true })
</script>

<style scoped>
.typewriter-caret {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  margin-left: 3px;
  vertical-align: -0.15em;
  background-color: currentColor;
  animation: caret-blink 1s step-end infinite;
}

@keyframes caret-blink {
  50% {
    opacity: 0;
  }
}
</style>
