<template>
  <!-- Email API form submission -->
  <div class="contactus container v-scroll-reveal" v-scroll-reveal.reset>
    <div class="contactus-left">
      <div class="contactus-img">
        <img src="~/assets/svg/contactus.svg" alt="contactus" />
      </div>
    </div>
    <div class="contactus-right">
      <div class="contactus-title">Business Audit</div>

      <!-- Email API form submission -->
      <form
        class="contactus-form"
        @submit="handleRequest"
        action="https://formspree.io/info@markperez.dev"
        method="POST"
      >
        <!-- Full Name -->
        <input
          class="contactus-name"
          name="name"
          placeholder="Full Name"
          type="text"
          aria-label="full name"
          required
        />

        <!-- Email -->
        <input
          class="contactus-email"
          name="email"
          placeholder="email"
          type="text"
          aria-label="email address"
          required
        />

        <!-- Company name -->
        <input
          class="contactus-name"
          name="name"
          placeholder="Company"
          type="text"
          aria-label="company name"
          required
        />

        <!-- website -->
        <input
          class="contactus-name"
          name="website"
          placeholder="Website"
          type="text"
          aria-label="website"
          required
        />

        <!-- Submit -->
        <button class="contactus-buton button is-rounded" type="submit">
          Request Audit
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.contactus {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.contactus-left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.contactus-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
}
button {
  display: block;
  width: 131px !important;
  height: 38px !important;
  border-radius: 19px !important;
  background-color: #2f495e !important;
  color: white;
}

.contactus-title {
  width: 100%;
  text-align: left;
  font-size: 40px;
  color: #2f495e;
  font-weight: bold;
  padding: 20px 0;
}

.contactus-img {
  width: 100%;
}

.contactus-form {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.contactus-text {
  width: 100%;
  height: 192px;
  border-radius: 5px;
  background-color: #edf2f7;
  border: 1px solid #dbdbdb;
  padding: 20px;
  margin-bottom: 10px;
}
.contactus-text::placeholder {
  font-size: 20px;
  color: #626262;
  font-weight: 300;
  text-align: left;
}
.contactus-name::placeholder {
  font-size: 20px;
  color: #626262;
  font-weight: 300;
  text-align: left;
  text-transform: capitalize;
}
.contactus-email::placeholder {
  font-size: 20px;
  color: #626262;
  font-weight: 300;
  text-align: left;
  text-transform: capitalize;
}
.contactus-name {
  padding: 20px;
  width: 100%;
  height: 68px;
  border-radius: 5px;
  background-color: #edf2f7;
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
}
.contactus-email {
  padding: 20px;
  width: 100%;
  height: 68px;
  border-radius: 5px;
  background-color: #edf2f7;
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
}

@media screen and (max-width: 568px) {
  .contactus {
    flex-direction: column;
    padding: 20px;
  }
  .contactus-left {
    order: 2;
    width: 100%;
  }
  .contactus-right {
    order: 1;
    width: 100%;
  }
  .contactus-title {
    text-align: center;
  }
  .contactus-form {
    justify-content: center;
    align-items: center;
  }
}
</style>
