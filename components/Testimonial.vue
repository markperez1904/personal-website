<template>
  <div class="testimonial container">
    <div class="testimonial-wrapper v-scroll-reveal" v-scroll-reveal.reset="{ delay: 250 }">
      <div class="testimonial-title">Testimonial</div>

      <div class="testimonial-carousel">
        <div class="testimonial-carousel-left">
          <div class="testimonial-carousel-picture">
            <img :src="this.items[currentItem].picture" alt="item" />
          </div>
        </div>
        <div class="testimonial-carousel-right">
          <div class="testimonial-carousel-right-top">
            <div class="testimonial-carousel-title">
              {{ this.items[currentItem].title }}
            </div>
            <div class="testimonial-carousel-rating">
              {{ this.items[currentItem].rating }} / 5
            </div>
          </div>

          <div class="testimonial-carousel-right-center">
            <div class="testimonial-carousel-about">
              {{ this.items[currentItem].about }}
            </div>
            <div class="testimonial-carousel-star">
              <img
                v-for="star in this.items[currentItem].starts"
                :key="star"
                src="~/assets/svg/startest.svg"
                alt="star"
              />

              <img
                v-for="star in this.unratedStarts"
                :key="`key-${star}`"
                src="~/assets/svg/startest.svg"
                class="unrated"
                alt="unratedstar"
              />
            </div>
          </div>

          <div class="testimonial-carousel-right-right">
            <div class="left">
              <div class="testimonial-carousel-name">
                {{ this.items[currentItem].name }}
              </div>
              <div class="testimonial-carousel-position">
                {{ this.items[currentItem].position }}
              </div>
            </div>

            <div class="right">
              <div class="testimonial-carousel-arrows">
                <div class="prev" @click="prev()">
                  <img src="~/assets/svg/arrow.svg" alt="arrow" />
                </div>
                <div class="next" @click="next()">
                  <img src="~/assets/svg/arrow.svg" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentItem: 0,
      items: [
        {
          name: 'name1',
          starts: 3,
          about:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
          position: 'position1',
          picture:
            'https://sfia-online.org/ru/assets/images-for-articles/bigstock-software-developer-freelancer-321565021.jpg/@@images/3c14b3dc-5812-42ce-b48d-e88c4d7aecce.jpeg',
          rating: 3.9,
          title: 'Title1'
        },
        {
          name: 'name2',
          starts: 4,
          about:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
          position: 'position2',
          picture:
            'https://sfia-online.org/ru/assets/images-for-articles/bigstock-software-developer-freelancer-321565021.jpg/@@images/3c14b3dc-5812-42ce-b48d-e88c4d7aecce.jpeg',
          rating: 4.75,
          title: 'Title2'
        },
        {
          name: 'name3',
          starts: 1,
          about:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
          position: 'position3',
          picture:
            'https://sfia-online.org/ru/assets/images-for-articles/bigstock-software-developer-freelancer-321565021.jpg/@@images/3c14b3dc-5812-42ce-b48d-e88c4d7aecce.jpeg',
          rating: 1.75,
          title: 'Title3'
        },
        {
          name: 'name4',
          starts: 2,
          about:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
          position: 'position4',
          picture:
            'https://sfia-online.org/ru/assets/images-for-articles/bigstock-software-developer-freelancer-321565021.jpg/@@images/3c14b3dc-5812-42ce-b48d-e88c4d7aecce.jpeg',
          rating: 2.75,
          title: 'Title4'
        }
      ]
    }
  },
  methods: {
    next() {
      if (this.currentItem === this.items.length - 1) this.currentItem = 0
      if (this.currentItem < this.items.length) this.currentItem += 1
    },
    prev() {
      if (this.currentItem === 0) this.currentItem = this.items.length
      if (this.currentItem !== 0) this.currentItem -= 1
    }
  },
  computed: {
    unratedStarts() {
      return [...Array(5 - this.items[this.currentItem].starts).keys()]
    }
  }
}
</script>
<style scoped>
.testimonial {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.testimonial-carousel-star {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}

.testimonial-carousel-star img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.unrated {
  filter: grayscale(100%);
}

.testimonial-wrapper {
  width: 100%;
}

.testimonial-carousel {
  overflow: hidden;
  width: 100%;
  height: 447px;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.05));
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.testimonial-title {
  font-size: 40px;
  color: #2f495e;
  font-weight: bold;
  text-align: center;
  margin: 15px 0;
}

.testimonial-carousel-right {
  width: 60%;
  height: 100%;

  padding: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.testimonial-carousel-title {
  font-size: 24px;
  color: #2f495e;
  font-weight: 600;
  text-align: center;
}

.testimonial-carousel-rating {
  font-size: 24px;
  color: #959595;
  font-weight: 400;
  text-align: center;
}

.testimonial-carousel-right-center {
}

.testimonial-carousel-about {
  height: 126px;
  font-size: 16px;
  line-height: 28px;
  color: #777777;
  font-weight: 300;
  text-align: center;
}

.testimonial-carousel-right-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.testimonial-carousel-right-right .left,
.testimonial-carousel-right-right .right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}

.testimonial-carousel-right-right .left {
  flex-direction: column;
}

.testimonial-carousel-right-right .right .testimonial-carousel-arrows {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 30%;
}

.testimonial-carousel-name {
  font-size: 18px;
  color: #333435;
  font-weight: 400;
  text-align: left;
  width: 100%;
}

.testimonial-carousel-position {
  font-size: 14px;
  color: #959595;
  font-weight: 300;
  width: 100%;
  text-align: left;
}

.testimonial-carousel-left {
  height: 100%;
  width: 40%;
}

.testimonial-carousel-picture {
  height: 100%;
  width: 100%;
}

.testimonial-carousel-left img {
  height: 100%;
}

.prev img {
  transform: rotate(-90deg);
  height: 25px;
  width: 25px;
}

.next img {
  transform: rotate(90deg);
  height: 25px;
  width: 25px;
}

@media screen and (max-width: 778px) {
  .testimonial-carousel {
    flex-direction: column;
    height: auto;
  }
  .testimonial-carousel-right {
    width: 100%;
    order: 1;
  }

  .testimonial-carousel-star {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .testimonial-carousel-right-right {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .testimonial-carousel-name {
    width: 100%;
    text-align: center;
  }

  .testimonial-carousel-position {
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }

  .testimonial-carousel-left {
    order: 2;
    width: 100%;
  }

  .testimonial-carousel-about {
    font-size: 12px;
  }

  .testimonial-carousel-star img {
    width: 15px;
    height: 15px;
  }
}
</style>
