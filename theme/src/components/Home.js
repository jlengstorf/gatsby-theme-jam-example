import React from 'react';
import { Link } from 'gatsby';
import { Styled, css } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import Footer from '../components/home-footer';

const Home = ({ siteTitle, brand, loginOption, isAuthApp }) => (
  <Layout
    siteTitle={siteTitle}
    brand={brand}
    loginOption={loginOption}
    isAuthApp={isAuthApp}
  >
    <main>
      <SEO title="Home" />
      <div>
        <Styled.h2
          css={css({
            mb: 1,
          })}
        >
          <Styled.a
            as={Link}
            css={{
              textDecoration: `none`,
            }}
            to={'/'}
          >
            {siteTitle}
          </Styled.a>
        </Styled.h2>
      </div>
    </main>
    {/* <Footer socialLinks={socialLinks} /> */}
  </Layout>
);

export default Home;
