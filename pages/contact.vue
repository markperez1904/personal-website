<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>

    <!-- Email API form submission -->
    <form
      @submit="handleRequest"
      action="https://formspree.io/markperez1904@gmail.com"
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
        <input type="submit" value="Submit" class="button is-black" />
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact',
      content:
        'Feel free to send me an email. I will get back to them in no time!'
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content
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

h2,
p {
  margin: 2rem 0;
}

/* adopt color scheme to input boxes */
input:focus,
textarea:focus {
  border-color: #42b983;
  transition: all 0.2s;
}

.container {
  padding: 0 2rem;
}

.hidden {
  display: none;
}
</style>
