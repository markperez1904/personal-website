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
      <div class="whoweare-top-title">Who We Are</div>
    </div>
    <div class="whoweare-items">
      <div class="whoweare-center">
        <div class="whoweare-item">
          <div class="whoweare-item-img">
            <img src="~/assets/svg/star.svg" alt="star" />
          </div>
          <div class="whoweare-item-title">Boutique Approach</div>
          <div class="whoweare-item-text">
            Your business will be a success if you can meet your customer's
            needs and expectations - It's important to have the right products
            and services to sell, especially online.
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
          <div class="whoweare-item-title">Proven Experts</div>
          <div class="whoweare-item-text">
            When you're looking for credible beauty and cosmetic services, who
            do you turn to? Experienced professionals with proven track records.
            Same thing with marketing services.
          </div>
        </div>
        <div class="whoweare-item">
          <div class="whoweare-item-img">
            <img src="~/assets/svg/star.svg" alt="star" />
          </div>
          <div class="whoweare-item-title">Problem Solvers</div>
          <div class="whoweare-item-text">
            Good SEO services can make sure that your website is at the top of
            search results, but effective SEO can help you expand your business
            and reach a larger audience.
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
          <div class="whoweare-item-title">Growth Fuelers</div>
          <div class="whoweare-item-text">
            SEO is an aspect of digital marketing that's constantly evolving to
            meet the needs of customers. Growth is essential for any business
            that wants to stay afloat in today's competitive landscape.
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
          We all know that SEO is a popular marketing strategy. However, with so
          many different strategies out there, how do you know which is the
          right one?
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
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -5;
  opacity: 0.8;
}

.whoweare-item {
  width: 300px;
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
  font-size: 16px;
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
  width: auto;
  height: auto;
  border-radius: 298px;
  background-color: #2f495e;
}

.whoweare-background .item2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
  width: auto;
  height: auto;
  border-radius: 415px;
  background-color: #00c58e;
}

.whoweare-background .item3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -3;
  width: auto;
  height: auto;
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

  width: auto;
  height: auto;
  border-radius: 10px;
  background-image: linear-gradient(0deg, #005d42 0%, #00f0ad 100%);
}

.whoweare-bottom-left {
  width: 70%;
}

.whoweare-bottom-right {
  width: 30%;
}

.whoweare-bottom .whoweare-bottom-title {
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
  text-align: left;
  /* margin-top: 1rem; */
}
.whoweare-bottom .whoweare-bottom-text {
  width: 90%;
  height: auto;
  font-size: 18px;
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
  margin-top: 1rem;

  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
}

.whoweare-center {
  flex-direction: column;
}

.whoweare-center,
.whoweare-right,
.whoweare-left {
  justify-content: center;
  align-items: center;
  display: block;
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
    height: auto;
    font-size: 16px;
    line-height: 20px;
    color: #797979;
    font-weight: 400;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .whoweare-item-title {
    font-size: 22px;
    line-height: 22px;
    color: #2f495e;
  }

  .whoweare-center {
    padding: 0;
    display: flex;
    flex-direction: column;
    order: 1;
    width: 100%;
    justify-content: space-around;
  }

  .whoweare-center .whoweare-item {
    margin: 20px;
    width: auto;
  }

  .whoweare-left {
    width: 100%;
    order: 2;
  }
  .whoweare-right {
    width: 100%;
    order: 2;
  }

  .whoweare-background .item1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 265px;
    height: auto;
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
    height: auto;
    border-radius: 415px;
    background-color: #00c58e;
  }

  .whoweare-background .item3 {
    display: none;
  }

  .whoweare-bottom .whoweare-bottom-title {
    font-size: 26px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px;
  }
  .whoweare-bottom .whoweare-bottom-text {
    width: 100%;
    font-size: 16px;
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
    width: 150px;
    height: 40px;

    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
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

    height: auto;
    border-radius: 10px;

    width: auto;
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

    height: auto;
    border-radius: 10px;

    width: 100%;
  }

  .whoweare-item {
    width: auto;
    height: auto;
  }

  .whoweare-bottom .whoweare-bottom-title {
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px;
  }
  .whoweare-bottom .whoweare-bottom-text {
    width: 100%;
    font-size: 16px;
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
    width: 160px;
    height: 50px;
    margin-top: unset;

    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
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
    width: auto;
    height: auto;
    border-radius: 298px;
    background-color: #2f495e;
  }

  .whoweare-background .item2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
    width: auto;
    height: auto;
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
