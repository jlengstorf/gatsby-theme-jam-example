// import { codeThemes } from "gatsby-theme-waves";
import * as codeThemes from "code-surfer/dist/standalone.esm"

export default {
  default: {
    Wave: {
      width: ["100%", "960px"],
      marginTop: "40px",
      marginLeft: [0, "calc(50% - 480px)"],
      marginBottom: "40px",
      position: "relative",
      display: ["block", "flex"],
    },
    ScrollerContainer: {
      flex: 1,
      paddingLeft: [0, "50px"],
    },
    ScrollerStep: {
      position: "relative",
      padding: [0, "0 10px"],
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
      borderLeft: ["none", "3px solid transparent"],
    },
    ScrollerProgress: {
      position: "absolute",
      left: ["-12px", "-3px"],
      backgroundColor: "primary",
    },
    StickerContainer: {
      width: ["100vw", "50%"],
      marginLeft: ["calc(50% - 50vw)", 0],
      position: ["sticky", "static"],
      top: [0, "auto"],
      zIndex: [1, "auto"],
      height: ["50vh", "auto"],
    },
    Sticker: {
      position: ["static", "sticky"],
      width: "100%",
      height: ["100%", "60vh"],
      top: ["auto", "20vh"],
      border: ["none", "1px solid"],
      borderColor: "secondary",
    },
    // this is used to select the active scroller step
    // 0.5 selects the step that is at half the screen height
    // 0.7 the step that is at 70% the screen height
    focus: [0.7, 0.5],
    theme: {
      // keys should be the same as the color modes from theme-ui
      // https://theme-ui.com/color-modes
      default: codeThemes.github,
      dark: codeThemes.vsDark,
    },
  },
}
