export const fibonacci = (n) => {
  if (n < 2) return n

  return fibonacci(n - 2) + fibonacci(n - 1)
}

export const fibonacciMemo = (n) => {
  const dp = []

  const solveRecursive = (n) => {
    if (n < 2) return n

    if (dp[n]) return dp[n]

    dp[n] = solveRecursive(n - 2) + solveRecursive(n - 1)
    return dp[n]
  }

  return solveRecursive(n)
}

export const fibonacciDp = (n) => {
  if (n < 2) return n

  const dp = [0, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  return dp[n]
}
