import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

const TastingNoteList = ({ tastingNotes }) => (
  <>
    <Styled.ul>
      {tastingNotes.map(tastingNote => (
        <Styled.li key={tastingNote.id}>
          <strong>
            <Link to={tastingNote.slug}>
              {tastingNote.name} ({tastingNote.bottlingYear},{" "}
              {tastingNote.strength}%)
            </Link>{" "}
            - {tastingNote.score}/100
          </strong>
          <br />
          {new Date(tastingNote.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </Styled.li>
      ))}
    </Styled.ul>
  </>
)
export default TastingNoteList
