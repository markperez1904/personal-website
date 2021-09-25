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
  // full static mode (as of v2.14.0): https://nuxtjs.org/blog/going-full-static/
  target: 'static',

  // Headers of the page
  head: {
    titleTemplate: '%s - MP Digital',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        name: 'google-site-verification',
        content: process.env.GOOGLE_VERIFICATION
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Mark Perez'
      }
    ],
    // Link to Google Fonts and Website Image
    link: [
      // Favicon icon
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },

      // Google Fonts CDN
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Oxygen|Oxygen+Mono&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.1/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
      }
    ],

    script: [
      {
        src: 'https://code.jquery.com/jquery-3.6.0.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mark Perez Digital',
          alternateName: 'MP Digital',
          url: 'https://markperez.dev/',
          logo: 'https://markperez.dev/mp-digital-logo-dark.png',
          email: 'info@markperez.dev',
          sameAs: [
            'https://www.youtube.com/channel/UCCZ1Yo4NOdWW03jamsNFA8w',
            'https://github.com/markperez1904'
          ]
        })
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  // Customize the progress-bar color on mobile devices
  loading: { color: '#2f495e' },

  // Global CSS
  css: ['@/static/css/main.css', '@/static/css/fonts.css'],

  // Plugins to load before mounting the App
  plugins: [
    '~/plugins/moment.js',
    '~/plugins/typer.js',
    '~/plugins/spinner.js',
    '~/plugins/silentbox.js',
    '~/plugins/disqus.js',
    { src: '~/plugins/scrollreveal.js', ssr: false }
  ],

  // Nuxt.js modules
  modules: [
    '@nuxtjs/pwa', // this module will give me PWA benefits by default!
    'nuxt-trailingslash-module', // add trailing slash on URLs
    'nuxt-buefy',
    '@nuxtjs/apollo',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-adsense',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-purgecss'
  ],

  // Keep Tracking ID private
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS
  },

  // Keep Google AdSense code private
  'google-adsense': {
    id: process.env.GOOGLE_ADSENSE_PUBLISHER,
    analyticsUacct: process.env.GOOGLE_ANALYTICS,
    includeQuery: true,
    pageLevelAds: true
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
  },

  // purge unnecessary CSS
  purgeCSS: {
    mode: 'postcss',
    paths: ['static/css/main.css'], // whitelist the main.css file
    whitelistPatterns: [/-leave/, /-enter/] // whitelist the page transition CSS classes
  }
}
