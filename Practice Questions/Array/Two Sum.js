/*
Problem Statement:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Clarifying Questions and Assumptions:

Sample Input and Output:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Notes:

*/

// Solution #1 - O() time | O() space:
export const twoSum = (nums, target) => {
  const hashmap = {}

  for (const num in nums) {
    const compliment = target - nums[num]

    if (hashmap[compliment]) {
      return [hashmap[compliment], num]
    }
    hashmap[nums[num]] = num
  }

  return false
}
