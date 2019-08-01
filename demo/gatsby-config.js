module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth-app",
      options: {},
    },
  ],
  siteMetadata: {
    title: `Spudnik Landing Page`,
    author: `Reuben Ellis`,
    description: `Spudnik Tools Landing Page`,
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
