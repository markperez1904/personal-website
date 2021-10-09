<!-- pages/case-study/_slug/index.vue -->
<template>
  <div>
    <!-- assign your video to the following class below -->
    <div :style="backgroundPresets">
      <!-- navbar put manually for customization -->
      <app-navhome></app-navhome>

      <!-- title and description -->
      <section class="hero homepage container">
        <div class="hero-body columns">
          <!-- titles and resume button -->
          <aside class="left column">
            <!-- titles -->
            <h1 class="bigtitle">
              {{ case_studies.title[0].text }}
            </h1>
          </aside>
          <aside class="right column">
            <!-- subtitles in description -->
            <h2 class="subtitle">
              {{ case_studies.description[0].text }}
            </h2>
          </aside>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="columns is-centered is-multiline study">
        <!-- Case Study -->
        <article class="column is-7">
          <!-- Blog Content (lazy load dynamic HTML) -->
          <div
            v-html="
              PrismicDOM.RichText.asHtml(
                case_studies.content,
                linkResolver,
                htmlSerializer
              )
            "
          ></div>
        </article>
      </section>
    </div>
    <app-bookcall></app-bookcall>
  </div>
</template>

<script>
import { linkResolver, htmlSerializer } from '@/plugins/prismic-config.js'
import PrismicDOM from 'prismic-dom'
import gql from 'graphql-tag'

import BookCall from '@/components/BookCall.vue'
import NavHome from '@/components/NavHome.vue'

// blog post query
const currentPost = gql`
  query case_studies($uid: String!) {
    case_studies(uid: $uid, lang: "en-us") {
      title
      date
      description
      theme
      image
      content
      _meta {
        id
        firstPublicationDate
        lastPublicationDate
      }
    }
  }
`

export default {
  layout: 'case-study',
  components: {
    'app-bookcall': BookCall,
    'app-navhome': NavHome
  },

  data() {
    return {
      PrismicDOM,
      linkResolver,
      htmlSerializer,
      visibility: 0.8
    }
  },

  head() {
    return {
      // SEO on <title> and <meta> tags
      title: this.case_studies.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.case_studies.description[0].text
        },
        {
          hid: 'og:type', // open graph type
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'apple-mobile-web-app-title', // open graph mobile web app title
          name: 'apple-mobile-web-app-title',
          content: this.case_studies.title[0].text
        },
        {
          hid: 'og:title', // open graph title
          property: 'og:title',
          content: this.case_studies.title[0].text
        },
        {
          hid: 'og:description', // open graph description
          property: 'og:description',
          content: this.case_studies.description[0].text
        },
        {
          hid: 'og:url', // open graph url
          property: 'og:url',
          content: 'https://mpdigital.org' + this.$route.fullPath + '/'
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content: this.case_studies.image.url
        }
      ],

      // schema markup for case study
      script: [
        {
          type: 'application/ld+json',
          innerHTML: this.getArticleSchema
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },

  computed: {
    getRoute() {
      return this.$route.params.slug
    },

    backgroundPresets() {
      return {
        background:
          'linear-gradient(360deg,' +
          this.convertHex(this.case_studies.theme) +
          ', rgba(0, 0, 0, 1)), url(' +
          this.case_studies.image.url +
          ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    },

    lighten() {
      return {
        color: '#ffffff'
      }
    },

    getArticleSchema() {
      return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://mpdigital.org' + this.$route.fullPath + '/'
        },
        headline: this.case_studies.title[0].text,
        description: this.case_studies.description[0].text,
        image: this.case_studies.image.url,
        author: {
          '@type': 'Person',
          name: 'Mark Perez'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Mark Perez Digital',
          logo: {
            '@type': 'ImageObject',
            url: 'https://mpdigital.org/mp-digital-logo-dark.png',
            width: 169.66,
            height: 47.98
          }
        },
        datePublished: this.case_studies._meta.firstPublicationDate,
        dateModified: this.case_studies._meta.lastPublicationDate
      })
    }
  },

  apollo: {
    case_studies: {
      query: currentPost,

      variables() {
        return {
          uid: this.getRoute
        }
      },

      fetchPolicy: 'cache-and-network'
    }
  },

  methods: {
    convertHex(color) {
      color = color.replace('#', '')
      const r = parseInt(color.substring(0, 2), 16)
      const g = parseInt(color.substring(2, 4), 16)
      const b = parseInt(color.substring(4, 6), 16)
      return `rgba(${r}, ${g}, ${b}, ${this.visibility})`
    }
  }
}
</script>

<style scoped>
.study {
  margin-top: 3rem;
}

/* styling for hero of title and description */
aside {
  margin-bottom: 10rem;
}

aside.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

aside.left a {
  display: block;
}

aside.right {
  display: flex;
  justify-content: center;
  align-items: center;
}

aside.right img {
  left: 50%;
}

.hero-body .column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

.bigtitle {
  font-size: 65px;
  color: #ffffff;
  letter-spacing: 4px;
  padding-bottom: 1rem;
  text-align: left;
  font-weight: bold;
  text-shadow: 5.5px 9.526px 16px rgba(0, 0, 0, 0.35);
}

.subtitle {
  margin-top: unset !important;
  font-size: 20px;
  text-align: left;
  color: #ffffff;
  width: 570px;
  line-height: 28px;
}

@media only screen and (max-width: 1500px) {
  .bigtitle {
    font-size: 55px;
  }
  .subtitle {
    font-size: 18px;
  }
}

@media only screen and (max-width: 1200px) {
  aside.left a {
    width: 100%;
  }
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .bigtitle {
    font-size: 45px;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    z-index: 3;
    margin-bottom: 1rem;
  }
  .subtitle {
    text-align: center;
    font-size: 17px;
    width: 100%;
    line-height: 20px;
    z-index: 3;
  }

  aside.left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    margin-bottom: unset;
  }

  aside.right {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 50vh !important;
  }
}

@media only screen and (max-width: 556px) {
  .hero-body {
    padding: 0px 1.5rem;
  }
  .bigtitle {
    font-size: 32px;
  }
  .subtitle {
    font-size: 16px;
  }
  .call-button {
    font-size: 14px;
  }
  aside.left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    margin-bottom: unset;
  }

  aside.right {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 40vh !important;
  }
  aside.right img {
    position: relative;
  }
}

@media screen and (max-width: 350px) {
  aside.left {
    margin-bottom: 1rem;
  }
  aside.right {
    margin-bottom: 1rem;
  }
}

/* original styles */
h1 {
  font-size: 30px;
  padding-top: 1rem;
  letter-spacing: 1px;
}

h2 {
  font-weight: bold;
  margin-bottom: 1rem;
}

aside {
  margin: 1rem;
}

h1,
h2 {
  text-align: center;
}

.container {
  padding: 0 2rem;
}
</style>
