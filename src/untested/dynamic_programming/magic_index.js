// Problem Statement:
// A magic index in an array A[ 1...n-1] is defined to be an index such that A[i]
// i.Given a sorted array of distinct integers, write a method to find a magic index,
// if one exists, in array A.
// FOLLOW UP: What if the values are not distinct?

// Clarifications and Assumptions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
export const magicIdxDistinct = (
  arr,
  start = 0,
  end = arr.length - 1,
  result = []
) => {
  if (end < start) {
    return null
  }

  const idx = Math.floor((start + end) / 2)

  if (arr[idx] === idx) {
    result.push(idx)
    return []
  }
  if (arr[idx] < idx) {
    magicIdxDistinct(arr, idx + 1, end, result)
  } else if (arr[idx] > idx) {
    magicIdxDistinct(arr, start, idx - 1, result)
  }

  return result
}

export const magicIdxNotDistinct = (
  arr,
  start = 0,
  end = arr.length - 1,
  result = []
) => {
  if (end < start) {
    return null
  }

  const idx = Math.floor((start + end) / 2)

  if (arr[idx] === idx) {
    result.push(idx)
    return []
  }

  const leftIdx = Math.min(arr[idx], idx - 1)

  magicIdxNotDistinct(arr, start, leftIdx, result)

  magicIdxNotDistinct(arr, idx + 1, end, result)

  return result
}

// Sample input
// const arr = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13] // 7
// const arr2 = [-40, -20, 2, 2, 2, 3, 5, 7, 9, 12, 13] // 7

// Notes after implementing:
