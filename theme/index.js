// boop
import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import buttonBirdyTop from "../images/LillianUnicornNextPage.png"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const nextPage = 1

const IndexPage = () => (
  <>
    <SEO title="Petra Kanini" />

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
        <Link to="/about" rel="prev page">
          ← about
        </Link>
      </li>
      <li>
        {nextPage && (
          <Link to={`/${nextPage}`} rel="next page">
            {nextPage} →
          </Link>
        )}
      </li>
    </ul>

    <div style={{ maxWidth: `1224`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <h1>Petra Kanini</h1>
      <title>Petra Kanini</title>
    </div>
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
        <Link to="/about" rel="previous page">
          ← about
        </Link>
      </li>
      <li>
        {nextPage && (
          <Link to={`/${nextPage}`} rel="next page">
            <img
              style={{
                width: "333px",
                background: `pink`,
              }}
              src={buttonBirdyTop}
              alt="A Unicorn smiling a mischievous smile"
            />
          </Link>
        )}
      </li>
    </ul>
    <h1> .</h1>
  </>
)

export default IndexPage
