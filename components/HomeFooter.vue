<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-left">
        <n-link class="footer-logo" to="/">
          <img
            class="logo"
            src="~static/mp-digital-logo-dark.png"
            alt="Mark Perez Digital"
          />
        </n-link>
        <div class="footer-top-left-socials">
          <div class="footer-top-left-socials-item">
            <a
              href="https://www.youtube.com/channel/UCCZ1Yo4NOdWW03jamsNFA8w/videos"
              target="_blank"
              aria-label="youtube"
              rel="noopener"
            >
              <i class="icon-youtube"></i>
            </a>
          </div>
          <div class="footer-top-left-socials-item">
            <a
              href="https://odysee.com/@markster1904:7"
              target="_blank"
              aria-label="odysee"
              rel="noopener"
            >
              <i class="icon-odysee"></i>
            </a>
          </div>
          <div class="footer-top-left-socials-item">
            <a
              href="https://github.com/markperez1904"
              target="_blank"
              aria-label="github"
              rel="noopener"
            >
              <i class="icon-github"></i>
            </a>
          </div>
          <div class="footer-top-left-socials-item">
            <a
              href="https://www.paypal.com/paypalme2/markperez1904"
              target="_blank"
              aria-label="paypal"
              rel="noopener"
            >
              <i class="icon-paypal"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-top-center">
        <div class="footer-top-center-item">
          What carry out the test? In the press
        </div>
        <div class="footer-top-center-item">About Us</div>
        <div class="footer-top-center-item">Press</div>
        <div class="footer-top-center-item">Associations</div>
        <div class="footer-top-center-item">Companies</div>
        <div class="footer-top-center-item">Individuals</div>
      </div>
      <div class="footer-top-right">
        <div class="footer-top-right-title">
          Subscribe
        </div>
        <div class="footer-top-right-email">
          <form>
            <input placeholder="Enter email" name="email" type="email" />
            <button class="button is-rounded">SEND</button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bot">
      <div class="footer-bot-left">
        &copy;2021-All rights reserved
      </div>
      <div class="footer-bot-right">
        <nuxt-link to="/privacy/">Privacy Policy</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 1383px;
  height: 380px;
  background-color: #2f485d;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer-top-right-email {
  width: 100%;
}

.footer-top-right form {
  position: relative;
  width: 100%;
}

.footer-top-right button {
  width: 95px;
  height: 39px;
  border-radius: 19px;
  background-color: #00c48c;
  font-size: 14px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 600;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
}

.footer-top-right input {
  width: 100%;
  height: 68px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #f4f4f4;
  padding: 20px;
}

.footer-top-right input::placeholder {
  font-size: 14px;
  line-height: 30px;
  color: #646464;
  font-weight: 400;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.footer-top-left {
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
}

.footer-top-center {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 20%;
  height: 100%;
}

.footer-top-right {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 45%;
}

.footer-bot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-top: 1px solid #ffffff;
  padding-top: 15px;
}

.footer-bot-left {
  font-size: 14px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 400;
}

.footer-bot-right a {
  font-size: 14px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 400;
}

.footer-top-center-item {
  font-size: 14px;
  color: #f4f4f4;
  font-weight: 400;
}

.footer-logo {
  width: 100%;
}

.footer-logo img {
  width: 175px;
}

.footer-top-left-socials {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-top: 15px;
}

.footer-top-left-socials-item i {
  font-size: 32px;
}

.footer-top-right-title {
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  font-weight: 600;
  padding-bottom: 15px;
}

@media screen and (max-width: 778px) {
  .footer {
    width: 100%;
    height: 700px;
  }
  .footer-top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .footer-top-left,
  .footer-top-center,
  .footer-top-right {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .footer-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-bot {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
