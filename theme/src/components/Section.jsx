import React from "react"
import { Container } from "theme-ui"
import { StyledSection } from "./styles"
import { AnimatedWave } from "./"

const Section = ({
  backgroundColor = "#fff",
  children,
  light,
  id,
  enableWave,
  waveBottom,
}) => {
  return (
    <StyledSection
      backgroundColor={backgroundColor}
      light={light || false}
      id={id}
    >
      <Container>{children}</Container>
      <AnimatedWave enableWave={enableWave} bottom={waveBottom} />
    </StyledSection>
  )
}

export default Section
