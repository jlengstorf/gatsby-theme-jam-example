module.exports = ({
  imagePath = "book/images",
  audioPath = "book/audio",
  basePath = "/",
}) => {
  return {
    siteMetadata: {
      title: "gatsby-theme-children's-picture-book",
      description:
        "Make a Do-It-Yourself childrens picture book together with a child you know.",
      author: "@olavea",
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `audio`,
          path: audioPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: imagePath,
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
}
