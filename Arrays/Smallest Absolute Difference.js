// Given two arrays find the pair of numbers; one from each array
// that have the smallest absolute difference. Assume ther is only one pair.

// Nested Loops
// Time: n^2
// Space: (1)
export const SAD = (arrayOne, arrayTwo) => {
  let min = Infinity
  let pair = []

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const diff = Math.abs(arrayOne[i] - arrayTwo[j])

      if (diff < min) {
        min = diff
        pair = [arrayOne[i], arrayTwo[j]]
      }
    }
  }

  return pair
}

// Sorted Arrays
// Time: nLogn + mLogm
// Space: 1
export const SADSorted = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let a1 = 0
  let a2 = 0
  let min = Infinity
  let pair = []
  let diff

  while (a1 < arrayOne.length && a2 < arrayTwo.length) {
    if (arrayOne[a1] === arrayTwo[a2]) return [arrayOne[a1], arrayTwo[a2]]

    // abs diff: largerNum - smallestNum
    if (arrayOne[a1] < arrayTwo[a2]) {
      diff = arrayTwo[a2] - arrayOne[a1]
    } else {
      diff = arrayOne[a1] - arrayTwo[a2]
    }

    if (diff < min) {
      min = diff
      pair = [arrayOne[a1], arrayTwo[a2]]
    }

    if (arrayOne[a1] < arrayTwo[a2]) {
      a1++
    } else {
      a2++
    }

    // at times, we wont have to check through all numbers in both arrays
    // for example, if we are at the end of arr1, and we have found the smallest pair
    // in arr2, we wont have to check the rest of arr2
  }

  return pair
}
