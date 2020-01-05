/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Posts } from './Posts'

export const WpPostsContainer = () => (
  <StaticQuery
    query={graphql`
      query wpContQuery {
        allWordpressPost(sort: { fields: date, order: DESC }) {
          nodes {
            date
            title
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
