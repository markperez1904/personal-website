<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{description}}</h2>

    <aside class="links">
      <NuxtLink to="/blog/">Return to Blog >></NuxtLink>
    </aside>
  </div>
</template>

<script setup>
const title = 'Thank You'
const description =
  'Your Linux Guide will be availible in your inbox. Give it around a few minutes to arrive.'

useSeoMeta({
  title,
  description,
  robots: 'noindex,noarchive,nofollow'
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

.container {
  padding: 0 2rem;
}

.links {
  text-align: center;
}
</style>
