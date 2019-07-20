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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify",
  ],
}
