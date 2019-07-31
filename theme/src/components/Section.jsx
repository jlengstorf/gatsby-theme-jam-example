import React from "react"
import { Container } from "theme-ui"
import { StyledSection } from "./styles"

const Section = ({ backgroundColor = "#fff", children, light, id }) => {
  return (
    <StyledSection
      backgroundColor={backgroundColor}
      light={light || false}
      id={id}
    >
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
