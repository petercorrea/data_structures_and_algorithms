// Given two strings ‘s1’ and ‘s2’, find the length of the longest subsequence which is common in both the strings.

// Brute Force
// TC: O2^(m+n) where ‘m’ and ‘n’ are the lengths of the two input strings.
// SC: O(m+n) this space will be used to store the recursion stack.
const LCS = function (string1, string2) {
	function LCSR(string1, string2, idx1, idx2) {
		// base case
		if (idx1 == string1.length || idx2 == string2.length) {
			return 0;
		}

		// base case
		if (string1[idx1] == string2[idx2]) {
			return 1 + LCSR(string1, string2, idx1 + 1, idx2 + 1);
		}

		// general case
		const count2 = LCSR(string1, string2, idx1 + 1, idx2);
		const count3 = LCSR(string1, string2, idx1, idx2 + 1);

		return Math.max(count2, count3);
	}

	return LCSR(string1, string2, 0, 0);
};

// Memo
const LCSMemo = function (string1, string2) {
	// instantiate memo
	const memo = [];

	const LCSRecursive = function (string1, string2, idx1, idx2) {
		// base case
		if (idx1 == string1.length || idx2 == string2.length) {
			return 0;
		}

		// check memo first
		memo[idx1] = memo[idx1] || [];

		// if no value exists, write it
		if (typeof memo[idx1][idx2] == "undefined") {
			if (string1[idx1] == string2[idx2]) {
				memo[idx1][idx2] =
					1 + LCSRecursive(string1, string2, idx1 + 1, idx2 + 1);
			} else {
				const c1 = LCSRecursive(string1, string2, idx1 + 1, idx2);
				const c2 = LCSRecursive(string1, string2, idx1, idx2 + 1);
				memo[idx1][idx2] = Math.max(c1, c2);
			}
		}

		// return final value
		return memo[idx1][idx2];
	};

	return LCSRecursive(string1, string2, 0, 0);
};

// Tabulation
// TC: O(m*n)
// SC: O(m*n)...can be reduced to O(n) if you use only 2 arrays instead of whole table
function LCS(s1, s2) {
	let dp = Array(s1.length + 1)
		.fill(0)
		.map(() => Array(s2.length + 1).fill(0));

	for (let i = 1; i <= s1.length; i++) {
		for (let j = 1; j <= s2.length; j++) {
			if (s1[i - 1] == s2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	return dp[s1.length][s2.length];
}

console.log(
	`Length of Longest Common Substring: ---> ${LCS("passport", "ppsspt")}`
);
console.log(
	`Length of Longest Common Substring: ---> ${LCSMemo("passport", "ppsspt")}`
);
console.log(
	`Length of Longest Common Substring: ---> ${LCSTab("passport", "ppsspt")}`
);

// Simallar questions include transform string into another:

// Given strings s1 and s2, we need to transform s1 into s2
// by deleting and inserting characters.
// Write a function to calculate the count of the minimum number
// of deletion and insertion operations.

// Let’s assume len1 is the length of s1 and len2 is the length of s2.
// Now let’s assume c1 is the length of LCS of the two strings s1 and s2.
// To transform s1 into s2, we need to delete everything from s1 which is not part of LCS, so minimum deletions we need to perform from s1 => len1 - c1
// Similarly, we need to insert everything in s1 which is present in s2 but not part of LCS, so minimum insertions we need to perform in s1 => len2 - c1
