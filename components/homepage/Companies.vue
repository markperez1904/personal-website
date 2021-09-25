<template>
  <div class="companies container v-scroll-reveal" v-scroll-reveal.reset>
    <div class="companies-item">
      <img
        class="companies-item-img"
        src="~/assets/svg/grab.svg"
        alt="company-item"
      />
    </div>
    <div class="companies-item">
      <img
        class="companies-item-img"
        src="~/assets/svg/airbnb.svg"
        alt="company-item"
      />
    </div>
    <div class="companies-item">
      <img
        class="companies-item-img"
        src="~/assets/svg/coinbase.svg"
        alt="company-item"
      />
    </div>
    <div class="companies-item">
      <img
        class="companies-item-img"
        src="~/assets/svg/briliant.svg"
        alt="company-item"
      />
    </div>
  </div>
</template>
<style scoped>
.companies {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.companies-item {
  width: 25%;
  padding: 20px;
  margin: 20px;
  height: 70px;
  /* filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.18)); */
  background-color: transparent;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.companies-item:hover {
  transition: all 0.3s;
  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.18));
  background-color: #ffffff;
}

.companies-item img {
  width: 100%;
  height: 40px;
  filter: grayscale(100%);
  transition: all 0.3s;
}

.companies-item:hover .companies-item-img {
  filter: none;
}

@media screen and (max-width: 568px) {
  .companies {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 2rem;
  }

  .companies-item {
    width: 45%;
    margin: 5px;
  }
}
</style>
