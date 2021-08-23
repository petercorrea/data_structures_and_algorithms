// Given a number sequence, find the length of its
// Longest Increasing Subsequence (LIS).
// In an increasing subsequence, all the elements are in
// increasing order (from lowest to highest).

// The time complexity of the above algorithm is exponential
// O(2^n), where ‘n’ is the lengths of the input array. The space complexity is
// O(n) which is used to store the recursion stack.
const LISBrute = function (Arr) {
  function LISRecursive(nums, currentIndex, previousIndex) {
    if (currentIndex === nums.length) return 0

    // include nums[currentIndex] if it is larger than the last included number
    let c1 = 0
    if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex]) {
      c1 = 1 + LISRecursive(nums, currentIndex + 1, currentIndex)
    }

    // excluding the number at currentIndex
    const c2 = LISRecursive(nums, currentIndex + 1, previousIndex)

    return Math.max(c1, c2)
  }

  return LISRecursive(Arr, 0, -1)
}

// Memo
// TC: n*n or n^2
// SC: n^2
const LISMemo = function (Arr) {
  const memo = []

  function LISRecursive(Arr, currentIdx, prevIdx) {
    // if we've reached the end of the array
    if (currentIdx === Arr.length) {
      return 0
    }

    memo[currentIdx] = memo[currentIdx] || []

    // WE ADD 1 TO PREVIDX TO AVOID OOB ERR
    if (typeof memo[currentIdx][prevIdx + 1] === "undefined") {
      let c1 = 0
      if (prevIdx === -1 || Arr[currentIdx] > Arr[prevIdx]) {
        c1 = 1 + LISRecursive(Arr, currentIdx + 1, currentIdx)
      }

      const c2 = LISRecursive(Arr, currentIdx + 1, prevIdx)

      memo[currentIdx][prevIdx + 1] = Math.max(c1, c2)
    }

    return memo[currentIdx][prevIdx + 1]
  }

  return LISRecursive(Arr, 0, -1)
}

// Dynamica Programming

// TC: n^2
// SC: n^2
const LISDP = function (nums) {
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

// nlogn
// patience algo; sorting algo

console.log(LISMemo([4, 2, 3, 6, 10, 1, 12]))
console.log(LISDP([4, 2, 3, 6, 10, 1, 12]))
