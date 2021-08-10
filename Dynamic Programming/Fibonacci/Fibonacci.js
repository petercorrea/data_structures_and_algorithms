const fibonacci = function (n) {
  if (n < 2) return n

  return fibonacci(n - 2) + fibonacci(n - 1)
}

const fibonacciMemo = function (n) {
  const dp = []

  function solveRecursive(n) {
    if (n < 2) return n

    if (dp[n]) return dp[n]

    dp[n] = solveRecursive(n - 2) + solveRecursive(n - 1)
    return dp[n]
  }

  return solveRecursive(n)
}

const fibonacciDp = function (n) {
  if (n < 2) return n

  const dp = [0, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  return dp[n]
}

console.log(`5th Fibonacci is ---> ${fibonacciDp(5)}`)
console.log(`6th Fibonacci is ---> ${fibonacciDp(6)}`)
console.log(`7th Fibonacci is ---> ${fibonacciDp(7)}`)
