// Given an array of coins, determine the minimum amount of coins needed to reach a target sum

function minNumberOfCoinsForChange(n, denoms) {
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < denoms.length; i++) {
    const coin = denoms[i]

    for (let j = 1; j < dp.length; j++) {
      if (coin <= j) {
        dp[j] = Math.min(dp[j], 1 + dp[j - coin])
      }
    }
  }

  return dp[n] !== Infinity ? dp[n] : -1
}

console.log(minNumberOfCoinsForChange(11, [1, 5, 10]))
