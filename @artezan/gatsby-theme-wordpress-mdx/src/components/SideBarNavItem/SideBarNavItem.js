/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Icon } from '../Icon'

export const SideBarNavItem = ({ icon, title, isActive }) => (
  <Styled.div
    sx={{
      color: isActive ? 'secondary' : 'primary',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: isActive ? 'surface' : 'transparent',
      borderRadius: 2,
      textTransform: 'capitalize',
      pt: 3,
      pb: 3,
      pl: 4,
      pr: 4,
      transition: '.2s linear background-color, .2s linear color',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: theme => theme.fontWeights.body,
      lineHeight: 'normal',
      textDecoration: 'none',
      outline: 'none',
      svg: {
        marginRight: 2
      },

      ':hover': {
        color: 'secondary',
        backgroundColor: 'surface'
      }
    }}
  >
    <Icon iconPath={icon} />
    {title}
  </Styled.div>
)
