// Given two strings ‘s1’ and ‘s2’, find the length of the longest substring which is common in both the strings.

// Brute Force
// TC: O3^(m+n) where ‘m’ and ‘n’ are the lengths of the two input strings.
// SC: O(m+n) this space will be used to store the recursion stack.

// when tabulizing, always include extra column for data holder
// tips: be mindful of variables bering used for BOTH accessing values and setting values
export const LCS = (string1, string2) => {
  const LCSR = (str1, str2, idx1, idx2, count) => {
    // base case
    if (idx1 === str1.length || idx2 === str2.length) {
      return count
    }

    // case: when both values are the same
    if (str1[idx1] === str2[idx2]) {
      count = LCSR(str1, str2, idx1 + 1, idx2 + 1, count + 1)
    }

    // case: when the two values are not the same
    const count2 = LCSR(str1, str2, idx1 + 1, idx2, 0)
    const count3 = LCSR(str1, str2, idx1, idx2 + 1, 0)

    // return Math.max
    return Math.max(count, Math.max(count2, count3))
  }

  return LCSR(string1, string2, 0, 0, 0)
}

// Memoization
export const LCSMemo = (string1, string2) => {
  const memo = []

  const LCSR = (str1, str2, idx1, idx2, count) => {
    if (idx1 === str1.length || idx2 === str2.length) {
      return count
    }

    memo[idx1] = memo[idx1] || []
    memo[idx1][idx2] = memo[idx1][idx2] || []

    if (typeof memo[idx1][idx2][count] === "undefined") {
      // since we're using 'count' to assign a value in location memo[idx1][idx2][count]
      // we'll save a copy of the value as to not interupt the assigning
      let count1 = count
      if (str1[idx1] === str2[idx2]) {
        count1 = LCSR(str1, str2, idx1 + 1, idx2 + 1, count + 1)
      }

      const count2 = LCSR(str1, str2, idx1 + 1, idx2, 0)
      const count3 = LCSR(str1, str2, idx1, idx2 + 1, 0)
      memo[idx1][idx2][count] = Math.max(count1, Math.max(count2, count3))
    }

    return memo[idx1][idx2][count]
  }

  return LCSR(string1, string2, 0, 0, 0)
}

// Tabulation
// TC & SC: O(m*n), where ‘m’ and ‘n’ are the lengths of the two input strings
export const LCSTab = (string1, string2) => {
  // create table
  const tab = Array(string1.length + 1)
    .fill(0)
    .map(() => Array(string2.length + 1).fill(0))

  // initialize container to hold maxLength
  let maxLength = 0

  for (let i = 1; i <= string1.length; i++) {
    for (let j = 1; j <= string2.length; j++) {
      if (string1.charAt(i - 1) === string2.charAt(j - 1)) {
        tab[i][j] = 1 + tab[i - 1][j - 1]
        maxLength = Math.max(maxLength, tab[i][j])
      }
    }
  }

  return maxLength
}

// Optimized Space solution. SP: 0(n) length of second string
export const LCSTabOptimized = (string1, string2) => {
  const tab = Array(string1.length + 1)
    .fill(0)
    .map(() => Array(string2.length).fill(0))

  let max = 0

  for (let i = 1; i <= string1.length; i++) {
    for (let j = 1; j <= string2.length; j++) {
      // erase previosuly computed result on current row
      tab[i - 1][j] = 0

      if (string1[i - 1] === string2[i - 1]) {
        // current row = 1 + previous row
        tab[i % 2][j] = 1 + tab[(i - 1) % 2][j - 1]
        // compare form current row
        max = Math.max(max, tab[i % 2][j])
      }
    }
  }

  return max
}
