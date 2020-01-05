/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

/* 
TODO make card
 */

const PostWp = ({ postId }) => {
  let query = graphql`
    {
      allWordpressPost(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          date
          title
        }
      }
      allMdx(filter: { fields: { sourceName: { eq: "posts" } } }) {
        nodes {
          id
          body
          excerpt
        }
      }
    }
  `

  const {
    allWordpressPost: { nodes: posts }
  } = useStaticQuery(query)
  console.log(posts)
  return posts.map((post, index) => <p key={index}> {post.title} </p>)
  // return posts
}

export default PostWp
