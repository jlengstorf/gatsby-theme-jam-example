/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import React from "react"
import CodeSurfer from "code-surfer/dist/standalone.esm"
import { readStepFromElement } from "./step-reader"
import useSpring from "./use-spring"
import styles from "./styles"

function toColumns(items, columnCount) {
  const columns = Array(columnCount)
    .fill()
    .map(() => [])

  let fragments = []
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

function Section({ children, columns: columnComponents, invert }) {
  const ref = React.useRef()
  const currentStep = useCurrentStep(ref)
  const progress = useSpring({ target: currentStep })
  const items = React.Children.map(children, child => [child])
  const columnCount = 2
  const columns = toColumns(items, columnCount)
  return (
    <div ref={ref} sx={styles.section}>
      <CodeWave steps={columns[0]} progress={progress} />
      <Scroller
        steps={columns[1]}
        currentStep={currentStep}
        progress={progress}
      />
    </div>
  )
}

function CodeWave({ steps, progress }) {
  const s = steps.map(element => {
    const parsedStep = readStepFromElement(element)
    if (parsedStep.file) {
      console.log(parsedStep.file)
    }
    return parsedStep
  })
  const [colorMode] = [] //TODO useColorMode()
  const theme = styles.code.theme[colorMode] || styles.code.theme.default

  return (
    <div sx={styles.code.container}>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div sx={styles.code.sticker}>
          <CodeSurfer progress={progress} steps={s} theme={theme} />
        </div>
      </div>
    </div>
  )
}

function Scroller({ steps, currentStep, progress }) {
  const oldProgress = useSpring({
    target: currentStep,
    tension: 50,
  })
  const startBorder = Math.min(oldProgress, progress)
  const endBorder = Math.max(oldProgress, progress)

  const borderStyles = steps.map((_, i) => {
    const from = Math.max(startBorder - i, 0)
    const to = Math.min(endBorder + 1 - i, 1)

    if (to <= from) {
      return { top: "0%", bottom: "100%" }
    } else {
      const width = 3 / (1 + endBorder - startBorder)
      return {
        top: from * 100 + "%",
        bottom: 100 - to * 100 + "%",
        width,
      }
    }
  })
  return (
    <div sx={styles.scroller.container} className="scroller">
      {steps.map((step, i) => (
        <div
          style={{
            ...styles.scroller.step,
            position: "relative",
            borderLeft: "3px solid #0000",
          }}
          key={i}
        >
          <div
            sx={{
              position: "absolute",
              left: "-3px",
              backgroundColor: styles.scroller.currentStepColor,
            }}
            style={borderStyles[i]}
          />
          {step}
        </div>
      ))}
    </div>
  )
}

export default Section
