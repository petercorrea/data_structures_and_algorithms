// T(C) = n^2

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		// If a new min has been found
		if (min !== i) {
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
	return arr;
}

let arr = [12, 5, 3, 7, 5, -2];
console.log(selectionSort(arr));
