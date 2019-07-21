import { parse } from "shell-quote"

export function readStepFromElement(element) {
  if (!element.props.children || !element.props.children.props) {
    return null
  }
  const { props } = element.props.children
  const className = props.className
  return {
    code: props.children,
    lang: className.substring("language-".length),
    ...parseMetastring(props.metastring),
  }
}

function parseMetastring(metastring) {
  if (!metastring) {
    return {}
  }

  const argv = parse(metastring)

  const result = {}
  argv.forEach(arg => {
    if (!arg.includes("=")) {
      result.focus = arg
    } else {
      const [key, value] = arg.split(/=(.*)/)
      result[key] = { value }
    }
  })
  return result
}
