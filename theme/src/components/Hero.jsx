import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledHero, SplashImage } from "./styles"
import { AnimatedWave } from "./"

const Hero = ({ imageAlt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "scarlet.png" }) {
        childImageSharp {
          fixed(width: 1536, height: 2048) {
            src
          }
        }
      }
    }
  `)
  return (
    <StyledHero id={id}>
      <SplashImage
        src={data.file.childImageSharp.fixed.src}
        alt={imageAlt || "Scarlet Theme Hero Image"}
      />
      <AnimatedWave enableWave bottom={true} />
    </StyledHero>
  )
}

export default Hero
