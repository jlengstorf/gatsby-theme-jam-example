/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'

export const Landing = () => (
  <Styled.div>
    <Flex
      sx={{
        flexWrap: 'wrap'
      }}
    >
      <Box
        sx={{
          width: '100%'
        }}
      >
        <div>BOX1</div>
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pr: [0, 0, 2],
          pb: 3
        }}
      >
        <div>BOX1</div>
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pl: [0, 0, 2],
          pb: 3
        }}
      >
         <div>BOX1</div>
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pr: [0, 0, 2],
          pb: 3
        }}
      >
        <div>BOX1</div>
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pl: [0, 0, 2],
          pb: 3
        }}
      >
        <div>BOX1</div>
      </Box>
    </Flex>
  </Styled.div>
)
