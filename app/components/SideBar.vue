<template>
  <div>
    <section class="columns is-multiline is-vcentered is-centered">
      <!-- Email Lead Generator -->
      <aside class="column is-narrow is-12-widescreen is-4-tablet">
        <p class="sidebar-title box">Free Linux Guide</p>
        <Email />
      </aside>

      <!-- 3 Recent Blog Posts -->
      <aside class="column is-narrow is-12-widescreen is-4-tablet">
        <p class="sidebar-title box">Recent Posts</p>
        <article
          v-for="post in recentPosts"
          :key="post.id"
          class=""
        >
          <NuxtLink :to="`/blog/${post.uid}/`">
            <img
              class="post-image"
              :src="getImage(post)"
              :alt="getAlt(post)"
              loading="lazy"
            />
          </NuxtLink>
        </article>
      </aside>

      <!-- AdSense component -->
      <aside class="column is-narrow is-12-widescreen is-12-desktop">
        <AdSense ad-slot="2763616750" />
      </aside>
    </section>
  </div>
</template>

<script setup>
defineProps({
  recentPosts: {
    type: Array,
    default: () => []
  }
})

function getImage(post) {
  return post?.data?.image?.url || '/images/blog-placeholder.png'
}

function getAlt(post) {
  return post?.data?.image?.alt || 'Recent blog post'
}
</script>

<style scoped>
.section {
  padding-bottom: 1rem;
}

.sidebar-title {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  background-color: #edf2f7;
}

.post-image {
  transition: all 0.2s;
  margin-bottom: 0.5rem;
}

.post-image {
  border-radius: 6px;
  width: 90%;
}

.post-image:hover {
  transition: all 0.2s;
  transform: scale(1.03);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.box {
  padding: 0.3rem;
}

.column {
  text-align: center;
}
</style>
