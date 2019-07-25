import deepmerge from "deepmerge"
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index"

export default deepmerge(blogTheme, wavesTheme)
