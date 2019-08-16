import React from 'react';
import { Styled, css } from 'theme-ui';
import Grid from '@material-ui/core/Grid';
import ToolsGrid from './Grid/ToolsGrid';
import { isAuthenticated } from '../utils/Auth';
import Layout from './layout';
import SEO from './seo';
// import Footer from '../components/home-footer';

export default function Home({
  siteTitle,
  brand,
  loginOption,
  isAuthApp,
  posts,
}) {
  return (
    <Layout
      siteTitle={siteTitle}
      brand={brand}
      loginOption={loginOption}
      isAuthApp={isAuthApp}
    >
      <Styled.h1
        css={css({
          mb: 1,
        })}
      >
        {siteTitle}
      </Styled.h1>
      <SEO title="Home" />
      {isAuthenticated() ? (
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '25px',
          }}
        >
          <Grid container spacing={4}>
            {posts.map(post => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={`toolsContainer-1`}>
                <ToolsGrid key={post.id} {...post} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div />
      )}
      {/* <Footer socialLinks={socialLinks} /> */}
    </Layout>
  );
}
