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
      <div class="sizer">Years of Experience</div>
    </div>
    <div class="numbers-item">
      <div class="numbers-icon">
        <img src="~/assets/svg/rocket-ship.svg" alt="number" />
      </div>
      <div class="numbers-info">
        <span class="numbers-number">30</span
        ><span class="numbers-plus">+</span>
      </div>
      <div class="sizer">Projects Completed</div>
    </div>
    <div class="numbers-item">
      <div class="numbers-icon">
        <img src="~/assets/svg/smiling.svg" alt="number" />
      </div>
      <div class="numbers-info">
        <span class="numbers-number">15</span
        ><span class="numbers-plus">+</span>
      </div>
      <div class="sizer">Happy Clients</div>
    </div>
    <div class="numbers-item">
      <div class="numbers-icon">
        <img id="hand-shake" src="~/assets/svg/hand-shake.svg" alt="number"/>
      </div>
      <div class="numbers-info">
        <span class="numbers-number">4</span
        ><span class="numbers-plus">+</span>
      </div>
      <div class="sizer">Partnerships</div>
    </div>
  </div>
</template>
<style scoped>
#hand-shake {
  width: 45px;
  height: 45px;
}

.sizer {
  font-size: 18px;
}
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
  font-size: 50px;
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
  .sizer {
    font-size: 15px
  }
}
</style>
