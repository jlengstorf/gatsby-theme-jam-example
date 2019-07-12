import "typeface-open-sans"
import "typeface-pacifico"

const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'

export default {
  // Global Theme Styles
  colors: {
    text: "#FFF",
    background: "#F53B57",
    primary: "#F53B57",
    secondary: "#EF5777",
  },
  fonts: {
    heading: `'Pacifico', ${systemFontStack}`,
    body: `'Open Sans', ${systemFontStack}`,
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    p: {
      fontSize: [2, 3],
    },
    h1: {
      color: "text",
      fontSize: [6, 7],
      fontFamily: "heading",
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      fontSize: [4, 5],
    },
    // Theme UI Components
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontSize: 1,
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
  },
}
