export const findMaxSteal = (wealth) => {
  const findMaxStealRecursive = (wealth, currentIndex) => {
    if (currentIndex >= wealth.length) return 0

    // steal from current house and skip one to steal from the next house
    const stealCurrent = wealth[currentIndex] + findMaxStealRecursive(wealth, currentIndex + 2)
    // skip current house to steel from the adjacent house
    const skipCurrent = findMaxStealRecursive(wealth, currentIndex + 1)

    return Math.max(stealCurrent, skipCurrent)
  }
  return findMaxStealRecursive(wealth, 0)
}

export const findMaxStealMemo = (wealth) => {
  const dp = []

  const findMaxStealRecursive = (wealth, currentIndex) => {
    if (currentIndex >= wealth.length) return 0

    if (typeof dp[currentIndex] === "undefined") {
      // steal from current house and skip one to steal from the next house
      const stealCurrent = wealth[currentIndex] + findMaxStealRecursive(wealth, currentIndex + 2)
      // skip current house to steel from the adjacent house
      const skipCurrent = findMaxStealRecursive(wealth, currentIndex + 1)

      dp[currentIndex] = Math.max(stealCurrent, skipCurrent)
    }
    return dp[currentIndex]
  }
  return findMaxStealRecursive(wealth, 0)
}

export const findMaxStealDp = (wealth) => {
  if (wealth.length === 0) return 0
  const dp = Array(wealth.length + 1).fill(0) // '+1' to handle the zero house
  dp[0] = 0 // if there are no houses, the thief can't steal anything
  dp[1] = wealth[0] // only one house, so the thief have to steal from it

  // please note that dp[] has one extra element to handle zero house
  for (let i = 1; i < wealth.length; i++) {
    dp[i + 1] = Math.max(wealth[i] + dp[i - 1], dp[i])
  }

  return dp[wealth.length]
}
