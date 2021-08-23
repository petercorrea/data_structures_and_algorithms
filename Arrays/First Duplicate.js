// Return the first duplicate value in an array. Otherwise return -1.
// The array contains integers 1 to n inclusive.

// Time: n
// Space: n
function firstDuplicateValue(array) {
  if (array.length === 0) return -1
  let map = new Map()

  for (let i = 0; i < array.length; i++) {
    if (map.get(array[i]) === 1) {
      return array[i]
    } else {
      map.set(array[i], 1)
    }
  }

  return -1
}

// Time: n
// Space: 1
// We can map the values to index, turn them negative as we go along,
// and if we revisited an index thats already negative, thats the dup.
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    let value = Math.abs(array[i])

    if (array[value - 1] < 0) return Math.abs(value)
    array[value - 1] *= -1
  }
  return -1
}
