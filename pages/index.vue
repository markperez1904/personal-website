<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body columns is-centered is-vcentered">
        <!-- titles and resume button -->
        <aside class="container section column is-narrow">
          <!-- titles -->
          <h1 class="title">{{title}}</h1>

          <!-- subtitles with vue-typer -->
          <h2 class="subtitle">
            <vue-typer
              :text="['SEO Specialist','Self-learning enthusiast','YouTube Producer']"
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
            rel="noopener"
            href="https://drive.google.com/open?id=1dx8t_IKZKLtfs4I6nIZsQtaW5qJvL22VEaPZ04L0RsE"
            target="_blank"
          >
            <button class="button is-black is-centered">Resume</button>
          </a>
        </aside>
      </div>
    </section>

    <app-portfolio></app-portfolio>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'

export default {
  data() {
    return {
      title: 'Mark Perez',
      description:
        'SEO Specialist and Self-learning enthusiast in technology. Producing content on YouTube.'
    }
  },

  head() {
    return {
      title: 'SEO Specialist',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:type', // open graph type
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'apple-mobile-web-app-title', // open graph mobile web app title
          name: 'apple-mobile-web-app-title',
          content: this.title
        },
        {
          hid: 'og:title', // open graph title
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description', // open graph description
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url', // open graph url
          name: 'og:url',
          content: 'https://markperez.dev' + this.$route.fullPath
        },
        {
          hid: 'og:image', // open graph image
          name: 'og:image',
          content: 'https://markperez.dev/_nuxt/img/ec3ab3b.png'
        }
      ]
    }
  },

  components: {
    'app-portfolio': Portfolio
  }
}
</script>

<style scoped>
button {
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
}

.title {
  font-size: 70px;
  letter-spacing: 12px;
}

.subtitle {
  font-size: 24px;
}

.is-fullheight {
  min-height: calc(100vh - 6rem);
  background-image: url('~assets/images/marks_headshot.png');
  background-color: rgba(255, 255, 255, 0);
  background-blend-mode: lighten;
  background-repeat: no-repeat;
  background-size: 19%;
  background-position: center right 300px;
}

/* change background image when window is smaller */
@media only screen and (max-width: 1023px) {
  .is-fullheight {
    background-color: rgba(255, 255, 255, 0.75);
    background-position: center right 100px;
    background-size: 31%;
  }
}

/* change background image size when h1 collapses */
@media only screen and (max-width: 556px) {
  .is-fullheight {
    background-position: center right 50px;
    background-size: 58%;
  }
}
</style>
