// Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are "off limits"
// such that the robot cannot step on them. Design an algorithm to find a path for the robot from
// the top left to the bottom right.

// Sample Input
// const possibleMaze = [
//   [true, true, true, true, true],
//   [true, false, true, true, true],
//   [true, true, true, true, true],
//   [true, true, false, true, true],
//   [true, true, false, true, true]
// ]

// const impossibleMaze = [
//   [true, true, true, true, true],
//   [true, true, true, true, true],
//   [true, true, true, true, true],
//   [true, true, true, false, false],
//   [true, true, true, false, true]
// ]

export const getPath = (maze, path = [], illegalSpaces = new Map()) => {
  if (!maze || maze.length === 0) return null

  if (getPathHelper(maze, 0, 0, path, illegalSpaces)) {
    return path
  }

  return false
}

let getPathHelper = (maze, row, col, path, illegalSpaces) => {
  if (row > maze.length - 1 || col > maze[0].length - 1 || !maze[row][col])
    return false

  if (illegalSpaces.get(`${row}-${col}`) === false) {
    return false
  }

  const atEnd = row === maze.length - 1 && col === maze[0].length - 1

  if (
    atEnd ||
    getPathHelper(maze, row + 1, col, path, illegalSpaces) ||
    getPathHelper(maze, row, col + 1, path, illegalSpaces)
  ) {
    path.unshift([row, col])
    return true
  }

  illegalSpaces.set(`${row}-${col}`, false)
  return false
}
