// Given an array, return an array of the same length where array[i]
// equals the product of all the elements except for the once located at i.

// Time: n
// Space: n
function arrayOfProducts(array) {
	let result = [];

	for (let i = 0; i < array.length; i++) {
		let leftProduct = 1;
		for (let l = i - 1; l >= 0; l--) {
			leftProduct *= array[l];
		}

		let rightProduct = 1;
		for (let r = i + 1; r < array.length; r++) {
			rightProduct *= array[r];
		}

		result.push(leftProduct * rightProduct);
	}

	return result;
}
