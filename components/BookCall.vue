<template>
  <div>
    <section class="skewed-top-left skewed-bottom-right">
      <div class="skew skew-top ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-6 bg-gray-50 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="max-w-xl mx-auto text-center">
            <h2 class="mb-4 text-4xl lg:text-5xl font-bold font-heading">
              Ready to see what we can do for you?
            </h2>
            <p class="max-w-md mx-auto mb-6 text-gray-500 leading-loose">
              Book a free consultation and we’ll discuss a customized SEO
              strategy to grow your business. If you work with us for the
              <u>first 30 days</u>, we'll build a <em>FREE</em> backlink profile
              across <strong>100+</strong> reputable social networks.
            </p>
            <n-link
              class="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
              to="/book/"
              >Book a Call</n-link
            >
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
    </section>
  </div>
</template>
<style scoped>
.leading-loose {
font-size: 18px;
}
</style>
