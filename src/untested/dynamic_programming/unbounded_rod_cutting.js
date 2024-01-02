export const solveRodCuttingDp = (profits, lengths, rodLength) => {
  const n = profits.length

  if (profits.length !== lengths.length || rodLength <= 0 || n === 0) return 0

  const dp = Array(n)
    .fill(0)
    .map(() => Array(rodLength + 1).fill(0))

  for (let i = 0; i < n; i++) {
    for (let l = 0; l <= rodLength; l++) {
      let profit1 = 0
      let profit2 = 0

      if (lengths[i] <= l) {
        profit1 = profits[i] + dp[i][l - lengths[i]]
      }

      if (i > 0) {
        profit2 = dp[i - 1][l]
      }

      dp[i][l] = Math.max(profit1, profit2)
    }
  }

  return dp[n - 1][rodLength]
}
