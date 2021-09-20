<!-- pages/blog/_slug/index.vue -->
<template>
  <div class="container">
    <section class="columns is-centered is-multiline">
      <!-- Blog Post -->
      <article class="column is-7">
        <!-- 1st ClickBank Banner -->
        <figure class="banner">
          <a
            href="http://mperez1904.viddyoze.hop.clickbank.net"
            target="_blank"
            rel="noopener"
            aria-label="viddyoze software"
          >
            <img
              class="box banner-image"
              src="~assets/images/viddyoze-banner.jpg"
              alt="Automated Video Animation Software"
            />
          </a>
        </figure>

        <!-- Title, Date, and Description -->
        <h1>{{ blog_posts.title[0].text }}</h1>
        <p class="date">
          Updated
          <time>
            {{ blog_posts._meta.lastPublicationDate | moment('MMM DD, YYYY') }}
          </time>
        </p>
        <h2>{{ blog_posts.description[0].text }}</h2>

        <!-- Main image -->
        <img
          class="featured-img"
          :src="blog_posts.image.url"
          :alt="blog_posts.image.alt"
        />
        <br />

        <!-- Blog Content (lazy load dynamic HTML) -->
        <div
          v-html="
            PrismicDOM.RichText.asHtml(
              blog_posts.content,
              linkResolver,
              htmlSerializer
            )
          "
        ></div>

        <!-- 1st ClickBank Banner -->
        <figure class="banner">
          <a
            href="http://mperez1904.abdo120.hop.clickbank.net/"
            target="_blank"
            rel="noopener"
            aria-label="vidtoon software"
          >
            <img
              class="box banner-image"
              src="~assets/images/vidtoon-banner.jpg"
              alt="2D Cartoon Animation Software"
            />
          </a>
        </figure>

        <!-- Disqus Comment Section -->
        <div class="comments">
          <vue-disqus
            shortname="mark-perez"
            :identifier="blog_posts._meta.id"
            :url="`https://markperez.dev/blog/${getRoute}/`"
          ></vue-disqus>
        </div>
      </article>

      <!-- Side Bar -->
      <aside class="column is-3-desktop is-7-tablet is-10-touch is-12-mobile">
        <app-sidebar></app-sidebar>
      </aside>
    </section>
  </div>
</template>

<script>
import { linkResolver, htmlSerializer } from '@/plugins/prismic-config.js'
import SideBar from '@/components/SideBar.vue'
import PrismicDOM from 'prismic-dom'
import gql from 'graphql-tag'

// blog post query
const currentPost = gql`
  query blog_posts($uid: String!) {
    blog_posts(uid: $uid, lang: "en-us") {
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
  components: {
    'app-sidebar': SideBar
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
      title: this.blog_posts.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog_posts.description[0].text
        },
        {
          hid: 'og:type', // open graph type
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'apple-mobile-web-app-title', // open graph mobile web app title
          name: 'apple-mobile-web-app-title',
          content: this.blog_posts.title[0].text
        },
        {
          hid: 'og:title', // open graph title
          property: 'og:title',
          content: this.blog_posts.title[0].text
        },
        {
          hid: 'og:description', // open graph description
          property: 'og:description',
          content: this.blog_posts.description[0].text
        },
        {
          hid: 'og:url', // open graph url
          property: 'og:url',
          content: 'https://markperez.dev' + this.$route.fullPath + '/'
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content: this.blog_posts.image.url
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
        headline: this.blog_posts.title[0].text,
        description: this.blog_posts.description[0].text,
        image: this.blog_posts.image.url,
        author: {
          '@type': 'Person',
          name: 'Mark Perez'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Mark Perez Digital',
          logo: {
            '@type': 'ImageObject',
            url:
              'https://markperez.dev/mp-digital-logo-dark.png',
            width: 169.66,
            height: 47.98
          }
        },
        datePublished: this.blog_posts._meta.firstPublicationDate,
        dateModified: this.blog_posts._meta.lastPublicationDate
      })
    }
  },

  apollo: {
    blog_posts: {
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
h1 {
  font-size: 30px;
  padding-top: 1rem;
  letter-spacing: 1px;
}

h2 {
  margin: 1rem;
  font-weight: bold;
}

aside {
  margin: 1rem;
  margin-top: 3rem;
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
