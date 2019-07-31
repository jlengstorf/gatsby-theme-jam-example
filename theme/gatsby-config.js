const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Scarlet",
    shortTitle: "Scarlet",
    author: "Shaun Wong | http://shaunwong.com.au",
    description:
      "Gatsby Theme Scarlet - The Custom theme currently features 3 slides, a hero section, projects section and about section.",
    siteUrl: "https://github.com/ARXChrono/gatsby-theme-scarlet",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/devshaun",
      },
      {
        name: "github",
        url: "https://github.com/arxchrono",
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
        lang: `en`,
        icon: `${__dirname}/src/images/icon.png`,
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
