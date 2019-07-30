module.exports = (options) => ({
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: ["gatsby-plugin-theme-ui", 
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: 'weeksling'
      }
    }
  ],
})
