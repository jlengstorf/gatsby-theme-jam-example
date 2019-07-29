import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import { Layout, Styled } from "theme-ui"
import { Header, SectionWrap, Hero, Section } from "../components"
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
  console.log("🐠", pageContext)
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Global styles={globalStyles} />
        <Header logo="test" logoTxt={title} nav="test" />
        <SectionWrap>
          <Hero id="hero" />
          <Section backgroundColor={theme.colors.white} id="work">
            <Styled.h2>{pageContext.work.heading}</Styled.h2>
            <Styled.p>{pageContext.work.content}</Styled.p>
          </Section>
          <Section light backgroundColor={theme.colors.primary} id="about">
            <Styled.h2>{pageContext.about.heading}</Styled.h2>
            <Styled.p>{pageContext.about.content}</Styled.p>
          </Section>
        </SectionWrap>
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
