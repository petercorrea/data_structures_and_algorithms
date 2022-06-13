// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

export const bestTime = (prices) => {
  let min = Number.MAX_SAFE_INTEGER
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    // compare previous max profit to current profit
    profit = Math.max(profit, prices[i] - min)
  }

  return profit
}
