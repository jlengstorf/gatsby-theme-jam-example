import React from "react"
import { Container, Styled } from "theme-ui"
import { StyledHeader, Nav, NavItem, NavList, NavLink } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Styled.h2 as={NavLink} to={"/"}>
            Scarlet
          </Styled.h2>
          <NavList>
            <NavItem>
              <NavLink to={"/example-page"}>Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/example-page"}>About</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
