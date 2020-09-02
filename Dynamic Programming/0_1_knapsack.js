// Problem Statement:
// You have a set of items. Each item has a corresponding weight;W and profit;P.
// Build a knapsack of items that holds
// 		-the greatest sum of profit
// 		-without surpassing max capacity C.

// Brute Force Method
// By using recursion, we can try all possible combinations by making two calls, one with and one without the corresponding item
// and then using Math.max() on the way up to choose the combination with the highest value.

// ex. items = [a, b, c, d]
//
// 		a:    	   				a												null
//				    _________________________						_________________________
// 					|						|						|						|
// 		b:    		ab						a						b						null
// 				____________ 			_____________ 			_____________ 			_____________
// 			   |			|			|			|			|			|			|			|
// 		c: 	  abc			ab			ac			a			bc			b			c			null
//			_______ 	  _______    _______ 	  _______ 	 _______ 	  _______ 	  _______      _______
// 			|	  | 	  | 	|	 |	   |	  |		|	 |	   |	  |	    |	  |	    |	   |	 |
// 		d: abcd  abc	 abd 	ab 	acd    ac 	 ad 	a	bcd    bc 	 bd 	b 	  cd 	c  	   d 	null

let profits = [1, 6, 10, 16];
let weights = [1, 2, 3, 5];

// Bruteforce
let solveKnapsack = function (profits, weights, capacity) {
	function knapsackRecursive(profits, weights, capacity, currentIndex) {
		// base case
		if (capacity <= 0 || currentIndex >= profits.length) return 0;

		// profit1 represents the set choosing the item
		let profit1 = 0;
		if (weights[currentIndex] <= capacity) {
			profit1 =
				profits[currentIndex] +
				knapsackRecursive(
					profits,
					weights,
					capacity - weights[currentIndex],
					currentIndex + 1
				);
		}

		// profit2 represents the set not choosing the item
		let profit2 = knapsackRecursive(
			profits,
			weights,
			capacity,
			currentIndex + 1
		);

		// return the max of the two
		return Math.max(profit1, profit2);
	}

	return knapsackRecursive(profits, weights, capacity, 0);
};
// console.log(solveKnapsack(profits, weights, 7));

// Memoization
let solveKnapsackMemo = function (profits, weights, capacity) {
	const memo = [];

	function knapsackRecursive(profits, weights, capacity, currentIndex) {
		console.log("current index", currentIndex);

		// base case
		if (capacity <= 0) {
			console.log("< base case no capacity");
			return 0;
		}

		if (currentIndex >= profits.length) {
			console.log("< base case index OOB");
			return 0;
		}

		// create additional index
		memo[currentIndex] = memo[currentIndex] || [];
		// Returned saved value
		if (typeof memo[currentIndex][capacity] !== "undefined") {
			console.log(
				"returning lookup value...",
				memo[currentIndex][capacity]
			);
			return memo[currentIndex][capacity];
		}

		// select item
		let profit1 = 0;
		if (weights[currentIndex] <= capacity) {
			console.log("> adding item");
			profit1 =
				profits[currentIndex] +
				knapsackRecursive(
					profits,
					weights,
					capacity - weights[currentIndex],
					currentIndex + 1
				);
		} else {
			console.log("too much weight, returning 0");
		}

		// dont select item
		console.log("> skipping item");
		let profit2 = knapsackRecursive(
			profits,
			weights,
			capacity,
			currentIndex + 1
		);

		// return max value
		console.log("compare", profit1, profit2, "current index", currentIndex);
		memo[currentIndex][capacity] = Math.max(profit1, profit2);
		return memo[currentIndex][capacity];
	}
	return knapsackRecursive(profits, weights, capacity, 0);
};
// console.log(solveKnapsackMemo(profits, weights, 7));

// Tabulation
let solveKnapsackDP = function (profits, weights, capacity) {
	let n = profits.length;

	if (capacity <= 0 || n == 0 || weights.length != n) return 0;

	// setup table
	let dp = Array(profits.length)
		.fill(0)
		.map(() => Array(capacity + 1).fill(0));

	// populate 0 capacity column
	// for (let i = 0; i < n; i++) dp[i][0] = 0;

	// populate first item row
	for (let c = 0; c <= capacity; c++) {
		if (weights[0] <= c) dp[0][c] = profits[0];
	}

	// populate the remainding rows
	for (let i = 1; i < n; i++) {
		for (let c = 1; c <= capacity; c++) {
			let profit1 = 0,
				profit2 = 0;

			// we make two choices
			// include the item: add its profit and max profit of previous item
			if (weights[i] <= c)
				profit1 = profits[i] + dp[i - 1][c - weights[i]];
			// exlude the item
			profit2 = dp[i - 1][c];

			// take max
			dp[i][c] = Math.max(profit1, profit2);
		}
	}

	// return value
	return dp[n - 1][capacity];
};
// console.log(solveKnapsackDP(profits, weights, 7));
