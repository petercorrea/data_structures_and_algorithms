const CountWays = function (n) {
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return 1
  }

  if (n === 2) {
    return 1
  }

  if (n === 3) {
    return 2
  }

  const subtract1 = CountWays(n - 1)
  const subtract3 = CountWays(n - 3)
  const subtract4 = CountWays(n - 4)

  return subtract1 + subtract3 + subtract4
}

const CountWaysMemo = function (n) {
  const dp = []

  function CountWaysRecursive(n) {
    if (n === 0) return 1
    if (n === 1) return 1
    if (n === 2) return 1
    if (n === 3) return 2

    if (typeof dp[n] === "undefined") {
      const subtract1 = CountWaysRecursive(n - 1)
      const subtract3 = CountWaysRecursive(n - 3)
      const subtract4 = CountWaysRecursive(n - 4)
      dp[n] = subtract1 + subtract3 + subtract4
    }

    return dp[n]
  }
  return CountWaysRecursive(n)
}

const CountWaysDp = function (n) {
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  dp[2] = 1
  dp[3] = 2

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 3] + dp[i - 4]
  }

  return dp[n]
}

console.log(`Number of ways: ---> ${CountWaysDp(4)}`)
console.log(`Number of ways: ---> ${CountWaysDp(5)}`)
console.log(`Number of ways: ---> ${CountWaysDp(6)}`)
