// Given an m x n 2D binary grid grid which represents a map of '1's(land) and '0's(water),
// return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands
// horizontally or vertically.You may assume all four edges of the grid are all
// surrounded by water.

const visit = (mx, visited, point) => {
  const r = point[0]
  const c = point[1]

  if (r > mx.length - 1 || c > mx[0].length - 1 || r < 0 || c < 0 || mx[r][c] === "0" || visited[`${r}-${c}`]) return

  visited[`${r}-${c}`] = true
  visit(mx, visited, [r - 1, c])
  visit(mx, visited, [r + 1, c])
  visit(mx, visited, [r, c + 1])
  visit(mx, visited, [r, c - 1])
}

export const numberOfIslands = (mx) => {
  const visited = {}
  let count = 0

  for (let r = 0; r < mx.length; r++) {
    for (let c = 0; c < mx[r].length; c++) {
      const origin = [r, c]
      if (mx[r][c] === "1" && !visited[`${r}-${c}`]) {
        count++
        visit(mx, visited, origin)
      }
    }
  }

  return count
}
