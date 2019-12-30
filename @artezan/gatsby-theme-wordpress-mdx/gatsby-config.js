const path = require('path')

module.exports = {
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
