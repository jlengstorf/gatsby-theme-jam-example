import { graphql, useStaticQuery } from 'gatsby';

export default function getBrandData() {
  const data = useStaticQuery(graphql`
    query brandData {
      brandLogo: file(
        relativePath: { regex: "/(jpg)|(jpeg)|(png)|(svg)/" }
        relativeDirectory: { eq: "logo" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
        extension
        publicURL
      }
    }
  `);
  return data;
}
