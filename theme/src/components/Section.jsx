import React from "react"
import { Container, Styled } from "theme-ui"
import { StyledSection } from "./styles"

const Section = ({ backgroundColor = "white" }) => {
  return (
    <StyledSection backgroundColor={backgroundColor}>
      <Container>
        <Styled.h1>Gastby Scarlet</Styled.h1>
        <Styled.p>Hi, I'm Scarlet! </Styled.p>
      </Container>
    </StyledSection>
  )
}

export default Section
