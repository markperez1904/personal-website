import VueSilentbox from 'vue-silentbox'
import 'vue-silentbox/dist/style.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueSilentbox)
})
