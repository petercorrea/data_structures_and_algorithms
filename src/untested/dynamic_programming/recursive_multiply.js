// Problem Statement:
// Write a recursive export const to multiply two positive integers
// without using the * operator  = (or / operator) =>. You can use addition,
// subtraction, and bit shifting, but you should minimize the number of those operations.

// Clarifications and Assumptions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
export const multiply = (a, b) => {
  const smaller = a < b ? a : b
  const larger = a > b ? a : b
  let result

  if (smaller % 2 === 0) {
    result = multiplyHelper(smaller >> 1, larger)
    return result + result
  }
  result = multiplyHelper(smaller - 1, larger)
  return result + larger
}

let multiplyHelper = (a, b) => {
  if (a <= 1) {
    return b
  }
  const result = multiplyHelper(a >> 1, b)
  return result + result
}

// Test:

// Notes after implementing:
