<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2 class="hours">{{ description }}</h2>

    <!-- contact component -->
    <!-- Calendly inline widget begin -->
    <div
      class="calendly-inline-widget"
      data-url="https://calendly.com/info-30250/discovery-call"
    ></div>
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></script>
    <!-- Calendly inline widget end -->
  </div>
</template>

<script>
import Contact from '@/components/homepage/Contact.vue'

export default {
  components: {
    'app-contact': Contact
  },

  data() {
    return {
      title: 'Book a Call',
      description:
        'Just a few preliminary questions to determine if we can work together.'
    }
  },

  head() {
    return {
      title: this.title,
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
          content: 'https://mpdigital.org' + this.$route.fullPath + '/'
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content: 'https://mpdigital.org/mp-digital-logo-dark.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  padding-top: 0.5rem;
}

h2,
p {
  margin-top: 2rem;
}

/* add transitions to input boxes */
input,
textarea {
  transition: all 0.2s;
  background-color: #edf2f7;
}

/* adopt color scheme to input boxes */
input:focus,
textarea:focus {
  transition: all 0.2s;
  border-color: #00c58e;
}

textarea:active {
  border-color: #00c58e;
}

.container {
  padding: 0 2rem;
}

.hidden {
  display: none;
}

.button {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  background-color: #00c58e;
}

.hours {
  margin-bottom: 1rem;
}
</style>
