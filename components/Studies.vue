<template>
  <div>
    <h3 class="hero-head has-text-centered">Success Stories</h3>

    <header class="hero-body container">
      <section class="columns is-multiline is-centered">
        <!-- Project #1 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <n-link to="skinsolutions/">
              <img
                src="https://images.prismic.io/marks-personal-website/efa8e0d6-c913-48ac-af7e-bd484c9c6ee5_skin-solutions-md-blog.jpg?auto=compress,format"
                alt="skin solutions md"
              />
            </n-link>
          </div>
          <p class="title is-6">SkinSolutions.MD</p>
        </article>

        <!-- Project #2 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <n-link to="revive/">
              <img
                src="https://images.prismic.io/marks-personal-website/784c55e8-3948-4c6a-ae79-ea07a0e18e78_revive-partners.jpg?auto=compress,format"
                alt="revive med spa"
              />
            </n-link>
          </div>
          <p class="title is-6">Revive Med Spa</p>
        </article>

        <!-- Project #3 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <n-link to="reachify/">
              <img
                src="https://images.prismic.io/marks-personal-website/02680204-59f1-4b67-90d0-ca767e09338d_reachify-io-blog.jpg?auto=compress,format"
                alt="reachify"
              />
            </n-link>
          </div>
          <p class="title is-6">Revive Med Spa</p>
        </article>
      </section>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* This snippet of code here fixes the stupid iframe issue (for portfolio only) */
article {
  text-align: center;
}

i {
  margin-right: 3px;
}

img {
  border-radius: 6px;
}

.hero-head {
  margin-top: 2rem;
  font-size: 40px;
  letter-spacing: 12px;
}

.hero-body {
  padding-top: 4rem !important;
}

.project-image:hover .overlay {
  opacity: 1;
}

.project-image:hover img {
  transition: 0.2s ease;
  opacity: 0.4;
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
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}
</style>
