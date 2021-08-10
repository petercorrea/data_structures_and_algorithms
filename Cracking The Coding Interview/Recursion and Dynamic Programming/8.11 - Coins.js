// Problem Statement:
// Given an infinite number of quarters (25 cents), dimes (1O cents),
// nickels(5 cents), and pennies(1 cent), write code to calculate
// the number of ways of representing n cents.

// Clarifing Questions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
const coins = (n, memo = {}) => {
  if (n < 0) {
    return 0
  }

  if (n == 0) {
    return 1
  }

  if (typeof memo[n] !== "undefined") {
    return memo[n]
  }
  memo[n] =			coins(n - 25, memo)
			+ coins(n - 10, memo)
			+ coins(n - 5, memo)
			+ coins(n - 1, memo)

  return memo[n]
}

// Test:
console.log(coins(100)) // result

// Notes after implementing:
