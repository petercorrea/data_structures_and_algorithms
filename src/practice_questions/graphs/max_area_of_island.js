// You are given an m x n binary matrix grid.An island is a group of 1\'s
// (representing land) connected 4 - directionally(horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

const recurse = (mx, point, visited, count) => {
  const r = point[0]
  const c = point[1]

  if (r < 0 || r >= mx.length || c < 0 || c >= mx[0].length || visited[`${r}-${c}`] || mx[r][c] === 0) return
  if (visited[`${r}-${c}`] === undefined && mx[r][c] === 1) count.area++
  visited[`${r}-${c}`] = true
  recurse(mx, [r - 1, c], visited, count)
  recurse(mx, [r + 1, c], visited, count)
  recurse(mx, [r, c - 1], visited, count)
  recurse(mx, [r, c + 1], visited, count)
}

export const maxArea = (mx) => {
  const visited = {}
  const count = {
    area: 0,
  }
  let globalMax = 0

  for (let i = 0; i < mx.length; i++) {
    for (let j = 0; j < mx[0].length; j++) {
      recurse(mx, [i, j], visited, count)
      globalMax = Math.max(globalMax, count.area)
      count.area = 0
    }
  }

  return globalMax
}
