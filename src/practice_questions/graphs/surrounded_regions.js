// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.
const recurse = (mx, r, c, visited) => {
  const rIsOutOfBOunds = r < 0 || r >= mx.length
  const cIsOutOfBOunds = c < 0 && c >= mx[0].length
  if (rIsOutOfBOunds || cIsOutOfBOunds) return

  visited[`${r}-${c}`] = true

  if (mx[r][c] === "X") {
    return
  }

  if (mx[r][c] === "O") {
    mx[r][c] = "T"
    if (!visited[`${r + 1}-${c}`]) {
      recurse(mx, r + 1, c, visited)
    }

    if (!visited[`${r - 1}-${c}`]) {
      recurse(mx, r - 1, c, visited)
    }

    if (!visited[`${r}-${c + 1}`]) {
      recurse(mx, r, c + 1, visited)
    }

    if (!visited[`${r}-${c - 1}`]) {
      recurse(mx, r, c - 1, visited)
    }
  }
}

export const regions = (mx) => {
  const visited = {}

  for (let i = 0; i < mx[0].length; i++) {
    recurse(mx, 0, i, visited)
  }
  for (let i = 0; i < mx.length; i++) {
    recurse(mx, i, 0, visited)
  }
  for (let i = 0; i < mx[0].length; i++) {
    recurse(mx, mx.length - 1, i, visited)
  }
  for (let i = 0; i < mx[0].length; i++) {
    recurse(mx, i, mx[0].length - 1, visited)
  }

  for (let r = 0; r < mx.length; r++) {
    for (let c = 0; c < mx[0].length; c++) {
      if (
        mx[r][c] === "O" &&
        mx[r + 1][c] &&
        mx[r - 1][c] &&
        mx[r][c + 1] &&
        mx[r][c - 1]
      ) {
        mx[r][c] = "X"
      }
    }
  }

  for (let r = 0; r < mx.length; r++) {
    for (let c = 0; c < mx[0].length; c++) {
      if (mx[r][c] === "T") {
        mx[r][c] = "O"
      }
    }
  }

  return mx
}
