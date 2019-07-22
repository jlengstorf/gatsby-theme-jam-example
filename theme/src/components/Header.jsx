import React from "react"
import { Container, Styled } from "theme-ui"
import { StyledHeader } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Styled.h2>Scarlet</Styled.h2>
      </Container>
    </StyledHeader>
  )
}

export default Header
