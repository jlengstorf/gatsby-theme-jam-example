/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Posts } from './Posts'

export const MixPostsContainer = () => (
  <StaticQuery
    query={graphql`
      query mixQuery {
        allMdx(
          filter: { fields: { sourceName: { eq: "posts" } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            id
            body
            excerpt
            frontmatter {
              date
            }
          }
        }

        allWordpressPost(sort: { fields: date, order: DESC }) {
          nodes {
            date
            title
          }
        }
      }
    `}
    render={data => {
      const { allWordpressPost, allMdx } = data
      return <Posts allWordpressPost={allWordpressPost} allMdx={allMdx}></Posts>
    }}
  />
)
