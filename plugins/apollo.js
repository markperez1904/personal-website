import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

import gql from 'graphql-tag'

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://marks-personal-website.prismic.io/graphql'
  }),
  defaultHttpLink: false,
  cache: new InMemoryCache()
})
// generate links from graphql documents
export const linkages = () => {
  return client
    .query({
      query: gql`
        {
          _allDocuments {
            edges {
              node {
                _meta {
                  uid
                  type
                }
              }
            }
          }
        }
      `
    })
    .then(res => {
      return res.data._allDocuments.edges.map(posts => {
        if (posts.node._meta.type === 'blog_posts')
          return '/blog/' + posts.node._meta.uid
        else if (posts.node._meta.type === 'case_studies')
          return '/case-study/' + posts.node._meta.uid
      })
    })
}

export default () => client
