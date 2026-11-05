import { defineNuxtConfig } from 'nuxt/config'
import { getAllPostsForServer } from './server/utils/prismic'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-05',

  devtools: { enabled: false },
  telemetry: false,

  css: [
    'bulma/css/bulma.css',
    '~/assets/css/fonts.css',
    '~/assets/css/main.css'
  ],

  modules: ['@vite-pwa/nuxt'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s - Mark Perez',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        { property: 'og:site_name', content: 'Mark Perez' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/markperez_logo.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Oxygen|Oxygen+Mono&display=swap'
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
            logo: 'https://markperez.dev/icon-512.png',
            email: 'info@markperez.dev',
            sameAs: [
              'https://www.youtube.com/channel/UCCZ1Yo4NOdWW03jamsNFA8w',
              'https://github.com/markperez1904'
            ]
          })
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    }
  },

  router: {
    options: {
      strict: false
    }
  },

  runtimeConfig: {
    public: {
      googleAnalytics: process.env.GOOGLE_ANALYTICS || '',
      googleAdsensePublisher: process.env.GOOGLE_ADSENSE_PUBLISHER || ''
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Mark Perez',
      short_name: 'Mark Perez',
      description:
        'Tech tutorials, projects, and gear from Mark Perez. Linux, FFmpeg, macOS, and self-hosting guides.',
      lang: 'en',
      theme_color: '#00c58e',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico,woff,woff2}'],
      // Nuxt's 404/200 fallbacks are served as route-like URLs by the static
      // host; precaching them makes Workbox's install fail with a 404.
      globIgnores: ['**/404.html', '**/200.html'],
      // Don't serve "/" for every uncached navigation: that made direct loads
      // of /blog/... render the homepage when the service worker was active.
      navigateFallback: null
    },
    devOptions: {
      enabled: false
    }
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/blog/',
        '/contact/',
        '/gear/',
        '/thanks/',
        '/sitemap.xml',
        '/search-index.json'
      ],
      failOnError: true
    }
  },

  hooks: {
    async 'prerender:routes'({ routes }) {
      const posts = await getAllPostsForServer()

      for (const post of posts) {
        routes.add(`/blog/${post.uid}/`)
      }
    }
  }
})
