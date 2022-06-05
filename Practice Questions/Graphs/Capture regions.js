// Capture regions that are fully enclosed
// Regions connected to boundaries can not be captured.

// bfs the boundary region
export const markBoundaryRegion = (i, j, board, visitedParam) => {
  const visited = [...visitedParam]
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  const queue = []
  queue.push([i, j])
  visited[i][j] = true
  let currentPosition
  let neighbor

  // check neighbors and push onto queue
  while (queue.length) {
    currentPosition = queue.shift()
    for (const direction of directions) {
      neighbor = [
        currentPosition[0] + direction[0],
        currentPosition[1] + direction[1]
      ]
      // neighbor = [i + direction[0], j + direction[1]];
      if (isFeasible(board, neighbor) && !visited[neighbor[0]][neighbor[1]]) {
        visited[neighbor[0]][neighbor[1]] = true
        queue.push(neighbor)
      }
    }
  }
}

export const surroundRegions = (boardParam) => {
  const board = [...boardParam]
  if (!board.length) {
    return []
  }

  const numOfRows = board.length
  const numOfCols = board[0].length

  // initialize visited container
  const visited = []
  for (let i = 0; i < numOfRows; i++) {
    visited.push(new Array(numOfCols).fill(false, 0, numOfCols))
  }

  // check boundary columns
  for (let i = 0; i < board.length; i++) {
    // left-most col
    if (board[i][0] === 1 && !visited[i][0]) {
      markBoundaryRegion(i, 0, board, visited)
    }

    // right-most col
    if (board[i][board.length - 1] === 1 && !visited[i][board.length - 1]) {
      markBoundaryRegion(i, board.length - 1, board, visited)
    }
  }

  // check boundary rows
  for (let j = 0; j < board[0].length; j++) {
    // top-most row
    if (board[0][j] === 1 && !visited[0][j]) {
      markBoundaryRegion(0, j, board, visited)
    }
    // bottom-most row
    if (board[board.length - 1][j] === 1 && !visited[board.length - 1][j]) {
      markBoundaryRegion(board.length - 1, j, board, visited)
    }
  }

  // scan through all elements and flip values
  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board.length - 1; j++) {
      if (board[i][j] === 1 && !visited[i][j]) {
        board[i][j] = 0
      }
    }
  }

  return board
}

export const isFeasible = (board, neighbor) => {
  const x = neighbor[0]
  const y = neighbor[1]

  return (
    x >= 0 &&
    x < board.length &&
    y >= 0 &&
    y < board[x].length &&
    board[x][y] === 1
  )
}
