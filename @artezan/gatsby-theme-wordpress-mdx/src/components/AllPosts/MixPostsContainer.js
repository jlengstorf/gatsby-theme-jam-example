/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Posts } from './Posts'

export const MixPostsContainer = () => (
  <StaticQuery
    query={graphql`
      query mixQuery {
        allMdxWpPosts(sort: { fields: date, order: DESC }, limit: 4) {
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
      const { allMdxWpPosts } = data
      return <Posts allMdxWpPosts={allMdxWpPosts}></Posts>
    }}
  />
)
