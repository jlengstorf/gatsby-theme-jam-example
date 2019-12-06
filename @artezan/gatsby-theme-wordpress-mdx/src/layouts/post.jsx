/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({ data: { mdx, site } }) => {
  const context = useThemeUI()

  const { timeToRead, wordCount, excerpt } = mdx

  return (
    <article
      sx={{
        mb: 7
      }}
    >
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </article>
  )
}

export const contentQuery = graphql`
  query postQuery($id: String) {
    site {
      siteMetadata {
        title
        siteURL
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
    }
  }
`
export default Post
