export const bruteForce = (walls) => {
  /*
		Time O(n)
		Space O(1)
	*/

  if (!walls || walls.length < 2) {
    return "Array is too small"
  }

  let best = 0

  for (let l = 0; l < walls.length; l++) {
    for (let r = l + 1; r < walls.length; r++) {
      best = Math.max(best, Math.min(walls[l], walls[r]) * (r - l))
    }
  }

  return best
}

export const twoPointers = (walls) => {
  if (!walls || walls.length < 2) {
    return "Array is too small"
  }

  let l = 0
  let r = walls.length - 1
  let best = 0

  while (l !== r) {
    best = Math.max(best, Math.min(walls[l], walls[r]) * (r - l))

    if (walls[l] < walls[r]) {
      l++
    } else {
      r--
    }
  }

  return best
}

const someWalls = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(bruteForce(someWalls))
console.log(twoPointers(someWalls))
