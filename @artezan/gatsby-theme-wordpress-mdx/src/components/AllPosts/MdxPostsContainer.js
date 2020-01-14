/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Posts } from './Posts'

export const MdxPostsContainer = () => (
  <StaticQuery
    query={graphql`
      query mdxQuery {
        allMdxWpPosts(
          sort: { fields: date, order: DESC }
          limit: 4
          filter: { type: { eq: "MDX" } }
        ) {
          nodes {
            date
            type
            mdxData {
              body
              excerpt
              timeToRead
              wordCount {
                words
              }
              frontmatter {
                title
                tags
                featureImage {
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
      const { allMdxWpPosts } = data
      return <Posts allMdxWpPosts={allMdxWpPosts}></Posts>
    }}
  />
)
