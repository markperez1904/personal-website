<template>
  <div>
    <section class="navbar">
      <nav class="container">
        <div class="navbar-brand">
          <n-link class="navbar-item" to="/">
            <img
              class="logo"
              src="~static/mp-digital-logo-dark.png"
              alt="Mark Perez Digital"
            />
          </n-link>

          <!-- Navbar Burger -->
          <span
            class="navbar-burger"
            @click="showNav = !showNav"
            data-target="navMenu"
          >
            <!-- hamburger lines -->
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <!-- Navbar Menu -->
        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div @click="showNav = !showNav" class="navbar-end">
            <!-- <n-link class="navbar-item" to="/about/">About Us</n-link> -->
            <n-link class="navbar-item" to="/case-study/">Case Studies</n-link>
            <!-- <n-link class="navbar-item" to="/audit/">Free Audit</n-link> -->
            <!-- <n-link class="navbar-item" to="/contact/">Contact</n-link> -->
            <n-link class="navbar-item" to="/book/"
              ><button class="button is-rounded">Book a Call</button></n-link
            >
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
  color: #00c58e;
  background-color: transparent;
}

.button {
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
  background-color: #2f495d;
  border-color: rgba(255, 255, 255, 0);
}

.logo {
  max-height: 3rem;
}

.navbar {
  background-color: transparent;
  padding: 0 1rem;
  padding-top: 1rem;
  height: 4rem;
}

.navbar-item {
  font-size: 18px;
  padding-right: 2rem;
  color: #2f495d;
  font-weight: bolder;
  transition: 0.3s all;
}

.navbar-brand {
  font-size: 22px;
}

#navMenu {
  color: #2f495d;
}
</style>
