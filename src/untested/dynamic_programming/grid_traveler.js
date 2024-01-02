// Grid Traveler
// Given an n*m board, a player will start on the most upper left corner and
// work their way towards the most bottom right corner.
// The player on each move can only move one square to the down
// or one square to the right. Determine how many moves the player would have to make to
// end the game.

// Recursive
// TC: 2^(n+m)
// SC: n+m
export const gridTraveler = (m, n) => {
  if (m === 0 || n === 0) return 0
  if (m === 1 && n === 1) return 1
  if (m < 0 || n < 0) return 0

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

// Memo
// TC: n*m
// SP: n+m
export const gridTravelerMemo = (m, n, memo = {}) => {
  if (m === 0 || n === 0) return 0
  if (m === 1 && n === 1) return 1

  const key = `${m}-${n}`
  if (key in memo) return memo[key]

  memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo)
  return memo[key]
}

// Formulaic
// TC: n*m
// SP: 1
const factorial = (n) => {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

export const gridTravelerFormulaic = (r, d) => {
  const R = r - 1
  const D = d - 1
  return factorial(R + D) / (factorial(R) * factorial(D))
}
