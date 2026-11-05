<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>

    <!-- search bar -->
    <section class="field columns is-centered">
      <div class="control has-icons-left column is-3-widescreen is-4-tablet">
        <input
          v-model="keyword"
          type="search"
          class="input is-rounded"
          placeholder="Type to search..."
        />
        <i class="icon is-small is-left icon-search"></i>
      </div>
    </section>

    <!-- blog posts -->
    <transition name="fade">
      <section
        v-if="visiblePosts.length"
        class="posts columns is-multiline is-centered"
      >
        <article
          v-for="item in visiblePosts"
          :key="item.post.id"
          class="box column is-3-widescreen is-4-tablet"
        >
          <NuxtLink :to="`/blog/${item.post.uid}/`">
            <img
              class="post-image"
              :src="getImage(item.post)"
              :alt="getAlt(item.post, item.title)"
              loading="lazy"
            />
            <p class="title is-6">{{ item.title }}</p>
          </NuxtLink>
        </article>
      </section>
    </transition>

    <!-- empty state -->
    <p class="empty-state" v-if="!visiblePosts.length">
      No tutorials match “{{ keyword }}”.
    </p>

    <!-- button -->
    <aside class="columns is-multiline is-centered is-mobile">
      <button v-if="hasMore" class="button" @click="showMore">
        Show more
      </button>
    </aside>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { getPostSummaries, PLACEHOLDER_IMAGE, SITE_URL } from '~/lib/prismic'
import { toText } from '~/lib/richText'

const title = 'Blog'
const description =
  'Welcome to my blog. Browse through a streamline of tech tutorials that suits your needs.'

const PAGE_SIZE = 9

const route = useRoute()
const keyword = ref('')
const visible = ref(PAGE_SIZE)
const searchIndex = ref(null)
const indexLoading = ref(false)
let indexPromise = null

const { data: posts } = await useAsyncData('blog-posts', getPostSummaries)

const items = computed(() =>
  (posts.value || []).map(post => ({
    post,
    title: toText(post.data.title) || 'Untitled tutorial',
    description: toText(post.data.description)
  }))
)

const indexMatches = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  if (!query || !searchIndex.value) return null

  return new Set(
    searchIndex.value
      .filter(entry => entry.text.includes(query))
      .map(entry => entry.uid)
  )
})

const filtered = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  if (!query) return items.value

  const matches = indexMatches.value

  return items.value.filter(item => {
    const localMatch = `${item.title} ${item.description}`
      .toLowerCase()
      .includes(query)

    return localMatch || (matches ? matches.has(item.post.uid) : false)
  })
})

const visiblePosts = computed(() => filtered.value.slice(0, visible.value))
const hasMore = computed(() => filtered.value.length > visible.value)

function loadSearchIndex() {
  if (indexPromise || indexLoading.value) return indexPromise

  indexLoading.value = true
  indexPromise = $fetch('/search-index.json')
    .then(entries => {
      searchIndex.value = entries
    })
    .catch(() => {
      // Local title/description search still works if the index is missing.
      indexPromise = null
    })
    .finally(() => {
      indexLoading.value = false
    })

  return indexPromise
}

watch(keyword, value => {
  visible.value = PAGE_SIZE

  if (value.trim().length >= 2) {
    loadSearchIndex()
  }
})

function showMore() {
  visible.value += PAGE_SIZE
}

function getImage(post) {
  return post?.data?.image?.url || PLACEHOLDER_IMAGE
}

function getAlt(post, fallback) {
  return post?.data?.image?.alt || fallback
}

const canonicalPath = computed(
  () => SITE_URL + route.path.replace(/\/+$/, '') + '/'
)

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalPath,
  ogImage: `${SITE_URL}${PLACEHOLDER_IMAGE}`,
  appleMobileWebAppTitle: title
})
</script>

<style scoped>
h1 {
  font-size: 30px;
  padding-top: 0.5rem;
}

h2 {
  margin: 2rem 0;
}

/* add transitions to input boxes */
input {
  transition: all 0.2s;
  background-color: #edf2f7;
}

/* adopt color scheme to input boxes */
input:focus {
  transition: all 0.2s;
  border-color: #00c58e;
}

.column {
  padding: unset;
}

.posts {
  margin-top: 1.3rem;
  margin-bottom: 2rem;
}

.post-image {
  border-radius: 6px;
}

.container {
  padding: 0 2rem;
}

.box {
  transition: all 0.2s;
  margin: 1rem;
}

.box:hover {
  transition: all 0.2s;
  transform: scale(1.03);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.title {
  text-align: center;
  padding: 1rem 5px;
}

.button {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #fff;
  background-color: #00c58e;
}

.empty-state {
  text-align: center;
  margin: 2rem 0;
  color: #718096;
}
</style>
