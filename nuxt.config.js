const Prismic = require('prismic-javascript')
import { initApi } from './prismic.config'

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
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/tux_penguin.ico' }]
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
	plugins: ['./plugins/smoothScroll.js'],
	/*
	 ** Nuxt.js modules
	 */
	modules: ['nuxt-buefy', 'vue-scrollto/nuxt'],
	/*
	 ** Build configuration
	 */
	generate: {
		routes() {
			// Fetch all the blog posts to generate the Blog page
			const blogPage = initApi().then(api => {
				return api
					.query(Prismic.Predicates.at('document.type', 'blog_posts'))
					.then(response => {
						return [
							{
								route: `/blog`,
								payload: response.results
							}
						]
					})
			})

			// Fetch again all the blog posts, but this time generating each post's page
			const blogPosts = initApi().then(api => {
				return api
					.query(Prismic.Predicates.at('document.type', 'blog_posts'))
					.then(response => {
						return response.results.map(payload => {
							return {
								route: `/blog/${payload.uid}`,
								payload
							}
						})
					})
			})

			// Here I return an array of the results of each promise using the spread operator.
			// It will be passed to each page as the `payload` property of the `context` object,
			// which is used to generate the markup of the page.
			return Promise.all([blogPage, blogPosts]).then(values => {
				return [...values[0], ...values[1]]
			})
		}
	},

	build: {
		extend(config, ctx) {}
	}
}
