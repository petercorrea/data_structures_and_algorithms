// You are given a m x n 2D grid initialized with these three possible values.

// -1: - A wall or an obstacle.
// 0: - A gate.
// INF: - Infinity means an empty room.

// We use the value 2 ^ 31 - 1 = 2147483647 to represent INF
// as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate.
// If it is impossible to reach a Gate, that room should remain filled with INF

const recurse = (mx, r, c, count = -1) => {
  // out of bounds or already visited, or a wall
  if (mx[r]?.[c] === undefined || mx[r][c] === -1 || mx[r][c] < count) return

  // if we find an empty room, visit it, increment count, and take the new min
  count++
  mx[r][c] = Math.min(mx[r][c], count)

  recurse(mx, r + 1, c, count)
  recurse(mx, r - 1, c, count)
  recurse(mx, r, c + 1, count)
  recurse(mx, r, c - 1, count)
}

export const wallsAndGates = (mx) => {
  for (let r = 0; r < mx.length; r++) {
    for (let c = 0; c < mx[0].length; c++) {
      // dfs every empty room "0"
      if (mx[r][c] === 0) {
        recurse(mx, r, c)
      }
    }
  }

  return mx
}
