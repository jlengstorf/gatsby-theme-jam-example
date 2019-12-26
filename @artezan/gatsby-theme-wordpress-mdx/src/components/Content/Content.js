/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'

const commonStyles = {
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  minHeight: 0,
  minWidth: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  // Special case to allow for Card <a> to have box-shadow focus state
  paddingTop: 2
}

export const Content = ({ children, config, gradient }) => {
  const context = useThemeUI()
  console.log(context)
  const background = config.backgroundGradient
    ? { backgroundImage: theme => theme.colors[gradient] }
    : { backgroundColor: theme => theme.colors.background }
  return (
    <Styled.div
      sx={{
        ...commonStyles,
        zIndex: '2',
        position: 'relative',
        ...background
        // backgroundColor: theme => theme.colors.background
      }}
    >
      <Styled.div
        sx={{
          ...commonStyles,
          paddingLeft: [3, 4],
          paddingRight: [3, 4],
          overflow: 'hidden',
          transition: theme => theme.sideBarTranstion
        }}
      >
        {children}
      </Styled.div>
    </Styled.div>
  )
}
