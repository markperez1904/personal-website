<template>
  <div>
    <!-- assign your video to the following class below -->
    <region>
      <!-- navbar put manually for customization -->
      <app-navhome class="homepage"></app-navhome>

      <!-- main background image -->
      <section class="hero homepage container">
        <div class="hero-body columns">
          <!-- titles and resume button -->
          <aside class="left column">
            <!-- titles -->
            <h1 class="title">{{ title }}</h1>

            <!-- subtitles with vue-typer -->
            <h2 class="subtitle">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </h2>

            <!-- resume button -->
            <a
              target="_blank"
              href="https://calendly.com/info-30250/discovery-call"
            >
              <button class="button is-rounded">Book a Call</button>
            </a>
          </aside>
          <aside class="right column">
            <img class="mainpng" src="~/assets/svg/mainsvg.svg" alt="spec" />
          </aside>
        </div>
      </section>
      <!-- place the video here -->
      <div id="salon-vid"></div>
    </region>

    <home-numbers></home-numbers>
    <home-homeblocks></home-homeblocks>
    <home-aboutus></home-aboutus>
    <home-whoweare></home-whoweare>
    <home-contactus></home-contactus>
    <home-testimonial></home-testimonial>
    <home-companies></home-companies>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'
import NavHome from '@/components/NavHome.vue'
import Numbers from '@/components/Numbers.vue'
import AboutUs from '@/components/AboutUs.vue'
import HomeBlocks from '@/components/HomeBlocks.vue'
import WhoWeAre from '@/components/WhoWeAre.vue'
import ContactUs from '@/components/ContactUs.vue'
import Companies from '@/components/Companies.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import Testimonial from '@/components/Testimonial.vue'

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
          content: 'https://markperez.dev/mp-digital-logo-dark.png'
        }
      ]
    }
  },

  components: {
    'app-portfolio': Portfolio,
    'app-navhome': NavHome,
    'home-numbers': Numbers,
    'home-aboutus': AboutUs,
    'home-homeblocks': HomeBlocks,
    'home-whoweare': WhoWeAre,
    'home-contactus': ContactUs,
    'home-companies': Companies,
    'home-footer': HomeFooter,
    'home-testimonial': Testimonial
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
.mainpng {
  position: absolute;
  width: 100%;
}

.hero-body .column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

button {
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
  background-color: #2f495d;
  z-index: 3;
}

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

#salon-vid {
  position: absolute;
  top: 10px;
  left: 10px;
  object-fit: cover;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  pointer-events: none;
  z-index: -1;
  border-radius: 20px;
  background: linear-gradient(135deg, #00c58d, #b9ffeb);
  box-shadow: 0 12px 22px -2px gray;
  overflow: hidden;
}

.is-fullheight {
  min-height: calc(100vh - 3rem);
}

.homepage {
  text-align: center;
  vertical-align: top;
}

.title {
  font-size: 90px;
  text-transform: uppercase;
  line-height: 175px;
  color: #ffffff;
  letter-spacing: 12px;
  padding-bottom: 1rem;
  text-align: left;
  color: #fff;
  font-weight: bold;
  text-shadow: 5.5px 9.526px 16px rgba(0, 0, 0, 0.35);
}

.subtitle {
  font-size: 16px;
  text-align: left;
  color: #ffffff;
  width: 570px;
  line-height: 28px;
  font-weight: 300;
}

@media only screen and (max-width: 1200px) {
  #salon-vid {
    height: 100vh;
    z-index: 1;
  }
  aside.left a {
    width: 100%;
  }
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title {
    font-size: 50px;
    letter-spacing: 4px;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    line-height: 100px;
    z-index: 3;
  }
  .subtitle {
    text-align: center;
    font-size: 12px;
    width: 100%;
    line-height: 20px;
    z-index: 3;
  }

  aside.left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 8rem;
  }

  aside.right {
    /* width: 80%; */
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
  .title {
    font-size: 20px;
    letter-spacing: 4px;
  }
  .subtitle {
    font-size: 10px;
  }
  aside.left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 4rem;
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

@media screen and (min-width: 1441px) {
  #salon-vid {
    height: 80vh;
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
</style>
