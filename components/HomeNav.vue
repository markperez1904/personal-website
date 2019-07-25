<template>
    <div class="hero is-fullheight-with-navbar">
      <section class="hero-head">
        <nav class="navbar is-fixed-top">
          <div class="navbar-brand">
            <n-link
              :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
              class="navbar-item"
              to="/"
            >Mark Perez</n-link>

            <div
              class="navbar-burger burger"
              :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
              @click="showNav = !showNav"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div @click="showNav = !showNav" class="navbar-end">
              <n-link
                :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
                class="navbar-item"
                to="/blog"
              >Blog</n-link>
              <n-link
                :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
                class="navbar-item"
                to="/gear"
              >Gear</n-link>
              <n-link
                :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
                class="navbar-item"
                to="/contact"
              >Contact</n-link>
            </div>
          </div>
        </nav>
      </section>
      <section class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Mark Perez</h1>
          <h2
            class="subtitle"
          >Vue Developer and self-learning enthusiast on technology. Producing content on YouTube.</h2>
        </div>
      </section>
      <section class="hero-foot">
        <div class="container has-text-centered">
          <a href="#" v-scroll-to="'#my-summary'">
            <b-button id="button" rounded>My Work</b-button>
          </a>
        </div>
      </section>
    </div>
</template>

<script>

export default {
  data() {
    return {
      showNav: false,
      changeTextColor: false
    }
  },
  methods: {
    handleScroll() {
      // selected the (.navbar) class
      let nav = document.querySelector('.navbar').classList

      // change the navbar color if scrolled
      if (window.scrollY > 120) {
        nav.remove('navbar-restore')
        nav.add('navbar-change')
        this.changeTextColor = true
        // restore navbar color if it's back to top
      } else {
        nav.remove('navbar-change')
        nav.add('navbar-restore')
        this.changeTextColor = false
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
/* elements */
a:hover,
a:active,
a:focus {
  color: rgb(29, 88, 29);
  background-color: transparent;
}
/* id */
#button {
  margin-bottom: 2rem;
  transition: 0.2s;
}
/* classes */
.hero {
  background-image: url('~static/images/uploads/dark_tree.jpg');
  background-size: cover;
  height: 100vh;
}
.hero-body * {
  color: white;
}
.navbar {
  padding: 0 5rem;
}

.navbar-change {
  background-color: white;
  transition: 0.2s;
  color: black;
}

.navbar-restore {
  background-color: transparent;
  transition: 0.2s;
  color: white;
}

.navbar-menu {
  background-color: transparent;
}

.navbar-item {
  font-size: 18px;
  margin: 0 1rem;
}
.navbar-brand {
  font-size: 22;
}
h1 {
  font-size: 2.3rem;
  letter-spacing: 15px;
}
h2 {
  font-size: 1.3rem;
  padding: 0 1rem;
}
</style>
