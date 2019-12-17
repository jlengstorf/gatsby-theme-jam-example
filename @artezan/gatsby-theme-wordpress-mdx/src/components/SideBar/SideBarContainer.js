/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

import { SideBar } from './SideBar'

export const SideBarContainer = () => (
  <StaticQuery
    query={graphql`
      query pagesQuery {
        site {
          siteMetadata {
            config {
              headerHeight
              sideBarWidth
            }
          }
        }
        allMdx(
          filter: { fileAbsolutePath: { regex: "//src/pages//" } }
          sort: { order: ASC, fields: [fields___slug] }
        ) {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              frontmatter {
                title
                icon
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { config } = data.site.siteMetadata
      const links = data.allMdx.edges.map(item => {
        return {
          slug: item.node.fields.slug,
          icon: item.node.frontmatter.icon,
          title: item.node.frontmatter.title
        }
      })

      return (
        <Styled.div
          sx={{
            position: 'fixed',
            top: 0,
            height: '100%',
            display: 'flex',
            flexBasis: 'auto',
            flexDirection: 'column',
            flexShrink: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            minHeight: 0,
            minWidth: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            zIndex: 4
          }}
        >
          <SideBar config={config} links={links} />
        </Styled.div>
      )
    }}
  />
)
