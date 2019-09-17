const purple60 = `#663399`;
const purple30 = `#D9BAE8`;
const grey90 = `#232129`;
const black80 = `#1B1F23`;
const darkBackground = `#161616`;
const white = `#fff`;
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const lightGray = `hsla(0, 0%, 0%, 0.2)`;
const redGradient = `linear-gradient(to bottom, #EE3234 0%, #EE6454 19% , #dd3234 30%, #912b2d 100%)`;

export default {
  text: grey90,
  background: white,
  primary: purple60,
  secondary: black80,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: grey90,
  header: redGradient,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: lightWhite,
      background: darkBackground,
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white,
    },
  },
};
