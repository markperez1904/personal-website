<template>
  <div class="container">
    <section class="navbar is-fixed-top">
      <nav class="container">
        <div class="navbar-brand">
          <n-link class="navbar-item" to="/">Mark Perez</n-link>

          <!-- Navbar Burger -->
          <span class="navbar-burger" @click="showNav = !showNav" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <!-- Navbar Menu -->
        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div @click="showNav = !showNav" class="navbar-end">
            <n-link class="navbar-item" to="/blog/">Blog</n-link>
            <n-link class="navbar-item" to="/gear/">Gear</n-link>
            <n-link class="navbar-item" to="/contact/">Contact</n-link>
          </div>
        </div>
      </nav>
    </section>

    <hr />
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
a:hover,
a:active,
a:focus {
  color: #00b196;
  background-color: transparent;
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
</style>
