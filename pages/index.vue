<template>
  <div>
    <!-- assign your video to the following class below -->
    <div id="navbar-and-content">
      <!-- navbar put manually for customization -->
      <app-navhome></app-navhome>

      <!-- main background image -->
      <section class="hero is-fullheight container">
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

            <!-- call button -->
            <a
              target="_blank"
              href="https://calendly.com/info-30250/discovery-call"
              id="call-link"
            >
              <button class="button is-rounded call-button">Book a Call</button>
            </a>
          </aside>
          <aside class="right column">
            <img class="mainpng" src="~/assets/svg/mainsvg.svg" alt="spec" />
          </aside>
        </div>
      </section>
    </div>

    <home-numbers></home-numbers>
    <home-homeblocks></home-homeblocks>
    <home-aboutus></home-aboutus>
    <home-whoweare></home-whoweare>
    <home-contactus></home-contactus>
    <app-stories></app-stories>
    <app-bookcall></app-bookcall>
  </div>
</template>

<script>
// from mark
import Portfolio from '@/components/Portfolio.vue'
import Stories from '@/components/Stories.vue'
import NavHome from '@/components/NavHome.vue'
import BookCall from '@/components/BookCall.vue'


// from freelancer
import Numbers from '@/components/homepage/Numbers.vue'
import AboutUs from '@/components/homepage/AboutUs.vue'
import HomeBlocks from '@/components/homepage/HomeBlocks.vue'
import WhoWeAre from '@/components/homepage/WhoWeAre.vue'
import ContactUs from '@/components/homepage/ContactUs.vue'
import Companies from '@/components/homepage/Companies.vue'

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
    'app-stories': Stories,
    'app-navhome': NavHome,
    'app-bookcall': BookCall,

    'home-numbers': Numbers,
    'home-aboutus': AboutUs,
    'home-homeblocks': HomeBlocks,
    'home-whoweare': WhoWeAre,
    'home-contactus': ContactUs,
    'home-companies': Companies
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
.call-button:hover {
  color: white;
}

.mainpng {
  position: absolute;
  width: 100%;
  transition-delay: 250ms;
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

#navbar-and-content {
  background: linear-gradient(135deg, #00966b, #17ffbe);
}

.is-fullheight {
  min-height: calc(100vh - 6rem);
}

.title {
  font-size: 90px;
  text-transform: uppercase;
  line-height: 175px;
  color: #ffffff;
  letter-spacing: 12px;
  padding-bottom: 1rem;
  text-align: left;
  font-weight: bold;
  text-shadow: 5.5px 9.526px 16px rgba(0, 0, 0, 0.35);
}

.subtitle {
  font-size: 20px;
  text-align: left;
  color: #ffffff;
  width: 570px;
  line-height: 28px;
}

@media only screen and (max-width: 1500px) {
  .title {
    font-size: 75px;
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
  .title {
    font-size: 50px;
    letter-spacing: 4px;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    line-height: 100px;
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
    font-size: 30px;
    letter-spacing: 4px;
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

@media screen and (max-width: 350px) {
  aside.left {
    margin-bottom: 1rem;

  }
  aside.right {
    margin-bottom: 1rem;
  }

}
</style>
