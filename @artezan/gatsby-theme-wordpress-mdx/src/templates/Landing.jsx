/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, Flex, Box, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { HeaderComponent } from '../components/sections/Header/HeaderComponent'
import { FeatureComponent } from '../components/sections/Features/FeatureComponent'
import { Content } from '../components/Content'
import { AboutSection } from '../components/sections/About/AboutSection'
import { FooterSection } from '../components/sections/Footer/FooterSection'

const Landing = ({
  data: {
    allMdx: { nodes: sections },
    mdx: {
      frontmatter: { sections: sectionsOrder }
    },
    site: { siteMetadata }
  }
}) => {
  // Sort sections
  const [sortSecctions, setSortSecctions] = useState([])
  useEffect(() => {
    setSortSecctions(
      sections
        .reduce(
          (acc, current) => {
            if (
              current.frontmatter &&
              current.frontmatter.section.toLowerCase() === 'features'
            ) {
              acc[0].featureGroup.push(current)
            } else {
              acc.push(current)
            }
            return acc
          },
          [{ featureGroup: [], frontmatter: { section: 'features' } }]
        )
        .sort((a, b) => {
          return (
            sectionsOrder.indexOf(a.frontmatter.section) -
            sectionsOrder.indexOf(b.frontmatter.section)
          )
        })
    )
  }, [sections])
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height original 256px
        minHeight: '100vh'
      }}
    >
      <main>
        {sortSecctions.map((sectionComp, index) => (
          <section key={index}>
            {sectionComp.frontmatter.section.toLowerCase() === 'header' && (
              <HeaderComponent {...sectionComp}></HeaderComponent>
            )}

            {sectionComp.frontmatter.section.toLowerCase() === 'features' && (
              <Content
                config={siteMetadata.config}
                gradient={`gradient${index}`}
              >
                <FeatureComponent
                  features={[...sectionComp.featureGroup]}
                ></FeatureComponent>
              </Content>
            )}
            {console.log(sectionComp.frontmatter.section.toLowerCase() )}
            {sectionComp.frontmatter.section.toLowerCase() === 'about' && (
              <Content
                config={siteMetadata.config}
                gradient={`gradient${index}`}
              >
                <AboutSection {...sectionComp}></AboutSection>
              </Content>
            )}
            {sectionComp.frontmatter.section.toLowerCase() === 'footer' && (
              <Content
                config={siteMetadata.config}
                gradient={`gradient${index}`}
              >
                <FooterSection {...sectionComp}></FooterSection>
              </Content>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}

export const contentQuery = graphql`
  query landingQuery($id: String) {
    site {
      siteMetadata {
        title
        siteURL
        config {
          backgroundGradient
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        sections
      }
    }
    allMdx(filter: { fields: { sourceName: { eq: "sections" } } }) {
      nodes {
        id
        body
        excerpt
        fields {
          sourceName
        }
        frontmatter {
          section
          parallaxBodySpeed
          featureOrder
          backgroundImage {
            img {
              name
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            height
            backgroundAttachment
          }
          frontImage {
            img {
              name
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            height
          }
          featureImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          aboutImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
export default Landing
