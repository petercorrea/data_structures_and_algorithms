// You have planned some train traveling one year in advance.
// The days of the year in which you will travel are given as an integer array days.Each day is an integer from 1 to 365.
// Train tickets are sold in three different ways:
//      a 1-day pass is sold for costs[0] dollars,
//      a 7-day pass is sold for costs[1] dollars, and
//      a 30-day pass is sold for costs[2] dollars.
// The passes allow that many days of consecutive travel.

// For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.
// Return the minimum number of dollars you need to travel every day in the given list of days.

export const minCosts = (days, costs) => {
  // setup table
  const dp = new Array(costs.length).fill(0).map(() => new Array(days[days.length - 1] + 1).fill(0))
  const windows = [1, 7, 30]

  for (let i = 1; i < dp[0].length; i++) {
    if (days.includes(i)) {
      dp[0][i] = dp[0][i - 1] + costs[0]
    } else {
      dp[0][i] = dp[0][i - 1]
    }
  }

  for (let r = 1; r < dp.length; r++) {
    for (let c = 1; c < dp[0].length; c++) {
      const above = dp[r - 1][c]
      const days1 = dp[r][Math.max(0, c - windows[0])] + costs[0]
      const days7 = dp[r][Math.max(0, c - windows[1])] + costs[1]
      const days30 = dp[r][Math.max(0, c - windows[2])] + costs[2]

      if (days.includes(c)) {
        dp[r][c] = Math.min(above, days1, days7, days30)
      } else {
        // if we are not traveling on this day, let it equal the previous day
        dp[r][c] = dp[r][c - 1]
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1]
}
minCosts([1, 4, 6, 7, 8, 20], [2, 7, 15])
