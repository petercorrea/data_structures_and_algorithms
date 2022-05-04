// Search a Maze
// 0's are open, 1's are walls/visited
const someMaze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
]

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

  let neighborIdxs
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  // for each possible direction, determine if the current location will go out of bounds
  for (const direction of directions) {
    neighborIdxs = [current[0] + direction[0], current[1] + direction[1]]

    // if direction is within bounds
    if (isFeasible(maze, neighborIdxs)) {
      // mark as visited
      maze[neighborIdxs[0]][neighborIdxs[1]] = 1
      // traverse from new current
      if (searchMazeHelper(maze, neighborIdxs, end)) {
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

console.log(searchMaze(someMaze, [0, 4], [3, 2]))
