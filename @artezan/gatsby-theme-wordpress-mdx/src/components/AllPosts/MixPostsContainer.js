/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Posts } from './Posts'

export const MixPostsContainer = props => (
  <StaticQuery
    query={graphql`
      query mixQuery {
        allMdxWpPosts(sort: { fields: date, order: DESC }) {
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
              fields {
                slug
              }
              frontmatter {
                title
                tags
                featureImage {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            wpData {
              excerpt
              content
              title
              slug
              tags {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
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
      return <Posts allMdxWpPosts={allMdxWpPosts} {...props}></Posts>
    }}
  />
)
