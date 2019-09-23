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
            <a
              href="https://amzn.to/33NjmP9"
              target="_blank"
              aria-label="laptop"
              rel="noopener"
            >Laptop: XPS 13 (9360)</a>
          </li>
          <li>
            <a
              href="https://amzn.to/2He16Vg"
              target="_blank"
              aria-label="keyboard"
              rel="noopener"
            >Keyboard: Velocifire VM01</a>
          </li>
          <li>
            <a
              href="https://amzn.to/2KHskFW"
              target="_blank"
              aria-label="mouse"
              rel="noopener"
            >Mouse: Logitech G402</a>
          </li>
          <li>
            <a
              href="https://amzn.to/2KItIIi"
              target="_blank"
              aria-label="monitor"
              rel="noopener"
            >Monitor: Dell SE2219H</a>
          </li>
          <li>
            <a
              href="https://amzn.to/2Hgm3ie"
              target="_blank"
              aria-label="mic"
              rel="noopener"
            >Mic: Fifine USB Microphone</a>
          </li>
        </ul>
      </div>

      <!-- Amazon Affiliate Links for Equipment -->
      <div class="content column is-4-widescreen is-6-tablet">
        <h5>Equipment</h5>
        <ul>
          <li>
            <a
              href="https://amzn.to/2Z3uHMj"
              target="_blank"
              aria-label="table"
              rel="noopener"
            >Table: Tribesigns Modern L-Shaped Desk</a>
          </li>
          <li>
            <a
              href="https://amzn.to/320xxPd"
              target="_blank"
              aria-label="camera"
              rel="noopener"
            >Camera: OnePlus 5</a>
          </li>
          <li>
            <a
              href="https://amzn.to/2HgtFkR"
              target="_blank"
              aria-label="chair"
              rel="noopener"
            >Chair: BestOffice Racing Gaming Chair</a>
          </li>
          <li>
            <a
              href="https://amzn.to/2Hgekkj"
              target="_blank"
              aria-label="lamp"
              rel="noopener"
            >Lamp: TaoTronics LED Desk Lamp</a>
          </li>
          <li>
            <a
              href="https://amzn.to/31PleFa"
              target="_blank"
              aria-label="laptop stand"
              rel="noopener"
            >Laptop Stand: Seenda Laptop Stand</a>
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
h1 {
  font-size: 30px;
  padding-top: 3rem;
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

.container {
  padding: 0 2rem;
}
</style>
