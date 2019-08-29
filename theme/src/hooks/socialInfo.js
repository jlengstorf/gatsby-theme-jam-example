import { graphql, useStaticQuery } from 'gatsby';

export default function getSocialInfo() {
  const data = useStaticQuery(graphql`
    query SocialInfo {
      site {
        siteMetadata {
          social {
            email
            twitter
            facebook
            github
          }
        }
      }
    }
  `);
  return data.site.siteMetadata.social;
}
