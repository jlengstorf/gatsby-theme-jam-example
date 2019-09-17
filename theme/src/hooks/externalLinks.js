import { graphql, useStaticQuery } from 'gatsby';

export default function getExternalLinks() {
  const data = useStaticQuery(graphql`
    query ExternalInfo {
      site {
        siteMetadata {
          externalLinks {
            label
            link
          }
        }
      }
    }
  `);
  return data.site.siteMetadata.externalLinks;
}
