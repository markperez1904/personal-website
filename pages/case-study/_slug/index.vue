<!-- pages/case-study/_slug/index.vue -->
<template>
  <div>
    <!-- assign your video to the following class below -->
    <div id="case-studies-section">
      <div :style="backgroundPresets">
        <!-- navbar put manually for customization -->
        <app-navhome></app-navhome>

        <!-- title and description -->
        <section class="hero homepage container">
          <div class="hero-body columns">
            <!-- titles and resume button -->
            <aside class="left column">
              <!-- titles -->
              <h1 class="bigtitle" :style="lighten">
                {{ case_studies.title[0].text }}
              </h1>
            </aside>
            <aside class="right column">
              <!-- subtitles in description -->
              <h2 class="subtitle" :style="lighten">
                {{ case_studies.description[0].text }}
              </h2>
            </aside>
          </div>
        </section>
      </div>
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

          <!-- book a call CTA at end of case study -->
          <app-bookcall></app-bookcall>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import { linkResolver, htmlSerializer } from '@/plugins/prismic-config.js'
import PrismicDOM from 'prismic-dom'
import gql from 'graphql-tag'

import BookCall from '@/components/BookCall.vue'
import NavHome from '@/components/NavHome.vue'
import Audit from '@/components/homepage/Audit.vue'
import StudiesSidebar from '@/components/studies/StudiesSidebar.vue'

// blog post query
const currentPost = gql`
  query case_studies($uid: String!) {
    case_studies(uid: $uid, lang: "en-us") {
      title
      date
      description
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
    'app-studiessidebar': StudiesSidebar,
    'app-bookcall': BookCall,
    'app-navhome': NavHome,
    'app-audit': Audit
  },

  data() {
    return {
      PrismicDOM,
      linkResolver,
      htmlSerializer
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
          content: 'https://markperez.dev' + this.$route.fullPath + '/'
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content: this.case_studies.image.url
        }
      ],

      // schema markup for mailchimp & current article
      script: [
        {
          type: 'text/javascript', // mailchimp universal script
          src:
            '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js',
          'data-dojo-config': 'usePlainJson: true, isDebug: false'
        },
        {
          type: 'text/javascript', // mailchimp script for specific popup form
          innerHTML: this.getMailchimp
        },
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
        overflow: 'hidden',
        background:
          'linear-gradient(360deg, rgba(0, 150, 107, 0.9), rgba(0, 0, 0, 1)), url(' +
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

    darken() {
      return {
        color: '#000000'
      }
    },

    getMailchimp() {
      if (process.client) {
        return JSON.stringify(
          window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
            L.start({
              baseUrl: 'mc.us20.list-manage.com',
              uuid: '0e646f9cc09aa7c7a450ae8b6',
              lid: 'a5dd106a2e',
              uniqueMethods: true
            })
          })
        )
      }
    },

    getArticleSchema() {
      return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://markperez.dev' + this.$route.fullPath + '/'
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
            url: 'https://markperez.dev/mp-digital-logo-dark.png',
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
  transform: translateX(-50%);
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
    font-size: 40px;
  }
  .subtitle {
    font-size: 15px;
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
h2,
.date {
  text-align: center;
}

.container {
  padding: 0 2rem;
}

.date {
  font-size: 15px;
  color: #718096;
  margin: 0 0 30px;
  letter-spacing: 1px;
}

.featured-img {
  margin: 1rem 0;
  border-radius: 6px;
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.banner {
  text-align: center;
  margin: 0.5rem 0 0 0;
}

.banner .box {
  padding: unset;
  display: inline-block;
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.banner-image {
  border-radius: 6px;
}
</style>
