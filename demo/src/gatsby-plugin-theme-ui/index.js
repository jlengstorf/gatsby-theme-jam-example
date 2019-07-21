import wavesRoot from "gatsby-theme-waves/src/gatsby-plugin-theme-ui"

export default {
  colors: {
    text: "green",
    primary: "salmon",
  },
  styles: {
    ...wavesRoot.styles,
    Container: {
      width: 600,
      fontSize: "1.2em",
    },
  },
}
