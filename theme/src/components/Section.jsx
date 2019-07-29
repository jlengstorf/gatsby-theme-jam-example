import React from "react"
import { Container } from "theme-ui"
import { StyledSection } from "./styles"

const Section = ({ backgroundColor = "white", children, light, id }) => {
  return (
    <StyledSection backgroundColor={backgroundColor} light={light} id={id}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
