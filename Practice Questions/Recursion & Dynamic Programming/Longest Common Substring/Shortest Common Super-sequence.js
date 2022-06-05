// Input: s1: "abcf" s2:"bdcf"
// Output: 5
// Explanation: The shortest common super- sequence(SCS) is "abdcf".

// Input: s1: "dynamic" s2:"programming"
// Output: 15
// Explanation: The SCS is "dynprogrammicng".

// TC: O2^(n+m)
// SP: O(m+n)
export const SCSS = (string1, string2) => {
  const SCSSRecursive = (str1, str2, i1, i2) => {
    // if we reached the end of one string, return the remaining length of the other string
    if (i1 === str1.length) return str2.length - i2
    if (i2 === str2.length) return str1.length - i1

    if (str1[i1] === str2[i2]) {
      return 1 + SCSSRecursive(str1, str2, i1 + 1, i2 + 1)
    }

    const c1 = 1 + SCSSRecursive(str1, str2, i1 + 1, i2)
    const c2 = 1 + SCSSRecursive(str1, str2, i1, i2 + 1)

    return Math.min(c1, c2)
  }

  return SCSSRecursive(string1, string2, 0, 0)
}

export const SCSSMemo = (string1, string2) => {
  const memo = []

  const SCSSRecursive = (str1, str2, i1, i2) => {
    // if we reached the end of one string, return the remaining length of the other string
    if (i1 === str1.length) return str2.length - i2
    if (i2 === str2.length) return str1.length - i1

    memo[i1] = memo[i1] || []

    if (typeof memo[i1][i2] === "undefined") {
      if (str1[i1] === str2[i2]) {
        memo[i1][i2] = 1 + SCSSRecursive(str1, str2, i1 + 1, i2 + 1)
      } else {
        const c1 = 1 + SCSSRecursive(str1, str2, i1 + 1, i2)
        const c2 = 1 + SCSSRecursive(str1, str2, i1, i2 + 1)
        memo[i1][i2] = Math.min(c1, c2)
      }
    }

    return memo[i1][i2]
  }

  return SCSSRecursive(string1, string2, 0, 0)
}

// TC: On*m
// SP: On*m
export const SCSSDp = (string1, string2) => {
  const dp = Array(string1.length + 1)
    .fill(0)
    .map(() => Array(string2.length + 1).fill(0))

  // if one of the strings is of zero length, SCS would be equal to the length of the other string
  for (let i = 0; i <= string1.length; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= string2.length; j++) {
    dp[0][j] = j
  }

  // The usual tabulation
  for (let i = 1; i <= string1.length; i++) {
    for (let j = 1; j <= string2.length; j++) {
      // Note that we minus 1 here to map back to the original index
      if (string1[i - 1] === string2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        // remember to add one
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[string1.length][string2.length]
}
