import { Layout, Container, Main } from "theme-ui"
import React from "react"

export default function({ children }) {
  return (
    <Layout>
      <Main>
        <Container>{children}</Container>
      </Main>
    </Layout>
  )
}
