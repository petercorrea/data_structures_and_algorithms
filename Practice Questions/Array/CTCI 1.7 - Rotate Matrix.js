// Problem Statement:
// Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes, write a method to
// rotate the image by 90 degrees. Can you do this in place?

// Clarifications and Assumptions:
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

export const rotate = (matrix) => {
  const m = [...matrix]
  if (m.length !== m[0].length) return "Is not an N*N matrix."

  for (let i = 0; i <= m.length / 2; i++) {
    for (let j = i; j <= m.length - i - 2; j++) {
      // save top left
      const temp = m[i][j]

      // bottom left -> top left
      m[i][j] = m[m.length - 1 - j][i]

      // bottom right -> bottom left
      m[m.length - 1 - j][i] = m[m.length - 1 - i][m.length - 1 - j]

      // top right -> bottom right
      m[m.length - 1 - i][m.length - 1 - j] = m[j][m.length - 1 - i]

      // top right -> top left
      m[j][m.length - 1 - i] = temp
    }
  }

  return m
}
