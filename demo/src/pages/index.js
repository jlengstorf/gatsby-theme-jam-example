import React from "react"

import { Link } from "gatsby"
export default () => {
  return (
    <div>
      <h1>Gatsby Theme Waves Demos</h1>
      <div>
        <Link to="/blog/post">Blog with Code Wave</Link>
      </div>
      <div>
        <Link to="/images">Image Wave with custom styles</Link>
      </div>
      <div>
        <Link to="/maps">Custom Maps Wave</Link>
      </div>
    </div>
  )
}
