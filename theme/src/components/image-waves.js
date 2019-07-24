/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import useSpring from "../stuff/use-spring"
import Scroller from "./opacity-scroller"

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
    console.log("item props", item.props, isImg)
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

function getProgress(scroller) {
  const children = scroller.childNodes
  const middle = window.innerHeight / 2
  let prevBottom = children[0].getBoundingClientRect().bottom
  for (let i = 1; i < children.length; i++) {
    const { top, bottom } = children[i].getBoundingClientRect()
    const breakpoint = (prevBottom + top) / 2
    if (middle < breakpoint) {
      return i - 1
    }
    prevBottom = bottom
  }
  return children.length - 1
}

function useCurrentStep(ref) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const scroller = ref.current.querySelector(".scroller")
    function onScroll() {
      const newProgress = getProgress(scroller)
      setProgress(newProgress)
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return progress
}

function Section({ children, variant = "default" }) {
  const ref = React.useRef()
  const currentStep = useCurrentStep(ref)
  const progress = useSpring({
    target: currentStep,
    round: p => Math.round(p * 100) / 100,
  })

  const columns = React.useMemo(() => {
    const items = React.Children.map(children, child => [child])
    const columnCount = 2
    const columns = toColumns(items, columnCount)
    return columns
  }, [])

  return (
    <div ref={ref} sx={{ variant: `styles.waves.${variant}.Section` }}>
      <ImageSticker steps={columns[0]} progress={progress} variant={variant} />
      <Scroller
        steps={columns[1]}
        currentStep={currentStep}
        progress={progress}
        variant={variant}
      />
    </div>
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

export default Section
