<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>

    <!-- Email API form submission -->
    <form
      action="https://formspree.io/info@markperez.dev"
      method="POST"
    >
      <!-- Name nad Email -->
      <section class="field control columns is-centered">
        <input
          type="text"
          name="name"
          class="input column is-3"
          placeholder="Name"
          aria-label="full name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          class="input column is-3"
          placeholder="Email"
          aria-label="email address"
          required
        />
      </section>
      <br />

      <!-- Message -->
      <section class="field control columns is-centered">
        <div class="column is-6">
          <textarea
            class="textarea"
            name="message"
            placeholder="Message..."
            aria-label="message"
            required
          ></textarea>
        </div>
      </section>
      <br />

      <!-- Submit -->
      <section class="field control columns is-centered is-mobile">
        <input type="submit" value="Submit" class="button" />
      </section>
    </form>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const title = 'Contact'
const description =
  'Feel free to contact and send me an email. I will get back to them in no time!'

const route = useRoute()
const canonicalUrl = computed(
  () => `https://markperez.dev${route.path.replace(/\/+$/, '')}/`
)

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalUrl,
  ogImage: 'https://markperez.dev/images/blog-placeholder.png',
  appleMobileWebAppTitle: title
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }]
}))
</script>

<style scoped>
h1 {
  font-size: 30px;
  padding-top: 0.5rem;
}

h2,
p {
  margin: 2rem 0;
}

/* add transitions to input boxes */
input,
textarea {
  transition: all 0.2s;
  background-color: #edf2f7;
}

/* adopt color scheme to input boxes */
input:focus,
textarea:focus {
  transition: all 0.2s;
  border-color: #00c58e;
}

textarea:active {
  border-color: #00c58e;
}

.container {
  padding: 0 2rem;
}

.hidden {
  display: none;
}

.button {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  background-color: #00c58e;
}
</style>
