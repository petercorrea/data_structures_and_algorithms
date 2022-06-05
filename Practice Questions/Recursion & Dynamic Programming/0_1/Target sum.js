// Problem Statement
// Given a set of positive numbers (non zero) and a target sum ‘S’.
// Each number should be assigned either a ‘+’ or ‘-’ sign.
// We need to find out total ways to assign symbols to make the sum of numbers equal to target ‘S’.

export const targetSum = (num, sum) => {
  const solveRecursive = (num, sum, currentIndex) => {
    if (sum === 0 && currentIndex === num.length) return 1
    if (currentIndex >= num.length) return 0

    const choice = num[currentIndex]

    const set1 = solveRecursive(num, sum - choice, currentIndex + 1)
    const set2 = solveRecursive(num, sum + choice, currentIndex + 1)

    return set1 + set2
  }

  return solveRecursive(num, sum, 0)
}

export const targetSumMemo = (num, sum) => {
  const dp = []
  const solveRecursive = (num, sum, currentIndex) => {
    if (sum === 0 && currentIndex === num.length) return 1
    if (currentIndex >= num.length) return 0

    dp[currentIndex] = dp[currentIndex] || []
    const choice = num[currentIndex]

    if (typeof dp[currentIndex][num] === "undefined") {
      const set1 = solveRecursive(num, sum - choice, currentIndex + 1)
      const set2 = solveRecursive(num, sum + choice, currentIndex + 1)

      dp[currentIndex][sum] = set1 + set2
    }

    return dp[currentIndex][sum]
  }

  return solveRecursive(num, sum, 0)
}
