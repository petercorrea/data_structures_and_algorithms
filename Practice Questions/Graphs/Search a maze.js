// Search a Maze
// 0's are open, 1's are walls/visited

export const searchMaze = (maze, start, destination) => {
  // set starting location to 1
  maze[start[0]][start[1]] = 1
  // traverse the maze
  return searchMazeHelper(maze, start, destination)
}

export const searchMazeHelper = (maze, current, end) => {
  // dfs
  // if the current location matches our destination, return true
  if (current[0] === end[0] && current[1] === end[1]) {
    return true
  }

  let neighboridxs
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  // for each possible direction, determine if the current location will go out of bounds
  for (const direction of directions) {
    neighboridxs = [current[0] + direction[0], current[1] + direction[1]]

    // if direction is within bounds
    if (isFeasible(maze, neighboridxs)) {
      // mark as visited
      maze[neighboridxs[0]][neighboridxs[1]] = 1
      // traverse from new current
      if (searchMazeHelper(maze, neighboridxs, end)) {
        return true
      }
    }
  }
  return false
}

export const isFeasible = (maze, indices) => {
  const x = indices[0]
  const y = indices[1]
  return (
    // within bounds
    x >= 0 &&
    x < maze.length &&
    y >= 0 &&
    y < maze[x].length &&
    // has not been visited
    maze[x][y] === 0
  )
}
