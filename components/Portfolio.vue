<template>
  <div>
    <section class="columns is-multiline is-centered">
      <!-- Project #1 -->
      <article class="box column is-3-widescreen is-4-tablet">
        <img src="~assets/images/night_mountain.jpg" alt="first project" />
        <h6 class="title is-6">Personal Website</h6>

        <a href="https://markperez.dev" target="_blank" class="button is-black" rel="noopener">
          <i class="icon-eye"></i>
          Demo
        </a>
        <a
          href="https://github.com/markperez1904/personal-website"
          target="_blank"
          class="button is-black"
          rel="noopener"
        >
          <i class="icon-code"></i>
          Code
        </a>
      </article>
    </section>
  </div>
</template>

<style scoped>
article {
  text-align: center;
}

i {
  margin-right: 3px;
}

.title {
  margin-top: 3px;
}

.box {
  margin: 1rem;
  background-color: transparent;
}
</style>
