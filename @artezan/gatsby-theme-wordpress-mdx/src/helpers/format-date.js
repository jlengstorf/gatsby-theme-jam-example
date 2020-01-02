export const formatDate = date => {
  const newDate = new Date(date)
  const days = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  return `${days}/${month}/${year}`
}
