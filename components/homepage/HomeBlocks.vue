<template>
  <div class="homeblocks container " v-scroll-reveal.reset="{ delay: 100 }">
    <div class="homeblocks-item">
      <div class="homeblocks-item-overlay">
        <img src="~/assets/svg/target.svg" alt="target" />
      </div>
      <div class="homeblocks-item-img">
        <img src="~/assets/svg/target.svg" alt="target" />
      </div>
      <div class="homeblocks-item-title">Future Vision</div>
      <div class="homeblocks-item-text">
        Great SEO strategy starts by addressing what you want to achieve in your
        business, whether audience building or competitive positioning. We’ll
        work to expand your online presence by creating an improved experience
        for customers while browsing your website and social accounts.
      </div>
    </div>
    <div class="homeblocks-item active">
      <div class="homeblocks-item-overlay">
        <img src="~/assets/svg/rocket-ship-over.svg" alt="rocket" />
      </div>
      <div class="homeblocks-item-img">
        <img src="~/assets/svg/rocket-ship.svg" alt="rocket" />
      </div>
      <div class="homeblocks-item-title">Boost Campaign</div>
      <div class="homeblocks-item-text">
        Next we’ll address your target audience, their pain points and desires
        in congruence with your website's messaging and content deliverables.
      </div>
    </div>
    <div class="homeblocks-item ">
      <div class="homeblocks-item-overlay">
        <img src="~/assets/svg/lamp.svg" alt="lamp" />
      </div>
      <div class="homeblocks-item-img">
        <img src="~/assets/svg/lamp.svg" alt="lamp" />
      </div>
      <div class="homeblocks-item-title">Inovative Solutions</div>
      <div class="homeblocks-item-text">
        We understand one-size doesn’t fit all and take a tailored approach to
        every campaign. We’ll take a holistic approach when addressing your
        businesses current status, goals, and then strategize the deliverables
        that will help you execute on those objectives.
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
  background-image: linear-gradient(0deg, #005d42 0%, #00f0ad 100%);
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
  font-size: 22px;
  line-height: 30px;
  color: #2f495e;
  padding-bottom: 15px;
}

.homeblocks-item-text {
  width: auto;
  height: auto;
  font-size: 16px;
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
