/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import Img from 'gatsby-image'
import { Tag } from '../Tag'
import { formatDate, colorRange } from '../../helpers'

export const Card = ({
  excerpt,
  timeToRead,
  wordCount,
  date,
  tags,
  title,
  featuredImage
}) => {
  const context = useThemeUI()
  const length = tags ? tags.length : []
  const colorScale = colorRange(
    context.theme.colors.primary,
    context.theme.colors.secondary,
    length
  )

  return (
    <>
      <article
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          color: 'text',
          fontFamily: 'body',
          backgroundColor: 'surface',
          overflow: 'hidden',
          borderRadius: 1,
          transition: '.2s linear all',
          ':hover': {
            filter: 'brightness(105%)'
          }
        }}
      >
        {featuredImage &&
          featuredImage.childImageSharp &&
          featuredImage.childImageSharp.fluid && (
            <Img alt={title} fluid={featuredImage.childImageSharp.fluid} />
          )}
        {featuredImage &&
          featuredImage.localFile &&
          featuredImage.localFile.childImageSharp &&
          featuredImage.localFile.childImageSharp.fluid && (
            <>
              <Img
                alt={title}
                fluid={featuredImage.localFile.childImageSharp.fluid}
              />
            </>
          )}
        <Styled.div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            p: [2, 3]
          }}
        >
          <Styled.h4
            sx={{
              mt: [2, 4],
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {title}
          </Styled.h4>
          <Styled.div
            sx={{
              fontSize: 0,
              color: 'secondary',
              mb: 3
            }}
          >
            {formatDate(date)}
          </Styled.div>
          <Styled.p
            sx={{
              flex: '1 1 auto'
            }}
          >
            {excerpt}
          </Styled.p>
          <ul
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              p: 0,
              mt: 0,
              mb: 4,
              '> :nth-of-type(n)': {
                mr: 2
              }
            }}
          >
            {tags &&
              tags.map((tag, index) => {
                if (typeof tag === 'string') {
                  return (
                    <Tag key={index} color={colorScale[index]}>
                      {tag}
                    </Tag>
                  )
                } else {
                  return (
                    <Tag key={index} color={colorScale[index]}>
                      {tag.name}
                    </Tag>
                  )
                }
              })}
          </ul>
          {timeToRead && (
            <Styled.div
              sx={{
                color: 'textMuted',
                fontSize: 0,
                fontFamily: 'body',
                textAlign: 'right'
              }}
            >{`${timeToRead} min read / ${wordCount} words`}</Styled.div>
          )}
        </Styled.div>
      </article>
    </>
  )
}
