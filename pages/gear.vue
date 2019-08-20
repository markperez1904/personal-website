<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>
    <section class="columns is-centered is-multiline">
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Software</h5>
        <ul>
          <li>OS: Ubuntu 18.04</li>
          <li>Editor: VSCode</li>
          <li>Screen Recorder: OBS</li>
          <li>Video Editor: Kdenlive</li>
        </ul>
      </div>

      <!-- Amazon Affiliate Links for Hardware -->
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Hardware</h5>
        <ul>
          <li>
            <a href="https://amzn.to/33NjmP9" target="_blank">Laptop: XPS 13 (9360)</a>
          </li>
          <li>
            <a href="https://amzn.to/2He16Vg" target="_blank">Keyboard: Velocifire VM01</a>
          </li>
          <li>
            <a href="https://amzn.to/2KHskFW" target="_blank">Mouse: Logitech G402</a>
          </li>
          <li>
            <a href="https://amzn.to/2KItIIi" target="_blank">Monitor: Dell SE2219H</a>
          </li>
          <li>
            <a href="https://amzn.to/2Hgm3ie" target="_blank">Mic: Fifine USB Microphone</a>
          </li>
        </ul>
      </div>

      <!-- Amazon Affiliate Links for Equipment -->
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Equipment</h5>
        <ul>
          <li>
            <a href="https://amzn.to/2Z3uHMj" target="_blank">Table: Tribesigns Modern L-Shaped Desk</a>
          </li>
          <li>
            <a href="https://amzn.to/320xxPd" target="_blank">Camera: OnePlus 5</a>
          </li>
          <li>
            <a href="https://amzn.to/2HgtFkR" target="_blank">Chair: BestOffice Racing Gaming Chair</a>
          </li>
          <li>
            <a href="https://amzn.to/2Hgekkj" target="_blank">Lamp: TaoTronics LED Desk Lamp</a>
          </li>
          <li>
            <a href="https://amzn.to/31PleFa" target="_blank">Laptop Stand: Seenda Laptop Stand</a>
          </li>
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
        'Here is a list of all of the gear I use on a daily basis. As an Amazon Associate, I will earn from qualified commissions.'
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
.container {
  padding: 0 2rem;
}
h1 {
  font-size: 30px;
  padding-top: 2rem;
}

h2 {
  margin: 2rem 0;
}

a,
a:hover,
a:active,
a:focus {
  color: #304455;
  background-color: transparent;
}
a:hover {
  text-decoration: underline;
}
</style>
