/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Flex, Box, Footer } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

export const FooterSection = ({ body }) => {
  console.log('here')
  return (
    <Footer>
      <Styled.div
        sx={{
          width: '100%'
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </Styled.div>
      
    </Footer>
  )
}
