let canPartition = function (nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}

	if (sum % 2 !== 0) return false;
	let dp = [];

	function solveRecursive(nums, sum, currentIndex) {
		if (sum == 0) return true;
		if (currentIndex >= nums.length || nums.length == 0) return true;

		dp[currentIndex] = dp[currentIndex] || [];

		if (typeof dp[currentIndex][sum] == "undefined") {
			if (nums[currentIndex] <= sum) {
				if (
					solveRecursive(
						nums,
						sum - nums[currentIndex],
						currentIndex + 1
					)
				)
					dp[currentIndex][sum] = true;
				return true;
			}

			dp[currentIndex][sum] = solveRecursive(nums, sum, currentIndex + 1);
		}

		return dp[currentIndex][sum];
	}

	return solveRecursive(nums, sum / 2, 0);
};

let canPartitionDp = function (num) {
	let n = num.length;

	let sum = 0;
	for (let i = 0; i < n; i++) sum += num[i];

	if (sum % 2 != 0) return false;

	sum /= 2;

	let dp = Array(n)
		.fill(false)
		.map(() => Array(sum + 1).fill(false));

	for (let i = 0; i < n; i++) {
		dp[i][0] = true;
	}

	for (let s = 1; s <= sum; s++) {
		dp[0][s] = num[0] == s;
	}

	for (let i = 1; i < n; i++) {
		for (let s = 1; s <= sum; s++) {
			if (dp[i - 1][s]) {
				dp[i][s] = dp[i - 1][s];
			} else if (num[i] <= s) {
				dp[i][s] = dp[i - 1][s - num[i]];
			}
		}
	}

	return dp[n - 1][sum];
};

console.log(`Can partitioning be done: ---> ${canPartitionDp([1, 2, 3, 4])}`);
console.log(
	`Can partitioning be done: ---> ${canPartitionDp([1, 1, 3, 4, 7])}`
);
console.log(`Can partitioning be done: ---> ${canPartitionDp([2, 3, 4, 6])}`);
