// Problem Statement:
//		Write an algorithm such that if an element in an MxN matrix is 0,
// 		its entire row and column are set to 0.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

let zeroMartrix = (m) => {
	let rows = [];
	let cols = [];

	for (let i = 0; i <= m.length - 1; i++) {
		for (let j = 0; j <= m[0].length; j++) {
			if (m[i][j] == 0) {
				rows.push(i);
				cols.push(j);
			}
		}
	}

	for (r of rows) {
		for (let i = 0; i <= m[0].length - 1; i++) {
			m[r][i] = 0;
		}
	}

	for (c of cols) {
		for (let j = 0; j <= m.length - 1; j++) {
			m[j][c] = 0;
		}
	}

	return m;
};

// Test
let matrix = [
	[1, 1, 0, 1],
	[1, 1, 1, 1],
	[0, 1, 1, 1],
];

console.log(zeroMartrix(matrix));
// result
// [
// 	[0, 0, 0, 0],
// 	[0, 1, 0, 1],
// 	[0, 0, 0, 0],
// ];

// Notes after implementing:
//
