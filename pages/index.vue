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
            <h1 class="title">
              SEO for<br />
              <vue-typer
                :text="['Skincare Brands', 'Cosmetic Stores', 'Beauty Salons']"
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
            </h1>

            <!-- subtitle: description of MP Digital -->
            <h2 class="subtitle">
              All the beauty in the world, but it won’t get noticed unless you
              put it out there.
            </h2>

            <!-- call button -->
            <n-link to="/book/" id="call-link">
              <button class="button is-rounded call-button">
                Help Me Get Noticed
              </button>
            </n-link>
          </aside>
          <aside class="right column">
            <img class="mainpng" src="~/assets/svg/mainsvg.svg" alt="spec" />
          </aside>
        </div>
      </section>
    </div>
    <!-- services-->
    <app-services></app-services>
    
    <!-- reviews -->
    <app-reviews></app-reviews>

    <!-- industries -->
    <app-industries></app-industries>

    <!-- multiple components -->
    <!-- <home-whoweare></home-whoweare> -->
    <!-- <home-numbers></home-numbers> -->
    <!-- <home-homeblocks></home-homeblocks> -->
    <app-bookcall></app-bookcall>
  </div>
</template>

<script>
// from mark
import Stories from '@/components/Stories.vue'
import NavHome from '@/components/NavHome.vue'
import BookCall from '@/components/BookCall.vue'
import Contact from '@/components/homepage/Contact.vue'
import Services from '@/components/homepage/Services.vue'
import Industries from '@/components/homepage/Industries.vue'
import Reviews from '@/components/homepage/Reviews.vue'

// from freelancer
import Numbers from '@/components/homepage/Numbers.vue'
import AboutUs from '@/components/homepage/AboutUs.vue'
import HomeBlocks from '@/components/homepage/HomeBlocks.vue'
import WhoWeAre from '@/components/homepage/WhoWeAre.vue'

export default {
  layout: 'homepage',
  data() {
    return {
      title: 'SEO Services for Beauty & Cosmetic Brands',
      description:
        'MP Digital focuses on empowering skincare brands and beauty stores through Google.'
    }
  },

  head() {
    return {
      titleTemplate: '',
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
          content: 'https://mpdigital.org' + this.$route.fullPath
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content: 'https://mpdigital.org/mp-digital-logo-dark.png'
        }
      ]
    }
  },

  components: {
    'app-stories': Stories,
    'app-navhome': NavHome,
    'app-bookcall': BookCall,
    'app-contact': Contact,
    'app-reviews': Reviews,

    'app-services': Services,
    'app-industries': Industries,

    'home-numbers': Numbers,
    'home-aboutus': AboutUs,
    'home-homeblocks': HomeBlocks,
    'home-whoweare': WhoWeAre
  }
}
</script>

<style scoped>
/* https://github.com/cngu/vue-typer/issues/45 for reference */
::v-deep .typed {
  color: #fff !important;
}

.call-button:hover {
  color: white;
}

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

#navbar-and-content {
  background: linear-gradient(135deg, #005d42, #17ffbe);
}

.is-fullheight {
  min-height: calc(100vh - 6rem);
}

.title {
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
  .title {
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
  .title {
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
    font-size: 18px;
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
    font-size: 25px;
  }
  .subtitle {
    font-size: 16px;
  }
  .call-button {
    font-size: 16px;
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
