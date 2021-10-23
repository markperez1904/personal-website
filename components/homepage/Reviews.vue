<template>
  <div
    id="outer"
    style="margin-top: 6rem"
    v-scroll-reveal.reset="{ delay: 100 }"
  >
    <div class="container my-5">
      <section>
        <!-- 1st row -->
        <div class="text-center mb-5">
          <!-- <span>SERVICES</span> -->
          <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">
            Don't Take Our <span class="text-green-600">Word</span> For It
          </h2>
        </div>
        <div>
          <!-- reviews -->
          <div class="flex flex-wrap">
            <!-- 1st review -->
            <div class="md:w-1/2 sm:w-full">
              <div class="snippets" style="text-align:left">
                <span
                  style="font-weight:bold; font-style: italic"
                  class="text-green-600"
                  >43% more appointments</span
                >
                from traffic boosts:
              </div>
              <iframe
                class="youtube-vid"
                src="https://drive.google.com/file/d/1FG6pyVlheUq-gw1pH9rZvmhge199AJja/preview"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <!-- 2nd review -->
            <div class="md:w-1/2 sm:w-full">
              <!-- <div class="snippets" style="text-align:left">
                <span
                  style="color: #00c58e; font-weight:bold; font-style: italic"
                  >43% more appointments</span
                >
                from traffic boosts:
              </div>
              <iframe
                class="youtube-vid"
                src="https://www.youtube.com/embed/vHuQMaVGMW8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> -->
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

#outer {
  margin-bottom: 5rem;
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

.snippets {
  font-size: 20px;
  margin: 0.5rem 0;
}
</style>
