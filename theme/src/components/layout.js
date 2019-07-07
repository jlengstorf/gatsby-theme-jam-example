import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer,
  Flex,
  Box,
} from "theme-ui"

import { graphql, useStaticQuery } from "gatsby"

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
      <div sx={{ boxShadow: "0 0 20px 0px rgba(0, 0, 0, 1)" }}>test</div>
      <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <section>
        <Flex
          sx={{
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: ["100%", "50%"] }}>
            <p>make me 50%??</p>
          </Box>
          <Box sx={{ width: ["100%", "50%"] }}>
            <p>test</p>
          </Box>
        </Flex>
      </section>
      <Footer>
        <Container>
          <p>footer! </p>
        </Container>
      </Footer>
    </StyledLayout>
  )
}

export default Layout
