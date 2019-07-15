import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Home from '../components/Home';

export const pageQuery = graphql`
  query {
    brandLogo: file(
      relativePath: { regex: "/(jpg)|(jpeg)|(png)/" }
      relativeDirectory: { eq: "logo" }
    ) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const PageTemplate = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Home
      siteTitle={pageContext.siteTitle}
      socialLinks={pageContext.socialLinks}
      brand={pageContext.brand}
      loginOption={pageContext.loginOption}
    />
  );
};

export default PageTemplate;
