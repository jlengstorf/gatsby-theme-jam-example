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
import { Posts } from '../components/AllPosts/Posts'

export default function PageTemplate({ data }) {
  const { allMdxWpPosts } = data

  return (
    <div>
      <Posts allMdxWpPosts={allMdxWpPosts} />
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allMdxWpPosts(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
`
