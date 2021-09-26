<template>
  <div>
    <!-- assign your video to the following class below -->
    <div id="case-studies-section">
      <!-- navbar put manually for customization -->
      <app-navhome></app-navhome>

      <!-- main background image -->
      <section class="hero homepage container">
        <div class="hero-body columns">
          <!-- titles and resume button -->
          <aside class="left column">
            <!-- titles -->
            <h1 class="bigtitle">{{ title }}</h1>

            <!-- subtitles with vue-typer -->
            <h2 class="subtitle">
              {{ description }}
            </h2>
          </aside>
          <aside class="right column">
            <img class="mainpng" src="~/assets/svg/case.svg" alt="spec" />
          </aside>
        </div>
      </section>
    </div>

    <!-- showing section of search bar and all case studies -->
    <div class="container">
      <!-- search bar -->
      <section class="field columns is-centered searchbar">
        <div class="control has-icons-left column is-3-widescreen is-4-tablet">
          <input
            @keyup.passive="searchPosts(keyword)"
            v-model="keyword"
            type="search"
            class="input is-rounded"
            placeholder="Type to search..."
          />
          <i class="icon is-small is-left icon-search"></i>
        </div>
      </section>

      <!-- blog posts -->
      <transition name="fade">
        <section
          class="posts columns is-multiline is-centered"
          v-if="loading == 0"
        >
          <article
            v-for="post in allCase_studiess.edges"
            :key="post.node._meta.id"
            class="box column is-3-widescreen is-4-tablet"
          >
            <nuxt-link :to="`/case-study/${post.node._meta.uid}/`">
              <img
                class="post-image"
                :src="post.node.image.url"
                :alt="post.node.image.alt"
              />
              <p class="study-title is-6">{{ post.node.title[0].text }}</p>
            </nuxt-link>
          </article>
        </section>
      </transition>

      <!-- loading bar -->
      <aside class="loading-bar columns is-multiline is-centered is-mobile">
        <pulse-loader
          :loading="loading"
          :color="color"
          :size="size"
        ></pulse-loader>
      </aside>

      <!-- button -->
      <aside class="columns is-multiline is-centered is-mobile">
        <button
          v-if="allCase_studiess.pageInfo.hasNextPage && loading == 0"
          class="button"
          @click="loadMorePosts(keyword, allCase_studiess.pageInfo.endCursor)"
        >
          {{ loading ? 'Loading...' : 'Show more' }}
        </button>
      </aside>
    </div>

    <!-- component apps -->
    <app-audit></app-audit>
    <app-bookcall></app-bookcall>
  </div>
</template>

<script>
import BookCall from '@/components/BookCall.vue'
import NavHome from '@/components/NavHome.vue'
import Audit from '@/components/homepage/Audit.vue'

import gql from 'graphql-tag'

const studies = gql`
  query($fulltext: String, $cursor: String) {
    allCase_studiess(
      lang: "en-us"
      fulltext: $fulltext
      sortBy: date_DESC
      first: 3
      after: $cursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          image
          _meta {
            uid
            id
          }
        }
      }
    }
  }
`

export default {
  layout: 'case-study',
  data() {
    return {
      title: 'Case Studies',
      description:
        "Are you set on success in the beauty and cosmetics industry? Then think of SEO services as your bread and butter. You can't skimp out on digital marketing if you want to prosper; this is especially true when it comes to online visibility for your brand.",
      loading: 0,
      color: '#00c58e',
      keyword: '' // for searchPosts()
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:type', // open graph type
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'apple-mobile-web-app-title', // open graph mobile web app title
          name: 'apple-mobile-web-app-title',
          content: this.title
        },
        {
          hid: 'og:title', // open graph title
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description', // open graph description
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url', // open graph url
          property: 'og:url',
          content: 'https://markperez.dev' + this.$route.fullPath + '/'
        },
        {
          hid: 'og:image', // open graph image
          property: 'og:image',
          content: 'https://markperez.dev/mp-digital-logo-dark.png'
        }
      ]
    }
  },

  components: {
    'app-bookcall': BookCall,
    'app-navhome': NavHome,
    'app-audit': Audit
  },

  apollo: {
    allCase_studiess: {
      query: studies,

      variables() {
        return {
          fullText: '',
          cursor: ''
        }
      },

      loadingKey: 'loading', // loading animation
      fetchPolicy: 'cache-and-network'
    }
  },

  methods: {
    loadMorePosts(searchTerm, currentCursor) {
      this.$apollo.queries.allCase_studiess.fetchMore({
        variables: {
          fullText: searchTerm,
          cursor: currentCursor
        },

        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult

          return {
            allCase_studiess: Object.assign(
              {},
              fetchMoreResult.allCase_studiess,
              {
                __typename: fetchMoreResult.allCase_studiess.__typename,
                edges: previousResult.allCase_studiess.edges.concat(
                  fetchMoreResult.allCase_studiess.edges
                ),
                pageInfo: fetchMoreResult.allCase_studiess.pageInfo
              }
            )
          }
        }
      })
    },

    searchPosts(searchTerm) {
      this.$apollo.queries.allCase_studiess.fetchMore({
        variables: {
          fullText: searchTerm,
          cursor: ''
        },

        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult

          return {
            allCase_studiess: Object.assign(
              {},
              fetchMoreResult.allCase_studiess,
              {
                __typename: fetchMoreResult.allCase_studiess.__typename,
                edges: [...fetchMoreResult.allCase_studiess.edges],
                pageInfo: fetchMoreResult.allCase_studiess.pageInfo
              }
            )
          }
        }
      })
    }
  }
}
</script>

<style scoped>

/* styling for querying blogs */
#case-studies-section {
  background: linear-gradient(135deg, #00966b, #17ffbe);
}

.searchbar {
  margin-top: 5rem !important;
}

.call-button:hover {
  color: white;
}

.mainpng {
  position: absolute;
  width: 100%;
}

button {
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
  background-color: #2f495d;
  z-index: 3;
}

/* styling for hero of title and description */
aside {
  margin-bottom: 10rem;
}

aside.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

aside.left a {
  display: block;
}

aside.right {
  display: flex;
  justify-content: center;
  align-items: center;
}

aside.right img {
  left: 50%;
  transform: translateX(-50%);
}

.hero-body .column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

.bigtitle {
  font-size: 65px;
  color: #ffffff;
  letter-spacing: 4px;
  padding-bottom: 1rem;
  text-align: left;
  font-weight: bold;
  text-shadow: 5.5px 9.526px 16px rgba(0, 0, 0, 0.35);
}

.subtitle {
  margin-top: unset !important;
  font-size: 20px;
  text-align: left;
  color: #ffffff;
  width: 570px;
  line-height: 28px;
}

@media only screen and (max-width: 1500px) {
  .bigtitle {
    font-size: 55px;
  }
  .subtitle {
    font-size: 18px;
  }
}

@media only screen and (max-width: 1200px) {
  aside.left a {
    width: 100%;
  }
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .bigtitle {
    font-size: 45px;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    z-index: 3;
    margin-bottom: 1rem;
  }
  .subtitle {
    text-align: center;
    font-size: 17px;
    width: 100%;
    line-height: 20px;
    z-index: 3;
  }

  aside.left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    margin-bottom: 8rem;
  }

  aside.right {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 50vh !important;
  }
}

@media only screen and (max-width: 556px) {
  .hero-body {
    padding: 0px 1.5rem;
  }
  .bigtitle {
    font-size: 40px;
  }
  .subtitle {
    font-size: 15px;
  }
  .call-button {
    font-size: 14px;
  }
  aside.left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    margin-bottom: 4rem;
  }

  aside.right {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 40vh !important;
  }
  aside.right img {
    position: relative;
  }
}

@media screen and (max-width: 350px) {
  aside.left {
    margin-bottom: 1rem;
  }
  aside.right {
    margin-bottom: 1rem;
  }
}

/* styling forked from blog mainpage  */
h1 {
  font-size: 30px;
  padding-top: 0.5rem;
}

h2 {
  margin: 2rem 0;
}

/* add transitions to input boxes */
input {
  transition: all 0.2s;
  background-color: #edf2f7;
}

/* adopt color scheme to input boxes */
input:focus {
  transition: all 0.2s;
  border-color: #00c58e;
}

.loading-bar {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.column {
  padding: unset;
}

.posts {
  margin-top: 1.3rem;
  margin-bottom: 2rem;
}

.post-image {
  border-radius: 6px;
}

.container {
  padding: 0 2rem;
}

.box {
  transition: all 0.2s;
  margin: 1rem;
}

.box:hover {
  transition: all 0.2s;
  transform: scale(1.03);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
}

.study-title {
  text-align: center;
  padding: 1rem 5px;
  font-weight: bold;
  color: #2f495d;
}

.pagination {
  margin: 1rem;
}

.button {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #fff;
  background-color: #00c58e;
}
</style>
