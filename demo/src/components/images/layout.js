/** @jsx jsx */
import { jsx, ThemeProvider, Container, Styled } from "theme-ui"

import wavesRoot from "gatsby-theme-waves/src/gatsby-plugin-theme-ui"
import images from "./waves-variant"

import Header from "../header"

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
      marginLeft: ["auto", "10%"],
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
      <Header codeUrl="https://github.com/pomber/gatsby-theme-waves/tree/master/demo/src/pages/images" />
      <Container>{props.children}</Container>
    </Styled.root>
  </ThemeProvider>
)
