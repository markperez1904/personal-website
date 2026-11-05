<template>
  <div>
    <!-- main background image -->
    <section class="hero is-fullheight">
      <div
        class="hero-body columns is-centered is-vcentered headshot"
        :style="portraitStyle"
      >
        <!-- titles and resume button -->
        <aside class="container section column is-narrow has-text-right">
          <!-- titles -->
          <h1 class="title">{{ title }}</h1>

          <!-- subtitles with typewriter -->
          <h2 class="subtitle">
            <Typewriter :text="typerText" />
          </h2>

          <!-- resume button -->
          <NuxtLink to="/blog/" class="button is-centered">
            My tutorials
          </NuxtLink>
        </aside>
      </div>
    </section>

    <Portfolio />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import portrait from '~/assets/images/mark-suit-portrait.png'
import { getPostCount } from '~/lib/prismic'

const title = 'Mark Perez'
const description =
  'Mark Perez is a self-learning tech enthusiast in azure and linux. Produces content on YouTube.'
const canonicalPath = '/'
const ogImage = 'https://markperez.dev/images/blog-placeholder.png'

const portraitStyle = {
  backgroundImage: `url(${portrait})`
}

const { data: postCount } = await useAsyncData('post-count', getPostCount)

const typerText = computed(() => {
  const text = ['Tech enthusiast']

  if (postCount.value) {
    text.push(`Produced over ${postCount.value} tutorials`)
  }

  return text
})

useSeoMeta({
  title: 'Tech Enthusiast',
  description,
  ogType: 'website',
  ogTitle: title,
  ogDescription: description,
  ogUrl: `https://markperez.dev${canonicalPath}`,
  ogImage,
  appleMobileWebAppTitle: title
})
</script>

<style scoped>
.button {
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
  background-color: #00c58e;
  border-color: rgba(255, 255, 255, 0);
}

.title {
  font-size: 70px;
  letter-spacing: 12px;
}

.subtitle {
  font-size: 24px;
}

.is-fullheight {
  min-height: calc(100vh - 6rem);
  background-color: #dbdbdb;
  background-image: linear-gradient(to top, #98a8ac 0%, #ffffff 100%);
  background-repeat: no-repeat;
  background-size: cover;
}

.headshot {
  min-height: calc(100vh - 6rem);
  margin-left: 0;
  margin-right: 0;
  background-blend-mode: lighten;
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: bottom 12px left 20%;
}

/* specify background image size on certain breakpoint */
@media only screen and (max-width: 1630px) {
  .headshot {
    background-size: 35%;
    background-position: bottom 12px left 20%;
  }
}

@media only screen and (max-width: 1407px) {
  .headshot {
    background-size: 40%;
    background-position: bottom 12px left 20%;
  }
}

@media only screen and (max-width: 1215px) {
  .headshot {
    background-size: 45%;
    background-position: bottom 12px left 20%;
  }
}

/* change image transparency when window is smaller */
@media only screen and (max-width: 1023px) {
  .headshot {
    background-color: rgba(255, 255, 255, 0.65);
    background-size: 50%;
    background-position: bottom 12px left 20%;
  }
}

@media only screen and (max-width: 780px) {
  .headshot {
    background-size: 70%;
    background-position: bottom 12px right 20%;
  }

  .has-text-right {
    text-align: left !important;
  }
}

@media only screen and (max-width: 556px) {
  .headshot {
    background-size: 90%;
    background-position: bottom 12px right 10%;
  }

  .title {
    font-size: 50px;
    letter-spacing: 4px;
  }

  .has-text-right {
    text-align: left !important;
  }
}
</style>
