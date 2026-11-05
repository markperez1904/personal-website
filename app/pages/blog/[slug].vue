<template>
  <div class="container">
    <section class="columns is-centered is-multiline">
      <!-- Blog Post -->
      <article class="column is-7">
        <!-- 1st ClickBank Banner -->
        <figure class="banner">
          <a
            href="http://mperez1904.viddyoze.hop.clickbank.net"
            target="_blank"
            rel="noopener"
            aria-label="viddyoze software"
          >
            <img
              class="box banner-image"
              :src="viddyozeBanner"
              alt="Automated Video Animation Software"
            />
          </a>
        </figure>

        <!-- Title, Date, and Description -->
        <h1>{{ postTitle }}</h1>
        <p class="date">
          Updated
          <time>
            {{ postDate }}
          </time>
        </p>
        <h2>{{ postDescription }}</h2>

        <!-- Main image -->
        <img
          class="featured-img"
          :src="postImagePath"
          :alt="postImageAlt"
        />
        <br />

        <!-- Blog Content (rendered Prismic rich text) -->
        <div v-html="contentHtml"></div>

        <!-- 2nd ClickBank Banner -->
        <figure class="banner">
          <a
            href="http://mperez1904.abdo120.hop.clickbank.net/"
            target="_blank"
            rel="noopener"
            aria-label="vidtoon software"
          >
            <img
              class="box banner-image"
              :src="vidtoonBanner"
              alt="2D Cartoon Animation Software"
            />
          </a>
        </figure>

        <!-- Disqus Comment Section -->
        <DisqusComments
          shortname="mark-perez"
          :identifier="postId"
          :url="postUrl"
          :title="postTitle"
        />
      </article>

      <!-- Side Bar -->
      <aside class="column is-3-desktop is-7-tablet is-10-touch is-12-mobile">
        <SideBar :recent-posts="recentPosts" />
      </aside>
    </section>

    <MailchimpPopup />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import viddyozeBanner from '~/assets/images/viddyoze-banner.png'
import vidtoonBanner from '~/assets/images/vidtoon-banner.jpg'
import {
  getPost,
  getRecentPosts,
  PLACEHOLDER_IMAGE,
  SITE_URL
} from '~/lib/prismic'
import { formatDate, toHtml, toText } from '~/lib/richText'

const route = useRoute()
const uid = String(route.params.slug)

const { data: post } = await useAsyncData(`blog-post-${uid}`, () => getPost(uid))

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tutorial not found',
    fatal: true
  })
}

const { data: recent } = await useAsyncData('recent-posts', () =>
  getRecentPosts(3)
)

const postTitle = computed(
  () => toText(post.value?.data?.title) || 'Tutorial'
)
const postDescription = computed(
  () => toText(post.value?.data?.description) || ''
)
const postImagePath = computed(
  () => post.value?.data?.image?.url || PLACEHOLDER_IMAGE
)
const postImage = computed(() => {
  const image = postImagePath.value
  return image.startsWith('http') ? image : `${SITE_URL}${image}`
})
const postImageAlt = computed(
  () => post.value?.data?.image?.alt || postTitle.value
)
const postId = computed(() => post.value?.id || uid)
const postUrl = computed(() => `${SITE_URL}/blog/${uid}/`)
const postDate = computed(() =>
  formatDate(post.value?.last_publication_date)
)
const contentHtml = computed(() => toHtml(post.value?.data?.content))
const recentPosts = computed(() => recent.value?.results || [])
const canonicalPath = computed(
  () => SITE_URL + route.path.replace(/\/+$/, '') + '/'
)

useSeoMeta({
  title: postTitle,
  description: postDescription,
  ogType: 'article',
  ogTitle: postTitle,
  ogDescription: postDescription,
  ogUrl: canonicalPath,
  ogImage: postImage,
  twitterCard: 'summary_large_image',
  appleMobileWebAppTitle: postTitle
})

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalPath.value
        },
        headline: postTitle.value,
        description: postDescription.value,
        image: postImage.value,
        author: {
          '@type': 'Person',
          name: 'Mark Perez'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Mark Perez Digital',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/icon-512.png`,
            width: 512,
            height: 512
          }
        },
        datePublished: post.value?.first_publication_date,
        dateModified: post.value?.last_publication_date
      })
    }
  ]
}))
</script>

<style scoped>
h1 {
  font-size: 30px;
  padding-top: 1rem;
  letter-spacing: 1px;
}

h2 {
  margin: 1rem;
  font-weight: bold;
}

aside {
  margin: 1rem;
  margin-top: 3rem;
}

h1,
h2,
.date {
  text-align: center;
}

.container {
  padding: 0 2rem;
}

.date {
  font-size: 15px;
  color: #718096;
  margin: 0 0 30px;
  letter-spacing: 1px;
}

.featured-img {
  margin: 1rem 0;
  border-radius: 6px;
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.banner {
  text-align: center;
  margin: 0.5rem 0 0 0;
}

.banner .box {
  padding: unset;
  display: inline-block;
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.banner-image {
  border-radius: 6px;
}
</style>
