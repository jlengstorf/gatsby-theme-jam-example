import styled from "@emotion/styled"
import { keyframes, css } from "@emotion/core"
import theme from "../gatsby-plugin-theme-ui"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
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
    ${theme.colors.primary} 12.5vh,
    ${theme.colors.secondary}
  );
  margin-top: 95px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const dashAnimation = length => css`
  animation: ${dash} ${length} linear forwards;
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
  bottom: -5vh;
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
  position: relative;
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

export const ProjectList = styled.ul`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
`

export const StyledProjectItem = styled.li`
  scroll-snap-align: start;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  min-width: 400px;
  margin: 1rem 1.5rem 0rem 0rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const ProjectLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 425px;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );
    z-index: 2;
    opacity: 0.75;
    pointer-events: none;
    filter: brightness(0.75) saturate(1.5);
  }
`

export const ProjectImage = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
`

export const ProjectContent = styled.div`
  z-index: 3;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 1rem;
  > h3,
  > p {
    color: white;
    margin-bottom: 0;
  }
  > h3 {
    margin-right: auto;
  }
`
