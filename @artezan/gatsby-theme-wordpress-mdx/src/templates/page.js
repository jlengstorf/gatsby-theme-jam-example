/** @jsx jsx */
import * as React from 'react'

import { jsx, Styled, useThemeUI } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Seo } from '../components/Seo'
import { ContentContainer } from '../components/Content'

const Page = ({ data: { mdx, site } }) => {
  const context = useThemeUI()

  const {
    frontmatter: { featuredImage }
  } = mdx

  return (
    <ContentContainer>
      <article
        sx={{
          mb: 7
        }}
      >
        <Seo
          title={`${site.siteMetadata.title} | ${title}`}
          description={excerpt}
          keywords={tags || []}
          siteURL={site.siteMetadata.siteURL}
          image={
            featuredImage && featuredImage.localFile
              ? featuredImage.localFile.childImageSharp.fluid.src.replace(
                  '/',
                  ''
                )
              : ''
          }
        />
        <Styled.div
          sx={{
            p: 4
          }}
        >
          Hi
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Styled.div>
      </article>
    </ContentContainer>
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
export default Page
