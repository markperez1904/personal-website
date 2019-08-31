import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

// GraphQL fecthing Prismic API
const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://marks-personal-website.prismic.io/graphql'
  }),
  cache: new InMemoryCache()
})

// storing all the website links
const linkages = () => {
  return client
    .query({
      query: gql`
        {
          allBlog_postss(sortBy: title_ASC) {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
          }
        }
      `
    })
    .then(res => {
      return res.data.allBlog_postss.edges.map(posts => {
        return '/blog/' + posts.node._meta.uid
      })
    })
}

export default {
  mode: 'universal',

  // Headers of the page
  head: {
    title: 'Mark Perez',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'SEO Specialist and Front-End Developer. Self-learning enthusiast in tech. Producing content on YouTube.'
      },
      {
        name: 'google-site-verification',
        content: 'hfQ1kFhd7ql6fNI0zUdzKuyPMej04HQ59g5GAk936cw'
      }
    ],
    // Link to Google Fonts and Website Image
    link: [
      // Favicon icon
      { rel: 'icon', type: 'image/x-icon', href: '/tux_penguin.ico' },

      // Google Fonts CDN
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Oxygen|Oxygen+Mono|Bungee|Ubuntu|Slackey&display=swap'
      },

      // FontAwesome icon pack
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css',
        integrity: 'sha256-zmfNZmXoNWBMemUOo1XUGFfc0ihGGLYdgtJS3KCr/l0=',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: ['@/static/css/main.css', '@/static/css/fonts.css'],

  // Plugins to load before mounting the App
  plugins: [
    '~/plugins/smoothScroll.js',
    '~/plugins/disqus.js',
    '~/plugins/moment.js'
  ],

  // Nuxt.js modules
  modules: [
    '@nuxtjs/pwa', // this module will give me PWA benefits by default!
    'nuxt-buefy',
    'vue-scrollto/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-adsense',
    '@nuxtjs/sitemap'
  ],

  // Keep Tracking ID private
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS
  },

  // Keep Google AdSense code private
  'google-adsense': {
    id: process.env.GOOGLE_ADSENSE
  },

  // Using apollo to query blog posts
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo.js'
    }
  },

  // Generate index.html files for each blog post
  generate: {
    routes: linkages
  },

  // generate sitemap.xml for Search Console
  sitemap: {
    hostname: 'https://markperez.dev',
    routes: linkages
  },

  // Build configuration
  build: {
    extend(config, ctx) {}
  }
}
