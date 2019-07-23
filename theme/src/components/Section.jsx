import React from "react"
import { Container } from "theme-ui"
import { StyledSection } from "./styles"

const Section = ({ backgroundColor = "white", children, light }) => {
  return (
    <StyledSection backgroundColor={backgroundColor} light={light}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
