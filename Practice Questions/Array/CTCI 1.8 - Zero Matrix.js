// Problem Statement:
//		Write an algorithm such that if an element in an MxN matrix is 0,
// 		its entire row and column are set to 0.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

export const zeroMartrix = (matrix) => {
  const m = [...matrix]
  const rows = []
  const cols = []

  for (let i = 0; i <= m.length - 1; i++) {
    for (let j = 0; j <= m[0].length; j++) {
      if (m[i][j] === 0) {
        rows.push(i)
        cols.push(j)
      }
    }
  }

  for (const r of rows) {
    for (let i = 0; i <= m[0].length - 1; i++) {
      m[r][i] = 0
    }
  }

  for (const c of cols) {
    for (let j = 0; j <= m.length - 1; j++) {
      m[j][c] = 0
    }
  }

  return m
}
