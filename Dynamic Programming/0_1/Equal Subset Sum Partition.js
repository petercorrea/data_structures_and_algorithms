// Problem Statement:
// Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.
// Return a boolean value.

// For both subsets to equal the same value, they must equal exactly half the sum.

const canPartitionMemo = function (nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }

  if (sum % 2 !== 0) return false
  const memo = []

  function solveRecursive(nums, sum, currentIndex) {
    if (currentIndex >= nums.length || nums.length == 0) return true
    if (sum == 0) return true

    memo[currentIndex] = memo[currentIndex] || []

    if (typeof memo[currentIndex][sum] === "undefined") {
      // we don't need to compare two sets, simply return true if possible
      if (nums[currentIndex] <= sum) {
        // if the base case returns true when selecting the item, return true
        if (
          solveRecursive(
            nums,
            sum - nums[currentIndex],
            currentIndex + 1
          )
        ) {
          memo[currentIndex][sum] = true
          return true
        }
      }

      // otherwise evaluate the result without selecting the item
      memo[currentIndex][sum] = solveRecursive(
        nums,
        sum,
        currentIndex + 1
      )
    }

    return memo[currentIndex][sum]
  }

  return solveRecursive(nums, sum, 0)
}

const canPartitionDp = function (nums) {
  if (nums.length == 0) return false
  const n = nums.length
  let sum = 0

  for (let i = 0; i < n; i++) {
    sum += nums[i]
  }

  if (sum % 2 != 0) return false

  sum /= 2

  // setup table, don't forget to add an additional column to represent a sum of 0
  const table = Array(n)
    .fill(false)
    .map(() => Array(sum + 1).fill(0))

  // setup first column, it is true that we can make an empty set from any other set
  for (let i = 0; i < n; i++) {
    table[i][0] = true
  }

  // setup first row, a set with a single item is a valid subset to only a sum of itself
  // do not rewrite the data under the first column
  for (let s = 1; s <= sum; s++) {
    table[0][s] = nums[0] == s
  }

  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      // if we can make a subset excluding the item, we'll take that truth value
      if (table[i - 1][s]) {
        table[i][s] = table[i - 1][s]
      } else if (nums[i] <= s) {
        // else if the number is <= to the current sum 'S', include the item
        table[i][s] = table[i - 1][s - nums[i]]
      }
    }
  }

  return table[n - 1][sum]
}

console.log(`Can partitioning be done: ---> ${canPartitionDp([1, 2, 3, 4])}`) // true
console.log(
  `Can partitioning be done: ---> ${canPartitionDp([1, 1, 3, 4, 7])}`
) // true
console.log(`Can partitioning be done: ---> ${canPartitionDp([2, 3, 4, 6])}`) // false
