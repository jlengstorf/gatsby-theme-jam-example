import { graphql, useStaticQuery } from 'gatsby';

export default function getSiteData() {
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
          description
          greeting
          copyright
          author
          loginDesc
          isAuthApp
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
