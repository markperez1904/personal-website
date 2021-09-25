<template>
  <div class="whoweare container">
    <div class="whoweare-background">
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
    </div>
    <div
      class="whoweare-top v-scroll-reveal"
      v-scroll-reveal.reset="{ delay: 250 }"
    >
      <div class="whoweare-top-title">Who we are !</div>
    </div>
    <div class="whoweare-items">
      <div class="whoweare-left">
        <div class="whoweare-item">
          <div class="whoweare-item-img">
            <img src="~/assets/svg/star.svg" alt="star" />
          </div>
          <div class="whoweare-item-title">Boutique Approach</div>
          <div class="whoweare-item-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </div>
        </div>
      </div>
      <div
        class="whoweare-center v-scroll-reveal"
        v-scroll-reveal.reset="{ delay: 250 }"
      >
        <div class="whoweare-item">
          <div class="whoweare-item-img">
            <img src="~/assets/svg/star.svg" alt="star" />
          </div>
          <div class="whoweare-item-title">Proven Exprets</div>
          <div class="whoweare-item-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </div>
        </div>
        <div class="whoweare-item">
          <div class="whoweare-item-img">
            <img src="~/assets/svg/star.svg" alt="star" />
          </div>
          <div class="whoweare-item-title">Problem Solvers</div>
          <div class="whoweare-item-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </div>
        </div>
      </div>
      <div
        class="whoweare-right v-scroll-reveal"
        v-scroll-reveal.reset="{ delay: 250 }"
      >
        <div class="whoweare-item">
          <div class="whoweare-item-img">
            <img src="~/assets/svg/star.svg" alt="star" />
          </div>
          <div class="whoweare-item-title">Growth Fuelers</div>
          <div class="whoweare-item-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </div>
        </div>
      </div>
    </div>
    <div class="whoweare-bottom">
      <div class="whoweare-bottom-left">
        <div class="whoweare-bottom-title">
          How We Make You Differentiable
        </div>
        <div class="whoweare-bottom-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </div>
      </div>
      <div class="whoweare-bottom-right">
        <button class="whoweare-bottom-button">
          <n-link to="/case-study/" class="mini-link">Success Stories</n-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.whoweare {
  margin-top: 50px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.whoweare-items {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.whoweare-top .whoweare-top-title {
  font-size: 34px;
  line-height: 41px;
  color: #2f495e;
  font-weight: bold;
  text-align: center;
}

.whoweare-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -5;
  opacity: 0.8;
}

.whoweare-item {
  width: 279px;
  padding: 20px;
  margin: 20px 0;
  border-radius: 15px;
  filter: drop-shadow(0 0 23px rgba(0, 185, 134, 0.12));
  background-color: #ffffff;
}

.whoweare-item-title {
  font-size: 24px;
  line-height: 29px;
  color: #2f495e;
  text-align: center;
  padding-top: 20px;
}

.whoweare-item-text {
  padding: 20px 0;
  font-size: 14px;
  line-height: 24px;
  color: #797979;
  font-weight: 400;
  text-align: center;
}

.whoweare-item-img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whoweare-item-img img {
  width: 20px;
  height: 20px;
}

.whoweare-background .item1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 597px;
  height: 597px;
  border-radius: 298px;
  background-color: #2f495e;
}

.whoweare-background .item2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
  width: 830px;
  height: 830px;
  border-radius: 415px;
  background-color: #00c58e;
}

.whoweare-background .item3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -3;
  width: 1131px;
  height: 1131px;
  border-radius: 566px;
  background-color: transparent;
  border: 2px solid #00c58e;
}

.whoweare-bottom {
  /* position: absolute; */
  display: flex;
  justify-content: flex-start;
  padding: 40px;
  align-items: center;
  margin: 20px;

  width: 981px;
  height: 217px;
  border-radius: 10px;
  background-image: linear-gradient(0deg, #00966b 0%, #00f0ad 100%);
}

.whoweare-bottom-left {
  width: 70%;
}

.whoweare-bottom-right {
  width: 30%;
}

.whoweare-bottom .whoweare-bottom-title {
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  font-weight: bold;
  text-align: left;
  padding-bottom: 30px;
}
.whoweare-bottom .whoweare-bottom-text {
  width: 446px;
  height: 87px;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 300;
  text-align: left;
}
.whoweare-bottom .whoweare-bottom-button {
  width: 198px;
  height: 52px;
  border-radius: 26px;
  background-color: #2f495e;
  text-align: center;
  border: none;

  font-size: 20px;
  line-height: 47px;
  color: #ffffff;
  font-weight: 400;
}

.whoweare-center {
  flex-direction: column;
}

.whoweare-center,
.whoweare-right,
.whoweare-left {
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 20px;
}

@media screen and (max-width: 1200px) {
  .whoweare-items {
    flex-wrap: wrap;
  }

  .whoweare-item {
    margin: 20px 0;
  }

  .whoweare-item-text {
    width: 100%;
    height: 161px;
    font-size: 11.5px;
    line-height: 14px;
    color: #797979;
    font-weight: 400;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .whoweare-item-title {
    font-size: 18px;
    line-height: 22px;
    color: #2f495e;
  }

  .whoweare-center {
    padding: 0;
    display: flex;
    flex-direction: row;
    order: 1;
    width: 100%;
    justify-content: space-around;
  }

  .whoweare-center .whoweare-item {
    margin: 20px;
  }

  .whoweare-left {
    width: 50%;
    order: 2;
  }
  .whoweare-right {
    width: 50%;
    order: 2;
  }

  .whoweare-background .item1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 265px;
    height: 265px;
    border-radius: 298px;
    background-color: #2f495e;
  }

  .whoweare-background .item2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
    width: 368px;
    height: 368px;
    border-radius: 415px;
    background-color: #00c58e;
  }

  .whoweare-background .item3 {
    display: none;
  }

  .whoweare-bottom .whoweare-bottom-title {
    font-size: 20px;
    line-height: 36px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px;
  }
  .whoweare-bottom .whoweare-bottom-text {
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    font-weight: 300;
    text-align: center;
  }
  .whoweare-bottom .whoweare-bottom-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    background-color: #2f495e;
    text-align: center;
    border: none;
    width: 130px;
    height: 34px;

    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
  }
  .whoweare-bottom-left,
  .whoweare-bottom-right {
    width: 100%;
  }
  .whoweare-bottom-right {
    display: flex;
    justify-content: center;
  }

  .whoweare-bottom {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    margin: 0;

    height: 217px;
    border-radius: 10px;

    width: 100%;
  }
}

@media screen and (max-width: 578px) {
  .whoweare {
    padding: 20px 2rem 0 2rem;
  }

  .whoweare-bottom {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    margin: 0;

    height: 217px;
    border-radius: 10px;

    width: 100%;
  }

  .whoweare-item {
    width: 80%;
    height: 310px;
  }

  .whoweare-bottom .whoweare-bottom-title {
    font-size: 18px;
    line-height: 36px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px;
  }
  .whoweare-bottom .whoweare-bottom-text {
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
  }
  .whoweare-bottom .whoweare-bottom-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    background-color: #2f495e;
    text-align: center;
    border: none;
    width: 130px;
    height: 34px;

    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
  }
  .whoweare-bottom-left,
  .whoweare-bottom-right {
    width: 100%;
  }
  .whoweare-bottom-right {
    display: flex;
    justify-content: center;
  }

  .whoweare-background .item1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 265px;
    height: 265px;
    border-radius: 298px;
    background-color: #2f495e;
  }

  .whoweare-background .item2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
    width: 368px;
    height: 368px;
    border-radius: 415px;
    background-color: #00c58e;
  }

  .whoweare-background .item3 {
    display: none;
  }

  .whoweare-right,
  .whoweare-left,
  .whoweare-center {
    padding: 0;
  }
}

/* marks personal edits */
.mini-link {
  color: unset;
}
</style>
