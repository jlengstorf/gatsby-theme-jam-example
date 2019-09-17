module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth-app",
      options: {
        // contentPath: "content/data",
        // assetPath: "content/assets",
        // excelPath: "content",
        // postPath: "content/tools",
        // eventPath: "content",
      },
    },
  ],
  siteMetadata: {
    title: `The Developer Toolbook`,
    author: `Reuben Ellis`,
    description: `A collection of my thoughts and learning to share with anyone interested in creating software because knowledge is meant to be shared!`,
    copyright: `Copyright © 2019 Devellistech - No part of this website may be reproduced without specific written permission... Just Kidding Copy Away!!!`,
    loginDesc: "",
    isAuthApp: false,
    social: {
      facebook: "https://www.facebook.com/reuben.ellis.338",
      twitter: "https://www.twitter.com/reubenellis8",
      github: "https://www.github.com/ethriel3695",
      email: "devellistech@gmail.com",
    },
    externalLinks: [
      {
        label: "Gatsby Theme Demo",
        link: "http://sleepy-haibt-f5d703.netlify.com",
      },
    ],
  },
}
