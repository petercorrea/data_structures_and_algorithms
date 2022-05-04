// Problem Statement:
// Implement an algorithm to print all valid (i.e., properly opened and closed) combinations of n pairs of parentheses.

// Clarifications and Assumptions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
const parens = (n) => parensHelper(n)

let parensHelper = (
  max = 0,
  sum = 0,
  depth = max * 2,
  result = [],
  string = ""
) => {
  if (max === 0) return null
  if (depth < 0 || sum > max || sum < 0) {
    return []
  }

  if (sum === 0 && depth === 0) {
    return result.push(string)
  }

  const str1 = `${string}(`
  const str2 = `${string})`

  parensHelper(max, sum + 1, depth - 1, result, str1)
  parensHelper(max, sum - 1, depth - 1, result, str2)

  return result
}
// Test:
// result
console.log(parens(4))
// Notes after implementing:
