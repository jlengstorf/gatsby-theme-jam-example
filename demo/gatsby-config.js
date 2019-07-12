/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth-app",
      options: { contentPath: "data", basePath: "/nav" },
    },
  ],
}
