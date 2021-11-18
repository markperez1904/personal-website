<template>
  <!-- root -->
  <div class="entire-footer">
    <!-- entire footer -->
    <section>
      <div class="py-20 bg-50 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/3 mb-16 lg:mb-0">
              <n-link
                class="inline-block mb-3 text-3xl font-bold leading-none"
                to="/"
                ><img
                  src="~static/mp-digital-logo-dark.png"
                  alt=""
                  width="160"
              /></n-link>
            </div>
            <div
              class="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between"
            >
              <div class="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <div class="mb-6 text-2xl font-bold">Company</div>
                <ul class="listings">
                  <li class="mb-4">
                    <n-link class="text-gray-800 hover:text-gray-600" to="/about/"
                      >About Us</n-link 
                    >
                  </li>
                  <li class="mb-4">
                    <n-link class="text-gray-800 hover:text-gray-600" to="/contact/"
                      >Contact Us</n-link
                    >
                  </li>
                  <li class="mb-4">
                    <n-link class="text-gray-800 hover:text-gray-600" to="/case-study/"
                      >Case Studies</n-link
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="/book/"
                      >Book a Call</a
                    >
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <div class="mb-6 text-2xl font-bold">Industries</div>
                <ul class="listings">
                  <li class="mb-4">
                    <n-link class="text-gray-800 hover:text-gray-600" to="/skincare-brands/"
                      >Skincare Brands</n-link
                    >
                  </li>
                  <li class="mb-4">
                    <n-link class="text-gray-800 hover:text-gray-600" to="/cosmetic-goods/"
                      >Cosmetic Goods</n-link
                    >
                  </li>
                  <li class="mb-4">
                    <n-link class="text-gray-800 hover:text-gray-600" to="/beauty-salons/"
                      >Beauty Salons</n-link
                    >
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/3 lg:w-auto">
                <div class="mb-6 text-2xl font-bold">Legal</div>
                <ul class="listings">
                  <li class="mb-4">
                    <n-link class="text-gray-800 hover:text-gray-600" to="/terms/"
                      >Terms of Service</n-link
                    >
                  </li>
                  <li>
                    <n-link class="text-gray-800 hover:text-gray-600" to="/privacy/"
                      >Privacy Policy</n-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p
            class="lg:text-center text-sm text-gray-400 pt-12 mt-4"
          >
            © {{getYear}} - MP Digital
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.listings {
  list-style: none;
  margin-left: unset;
}
</style>
