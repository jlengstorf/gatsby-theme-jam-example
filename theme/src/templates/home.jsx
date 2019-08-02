import React from "react"
import Helmet from "react-helmet"
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
          siteTitle
          siteTitleShort
          siteAuthor
          siteLogoText
          siteUrl
          siteLanguage
          siteDescription
          siteKeywords
        }
      }
      dataJson {
        hero {
          imageAlt
        }
        work {
          content
          heading
        }
        about {
          heading
          content
        }
      }
      allProjectsJson {
        nodes {
          name
          link
          alt
          badge
          image
        }
      }
    }
  `)
  const projectsItems = data.allProjectsJson.nodes
  const { about, work, hero } = data.dataJson
  const {
    siteTitle,
    siteLogoText,
    siteDescription,
    siteLanguage,
  } = data.site.siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <html lang={siteLanguage} />
          <title>{siteTitle}</title>
          <meta name="Description" content={siteDescription} />
        </Helmet>
        <Global styles={globalStyles} />
        <Header logoTxt={siteLogoText} />
        <SectionWrap>
          <Hero imageAlt={hero.imageAlt} id="hero" />
          <Section backgroundColor={theme.colors.white} id="work">
            <Styled.h2>{work.heading}</Styled.h2>
            <Styled.p>{work.content}</Styled.p>
            <ProjectList>
              {projectsItems ? (
                projectsItems.map(({ name, link, alt, badge, image }) => (
                  <ProjectItem
                    image={image}
                    alt={alt}
                    name={name}
                    badge={badge}
                    link={link}
                  />
                ))
              ) : (
                <Styled.p>"No projects yet!"</Styled.p>
              )}
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
