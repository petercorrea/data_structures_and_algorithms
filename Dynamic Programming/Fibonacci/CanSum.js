// Can Sum
// Given a target sum and an array of numbers,
// Determine if a sequence of numbers successfully add up to the target sum.
// You can repeat an element at a given index.

// Brute Force
// TC: nums^targetSum
// SC: targetSum
const canSum = (targetSum, nums) => {
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  if (nums.length === 0) return false

  for (const num of nums) {
    const remainder = targetSum - num
    if (canSum(remainder, nums) == true) return true
  }

  return false
}

// Memo
const canSumMemo = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (nums.length === 0) return false
  if (targetSum < 0) return false

  for (const num of nums) {
    const remainder = targetSum - num
    if (canSumMemo(remainder, nums, memo) == true) return true
    memo[targetSum] = true
  }

  memo[targetSum] = false
  return memo[targetSum]
}

console.log(canSumMemo(7, [2, 3])) // true
console.log(canSumMemo(7, [5, 3, 4, 7])) // true
console.log(canSumMemo(7, [2, 4])) // false
console.log(canSumMemo(8, [2, 3, 5])) // true
console.log(canSumMemo(300, [7, 14])) // false
