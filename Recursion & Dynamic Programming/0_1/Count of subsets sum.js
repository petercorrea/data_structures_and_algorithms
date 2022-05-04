// Problem Statement
// Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.
export const countSubsetsMemo = (nums, sum) => {
  const memo = []

  const solveRecursive = (nums, sum, currentIndex) => {
    if (sum === 0) return 1
    if (currentIndex >= nums.length || nums.length === 0) return 0

    memo[currentIndex] = memo[currentIndex] || []

    if (typeof memo[currentIndex][sum] === "undefined") {
      let set1 = 0

      if (nums[currentIndex] <= sum) {
        set1 = solveRecursive(nums, sum - nums[currentIndex], currentIndex + 1)
      }

      const set2 = solveRecursive(nums, sum, currentIndex + 1)

      // since we are looking to count the possible ways, we add the sums returned
      memo[currentIndex][sum] = set1 + set2
    }

    return memo[currentIndex][sum]
  }

  return solveRecursive(nums, sum, 0)
}

export const countSubsetsTab = (nums, sum) => {
  if (nums.length === 0) return 0

  const n = nums.length

  const table = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0))

  for (let i = 0; i < n; i++) {
    table[i][0] = 1
  }

  for (let s = 1; s <= sum; s++) {
    table[0][s] = nums[0] === s ? 1 : 0
  }

  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      table[i][s] = table[i - 1][s]

      if (nums[i] <= s) {
        // we accumulate the sum
        table[i][s] += table[i - 1][s - nums[i]]
      }
    }
  }

  return table[n - 1][sum]
}

console.log(`Count of subset sum is: ---> ${countSubsetsTab([1, 1, 2, 3], 4)}`)
console.log(
  `Count of subset sum is: ---> ${countSubsetsTab([1, 2, 7, 1, 5], 9)}`
)
