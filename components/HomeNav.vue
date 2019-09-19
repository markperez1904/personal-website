<template>
  <div class="hero is-fullheight-with-navbar">
    <section class="hero-head navbar is-fixed-top">
      <nav class="container">
        <div class="navbar-brand">
          <n-link
            :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
            class="navbar-item"
            to="/"
          >Mark Perez</n-link>

          <!-- Navbar Burger -->
          <span
            class="navbar-burger burger"
            :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
            @click="showNav = !showNav"
            data-target="navMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <!-- Navbar Menu -->
        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div @click="showNav = !showNav" class="navbar-end">
            <n-link
              :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
              class="navbar-item"
              to="/blog/"
            >Blog</n-link>
            <n-link
              :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
              class="navbar-item"
              to="/gear/"
            >Gear</n-link>
            <n-link
              :class="changeTextColor ? 'has-text-black' : 'has-text-white'"
              class="navbar-item"
              to="/contact/"
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
        >SEO Specialist and Self-learning enthusiast in technology. Producing content on YouTube.</h2>
      </div>
    </section>

    <section class="hero-foot">
      <div class="container has-text-centered">
        <!-- Scroll to Portfolio -->
        <a href="#" v-scroll-to="'#portfolio'">
          <button class="button is-rounded" id="button">My Work</button>
        </a>
        <!-- View my Resume -->
        <a
          href="https://drive.google.com/open?id=1dx8t_IKZKLtfs4I6nIZsQtaW5qJvL22VEaPZ04L0RsE"
          target="_blank"
          rel="noopener"
        >
          <button class="button is-rounded" id="button">Resume</button>
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
    if (process.client) window.addEventListener('scroll', this.handleScroll)
  },

  destroyed() {
    if (process.client) window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
h1 {
  font-size: 2.8rem;
  letter-spacing: 1rem;
}
h2 {
  font-size: 1.4rem;
}

a:hover,
a:active,
a:focus {
  color: #00b196;
  background-color: transparent;
}

.hero {
  background-image: url('~assets/images/night_mountain.jpg');
  background-size: cover;
  height: 100vh;
}

.hero-body * {
  color: white;
}

.hero-foot a {
  color: #00b196;
}

.navbar {
  padding: 0 2rem;
}

.navbar-item {
  font-size: 18px;
  padding-right: 2rem;
}

.navbar-brand {
  font-size: 22px;
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

#button {
  margin: 0 1rem;
  margin-bottom: 2rem;
  transition: 0.2s;
}
</style>
