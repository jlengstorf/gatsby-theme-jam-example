/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Header } from './Header'

export const HeaderContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query headerQuery {
        site {
          siteMetadata {
            config {
              headerHeight
              sideBarWidth
            }
          }
        }
        allMdx(filter: { fields: { sourceName: { eq: "pages" } } }) {
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

      return <Header config={config} links={links}>{children}</Header>
    }}
  />
)
