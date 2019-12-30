import baseTheme from 'gatsby-theme-wordpress-mdx/src/gatsby-plugin-theme-ui'
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    modes: {
      light: {
        ...baseTheme.colors.modes.light,
        primary: '#2b62d6',
        backgroundHeader: 'linear-gradient(#f0f4fc, #f0f4fc)',
        backgroundFeatures: 'linear-gradient(#f0f4fc, #d0dcf6)',
        backgroundAbout: 'linear-gradient(#d0dcf6, #9eb7ec)',
        backgroundFooter: 'linear-gradient(#9eb7ec, #d0dcf6)',
        backgroundPost: 'linear-gradient(#d0dcf6, #f0f4fc)',
      }
    }
  }
}
