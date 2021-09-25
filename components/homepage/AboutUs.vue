<template>
  <div class="about-us container v-scroll-reveal" v-scroll-reveal.reset>
    <div class="about-us-img">
      <img src="~/assets/svg/aboutus.svg" alt="about-us" />
    </div>
    <div class="about-us-info">
      <div class="about-us-h1">About Us</div>

      <div class="about-us-text">
        MP Digital is a worldwide leader in SEO and digital marketing. We
        provide industry-leading services to both local and national businesses,
        helping them expand and thrive within the competitive online space. As
        we continue to grow our personal brand we strive to maintain our honest
        values of providing top notch customer service and continuing education
        for all team members. Our team works diligently every day to bring you the
        very best results possible. We are constantly learning new techniques to
        assist your company's website with its development, which ultimately
        drives traffic back to your business' webpage(s).
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
