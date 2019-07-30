import facepaint from "facepaint"

// As we are doing mobile first, mobile breakpoints are not needed
// but those are mobileMinWidth = 320px and mobileMaxWidth = 599

// Desktop maximum width will be 1440px.

const tabletMinWidth = 600
const tabletMaxWidth = 899
const desktopMinWidth = 900

const mediaQuery = facepaint([
  `@media (min-width: ${tabletMinWidth}px) and (max-width: ${tabletMaxWidth}px)`,
  `@media (min-width: ${desktopMinWidth}px)`,
])

export default mediaQuery
