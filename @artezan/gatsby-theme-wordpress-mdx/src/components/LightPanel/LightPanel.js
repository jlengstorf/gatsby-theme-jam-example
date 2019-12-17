/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { SideBarContext } from '../SideBarContext'

export const LightPanel = () => {
  const { state, dispatch } = React.useContext(SideBarContext)
  return (
    <Styled.div
      sx={{
        position: 'fixed',
        backgroundColor: '#000',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: state.isNavOpen ? 0.5 : 0.5,
        cursor: state.isNavOpen ? 'pointer' : 'auto',
        zIndex: 3,
        transition: '.2s linear opacity',
        display: `${state.isNavOpen ? 'block' : 'none'}`
      }}
      onClick={() => dispatch({ type: 'closeNav' })}
    />
  )
}
