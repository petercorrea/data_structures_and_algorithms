// Traverse an n*m matrix in a zigzag

export const isOutOfBounds = (row, col, height, width) =>
  row < 0 || row > height || col < 0 || col > width

// edgecases include 1 1*n and n*1 size matrices

// Time: n
// Space: n
export const solution1 = (array) => {
  const result = []
  const point = [0, 0]

  // 1*n
  if (array.length === 1) {
    return array[0]
  }

  // n*1
  if (array[0].length === 1) {
    for (let i = 0; i < array.length; i++) {
      result.push(array[i][0])
    }
    return result
  }

  // Add starting point
  result.push(array[0][0])

  while (array[point[0] + 1] !== undefined) {
    // move down
    while (point[0] < array.length - 1 && point[1] > 0) {
      point[0] += 1
      point[1] -= 1
      result.push(array[point[0]][point[1]])
    }
    // if possible move down, else go right
    if (point[0] + 1 <= array.length - 1) {
      point[0] += 1
    } else if (point[1] + 1 <= array[0].length - 1) {
      point[1] += 1
    } else {
      break
    }
    result.push(array[point[0]][point[1]])

    // move up
    while (point[0] > 0 && point[1] < array[0].length - 1) {
      point[0] -= 1
      point[1] += 1
      result.push(array[point[0]][point[1]])
    }

    // if possible move right, else go down
    if (point[1] + 1 <= array[0].length - 1) {
      point[1] += 1
    } else if (point[0] + 1 <= array.length - 1) {
      point[0] += 1
    } else {
      break
    }
    result.push(array[point[0]][point[1]])
  }

  return result
}

// Time: n
// Space: n
export const solution2 = (array) => {
  const height = array.length - 1
  const width = array[0].length - 1
  const result = []
  let row = 0
  let col = 0
  let goingDown = true

  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col])

    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false
        if (row === height) {
          col++
        } else {
          row++
        }
      } else {
        row++
        col--
      }
    } else if (row === 0 || col === width) {
      goingDown = true
      if (col === width) {
        row++
      } else {
        col++
      }
    } else {
      row--
      col++
    }
  }
  return result
}
