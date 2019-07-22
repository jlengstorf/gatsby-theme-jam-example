import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import theme from "../../gatsby-plugin-theme-ui"
import { Layout, Main, Container } from "theme-ui"
import { Header, SectionWrap, Hero, Section } from "../../components"
import { globalStyles } from "./styles"

const BaseLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Global styles={globalStyles} />
        <Header logo="test" logoTxt={title} nav="test" />
        <SectionWrap>
          <Hero />
          <Section />
        </SectionWrap>
        <Main>
          <Container>{children}</Container>
        </Main>
      </Layout>
    </ThemeProvider>
  )
}

export default BaseLayout
