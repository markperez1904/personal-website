<template>
  <div class="box leads">
    <!-- Begin Mailchimp Signup Form -->
    <link
      href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
      rel="stylesheet"
      type="text/css"
    />

    <div id="mc_embed_signup">
      <form
        action="https://dev.us20.list-manage.com/subscribe/post?u=0e646f9cc09aa7c7a450ae8b6&amp;id=a5dd106a2e"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h3>Suck With Terminal? 😭</h3>
          <h4>🤓 Free Linux Guide</h4>

          <section class="ebook columns is-multiline">
            <img class="column is-12" src="~assets/images/6_tips_linux.png" alt="linux guide" />
          </section>

          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>

          <div class="mc-field-group">
            <label for="mce-EMAIL">
              Email Address
              <span class="asterisk">*</span>
            </label>
            <input
              type="email"
              value
              name="EMAIL"
              class="required email"
              placeholder="example@gmail.com"
              id="mce-EMAIL"
            />
          </div>

          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_0e646f9cc09aa7c7a450ae8b6_a5dd106a2e" tabindex="-1" value />
          </div>

          <div class="clear">
            <input
              type="submit"
              value="I Need it!"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>
    </div>

    <!--End mc_embed_signup-->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h3,
h4 {
  text-align: center;
}

h3 {
  color: rgb(109, 177, 80);
  font-family: 'Slackey', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 22px;
}

h4 {
  color: rgb(175, 175, 8);
  font-family: 'Bungee', cursive, sans-serif;
  margin-bottom: 1rem;
}

span {
  color: red;
}

.leads {
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  color: white;
}

.ebook {
  margin: 0 auto;
  width: 65%;
}

#mc_embed_signup .button {
  background-color: rgb(30, 190, 133);
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  font-size: 20px;
  border-radius: 20px;
}

#mc_embed_signup input {
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
}
</style>

