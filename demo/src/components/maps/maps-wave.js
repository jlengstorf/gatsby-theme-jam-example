/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BarScroller from "gatsby-theme-waves/src/components/bar-scroller"
import Wave from "gatsby-theme-waves/src/components/wave"
import Map from "pigeon-maps"

function toColumns(items, columnCount) {
  const columns = Array(columnCount)
    .fill()
    .map(() => [])

  items.forEach((item, i) => {
    const isCode = item.props && item.props.mdxType === "pre"
    if (isCode) {
      const json = JSON.parse(item.props.children.props.children)
      columns[0].push(json)
      columns[1].push(React.createElement("div", {}, []))
    } else {
      const step = columns[0].length - 1
      columns[1][step].props.children.push(item)
    }
  })

  return columns
}

function MapsWave(props) {
  const childrenToColumns = children => {
    const items = React.Children.map(children, child => [child])
    const columnCount = 2
    const columns = toColumns(items, columnCount)
    return columns
  }

  return (
    <Wave
      columnComponents={[MapsSticker, BarScroller]}
      childrenToStepColumns={childrenToColumns}
      {...props}
    />
  )
}

function MapsSticker({ variant, steps, currentStep, progress }) {
  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
      }}
    >
      <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
        <Map animateMaxScreens={100} {...steps[currentStep]}></Map>
      </div>
    </div>
  )
}

export default MapsWave
