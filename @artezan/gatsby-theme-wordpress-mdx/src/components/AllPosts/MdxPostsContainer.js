/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Posts } from './Posts'

export const MdxPostsContainer = () => (
  <StaticQuery
    query={graphql`
      query mdxContQuery {
        allMdx(filter: { fields: { sourceName: { eq: "posts" } } }) {
          nodes {
            id
            body
            frontmatter {
              date
            }
          }
        }
      }
    `}
    render={data => {
      const { allMdx } = data
      return <Posts allMdx={allMdx}></Posts>
    }}
  />
)
