const path = require(`path`)

module.exports = {
  siteMetadata: {
    // Defaults
    pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
    siteTitle: "Scarlet | Gatsby Theme Demo", // Navigation and Site Title
    siteTitleShort: "Scarlet | Gatsby Theme Demo", // Alternative Site title for SEO
    siteAuthor: "Shaun Wong | @devShaun", // Author Details
    siteLogoText: "Scarlet", // Text for logo
    siteUrl: "https://gatsby-theme-scarlet.netlify.com/", // Domain of your site. No trailing slash!
    siteLanguage: "en", // Language Tag on <html> element
    siteDescription:
      "Gatsby Theme Scarlet - The Custom theme currently features 3 slides, a hero section, projects section and about section.",
    siteKeywords: "gatsby theme scarlet",
  },
  // Plugins
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
