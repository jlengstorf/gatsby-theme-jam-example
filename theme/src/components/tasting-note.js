import React from "react"
import { Link } from "gatsby"

const TastingNote = ({
  name,
  date,
  bottlingYear,
  strength,
  nose,
  mouth,
  finish,
  score,
}) => (
  <div>
    <strong>
      <Link to="/">Back</Link>
    </strong>
    <h2>
      {name} ({bottlingYear}, {strength}%)
    </h2>
    <p>Tasted on {date}</p>
    <h3>Nose</h3>
    <p>{nose}</p>
    <h3>Mouth</h3>
    <p>{mouth}</p>
    <h3>Finish</h3>
    <p>{finish}</p>
    <h3>Final Score</h3>
    <p>{score}/100</p>
  </div>
)
export default TastingNote
