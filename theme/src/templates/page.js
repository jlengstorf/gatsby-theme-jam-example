import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PageFlipper from "../components/PageFlipper"

export default class postLayout extends Component {
  render() {
    const { file } = this.props.data

    return (
      <>
        <PageFlipper
          pageNumberProp={file.name}
          tagline="Wes & Scott Is Syntax.fm"
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
      name
    }
  }
`
