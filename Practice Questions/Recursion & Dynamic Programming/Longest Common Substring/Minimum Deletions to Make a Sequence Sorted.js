// Input: {4,2,3,6,10,1,12}
// Output: 2
// Explanation: We need to delete {4,1} to make the remaining sequence sorted {2,3,6,10,12}.

// Input: {-4,10,3,7,15}
// Output: 1
// Explanation: We need to delete { 10} to make the remaining sequence sorted { -4, 3, 7, 15 }.

// Input: {3,2,1,0}
// Output: 3
// Explanation: Since the elements are in reverse order, we have to delete all except one to get a
// sorted sequence. Sorted sequences are {3}, {2}, {1}, and {0}

// If we spend sometime thinking about it, we can convert this to the Longest Increasing Sequence
// and subtract it's length from the string. This will leave behind the total number of deletions.

export const findMinimumDeletions = (nums) =>
  // subtracting the length of LIS from the length of the input array to get
  // minimum number of deletions
  nums.length - findLISLength(nums)

// TC: n^2
// SP: n
const findLISLength = (nums) => {
  const dp = Array(nums.length).fill(0)

  dp[0] = 1

  let maxLength = 1
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1
        maxLength = Math.max(maxLength, dp[i])
      }
    }
  }
  return maxLength
}
