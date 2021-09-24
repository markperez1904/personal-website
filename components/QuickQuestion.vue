<template>
  <div class="quick container v-scroll-reveal" v-scroll-reveal.reset="{ delay: 250 }">
    <div class="quick-wrapper">
      <div class="quick-left">
        <img src="~/assets/svg/quick.svg" alt="quick" />
      </div>
      <div class="quick-right">
        <div class="quick-right-question">quick question:</div>
        <div class="quick-right-title">Do you like money?</div>
        <div class="quick-right-text">Then you'll love our content.</div>
        <form class="quick-right-form">
          <input type="email" placeholder="Email*" />
          <button class="button is-rounded">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.quick {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.quick-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.quick-left,
.quick-right {
  width: 45%;
  display: flex;
  align-items: flex-start;
}

.quick-right {
  justify-content: center;
  flex-direction: column;
  padding: 30px;
}

.quick-right-question {
  margin-bottom: 20px;
  height: 18px;
  font-size: 18px;
  line-height: 28px;
  color: #2f495e;
  font-weight: 700;
  width: 100%;
}

.quick-right-title {
  margin-bottom: 20px;
  font-size: 30px;
  line-height: 40px;
  color: #00c58e;
  font-weight: bold;
  filter: drop-shadow(0px 11px 8px rgba(0, 0, 0, 0.35));
  text-transform: uppercase;
}

.quick-right-text {
  height: 18px;
  font-size: 20px;
  line-height: 28px;
  color: #2f495e;
  font-weight: 300;
  width: 100%;
  margin-bottom: 20px;
}

.quick-right-form {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.quick-right-form button {
  height: 38px;
  border-radius: 19px;
  background-color: #2f495e;
  color: #fff;
}

.quick-right-form input {
  width: 100%;
  height: 68px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #464646;
  padding: 20px;
  margin-bottom: 20px;
}

.quick-right-form input::placeholder {
  font-size: 20px;
  color: #626262;
  font-weight: 300;
  text-align: left;
}

@media screen and (max-width: 778px) {
  .quick-wrapper {
    flex-direction: column;
  }

  .quick-left {
    order: 2;
  }

  .quick-left,
  .quick-right {
    width: 100%;
    padding: 0;
  }

  .quick-right-form {
    justify-content: center;
    align-items: center;
  }

  .quick-right-text,
  .quick-right-question,
  .quick-right-title {
    text-align: center;
    width: 100%;
  }
}
</style>
