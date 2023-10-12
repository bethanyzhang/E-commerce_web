export const calculateTotal = (arr) => {
  if (arr.length === 0) return 0
  let total = arr.reduce((acc, val) => acc + val, 0)
  return total.toFixed(2)
}

export const datecalc = (str) => {
  return new Date(str).toString()
}