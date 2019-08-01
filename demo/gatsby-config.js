module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth-app",
      options: {},
    },
  ],
  siteMetadata: {
    title: `The Developer Toolbook`,
    author: `Reuben Ellis`,
    description: `The Developer Toolbook`,
    loginDesc: "Login",
    isAuthApp: false,
    social: [
      {
        name: `github`,
        url: `https://github.com/ethriel3695`,
      },
    ],
  },
}
