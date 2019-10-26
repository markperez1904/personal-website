import Vue from 'vue'

if (process.client) {
  var VueTyperPlugin = require('vue-typer').default
  Vue.use(VueTyperPlugin)
}
