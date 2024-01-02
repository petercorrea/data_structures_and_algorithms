// Problem Statement:
// Return the two values that sum to the target,
// otherwise return an empty array.

// Clarifying Questions and Assumptions:
// We can assume all values are distinct.
// We can not add the same index with itself.
// Assume there will only be one pair summing to the target.

// Sample Input
// array = [1, 2, 3, 4, 5]
// targetSum = 8

// Sample Output:
// output = [3, 5]

export const bruteForce = (array, targetSum) => {
  // O(n^2) time | O(n) space
  if (array.length < 2) return []

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]]
      }
    }
  }

  return []
}

export const hashMap = (array, targetSum) => {
  // O(n) time | O(n) space
  const map = new Map()

  for (let i = 0; i < array.length; i++) {
    const compliment = targetSum - array[i]
    if (map.has(compliment)) {
      return [array[i], compliment]
    }
    map.set(array[i], i)
  }

  return []
}

export const sortedTwoPointers = (array, targetSum) => {
  // O(nLogn) time | O(1) space
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1

  while (left < right) {
    const currentSum = array[left] + array[right]

    if (currentSum === targetSum) return [array[left], array[right]]

    if (currentSum < targetSum) {
      left++
    } else if (currentSum > targetSum) {
      right--
    }
  }

  return []
}
