import React from "react"
import { ThemeProvider, Container, Styled } from "theme-ui"
import { roboto } from "@theme-ui/presets"

import Header from "../header"

import wavesVariants from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/waves"

const theme = {
  ...roboto,
}

theme.styles.waves = wavesVariants

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Header codeUrl="https://github.com/pomber/gatsby-theme-waves/tree/master/demo/src/pages/maps" />
      <Container>{props.children}</Container>
    </Styled.root>
  </ThemeProvider>
)
