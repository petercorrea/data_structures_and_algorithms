const countRibbonPieces = function (lengths, total) {
  function solveRecursive(lengths, total, currentIndex) {
    if (total === 0) return 0

    if (lengths.length === 0 || currentIndex >= lengths.length) {
      return Number.MIN_VALUE
    }

    let set1 = Number.MIN_VALUE
    if (lengths[currentIndex] <= total) {
      set1 = solveRecursive(
        lengths,
        total - lengths[currentIndex],
        currentIndex
      )
    }

    if (set1 !== Number.MIN_VALUE) {
      set1 += 1
    }

    const set2 = solveRecursive(lengths, total, currentIndex + 1)
    return Math.max(set1, set2)
  }

  const result = solveRecursive(lengths, total, 0)
  return result === Number.MIN_VALUE ? -1 : result
}

const countRibbonPiecesDp = function (lengths, total) {
  const n = lengths.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(total + 1).fill(0))

  for (let i = 0; i < n; i++) {
    for (let s = 0; s <= total; s++) {
      dp[i][s] = Number.MIN_VALUE
    }
  }

  for (let i = 0; i < n; i++) {
    dp[i][0] = 0
  }

  for (let i = 0; i < n; i++) {
    for (let s = 1; s <= total; s++) {
      if (i > 0) {
        dp[i][s] = dp[i - 1][s]
      }

      if (lengths[i] <= s && dp[i][s - lengths[i]] !== Number.MIN_VALUE) {
        dp[i][s] = Math.max(dp[i][s], dp[i][s - lengths[i]] + 1)
      }
    }
  }

  return dp[n - 1][total] === Number.MIN_VALUE ? -1 : dp[n - 1][total]
}

console.log(
  `Maximum number of ribbons: ---> ${countRibbonPiecesDp([2, 3, 5], 5)}`
)
console.log(`Maximum number of ribbons: ---> ${countRibbonPiecesDp([2, 3], 7)}`)
console.log(
  `Maximum number of ribbons: ---> ${countRibbonPiecesDp([3, 5, 7], 13)}`
)
console.log(`Maximum number of ribbons: ---> ${countRibbonPiecesDp([3, 5], 7)}`)
