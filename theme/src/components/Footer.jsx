import React from "react"
import { Container } from "theme-ui"
import { StyledFooter, FooterBox, HyperLink } from "./styles"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterBox>
          <span>
            Powered by <HyperLink href="https://reactjs.org/">React</HyperLink>{" "}
            and <HyperLink href="https://www.gatsbyjs.org/">Gatsby</HyperLink>{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>
          </span>
          <p>
            Gatsby Theme Scarlet Design & Developed by{" "}
            <HyperLink href="https://twitter.com/devShaun">
              Shaun Wong
            </HyperLink>
          </p>
        </FooterBox>
      </Container>
    </StyledFooter>
  )
}

export default Footer
