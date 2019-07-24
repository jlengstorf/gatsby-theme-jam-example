/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import OpacityScroller from "./opacity-scroller"
import Wave from "./wave"

function toColumns(items, columnCount) {
  const columns = Array(columnCount)
    .fill()
    .map(() => [])

  items.forEach((item, i) => {
    const isImg =
      item.props &&
      item.props.mdxType === "p" &&
      item.props.children &&
      item.props.children.props &&
      item.props.children.props.className === "gatsby-resp-image-wrapper"
    // console.log("item props", item.props, isImg)
    if (isImg) {
      const img = React.cloneElement(
        item.props.children.props.children[1].props.children[3],
        { style: { width: "100%", height: "100%", objectFit: "cover" } }
      )
      columns[0].push(img)
      columns[1].push(React.createElement("div", {}, []))
    } else {
      const step = columns[0].length - 1
      columns[1][step].props.children.push(item)
    }
  })

  return columns
}

function ImageWave(props) {
  const childrenToColumns = children => {
    const items = React.Children.map(children, child => [child])
    const columnCount = 2
    const columns = toColumns(items, columnCount)
    return columns
  }

  return (
    <Wave
      columnComponents={[ImageSticker, OpacityScroller]}
      childrenToStepColumns={childrenToColumns}
      {...props}
    />
  )
}

function ImageSticker({ progress, steps, variant }) {
  const currentStep = Math.round(progress)
  const prev = steps[currentStep - 1]
  const curr = steps[currentStep]
  const next = steps[currentStep + 1]

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
      }}
    >
      {prev && (
        <div
          style={{
            opacity: Math.max(0, currentStep - progress),
          }}
          sx={{
            variant: `styles.waves.${variant}.Sticker`,
          }}
          key="prev"
        >
          {prev}
        </div>
      )}
      <div
        style={{
          opacity: Math.abs(1 - (currentStep - progress)),
        }}
        sx={{
          variant: `styles.waves.${variant}.Sticker`,
        }}
        key="curr"
      >
        {curr}
      </div>
      {next && (
        <div
          style={{
            opacity: Math.max(0, progress - currentStep),
          }}
          sx={{
            variant: `styles.waves.${variant}.Sticker`,
          }}
          key="next"
        >
          {next}
        </div>
      )}
    </div>
  )
}

export default ImageWave
