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
            <n-link class="navbar-item" to="/blog">Blog</n-link>
            <n-link class="navbar-item" to="/gear">Gear</n-link>
            <n-link class="navbar-item" to="/contact">Contact</n-link>
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
/* elements */
a:hover,
a:active,
a:focus {
  color: rgb(29, 88, 29);
  background-color: transparent;
}

</style>
