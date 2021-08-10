// Given an array find triplets that equal the target sum, otherwise return [].
// Do not return different combinations of the same triplet.
// We can assume all values are distinct.
// We can not add the same index with itself.
// Return the triplets and its values in ascending order.

// Loops + two pointers
// Time: n^2
// Space: n
function tripletsSum(array, targetSum) {
  array.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < array.length; i++) {
    let left = i + 1
    let right = array.length - 1

    while (left < right) {
      const sum = array[i] + array[left] + array[right]

      if (sum == targetSum) {
        result.push([array[i], array[left], array[right]])
        // keep moving pointers to find more potential sums
        left++
        right--
      } else if (sum < targetSum) {
        left++
      } else if (sum > targetSum) {
        right--
      }
    }
  }

  return result
}

tripletsSum([12, 3, 1, 2, -6, 5, -8, 6], 0) // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
