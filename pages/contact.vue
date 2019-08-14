<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>

    <section v-if="messageSent" class="columns is-centered">
      <b-message type="is-success" class="column is-5">Message Sent!</b-message>
    </section>

    <!-- Email API form submission -->
    <form
      @submit="handleRequest"
      action="https://formspree.io/markperez1904@gmail.com"
      method="POST"
    >
      <!-- Name nad Email -->
      <section class="field control columns is-centered">
        <input type="text" name="name" class="input column is-3" placeholder="Name" required />
        <br />
        <input type="email" name="email" class="input column is-3" placeholder="Email" required />
      </section>
      <br />

      <!-- Message -->
      <section class="field control columns is-centered">
        <div class="column is-6">
          <textarea class="textarea" placeholder="Message..." required></textarea>
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
      messageSent: false,
      title: 'Contact',
      content:
        'Feel free to send me an email. If possible, direct messages through LinkedIn is more preferable.'
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
  },
  methods: {
    handleRequest() {
      this.messageSent = true
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 2rem;
}
.hidden {
  display: none;
}
h1 {
  font-size: 30px;
  padding-top: 2rem;
}

h2,
p {
  margin: 2rem 0;
}
</style>
