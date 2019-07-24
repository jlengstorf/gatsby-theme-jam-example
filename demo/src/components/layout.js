import { Layout, Container, Main } from "theme-ui"
import { Global } from "@emotion/core"
import React from "react"

export default function({ children }) {
  return (
    <Layout>
      <Global styles={{ body: { overflowX: "hidden" } }} />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Layout>
  )
}
