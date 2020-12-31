// Problem Statement:
// Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes, write a method to
// rotate the image by 90 degrees. Can you do this in place?

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//		Take note that this is an N*N matrix where the lengths on each side are equal.
// 		We'll rotate one layer at a time, moving inwardly.
// 		Take note of the changing size of each layer, this will helpm us dictate the traversal.
// 		i will only ever be as long as half the matrix.
// 		j will reduce with m.length - i - 2. -2 because the end is length - 1, and since we will not traverse
// 		the very last element because we have saved it and do not want to overwrite it, it become -2.

let rotate = (m) => {
	if (m.length != m[0].length) return "Is not an N*N matrix.";

	for (let i = 0; i <= m.length / 2; i++) {
		for (let j = i; j <= m.length - i - 2; j++) {
			// save top left
			let temp = m[i][j];

			// bottom left -> top left
			m[i][j] = m[m.length - 1 - j][i];

			// bottom right -> bottom left
			m[m.length - 1 - j][i] = m[m.length - 1 - i][m.length - 1 - j];

			// top right -> bottom right
			m[m.length - 1 - i][m.length - 1 - j] = m[j][m.length - 1 - i];

			// top right -> top left
			m[j][m.length - 1 - i] = temp;
		}
	}

	return m;
};

// Test
let matrix = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25],
];

console.log(rotate(matrix));
// [
// 	[21, 16, 11, 6, 1],
// 	[22, 17, 12, 7, 2],
// 	[23, 18, 13, 8, 3],
// 	[24, 19, 14, 9, 4],
// 	[25, 20, 15, 10, 5],
// ];

// Notes after implementing:
// Be careful with i and j.
