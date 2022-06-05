// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// Sample Input
// const dailyPrices = [7, 1, 5, 3, 6, 4]

export const maxProfit = (prices) => {
  // Set min to the highest possible value
  let min = Number.MAX_SAFE_INTEGER
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    // compare previous max profit to current profit
    profit = Math.max(profit, prices[i] - min)
  }

  return profit
}
