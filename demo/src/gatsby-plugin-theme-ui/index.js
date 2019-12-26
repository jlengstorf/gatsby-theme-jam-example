import baseTheme from 'gatsby-theme-wordpress-mdx/src/gatsby-plugin-theme-ui'
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    modes: {
      light: {
        ...baseTheme.colors.modes.light,
        primary: '#2b62d6',
        gradient0: 'linear-gradient(#f0f4fc, #f0f4fc)',
        gradient1: 'linear-gradient(#f0f4fc, #d0dcf6)',
        gradient2: 'linear-gradient(#d0dcf6, #9eb7ec)',
        gradient3: 'linear-gradient(#9eb7ec, #d0dcf6)',
        gradient4: 'linear-gradient(#d0dcf6, #f0f4fc)',
      }
    }
  }
}
