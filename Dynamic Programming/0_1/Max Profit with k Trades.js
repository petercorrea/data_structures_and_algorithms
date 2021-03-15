// Given a list representing the daily prices of a stock and a number amount of "k" trades
// find the maximum profit one could make with the given number of trades.
// A trade is a buy and sell of a stock.
// You can only hold one stock at a time.

function maxProfit(prices, k) {
	if (!prices.length) return 0;

	const profits = [];

	for (let trade = 0; trade <= k; trade++) {
		const row = new Array(prices.length).fill(0);
		profits.push(row);
	}

	for (let trade = 1; trade <= k; trade++) {
		let maxProfit = -Infinity;
		for (price = 1; price < prices.length; price++) {
			maxProfit = Math.max(
				maxProfit,
				profits[trade - 1][price - 1] - prices[price - 1]
			);

			profits[trade][price] = Math.max(
				profits[trade][price - 1],
				maxProfit + prices[price]
			);
		}
	}
}
