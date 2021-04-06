// Write a function that takes in an nxm array and returns its elements in spiral order.

// Time: nm
// Space: nm

function spiralTraverse(array) {
	let rowStart = 0;
	let rowEnd = array.length - 1;
	let colStart = 0;
	let colEnd = array[0].length - 1;
	let result = [];

	while (rowStart <= rowEnd && colStart <= colEnd) {
		// 		right
		for (let col = colStart; col <= colEnd; col++) {
			result.push(array[rowStart][col]);
		}

		// 		down
		for (let row = rowStart + 1; row <= rowEnd; row++) {
			result.push(array[row][colEnd]);
		}

		// 		left
		for (let col = colEnd - 1; col >= colStart; col--) {
			if (rowStart == rowEnd) break;
			result.push(array[rowEnd][col]);
		}

		// 		up
		for (let row = rowEnd - 1; row > rowStart; row--) {
			if (colStart == colEnd) break;
			result.push(array[row][colStart]);
		}

		rowStart++;
		rowEnd--;
		colStart++;
		colEnd--;
	}

	`$() words`;
	("string");
	("string");
	return result;
}
