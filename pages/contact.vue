<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>

    <div class="field">
      <form action method="get">
        <b-field class="columns is-centered">
          <b-input class="column is-5" placeholder="Name" type="text" required></b-input>
        </b-field>

        <b-field class="columns is-centered">
          <b-input class="column is-5" placeholder="Email" type="email"></b-input>
        </b-field>

        <b-field class="columns is-centered">
          <b-input
            class="column is-5"
            type="textarea"
            minlength="20"
            maxlength="500"
            placeholder="Message..."
          ></b-input>
        </b-field>

        <b-field class="columns is-centered">
          <b-button class="is-dark" type="submit">Submit</b-button>
        </b-field>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact',
      content:
        'Feel free to send me an email. If possible, direct messages through LinkedIn is more preferable.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
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
.field .field {
	margin-bottom: 0;
}

.container {
  padding: 0 2rem;
}
h1 {
  font-size: 30px;
}

h2,
p {
  margin: 2rem 0;
}
</style>
