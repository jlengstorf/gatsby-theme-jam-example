/** @jsx jsx */
import React from 'react'
import { css, Global } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Location } from '@reach/router'
import { SideBarProvider } from '../components/SideBarContext'
import { Seo } from '../components/Seo'
import { HeaderContainer } from '../components/Header/HeaderContainer'
import { SideBarContainer } from '../components/SideBar'
import { LightPanel } from '../components/LightPanel'
import { ContentContainer } from '../components/Content'
import { formatPathname } from '../helpers'
import { MDXProvider } from '@mdx-js/react'
import { Div } from '../Shortcodes'

const shortcodes = { Div }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          siteURL
          siteImage
        }
      }
    }
  `)
  const {
    title,
    description,
    keywords,
    siteURL,
    siteImage
  } = data.site.siteMetadata
  return (
    <>
      <Global
        styles={css`
          body {
            position: relative;
            margin: 0;
            min-height: 100%;
            min-width: 320px;
          }
        `}
      />

      <Styled.div
        sx={{
          margin: '0 auto',
          backgroundColor: 'background'
        }}
      >
        <SideBarProvider>
          <Location>
            {({ location }) => {
              const { pathname } = location

              return (
                <>
                  <Seo
                    title={title}
                    titleTemplate={formatPathname(pathname)}
                    description={description}
                    keywords={keywords}
                    siteURL={siteURL}
                    image={siteImage}
                  />
                  <HeaderContainer />
                  <SideBarContainer />
                  <LightPanel />
                  <MDXProvider components={shortcodes}>{children}</MDXProvider>

                  {/* <Transition pathname={pathname}>{children}</Transition> */}
                </>
              )
            }}
          </Location>
        </SideBarProvider>
      </Styled.div>
    </>
  )
}

export default Layout
