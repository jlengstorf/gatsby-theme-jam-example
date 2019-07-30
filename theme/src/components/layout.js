import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

import InstagramImage from "./InstagramImage"

import InstagramFeedMock from "../mocks/InstagramFeed"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header>
      <Main>
        <Container>
          {children}
          {InstagramFeedMock.map(({ node }) => {
            console.log("original: ", node.original)
            return <InstagramImage alt={node.caption} src={node.original} />
          })}
        </Container>
      </Main>
    </StyledLayout>
  )
}

export default Layout
