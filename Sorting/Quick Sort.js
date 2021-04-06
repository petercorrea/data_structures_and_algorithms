// Best T(C):  (O)nlogn
// Worse T(C): (O)n^2

// Pros: cache locality, no additional memory (in-place), good for indexed structures
// Cons: unstable

function swap(items, leftIdx, rightIdx) {
	let temp = items[leftIdx];
	items[leftIdx] = items[rightIdx];
	items[rightIdx] = temp;
}

// Implemented here using Hoare’s partitioning scheme as opposed to Lomuto.
function partition(items, left, right) {
	let middle = items[Math.floor((left + right) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		// stops when left item is >= than pivot
		while (items[i] < middle) {
			i++;
		}

		// stops when right item is <= than pivot
		while (items[j] > middle) {
			j--;
		}

		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}

	let idx = i;
	return idx;
}

function quickSort(items, left, right) {
	if (items.length > 1) {
		if (left >= right) {
			return;
		}

		let partIdx = partition(items, left, right);

		// sort left side
		quickSort(items, left, partIdx - 1);

		// sort right side
		quickSort(items, partIdx, right);
	}

	return items;
}

module.exports = {
	quickSort,
};
