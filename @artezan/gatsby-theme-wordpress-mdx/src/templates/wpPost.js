/** @jsx jsx */
import { jsx, Styled, useThemeUI, css } from 'theme-ui'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Tag } from '../components/Tag'
import { Seo } from '../components/Seo'

import { formatDate, colorRange } from '../helpers'
import { Content } from '../components/Content'

export const WpPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  featuredImage,
  excerpt,
  site
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
          featuredImage ? featuredImage.localFile.childImageSharp.fluid : ''
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
            fluid={featuredImage.localFile.childImageSharp.fluid}
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
        {formatDate(date)}
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
          {tags.map(({ name }, index) => (
            <Tag key={index} color={colorScale[index]}>
              {name}
            </Tag>
          ))}
        </ul>
      )}

      <Styled.div
        sx={css({
          img: {
            width: '100%',
            height: 'auto'
          }
        })}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

const WpPost = ({ data }) => {
  const { wordpressPost: post, site } = data
  return (
    <Content config={site.config}>
      <WpPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        // author={post.author}
        featuredImage={post.featured_media}
        excerpt={post.excerpt}
        site={site}
      />
    </Content>
  )
}

export default WpPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
        siteURL
        config {
          multipleBackground
        }
      }
    }
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      # author {
      #   name
      #   slug
      # }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
