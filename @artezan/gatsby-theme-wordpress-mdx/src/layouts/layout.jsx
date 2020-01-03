/** @jsx jsx */
import React from 'react'
import { Global } from '@emotion/core'
import { jsx, Styled, useThemeUI, css } from 'theme-ui'
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
import { Div, SocialLink, BgImage, ImgGatsby } from '../Shortcodes'
import Parallax from 'react-rellax'
// import Parallax from 'react-springy-parallax'

const shortcodes = { Div, SocialLink, BgImage, Parallax, ImgGatsby }

const Layout = ({ children }) => {
  const context = useThemeUI()
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
    <React.Fragment>
      <Global
        styles={css({
          body: {
            margin: 0,
            padding: 0,
            position: 'relative',
            // minHeight: '100%',
            minWidth: '320px',
            bg: 'background'
          }
        })}
      />

      <Styled.div
        sx={{
          margin: '0',
          backgroundColor: theme => theme.colors.background
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
    </React.Fragment>
  )
}

export default Layout
