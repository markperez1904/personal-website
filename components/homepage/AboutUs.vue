<template>
  <div class="about-us container v-scroll-reveal" v-scroll-reveal.reset>
    <div class="about-us-img">
      <img src="~/assets/svg/aboutus.svg" alt="about-us" />
    </div>
    <div class="about-us-info">
      <div class="about-us-h1">About Us</div>

      <div class="about-us-text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like)
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-us {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.about-us-h1 {
  width: 100%;
  font-size: 34px;
  line-height: 41px;
  color: #2f495e;
  font-weight: bold;
  text-align: left;
  padding-bottom: 20px;
}
.about-us-text {
  font-size: 16px;
  line-height: 30px;
  color: #797979;
  font-weight: 300;
}
.about-us-info {
  width: 50%;
}
.about-us-img {
  width: 50%;
}

@media screen and (max-width: 768px) {
  .about-us {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .about-us-info {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    order: 1;
  }
  .about-us-h1 {
    text-align: center;
  }
  .about-us-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
    padding: 0 20px;
  }
  .about-us-text {
    display: flex;
    justify-self: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 14px;
    text-align: center;
    padding: 0 20px;
  }
}
</style>
