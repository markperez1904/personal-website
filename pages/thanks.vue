<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{description}}</h2>

    <aside class="links">
      <nuxt-link to="/">Return to Homepage >></nuxt-link>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Thank You',
      description:
        "Thank you for subscribing to our newsletter. In addition to this, we'll be sending you a free e-book."
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
