// Given a sequence, find the length of its longest repeating subsequence (LRS).
// A repeating subsequence will be the one that appears at least twice in the original
// sequence and is not overlapping(i.e.none of the corresponding characters in the repeating
// subsequences have the same index).

// Example 1:

// Input: “t o m o r r o w”
// Output: 2
// Explanation: The longest repeating subsequence is “or” {tomorrow}.

// Example 2:

// Input: “a a b d b c e c”
// Output: 3
// Explanation: The longest repeating subsequence is “a b c” {a a b d b c e c}.

// Example 3:

// Input: “f m f f”
// Output: 2
// Explanation: The longest repeating subsequence is “f f” {f m f f, f m f f}. Please note the second last character is shared in LRS.

// TC: 2^n
// SP: n
const findLRSLength = (str) => {
  const findLRSLengthRecursive = (str, i1, i2) => {
    if (i1 === str.length || i2 === str.length) return 0

    if (i1 !== i2 && str[i1] === str[i2])
      return 1 + findLRSLengthRecursive(str, i1 + 1, i2 + 1)

    const c1 = findLRSLengthRecursive(str, i1, i2 + 1)
    const c2 = findLRSLengthRecursive(str, i1 + 1, i2)

    return Math.max(c1, c2)
  }
  return findLRSLengthRecursive(str, 0, 0)
}

const findLRSLengthMemo = (str) => {
  const dp = []

  const findLRSLengthRecursive = (str, i1, i2) => {
    if (i1 === str.length || i2 === str.length) return 0

    dp[i1] = dp[i1] || []
    if (typeof dp[i1][i2] === "undefined") {
      if (i1 !== i2 && str[i1] === str[i2])
        dp[i1][i2] = 1 + findLRSLengthRecursive(str, i1 + 1, i2 + 1)
      else {
        const c1 = findLRSLengthRecursive(str, i1, i2 + 1)
        const c2 = findLRSLengthRecursive(str, i1 + 1, i2)
        dp[i1][i2] = Math.max(c1, c2)
      }
    }

    return dp[i1][i2]
  }
  return findLRSLengthRecursive(str, 0, 0)
}

// TC & SP: n^2
const findLRSLengthDP = (str) => {
  const dp = Array(str.length + 1)
    .fill(0)
    .map(() => Array(str.length + 1).fill(0))

  let maxLength = 0
  // dp[i1][i2] will be storing the LRS up to str[0..i1-1][0..i2-1]
  // this also means that subsequences of length zero (first row and column of dp[][]),
  // will always have LRS of size zero.
  for (let i1 = 1; i1 <= str.length; i1++) {
    for (let i2 = 1; i2 <= str.length; i2++) {
      if (i1 !== i2 && str[i1 - 1] === str[i2 - 1]) {
        dp[i1][i2] = 1 + dp[i1 - 1][i2 - 1]
      } else {
        dp[i1][i2] = Math.max(dp[i1 - 1][i2], dp[i1][i2 - 1])
      }

      maxLength = Math.max(maxLength, dp[i1][i2])
    }
  }
  return maxLength
}

console.log(
  `Length of Longest Repeating Subsequence: ---> ${findLRSLength("tomorrow")}`
)
console.log(
  `Length of Longest Repeating Subsequence: ---> ${findLRSLengthMemo(
    "tomorrow"
  )}`
)
console.log(
  `Length of Longest Repeating Subsequence: ---> ${findLRSLengthDP("tomorrow")}`
)
