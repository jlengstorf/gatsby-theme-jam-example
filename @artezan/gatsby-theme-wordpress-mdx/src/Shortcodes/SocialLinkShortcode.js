/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Icon } from '../components/Icon'
export const SocialLink = ({
  iconPath,
  sx = {},
  text = '',
  iconFill = 'currentcolor',
  iconSize = 50,
  href = '#'
}) => {
  return (
    <Styled.a
      href={href}
      sx={{
        color: 'primary',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 2,
        textTransform: 'capitalize',
        transition: '.2s linear background-color, .2s linear color',
        fontFamily: 'body',
        fontSize: 2,
        fontWeight: theme => theme.fontWeights.body,
        lineHeight: 'normal',
        textDecoration: 'none',
        outline: 'none',

        ':hover': {
          color: 'secondary'
        },
        ...sx
      }}
    >
      {iconPath && (
        <Icon
          iconPath={iconPath}
          iconFill={iconFill}
          iconSize={iconSize}
          showBackground={false}
        />
      )}
      {text}
    </Styled.a>
  )
}
