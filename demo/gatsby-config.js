/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'WP MDX',
    description:
      'It is a WP with MDX blog ',
    keywords: ['GatsbyJs', 'React', 'theme-ui'],
    siteURL: '',
    siteImage: '',
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      twitter: 'artezanc',
      github: 'artezanc'
    }
  },
  plugins: ["gatsby-theme-wordpress-mdx"],
}
