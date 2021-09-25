<template>
  <div class="homeblocks container ">
    <div
      class="homeblocks-item v-scroll-reveal"
      v-scroll-reveal.reset="{ delay: 250 }"
    >
      <div class="homeblocks-item-overlay">
        <img src="~/assets/svg/target.svg" alt="target" />
      </div>
      <div class="homeblocks-item-img">
        <img src="~/assets/svg/target.svg" alt="target" />
      </div>
      <div class="homeblocks-item-title">Future Vision</div>
      <div class="homeblocks-item-text">
        What if you could see the future of beauty and skincare today? By using
        SEO services to your advantage, we can help expand your presence within
        the online space to create a better customer service experience for
        potential customers searching for salons.
      </div>
    </div>
    <div
      class="homeblocks-item active v-scroll-reveal"
      v-scroll-reveal.reset="{ delay: 250 }"
    >
      <div class="homeblocks-item-overlay">
        <img src="~/assets/svg/rocket-ship-over.svg" alt="rocket" />
      </div>
      <div class="homeblocks-item-img">
        <img src="~/assets/svg/rocket-ship.svg" alt="rocket" />
      </div>
      <div class="homeblocks-item-title">Boost Campaign</div>
      <div class="homeblocks-item-text">
        When you're a beauty salon or med spa, it can be difficult to compete
        with other local area businesses for web rankings via search engines. By
        using our curated services that are targeted to the needs of salons and
        spas, your business can get ahead of its competitors by expanding
        online.
      </div>
    </div>
    <div
      class="homeblocks-item v-scroll-reveal"
      v-scroll-reveal.reset="{ delay: 250 }"
    >
      <div class="homeblocks-item-overlay">
        <img src="~/assets/svg/lamp.svg" alt="lamp" />
      </div>
      <div class="homeblocks-item-img">
        <img src="~/assets/svg/lamp.svg" alt="lamp" />
      </div>
      <div class="homeblocks-item-title">Inovative Solutions</div>
      <div class="homeblocks-item-text">
        We are a team of beauty and skincare insiders with extensive knowledge
        of the industry. Our aim is to help you get your products in front of
        your target audience by matching you with experienced beauty and
        skincare team. We pride ourselves on personalized services so
        each client gets the assistance they deserve.
      </div>
    </div>
  </div>
</template>
<style scoped>
.homeblocks {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.homeblocks-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  padding: 20px;
  border-radius: 5px;
  filter: drop-shadow(0 0 23px rgba(0, 0, 0, 0.1));
  background-color: #ffffff;
  height: auto;
  width: auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s;
  background-image: #fff;
  margin: 20px;
}

.homeblocks-item.active {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s;
  background-image: linear-gradient(0deg, #00966b 0%, #00f0ad 100%);
  overflow: hidden;
}

.homeblocks-item.active .homeblocks-item-title {
  color: #fff;
}
.homeblocks-item.active .homeblocks-item-text {
  color: #fff;
}
.homeblocks-item.active .homeblocks-item-img img {
  filter: brightness(0) invert(1);
}

.homeblocks-item.active .homeblocks-item-overlay {
  display: block;
  position: absolute;
  opacity: 0.3;
  top: 20%;
  left: 20%;
  transform: translate(-50% -50%);
  filter: brightness(0) invert(1);
}

.homeblocks-item.active .homeblocks-item-overlay img {
  filter: brightness(0) invert(1);
  height: 100%;
  width: 100%;
}
.homeblocks-item-img {
  padding-bottom: 15px;
}

.homeblocks-item-img img {
  width: 40px;
  height: 40px;
}

.homeblocks-item-overlay {
  display: none;
}

.homeblocks-item-title {
  font-size: 20px;
  line-height: 30px;
  color: #2f495e;
  padding-bottom: 15px;
}

.homeblocks-item-text {
  width: auto;
  height: auto;
  font-size: 14px;
  line-height: 24px;
  color: #2f495e;
  font-weight: 300;
  width: auto;
}

@media screen and (max-width: 1200px) {
  .homeblocks {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
}
</style>
