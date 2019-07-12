import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main, Container } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';

import Header from '../components/Header/Header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  );
};

export default Layout;
