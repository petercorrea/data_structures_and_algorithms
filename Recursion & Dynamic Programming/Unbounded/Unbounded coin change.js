export const coinChange = (coins, sum) => {
  const solveRecursive = (coins, sum, currentIndex) => {
    if (sum === 0) return 1
    if (coins.length === 0 || currentIndex >= coins.length) return 0

    let sum1 = 0
    if (coins[currentIndex] <= sum) {
      sum1 = solveRecursive(coins, sum - coins[currentIndex], currentIndex)
    }

    const sum2 = solveRecursive(coins, sum, currentIndex + 1)

    return sum1 + sum2
  }

  return solveRecursive(coins, sum, 0)
}

export const coinChangeMemo = (coins, sum) => {
  const dp = []

  const solveRecursive = (coins, sum, currentIndex) => {
    if (sum === 0) return 1
    if (coins.length === 0 || currentIndex >= coins.length) return 0

    dp[currentIndex] = dp[currentIndex] || []

    if (typeof dp[currentIndex][sum] === "undefined") {
      let sum1 = 0
      if (coins[currentIndex] <= sum) {
        sum1 = solveRecursive(coins, sum - coins[currentIndex], currentIndex)
      }

      const sum2 = solveRecursive(coins, sum, currentIndex + 1)

      dp[currentIndex][sum] = sum1 + sum2
    }

    return dp[currentIndex][sum]
  }

  return solveRecursive(coins, sum, 0)
}

const coinChangeDp = (coins, sum) => {
  const n = coins.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0))

  for (let i = 0; i < n; i++) {
    dp[i][0] = 1
  }

  for (let i = 0; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      if (i > 0) dp[i][s] = dp[i - 1][s]
      if (coins[i] <= s) dp[i][s] += dp[i][s - coins[i]]
    }
  }

  return dp[n - 1][sum]
}

console.log(`Number of ways to make change: ---> ${coinChangeDp([1, 2, 3], 5)}`)
