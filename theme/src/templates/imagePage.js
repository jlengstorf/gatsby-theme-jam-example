import React from "react"
import { graphql } from "gatsby"
import ImagePage from "../components/imagePage"

const ImagePageTemplate = ({ data: { file }, pageContext }) => {
  return <ImagePage {...pageContext} imageFile={file} />
}

export const query = graphql`
  query ImagePageQuery($imageFileName: String!) {
    file(name: { eq: $imageFileName }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`

export default ImagePageTemplate
