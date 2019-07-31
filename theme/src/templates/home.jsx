import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import { Layout, Styled } from "theme-ui"
import { Header, Hero, Section, ProjectItem } from "../components"
import { SectionWrap, ProjectList } from "../components/styles"
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
          <Hero id="hero" />
          <Section backgroundColor={theme.colors.white} id="work">
            <Styled.h2>{pageContext.work.heading}</Styled.h2>
            <Styled.p>{pageContext.work.content}</Styled.p>
            <ProjectList>
              <ProjectItem
                image={"https://source.unsplash.com/random/300x400"}
                alt={"card"}
                name={"Project One"}
                badge={"Web"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x401"}
                alt={"card"}
                name={"Project Two"}
                badge={"Game"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x402"}
                alt={"card"}
                name={"Project Three"}
                badge={"App"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x403"}
                alt={"card"}
                name={"Project Four"}
                badge={"Video"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x404"}
                alt={"card"}
                name={"Project Five"}
                badge={"Music"}
              />
            </ProjectList>
          </Section>
          <Section backgroundColor={theme.colors.primary} id="about" light>
            <Styled.h2>{pageContext.about.heading}</Styled.h2>
            <Styled.p>{pageContext.about.content}</Styled.p>
          </Section>
        </SectionWrap>
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
