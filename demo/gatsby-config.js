/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'WP MDX',
    description: 'It is a WP with MDX blog ',
    keywords: ['GatsbyJs', 'React', 'theme-ui'],
    siteURL: '',
    siteImage: '',
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      showToggle: true,
      multipleBackground: true,
      twitter: 'artezanc',
      github: 'artezanc'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-theme-wordpress-mdx',
      options: {
        // The base url to your WP site. www.theartezan.xyz wpdemo.gatsbycentral.com us-central1-kigali-162302.cloudfunctions.net/function-2
        baseUrl: 'www.theartezan.xyz'
      }
    }
  ]
}
