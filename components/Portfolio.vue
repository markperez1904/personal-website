<template>
  <div>
    <section class="columns is-multiline is-centered">
      <!-- Project #1 -->
      <article class="box column is-3-widescreen is-4-tablet">
        <div class="project-image">
          <a
            href="https://github.com/markperez1904/personal-website"
            target="_blank"
            aria-label="personal website"
            rel="noopener"
          >
            <img src="~assets/images/night_mountain.jpg" alt="first project" />
            <section class="overlay">
              <i class="icon-search"></i>
            </section>
          </a>
        </div>
        <h6 class="title is-6">Personal Website</h6>
      </article>

      <!-- Project #2 -->
      <!-- <article class="box column is-3-widescreen is-4-tablet">
        <div class="project-image">
          <a
            href="https://github.com/markperez1904/personal-website"
            target="_blank"
            aria-label="personal website"
            rel="noopener"
          >
            <img src="~assets/images/night_mountain.jpg" alt="first project" />
            <section class="overlay">
              <i class="icon-search"></i>
            </section>
          </a>
        </div>
        <h6 class="title is-6">Personal Website</h6>
      </article>-->
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

img {
  border-radius: 6px;
}

.project-image:hover .overlay {
  opacity: 1;
}

.overlay {
  position: unset;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.2s ease;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
}

.icon-search {
  color: #ffffff;
  font-size: 100px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.title {
  text-align: center;
  padding: 1rem 5px;
}

.column {
  padding: unset;
}

.box {
  transition: all 0.2s;
  margin: 1rem;
}

.box:hover {
  transition: all 0.2s;
  transform: scale(1.03);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}
</style>
