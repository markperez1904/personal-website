<template>
  <!-- root -->
  <div class="entire-footer">
    <!-- entire footer -->
    <footer class="new_footer_area bg_color">
      <div class="new_footer_top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-8">
              <div
                class="f_widget social-widget pl_70 wow fadeInLeft aligner"
                data-wow-delay="0.8s"
                style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;"
              >
                <!-- <h3 class="f-title f_600 t_color f_size_18">Social Links</h3> -->
                <div>
                  <img
                    class="logo"
                    src="~static/mp-digital-logo-dark.png"
                    alt="Mark Perez Digital"
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-8">
              <div
                class="f_widget about-widget pl_70 wow fadeInLeft aligner"
                data-wow-delay="0.4s"
                style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;"
              >
                <h3 class="f-title f_600 t_color f_size_18">Menu</h3>
                <ul class="list-unstyled f_list leftism">
                  <li>
                    <n-link to="/about/">About Us</n-link>
                  </li>
                  <li>
                    <n-link to="/case-study/">Case Studies</n-link>
                  </li>
                  <!-- <li>
                    <n-link to="/audit/">Free Audit</n-link>
                  </li> -->
                  <li>
                    <n-link to="/contact/">Contact</n-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-8">
              <div
                class="f_widget about-widget pl_70 wow fadeInLeft aligner"
                data-wow-delay="0.6s"
                style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;"
              >
                <h3 class="f-title f_600 t_color f_size_18">Legal</h3>
                <ul class="list-unstyled f_list leftism">
                  <li>
                    <n-link to="/terms/">Terms of Service</n-link>
                  </li>
                  <li>
                    <n-link to="/privacy/">Privacy Policy</n-link>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="col-lg-4 col-md-8">
              <div
                class="f_widget company_widget wow fadeInLeft aligner"
                data-wow-delay="0.2s"
                style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
              >
                <h3 class="f-title f_600 t_color f_size_18">Subscribe</h3>
                <p>
                  Stay up to date in the latest resources.
                </p>
                <form
                  class="f_subscribe_two mailchimp validate"
                  action="https://dev.us20.list-manage.com/subscribe/post?u=0e646f9cc09aa7c7a450ae8b6&amp;id=a5dd106a2e"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  novalidate
                >
                  <!- email -->
            <!-- <input
                    type="text"
                    name="EMAIL"
                    class="form-control memail"
                    placeholder="Email"
                  /> -->

            <!-- fake button for bots -->
            <!-- <div
                    style="position: absolute; left: -5000px;"
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_0e646f9cc09aa7c7a450ae8b6_a5dd106a2e"
                      tabindex="-1"
                      value
                    />
                  </div> -->

            <!-- real sub button -->
            <!-- <button class="btn btn_get btn_get_two" type="submit">
                    Subscribe
                  </button>
                  <p class="mchimp-errmessage" style="display: none;"></p>
                  <p class="mchimp-sucmessage" style="display: none;"></p>
                </form>
              </div>
            </div> -->
          </div>
        </div>
        <div class="footer_bg">
          <div class="footer_bg_one"></div>
          <div class="footer_bg_two"></div>
        </div>
      </div>
      <div class="footer_bottom centerism">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-5 text-right">
              <p>
                Made with
                <a href="https://nuxtjs.org" target="_blank">NuxtJS</a>
              </p>
            </div>
            <div class="col-lg-6 col-sm-7">
              <p class="mb-0 f_400">&copy; {{ getYear }} MP Digital</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
/* marks css */
i {
  font-size: 28px;
  margin-right: 10px;
}

a {
  text-decoration: unset;
}

small .legal {
  color: #2f495e;
}

hr {
  background-color: lightgray;
}

.framework {
  font-weight: bold;
}

.aligner {
  padding-left: 2em;
  padding-top: 2rem;
}

.leftism {
  margin-left: inherit;
}

.centerism {
  text-align: center;
}

.logo {
  margin-top: 3rem;
  max-height: 3rem;
}

/* forked css */
.new_footer_top {
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: relative;
  overflow-x: hidden;
}
.new_footer_area .footer_bottom {
  padding-top: 5px;
  padding-bottom: 50px;
}
.footer_bottom {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #7f88a6;
  padding: 27px 0px;
}
.new_footer_top .company_widget p {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  color: #6a7695;
  margin-bottom: 20px;
}
.new_footer_top .company_widget .f_subscribe_two .btn_get {
  border-width: 1px;
  margin-top: 20px;
}
.btn_get_two:hover {
  background: transparent;
  color: #00c58e;
}
.btn_get:hover {
  color: #fff;
  background: #00c58e;
  border-color: #00c58e;
  -webkit-box-shadow: none;
  box-shadow: none;
}
a:hover,
a:focus,
.btn:hover,
.btn:focus,
button:hover,
button:focus {
  text-decoration: none;
  outline: none;
}

.new_footer_top .f_widget.about-widget .f_list li a:hover {
  color: #00c58e;
}
.new_footer_top .f_widget.about-widget .f_list li {
  margin-bottom: 11px;
}
.f_widget.about-widget .f_list li:last-child {
  margin-bottom: 0px;
}
.f_widget.about-widget .f_list li {
  margin-bottom: 15px;
}
.f_widget.about-widget .f_list {
  margin-bottom: 0px;
}
.new_footer_top .f_social_icon a {
  width: 44px;
  height: 44px;
  line-height: 43px;
  background: transparent;
  border: 1px solid #e2e2eb;
  font-size: 24px;
}
.f_social_icon a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 45px;
  color: #858da8;
  display: inline-block;
  background: #ebeef5;
  text-align: center;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.ti-facebook:before {
  content: '\e741';
}
.ti-twitter-alt:before {
  content: '\e74b';
}
.ti-vimeo-alt:before {
  content: '\e74a';
}
.ti-pinterest:before {
  content: '\e731';
}

.btn_get_two {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #00c58e;
  border-color: #00c58e;
  color: #fff;
}

.btn_get_two:hover {
  background: transparent;
  color: #00c58e;
}

.new_footer_top .f_social_icon a:hover {
  background: #00c58e;
  border-color: #00c58e;
  color: white;
}
.new_footer_top .f_social_icon a + a {
  margin-left: 4px;
}
.new_footer_top .f-title {
  margin-bottom: 30px;
  color: #263b5e;
}
.f_600 {
  font-weight: 600;
}
.f_size_18 {
  font-size: 18px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #4b505e;
}
.new_footer_top .f_widget.about-widget .f_list li a {
  color: #6a7695;
}
</style>
