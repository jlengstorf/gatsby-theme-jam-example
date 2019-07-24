import wavesRoot from "gatsby-theme-waves/src/gatsby-plugin-theme-ui"
import images from "../pages/images/waves-variant"

export default {
  colors: {
    text: "green",
    primary: "salmon",
  },
  styles: {
    waves: {
      ...wavesRoot.styles.waves,
      ...images,
    },
    Container: {
      width: 600,
      fontSize: "1.2em",
    },
  },
}
