/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Icon } from '../Icon'

export const ButtonIcon = ({ iconPath, ...rest }) => {
  return (
    <button
      {...rest}
      sx={{
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'primary',
        backgroundColor: 'surface',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'bold',
        m: 0,
        p: 0,
        border: 0,
        borderRadius: 2,
        outline: 'none',
        //TODO widths and heights need to match ToggleSwitch so should be part of the theme
        minWidth: 48,
        height: 48,
        ':focus ': {
          boxShadow: theme =>
            `${theme.colors.shadowCard} ${theme.colors.textMuted}`
        }
      }}
    >
      <Icon iconPath={iconPath} />
    </button>
  )
}
