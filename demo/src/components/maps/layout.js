import React from "react"
import { ThemeProvider, Container, Styled } from "theme-ui"
import { roboto } from "@theme-ui/presets"

import wavesVariants from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/waves"

const theme = {
  ...roboto,
}

theme.styles.waves = wavesVariants

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Container>{props.children}</Container>
    </Styled.root>
  </ThemeProvider>
)
