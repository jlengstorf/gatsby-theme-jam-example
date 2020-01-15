/** @jsx jsx */
import * as React from 'react'

import { jsx, Styled, useThemeUI, css } from 'theme-ui'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Tag } from '../components/Tag'
import { Seo } from '../components/Seo'

import { formatDate, colorRange } from '../helpers'
import { Content } from '../components/Content'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const PageTemplate = ({
  content,
  tags,
  title,
  date,
  author,
  featuredImage,
  site,
  excerpt,
  timeToRead,
  wordCount
}) => {
  const context = useThemeUI()
  const colorScale = colorRange(
    context.theme.colors.primary,
    context.theme.colors.secondary,
    tags ? tags.length : 2
  )

  return (
    <article
      sx={{
        mb: 7
      }}
    >
      <MDXRenderer>{content}</MDXRenderer>
    </article>
  )
}

const Page2 = ({ data }) => {
  const { mdx, site } = data
  return (
    <Content config={site.config}>
      <PageTemplate content={mdx.body} />
    </Content>
  )
}

export default Page2

export const pageQuery = graphql`
  query pageQ($id: String!) {
    site {
      siteMetadata {
        title
        siteURL
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        featureImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
