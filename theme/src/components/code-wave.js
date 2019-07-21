/** @jsx jsx */
import { jsx, useColorMode, useThemeUI } from "theme-ui"
import React from "react"
import CodeSurfer from "code-surfer/dist/standalone.esm"
import { readStepFromElement } from "../stuff/step-reader"

function CodeWave({ steps, progress }) {
  const s = steps.map(element => {
    const parsedStep = readStepFromElement(element)
    return parsedStep
  })
  const { colorMode, theme: themeUI } = useThemeUI()
  const codeThemes = themeUI.styles.waves.theme
  const theme = codeThemes[colorMode] || codeThemes.default

  return (
    <div
      sx={{
        variant: "styles.waves.CodeContainer",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div sx={{ variant: "styles.waves.CodeSticker" }}>
          <CodeSurfer progress={progress} steps={s} theme={theme} />
        </div>
      </div>
    </div>
  )
}

export default CodeWave
