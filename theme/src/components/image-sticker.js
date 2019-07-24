/** @jsx jsx */
import { jsx } from "theme-ui"

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

export default ImageSticker
