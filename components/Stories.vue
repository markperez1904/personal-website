<template>
  <div class="gtco-testimonials">
    <h2>Testimonials</h2>
    <div class="owl-carousel owl-carousel1 owl-theme">
      <div>
        <div class="card text-center">
          <img class="card-img-top" src="~assets/images/orosa.jpg" alt="" />
          <div class="card-body">
            <h5>
              Camille Orosa
              <span> - Marketing Director </span>
            </h5>
            <p class="card-text">
              "Working with Mark has been such a pleasure. He is not only
              detailed-oriented and knowledgeable, he is also a remarkable
              communicator. His team focuses on how we can all work together and
              grow as a platform. As a marketing leader, Mark's aura makes you
              feel like you're in Silicon Valley! He is reliable, smart, and
              funny to be around!"
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img class="card-img-top" src="~assets/images/wu.jpg" alt="" />
          <div class="card-body">
            <h5>
              Mandy Wu
              <span> - Brand Coordinator </span>
            </h5>
            <p class="card-text">
              “Mark and his team are well-organized and coordinated. Before we
              met, our in-house team was having trouble figuring out how to
              target the right type of med spa keywords. But not until Mark
              introduced us to a content system that helped us churn out
              optimized blogs that quickly ranked.”
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img class="card-img-top" src="~assets/images/rivera.jpg" alt="" />
          <div class="card-body">
            <h5>
              Paul Rivera
              <span> - Product Manager </span>
            </h5>
            <p class="card-text">
              “Mark was awesome and got our traffic going! His team was great
              and he is awesome to work with as well. Would highly recommend
              him!"
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img class="card-img-top" src="~assets/images/grabham.jpg" alt="" />
          <div class="card-body">
            <h5>
              Mike Grabham
              <span> - Business Consultant </span>
            </h5>
            <p class="card-text">
              “Mark gave us some really great strategies one-on-one. He's shown
              us so many advanced ways to gain traction online and work with
              more people.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    ;(function() {
      'use strict'

      var carousels = function() {
        $('.owl-carousel1').owlCarousel({
          loop: true,
          center: true,
          margin: 0,
          responsiveClass: true,
          nav: false,
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            680: {
              items: 2,
              nav: false,
              loop: false
            },
            1000: {
              items: 3,
              nav: true
            }
          }
        })
      }

      ;(function($) {
        carousels()
      })(jQuery)
    })()
  }
}
</script>

<style>
.gtco-testimonials {
  position: relative;
  margin-top: 30px;
}
.gtco-testimonials h2 {
  font-size: 30px;
  text-align: center;
  color: #333333;
  margin-bottom: 50px;
}
.gtco-testimonials .owl-stage-outer {
  padding: 30px 0;
}
.gtco-testimonials .owl-nav {
  display: none;
}
.gtco-testimonials .owl-dots {
  text-align: center;
}
.gtco-testimonials .owl-dots span {
  position: relative;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: block;
  background: #fff;
  border: 2px solid #00c58e;
  margin: 0 5px;
}
.gtco-testimonials .owl-dots .active {
  box-shadow: none;
}
.gtco-testimonials .owl-dots .active span {
  background: #00c58e;
  box-shadow: none;
  height: 12px;
  width: 12px;
  margin-bottom: -1px;
}
.gtco-testimonials .card {
  background: #fff;
  box-shadow: 0 8px 30px -7px #c9dff0;
  margin: 0 20px;
  padding: 0 10px;
  border-radius: 20px;
  border: 0;
}
.gtco-testimonials .card .card-img-top {
  max-width: 100px;
  border-radius: 50%;
  margin: 15px auto 0;
  box-shadow: 0 8px 20px -4px #95abbb;
  width: 100px;
  height: 100px;
}
.gtco-testimonials .card h5 {
  color: #00c58e;
  font-size: 21px;
  line-height: 1.3;
}
.gtco-testimonials .card h5 span {
  font-size: 21px;
  color: #666666;
}
.gtco-testimonials .card p {
  font-size: 16px;
  color: #555;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.gtco-testimonials .active {
  opacity: 0.5;
  transition: all 0.3s;
}
.gtco-testimonials .center {
  opacity: 1;
}
.gtco-testimonials .center h5 {
  font-size: 20px;
}
.gtco-testimonials .center h5 span {
  font-size: 20px;
}
.gtco-testimonials .center .card-img-top {
  max-width: 100%;
  height: 120px;
  width: 120px;
}

@media (max-width: 767px) {
  .gtco-testimonials {
    margin-top: 20px;
  }
}
.owl-carousel .owl-nav button.owl-next,
.owl-carousel .owl-nav button.owl-prev {
  outline: 0;
}
.owl-carousel button.owl-dot {
  outline: 0;
}

/* marks personal edits */
.card-text {
  font-style: italic;
}
</style>
