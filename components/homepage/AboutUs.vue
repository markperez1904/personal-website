<template>
  <div class="main-page">
    <!-- 1st section -->
    <div class="about-us container">
      <!-- column -->
      <div class="about-us-info">
        <div class="about-us-h1">About Us</div>

        <div class="about-us-text">
          <p>
            MP Digital is an inclusive group in SEO and marketing professionals.
            We provide industry-leading services to both local and national
            businesses, helping them expand and thrive within the competitive
            online space. As we continue to grow our personal brand, we strive
            to maintain our honest values of providing top-notch customer
            service and continuing education for all team members. Our team
            works diligently to bring you the very best results possible. We are
            constantly learning new techniques to assist your company's growth.
          </p>
        </div>
      </div>

      <!-- column -->
      <div class="about-us-img">
        <img src="~/assets/svg/aboutus.svg" alt="about-us" />
      </div>
    </div>

    <!-- 2nd section -->
    <div class="about-us second-sec">
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
          Do you want to see how your website could be performing better in
          search engines? Of course you do! And thanks to our free SEO Auditor,
          you can! We study your website and provide a range of recommendations
          to help you on your way.
        </p>

        <button class="button cta" :style="cta">
          <n-link to="/audit/" :style="lighten">Free SEO Audit</n-link>
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
