// Given a list representing the daily prices of a stock and a number amount of "k" trades
// find the maximum profit one could make with the given number of trades.
// A trade is a buy and sell of a stock.
// You can only hold one stock at a time.

function maxProfitKTransactions(prices, k) {
  if (prices.length == 0) return 0

  const profits = []

  for (let trade = 0; trade <= k; trade++) {
    const row = new Array(prices.length).fill(0)
    profits.push(row)
  }

  for (let trade = 1; trade <= k; trade++) {
    const maxProfit = -Infinity
    for (let price = 1; price < prices.length; price++) {
      maxProft = Math.max(
        maxProft,
        profits[trade - 1][price - 1] - prices[price - 1]
      )

      profits[trade][prices] = Math.max(
        profits[trade][price - 1],
        maxProfit + prices[price]
      )
    }
  }
}
