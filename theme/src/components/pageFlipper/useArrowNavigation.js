import { useEffect } from "react"

export default ({ nextPage, previousPage }, onNavigate) => {
  const handleKeyStroke = e => {
    if (e.keyCode === 37 && previousPage) {
      onNavigate(previousPage.path)
    }

    if (e.keyCode === 39 && nextPage) {
      onNavigate(nextPage.path)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyStroke)

    return () => {
      window.removeEventListener("keydown", handleKeyStroke)
    }
  }, [])
}
