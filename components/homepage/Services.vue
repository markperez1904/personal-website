<template>
  <div
    class="outer"
    style="margin-top: 5rem"
    v-scroll-reveal.reset="{ delay: 50 }"
  >
    <section>
      <div class="py-20 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div class="max-w-md lg:mx-auto">
                <span class="text-green-600 font-bold"></span>
                <h2 class="my-2 text-4xl lg:text-5xl font-bold font-heading">
                  Our Services
                </h2>
                <p
                  class="mb-6 text-gray-500 leading-loose"
                  style="margin-top: 1.5rem"
                >
                  You're a beauty brand. You could write a handbook on helping
                  your customers look and feel good.
                </p>
                <p class="mb-6 text-gray-500 leading-loose">
                  However, opportunities to be found online are being lost due
                  to the lack of effective SEO strategies,
                  <strong>and that's where we come in.</strong>
                </p>
                <p class="mb-6 text-gray-500 leading-loose">
                  We ensure your company shines from the inside-out with our
                  proven framework:
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-wrap -mx-4">
              <div class="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                <div class="mb-8 py-6 pl-6 pr-4 shadow rounded bg-white">
                  <span class="mb-4 inline-block p-3 rounded-lg bg-green-100">
                     <img
                      class="w-10 h-10 text-green-500"
                      src="~assets/svg/seo-analysis.svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading">
                    1. Site Analysis
                  </h4>
                  <p class="text-gray-500 leading-loose">
                    We start by analyzing current trends and understanding the
                    search words that will help your business rank on search
                    engines.
                  </p>
                </div>
                <div class="py-6 pl-6 pr-4 shadow rounded bg-white">
                  <span class="mb-4 inline-block p-3 rounded-lg bg-green-100">
                    <img
                      class="w-10 h-10 text-green-500"
                      src="~assets/svg/content-plan.svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading">
                    2. Content Plan
                  </h4>
                  <p class="text-gray-500 leading-loose">
                    We’ll create your personalized content strategy; always
                    built uniquely for each and every company.
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:mt-20 px-4">
                <div class="mb-8 py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                  <span class="mb-4 inline-block p-3 rounded bg-green-100">
                     <img
                      class="w-10 h-10 text-green-500"
                      src="~assets/svg/social-media.svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading">
                    3. Social Media Audit
                  </h4>
                  <p class="text-gray-500 leading-loose">
                    We'll help you secure your business name across multiple
                    profiles.
                  </p>
                </div>
                <div class="py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                  <span class="mb-4 inline-block p-3 rounded bg-green-100">
                    <img
                      class="w-10 h-10 text-green-500"
                      src="~assets/svg/backlink.svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading">
                    4. Backlink Acquisition
                  </h4>
                  <p class="text-gray-500 leading-loose">
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
    </section>
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
.mini-icons {
  width: 10%;
  filter: invert(47%) sepia(82%) saturate(815%) hue-rotate(124deg)
    brightness(98%) contrast(101%);
}

.max-w-md p {
  font-size: 18px;
}
</style>
