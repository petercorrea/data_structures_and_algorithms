// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed.All houses at this place
// are arranged in a circle.That means the first house is the neighbor of the last one.
// Meanwhile, adjacent houses have a security system connected, and it will
// automatically contact the police if two adjacent houses were broken into
// on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

export const houseRobber2 = (houses) => {
  const recurse = (houses, startIdx, index = 0, cache = {}, sum = 0) => {
    if (index > houses.length - 1) return sum
    if (houses.length === 0) return 0
    if (houses.length === 1) return houses[0]
    if (index === houses.length - 1 && startIdx === 0) return sum

    if (cache[`${sum}-${index}`]) return cache[`${sum}-${index}`]

    const rob = recurse(houses, startIdx, index + 2, cache, sum + houses[index])
    const dontRob = recurse(houses, startIdx, index + 1, cache, sum)

    cache[`${sum}-${index}`] = Math.max(rob, dontRob)
    return cache[`${sum}-${index}`]
  }

  const firstHouse = recurse(houses, 0, 0)
  const secondHouse = recurse(houses, 1, 1)
  return Math.max(firstHouse, secondHouse)
}

export const houseRobber2DP = (houses) => {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]
  if (houses.length === 2) return Math.max(houses[0], houses[1])

  // start on first house
  const dp = new Array(houses.length).fill(0)
  dp[0] = houses[0]
  dp[1] = Math.max(houses[0], houses[1])

  for (let i = 2; i < houses.length; i++) {
    const rob = houses[i] + dp[i - 2]
    const dontRob = Math.max(dp[i - 1], dp[i - 2])
    dp[i] = Math.max(rob, dontRob)
  }

  // cant steal the last house
  dp[dp.length - 1] = Math.max(dp[dp.length - 2], dp[dp.length - 3])
  const maxFirst = Math.max(dp[dp.length - 1], dp[dp.length - 2])

  // start on second house
  const dp2 = new Array(houses.length - 1).fill(0)
  dp2[0] = houses[1]
  dp2[1] = Math.max(houses[1], houses[2])

  for (let i = 3; i < houses.length; i++) {
    const rob = houses[i] + dp2[i - 3]
    const dontRob = Math.max(dp2[i - 2], dp2[i - 3])
    dp2[i - 1] = Math.max(rob, dontRob)
  }
  const maxSecond = Math.max(dp2[dp2.length - 1], dp2[dp2.length - 2])
  return Math.max(maxFirst, maxSecond)
}
