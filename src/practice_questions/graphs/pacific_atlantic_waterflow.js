// There is an m x n rectangular island that borders both the Pacific Ocean and
// Atlantic Ocean.The Pacific Ocean touches the island's left and top edges, and
// the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells.You are given an m x n
// integer matrix heights where heights[r][c] represents the height above sea level
// of the cell at coordinate(r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring
// cells directly north, south, east, and west if the neighboring cell's height is
// less than or equal to the current cell's height.Water can flow from any cell
// adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes
// that rain water can flow from cell(ri, ci) to both the Pacific and Atlantic oceans.
const outOfBounds = (mx, r, c) => {
  if (r < 0 || r > mx.length - 1) return true
  if (c < 0 || c > mx[0].length) return true
  return false
}
const recurseOcean = (ocean, mx, r, c, visited = {}) => {
  // pacific ocean
  // r[0] || c[0]
  if ((r === 0 || c === 0) && ocean === "pacific") return true

  // atlantic ocean
  // r[r.length-1] || c[c.length-1]
  if ((r === mx.length - 1 || c === mx[0].length - 1) && ocean === "atlantic")
    return true

  if (visited[`${r}-${c}`]) return false
  visited[`${r}-${c}`] = true

  let branch1 = false
  let branch2 = false
  let branch3 = false
  let branch4 = false

  if (!outOfBounds(mx, r - 1, c) && mx[r - 1][c] <= mx[r][c]) {
    branch1 = recurseOcean(ocean, mx, r - 1, c, visited)
  }

  if (!outOfBounds(mx, r, c - 1) && mx[r][c - 1] <= mx[r][c]) {
    branch2 = recurseOcean(ocean, mx, r, c - 1, visited)
  }

  if (!outOfBounds(mx, r + 1, c) && mx[r + 1][c] <= mx[r][c]) {
    branch3 = recurseOcean(ocean, mx, r + 1, c, visited)
  }

  if (!outOfBounds(mx, r, c + 1) && mx[r][c + 1] <= mx[r][c]) {
    branch4 = recurseOcean(ocean, mx, r, c + 1, visited)
  }

  return branch1 || branch2 || branch3 || branch4
}

export const pacificAtlantic = (mx) => {
  const result = []
  for (let r = 0; r < mx.length; r++) {
    for (let c = 0; c < mx[0].length; c++) {
      if (
        recurseOcean("atlantic", mx, r, c) &&
        recurseOcean("pacific", mx, r, c)
      ) {
        result.push([r, c])
      }
    }
  }

  return result
}
