import React from 'react';
import { Styled, css } from 'theme-ui';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ToolsGrid from './Grid/ToolsGrid';
import { isAuthenticated } from '../utils/Auth';
import Layout from './layout';
import SEO from './seo';
// import Footer from '../components/home-footer';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Home({
  siteTitle,
  brand,
  hero,
  loginOption,
  isAuthApp,
  posts,
}) {
  console.log(brand);
  // console.log(hero);
  const classes = useStyles();
  let pageDetails = null;
  if (hero) {
    pageDetails = (
      <div>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Album layout
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  } else {
    // pageDetails = (
    //   <Grid container>
    //     <Grid item xs={12} key={`toolsContainer`}>
    //       <Img
    //         fluid={hero.childImageSharp.fluid}
    //         style={{ height: 600, width: '100vw', textAlign: 'center' }}
    //       />
    //     </Grid>
    //   </Grid>
    // );
  }
  return (
    <Layout
      siteTitle={siteTitle}
      brand={brand}
      hero={hero}
      loginOption={loginOption}
      isAuthApp={isAuthApp}
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
        <div className={classes.heroContent}>{pageDetails}</div>
      )}
      {/* <Footer socialLinks={socialLinks} /> */}
    </Layout>
  );
}
