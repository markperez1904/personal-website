<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>

    <!-- SEO services -->
    <section class="services columns is-multiline is-centered">
      <!-- low service -->
      <article class="box column is-3-widescreen is-4-tablet">
        <aside class="service-top bronze">
          <h3 class="service-title">Bronze</h3>
          <p class="service-subtitle">Slightly Competitive</p>
        </aside>

        <aside class="service-pricing">
          <p>
            <sup class="money">$</sup>400
          </p>
        </aside>

        <aside class="service-details content">
          <ul>
            <li>
              Total Keywords:
              <strong class="keyword-count">20</strong>
            </li>
            <li>On-Site Optimization</li>
            <li>Content Marketing</li>
            <li>Local Search Optimization</li>
          </ul>
        </aside>
      </article>

      <!-- medium service -->
      <article class="box column is-3-widescreen is-4-tablet">
        <aside class="service-top silver">
          <h3 class="service-title">Silver</h3>
          <p class="service-subtitle">Moderately Competitive</p>
        </aside>

        <aside class="service-pricing">
          <p>
            <sup class="money">$</sup>500
          </p>
        </aside>

        <aside class="service-details content">
          <ul>
            <li>
              Total Keywords:
              <strong class="keyword-count">35</strong>
            </li>
            <li>On-Site Optimization</li>
            <li>Content Marketing</li>
            <li>Local Search Optimization</li>
            <li>Technical Optimization</li>
            <li>Good Website Migration</li>
          </ul>
        </aside>
      </article>

      <!-- premium service -->
      <article class="box column is-3-widescreen is-4-tablet">
        <aside class="service-top gold">
          <h3 class="service-title">Gold</h3>
          <p class="service-subtitle">Aggressively Competitive</p>
        </aside>

        <aside class="service-pricing">
          <p>
            <sup class="money">$</sup>600
          </p>
        </aside>

        <aside class="service-details content">
          <ul>
            <li>
              Total Keywords:
              <strong class="keyword-count">50</strong>
            </li>
            <li>
              <span class="guest-post">Free Guest Post (+40 DA)</span>
            </li>
            <li>Link Building</li>
            <li>On-Site Optimization</li>
            <li>Content Marketing</li>
            <li>Local Search Optimization</li>
            <li>Technical Optimization</li>
            <li>Superior Website Migration</li>
          </ul>
        </aside>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'SEO Services',
      description:
        'Here are the SEO services packages that I offer. Each package includes a free case study before I charge a one-time payment'
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
          name: 'og:type',
          content: 'blog'
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

button {
  margin: 1rem;
}

sup {
  font-size: 20px;
}

.column {
  padding: unset;
}

.container {
  padding: 0 2rem;
}

.box {
  transition: all 0.2s;
  margin: 1rem;
}

.box:hover {
  transition: all 0.2s;
  transform: scale(1.03);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.button {
  font-weight: bold;
  margin-bottom: 2rem;
}

/* CSS modifications for seo-services page */
.services {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.service-top {
  text-align: center;
  border-radius: 6px;
  color: #fff;
}

.service-title {
  padding-top: 5px;
  font-size: 26px;
  letter-spacing: 4px;
  font-weight: bold;
}

.service-subtitle {
  padding-bottom: 5px;
  font-size: 16px;
  letter-spacing: 2px;
}

.service-pricing {
  margin-top: 5px;
  text-align: center;
  font-size: 40px;
  letter-spacing: 2px;
  font-weight: bold;
}

.keyword-count {
  color: #00c58e;
}

.guest-post {
  font-weight: bold;
  color: #00c58e;
}

.service-details {
  padding-bottom: 20px;
}

.bronze {
  background-color: #69140e;
  background-image: linear-gradient(315deg, #69140e 0%, #d58936 74%);
}

.silver {
  background-color: #9dc5c3;
  background-image: linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%);
}

.gold {
  background-color: #ef5734;
  background-image: linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%);
}
</style>
 