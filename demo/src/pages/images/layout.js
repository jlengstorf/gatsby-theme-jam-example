import React from "react"
import { ThemeProvider, Container, Styled } from "theme-ui"

import wavesRoot from "gatsby-theme-waves/src/gatsby-plugin-theme-ui"
import images from "./waves-variant"

const theme = {
  colors: {
    text: "#fafafaee",
    primary: "salmon",
  },
  styles: {
    waves: {
      ...wavesRoot.styles.waves,
      ...images,
    },
    Container: {
      width: ["100%", 520],
      fontSize: ["1em", "1.2em"],
      marginRight: ["auto", "15%"],
      color: "text",
      fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
    },
    a: {
      color: "primary",
    },
  },
}

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Container>{props.children}</Container>
    </Styled.root>
  </ThemeProvider>
)
