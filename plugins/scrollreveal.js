// In main.js
import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal)

// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1,
  distance: '10px',
  mobile: false,
})
