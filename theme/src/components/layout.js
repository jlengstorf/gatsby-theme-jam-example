import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main } from 'theme-ui';
import './layout.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer';

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
      <Main style={{ marginBottom: '30px' }}>{children}</Main>
      <Footer {...props} />
    </StyledLayout>
  );
};

export default Layout;
