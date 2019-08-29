import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://marks-personal-website.prismic.io/graphql'
  }),
  cache: new InMemoryCache()
})

export default () => client
