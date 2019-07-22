import styled from "@emotion/styled"

export const StyledHeader = styled.header`
  background: crimson;
  position: sticky;
  top: 0;
  opacity: 0.9;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`

export const SectionWrap = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`

export const StyledHero = styled.section`
  scroll-snap-align: start;
  background: crimson;
  height: calc(100vh);
  display: flex;
  align-items: center;
  position: relative;
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
  height: 75vh;
  object-fit: contain;
  object-position: bottom;
`
