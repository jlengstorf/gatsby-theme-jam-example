import React from "react"
import { css, Global } from "@emotion/core"
// import { ThemeProvider } from "theme-ui"
// import theme from "../../gatsby-plugin-theme-ui"

import {
  Layout as StyledLayout,
  // Styled,
  // Header,
  Main,
  Container,
  // Footer,
} from "theme-ui"

// import { graphql, useStaticQuery } from "gatsby"

const HomeLayout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    // <ThemeProvider theme={theme}>
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
            background: blue;
          }
        `}
      />
      {/* <Styled.h1>hello</Styled.h1>
      <Styled.h2>hello</Styled.h2> */}
      {/* <p>hello paragraph</p> */}
      {/* <a href="#">test</a> */}
      {/* <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header> */}
      <Main>
        <Container>{children}</Container>
      </Main>
      {/* <Footer>
        <Container>
          <p>footer! </p>
        </Container>
      </Footer> */}
    </StyledLayout>
    // </ThemeProvider>
  )
}

export default HomeLayout
