<template>
  <div class="container">
    <form action method="get"></form>
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
</style>
