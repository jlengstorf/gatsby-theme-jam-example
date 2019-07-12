import React from "react"
import { Styled } from "theme-ui"
import HomeLayout from "../layouts/home"

const PageTemplate = ({ pageContext }) => (
  <HomeLayout>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </HomeLayout>
)

export default PageTemplate
