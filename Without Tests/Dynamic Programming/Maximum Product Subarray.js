/*
Problem Statement:
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.

Clarification and Assumptions:
A subarray is a contiguous subsequence of the array.

Test Case: [2,3,-2,4] => 6
Explanation: [2,3] has the largest product 6.

Notes:
    // given the new number, the new maximum can have 3 conditions
    // 1. number(+) * prevMax(+) is the largest
    // 2. number(+) it self is the largest
    // 3. number(-) * prevMin(-) is the largest
*/

// Solution #1 - O() time | O() space:
export const some = (nums) => {
  let prevMax = nums[0]
  let prevMin = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin)
    const curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax)

    // update state
    prevMax = curMax
    prevMin = curMin
    result = Math.max(curMax, result)
  }
  return result
}
