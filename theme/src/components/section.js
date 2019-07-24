/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import useSpring from "../stuff/use-spring"
import Scroller from "./scroller"
import CodeWave from "./code-wave"

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
      <CodeWave steps={columns[0]} progress={progress} variant={variant} />
      <Scroller
        steps={columns[1]}
        currentStep={currentStep}
        progress={progress}
        variant={variant}
      />
    </div>
  )
}

export default Section
