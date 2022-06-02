/*
Problem Statement:
    There is an integer array nums sorted in ascending order (with distinct values).
    Prior to being passed to your function, nums is possibly rotated at an 
    unknown pivot index k (1 <= k < nums.length) such that the resulting array 
    is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]. 
    
    For example, [0,1,2,3,4,5,6,7] might be rotated at pivot index 3 and become [3,4,5,6,7,0,1,2].
    
    Given the array nums after the possible rotation and an integer target, 
    return the index of target if it is in nums, or -1 if it is not in nums.
    You must write an algorithm with O(log n) runtime complexity.

Clarifications and Assumptions:
    This is some sample text.

Test Case:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1

Notes:
    This is some sample text.

*/

// Solution #1 - O() time | O() space:
export const first = (array, target) => {
  let l = 0
  let r = array.length - 1

  while (l <= r) {
    if (r - l === 1) {
      if (array[r] === target) return r
      if (array[l] === target) return l
      return -1
    }

    console.log(array[l], array[r])
    const m = Math.floor((r + l) / 2)

    if (array[m] === target) return m
    if (array[m] > target && array[0] > target) {
      l = m
    } else r = m
  }

  return -1
}

// Testing
console.log(first([4, 5, 6, 7, 0, 1, 2], 3))
