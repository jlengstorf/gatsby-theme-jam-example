export const formatPathname = pathname => {
  const pathsArr = pathname.split('/')

  if (pathsArr.length >= 3) {
    return `${pathsArr[1].charAt(0).toUpperCase()}${pathsArr[1].slice(1)}`
  }

  return ''
}
