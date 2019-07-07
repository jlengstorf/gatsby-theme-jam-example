import React, { Component } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default class postLayout extends Component {
  render() {
    const { file } = this.props.data
    const currentPage = file.name
    const prevPage = currentPage - 1 === 0 ? "/" : (currentPage - 1).toString()

    const prevPageLink = (currentPage - 1).toString()

    var conCurrentPage = Number(currentPage)
    const nextPage = (conCurrentPage + 1).toString()
    const nextPageLink = (conCurrentPage + 1).toString()

    return (
      <Layout>
        <ul
          style={{
            background: `pink`,
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,

            margin: 0,
            marginBottom: 0,
          }}
        >
          <li>
            {prevPage && (
              <Link to={`/${prevPage}`} rel="prev">
                ← {prevPageLink}
              </Link>
            )}
          </li>
          <li>
            {nextPage && (
              <Link to={`/${nextPage}`} rel="next">
                {nextPageLink} →
              </Link>
            )}
          </li>
        </ul>

        <Img fluid={file.childImageSharp.fluid} />
      </Layout>
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
      relativePath
      absolutePath
    }
    front: file(name: { eq: $slug }) {
      id
    }
  }
`
