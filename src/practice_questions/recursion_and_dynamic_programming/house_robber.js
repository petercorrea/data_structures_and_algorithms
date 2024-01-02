// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have
// security systems connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

export const houseRobber = (houses) => {
  const recurse = (houses, cache = {}, sum = 0, index = 0) => {
    // guard
    if (houses.length === 1) return houses[0]
    // base case
    if (index >= houses.length) return sum

    // check cache
    if (cache[`${sum}-${index}`] !== undefined) return cache[`${sum}-${index}`]

    // rob and skip adjacent house
    const rob = recurse(houses, cache, sum + houses[index], index + 2)
    // dont rob and go to adjacent house
    const dontRob = recurse(houses, cache, sum, index + 1)

    // fill cache
    cache[`${sum}-${index}`] = Math.max(rob, dontRob)
    return cache[`${sum}-${index}`]
  }

  // we can start on the first or second house
  return Math.max(recurse(houses, {}, 0, 0), recurse(houses, {}, 0, 1))
}

export const houseRobberDP = (houses) => {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]
  if (houses.length === 2) return Math.max(houses[0], houses[1])

  const dp = new Array(houses.length).fill(0)
  let max = Math.max(houses[0], houses[1])
  dp[0] = houses[0]
  dp[1] = max

  for (let i = 2; i < houses.length; i++) {
    const rob = houses[i] + dp[i - 2]
    const dontRob = dp[i - 1]

    dp[i] = Math.max(rob, dontRob)
    max = Math.max(max, dp[i])
  }

  return max
}
