<template>
  <div class="numbers container v-scroll-reveal" v-scroll-reveal.reset>
    <div class="numbers-item">
      <div class="numbers-icon">
        <img src="~/assets/svg/sticker.svg" alt="number" />
      </div>
      <div class="numbers-info">
        <span class="numbers-number">10</span
        ><span class="numbers-plus">+</span>
      </div>
      <div>Years of Experience</div>
    </div>
    <div class="numbers-item">
      <div class="numbers-icon">
        <img src="~/assets/svg/rocket-ship.svg" alt="number" />
      </div>
      <div class="numbers-info">
        <span class="numbers-number">350</span
        ><span class="numbers-plus">+</span>
      </div>
      <div>Project Completed</div>
    </div>
    <div class="numbers-item">
      <div class="numbers-icon">
        <img src="~/assets/svg/smiling.svg" alt="number" />
      </div>
      <div class="numbers-info">
        <span class="numbers-number">100</span
        ><span class="numbers-plus">+</span>
      </div>
      <div>Happy Clients</div>
    </div>
    <div class="numbers-item">
      <div class="numbers-icon">
        <img src="~/assets/svg/trophy.svg" alt="number" />
      </div>
      <div class="numbers-info">
        <span class="numbers-number">25</span
        ><span class="numbers-plus">+</span>
      </div>
      <div>Award Winner</div>
    </div>
  </div>
</template>
<style scoped>
.numbers {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.numbers-info {
  position: relative;
}
.numbers-item {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.numbers-number {
  font-size: 62px;
  line-height: 75px;
  color: #2f495e;
  font-weight: bold;
}
.numbers-plus {
  font-size: 33px;
  line-height: 39px;
  color: #2f495e;
  font-weight: 500;
  position: absolute;
  top: 30%;
  right: -20px;
}

@media screen and (max-width: 768px) {
  .numbers {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
  .numbers-item {
    width: 50%;
    padding-top: 10px;
  }
}
</style>
