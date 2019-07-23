import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui"
import { Link } from "gatsby"

// Yeah i know i probably should clean this up in their own individual folder..

export const StyledHeader = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1;
  /* pointer-events: none; */
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

export const NavLink = styled(Link)`
  padding: 1rem;
  color: ${theme.colors.light};
  text-decoration: none;
`

export const NavItem = styled.li``

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
`

export const StyledSection = styled.section`
  scroll-snap-align: start;
  background: white;
  height: 100vh;
  display: flex;
  align-items: center;
  ${props => ({
    background: props.backgroundColor && props.backgroundColor,
    color: props.light ? theme.colors.light : theme.colors.dark,
  })}
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
