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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site. www.theartezan.xyz wpdemo.gatsbycentral.com us-central1-kigali-162302.cloudfunctions.net/function-2
        baseUrl: 'www.theartezan.xyz',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        /* auth: {
          jwt_user: process.env.WP_USER,
          jwt_pass: process.env.WP_PASSWORD,
          jwt_base_path: '/jwt-auth/v1/token'
        }, */
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        // includedRoutes: [
        //   '**/categories',
        //   '**/posts',
        //   '**/pages',
        //   '**/media',
        //   '**/tags',
        //   '**/taxonomies',
        //   '**/users'
        // ]
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `www.theartezan.xyz`,
              protocol: `https`,
              postTypes: ['post', 'page']
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-theme-wordpress-mdx',
      options: {
        // OPTIONAL: Take pages and posts form Wordpress
        sourceWordpress: true
      }
    }
  ]
}
