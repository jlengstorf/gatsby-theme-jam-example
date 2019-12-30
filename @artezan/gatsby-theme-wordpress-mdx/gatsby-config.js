const path = require('path')
// https://github.com/staticfuse/staticfuse/blob/master/packages/gatsby-theme-publisher/gatsby-config.js

module.exports = options => {
  console.log('HERE options conf', options)

  const config = {
    siteMetadata: {
      title: '',
      description: '',
      keywords: [],
      siteURL: '',
      siteImage: '',
      config: {
        headerHeight: 64,
        sideBarWidth: 240,
        showToggle: true,
        multipleBackground: true,
        twitter: '',
        github: ''
      }
    },
    plugins: [
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-mdx',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-plugin-layout',
        options: {
          component: require.resolve('./src/layouts/layout.jsx')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve('src/pages')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'index',
          path: path.resolve('src/index.mdx')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'sections',
          path: path.resolve('src/sections')
        }
      }
    ]
  }
  const { baseUrl } = options
  if (baseUrl) {
    config.plugins.push({
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site. www.theartezan.xyz wpdemo.gatsbycentral.com us-central1-kigali-162302.cloudfunctions.net/function-2
        baseUrl: 'us-central1-kigali-162302.cloudfunctions.net/function-2',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {
          jwt_user: process.env.WP_USER,
          jwt_pass: process.env.WP_PASSWORD,
          jwt_base_path: '/jwt-auth/v1/token'
        },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false
        // Este es el bueno
        /*  plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `www.theartezan.xyz`,
              protocol: `https`,
              postTypes: ['post', 'page']
            }
          }
        ] */
      }
    })
  }
  return config
}
