// MergeSort
function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right, temp = []) {
	while (left[0] !== undefined && right[0] !== undefined) {
		if (left[0] < right[0]) {
			temp.push(left.shift());
		} else {
			temp.push(right.shift());
		}
	}

	if (!left[0]) {
		temp.push(...right);
	}

	if (!right[0]) {
		temp.push(...left);
	}

	return temp;
}

const myArray = [2, 6, 4, 3, 1, 8, 7, 10, 9, 0, 5];

console.log(mergeSort(myArray));
