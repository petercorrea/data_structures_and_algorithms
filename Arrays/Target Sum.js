// Return the indices of the two values that sum to the target,
// otherwise return an empty array.
// We can assume all values are distinct.
// We can not add the same index with itself.
// Assume there will onkly be one pair summing to the target.

const nums = [2, 3, 1, 5]
const target = 8

// Brute Force
// Time: O(n^2)
// Space: O(n)
function bruteForce(array, targetSum) {
  if (array.length < 2) return []

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == targetSum) {
        return [i, j]
      }
    }
  }

  return []
}
bruteForce(nums, target) // [1, 3]

// HashMap
// Time: O(n)
// Space: O(n)
function hashMap(array, targetSum) {
  const map = new Map()

  for (let i = 0; i < array.length; i++) {
    // Check for the compliment of the current value, (targetSum - x = compliment)
    if (map.has(targetSum - array[i])) {
      // return the compliment's idx, and the current idx being iterated
      return [map.get(targetSum - array[i]), i]
    }
    // store the current idx with its value as the key, which will serve as the compliment to be found later
    map.set(array[i], i)
  }

  return []
}
hashMap(nums, target)

// Sorted w/ Two Pointers
// Time: O(nLogn)
// Space: O(1)
function sortedTwoPointers(array, targetSum) {
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1

  while (left < right) {
    const currentSum = array[left] + array[right]

    if (currentSum == targetSum) return [left, right]

    if (currentSum < targetSum) {
      left++
    } else if (currentSum > targetSum) {
      right--
    }
  }

  return []
}

sortedTwoPointers(nums, target)
