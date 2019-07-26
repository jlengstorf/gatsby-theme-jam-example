/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { Link } from "gatsby"

export default ({ codeUrl }) => (
  <Styled.div
    sx={{
      borderBottom: "1px solid",
      borderColor: "primary",
      paddingBottom: 1,
    }}
  >
    <Link to="/" sx={{ color: "primary" }}>
      Demos Home
    </Link>
    <Styled.a sx={{ paddingLeft: 3 }} href={codeUrl}>
      Demo Code
    </Styled.a>
  </Styled.div>
)
