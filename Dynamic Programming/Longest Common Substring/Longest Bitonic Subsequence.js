// Problem Statement #
// Given a number sequence, find the length of its Longest Bitonic Subsequence(LBS).A subsequence is considered bitonic if it is monotonically increasing and then monotonically decreasing.

// Input: {4,2,3,6,10,1,12}
// Output: 5
// Explanation: The LBS is { 2, 3, 6, 10, 1 }.

// Input: { 4, 2, 5, 9, 7, 6, 10, 3, 1 }
// Output: 7
// Explanation: The LBS is {4,5,9,7,6,3,1}.

// find the longest decreasing subsequence from currentIndex till the end of the array
function findLDSLength(nums, currentIndex, previousIndex) {
	if (currentIndex === nums.length) return 0;

	// include nums[currentIndex] if it is smaller than the previous number
	let c1 = 0;
	if (previousIndex == -1 || nums[currentIndex] < nums[previousIndex]) {
		c1 = 1 + findLDSLength(nums, currentIndex + 1, currentIndex);
	}

	// excluding the number at currentIndex
	const c2 = findLDSLength(nums, currentIndex + 1, previousIndex);

	return Math.max(c1, c2);
}

// find the longest decreasing subsequence from currentIndex till the beginning of the array
function findLDSLengthRev(nums, currentIndex, previousIndex) {
	if (currentIndex < 0) return 0;

	// include nums[currentIndex] if it is smaller than the previous number
	let c1 = 0;
	if (previousIndex == -1 || nums[currentIndex] < nums[previousIndex]) {
		c1 = 1 + findLDSLengthRev(nums, currentIndex - 1, currentIndex);
	}

	// excluding the number at currentIndex
	const c2 = findLDSLengthRev(nums, currentIndex - 1, previousIndex);

	return Math.max(c1, c2);
}

// Brute
// TC: 2^n
// SP: n
const findLBSLength = function (nums) {
	let maxLength = 0;
	for (let i = 0; i < nums.length; i++) {
		const c1 = findLDSLength(nums, i, -1);
		const c2 = findLDSLengthRev(nums, i, -1);
		maxLength = Math.max(maxLength, c1 + c2 - 1);
	}
	return maxLength;
};

// Memo
// TC:
// SP:
const findLBSLengthMemo = function (nums) {
	const lds = [];
	const ldsRev = [];

	// find the longest decreasing subsequence from currentIndex till the end of the array
	function findLDSLength(nums, currentIndex, previousIndex) {
		if (currentIndex === nums.length) return 0;

		lds[currentIndex] = lds[currentIndex] || [];
		if (typeof lds[currentIndex][previousIndex + 1] === "undefined") {
			// include nums[currentIndex] if it is smaller than the previous number
			let c1 = 0;
			if (previousIndex == -1 || nums[currentIndex] < nums[previousIndex])
				c1 = 1 + findLDSLength(nums, currentIndex + 1, currentIndex);

			// excluding the number at currentIndex
			let c2 = findLDSLength(nums, currentIndex + 1, previousIndex);

			lds[currentIndex][previousIndex + 1] = Math.max(c1, c2);
		}

		return lds[currentIndex][previousIndex + 1];
	}

	// find the longest decreasing subsequence from currentIndex till the beginning of the array
	function findLDSLengthReverse(nums, currentIndex, previousIndex) {
		if (currentIndex < 0) return 0;

		ldsRev[currentIndex] = ldsRev[currentIndex] || [];
		if (ldsRev[currentIndex][previousIndex + 1] == null) {
			// include nums[currentIndex] if it is smaller than the previous number
			let c1 = 0;
			if (previousIndex == -1 || nums[currentIndex] < nums[previousIndex])
				c1 = 1 + findLDSLengthReverse(nums, currentIndex - 1, currentIndex);

			// excluding the number at currentIndex
			let c2 = findLDSLengthReverse(nums, currentIndex - 1, previousIndex);

			ldsRev[currentIndex][previousIndex + 1] = Math.max(c1, c2);
		}
		return ldsRev[currentIndex][previousIndex + 1];
	}

	let maxLength = 0;
	for (let i = 0; i < nums.length; i++) {
		let c1 = findLDSLength(nums, i, -1);
		let c2 = findLDSLengthReverse(nums, i, -1);
		maxLength = Math.max(maxLength, c1 + c2 - 1);
	}

	return maxLength;
};

// DP
// TC: n^2
// SP: n
const findLBSLengthDp = function (nums) {
	const lds = Array(nums.length).fill(0);
	const ldsReverse = Array(nums.length).fill(0);

	// find LDS for every index up to the beginning of the array
	for (let i = 0; i < nums.length; i++) {
		lds[i] = 1; // every element is an LDS of length 1
		for (let j = i - 1; j >= 0; j--)
			if (nums[j] < nums[i]) {
				lds[i] = Math.max(lds[i], lds[j] + 1);
			}
	}

	// find LDS for every index up to the end of the array
	for (let i = nums.length - 1; i >= 0; i--) {
		ldsReverse[i] = 1; // every element is an LDS of length 1
		for (let j = i + 1; j < nums.length; j++)
			if (nums[j] < nums[i]) {
				ldsReverse[i] = Math.max(ldsReverse[i], ldsReverse[j] + 1);
			}
	}

	let maxLength = 0;
	for (let i = 0; i < nums.length; i++) {
		maxLength = Math.max(maxLength, lds[i] + ldsReverse[i] - 1);
	}

	return maxLength;
};

console.log(
	`Length of Longest Bitonic Subsequence: ---> ${findLBSLength([
		4,
		2,
		3,
		6,
		10,
		1,
		12,
	])}`
);
console.log(
	`Length of Longest Bitonic Subsequence: ---> ${findLBSLength([
		4,
		2,
		5,
		9,
		7,
		6,
		10,
		3,
		1,
	])}`
);
