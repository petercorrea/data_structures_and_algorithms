// Given a set a coin and a target sum
// determine the total number of ways to make the exact change.

// the recurrance relation is:
// 		totalWaysWithCoin = totalWaysWithCoin + totalWaysWithoutCoin
// 		dp[denom][targetSum] = dp[denom][targetSum - coin] + dp[denom - 1][targetSum]

// TC: (n)
// SP: (n^2)...can be reduced to (n) since we only need the previous row to compute the current

function numOfWays(denoms, targetSum) {
	let coins = [...denoms];

	let dp = Array(targetSum + 1).fill(0);
	dp[0] = 1;

	for (let i = 0; i < coins.length; i++) {
		let coin = coins[i];

		for (let j = 1; j < dp.length; j++) {
			if (coin <= j) {
				dp[j] = dp[j - coin] + dp[j];
			}
		}
	}

	return dp[dp.length - 1];
}

console.log(numOfWays([1, 2, 5, 10], 10));
