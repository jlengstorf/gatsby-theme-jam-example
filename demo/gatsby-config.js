/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Introducing GatStats',
    description:
      'GatStats is a dashboard for your tech blog, or a dashblog if you prefer? ',
    keywords: ['GatsbyJs', 'React', 'theme-ui'],
    siteURL: 'https://gatsby-theme-gatstats.netlify.com',
    siteImage: 'gatstats-open-graph-image.jpg',
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      twitter: 'pauliescanlon',
      github: 'pauliescanlon'
    }
  },
  plugins: ["gatsby-theme-wordpress-mdx"],
}
