module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        contentPath: `blog/posts`,
        assetsPath: `blog/assets`,
        mdx: false,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-theme-waves",
  ],
}
