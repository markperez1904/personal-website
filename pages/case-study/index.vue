<template>
  <div>
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
            <img class="mainpng" src="~/assets/svg/case.svg" alt="spec" />
          </aside>
        </div>
      </section>
    </div>

    <!-- component apps -->
    <app-studies></app-studies>
    <app-audit></app-audit>
    <app-bookcall></app-bookcall>
  </div>
</template>
<script>
import BookCall from '@/components/BookCall.vue'
import Studies from '@/components/Studies.vue'
import NavHome from '@/components/NavHome.vue'
import Audit from '@/components/homepage/Audit.vue'


export default {
  layout: 'case-study',
  data() {
    return {
      title: 'Case Studies',
      description: 'description'
    }
  },

  head() {
    return {
      title: this.title,
      description: this.description,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex,noarchive,nofollow'
        }
      ]
    }
  },

  components: {
    'app-bookcall': BookCall,
    'app-studies': Studies,
    'app-navhome': NavHome,
    'app-audit': Audit
  }
}
</script>
<style scoped>
#case-studies-section {
  background: linear-gradient(135deg, #00966b, #17ffbe);
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
  background: linear-gradient(135deg, #00966b, #17ffbe);
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
    font-size: 40px;
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
