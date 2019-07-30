import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import TwitterBubble from "../components/TwitterBubble"

const PageTemplate = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query InstaQuery {
      allInstaNode {
        edges {
          node {
            caption
            likes
            original
            preview
            type
            username
          }
        }
      }
    }
  `)

  const twitterData = [
    "Hello Twitter! My first tweet 😃",
    "Today I ate bread. Gread is bood",
    '"Amazing!" 🌟said a worm from Worms 2',
    "With great power, comes great force or distance over a small measure of time 🤔",
    "Day, good! Work, good! Fork, good! Code, good! Commit, good! Push, good!",
  ]

  return (
    <Layout>
      <Styled.h1>Twitter thoughts</Styled.h1>
      {twitterData.map(tweet => (
        <TwitterBubble tweet={tweet} />
      ))}
      <Styled.h1>{pageContext.heading}</Styled.h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export default PageTemplate
