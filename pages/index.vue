<template>
  <div>
    <!-- assign your video to the following class below -->
    <region>
      <!-- navbar put manually for customization -->
      <app-navhome class="homepage"></app-navhome>

      <!-- main background image -->
      <section class="hero is-fullheight homepage">
        <div class="hero-body columns">
          <!-- titles and resume button -->
          <aside class="column">
            <!-- titles -->
            <h1 class="title">{{ title }}</h1>

            <!-- subtitles with vue-typer -->
            <h2 class="subtitle">
              <vue-typer
                :text="[
                  'Ready to scale your salon?',
                  'Produced over ' +
                    allBlog_postss.totalCount +
                    ' recreational tutorials',
                  'Synergistic team of SEO professionals'
                ]"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="70"
                :type-delay="70"
                :pre-erase-delay="2000"
                :erase-delay="250"
                erase-style="select-all"
                :erase-on-complete="false"
                caret-animation="blink"
              ></vue-typer>
            </h2>

            <!-- resume button -->
            <a
              target="_blank"
              href="https://calendly.com/info-30250/discovery-call"
            >
              <button class="button is-centered">Book a Call</button>
            </a>
          </aside>
        </div>
      </section>
      <!-- place the video here -->
      <video id="salon-vid" autoplay muted loop>
        <source
          src="https://prismic-io.s3.amazonaws.com/marks-personal-website/251ccb95-fcdd-44e4-b9cc-9678f9e3dd0a_salon-homepage.mp4"
          type="video/mp4"
        />
      </video>
    </region>

    <app-portfolio></app-portfolio>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'
import NavHome from '@/components/NavHome.vue'
import gql from 'graphql-tag'

const articles = gql`
  {
    allBlog_postss {
      totalCount
    }
  }
`

export default {
  layout: 'homepage',
  data() {
    return {
      title: 'MP Digital',
      description:
        'MP Digital is a well-versed SEO Agency empowering beauty salons to be 1st-choice within their region.'
    }
  },

  head() {
    return {
      title: 'SEO for Beauty Salons',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:type', // open graph type
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'apple-mobile-web-app-title', // open graph mobile web app title
          name: 'apple-mobile-web-app-title',
          content: this.title
        },
        {
          hid: 'og:title', // open graph title
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description', // open graph description
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url', // open graph url
          property: 'og:url',
          content: 'https://markperez.dev' + this.$route.fullPath
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content:
            'https://d33wubrfki0l68.cloudfront.net/f602ffaa7d56bbd9f27db7a08a0a7068462149e3/143f6/_nuxt/img/f9c805f.png'
        }
      ]
    }
  },

  components: {
    'app-portfolio': Portfolio,
    'app-navhome': NavHome
  },

  apollo: {
    allBlog_postss: {
      query: articles,
      fetchPolicy: 'cache-and-network'
    }
  }
}
</script>

<style scoped>
button {
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;
  background-color: #00c58e;
  border-color: rgba(255, 255, 255, 0);
}

aside {
  margin-bottom: 10rem;
}

#salon-vid {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.3;
  z-index: -1;
}

.is-fullheight {
  min-height: calc(100vh - 3rem);
}

.homepage {
  text-align: center;
  vertical-align: top;
}

.title {
  font-size: 70px;
  letter-spacing: 12px;
  padding-bottom: 1rem;
}

.subtitle {
  font-size: 24px;
}

@media only screen and (max-width: 556px) {
  .title {
    font-size: 50px;
    letter-spacing: 4px;
  }
  .subtitle {
    font-size: 18px;
  }
}
</style>
