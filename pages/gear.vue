<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <section class="columns is-centered is-multiline">
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Software</h5>
        <ul>
          <li>OS: Ubuntu</li>
          <li>Text Editor: VSCode</li>
          <li>Screen Recorder: OBS</li>
          <li>Video Editor: KdenLive</li>
          <li>Photo Editor: GIMP & Canva</li>
        </ul>
      </div>

      <!-- Amazon Affiliate Links for Hardware -->
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Hardware</h5>
        <ul>
          <li>
            <a
              href="https://amzn.to/32U0uhX"
              target="_blank"
              aria-label="laptop"
              rel="noopener"
              >Zenbook 13 (UX325)</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/38scGJ3"
              target="_blank"
              aria-label="keyboard"
              rel="noopener"
              >Keyboard: Magic Keyboard 2 (TKL)</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/3igqDgE"
              target="_blank"
              aria-label="mouse"
              rel="noopener"
              >Mouse: VicTsing Pioneer Bluetooth</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/2KItIIi"
              target="_blank"
              aria-label="monitor"
              rel="noopener"
              >Monitor: Dell SE2219H</a
            >
          </li>

          <li>
            <a
              href="https://amzn.to/2ALZpuB"
              target="_blank"
              aria-label="mic"
              rel="noopener"
              >Mic: Blue Snowball iCE</a
            >
          </li>
        </ul>
      </div>

      <!-- Amazon Affiliate Links for Equipment -->
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Equipment</h5>
        <ul>
          <li>
            <a
              href="https://amzn.to/2Z3uHMj"
              target="_blank"
              aria-label="table"
              rel="noopener"
              >Table: Tribesigns Modern L-Shaped Desk</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/3dOIubY"
              target="_blank"
              aria-label="usb-c adapter"
              rel="noopener"
              >USB-C Adapter: Anker 5-in-1</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/3dRhLPb"
              target="_blank"
              aria-label="camera"
              rel="noopener"
              >Camera: Lumix G7</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/2B8T4N9"
              target="_blank"
              aria-label="chair"
              rel="noopener"
              >Chair: CLATINA Executive Chair</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/2Hgekkj"
              target="_blank"
              aria-label="lamp"
              rel="noopener"
              >Lamp: TaoTronics LED Desk Lamp</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Gear',
      description:
        'Here is a list of all of the gear we all use on a daily basis. As Amazon Associates, we will earn from qualified commissions.'
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
          content: 'https://markperez.dev' + this.$route.fullPath + '/'
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content:
            'https://markperez.dev/mp-digital-logo-dark.png'
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

h2 {
  margin: 2rem 0;
}

a,
a:hover,
a:active,
a:focus {
  color: #2f495e;
  background-color: transparent;
}

a:hover {
  text-decoration: underline;
}

.container {
  padding: 0 2rem;
}
</style>
