<template>
  <div class="casetext container">
    <div class="casetext-wrapper">
      <div class="casetext-item v-scroll-reveal" v-scroll-reveal.reset="{ delay: 250 }">
        <div class="casetext-item-left text">
          <div class="casetext-item-left-title">
            Private Practice Increases Their Lead Volume by 68.04%
          </div>
          <div class="casetext-item-left-text ">
            <span
              >Dr. Ari Sytner is a passionate and highly-skilled therapist who
              focuses on relationship, dating, and marriage therapy.</span
            >
            <br /><br />
            <span
              >Based in New Jersey, Dr. Ari’s practice mainly services parts in
              and around Essex County, NJ as well as New York County, NY but
              with the ability to offer his services on a national basis.</span
            >
            <br /><br />
            <span
              >Dr. Ari was an existing advertiser and wanted to further use
              Google Ads to be the main driving marketing channel for new
              clients.</span
            >
          </div>
        </div>

        <div class="casetext-item-right img">
          <img src="~/assets/svg/caseitem1.svg" alt="image" />
        </div>
      </div>

      <div class="casetext-item v-scroll-reveal" v-scroll-reveal.reset="{ delay: 250 }">
        <div class="casetext-item-right img">
          <img src="~/assets/svg/caseitem2.svg" alt="image" />
        </div>
        <div class="casetext-item-left text">
          <div class="casetext-item-left-title">Challenges</div>
          <div class="casetext-item-left-text">
            <span
              >Overtime, Dr. Ari noticed that the quantity and the quality of
              leads had been decreasing and he needed to see an increase in
              conversion volume and lead quality to continue advertising.</span
            >
            <br /><br />
            <span
              >Dr. Ari’s practice was also unable to accept insurance and priced
              themselves as a premium solution when compared to the local
              competition, posing challenges for generating qualified
              leads.</span
            >
            <br /><br />
            <span
              >Dr Ari was running two campaigns, a local campaign as well as a
              national campaign targeting select geographies. Both campaigns had
              many, small, bid adjustments made over the course of the campaigns
              running.
            </span>
            <br /><br />
            <span>
              With so many small bid adjustments in different areas being made
              in short periods of time, without enough data to justify the
              changes, it was difficult to diagnose the exact reasons why the
              campaigns started to slip in performance and looked like a “death
              by a thousand cuts” situation.
            </span>
          </div>
        </div>
      </div>

      <div class="casetext-item v-scroll-reveal" v-scroll-reveal.reset="{ delay: 250 }">
        <div class="casetext-item-right img">
          <img src="~/assets/svg/caseitem3.svg" alt="image" />
        </div>
        <div class="casetext-item-left text">
          <div class="casetext-item-left-title">Solution</div>
          <div class="casetext-item-left-text">
            <span
              >The first step was to create a new local and a new national
              campaign using the existing framework as our starting point,
              without all of the additional bid adjustments in the old
              campaigns.</span
            >
            <br />
            <br />
            <span
              >We also made improvements to the existing framework such as
              creating new ads and adding more negative keywords to the
              account.</span
            >
            <br /><br />
            <span
              >Within just one month, we had seen some noteworthy
              improvements:</span
            >
          </div>
          <div class="casetext-item-left-arrows">
            <div class="casetext-arrows-top">
              <img src="~/assets/svg/arrow.svg" alt="img" /><span
                >Conversion Rate Increased by 39.89%</span
              >
            </div>
            <div class="casetext-arrows-bot">
              <img src="~/assets/svg/arrow.svg" alt="img" /><span>
                Cost Per Conversion Decreased by 12.68%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.casetext {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.casetext-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.casetext-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
}

.casetext-item-right.text,
.casetext-item-left.text {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.casetext-item-right,
.casetext-item-left {
  width: 45%;
}

.casetext-item-left-title,
.casetext-item-right-title {
  font-size: 30px;
  line-height: 40px;
  color: #2f495e;
  font-weight: bold;
  filter: drop-shadow(0px 11px 8px rgba(0, 0, 0, 0.35));
  margin-bottom: 15px;
}

.casetext-item-left-text,
.casetext-item-right-text {
  font-size: 19px;
  color: #9c9b9b;
}

.casetext-item-left-arrows {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.casetext-arrows-top img,
.casetext-arrows-bot img {
  height: 60px;
  width: 60px;
}
.casetext-arrows-top,
.casetext-arrows-bot {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.casetext-arrows-top span,
.casetext-arrows-bot span {
  margin-left: 20px;
  font-size: 25px;
  line-height: 32px;
  color: #31495e;
  font-weight: bold;
  filter: drop-shadow(0px 11px 8px rgba(0, 0, 0, 0.35));
}

.casetext-arrows-bot img {
  transform: rotate(180deg);
}

@media screen and (max-width: 768px) {
  .casetext-item {
    flex-direction: column;
  }

  .casetext-item-left,
  .casetext-item-right {
    width: 100%;
  }

  .casetext-item-left.text,
  .casetext-item-right.text {
    order: 1;
  }

  .casetext-item-left.img,
  .casetext-item-right.img {
    order: 2;
  }

  .casetext-item-left-title,
  .casetext-item-right-title {
    text-align: center;
    width: 100%;
  }

  .casetext-item-left-arrows {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>
