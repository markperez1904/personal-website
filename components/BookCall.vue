<template>
  <div
    class="request container v-scroll-reveal"
    v-scroll-reveal.reset="{ delay: 250 }"
  >
    <div class="request-wrap">
      <div class="request-title">
        Want To Be Our Next Success Story?
      </div>
      <div class="request-text">
        Our track record proves we know how to help you make more money and fuel
        business growth
      </div>
      <div class="request-button">
        <!-- call button -->
        <button class="button is-rounded call-button">
          <a
            target="_blank"
            href="https://calendly.com/info-30250/discovery-call"
            >Book a Call
          </a>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  color: #ffffff;
}

.request {
  width: 100%;
  padding: 20px;
}
.request-wrap {
  height: 308px;
  background-color: #2f485d;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
  overflow: hidden;
  background-image: url('~/assets/svg/proposal.svg');
  background-size: auto auto;
}

.request-title {
  font-size: 30px;
  line-height: 40px;
  color: #ffffff;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.request-text {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
}

.request-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.request-button button {
  width: 30%;
  height: 58px;
  border-radius: 30px;
  background-color: #00c48c;
  border: none;

  font-size: 23px;
  line-height: 49px;
  color: #ffffff;
  font-weight: 600;
}

@media screen and (max-width: 906px) {
  .request-button button {
    width: 80%;
    font-size: 16px;
    line-height: 30px;
  }

  .request-text {
    font-size: 16px;
  }

  .request-title {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
