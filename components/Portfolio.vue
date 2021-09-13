<template>
  <div class="hero is-bold is-medium">
    <h3 class="hero-head has-text-centered">Clients</h3>

    <header class="hero-body container">
      <section class="columns is-multiline is-centered">
        <!-- Project #1 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <a aria-label="SkinSolutions.MD Blog" rel="noopener">
              <ClientOnly>
                <silent-box :gallery="ssmd" :preview-count="1"></silent-box
              ></ClientOnly>
            </a>
          </div>
          <p class="title is-6">SkinSolutions.MD (B2C)</p>
        </article>

        <!-- Project #2 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <a aria-label="Revive Med Spa" rel="noopener">
              <ClientOnly>
                <silent-box :gallery="revive" :preview-count="1"></silent-box
              ></ClientOnly>
            </a>
          </div>
          <p class="title is-6">Revive Med Spa & GMB (B2C)</p>
        </article>

        <!-- Project #3 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <a aria-label="Reachify.io Blog" rel="noopener">
              <ClientOnly>
                <silent-box :gallery="reachify" :preview-count="1"></silent-box
              ></ClientOnly>
            </a>
          </div>
          <p class="title is-6">Reachify.io (B2B)</p>
        </article>

        <!-- Project #4 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <a aria-label="Le Pragma website" rel="noopener">
              <ClientOnly>
                <silent-box :gallery="lepragma" :preview-count="1"></silent-box
              ></ClientOnly>
            </a>
          </div>
          <p class="title is-6">Le Pragma (Web Design)</p>
        </article>

        <!-- Project #5 -->
        <article class="box column is-3-widescreen is-4-tablet">
          <div class="project-image">
            <a aria-label="SEO testimonial" rel="noopener">
              <ClientOnly> <silent-box :image="mike"></silent-box></ClientOnly>
            </a>
          </div>
          <p class="title is-6">Startup Consultant</p>
        </article>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ssmd: [
        {
          src:
            'https://images.prismic.io/marks-personal-website/efa8e0d6-c913-48ac-af7e-bd484c9c6ee5_skin-solutions-md-blog.jpg?auto=compress,format',
          alt: 'skinsolutions.md blog page',
          description: "We've lead the development of SkinSolutions.MD's blog"
        },
        {
          src:
            'https://images.prismic.io/marks-personal-website/388ccaa3-2cb2-4263-82e2-e4fe50b39de3_ssmd-featured-snippet.png?auto=compress,format',
          alt: 'ranking a featured snippet',
          description:
            'Within the first few months, featured snippets started to populate over our targeted keywords'
        },
        {
          src:
            'https://images.prismic.io/marks-personal-website/27c328c7-0a2d-4b69-9a8c-0687c1e600a6_ssmd-results.png?auto=compress,format',
          alt: 'ssmd ranking over 50+ keywords on page 1',
          description: 'Over 50+ keyphrases ranking on page 1'
        },
        {
          src:
            'https://images.prismic.io/marks-personal-website/b0003255-1533-42d4-835b-4fff1cc9ac49_ssmd-tech-seo.png?auto=compress,format',
          alt: 'SkinSolutions.MD Technical SEO',
          description:
            "As overall size of blog increased, we've conducted Technical SEO requisites to maintain consistent speeds"
        }
      ],
      revive: [
        {
          src:"https://youtu.be/Zs0HvrQTlNs",
          thumbnail:
            'https://images.prismic.io/marks-personal-website/784c55e8-3948-4c6a-ae79-ea07a0e18e78_revive-partners.jpg?auto=compress,format',
          controls: true,
          alt: 'revive video SEO',
          description:
            'In partnership with SkinSolutions.MD, we helped Revive Med Spa gain attraction through social media'
        },

        {
          src:
            'https://images.prismic.io/marks-personal-website/6c817f6d-853f-4d6d-8c88-4424f5efd4ce_revive-reviews.jpg?auto=compress,format',
          alt: 'Revive GMB ratings',
          description:
            "We optimzied Revive's Google My Business pages for multilpe locations in San Diego, which still receives many reviews to this day"
        }
      ],
      reachify: [
        {
          src:
            'https://images.prismic.io/marks-personal-website/02680204-59f1-4b67-90d0-ca767e09338d_reachify-io-blog.jpg?auto=compress,format',
          alt: 'reachify blog page',
          description:
            'In Reachify.io, we gave SEO counseling on B2B-content efforts for a difficult, but worthy IT niche'
        },
        {
          src:
            'https://images.prismic.io/marks-personal-website/6efd7984-304c-47d2-b509-29f3fe9e4684_reachify-organic-growth-1yr.png?auto=compress,format',
          alt: 'reachify gaining traffic within a year',
          description:
            'Within a year, the website has experienced exponential growth in the organic spectrum'
        },
        {
          src: "https://youtu.be/96XZZ43aP4k",
          alt: 'Reachify working with Revive Med Spa',
          description: "Reachify and Revive Med Spa working together in unison",
          controls: true
        }
      ],
      lepragma: [
        {
          src:
            'https://images.prismic.io/marks-personal-website/0b692127-13fe-4a64-9524-ac2af9e58137_le-pragma-site.jpg?auto=compress,format',
          alt: 'le pragma showcase',
          description:
            'Mark personally built the lepragma.com website efficiently within a week'
        },
        {
          src:
            'https://images.prismic.io/marks-personal-website/d0b0b261-187c-4717-af1c-547f120f7fb4_le-pragma-elementor.png?auto=compress,format',
          alt: 'le pragma website builder',
          description:
            'The Le Pragma cannabis products are built & presented through Elementor'
        }
      ],
      mike: {
        src: 'https://www.youtube.com/watch?v=vHuQMaVGMW8',
        alt: 'SEO testinomial',
        description:
          'SEO testimonial from Michael Grabham at Esidarap Inc. (Startup Consultant)',
        thumbnail:
          'https://images.prismic.io/marks-personal-website/31a8a365-1b2d-450b-aa66-3dc5988bdb8a_mike-testimonial.jpg?auto=compress,format',
        controls: true
      }
    }
  }
}
</script>

<style scoped>
/* This snippet of code here fixes the stupid iframe issue (for portfolio only) */
article {
  text-align: center;
}

i {
  margin-right: 3px;
}

img {
  border-radius: 6px;
}

.hero-head {
  margin-top: 2rem;
  font-size: 40px;
  letter-spacing: 12px;
}

.hero-body {
  padding-top: 4rem !important;
}

.project-image:hover .overlay {
  opacity: 1;
}

.project-image:hover img {
  transition: 0.2s ease;
  opacity: 0.4;
}

.overlay {
  position: unset;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.2s ease;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
}

.title {
  text-align: center;
  padding: 1rem 5px;
}

.column {
  padding: unset;
}

.box {
  transition: all 0.2s;
  margin: 1rem;
}

.box:hover {
  transition: all 0.2s;
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}
</style>
