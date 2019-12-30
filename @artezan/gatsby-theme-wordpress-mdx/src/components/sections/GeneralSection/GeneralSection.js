/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const GeneralSection = ({ body, frontmatter }) => {
  const { images } = frontmatter
  const context = useThemeUI()
  const convertArrayToObject = (array, key) =>
    array.reduce(
      (obj, item) => ((obj[[item[key]]] = item.childImageSharp.fluid), obj),
      {}
    )
  let imagesFluid = {}
  if (images) {
    imagesFluid = convertArrayToObject(images, 'name')
  }
  return (
    <MDXRenderer
      scope={{
        ...frontmatter,
        context,
        imagesFluid
      }}
    >
      {body}
    </MDXRenderer>
  )
}
