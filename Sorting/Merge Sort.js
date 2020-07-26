// T(C) = nlogn

// Pros: good for data structures like LL, stable

function mergeSort(arr) {
	if (arr.length == 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return sortUp(mergeSort(left), mergeSort(right));
}

function sortUp(left, right) {
	const array = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			array.push(left.shift());
		} else {
			array.push(right.shift());
		}
	}

	// We need to concat here because there will be one element remaining
	// from either left OR the right
	return array.concat(left.slice()).concat(right.slice());
}

let nums = [9, 4, 1, 12, 6, 45, 3, 0, -1];
nums = mergeSort(nums);
console.log(nums);
