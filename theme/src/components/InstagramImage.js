import React from "react"
import styled from "@emotion/styled"

import mq from "../styles/breakpoints"
import COLORS from "../styles/colors"

const InstagramImg = styled.img`
  ${mq({
    margin: "auto",
    border: `0.5px solid ${COLORS.INSTAGRAM.BORDER}`,
  })}
`

const InstagramImageWrapper = styled.div`
  ${mq({
    padding: "10px 10px 20px 10px",
    backgroundColor: COLORS.INSTAGRAM.BACKGROUND,
    maxWidth: "150px",
    boxShadow: `3px 3px 10px -8px ${COLORS.INSTAGRAM.SHADOW}`,
    margin: "10px",
  })}
`

const InstagramImage = ({ src = "", alt = "" }) => (
  <InstagramImageWrapper>
    <InstagramImg alt={alt} src={src} />
  </InstagramImageWrapper>
)

export default InstagramImage
