import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PageFlipper from "../components/PageFlipper"
import SEO from "../components/seo"

const PageTemplate = ({ data: { file }, pageContext }) => {
  return (
    <>
      <SEO title={pageContext.title} />

      <PageFlipper
        nextPage={pageContext.nextPage}
        previousPage={pageContext.previousPage}
      />

      <Img fluid={file.childImageSharp.fluid} />
    </>
  )
}

export const query = graphql`
  query PageQuery($slug: String!) {
    file(name: { eq: $slug }) {
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
