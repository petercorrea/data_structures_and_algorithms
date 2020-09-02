let canPartition = function (num) {
	function solveRecursive(num, currentIndex, sum1, sum2) {
		if (currentIndex >= num.length) return Math.abs(sum1 - sum2);

		let diff1 = solveRecursive(
			num,
			currentIndex + 1,
			sum1 + num[currentIndex],
			sum2
		);
		let diff2 = solveRecursive(
			num,
			currentIndex + 1,
			sum1,
			sum2 + num[currentIndex]
		);

		return Math.min(diff1, diff2);
	}

	return solveRecursive(num, 0, 0, 0);
};

let canPartitionMemo = function (num) {
	let dp = [];

	function solveRecursion(num, currentIndex, sum1, sum2) {
		if (currentIndex >= num.length) return Math.abs(sum1 - sum2);

		dp[currentIndex] = dp[currentIndex] || [];

		if (typeof dp[currentIndex][sum1] == "undefined") {
			let diff1 = solveRecursion(
				num,
				currentIndex + 1,
				sum1 + num[currentIndex],
				sum2
			);
			let diff2 = solveRecursion(
				num,
				currentIndex + 1,
				sum1,
				sum2 + num[currentIndex]
			);

			// We can uniquely identify a sub-problem from ‘currentIndex’ and ‘Sum1’; as ‘Sum2’ will always be the sum of the remaining numbers.
			dp[currentIndex][sum1] = Math.min(diff1, diff2);
		}

		return dp[currentIndex][sum1];
	}

	return solveRecursion(num, 0, 0, 0);
};

let canPartitionDp = function (num) {
	let n = num.length;
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += num[i];
	}

	let halfSum = Math.floor(sum / 2);

	let dp = Array(n)
		.fill(false)
		.map(() => Array(halfSum + 1).fill(false));

	for (let i = 0; i < n; i++) {
		dp[i][0] = true;
	}

	for (let s = 1; s <= halfSum; s++) {
		dp[0][s] = num[0] == s;
	}

	for (let i = 1; i < n; i++) {
		for (let s = 1; s <= halfSum; s++) {
			if (dp[i - 1][s]) {
				dp[i][s] = dp[i - 1][s];
			} else if (num[i] <= s) {
				dp[i][s] = dp[i - 1][s - num[i]];
			}
		}
	}

	let sum1 = 0;
	for (let s = halfSum; s >= 0; s--) {
		if (dp[n - 1][s] == true) {
			sum1 = s;
			break;
		}
	}

	let sum2 = sum - sum1;
	return Math.abs(sum2 - sum1);
};

console.log(
	`Minimum subset difference is: ---> ${canPartitionDp([1, 2, 3, 9])}`
);
console.log(
	`Minimum subset difference is: ---> ${canPartitionDp([1, 2, 7, 1, 5])}`
);
console.log(
	`Minimum subset difference is: ---> ${canPartitionDp([1, 3, 100, 4])}`
);
