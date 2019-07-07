module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `${__dirname}/content/audio/`,
        ignore: [`**/\Petra*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/ChildrensPictureBookImages/`,
        ignore: [`**/\cover*`], // ignore files starting with a dot
      },
    },
    "gatsby-plugin-theme-ui",
  ],
}
