<template>
  <div>
    <section class="navbar" id="toppy">
      <nav class="container">
        <div class="navbar-brand">
          <n-link class="navbar-item" to="/">
            <img
              class="logo"
              src="~static/mp-digital-logo-light.png"
              alt="Mark Perez Digital"
              width="160"
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
            <!-- drop-down for industry LPs -->
            <div
              class="navbar-item has-dropdown is-hoverable"
              style="padding-right: unset"
            >
              <a :style="changeColor" class="navbar-item">Who We Help ⬇</a>
              <div class="navbar-dropdown">
                <n-link class="navbar-item" to="/skincare-brands/">
                  Skincare Brands
                </n-link>
                <n-link class="navbar-item" to="/cosmetic-goods/">
                  Cosmetic Goods
                </n-link>
                <n-link class="navbar-item" to="/beauty-salons/">
                  Beauty Salons
                </n-link>
              </div>
            </div>

            <!-- normal nav links -->
            <n-link :style="changeColor" class="navbar-item" to="/case-study/"
              >Case Studies</n-link
            >
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
  },

  computed: {
    changeColor() {
      if (this.showNav == false)
        return {
          color: '#ffffff'
        }
      else
        return {
          color: '#000000'
        }
    }
  }
}
</script>

<style scoped>
hr {
  background-color: transparent;
}

a:hover,
a:active,
a:focus {
  color: #00c58e;
  background-color: transparent;
}

.logo {
  max-height: 110px;
  margin-top: 2rem;
}

@media only screen and (max-width: 1023px) {
  .logo {
    margin-top: unset;
  }
}

#toppy {
  margin-bottom: 4rem;
}

.button {
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
  background-color: #2f495d;
  border-color: rgba(255, 255, 255, 0);
}

.navbar-menu {
  background-color: #00966b, #17ffbe;
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
  font-weight: bolder;
  transition: 0.3s all;
}

.navbar-brand {
  font-size: 22px;
}
</style>
