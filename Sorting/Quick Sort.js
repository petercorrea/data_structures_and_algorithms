// Best T(C):  (O)nlogn
// Worse T(C): (O)n^2

// Pros: cache locality, no additional memory (in-place), good for indexed structures
// Cons: unstable

// Implemented here using Hoare’s partitioning as opposed to Lomuto.

function swap(items, leftIdx, rightIdx) {
	let temp = items[leftIdx];
	items[leftIdx] = items[rightIdx];
	items[rightIdx] = temp;
}

function partition(items, left, right) {
	let pivot = items[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		// stops when left item is >= than pivot
		while (items[i] < pivot) {
			i++;
		}

		// stops when right item is <= than pivot
		while (items[j] > pivot) {
			j--;
		}

		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}

	let right_partiton = i;
	return right_partiton;
}

function quickSort(items, left, right) {
	if (items.length > 1) {
		if (left >= right) {
			return;
		}

		let right_partition = partition(items, left, right);

		// sort left side

		// if the pivot element !== the right partition element
		// it might make sense to move back two indices (to exclude processing the R.P. and the pivot element)
		// to sort the remaining items since the pivot is supposedly already in its sorted index
		// however sometimes the pivot point can end up on the very end of a collection
		// if all elements its compared to are either less or greater than to it
		// causing it to == the right partition element
		// thus we only remove 1 from right partition

		// [x] = pivot

		// 2,  [3],		>> [3]		  >> 	2, [3], x
		// i    j			ij           	j       i

		// [2],  3,     >> [2]		  >> 	x, [2], 3
		// i     j			ij           	j       i

		// 4,  [3],		>> [3], 4
		// i    j			j   i

		// The special case:
		// [4],  3,	    >>  3,  [4]
		// i     j 		    j    i

		quickSort(items, left, right_partition - 1);

		// sort right side
		quickSort(items, right_partition, right);
	}

	return items;
}

let items = [11, 7, 9, 6, 3, 9, 10, 5];
let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);
