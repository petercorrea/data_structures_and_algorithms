// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be
// validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// O(1)
const checkRows = (board) => {
  for (let row = 0; row < board.length; row++) {
    const hash = {}
    for (let col = 0; col < board.length; col++) {
      const item = board[row][col]
      if (hash[item] && item !== ".") {
        return false
      }
      if (item !== ".") {
        hash[item] = true
      }
    }
  }

  return true
}

const checkColumns = (board) => {
  for (let col = 0; col < board.length; col++) {
    const hash = {}
    for (let row = 0; row < board.length; row++) {
      const item = board[row][col]
      if (hash[item] && item !== ".") {
        return false
      }
      if (item !== ".") {
        hash[item] = true
      }
    }
  }

  return true
}

const checkGrids = (board) => {
  const points = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6]
  ]

  for (const i in points) {
    const origin = points[i]
    const hash = {}
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        const item = board[j + origin[0]][k + origin[1]]
        if (hash[item] && item !== ".") {
          return false
        }
        if (item !== ".") {
          hash[item] = true
        }
      }
    }
  }

  return true
}

export const validSudoku = (board) => {
  if (checkRows(board) && checkColumns(board) && checkGrids(board)) return true
  return false
}
