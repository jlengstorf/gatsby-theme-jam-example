import React from "react"
// import ScarletImg from "../images/hero.png"
import { Container } from "theme-ui"
import { StyledHero } from "./styles"

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <p>Hero Goes here</p>
        {/* <ScarletImg src={ScarletImg} /> */}
      </Container>
    </StyledHero>
  )
}

export default Hero
