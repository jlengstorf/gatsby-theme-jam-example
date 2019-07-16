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
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/ChildrensPictureBookImages/`,
        ignore: [`**/\cover*`], [`**/\Petra*`], // ignore files starting with cover
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cover`,
        path: `${__dirname}/content/ChildrensPictureBookImages/`,
        ignore: [`**/\*`], // ignore no files
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/audioWrapper.js`),
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
