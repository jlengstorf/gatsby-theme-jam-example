import React from "react"
import { Container, Styled } from "theme-ui"
import { StyledHeader, Nav, NavItem, NavList, NavLink } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Styled.h2 as={NavLink} href="#hero">
            Scarlet
          </Styled.h2>
          <NavList>
            <NavItem>
              <NavLink href="#work">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
