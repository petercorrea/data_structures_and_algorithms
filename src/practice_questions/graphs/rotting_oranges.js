// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.
// If this is impossible, return -1.

export const oranges = (mx) => {
  let minutes = 0
  let freshOranges = 0
  let currentBatch = []
  let nextBatch = []

  // find all rotten oranges and count total fresh oranges
  for (let r = 0; r < mx.length; r++) {
    for (let c = 0; c < mx[0].length; c++) {
      if (mx[r][c] === 2) {
        currentBatch.push([r, c])
      }
      if (mx[r][c] === 1) {
        freshOranges++
      }
    }
  }

  // edge case: if no rotten oranges were found
  if (freshOranges === 0) return 0
  if (currentBatch.length === 0) return -1

  // bfs
  while (currentBatch.length > 0) {
    // mark rotten oranges as they're being processed
    const point = currentBatch.shift()
    const r = point[0]
    const c = point[1]

    // the first batch is already rotten, we dont want to double count

    // 4-directional ways
    if (mx[r + 1]?.[c] === 1) {
      mx[r + 1][c] = 2
      freshOranges--
      nextBatch.push([r + 1, c])
    }
    if (mx[r - 1]?.[c] === 1) {
      mx[r - 1][c] = 2
      freshOranges--
      nextBatch.push([r - 1, c])
    }
    if (mx[r]?.[c + 1] === 1) {
      mx[r][c + 1] = 2
      freshOranges--
      nextBatch.push([r, c + 1])
    }
    if (mx[r]?.[c - 1] === 1) {
      mx[r][c - 1] = 2
      freshOranges--
      nextBatch.push([r, c - 1])
    }

    // base cases: no new rottens
    if (nextBatch.length === 0 && currentBatch.length === 0) {
      break
    }

    // general case: we found more rottens and done with current batch
    if (currentBatch.length === 0) {
      minutes++
      currentBatch = nextBatch
      nextBatch = []
    }
  }

  // if no more new rotten, and we got all of them
  if (freshOranges === 0) return minutes
  // if no more new rotten, and we are missing some
  if (freshOranges > 0 || minutes === 0) return -1

  return minutes
}
