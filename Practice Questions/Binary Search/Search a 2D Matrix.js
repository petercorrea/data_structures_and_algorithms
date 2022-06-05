/*
Problem Statement:
    Write an efficient algorithm that searches for a value target 
    in an m x n integer matrix matrix. This matrix has the following properties:
        Integers in each row are sorted from left to right.
        The first integer of each row is greater than the last integer of the previous row.

Clarifications and Assumptions:
    This is some sample text.

Test Case:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false

Notes:
    This is binary search across two dimensions, thus we will
    first determine which row to search by binary searching the first item
    in every row, to determine the condition m[i] > target && m[i-1] < target =>
    perform binary search on m[i-1 row] to ultimately find the target.

*/

const innerBinarySearch = (array, target) => {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const middleIdx = Math.floor((left + right) / 2)
    const middleValue = array[middleIdx]

    // base case
    if (middleValue === target) {
      return true
    }

    // edge cases
    if (middleValue > target) {
      right = middleIdx - 1
    } else if (middleValue < target) {
      left = middleIdx + 1
    }
  }

  return false
}

// Solution #1 - O(log(n)) time | O(1) space:
export const OuterBinarySearch = (array, target) => {
  if (array.length === 1) {
    return innerBinarySearch(array[0], target)
  }
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const middleIdx = Math.floor((left + right) / 2)
    const middleValue = array[middleIdx][0]
    const higherValue = array[middleIdx + 1]?.[0]

    // base case; if target is the first item of the row
    if (middleValue === target) {
      return true
    }

    // edge cases
    // found row and its the last one
    if (middleIdx === array.length - 1) {
      // conduct binary search on array[middleIdx]
      return innerBinarySearch(array[middleIdx], target)
    }

    // found row anywhere else
    if (middleValue < target && higherValue > target) {
      // conduct binary search on array[middleIdx]
      return innerBinarySearch(array[middleIdx], target)
    }

    // not the correct row, search again
    if (middleValue > target) {
      right = middleIdx - 1
    } else if (middleValue < target) {
      left = middleIdx + 1
    }
  }

  return false
}
