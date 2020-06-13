<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <section class="columns is-centered is-multiline">
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Software</h5>
        <ul>
          <li>OS: macOS Catalina</li>
          <li>Text Editor: VSCode</li>
          <li>Screen Recorder: OBS</li>
          <li>Video Editor: FCPX</li>
          <li>Photo Editor: GIMP</li>
        </ul>
      </div>

      <!-- Amazon Affiliate Links for Hardware -->
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Hardware</h5>
        <ul>
          <li>
            <a
              href="https://amzn.to/30BkKoC"
              target="_blank"
              aria-label="laptop"
              rel="noopener"
              >Macbook Pro (A2251)</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/2V9WOpT"
              target="_blank"
              aria-label="keyboard"
              rel="noopener"
              >Keyboard: Fnatic miniSTREAK (Cherry Browns)</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/2KHskFW"
              target="_blank"
              aria-label="mouse"
              rel="noopener"
              >Mouse: Logitech G402</a
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
              href="https://amzn.to/3fm3KHi"
              target="_blank"
              aria-label="usb-c adapter"
              rel="noopener"
              >USB-C Adapter: FlePow Multiport Adapter</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/320xxPd"
              target="_blank"
              aria-label="camera"
              rel="noopener"
              >Camera: OnePlus 5</a
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
        'Here is a list of all of the gear I use on a daily basis. As an Amazon Associate, I will earn from qualified commissions.'
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
            'https://d33wubrfki0l68.cloudfront.net/f602ffaa7d56bbd9f27db7a08a0a7068462149e3/143f6/_nuxt/img/f9c805f.png'
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
