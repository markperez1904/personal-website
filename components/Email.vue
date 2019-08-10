<template>
  <div class="box leads">
    <!-- Begin Mailchimp Signup Form -->
    <link
      href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
      rel="stylesheet"
      type="text/css"
    />

    <!-- fonts -->
    <link
      rel="stylesheet"
      media="screen"
      href="https://fontlibrary.org/face/archicoco"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Bungee|Ubuntu&display=swap"
      rel="stylesheet"
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
          <h3>Suck With Terminal?</h3>
          <h4>⭐ Free Linux Guide</h4>

          <section class="columns is-multiline">
            <img class="column is-12" src="~assets/images/6_tips_linux.png" alt="linux guide" />

            <aside class="column is-12">
              <ul>
                <li>✅ Become Self-Reliant</li>
                <li>
                  ✅ Become
                  <span>actually</span> tech-savvy
                </li>
                <li>
                  ✅ Nullify
                  <span>technological crutches</span>
                </li>
              </ul>
            </aside>
          </section>

          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>

          <div class="mc-field-group">
            <label for="mce-EMAIL">
              Email Address
              <span class="asterisk">*</span>
            </label>
            <input type="email" value name="EMAIL" class="required email" id="mce-EMAIL" />
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
              value="Totally, I'm in!"
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
  color: rgb(126, 217, 87);
  font-family: 'ArchicocoRegular';
  font-weight: bold;
  font-style: normal;
  font-size: 25px;
}

h4 {
  color: rgb(175, 175, 8);
  font-family: 'Bungee', cursive;
  margin-bottom: 1rem;
}

ul {
  font-family: 'Ubuntu';
  font-weight: bold;
}

span {
  color: red;
}

.leads {
  background: linear-gradient(#000000, #122b14);
  color: white;
}

#mc_embed_signup .button {
  background-color: rgb(30, 190, 133);
  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: 20px;
  border-radius: 20px;
}
</style>

