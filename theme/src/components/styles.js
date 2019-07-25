import styled from "@emotion/styled"
import { keyframes, css } from "@emotion/core"
import theme from "../gatsby-plugin-theme-ui"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1;
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
  cursor: pointer;
`

export const NavItem = styled.li``

export const SectionWrap = styled.main`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  &,
  > section {
    height: 100vh;
  }
`

export const StyledHero = styled.section`
  scroll-snap-align: start;
  background: linear-gradient(
    ${theme.colors.primary},
    ${theme.colors.secondary}
  );
  margin-top: -95px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`
const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`
export const WaveWrapper = styled.div`
  transform: matrix(1, 0, 0, -1, 0, 0);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`

export const InnerWave = styled.div`
  width: 100%;
  height: 30vh;
  left: 0;
  position: absolute;
  svg {
    width: 100%;
    height: 30vh;
  }
  path {
    ${waveAnimation("20s")};
  }
  ${props => ({
    zIndex: props.layer && props.layer,
    top: props.waveoffset && props.waveoffset,
  })}
`

export const StyledSection = styled.section`
  scroll-snap-align: start;
  background: white;
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
