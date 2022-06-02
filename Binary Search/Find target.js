/*
Problem Statement:
    Given an array of integers nums which is sorted in ascending order, 
    and an integer target, write a function to search target in nums. 
    If target exists, then return its index. Otherwise, return -1.
    You must write an algorithm with O(log n) runtime complexity.

Clarifications and Assumptions:
    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4

    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1

Test Case:
    () => []

Notes:
    We sample the middle value of an interval. If this is not the target
    we determine a new and smaller interval residing on either the left
    or right side of the middle value. We continue this process until 
    the target is found.

*/

// Solution #1 - O(logn) time | O(1) space:
export const findTarget = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) return target

    if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] < target) {
      left = middle + 1
    }
  }

  return -1
}

console.log(findTarget([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))
