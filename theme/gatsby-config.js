const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Scarlet",
    author: "Shaun Wong | http://shaunwong.com.au",
    description: "My site description...",
    siteUrl: "https://www.gatsbyjs.org/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/gatsbyjs",
      },
      {
        name: "github",
        url: "https://github.com/gatsbyjs",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Scarlet`,
        short_name: `Scarlet`,
        start_url: `/`,
        background_color: `#53388a`,
        theme_color: `#53388a`,
        display: `standalone`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
  ],
}
