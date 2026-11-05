<template>
  <div class="container">
    <section class="navbar">
      <nav class="container">
        <div class="navbar-brand">
          <NuxtLink class="navbar-item" to="/">
            <img class="logo" :src="logo" alt="Mark Perez Digital" />
          </NuxtLink>

          <!-- Navbar Burger -->
          <span
            class="navbar-burger"
            :class="{ 'is-active': showNav }"
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
          <div @click="showNav = false" class="navbar-end">
            <NuxtLink class="navbar-item" to="/blog/">Blog</NuxtLink>
            <NuxtLink class="navbar-item" to="/gear/">Gear</NuxtLink>
            <NuxtLink class="navbar-item" to="/contact/">Contact</NuxtLink>
          </div>
        </div>
      </nav>
    </section>

    <hr />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import logo from '~/assets/images/markperez-digital-black.png'

const showNav = ref(false)
</script>

<style scoped>
a:hover,
a:active,
a:focus {
  color: #00c58e;
  background-color: transparent;
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
</style>
