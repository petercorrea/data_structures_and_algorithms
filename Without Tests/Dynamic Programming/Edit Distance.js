// Given strings s1 and s2, we need to transform s1 into s2 by deleting, inserting,
// or replacing characters.Write a function to calculate the count of the minimum
// number of edit operations.

// TC: 3^(n+m)
// SP: n + m for execution stack
export const findMinOperations = (s1, s2) => {
  const findMinOperationsRecursive = (s1, s2, i1, i2) => {
    // if we have reached the end of s1, then we have to insert all the remaining characters of s2
    if (i1 === s1.length) return s2.length - i2

    // if we have reached the end of s2, then we have to delete all the remaining characters of s1
    if (i2 === s2.length) return s1.length - i1

    // If the strings have a matching character, we can recursively match for the remaining lengths.
    if (s1.charAt(i1) === s2.charAt(i2)) return findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1)

    const c1 = 1 + findMinOperationsRecursive(s1, s2, i1 + 1, i2) // perform deletion
    const c2 = 1 + findMinOperationsRecursive(s1, s2, i1, i2 + 1) // perform insertion
    const c3 = 1 + findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1) // perform replacement

    return Math.min(c1, Math.min(c2, c3))
  }
  return findMinOperationsRecursive(s1, s2, 0, 0)
}

// TC: n*m
// SP: (m*n)+(m+n) array + execution stack
export const findMinOperationsMemo = (s1, s2) => {
  const dp = []

  const findMinOperationsRecursive = (s1, s2, i1, i2) => {
    dp[i1] = dp[i1] || []
    if (typeof dp[i1][i2] === "undefined") {
      // if we have reached the end of s1, then we have to insert all the remaining characters of s2
      if (i1 === s1.length) dp[i1][i2] = s2.length - i2
      // if we have reached the end of s2, then we have to delete all the remaining characters of s1
      else if (i2 === s2.length) dp[i1][i2] = s1.length - i1
      // If the strings have a matching character, we can recursively match for the remaining lengths
      else if (s1[i1] === s2[i2]) dp[i1][i2] = findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1)
      else {
        const c1 = findMinOperationsRecursive(s1, s2, i1 + 1, i2) // delete
        const c2 = findMinOperationsRecursive(s1, s2, i1, i2 + 1) // insert
        const c3 = findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1) // replace
        dp[i1][i2] = 1 + Math.min(c1, Math.min(c2, c3))
      }
    }

    return dp[i1][i2]
  }
  return findMinOperationsRecursive(s1, s2, 0, 0)
}

// TC: n*m
// SP: n*m
export const findMinOperationsDp = (s1, s2) => {
  const dp = Array(s1.length + 1)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0))

  // if s2 is empty, we can remove all the characters of s1 to make it empty too
  for (let i1 = 0; i1 <= s1.length; i1++) dp[i1][0] = i1

  // if s1 is empty, we have to insert all the characters of s2
  for (let i2 = 0; i2 <= s2.length; i2++) dp[0][i2] = i2

  for (let i1 = 1; i1 <= s1.length; i1++) {
    for (let i2 = 1; i2 <= s2.length; i2++) {
      // If the strings have a matching character, we can recursively match for the remaining lengths
      if (s1.charAt(i1 - 1) === s2.charAt(i2 - 1)) {
        dp[i1][i2] = dp[i1 - 1][i2 - 1]
      } else {
        dp[i1][i2] = 1
          + Math.min(
            dp[i1 - 1][i2], // delete
            Math.min(
              dp[i1][i2 - 1], // insert
              dp[i1 - 1][i2 - 1] // replace
            )
          )
      }
    }
  }

  return dp[s1.length][s2.length]
}
