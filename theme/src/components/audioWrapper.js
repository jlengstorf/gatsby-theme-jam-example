import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const AudioWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query audioWrapperQuery {
        file(sourceInstanceName: { eq: "audio" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>

          <div
            style={{
              width: "100vw",
              position: "fixed",
              bottom: 0,
              left: 0,

              background: "pink",
            }}
          >
            <audio
              src={data.file.publicURL}
              type="audio/mp3"
              controls
              style={{
                width: "90%",
                margin: "1em 5vw",
              }}
            />
          </div>
        </div>
      </>
    )}
  />
)

AudioWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AudioWrapper
