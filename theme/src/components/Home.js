import React from 'react';
// import { Styled, css } from 'theme-ui';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PostGrid from './Grid/PostGrid';
import { isAuthenticated } from '../utils/Auth';
import Layout from './layout';
import SEO from './seo';
// import Footer from '../components/home-footer';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Home({
  siteTitle,
  siteDescription,
  siteGreeting,
  copyright,
  brand,
  hero,
  loginOption,
  isAuthApp,
  posts,
  slugs,
}) {
  const classes = useStyles();
  let pageDetails = null;
  if (hero) {
    pageDetails = (
      <Grid container>
        <Grid item xs={12} key={`heroContainer`}>
          <Img
            fluid={hero.childImageSharp.fluid}
            style={{
              height: '60vh',
              width: '100vw',
              textAlign: 'center',
            }}
          />
        </Grid>
        <Grid item xs={12} key={`textContainer`}>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            {siteDescription}
          </Typography>
          <Typography
            style={{ textAlign: 'justify', padding: 10 }}
            variant="body2"
            align="center"
            color="inherit"
            paragraph
          >
            {siteGreeting}
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    pageDetails = (
      <div>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom
          style={{ padding: 20 }}
        >
          {siteTitle}
        </Typography>
        <Typography variant="h5" align="center" color="inherit" paragraph>
          {siteDescription}
        </Typography>
        <Typography variant="h5" align="center" color="inherit" paragraph>
          {siteGreeting}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                style={{ backgroundColor: '#c31924' }}
                color="primary"
              >
                <a
                  href="https://www.spudnik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#eee',
                    textDecoration: 'none',
                  }}
                >
                  spudnik.com
                </a>
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  return (
    <Layout
      siteTitle={siteTitle}
      brand={brand}
      hero={hero}
      copyright={copyright}
      loginOption={loginOption}
      isAuthApp={isAuthApp}
      slugs={slugs}
    >
      {/*<Styled.h1
        css={css({
          mb: 1,
        })}
      >
        {siteTitle}
      </Styled.h1>
      */}
      <SEO title="Home" />
      {isAuthenticated() ? (
        <div
          style={{
            overflowX: 'hidden',
            overflowY: 'hidden',
            padding: 15,
          }}
        >
          <Grid
            // style={{
            //   display: 'flex',
            //   flexDirection: 'row',
            //   justifyContent: 'space-around',
            // }}
            container
            spacing={4}
            // direction="row"
            // justify="space-around"
            // alignItems="center"
          >
            {posts.map((post, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={`toolsContainer-${index}`}
              >
                {/* <div style={{ textAlign: 'center' }}> */}
                <PostGrid key={post.id} {...post} />
                {/* </div> */}
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div className={classes.heroContent}>{pageDetails}</div>
      )}
      {/* <Footer socialLinks={socialLinks} /> */}
    </Layout>
  );
}
