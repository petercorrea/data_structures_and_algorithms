// Given a number sequence, find the increasing subsequence with the highest sum. Write a method that returns the highest sum.

// Brute
// TC: O2^n
// SC: On
const findMSIS = function (nums) {
	function findMSISRecursive(nums, currentIndex, previousIndex, sum) {
		if (currentIndex === nums.length) return sum;

		// include nums[currentIndex] if it is larger than the last included number
		let s1 = sum;
		if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex])
			s1 = findMSISRecursive(
				nums,
				currentIndex + 1,
				currentIndex,
				sum + nums[currentIndex]
			);

		// excluding the number at currentIndex
		let s2 = findMSISRecursive(nums, currentIndex + 1, previousIndex, sum);

		return Math.max(s1, s2);
	}
	return findMSISRecursive(nums, 0, -1, 0);
};

const findMSIS = function (nums) {
	const dp = [];

	function findMSISRecursive(nums, currentIndex, previousIndex, sum) {
		if (currentIndex === nums.length) return sum;

		const subProblemKey = `${currentIndex}-${previousIndex}-${sum}`;
		if (typeof dp[subProblemKey] === "undefined") {
			// include nums[currentIndex] if it is larger than the last included number
			let s1 = sum;
			if (previousIndex == -1 || nums[currentIndex] > nums[previousIndex]) {
				s1 = findMSISRecursive(
					nums,
					currentIndex + 1,
					currentIndex,
					sum + nums[currentIndex]
				);
			}

			// excluding the number at currentIndex
			const s2 = findMSISRecursive(nums, currentIndex + 1, previousIndex, sum);
			dp[subProblemKey] = Math.max(s1, s2);
		}

		return dp[subProblemKey];
	}
	return findMSISRecursive(nums, 0, -1, 0);
};

// Brute
// TC: n^2
// SC: n
const findMSIS = function (nums) {
	const dp = Array(nums.length).fill(0);
	dp[0] = nums[0];

	let maxSum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		dp[i] = nums[i];
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j] && dp[i] < dp[j] + nums[i]) dp[i] = dp[j] + nums[i];
		}
		maxSum = Math.max(maxSum, dp[i]);
	}

	return maxSum;
};
