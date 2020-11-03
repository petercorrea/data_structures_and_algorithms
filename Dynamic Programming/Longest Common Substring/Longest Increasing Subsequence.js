// Given a number sequence, find the length of its
// Longest Increasing Subsequence (LIS).
// In an increasing subsequence, all the elements are in
// increasing order (from lowest to highest).

const LISBrute = function (Arr) {
	function LISRecursive(nums, currentIndex, previousIndex) {
		if (currentIndex === nums.length) return 0;

		// include nums[currentIndex] if it is larger than the last included number
		let c1 = 0;
		if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex]) {
			c1 = 1 + LISRecursive(nums, currentIndex + 1, currentIndex);
		}

		// excluding the number at currentIndex
		const c2 = LISRecursive(nums, currentIndex + 1, previousIndex);

		return Math.max(c1, c2);
	}

	return LISRecursive(Arr, 0, -1);
};

// Memo
const LISMemo = function (Arr) {
	const memo = [];

	function LISRecursive(Arr, currentIdx, prevIdx) {
		console.log(prevIdx, currentIdx);
		// if we've reached the end of the array
		if (currentIdx === Arr.length) {
			console.log("base case");
			return 0;
		}

		memo[currentIdx] = memo[currentIdx] || [];

		if (typeof memo[currentIdx][prevIdx + 1] === "undefined") {
			let c1 = 0;
			if (prevIdx == -1 || Arr[currentIdx] > Arr[prevIdx]) {
				console.log("c1 assigned");
				c1 = 1 + LISRecursive(Arr, currentIdx + 1, currentIdx);
			}

			const c2 = LISRecursive(Arr, currentIdx + 1, prevIdx);

			memo[currentIdx][prevIdx + 1] = Math.max(c1, c2);
		}

		return memo[currentIdx][prevIdx + 1];
	}

	return LISRecursive(Arr, 0, -1);
};
console.log(LISMemo([4, 2, 3, 6, 10, 1, 12]));
