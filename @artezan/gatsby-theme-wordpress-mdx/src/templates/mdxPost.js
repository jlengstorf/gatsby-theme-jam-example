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

export const MdxPostTemplate = ({
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
      <Seo
        title={`${site.siteMetadata.title} | ${title}`}
        description={excerpt}
        keywords={tags || []}
        siteURL={site.siteMetadata.siteURL}
        image={
          featuredImage
            ? featuredImage.childImageSharp.fluid.src.replace('/', '')
            : ''
        }
      />
      {featuredImage && (
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
            mb: 4
          }}
        >
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt={title}
            style={{
              display: 'block',
              width: '100%',
              height: '100%'
            }}
          />
        </Styled.div>
      )}
      <Styled.div
        sx={{
          fontSize: 2,
          fontFamily: 'body',
          color: 'secondary',
          mb: 3
        }}
      >
        <Styled.h1>{title}</Styled.h1>
        {formatDate(date)} {author && <> | By {author} </>}
      </Styled.div>
      {tags && (
        <ul
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 0,
            mt: 4,
            mb: 3,
            '> :nth-of-type(n)': {
              mr: 2
            }
          }}
        >
          {tags.map((tag, index) => (
            <Tag key={index} color={colorScale[index]}>
              {tag}
            </Tag>
          ))}
        </ul>
      )}

      <Styled.div
        sx={{
          mb: 4,
          color: 'textMuted',
          fontSize: 1,
          fontFamily: 'body',
          textAlign: 'right'
        }}
      >
        {`${timeToRead} min read / ${wordCount} words`}
      </Styled.div>

      <MDXRenderer>{content}</MDXRenderer>
    </article>
  )
}

const MdxPost = ({ data }) => {
  const {
    mdxWpPosts: { mdxData: post },
    site
  } = data
  return (
    <Content config={site.config}>
      <MdxPostTemplate
        content={post.body}
        excerpt={post.excerpt}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={data.mdxWpPosts.date}
        author={post.author}
        featuredImage={post.frontmatter.featureImage}
        site={site}
        timeToRead={post.timeToRead}
        wordCount={post.wordCount.words}
      />
    </Content>
  )
}

export default MdxPost

export const pageQuery = graphql`
  query MdxBlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
        siteURL
      }
    }
    mdxWpPosts(id: { eq: $id }) {
      date(formatString: "MMMM DD, YYYY")
      mdxData {
        timeToRead
        wordCount {
          words
        }
        body
        excerpt
        author
        frontmatter {
          tags
          title
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
  }
`
