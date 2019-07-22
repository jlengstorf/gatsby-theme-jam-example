import React from "react"
// import { Styled } from "theme-ui"
import BaseLayout from "../layouts/BaseLayout"

const PageTemplate = ({ pageContext }) => (
  <BaseLayout>
    {/* <Styled.h2>{pageContext.heading}</Styled.h2>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
  </BaseLayout>
)

export default PageTemplate
