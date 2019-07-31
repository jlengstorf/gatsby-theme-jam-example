import React from "react"
import { Link } from "gatsby"

const TastingNoteList = ({ tastingNotes }) => (
  <>
    <h2>Tasting Notes</h2>
    <ul>
      {tastingNotes.map(tastingNote => (
        <li key={tastingNote.id}>
          <strong>
            <Link to={tastingNote.slug}>{tastingNote.name}</Link>
          </strong>
          <br />
          {new Date(tastingNote.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </li>
      ))}
    </ul>
  </>
)
export default TastingNoteList
