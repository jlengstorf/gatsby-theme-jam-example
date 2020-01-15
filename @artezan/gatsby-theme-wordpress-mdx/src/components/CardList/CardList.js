/** @jsx jsx */
import * as React from 'react'
import { Link } from 'gatsby'
import { jsx, Flex, Box, Styled } from 'theme-ui'

import { Card } from '../Card'

export const CardList = ({ listItems }) => {
  return (
    <>
      <Styled.div
        sx={{
          mb: 4
        }}
      />
      <Flex
        sx={{
          flexWrap: 'wrap',
          '> :nth-of-type(odd)': {
            pr: [0, 0, 4]
          }
        }}
      >
        {listItems.map((item, index) => {
          const { slug } = item

          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: ['100%', '100%', '50%']
              }}
            >
              <Link
                to={slug}
                sx={{
                  display: 'flex',
                  flex: '1 1 auto',
                  textDecoration: 'none',
                  borderRadius: 1,
                  mb: 4,
                  ':focus': {
                    outline: 'none',
                    boxShadow: theme =>
                      `${theme.shadows[0]} ${theme.colors.textMuted}`
                  }
                }}
              >
                <Card {...item} />
              </Link>
            </Box>
          )
        })}
      </Flex>
    </>
  )
}
