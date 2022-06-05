// Problem Statement #
// Given a string and a pattern, write a method to count the number of times the pattern appears in the string as a subsequence.

// Example 1: Input: string: “baxmx”, pattern: “ax”
// Output: 2
// Explanation: {baxmx, baxmx}.

// Example 2:

// Input: string: “tomorrow”, pattern: “tor”
// Output: 4
// Explanation: Following are the four occurences: {tomorrow, tomorrow, tomorrow, tomorrow}.

// This problem follows the Longest Common Subsequence (LCS) pattern and is quite similar
// to the Longest Repeating Subsequence; the difference is that we need to count the total
// occurrences of the subsequence.

// TC: 2 ^ m where m is the string(not the pattern)
// SP: m
export const findSPMCount1 = (str, pat) => {
  const findSPMCountRecursive = (str, pat, strIndex, patIndex) => {
    // if we have reached the end of the pattern
    if (patIndex === pat.length) return 1

    // if we have reached the end of the string but pattern has still some characters left
    if (strIndex === str.length) return 0

    let c1 = 0
    if (str[strIndex] === pat[patIndex]) {
      c1 = findSPMCountRecursive(str, pat, strIndex + 1, patIndex + 1)
    }

    const c2 = findSPMCountRecursive(str, pat, strIndex + 1, patIndex)

    return c1 + c2
  }
  return findSPMCountRecursive(str, pat, 0, 0)
}

export const findSPMCountMemo = (str, pat) => {
  const dp = []

  const findSPMCountRecursive = (str, pat, strIndex, patIndex) => {
    // if we have reached the end of the pattern
    if (patIndex === pat.length) return 1

    // if we have reached the end of the string but pattern has still some characters left
    if (strIndex === str.length) return 0

    dp[strIndex] = dp[strIndex] || []
    if (dp[strIndex][patIndex] === null) {
      let c1 = 0
      if (str.charAt(strIndex) === pat.charAt(patIndex)) {
        c1 = findSPMCountRecursive(str, pat, strIndex + 1, patIndex + 1)
      }
      const c2 = findSPMCountRecursive(str, pat, strIndex + 1, patIndex)
      dp[strIndex][patIndex] = c1 + c2
    }

    return dp[strIndex][patIndex]
  }
  return findSPMCountRecursive(str, pat, 0, 0)
}

// TC/SP: n*m
export const findSPMCount2 = (str, pat) => {
  // every empty pattern has one match
  if (pat.length === 0) return 1

  if (str.length === 0 || pat.length > str.length) return 0

  // dp[strIndex][patIndex] will be storing the count of SPM up to str[0..strIndex-1][0..patIndex-1]
  const dp = Array(str.length + 1)
    .fill(0)
    .map(() => Array(pat.length + 1).fill(0))

  // for the empty pattern, we have one matching
  for (let i = 0; i <= str.length; i++) dp[i][0] = 1

  for (let strIndex = 1; strIndex <= str.length; strIndex++) {
    for (let patIndex = 1; patIndex <= pat.length; patIndex++) {
      if (str[strIndex - 1] === pat[patIndex - 1]) {
        dp[strIndex][patIndex] = dp[strIndex - 1][patIndex - 1]
      }
      dp[strIndex][patIndex] += dp[strIndex - 1][patIndex]
    }
  }

  return dp[str.length][pat.length]
}
