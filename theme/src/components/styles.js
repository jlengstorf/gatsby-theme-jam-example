// import { codeThemes } from "gatsby-theme-waves";
import * as codeThemes from "code-surfer/dist/standalone.esm"

export default {
  section: {
    display: "flex",
    position: "relative",
    width: "960px",
    marginLeft: "calc(50% - 480px)",
    marginTop: "40px",
    marginBottom: "40px",
  },
  scroller: {
    currentStepColor: "primary",
    container: {
      flex: 1,
      paddingLeft: "50px",
    },
    step: {
      padding: "0 10px",
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
    },
  },
  code: {
    container: {
      width: "66%",
    },
    sticker: {
      position: "sticky",
      width: "100%",
      height: "50vh",
      top: "25vh",
      border: "1px solid",
      borderColor: "secondary",
    },
    theme: {
      default: codeThemes.github,
      dark: codeThemes.vsDark,
    },
  },
}
