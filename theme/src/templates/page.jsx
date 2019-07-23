import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import { Layout } from "theme-ui"
import { Header, SectionWrap, Hero, Section } from "../components"
import { globalStyles } from "./styles"

const PageTemplate = ({ pageContext }) => {
  console.log(pageContext)
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
          <Section backgroundColor={theme.colors.white} />
          <Section backgroundColor={theme.colors.primary} />
        </SectionWrap>
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
