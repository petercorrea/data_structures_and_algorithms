// Given an array and an integer
// relocate all instance of the integer to the end of the array
// and return the array. Perform this inplace.
// The ordering of the other integer do not matter.

// Time: n
// Space: 1
export const solution1 = (arr, toMove) => {
  const array = [...arr]
  let left = array.length - 1
  let right = array.length - 1

  while (right >= 0 && left >= 0) {
    while (array[right] === toMove && right >= 0) {
      right--
    }

    left = right
    while (array[left] !== toMove && left >= 0) {
      left--
    }

    if (left >= 0 && right >= 0) {
      const temp = array[right]
      array[right] = array[left]
      array[left] = temp
    }
  }

  return array
}

export const solution2 = (arr, toMove) => {
  const array = [...arr]
  let left = 0
  let right = array.length - 1

  while (left < right) {
    while (left < right && array[right] === toMove) right--
    while (left < right && array[left] !== toMove) left++

    const temp = array[right]
    array[right] = array[left]
    array[left] = temp
  }

  return array
}
