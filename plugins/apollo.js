import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'

// @nuxtjs/apollo expects a client config object, not an ApolloClient instance.
// PrismicLink is a terminating link, so the default upload link must be
// disabled (otherwise Apollo warns and the extra link has no effect).
export default () => ({
  link: PrismicLink({
    uri: 'https://marks-personal-website.prismic.io/graphql'
  }),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})
