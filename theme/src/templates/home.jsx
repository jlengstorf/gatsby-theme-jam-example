import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import { Layout, Styled } from "theme-ui"
import { Header, Hero, Section, ProjectItem, Footer } from "../components"
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
      dataJson {
        work {
          content
          heading
        }
        about {
          heading
          content
        }
      }
    }
  `)
  console.log(data)
  const { about, work } = data.dataJson
  const { title } = data.site.siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Global styles={globalStyles} />
        <Header logo="test" logoTxt={title} nav="test" />
        <SectionWrap>
          <Hero id="hero" />
          <Section backgroundColor={theme.colors.white} id="work">
            <Styled.h2>{work.heading}</Styled.h2>
            <Styled.p>{work.content}</Styled.p>
            <ProjectList>
              <ProjectItem
                image={"https://source.unsplash.com/random/300x301"}
                alt={"card"}
                name={"Project One"}
                badge={"Web"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x302"}
                alt={"card"}
                name={"Project One"}
                badge={"Web"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x303"}
                alt={"card"}
                name={"Project One"}
                badge={"Web"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x304"}
                alt={"card"}
                name={"Project One"}
                badge={"Web"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x305"}
                alt={"card"}
                name={"Project One"}
                badge={"Web"}
              />
              <ProjectItem
                image={"https://source.unsplash.com/random/300x306"}
                alt={"card"}
                name={"Project One"}
                badge={"Web"}
              />
            </ProjectList>
          </Section>
          <Section
            backgroundColor={theme.colors.primary}
            id="about"
            light
            enableWave={true}
            waveBottom={false}
          >
            <Styled.h2>{about.heading}</Styled.h2>
            <Styled.p>{about.content}</Styled.p>
          </Section>
        </SectionWrap>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
