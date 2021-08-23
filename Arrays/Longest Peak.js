// Return the length of the longest peak.
// A peak is a point in the array where adjacent values to the left are stricly increasing (from left to right)
// until they reach the point
// and values to the right are stricly decreasing (from left to right) away from the point.

// Time: n
// Space: 1
function longestPeak(array) {
  let count = 0
  let max = 0

  for (let i = 1; i < array.length; i++) {
    // neither
    if (array[i - 1] === array[i]) {
      count = 0
      continue
    }

    // increasing
    if (array[i - 1] < array[i]) {
      if (count === 0) {
        count = 2
      } else {
        count++
      }
      continue
    }

    // decreasing
    if (array[i - 1] > array[i] && count !== 0) {
      for (let j = i; j < array.length; j++) {
        // decreasing
        if (array[j - 1] > array[j]) {
          count++
          if (count > max) max = count
          // edge case where inner loop reaches the end of the array before the outer loop
          if (j === array.length - 1) return max
          // increasing or neither
        } else {
          i = j - 1
          count = 0
          break
        }
      }
    }
  }

  return max
}

// Time: n
// Space: 1
// While the time complexity is still linear, we are touching multiple elements more than once
// as opposed to the above example.
function longestPeak(array) {
  let max = 0

  for (let i = 1; i < array.length; i++) {
    let current = i
    let left = i - 1
    let right = i + 1
    let countIncreasing = 0
    let countDecreasing = 0

    while (array[left] < array[current]) {
      countIncreasing++
      current--
      left--
    }

    current = i
    while (array[current] > array[right]) {
      countDecreasing++
      current++
      right++
    }

    if (
      countIncreasing !== 0 &&
      countDecreasing !== 0 &&
      countIncreasing + countDecreasing + 1 > max
    ) {
      max = countIncreasing + countDecreasing + 1
    }
  }

  return max
}
