import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import TastingNoteList from "../components/tasting-note-list"

const TastingNotesTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allTastingNote(sort: { fields: name, order: ASC }) {
        nodes {
          id
          name
          date
          slug
        }
      }
    }
  `)
  const tastingNotes = data.allTastingNote.nodes
  return (
    <Layout>
      <TastingNoteList tastingNotes={tastingNotes} />
    </Layout>
  )
}
export default TastingNotesTemplate
