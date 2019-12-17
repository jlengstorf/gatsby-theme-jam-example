/** @jsx jsx */
import React from 'react'
import { css, Global } from '@emotion/core'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Parallax from 'react-rellax'

export const HeaderComponent = ({
  body,
  frontmatter: { backgroundImage, frontImage, parallaxBodySpeed }
}) => {
  const context = useThemeUI()
  let { img: imgFront } = frontImage || {}
  let backgroundImageFluid = backgroundImage.img.childImageSharp.fluid
  let frontImageFluid = imgFront ? imgFront.childImageSharp.fluid : null
  return (
    <>
      <BackgroundImage
        Tag="div"
        sx={{
          height: backgroundImage.height,
          width: '100%',
          backgroundAttachment: backgroundImage.backgroundAttachment,
          zIndex: '1'
        }}
        fluid={backgroundImageFluid}
        backgroundColor={context.theme.colors.primary}
      >
        <Parallax speed={parallaxBodySpeed || -2} >
          <MDXRenderer>{body}</MDXRenderer>
        </Parallax>
        {frontImageFluid && (
          <Img
            fluid={frontImageFluid}
            css={{
              position: 'absolute !important',
              bottom: '0px',
              width: '100%',
              height: frontImage.height
            }}
          />
        )}
      </BackgroundImage>
    </>
  )
}
