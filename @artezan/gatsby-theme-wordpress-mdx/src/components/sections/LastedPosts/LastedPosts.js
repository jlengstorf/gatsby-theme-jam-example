/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const LastedPosts = ({ body, frontmatter }) => {
  const context = useThemeUI()

  return (
    <MDXRenderer
      scope={{
        ...frontmatter,
        context
      }}
    >
      {body}
    </MDXRenderer>
  )
}
