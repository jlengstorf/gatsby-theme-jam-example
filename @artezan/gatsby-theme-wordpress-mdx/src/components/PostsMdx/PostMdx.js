/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

const PostMdx = () => {
  let query = graphql`
    {
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
    allMdx: { nodes: posts }
  } = useStaticQuery(query)
  console.log(posts)
  return posts.map((post, index) => <p key={`${index}-mdx`}> {post.id} </p>)
}

export default PostMdx
