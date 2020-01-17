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

export default function PageTemplate(props) {
  return (
    <div>
      {console.log('Page 2', props)}
      <p>Page2 vamos</p>
    </div>
  )
}
