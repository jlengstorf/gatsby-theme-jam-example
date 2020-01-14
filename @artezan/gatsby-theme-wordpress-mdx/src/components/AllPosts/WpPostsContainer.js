/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Posts } from './Posts'

export const WpPostsContainer = () => (
  <StaticQuery
    query={graphql`
      query wpQuery {
        allMdxWpPosts(
          sort: { fields: date, order: DESC }
          limit: 4
          filter: { type: { eq: "WP" } }
        ) {
          nodes {
            date
            type
            wpData {
              excerpt
              content
              title
              tags {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { allWordpressPost } = data
      return <Posts allWordpressPost={allWordpressPost}></Posts>
    }}
  />
)
