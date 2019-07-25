import React from "react"

import { Link } from "gatsby"
export default () => {
  return (
    <div>
      <h1>Gatsby Theme Waves Demos</h1>
      <div>
        <Link to="/blog/post">Code Wave on a blog post</Link>
      </div>
      <div>
        <Link to="/images">Fullscreen Image Wave</Link>
      </div>
    </div>
  )
}
