/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BarScroller from "./bar-scroller"
import CodeSticker from "./code-sticker"
import Wave from "./wave"

function toColumns(items, columnCount) {
  const columns = Array(columnCount)
    .fill()
    .map(() => [])

  items.forEach((item, i) => {
    const isCode = item.props && item.props.mdxType === "pre"
    if (isCode) {
      columns[0].push(item)
      columns[1].push(React.createElement("div", {}, []))
    } else {
      const step = columns[0].length - 1
      columns[1][step].props.children.push(item)
    }
  })

  return columns
}

function CodeWave(props) {
  const childrenToColumns = children => {
    const items = React.Children.map(children, child => [child])
    const columnCount = 2
    const columns = toColumns(items, columnCount)
    return columns
  }

  return (
    <Wave
      columnComponents={[CodeSticker, BarScroller]}
      childrenToStepColumns={childrenToColumns}
      {...props}
    />
  )
}

export default CodeWave
