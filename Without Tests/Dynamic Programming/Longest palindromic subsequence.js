// Problem Statement
// Given a sequence, find the length of its Longest Palindromic Subsequence (LPS).
// In a palindromic subsequence, elements read the same backward and forward.

// A subsequence is a sequence that can be derived from another sequence by deleting
// some or no elements without changing the order of the remaining elements.

// A basic brute-force solution could be to try all the subsequences of the given sequence.
// We can start processing from the beginning and the end of the sequence.So at any step, we have two options:
// If the element at the beginning and the end are the same, we increment our count by two and
// make a recursive call for the remaining sequence.
// We will skip the element either from the beginning or the end to make two recursive calls
// for the remaining subsequence.
// If option one applies then it will give us the length of LPS; otherwise, the length of
// LPS will be the maximum number returned by the two recurse calls from the second option.

// Similar problems include:
// 		-Minimum Deletions in a String to make it a Palindrome (subtract LPS from String length)
// 		-Minimum insertions in a string to make it a palindrome (same as above)
// 		-Find if a string is K-Palindromic by removing at most K chars (if min deletions is <= K)

export const findLPSMemo = (string) => {
  const memo = []

  const solveRecursive = (string, startIdx, endIdx) => {
    if (startIdx > endIdx) return 0
    if (startIdx === endIdx) return 1

    memo[startIdx] = memo[startIdx] || []

    if (typeof memo[startIdx][endIdx] === "undefined") {
      if (string[startIdx] === string[endIdx]) {
        memo[startIdx][endIdx] = 2 + solveRecursive(string, startIdx + 1, endIdx - 1)
      } else {
        const c1 = solveRecursive(string, startIdx + 1, endIdx)
        const c2 = solveRecursive(string, startIdx, endIdx - 1)
        memo[startIdx][endIdx] = Math.max(c1, c2)
      }
    }
    return memo[startIdx][endIdx]
  }

  return solveRecursive(string, 0, string.length - 1)
}

export const findLPSTab = (string) => {
  const n = string.length
  const table = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    table[i][i] = 1
  }

  for (let startIdx = string.length - 2; startIdx >= 0; startIdx--) {
    for (let endIdx = startIdx + 1; endIdx < string.length; endIdx++) {
      if (string[startIdx] === string[endIdx]) {
        table[startIdx][endIdx] = 2 + table[startIdx + 1][endIdx - 1]
      } else {
        table[startIdx][endIdx] = Math.max(
          table[startIdx + 1][endIdx],
          table[startIdx][endIdx - 1]
        )
      }
    }
  }

  return table[0][string.length - 1]
}
