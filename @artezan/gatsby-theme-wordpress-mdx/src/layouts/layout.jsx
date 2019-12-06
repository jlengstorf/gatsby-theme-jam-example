/** @jsx jsx */
import React from 'react'
import { css, Global } from '@emotion/core'
import {
  jsx,
  Styled
} from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

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
  console.log(title)
  return (
    <React.Fragment>
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
          backgroundColor: 'background',
          maxWidth: theme => theme.breakpoints[3]
        }}
      >
       {children}
        {/* <SideBarProvider>
                <Location>
                  {({ location }) => {
                    const { pathname }: IPathname = location

                    return (
                      <React.Fragment>
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
                        <ContentContainer>
                          <Transition pathname={pathname}>
                            {children}
                          </Transition>
                        </ContentContainer>
                      </React.Fragment>
                    )
                  }}
                </Location>
              </SideBarProvider> */}
      </Styled.div>
    </React.Fragment>
  )
}

export default Layout
