import Layout from "gatsby-theme-blog/src/components/layout"
import React from "react"
import theme from "../../../blog/theme-ui"
import { ThemeProvider, ColorMode } from "theme-ui"

export default props => (
  <ThemeProvider theme={theme}>
    <ColorMode />
    <Layout {...props} />
  </ThemeProvider>
)
