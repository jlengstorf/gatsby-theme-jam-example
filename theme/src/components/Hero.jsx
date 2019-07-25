import React from "react"
import ScarletImg from "../images/hero.png"
import { StyledHero, SplashImage, WaveWrapper, InnerWave } from "./styles"

const Hero = ({ heroImage, imageAlt }) => {
  return (
    <StyledHero>
      <SplashImage
        src={heroImage || ScarletImg}
        alt={imageAlt || "Scarlet Theme Hero Image"}
      />
      <WaveWrapper>
        <InnerWave layer="1" waveoffset="0px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path fill={"white"}>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="1s"
              />
            </path>
          </svg>
        </InnerWave>
        <InnerWave layer="2" waveoffset="30px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path fill={"rgba(255,255,255, .4)"}>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="10s"
              />
            </path>
          </svg>
        </InnerWave>
        <InnerWave layer="3" waveoffset="60px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path fill={"rgba(255,255,255, .7)"}>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="15s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapper>
    </StyledHero>
  )
}

export default Hero
