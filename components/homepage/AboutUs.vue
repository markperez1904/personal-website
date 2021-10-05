<template>
  <div class="main-page">
    <!-- 1st section -->
    <div class="about-us container" v-scroll-reveal.reset="{ delay: 100 }">
      <!-- column -->
      <div class="about-us-info">
        <div class="about-us-h1">About Us</div>

        <div class="about-us-text">
          <p>
            MP Digital is an inclusive group of marketing professionals
            specializing in SEO services. We’re proud to provide best-in-class
            services to both local and national businesses, helping beauty
            brands build their online presence. At MP digital we strive to
            maintain our core values:
          </p>
          <ul>
            <li>
              Execute best-in-class SEO campaigns for beauty brands with a core
              focus on producing positive results
            </li>
            <li>
              Provide top-notch customer service and excellent communication
              with every client
            </li>
            <li>
              Continue to learn and educate team members to implement the best
              strategies for every client
            </li>
          </ul>
        </div>
      </div>

      <!-- column -->
      <div class="about-us-img">
        <img src="~/assets/svg/aboutus.svg" alt="about-us" />
      </div>
    </div>

    <!-- 2nd section -->
    <div class="about-us second-sec" v-scroll-reveal.reset="{ delay: 100 }">
      <!-- column -->
      <div class="about-us-img" :style="centerism">
        <img
          class="founder"
          src="~/assets/images/mark-portrait.png"
          alt="about-us"
        />
      </div>

      <!-- column -->
      <div class="about-us-info container">
        <div class="about-us-h1">Meet the Team Lead</div>

        <p class="info">
          With an extensive background centered around entrepreneurship, Mark
          has over 3+ years of experience in the PaaS, marketing, and
          advertising industry - bringing unique and innovative perspectives as
          an online professional to B2C & B2B companies.
        </p>
        <br />
        <p class="info">
          When he isn't working with his clients on new projects, he can be
          found jogging around his hometown, or uncovering the latest software
          trends.
        </p>
      </div>
    </div>

    <!-- 3rd section -->
    <div class="about-us container">
      <!-- column -->
      <div class="about-us-info">
        <div class="about-us-h1">Enough about us, what about you?</div>

        <p class="info">
          Want to take a peak at what SEO services can do for you without
          hopping on a call? Use our free SEO auditor to assess how a tactical
          solution can drive new revenue and power your brands growth.
        </p>

        <button class="button cta" :style="cta">
          <a href="/audit/" :style="lighten">Free SEO Audit</a>
        </button>
      </div>

      <!-- column -->
      <div class="about-us-img" :style="centerism">
        <img
          class="auditor"
          src="~/assets/svg/client-focus.svg"
          alt="about-us"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    centerism() {
      return {
        textAlign: 'center'
      }
    },
    bolden() {
      return {
        fontWeight: 'bold'
      }
    },
    cta() {
      return {
        backgroundColor: '#00c58e'
      }
    },
    lighten() {
      return {
        color: '#ffffff'
      }
    }
  }
}
</script>

<style scoped>
.founder {
  width: 60%;
}

.auditor {
  width: 80%;
}

.info {
  font-size: 18px;
  line-height: 30px;
  padding-right: 1rem;
  padding-bottom: 1rem;
}

.second-sec {
  background: linear-gradient(180deg, rgba(255, 255, 255), rgb(237, 255, 239));
}

.about-us {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.about-us-h1 {
  width: 100%;
  font-size: 34px;
  line-height: 41px;
  color: #2f495e;
  font-weight: bold;
  text-align: left;
  padding-bottom: 20px;
}
.about-us-text {
  font-size: 18px;
  line-height: 30px;
  color: #797979;
  font-weight: 300;
}
.about-us-info {
  width: 50%;
}
.about-us-img {
  width: 50%;
}

@media screen and (max-width: 768px) {
  .about-us {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .about-us-info {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    order: 1;
  }
  .about-us-h1 {
    text-align: center;
  }
  .about-us-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
    padding: 0 20px;
  }
  .about-us-text {
    display: flex;
    justify-self: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    text-align: center;
    padding: 0 20px;
  }
  .cta {
    margin-bottom: 2rem;
  }
}
</style>
