<template>
  <div class="volume container">
    <div class="volume-wrapper">
      <div class="volume-title">Increased Lead Volume by 68.04%</div>
      <div class="volume-text">
        How we helped a small business take big steps in a competitive market.
      </div>
      <div class="volume-numbers v-scroll-reveal" v-scroll-reveal.reset="{ delay: 250 }">
        <div class="volume-numbers-item">
          <div class="volume-numbers-icon">
            <img src="~/assets/svg/increase.svg" alt="icon" />
          </div>
          <div class="volume-numbers-number">+129.92%</div>
          <div class="volume-numbers-text">Increasing conversion Rate</div>
        </div>
        <div class="volume-numbers-item">
          <div class="volume-numbers-icon">
            <img src="~/assets/svg/increasing-stocks.svg" alt="icon" />
          </div>
          <div class="volume-numbers-number">+17.49%</div>
          <div class="volume-numbers-text">Increasing CTR</div>
        </div>
        <div class="volume-numbers-item">
          <div class="volume-numbers-icon">
            <img src="~/assets/svg/dollar.svg" alt="icon" />
          </div>
          <div class="volume-numbers-number">-39.7%</div>
          <div class="volume-numbers-text">Decreased Cost Per Conversion</div>
        </div>
        <div class="volume-numbers-item">
          <div class="volume-numbers-icon">
            <img src="~/assets/svg/inc.svg" alt="icon" />
          </div>
          <div class="volume-numbers-number">+68.04%</div>
          <div class="volume-numbers-text">Increased Lead Volume</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.volume {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
}

.volume-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 413px;
  width: 100%;
  border-radius: 20px;
  background-image: linear-gradient(135deg, #00c38b 0%, #00f3ad 100%);
}

.volume-title {
  font-size: 30px;
  line-height: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  filter: drop-shadow(0px 11px 8px rgba(0, 0, 0, 0.35));
  margin-top: 25px;
}

.volume-text {
  width: 30%;
  height: 117px;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  font-weight: 300;
  text-align: center;
  margin-top: 45px;
}

.volume-numbers {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  width: 90%;
  height: 202px;
  background-color: #ffffff;
  border-radius: 20px;
}

.volume-numbers-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.volume-numbers-icon {
  height: 50px;
  width: 50px;
  margin: 10px;
}

.volume-numbers-number {
  font-size: 30px;
  color: #2f495e;
  font-weight: bold;
}

.volume-numbers-text {
  font-size: 18px;
  color: #9c9b9b;
  margin-bottom: 10px;
}

.volume-numbers-icon img {
  filter: invert(42%) sepia(93%) saturate(990%) hue-rotate(80deg)
    brightness(150%) contrast(45%);
}

@media screen and (max-width: 950px) {
  .volume {
    height: 100vh;
  }


  .volume-numbers {
    margin-top: 100px;
    height: auto;
    flex-wrap: wrap;
  }

  .volume-text {
    width: 80%;
  }

  .volume-numbers-text {
    font-size: 10px;
    color: #9c9b9b;
    margin-bottom: 10px;
  }
}
</style>
