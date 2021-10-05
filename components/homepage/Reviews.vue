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
            Don't Take Our <span style="color: #00c58e">Word</span> For It
          </h2>
        </div>
        <div class="row">
          <div class="col-md-6 my-2">
            <div class="px-3 my-5">
              <div>
                <iframe
                  class="youtube-vid"
                  src="https://www.youtube.com/embed/vHuQMaVGMW8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div class="col-md-6 my-2">
            <div class="px-3 my-5">
              <div
                class="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style="width: 100px;height: 100px; "
              >
                <!-- svg goes here -->
        
              </div>
            </div>
          </div>
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
