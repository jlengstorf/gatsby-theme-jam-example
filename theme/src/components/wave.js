/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import useSpring from "../stuff/use-spring"

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

function Wave({
  children,
  variant = "default",
  columnComponents = [],
  childrenToStepColumns,
}) {
  const ref = React.useRef()
  const currentStep = useCurrentStep(ref)
  const progress = useSpring({
    target: currentStep,
    round: p => Math.round(p * 100) / 100,
  })

  const columns = React.useMemo(() => {
    return childrenToStepColumns(children)
  }, [])

  return (
    <div ref={ref} sx={{ variant: `styles.waves.${variant}.Section` }}>
      {columns.map((columnSteps, columnIndex) => {
        const Component = columnComponents[columnIndex]
        //TODO rename currentStep to currentStepIndex
        return (
          <Component
            key={columnIndex}
            steps={columnSteps}
            progress={progress}
            variant={variant}
            currentStep={currentStep}
          />
        )
      })}
    </div>
  )
}

export default Wave
