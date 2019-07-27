import React from "react"

import { Link, navigate } from "gatsby"

class PageFlipper extends React.Component {
  handleKeyStroke = event => {
    const { nextPage, previousPage } = this.props

    if (event.keyCode === 37 && previousPage) {
      navigate(previousPage.path)
    }

    if (event.keyCode === 39 && nextPage) {
      navigate(nextPage.path)
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyStroke)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyStroke)
  }

  render() {
    const { nextPage, previousPage } = this.props

    return (
      <ul
        style={{
          background: `pink`,
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,

          margin: 0,
          marginBottom: 0,
        }}
      >
        <li>
          {previousPage && (
            <Link to={`/${previousPage.path}`} rel="prev">
              ← {previousPage.title}
            </Link>
          )}
        </li>
        <li>
          {nextPage && (
            <Link to={`/${nextPage.path}`} rel="next">
              {nextPage.title} →
            </Link>
          )}
        </li>
      </ul>
    )
  }
}

export default PageFlipper
