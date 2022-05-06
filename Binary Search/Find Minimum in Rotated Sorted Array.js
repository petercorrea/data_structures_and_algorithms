/*
Problem Statement:
    Find the minimum of a rotated sorted array

Clarifications and Assumptions:
    

Test Case:
    Input: nums = [3,4,5,1,2]
    Output: 1

    Input: nums = [4,5,6,7,0,1,2]
    Output: 0

    Input: nums = [11,13,15,17]
    Output: 11

Notes:
    Binary search

*/

// Solution #1 - O(logn) time | O(n) space:
export const searchMin = (nums) => {
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const m = (l + (r - l)) / 2
    if (nums[m] > nums[r]) {
      l = m + 1
    } else r = m
  }

  return nums[l]
}

console.log(searchMin([4, 5, 1, 2, 3]))
