// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
// Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

export const minCostRecursion = (costs) => {
  const recurse = (costs, cost, cache, index) => {
    // check cache
    if (cache[`${cost}-${index}`]) return cache[`${cost}-${index}`]

    // base cases
    if (index >= costs.length) {
      return cost
    }

    // one step, two step
    const oneStep = recurse(costs, cost + costs[index], cache, index + 1)
    const twoStep = recurse(costs, cost + costs[index], cache, index + 2)
    const min = Math.min(oneStep, twoStep)

    // fill cache
    cache[`${cost}-${index}`] = min
    return cache[`${cost}-${index}`]
  }

  const cache = {}
  return Math.min(recurse(costs, 0, cache, 0), recurse(costs, 0, cache, 1))
}

// Top Down
export const minCostDP = (costs) => {
  function minCost(n, costs, dp) {
    // guard
    if (n < 0) return 0
    // base case
    if (n === 1 || n === 0) return costs[n]
    // check cache, could be "0"
    if (dp[n] !== undefined) return dp[n]

    // set the cache, this min cost is current cost + cost of taking next step(s)
    dp[n] = costs[n] + Math.min(minCost(n - 1, costs, dp), minCost(n - 2, costs, dp))

    return dp[n]
  }

  const n = costs.length
  const dp = []
  return Math.min(minCost(n - 1, costs, dp), minCost(n - 2, costs, dp))
}

// Bottom Up
export const minCostIterative = (costs) => {
  const dp = []
  const n = costs.length
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      dp[i] = costs[i]
    } else {
      dp[i] = costs[i] + Math.min(dp[i - 1], dp[i - 2])
    }
  }

  return Math.min(dp[n - 1], dp[n - 2])
}
