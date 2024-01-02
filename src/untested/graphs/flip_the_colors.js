// Implement a routine that takes an n X m Boolean array A together with an entry (x, y) and flips the color of the region associated with (x, y).

export const flipColor = (image, x, y) => {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  const color = image[x][y]
  const queue = []

  // flip color
  image[x][y] = Number(!color)
  // add to queue
  queue.push([x, y])

  let current
  let neighbor

  while (queue.length) {
    current = queue.shift()

    for (const direction of directions) {
      neighbor = [current[0] + direction[0], current[1] + direction[1]]

      // if within bounds and color hasn't been flipped
      if (isFeasible(image, neighbor, color)) {
        // flip the color
        image[neighbor[0]][neighbor[1]] = Number(!color)
        // queue neighbors
        queue.push([neighbor[0], neighbor[1]])
      }
    }
  }
  return image
}

export const isFeasible = (image, indices, color) => {
  const x = indices[0]
  const y = indices[1]
  return (
    x >= 0 &&
    x < image.length &&
    y >= 0 &&
    y < image[x].length &&
    image[x][y] === color
  )
}
