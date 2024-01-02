// Given n pairs of parentheses, write a function to
// generate all combinations of well - formed parentheses.

export const generateParenthesis = (value) => {
  const result = []

  const recurse = (open, close, arr, current) => {
    // base case
    if (open === 0 && close === 0) {
      arr.push(current)
      return
    }

    // general cases
    if (open > 0) {
      recurse(open - 1, close, arr, `${current}(`)
    }

    if (open < close) {
      recurse(open, close - 1, arr, `${current})`)
    }
  }

  recurse(value, value, result, "")
  return result
}
