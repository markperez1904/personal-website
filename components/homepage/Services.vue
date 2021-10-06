<template>
  <div
    class="outer"
    style="margin-top: 5rem"
    v-scroll-reveal.reset="{ delay: 100 }"
  >
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <div class="py-4">
            <!-- <span class="text-secondary text-uppercase">services</span> -->
            <h2 class="text-capitalize font-weight-bold my-3">
              Our <span style="color: #00c58e">Services</span>
            </h2>
            <p class="para-secondary" style="line-height: 2;">
              You're a beauty brand. You could write a handbook on helping your
              customers <em>look</em> and <em>feel</em> good.
            </p>
            <p class="para-secondary" style="line-height: 2;">
              However, opportunities to be found online are being lost due to
              the lack of effective SEO strategies,
              <strong>and that's where we come in.</strong>
            </p>
            <p class="para-secondary" style="line-height: 2;">
              We ensure your company shines from the inside-out with
              our proven framework (applicable even outside the industry):
            </p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 px-4 my-2">
              <!-- put svg here -->
              <img
                class="mini-icons"
                src="~/assets/svg/seo-analysis.svg"
                alt="seo analysis"
              />
              <div class="mt-3">
                <h5 class="mb-2" style="font-weight: 600;">
                  <a href="#" style="color: #00c58e">1. Full-Scale SEO</a>
                </h5>
                <p class="text-secondary">
                  We start by analyzing current trends and understanding the
                  search words that will help your business rank on search
                  engines.
                </p>
              </div>
            </div>
            <div class="col-md-6 px-4 my-2">
              <!-- put svg here -->
              <img
                class="mini-icons"
                src="~/assets/svg/chess.svg"
                alt="content-plan"
              />
              <div class="mt-3">
                <h5 class="mb-2" style="font-weight: 600;">
                  <a href="#" style="color: #00c58e">2. Content Plan</a>
                </h5>
                <p class="text-secondary">
                  We’ll create your personalized content strategy; always built
                  uniquely for each and every company.
                </p>
              </div>
            </div>
            <div class="col-md-6 px-4 my-2">
              <!-- put svg here -->
              <img
                class="mini-icons"
                src="~/assets/svg/search.svg"
                alt="social media"
              />
              <div class="mt-3">
                <h5 class="mb-2" style="font-weight: 600;">
                  <a href="#" style="color: #00c58e"
                    >3. Social Media Analysis</a
                  >
                </h5>
                <p class="text-secondary">
                  We'll help you secure your business name across multiple
                  profiles.
                </p>
              </div>
            </div>
            <div class="col-md-6 px-4 my-2">
              <!-- put svg here -->
              <img
                class="mini-icons"
                src="~/assets/svg/backlink.svg"
                alt="backlink"
              />
              <div class="mt-3">
                <h5 class="mb-2" style="font-weight: 600;">
                  <a href="#" style="color: #00c58e">4. Backlink Acqusition</a>
                </h5>
                <p class="text-secondary">
                  We determine the type of backlinks to acquire, which
                  ultimately sets the stage for building your authority on
                  Google.
                </p>
              </div>
            </div>
          </div>
        </div>
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
.text-capitalize {
  font-weight: bold;
  font-size: 32px;
}

.para-secondary {
  font-size: 18px;
  padding-bottom: 1rem;
}

.text-secondary {
  padding-bottom: 1rem;
}

.mb-2 {
  font-size: 20px;
}

.mini-icons {
  width: 10%;
  filter: invert(47%) sepia(82%) saturate(815%) hue-rotate(124deg)
    brightness(98%) contrast(101%);
}
</style>
