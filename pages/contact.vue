<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>

    <section v-if="messageSent" class="columns is-centered">
      <b-message type="is-success" class="column is-5">Message Sent!</b-message>
    </section>

    <form
      @submit="handleRequest"
      action="https://formspree.io/markperez1904@gmail.com"
      method="POST"
    >
      <b-field class="columns is-centered">
        <b-input name="name" class="column is-5" placeholder="Name" type="text" required></b-input>
      </b-field>

      <b-field class="columns is-centered">
        <b-input name="email" class="column is-5" placeholder="Email" type="email" required></b-input>
      </b-field>

      <b-field class="columns is-centered">
        <b-input
          name="message"
          class="column is-5"
          type="textarea"
          minlength="20"
          maxlength="500"
          placeholder="Message..."
          required
        ></b-input>
      </b-field>

      <b-field class="columns is-centered">
        <button type="submit" class="button is-dark">Submit</button>
      </b-field>
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
