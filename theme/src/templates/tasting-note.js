import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TastingNote from "../components/tasting-note"

export const query = graphql`
  query($tastingNoteID: String!) {
    tastingNote(id: { eq: $tastingNoteID }) {
      name
      date(formatString: "MMMM DD, YYYY")
      bottlingYear
      score
      strength
      slug
      nose
      taste
      finish
    }
  }
`
const TastingNoteTemplate = ({ data: { tastingNote } }) => (
  <Layout>
    <TastingNote {...tastingNote} />
  </Layout>
)
export default TastingNoteTemplate
