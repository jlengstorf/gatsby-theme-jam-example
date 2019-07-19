import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main, Container } from 'theme-ui';
import './layout.css';

import Header from '../components/Header/Header';

const Layout = ({ children, ...props }) => {
  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header {...props} />
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  );
};

export default Layout;
