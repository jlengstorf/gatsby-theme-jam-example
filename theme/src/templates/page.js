import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"

const PageTemplate = ({ data: { file }, pageContext }) => {
  return <Page {...pageContext} imageFile={file} />
}

export const query = graphql`
  query PageQuery($imageFileName: String!) {
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

export default PageTemplate
