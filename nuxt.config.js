const PrismicConfig = require('./prismic.config')

export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Mark Perez',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Vue Developer and self-learning enthusiast on technology. Producing content on YouTube.'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/tux_penguin.ico' }],

		script: [
			{
				innerHTML:
					'{ window.prismic = { endpoint: "' +
					PrismicConfig.apiEndpoint +
					'"} }'
			},
			{ src: '//static.cdn.prismic.io/prismic.min.js' }
		],
		__dangerouslyDisableSanitizers: ['script']
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: ['@/static/css/main.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'./plugins/smoothScroll.js',
		'~/plugins/link-resolver.js',
		'~/plugins/html-serializer.js',
		'~/plugins/prismic-vue.js'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: ['nuxt-buefy', 'vue-scrollto/nuxt'],
	/*
	 ** Build configuration
	 */
	build: {
		extend(config, ctx) {
			config.resolve.alias['vue'] = 'vue/dist/vue.common'
		}
	}
}
