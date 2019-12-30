/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

import { SideBarNavItem } from '../SideBarNavItem'
import { SideBarContext } from '../SideBarContext'

export const SideBarNavList = ({ links }) => {
  const { dispatch } = React.useContext(SideBarContext)
  const [currentActive, setCurrentActive] = React.useState('')

  const getProps = ({ isCurrent, isPartiallyCurrent, href }) => {
    if (isCurrent || (isPartiallyCurrent && href !== '/')) {
      setCurrentActive(href)
    } else if (currentActive === href) {
      setCurrentActive('/')
    }
  }

  return (
    <Styled.ul
      sx={{
        margin: 0,
        padding: 0
      }}
    >
      {links.map((link, index) => {
        const { slug, title, icon } = link

        const isActive = slug === currentActive ? true : false

        return (
          <Styled.li
            key={index}
            sx={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              a: {
                textDecoration: 'none'
              }
            }}
          >
            <Link
              getProps={getProps}
              onClick={() => dispatch({ type: 'closeNav' })}
              to={slug}
              sx={{
                display: 'block',
                borderRadius: 2,
                cursor: 'pointer',
                mb: 3,
                // ! the padding is to allow for the box-shadow focus stateof the <SideBarNavItem />
                padding: '0 2px',
                ':focus ': {
                  outline: 'none',
                  div: {
                    boxShadow: theme =>
                      `${theme.colors.shadowCard} ${theme.colors.textMuted}`
                  }
                }
              }}
            >
              <SideBarNavItem
                title={title}
                icon={icon}
                isActive={isActive ? true : false}
              />
            </Link>
          </Styled.li>
        )
      })}
    </Styled.ul>
  )
}
