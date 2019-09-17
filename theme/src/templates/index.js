import React from 'react';
import { graphql } from 'gatsby';
import Home from '../components/Home';

export default function PageTemplate({
  pageContext,
  data: {
    allMdx: { nodes: posts },
  },
}) {
  return (
    <Home
      siteTitle={pageContext.siteTitle}
      siteDescription={pageContext.siteDescription}
      siteGreeting={pageContext.siteGreeting}
      copyright={pageContext.copyrightMessage}
      socialLinks={pageContext.socialLinks}
      brand={pageContext.brand}
      hero={pageContext.hero}
      loginOption={pageContext.loginOption}
      isAuthApp={pageContext.isAuthApp}
      posts={posts}
      slugs={pageContext.slugs}
    />
  );
}

export const pageQuery = graphql`
  query IndexPosts {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 10
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          banner {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt
      }
    }
  }
`;
