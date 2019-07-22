import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui"

export const StyledHeader = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1;
  pointer-events: none;
`

export const SectionWrap = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`

export const StyledHero = styled.section`
  scroll-snap-align: start;
  background: linear-gradient(
    ${theme.colors.primary},
    ${theme.colors.secondary}
  );
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  > div {
    margin-top: -123px;
  }
`

export const StyledSection = styled.section`
  scroll-snap-align: start;
  background: white;
  height: 100vh;
  display: flex;
  align-items: center;
  color: black;
  ${props => ({
    background: props.backgroundColor && props.backgroundColor,
  })}
  > div {
    margin-top: -123px;
  }
`

export const SplashImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85vh;
  object-fit: contain;
  object-position: bottom;
  user-select: none;
`

export const Nav = styled.nav``

export const NavList = styled.ul``

export const NavItem = styled.li``
