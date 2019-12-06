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
      twitter: '',
      github: ''
    }
  },
  plugins: ['gatsby-plugin-theme-ui', 'gatsby-plugin-mdx',
  {
    resolve: 'gatsby-plugin-layout',
    options: {
      component: require.resolve('./src/layouts/layout.jsx')
    }
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'page',
      path: path.resolve(__dirname, 'src/pages')
    }
  },
]
}
