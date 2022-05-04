export const CountWays = (n) => {
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return 1
  }

  if (n === 2) {
    return 2
  }

  const take1Step = CountWays(n - 1)
  const take2Step = CountWays(n - 2)
  const take3Step = CountWays(n - 3)

  return take1Step + take2Step + take3Step
}

export const CountWaysMemo = (n) => {
  const dp = []

  const solveRecursive = (n) => {
    if (n === 0) {
      return 1
    }

    if (n === 1) {
      return 1
    }

    if (n === 2) {
      return 2
    }

    if (typeof dp[n] === "undefined") {
      const take1Step = CountWaysMemo(n - 1)
      const take2Step = CountWaysMemo(n - 2)
      const take3Step = CountWaysMemo(n - 3)
      dp[n] = take1Step + take2Step + take3Step
    }
    return dp[n]
  }
  return solveRecursive(n)
}

const CountWaysDp = (n) => {
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n]
}

console.log(`Number of ways: ---> ${CountWaysDp(3)}`)
console.log(`Number of ways: ---> ${CountWaysDp(4)}`)
console.log(`Number of ways: ---> ${CountWaysDp(5)}`)
