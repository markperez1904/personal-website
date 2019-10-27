import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://marks-personal-website.prismic.io/graphql'
  }),
  cache: new InMemoryCache()
})

const linkages = () => {
  return client
    .query({
      query: gql`
        {
          allBlog_postss(sortBy: date_DESC) {
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
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        name: 'google-site-verification',
        content: process.env.GOOGLE_VERIFICATION
      }
    ],
    // Link to Google Fonts and Website Image
    link: [
      // Favicon icon
      { rel: 'icon', type: 'image/x-icon', href: '/markperez_logo.ico' },

      // Google Fonts CDN
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Oxygen|Oxygen+Mono|Bungee|Ubuntu|Slackey&display=swap'
      }
    ],
    script: [
      {
        innerHTML: process.env.CLICKY
      },
      {
        async: true,
        src: '//static.getclicky.com/js'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'] // required when using "dangerous" scripts
  },

  // Customize the progress-bar color on mobile devices
  loading: { color: '#2f495e' },

  // Global CSS
  css: ['@/static/css/main.css', '@/static/css/fonts.css'],

  // Plugins to load before mounting the App
  plugins: ['~/plugins/disqus.js', '~/plugins/moment.js', '~/plugins/typer.js'],

  // Nuxt.js modules
  modules: [
    '@nuxtjs/pwa', // this module will give me PWA benefits by default!
    'nuxt-trailingslash-module', // add trailing slash on URLs
    'nuxt-buefy',
    '@nuxtjs/apollo',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-adsense',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Keep Tracking ID private
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS
  },

  // Keep Google AdSense code private
  'google-adsense': {
    id: process.env.GOOGLE_ADSENSE_PUBLISHER,
    analyticsUacct: process.env.GOOGLE_ANALYTICS
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
    routes: linkages,
    trailingSlash: true
  },

  // tell web crawlers where to crawl
  robots: {
    UserAgent: '*',

    Disallow: () => ['/thanks/', '/200.html', '/README.md'],

    Sitemap: 'https://markperez.dev/sitemap.xml'
  }
}
