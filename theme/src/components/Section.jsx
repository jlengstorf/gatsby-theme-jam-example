import React from "react"
import { Container } from "theme-ui"
import { StyledSection } from "./styles"

const Section = ({ backgroundColor = "white", children }) => {
  return (
    <StyledSection backgroundColor={backgroundColor}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
