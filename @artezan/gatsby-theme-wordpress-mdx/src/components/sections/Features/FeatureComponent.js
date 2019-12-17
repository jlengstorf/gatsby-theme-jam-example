/** @jsx jsx */
import React from 'react'
import { jsx, Styled, useThemeUI, Flex, Box } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

export const FeatureComponent = ({ features }) => {
  const withFeature =
    features.lenght === 1 ? '100%' : features.lenght === 2 ? '50%' : '33%'
  console.log(features)
  return (
    <>
      <Flex
        sx={{
          flexWrap: 'wrap',
          pr: [0, 0, 4]
        }}
      >
        {features.map(({ body, frontmatter: { featureImage } }, index) => {
          let featureImageFluid
          if (featureImage) {
            featureImageFluid = featureImage.childImageSharp.fluid
          }
          return (
            <Box
              key={index}
              p={2}
              sx={{
                width: ['100%', '100%', withFeature]
              }}
            >
              <Styled.div
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: '5%',
                  marginTop: '35%'
                }}
              >
                <Img
                  fluid={featureImageFluid}
                  sx={{
                    width: '80%',
                    height: '200px',
                    borderRadius: '5%',
                    boxShadow: theme => theme.shadows[0],
                    
                  }}
                />
              </Styled.div>

              <Styled.div sx={{
                marginTop: '10%'
              }} >
                <MDXRenderer>{body}</MDXRenderer>
              </Styled.div>
            </Box>
          )
        })}
      </Flex>
    </>
  )
}
