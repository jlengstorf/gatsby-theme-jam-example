import { css } from "@emotion/core"
import theme from "../../gatsby-plugin-theme-ui"

export const globalStyles = css`
  body {
    margin: 0;
    background: ${theme.colors.background};
    letter-spacing: 0.3px;
  }
`
