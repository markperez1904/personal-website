<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>
    <section class="columns is-centered">
      <div class="content column">
        <h5>Software</h5>
        <ul>
          <li>OS: Ubuntu 18.04</li>
          <li>Editor: VSCode</li>
          <li>Screen Recorder: OBS</li>
          <li>Video Editor: Kdenlive</li>
        </ul>
      </div>

      <div class="content column">
        <h5>Hardware</h5>
        <ul>
          <li>Laptop: XPS 13 (9360)</li>
          <li>Keyboard: Velocifire VM01</li>
          <li>Mouse: Logitech G402</li>
          <li>Monitor: Dell SE2219H</li>
          <li>Mic: Fifine USB Microphone</li>
        </ul>
      </div>

      <div class="content column">
        <h5>Equipment</h5>
        <ul>
          <li>Table: Tribesigns Modern L-Shaped Desk</li>
          <li>Camera: OnePlus 5</li>
          <li>Chair: BestOffice Racing Gaming Chair</li>
          <li>Lamp: TaoTronics LED Desk Lamp</li>
          <li>Laptop Stand: Seenda Adjustable Laptop Stand</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Gear',
      content:
        'Here is a list of all of the gear I use on a daily basis. I will try out more equipment whenever I get the chance.'
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
.container {
  padding: 0 2rem;
}
h1 {
  font-size: 30px;
  padding-top: 2rem;
}

h2{
  margin: 2rem 0;
}
</style>
