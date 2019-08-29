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
    description: `All the Digital Tools in one place.`,
    loginDesc: "Login",
    isAuthApp: true,
    social: [
      {
        name: `github`,
        url: `https://github.com/ethriel3695`,
      },
    ],
  },
}
