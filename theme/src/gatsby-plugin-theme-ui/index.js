// import { codeThemes } from "gatsby-theme-waves";
import * as codeThemes from "code-surfer/dist/standalone.esm"

/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  styles: {
    waves: {
      Section: {
        width: "960px",
        marginTop: "40px",
        marginLeft: "calc(50% - 480px)",
        marginBottom: "40px",
        position: "relative",
        display: "flex",
      },
      ScrollerContainer: {
        flex: 1,
        paddingLeft: "50px",
      },
      ScrollerStep: {
        position: "relative",
        padding: "0 10px",
        minHeight: "250px",
        display: "flex",
        alignItems: "center",
        borderLeft: "3px solid transparent",
      },
      ScrollerProgress: {
        position: "absolute",
        left: "-3px",
        backgroundColor: "primary",
      },
      CodeContainer: {
        width: "66%",
      },
      CodeSticker: {
        position: "sticky",
        width: "100%",
        height: "50vh",
        top: "25vh",
        border: "1px solid",
        borderColor: "secondary",
      },
      theme: {
        // keys should be the same as the color modes from theme-ui
        // https://theme-ui.com/color-modes
        default: codeThemes.github,
        dark: codeThemes.vsDark,
      },
    },
  },
}
