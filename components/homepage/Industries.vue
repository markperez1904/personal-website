<template>
  <div
    class="outer"
    style="margin-top: 6rem"
    v-scroll-reveal.reset="{ delay: 100 }"
  >
    <div class="container my-5">
      <section>
        <!-- 1st row -->
        <div class="text-center mb-5">
          <!-- <span>SERVICES</span> -->
          <h2 class="font-weight-bold display-6 ">
            Who We <span style="color: #00c58e">Help</span>
          </h2>
        </div>
        <div class="row">

          <!-- skincare brands -->
          <div class="col-md-4 my-2">
            <div class="px-3 my-5">
              <div
                class="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style="width: 100px;height: 100px; "
              >
                <!-- svg goes here -->
                <img
                  class="beauty-icons"
                  src="~/assets/svg/skincare.svg"
                  alt="skincare"
                />
              </div>
              <div class="px-3 text-center pb-3">
                <h5 style="font-weight: 600">
                  Skincare Brands
                </h5>
              </div>
            </div>
          </div>

          <!-- hair salons -->
          <div class="col-md-4 my-2">
            <div class="px-3 my-5">
              <div
                class="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style="width: 100px;height: 100px; "
              >
                <!-- svg goes here -->
                <img
                  class="beauty-icons"
                  src="~/assets/svg/hair-salon.svg"
                  alt="hair salon"
                />
              </div>
              <div class="px-3 text-center pb-3">
                <h5 style="font-weight: 600">
                  Hair Salons
                </h5>
              </div>
            </div>
          </div>

          <!-- med spas -->
          <div class="col-md-4 my-2">
            <div class="px-3 my-5">
              <div
                class="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style="width: 100px;height: 100px; "
              >
                <!-- svg goes here -->
                <img
                  class="beauty-icons"
                  src="~/assets/svg/med-spa.svg"
                  alt="med-spa"
                />
              </div>
              <div class="px-3 text-center pb-3">
                <h5 style="font-weight: 600">
                  Med Spas
                </h5>
              </div>
            </div>
          </div>

          <!-- nail salons -->
          <!-- <div class="col-md-2 my-2">
            <div class="px-3 my-5">
              <div
                class="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style="width: 100px;height: 100px;"
              >
                <img
                  class="beauty-icons"
                  src="~/assets/svg/nail-salon.svg"
                  alt="nail-salon"
                />
              </div>
              <div class="px-3 text-center pb-3">
                <h5 style="font-weight: 600">
                  Nail Salons
                </h5>
              </div>
            </div>
          </div> -->

          <!-- misc -->
          <!-- <div class="col-md-3 my-2">
            <div class="px-3 my-5">
              <div
                class="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style="width: 100px;height: 100px;"
              >
                <img
                  class="beauty-icons"
                  src="~/assets/svg/acupuncturists.svg"
                  alt="acupuncturists"
                />
              </div>
              <div class="px-3 text-center pb-3">
                <h5 style="font-weight: 600">
                  Acupuncturists
                </h5>
              </div>
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.beauty-icons {
  width: 80%;
  filter: invert(47%) sepia(82%) saturate(815%) hue-rotate(124deg)
    brightness(98%) contrast(101%);
}

h5 {
  font-size: 18px;
}

.mb-4 {
  margin-bottom: unset !important;
}
</style>
