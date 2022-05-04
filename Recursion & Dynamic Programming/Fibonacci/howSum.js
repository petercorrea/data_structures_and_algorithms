// Given a targetSum and an array of numbers,
// determine if any combination of numbers can be arrange
// to reach the targetSum. Return only one combination of numbers, else return null.

// Brute
// TC: nums^targetSum
// SP: targetSum
export const howSum = (targetSum, nums) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (nums.length === 0) return null

  for (const num of nums) {
    const remainder = targetSum - num

    const result = howSum(remainder, nums)

    if (result !== null) {
      result.push(num)
      return result
    }
  }

  return null
}

// Memo
// TC: nums * targetSum
// SC: targetSum + (m*m) the stack and memo obj.
// Memo obj will have at most m keys of m length
const howSumMemo = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (nums.length === 0) return null

  for (const num of nums) {
    const remainder = targetSum - num

    const result = howSumMemo(remainder, nums, memo)

    if (result !== null) {
      result.push(num)
      memo[targetSum] = result
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return memo[targetSum]
}

console.log(howSumMemo(7, [2, 3])) // [3, 2, 2]
console.log(howSumMemo(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSumMemo(7, [2, 4])) // null
console.log(howSumMemo(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSumMemo(300, [7, 14])) // null
