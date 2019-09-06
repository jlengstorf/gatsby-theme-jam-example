module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth-app",
      options: {},
    },
  ],
  siteMetadata: {
    title: `Dashboard`,
    author: `Reuben Ellis`,
    description: `An Authentication Site Built with Gatsby, GraphQL, Material-UI and Auth0.`,
    copyright: `This is to insert a copyright message`,
    loginDesc: "Login / Signup",
    isAuthApp: true,
    social: {
      facebook: "https://www.facebook.com/altcampus",
      twitter: "https://www.twitter.com/altcampus",
      github: "https://www.github.com/ethriel3695",
      email: "test@example.com",
    },
    externalLinks: [{ label: "", link: "" }],
  },
}
