import { scaleLinear } from '@vx/scale'

export const colorRange = (a, b, amount) => {
  const colors = []
  const scale = scaleLinear({
    range: [a, b],
    domain: [1, amount]
  })

  for (let i = 0; i < amount; i++) {
    colors.push(scale(i))
  }

  return colors
}
