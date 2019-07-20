/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import React from "react"
import CodeSurfer from "code-surfer/dist/standalone.esm"
import { readStepFromElement } from "./step-reader"
import styles from "./styles"

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

export default CodeWave
