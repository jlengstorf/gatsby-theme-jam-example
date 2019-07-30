import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const PageTemplate = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query InstaQuery {
      allInstaNode {
        edges {
          node {
            caption
            likes
            original
            preview
            type
            username
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Styled.h1>{pageContext.heading}</Styled.h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export default PageTemplate
