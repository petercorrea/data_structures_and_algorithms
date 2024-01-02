/* eslint-disable no-lonely-if */
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
    When you divide the rotated array into two halves, using mid index,
    at least one of subarray should remain sorted ALWAYS.

    [3, 4, 5, 6, 7, 1, 2] -> [3, 4, 5] [ 6, 7, 1, 2]
    the left side remains sorted

    [6, 7, 1, 2, 3, 4, 5] -> [6, 7, 1] [2, 3, 4, 5]
    the right side remains sorted

    [1, 2, 3, 4, 5, 6, 7] -> [1, 2, 3] [4, 5, 6, 7]
    Both sides remain sorted.

*/

// Solution #1 - O() time | O() space:
export const findTarget = (nums, target) => {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2)
    if (nums[m] === target) return m

    // left sorted side
    if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target <= nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      // right sorted side
      if (nums[m] <= target && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }

  return -1
}
