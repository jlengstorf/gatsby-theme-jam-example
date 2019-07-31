import React from "react"
import { Link } from "gatsby"

const TastingNote = ({ name, date }) => (
  <div>
    <strong>
      <Link to="/">Back</Link>
    </strong>
    <h2>{name}</h2>
    <p>{date}</p>
  </div>
)
export default TastingNote
