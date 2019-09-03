module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth-app",
      options: {},
    },
  ],
  siteMetadata: {
    title: `Barony of One Thousand Eyes`,
    author: `Reuben Ellis`,
    description: `Welcome to the Barony of One Thousand Eyes`,
    copyright: `Copyright © 2019 Barony of One Thousand Eyes - SCA Inc.
No part of this website may be reproduced without the specific written permission. The original contributors retain the copyright of certain portions of this site. Please refer to our terms and uses page for more information.`,
    loginDesc: "Login",
    isAuthApp: false,
    social: {
      facebook: "https://www.facebook.com/barony1000eyes",
      twitter: "https://www.twitter.com/reubenellis8",
      github: "https://www.github.com/ethriel3695",
      email: "thedevelopertoolbook@gmail.com",
    },
    externalLinks: [
      { label: "Kingdom of Artemisia", link: "https://www.artemisia.sca.org/" },
      {
        label: "Society for Creative Anachronism Inc.",
        link: "https://www.sca.org/",
      },
    ],
  },
}
