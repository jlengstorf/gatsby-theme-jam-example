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
    greeting: `The Barony of One Thousand Eyes is a local branch of the Society for Creative Anachronism (“SCA”), the world’s largest “living history” organization, dedicated to re-creating most aspects of Medieval life including tourney combat, feasting, crafts, archery, and much more. Our local group is located in eastern Idaho, centered on Idaho Falls. If you’re interested in participating, but live outside our area, visit the SCA’s web site to look up your nearest local branch.
      What you’ll find here are announcements for our local members, information on local and regional SCA events and branch meetings, a directory of officers, and other useful information.
      If you’re looking to join us or at least want to come and check us out, please contact us at:
      info@onethousandeyes.org
      Thanks for dropping by. Hope to see you soon!`,
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
