let countSubsets = function (num, sum) {
	function solveRecursive(num, sum, currentIndex) {
		if (sum == 0) return 1;
		if (currentIndex >= num.length || num.length == 0) return 0;

		let set1 = 0;

		if (num[currentIndex] <= sum) {
			set1 = solveRecursive(
				num,
				sum - num[currentIndex],
				currentIndex + 1
			);
		}

		let set2 = solveRecursive(num, sum, currentIndex + 1);

		return set1 + set2;
	}

	return solveRecursive(num, sum, 0);
};

let countSubsetsMemo = function (num, sum) {
	let dp = [];

	function solveRecursive(num, sum, currentIndex) {
		if (sum == 0) return 1;
		if (currentIndex >= num.length || num.length == 0) return 0;

		dp[currentIndex] = dp[currentIndex] || [];

		if (typeof dp[currentIndex][sum] == "undefined") {
			let set1 = 0;
			if (num[currentIndex] <= sum) {
				set1 = solveRecursive(
					num,
					sum - num[currentIndex],
					currentIndex + 1
				);
			}

			let set2 = solveRecursive(num, sum, currentIndex + 1);

			dp[currentIndex][sum] = set1 + set2;
		}

		return dp[currentIndex][sum];
	}

	return solveRecursive(num, sum, 0);
};

let countSubsetDp = function (num, sum) {
	let n = num.length;

	let dp = Array(n)
		.fill(0)
		.map(() => Array(sum + 1).fill(0));

	for (let i = 0; i < n; i++) {
		dp[i][0] = 1;
	}

	for (let s = 1; s <= sum; s++) {
		dp[0][s] = num[0] == s ? 1 : 0;
	}

	for (let i = 1; i < n; i++) {
		for (let s = 1; s <= sum; s++) {
			dp[i][s] = dp[i - 1][s];

			if (num[i] <= s) {
				dp[i][s] += dp[i - 1][s - num[i]];
			}
		}
	}

	return dp[n - 1][sum];
};

console.log(`Count of subset sum is: ---> ${countSubsetDp([1, 1, 2, 3], 4)}`);
console.log(
	`Count of subset sum is: ---> ${countSubsetDp([1, 2, 7, 1, 5], 9)}`
);
