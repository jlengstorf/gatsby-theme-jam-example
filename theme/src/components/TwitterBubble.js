import React from "react"
import speakingIcon from "./speaking.svg"
const twitterFeedContainer = {
  margin: "1em",
  padding: "1em",
  backgroundColor: "#eee",
  width: "60vw",
  borderRadius: "1em",
  boxShadow: "3px 6px 5px #2c2a2a54",
}
const twitterSpeechContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
}
const imgStyle = {
  width: "80px",
}
const tweetStyle = {
  color: "#686868",
  display: "flex",
  alignItems: "center",
  paddingLeft: "2em",
}
const imgCredit = {
  fontSize: "0.1em",
}

const TwitterFeed = ({ tweet }) => (
  <div style={twitterFeedContainer}>
    <div style={twitterSpeechContainerStyle}>
      <img style={imgStyle} src={speakingIcon} />
      <div style={tweetStyle}>"{tweet}"</div>
    </div>

    <div style={imgCredit}>
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>{" "}
      is licensed by{" "}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      >
        CC 3.0 BY
      </a>
    </div>
  </div>
)

export default TwitterFeed
