/** @jsx jsx */
import React from 'react'
import { jsx,  useThemeUI } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const HeaderComponent = ({ body, frontmatter }) => {
  const { headerImages } = frontmatter
  const context = useThemeUI()
  const convertArrayToObject = (array, key) =>
    array.reduce(
      (obj, item) => ((obj[[item[key]]] = item.childImageSharp.fluid), obj),
      {}
    )
  let headerImagesFluid = {}
  if (headerImages) {
    console.log(convertArrayToObject(headerImages, 'name'))
    headerImagesFluid = convertArrayToObject(headerImages, 'name')
  }
  return (
    <MDXRenderer
      scope={{
        ...frontmatter,
        context,
        headerImagesFluid
      }}
    >
      {body}
    </MDXRenderer>
  )
}
