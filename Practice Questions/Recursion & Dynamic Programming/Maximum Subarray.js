/*
Problem Statement:
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Clarifying Questions and Assumptions:

Sample Input and Output:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Notes:

*/

// Solution #1 - O() time | O() space:
export const some = (nums) => {
  let max = nums[0]
  let current = Math.max(max, 0)

  for (let i = 1; i < nums.length; i += 1) {
    current += nums[i]
    max = Math.max(max, current)
    current = Math.max(current, 0)
  }

  return max
}

// Sample Input:
// const result = some([5, 4, -1, 2, 1]) // 6 - [4,-1,2,1]
