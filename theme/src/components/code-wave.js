/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import CodeSurfer from "code-surfer/dist/standalone.esm"
import { readStepFromElement } from "../stuff/step-reader"

function CodeWave({ steps: stepElements, progress, variant }) {
  const steps = React.useMemo(
    () =>
      stepElements.map(element => {
        const parsedStep = readStepFromElement(element)
        return parsedStep
      }),
    []
  )

  const { colorMode, theme: themeUI } = useThemeUI()
  const codeThemes = themeUI.styles.waves[variant].theme
  const theme = codeThemes[colorMode] || codeThemes.default

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
          <CodeSurfer progress={progress} steps={steps} theme={theme} />
        </div>
      </div>
    </div>
  )
}

export default CodeWave
