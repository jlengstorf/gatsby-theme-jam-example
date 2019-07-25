/** @jsx jsx */
import { jsx } from "theme-ui"
import useSpring from "../stuff/use-spring"

function Scroller({ steps, currentStep, progress, variant }) {
  const fasterProgress = useSpring({
    target: currentStep,
    tension: 50,
    round: p => Math.round(p * 100) / 100,
  })
  const startBorder = Math.min(fasterProgress, progress)
  const endBorder = Math.max(fasterProgress, progress)

  const progressStyles = steps.map((_, i) => {
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
    <div
      sx={{ variant: `styles.waves.${variant}.ScrollerContainer` }}
      className="scroller"
    >
      {steps.map((step, i) => (
        <div
          sx={{
            variant: `styles.waves.${variant}.ScrollerStep`,
          }}
          key={i}
        >
          <div
            sx={{ variant: `styles.waves.${variant}.ScrollerProgress` }}
            style={progressStyles[i]}
          />
          {step}
        </div>
      ))}
    </div>
  )
}

export default Scroller
