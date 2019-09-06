module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth-app",
      options: {},
    },
  ],
  siteMetadata: {
    title: `Demo`,
    author: `Reuben Ellis`,
    description: `An Authentication Site Built with Gatsby, GraphQL, Material-UI and Auth0.`,
    copyright: `Copyright © 2019 Devellistech - No part of this website may be reproduced without specific written permission... Just Kidding Copy Away!!!`,
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
