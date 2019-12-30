/** @jsx jsx */
import React from 'react'
import { jsx, Styled, useThemeUI, Flex, Box } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

export const AboutSection = ({ body, frontmatter: { aboutImage } }) => {
  let aboutImageFluid = aboutImage.childImageSharp.fluid
  return (
    <>
      <Flex
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          p: [1, 1, 43],
          // pb:  30
        }}
      >
        <Box
          sx={{
            display:  ['flex', 'flex', '', ''] ,
            justifyContent: ['center', 'center'],
            width: ['100%', '100%', '50%', '50%']
          }}
        >
          <Img
            fluid={aboutImageFluid}
            sx={{
              width: '80%',
              borderRadius: '5%',
              boxShadow: theme => theme.shadows[0]
            }}
          />
        </Box>
        <Box
          sx={{
            width: ['100%', '100%', '50%', '50%']
          }}
        >
          <Styled.div
            sx={{
              marginTop: '10%'
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </Styled.div>
        </Box>
      </Flex>
    </>
  )
}
