<template>
  <div class="outer" v-scroll-reveal.reset="{ delay: 50 }">
    <!-- main component -->
    <section>
      <div class="py-20 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="mb-16 max-w-md mx-auto text-center">
            <span class="text-green-600 font-bold"></span>
            <h2 class="text-4xl lg:text-5xl font-bold font-heading">
              Who We Help
            </h2>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div class="py-12 px-6 bg-white rounded shadow text-center">
                <span class="mb-6 inline-block p-2 rounded-lg bg-green-100">
                  <img
                    class="w-10 h-10 text-green-500"
                    src="~assets/svg/skincare.svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
                </span>
                <h3 class="px-8 mb-4 text-2xl font-bold font-heading">
                  Skincare Brands
                </h3>
                <p class="text-gray-500 underline">
                  <n-link to="/skincare-brands/">Learn more</n-link>
                </p>
              </div>
            </div>
            <div class="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div class="py-12 px-6 bg-white rounded shadow text-center">
                <span class="mb-6 inline-block p-2 rounded-lg bg-green-100">
                  <img
                    class="w-10 h-10 text-green-500"
                    src="~assets/svg/cosmetics.svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
                </span>
                <h3 class="px-8 mb-4 text-2xl font-bold font-heading">
                  Cosmetic Goods
                </h3>
                <p class="text-gray-500 underline">
                  <n-link to="/cosmetic-goods/">Learn more</n-link>
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <div class="py-12 px-6 bg-white rounded shadow text-center">
                <span class="mb-6 inline-block p-2 rounded bg-green-100">
                  <img
                    class="w-10 h-10 text-green-500"
                    src="~assets/svg/med-spa.svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
                </span>
                <h3 class="px-8 mb-4 text-2xl font-bold font-heading">
                  Beauty Salons
                </h3>
                <p class="text-gray-500 underline">
                  <n-link to="/beauty-salons/">Learn more</n-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.beauty-icons {
  width: 80%;
  filter: invert(47%) sepia(82%) saturate(815%) hue-rotate(124deg)
    brightness(98%) contrast(101%);
}
</style>
