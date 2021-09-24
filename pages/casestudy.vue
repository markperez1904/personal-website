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
            <img class="mainpng" src="~/assets/svg/case.svg" alt="spec" />
          </aside>
        </div>
      </section>
      <!-- place the video here -->
      <div id="salon-vid"></div>
    </region>

    <case-volume></case-volume>
    <case-quick></case-quick>
    <case-text></case-text>
    <case-request></case-request>
  </div>
</template>
<script>
import RequestProposal from '@/components/RequestProposal.vue'
import QuickQuestion from '@/components/QuickQuestion.vue'
import Volume from '@/components/Volume.vue'
import CaseText from '@/components/CaseText.vue'

export default {
  layout: 'casestudy',
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
    'case-request': RequestProposal,
    'case-quick': QuickQuestion,
    'case-volume': Volume,
    'case-text': CaseText
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
  font-size: 69px;
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
