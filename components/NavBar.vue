<template>
  <div class="container">
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <n-link class="navbar-item" to="/">Mark Perez</n-link>

        <div class="navbar-burger" @click="showNav = !showNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div @click="showNav = !showNav" class="navbar-end">
          <n-link class="navbar-item" to="/blog">Blog</n-link>
          <n-link class="navbar-item" to="/gear">Gear</n-link>
			 <n-link class="navbar-item" to="/contact">Contact</n-link>
        </div>
      </div>
    </nav>
	 <hr>
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
/* classes */
.navbar{
	padding: 0 5rem;
}

.navbar-item {
  font-size: 18px;
  margin: 0 1rem;
}
.navbar-brand {
  font-size: 22;
}
</style>
