<template>
  <div>
    <nav class="navbar" role="navigation">
      <ul class="navbar-start">
        <li class="navbar-brand navbar-item">
          <n-link to="/">Mark Perez</n-link>
        </li>
        <li class="navbar-item">
          <n-link to="/blog">Blog</n-link>
        </li>
        <li class="navbar-item">
          <n-link to="/gear">Gear</n-link>
        </li>
      </ul>
      <ul class="navbar-end">
        <li class="navbar-item">
          <n-link to="/contact">Contact</n-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* elements */
li{
  margin-right: 1rem;
}
/* classes */

.navbar {
  display: flex;
  margin-top: 10px;
}
.navbar-item{
  font-size: 18px;
}
.navbar-brand{
  font-size: 22px;
}

</style>
