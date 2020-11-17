const LISDP = function (arr) {
	let dp = Array(arr.length).fill(0);
	dp[0] = 1;

	let max = 1;

	for (let i = 1; i < arr.length; i++) {
		dp[1] = 1;
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j] && dp[i] <= dp[j]) {
				dp[i] = 1 + dp[j];
				max = Math.max(max, dp[i]);
			}
		}
	}

	return max;
};

console.log(LISDP([4, 2, 3, 6, 10, 1, 12]));
