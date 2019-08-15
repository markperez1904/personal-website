<template>
  <div>
    <header class="hero-body container">
      <section class="columns is-multiline is-centered">
        <!-- Project #1 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <img src="~assets/images/night_mountain.jpg" alt="first project" />
          <h6 class="title is-6">Personal Website</h6>

          <a href="https://markperez.dev" target="_blank" class="button is-black">
            <ion-icon name="pulse" id="icon"></ion-icon>Demo
          </a>
          <a
            href="https://github.com/markperez1904/personal-website"
            target="_blank"
            class="button is-black"
          >
            <ion-icon name="code" id="icon"></ion-icon>Code
          </a>
        </article>
      </section>
    </header>
  </div>
</template>

<style scoped>
article {
  text-align: center;
}

#icon {
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
