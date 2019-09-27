<template>
  <div class="hero is-fullheight-with-navbar">
    <section class="navbar hero-head">
      <nav class="container">
        <div class="navbar-brand">
          <n-link class="navbar-item has-text-white" to="/">
            <img
              class="logo"
              src="~assets/images/markperez_digital_white.png"
              alt="Mark Perez Digital"
            />
          </n-link>

          <!-- Navbar Burger -->
          <span
            class="navbar-burger burger has-text-white"
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
            <n-link class="navbar-item has-text-white" to="/blog/">Blog</n-link>
            <n-link class="navbar-item has-text-white" to="/gear/">Gear</n-link>
            <n-link class="navbar-item has-text-white" to="/contact/">Contact</n-link>
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
      showNav: false
    }
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

.logo {
  max-height: 3rem;
}

.navbar {
  padding: 0 1rem;
  padding-top: 1rem;
  height: 4rem;
}

.navbar-item {
  font-size: 18px;
  padding-right: 2rem;
}

.navbar-brand {
  font-size: 22px;
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
