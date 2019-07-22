import React from "react"
import ScarletImg from "../images/hero.png"
import { StyledHero, SplashImage } from "./styles"

const Hero = ({ heroImage, imageAlt }) => {
  return (
    <StyledHero>
      <SplashImage
        src={heroImage || ScarletImg}
        alt={imageAlt || "Scarlet Theme Hero Image"}
      />
    </StyledHero>
  )
}

export default Hero
