import { useState, useEffect } from 'react'

export default ({previousPage, nextPage}, navigate) => {
  const [touchStart, setTouchStart] = useState(null)
  const [isSwiping, setIsSwiping] = useState(false)
  const [swipePosition, setSwipePosition] = useState(null)

  const onTouchMove = (event) => {
    if (!touchStart) return
    const { pageX: x, pageY: y } = event.touches[0]
    const deltaX = x - touchStart.x
    const deltaY = y - touchStart.y
    setIsSwiping(true)
    setSwipePosition({ deltaX, deltaY })
  }

  const onTouchStart = (event) => {
    const { pageX: x, pageY: y } = event.touches[0]
    setTouchStart({ x, y });
  }

  const onTouchEnd = () => {
    if (isSwiping && swipePosition) {
      if (swipePosition.deltaX < 0 && nextPage) {
        navigate(nextPage)
      } else if (swipePosition.deltaX > 0 && previousPage) {
        navigate(previousPage)
      }
    }

    setTouchStart(null)
    setIsSwiping(false)
    setSwipePosition(null)
  }

  useEffect(() => {
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  })
}
