// Given an array of integers compute the greatest sum possible
// without use adjacent values.

// recurrance relation:
// 		max(array[i] + sums[i-2], sums[i-1])

function maxSum(arr) {
	if (arr.length == 0) return 0;
	if (arr.length == 1) return arr[0];
	let sums = Array(arr).fill(0);

	sums[0] = arr[0];
	sums[1] = Math.max(arr[0], arr[1]);

	for (let i = 2; i < arr.length; i++) {
		if (arr[i] < 0) sums[i] = sums[i - 1];
		sums[i] = Math.max(arr[i] + sums[i - 2], sums[i - 1]);
	}

	return sums[sums.length - 1];
}

console.log(maxSum([-2, 75, 105, -20, 120, 75, -19, 90, 135])); // 358
