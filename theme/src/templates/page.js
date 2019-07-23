import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PageFlipper from "../components/PageFlipper"
import SEO from "../components/seo"

export default class postLayout extends Component {
  render() {
    const { file, sitePage } = this.props.data

    return (
      <>
        <SEO title={file.name} />

        <PageFlipper
          nextPage={sitePage.context.nextPage}
          previousPage={sitePage.context.previousPage}
          tagline="Wes (& Scott) Are Cool"
        />
        <Img fluid={file.childImageSharp.fluid} />
      </>
    )
  }
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
    sitePage(context: {slug: {eq: $slug}}) {
      context {
        nextPage
        previousPage
      }
    }
  }
`
