<template>
  <div>
    <!-- other stuff -->
    <!-- assign your video to the following class below -->
    <div id="case-studies-section">
      <!-- navbar put manually for customization -->
      <app-navhome></app-navhome>

      <!-- main background image -->
      <section class="hero homepage container">
        <div class="hero-body columns">
          <!-- titles and resume button -->
          <aside class="left column">
            <!-- titles -->
            <h1 class="bigtitle">{{ title }}</h1>

            <!-- subtitles with vue-typer -->
            <h2 class="subtitle">
              {{ description }}
            </h2>
          </aside>

          <!-- right-side column -->
          <aside class="right column auditor">
            <div id="roboaudit"></div>
            <script
              id="growthrobo"
              src="https://cdn.siteauditor.com/assets/site/js/v2.sitecheck.js"
              data-content="7382"
            ></script>
            <div id="growthembed" data-content="7382"></div>
          </aside>
        </div>
      </section>
    </div>

    <!-- component apps -->
    <!-- <app-stories></app-stories> -->
    <app-bookcall></app-bookcall>
  </div>
</template>

<script>
import BookCall from '@/components/BookCall.vue'
import NavHome from '@/components/NavHome.vue'
import Stories from '@/components/Stories.vue'

export default {
  layout: 'case-study',
  components: {
    'app-bookcall': BookCall,
    'app-navhome': NavHome,
    'app-stories': Stories
  },

  data() {
    return {
      title: 'SEO Audit',
      description:
        'Want to see the website issues for yourself? Our free SEO Audit shows unbiased results in real-time, reported here.'
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
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
}
</script>

<style>
/* styling for seo audit forms */
#case-studies-section {
  background: linear-gradient(180deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.6)),
    url('~assets/images/google-eye.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
}

#roboaudit .sf-cnt-embed {
  width: 50vw;
}

#roboaudit * {
  font-family: 'Oxygen', sans-serif;
  line-height: unset !important;
}

#roboaudit .sf-cnt-form .btn {
  width: auto !important;
  font-size: 16px !important;
  font-weight: bold !important;
  padding: 10px !important;
}

.auditor {
  flex-direction: unset !important;
}

.searchbar {
  margin-top: 5rem !important;
}

.call-button:hover {
  color: white;
}

.mainpng {
  position: absolute;
  width: 100%;
}

button {
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
  background-color: #2f495d;
  z-index: 3;
}

/* styling for hero of title and description */
aside {
  margin-bottom: 2rem;
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

.hero-body .column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

.bigtitle {
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
  .bigtitle {
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
  .bigtitle {
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
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* width: 50vh !important; */
  }
}
@media only screen and (max-width: 768px) {
  #roboaudit .form-control {
    font-size: 16px !important;
  }

  #roboaudit .sf-cnt-form .form-control {
    height: 4vh !important;
  }
}

@media only screen and (max-width: 556px) {
  .hero-body {
    padding: 0px 1.5rem;
  }
  .bigtitle {
    font-size: 35px;
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
    /* width: 40vh !important; */
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
