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

const postsQuery = gql`
  query allPostUids($cursor: String) {
    allBlog_postss(sortBy: date_DESC, first: 100, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
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

// Prismic returns at most 20 documents per page by default. Walk every page so
// all posts are generated (and listed in the sitemap), not just the newest 20.
let routesPromise

const fetchPostRoutes = () => {
  const routes = []

  const nextPage = cursor => {
    return client
      .query({
        query: postsQuery,
        variables: { cursor },
        fetchPolicy: 'no-cache'
      })
      .then(res => {
        const connection = res.data.allBlog_postss

        connection.edges.forEach(({ node }) => {
          if (node._meta && node._meta.uid) {
            routes.push(`/blog/${node._meta.uid}`)
          }
        })

        if (connection.pageInfo.hasNextPage && connection.pageInfo.endCursor) {
          return nextPage(connection.pageInfo.endCursor)
        }

        return Array.from(new Set(routes))
      })
  }

  return nextPage(null)
}

const linkages = () => {
  if (!routesPromise) {
    routesPromise = fetchPostRoutes().catch(error => {
      // Don't cache a failed request; let the next caller retry.
      routesPromise = null
      throw error
    })
  }

  return routesPromise
}

export default {
  // full static mode (as of v2.14.0): https://nuxtjs.org/blog/going-full-static/
  target: 'static',

  // Use trailing slashes everywhere, matching the generated files and sitemap
  router: {
    trailingSlash: true
  },

  // Headers of the page
  head: {
    titleTemplate: '%s - Mark Perez',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
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
      { rel: 'icon', type: 'image/x-icon', href: '/markperez_logo.ico' },

      // Google Fonts CDN
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Oxygen|Oxygen+Mono&display=swap'
      }
    ],

    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mark Perez Digital',
          alternateName: 'MP Digital',
          url: 'https://markperez.dev/',
          logo:
            'https://raw.githubusercontent.com/markperez1904/personal-website/master/assets/images/markperez-digital-black.png',
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
    '~/plugins/typer.js',
    '~/plugins/spinner.js',
    '~/plugins/silentbox.js',
    '~/plugins/disqus.js'
  ],

  // Nuxt.js modules
  modules: [
    '@nuxtjs/pwa', // this module will give me PWA benefits by default!
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
