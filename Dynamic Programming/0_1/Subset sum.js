// Problem Statement
// Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.

// This is exactly the same as the Equal Subset Sum problem, but instead of the target sum being half the total sum, it's the full total sum.

const canPartition = function (nums, sum) {
  const n = nums.length
  if (n == 0) return 0

  const table = Array(n)
    .fill(false)
    .map(() => Array(sum + 1).fill(false))

  for (let i = 0; i < n; i++) {
    table[i][0] = true
  }

  for (let s = 1; s <= sum; s++) {
    table[0][s] = nums[0] == s
  }

  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      if (table[i - 1][s]) {
        table[i][s] = table[i - 1][s]
      } else if (nums[i] <= s) {
        table[i][s] = table[i - 1][s - nums[i]]
      }
    }
  }

  return table[n - 1][sum]
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`)
console.log(
  `Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`
)
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`)
