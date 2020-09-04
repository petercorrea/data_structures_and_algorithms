let solveKnapsack = function (profits, weights, capacity) {
	function solveRecursive(profits, weights, capacity, currentIndex) {
		if (
			profits.length == 0 ||
			capacity <= 0 ||
			currentIndex >= profits.length ||
			weights.length != profits.length
		)
			return 0;

		let profit1 = 0;

		if (weights[currentIndex] <= capacity) {
			profit1 =
				profits[currentIndex] +
				solveRecursive(
					profits,
					weights,
					capacity - weights[currentIndex],
					currentIndex
				);
		}

		let profit2 = solveRecursive(
			profits,
			weights,
			capacity,
			currentIndex + 1
		);

		return Math.max(profit1, profit2);
	}

	return solveRecursive(profits, weights, capacity, 0);
};

let solveKnapsackMemo = function (profits, weights, capacity) {
	let dp = [];
	function solveRecursive(profits, weights, capacity, currentIndex) {
		if (
			profits.length == 0 ||
			capacity <= 0 ||
			currentIndex >= profits.length ||
			weights.length != profits.length
		)
			return 0;

		dp[currentIndex] = dp[currentIndex] || [];

		if (typeof dp[currentIndex][capacity] == "undefined") {
			let profit1 = 0;

			if (weights[currentIndex] <= capacity) {
				profit1 =
					profits[currentIndex] +
					solveRecursive(
						profits,
						weights,
						capacity - weights[currentIndex],
						currentIndex
					);
			}

			let profit2 = solveRecursive(
				profits,
				weights,
				capacity,
				currentIndex + 1
			);

			dp[currentIndex][capacity] = Math.max(profit1, profit2);
		}

		return dp[currentIndex][capacity];
	}

	return solveRecursive(profits, weights, capacity, 0);
};

let solveKnapsackDp = function (profits, weights, capacity) {
	if (
		capacity <= 0 ||
		profits.length == 0 ||
		weights.length != profits.length
	)
		return 0;

	let n = profits.length;
	let dp = Array(n)
		.fill(0)
		.map(() => Array(capacity + 1).fill(0));

	for (let i = 0; i < n; i++) {
		dp[i][0] = 0;
	}

	for (let i = 0; i < n; i++) {
		for (let c = 1; c <= capacity; c++) {
			let profit1 = 0;
			let profit2 = 0;

			if (weights[i] <= c) {
				profit1 = profits[i] + dp[i][c - weights[i]];
			}

			if (i > 0) {
				profit2 = dp[i - 1][c];
			}

			dp[i][c] = profit1 > profit2 ? profit1 : profit2;
		}
	}

	return dp[n - 1][capacity];
};

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(
	`Total knapsack profit: ---> ${solveKnapsackDp(profits, weights, 8)}`
);
