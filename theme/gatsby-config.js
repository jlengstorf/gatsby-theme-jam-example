module.exports = (options) => ({
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: 'unravelwinter'
      }
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "consumer_key",
          consumer_secret: "consumer_secret",
          bearer_token: "bearer_token",
        },
        queries: {
          nameofthequery: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "halsey", // Twitter handle
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
          nameofanotherthequery: {
            endpoint: "search/tweets",
            params: {
              q: "#gatsbyjs",
              tweet_mode: "extended",
            },
          },
        },
      }
    }
  ],
})
