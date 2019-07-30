import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import { Layout, Styled } from "theme-ui"
import { Header, Section } from "../components"
import { SectionWrap } from "../components/styles"
import { globalStyles } from "./styles"

const PageTemplate = ({ pageContext }) => {
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
          <Section backgroundColor={theme.colors.white}>
            <Styled.p>{pageContext.content}</Styled.p>
          </Section>
        </SectionWrap>
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
