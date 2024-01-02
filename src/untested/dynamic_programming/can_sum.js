// Can Sum
// Given a target sum and an array of numbers,
// Determine if a sequence of numbers successfully add up to the target sum.
// You can repeat an element at a given index.

// Brute Force
// TC: nums^targetSum
// SC: targetSum
export const canSum = (targetSum, nums) => {
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  if (nums.length === 0) return false

  for (const num of nums) {
    const remainder = targetSum - num
    if (canSum(remainder, nums) === true) return true
  }

  return false
}

// Memo
export const canSumMemo = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (nums.length === 0) return false
  if (targetSum < 0) return false

  for (const num of nums) {
    const remainder = targetSum - num
    if (canSumMemo(remainder, nums, memo) === true) return true
    memo[targetSum] = true
  }

  memo[targetSum] = false
  return memo[targetSum]
}
