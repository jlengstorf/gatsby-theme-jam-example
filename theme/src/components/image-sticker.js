/** @jsx jsx */
import { jsx } from "theme-ui"

function ImageSticker({ progress, steps, variant }) {
  const currentStep = Math.round(progress)
  const prev = steps[currentStep - 1]
  const curr = steps[currentStep]
  const next = steps[currentStep + 1]

  return (
    <div sx={{ variant: `styles.waves.${variant}.StickerContainer` }}>
      <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
        <div
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "background",
          }}
        />
        {prev && (
          <div
            sx={{ position: "absolute", height: "100%", width: "100%" }}
            style={{ opacity: Math.max(0, currentStep - progress) }}
            key={currentStep - 1}
          >
            {prev}
          </div>
        )}
        <div
          sx={{ position: "absolute", height: "100%", width: "100%" }}
          style={{ opacity: 1 - Math.abs(currentStep - progress) }}
          key={currentStep}
        >
          {curr}
        </div>
        {next && (
          <div
            sx={{ position: "absolute", height: "100%", width: "100%" }}
            style={{ opacity: Math.max(0, progress - currentStep) }}
            key={currentStep + 1}
          >
            {next}
          </div>
        )}
        <div
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(1,1,1,0.6)",
          }}
        />
      </div>
    </div>
  )
}

export default ImageSticker
