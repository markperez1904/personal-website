<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{description}}</h2>

    <aside class="links">
      <nuxt-link to="/blog/">Return to Blog >></nuxt-link>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Thank You',
      description:
        'Your Linux Guide will be availible in your inbox. Give it around a few minutes to arrive.'
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex,noarchive,nofollow'
        }
      ]
    }
  }
}
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
