import styled from "@emotion/styled"
import { keyframes, css } from "@emotion/core"
import theme from "../gatsby-plugin-theme-ui"

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

export const NavLink = styled.a`
  padding: 1rem 0;
  color: ${theme.colors.light};
  text-decoration: none;
  cursor: pointer;
`

export const NavItem = styled.li`
  padding: 0 1rem;
`

export const SectionWrap = styled.main`
  min-height: 400px;
`

export const StyledHero = styled.section`
  scroll-snap-align: start;
  background: linear-gradient(
    ${theme.colors.primary} 12.5vh,
    ${theme.colors.secondary}
  );
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  height: 100vh;
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const dashAnimation = length => css`
  animation: ${dash} ${length} linear forwards;
`

export const zoomAnimation = length => css`
  animation: ${zoom} ${length} linear infinite;
`

export const moveAnimation = length => css`
  animation: ${move} ${length} linear infinite;
`

const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`
const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`

const zoom = keyframes`
  50% {
    transform:scale(1.2) skew(2deg, 2deg);
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
  ${props => ({
    transform: props.bottom && "matrix(1, 0, 0, -1, 0, 0)",
  })}
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  pointer-events: none;
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
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  min-height: 400px;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    min-height: 70vh;
    height: auto;
  }
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

export const SplashImageObj = {
  position: "absolute",
  top: "unset",
  bottom: 0,
  right: 0,
  width: "100%",
  height: "85vh",
  objectFit: "contain",
  objectPosition: "bottom",
  userSelect: "none",
}

export const ProjectList = styled.ul`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
  padding: 0 0 1.5rem;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    overflow: unset;
    flex-wrap: wrap;
  }
`

export const StyledProjectItem = styled.li`
  scroll-snap-align: start;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  min-width: 250px;
  margin: 1rem 1.5rem 0rem 0rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.27s ease;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    flex: 1 1 45%;
    max-width: 45%;
  }
  &:hover {
    transform: scale(1.025);
  }
  &:focus-within {
    outline: -webkit-focus-ring-color auto 5px;
  }
`

export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 275px;
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
  ${zoomAnimation("40s")};
`

export const ProjectContent = styled.div`
  z-index: 3;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 1rem;
`

export const ProjectTitle = styled.h3`
  color: ${theme.colors.light};
  margin-bottom: 0;
  margin-right: auto;
`

export const ProjectBadge = styled.p`
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  margin-bottom: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: ${theme.fontSizes[1]}px;
  text-transform: capitalize;
`

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 1rem 0 0;
`
export const FooterBox = styled.div`
  background: ${theme.colors.light};
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  font-size: ${theme.fontSizes[1]}px;

  > p {
    margin: 0;
  }
`

export const Avatar = styled.img`
  border-radius: 1rem;
`

export const HyperLink = styled.a`
  cursor: pointer;
  font-weight: ${theme.fontWeights.semiBold};
  text-decoration: none;
  color: ${theme.colors.dark};
`
