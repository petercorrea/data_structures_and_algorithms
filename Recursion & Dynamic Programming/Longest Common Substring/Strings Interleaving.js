// Give three strings ‘m’, ‘n’, and ‘p’, write a method to find out if ‘p’ has been
// formed by interleaving ‘m’ and ‘n’.‘p’ would be considered interleaving ‘m’ and ‘n’ if
// it contains all the letters from ‘m’ and ‘n’ and the order of letters is preserved too.

// Input: m="abd", n="cef", p="abcdef"
// Output: true
// Explanation: 'p' contains all the letters from 'm' and 'n' and preserves their order too.

// Input: m="abd", n="cef", p="adcbef"
// Output: false
// Explanation: 'p' contains all the letters from 'm' and 'n' but does not preserve the order.

// Input: m="abc", n="def", p="abdccf"
// Output: false
// Explanation: 'p' does not contain all the letters from 'm' and 'n'.

// Input: m="abcdef", n="mnop", p="mnaobcdepf"
// Output: true
// Explanation: 'p' contains all the letters from 'm' and 'n' and preserves their order too.

// TC: 2^(n+m)
// SP: m+n
const findSI = (m, n, p) => {
  const findSIRecursive = (m, n, p, mIndex, nIndex, pIndex) => {
    // if we have reached the end of the all the strings
    if (mIndex === m.length && nIndex === n.length && pIndex === p.length)
      return true

    // if we have reached the end of 'p' but 'm' or 'n' still have some characters left
    if (pIndex === p.length) return false

    let b1 = false
    let b2 = false
    if (mIndex < m.length && m.charAt(mIndex) === p.charAt(pIndex))
      b1 = findSIRecursive(m, n, p, mIndex + 1, nIndex, pIndex + 1)

    if (nIndex < n.length && n.charAt(nIndex) === p.charAt(pIndex))
      b2 = findSIRecursive(m, n, p, mIndex, nIndex + 1, pIndex + 1)

    return b1 || b2
  }
  return findSIRecursive(m, n, p, 0, 0, 0)
}

export const findSIMemo = (m, n, p) => {
  const dp = []

  const findSIRecursive = (m, n, p, mIndex, nIndex, pIndex) => {
    // if we have reached the end of the all the strings
    if (mIndex === m.length && nIndex === n.length && pIndex === p.length)
      return true

    // if we have reached the end of 'p' but 'm' or 'n' still has some characters left
    if (pIndex === p.length) return false

    const subProblemKey = `${mIndex}-${nIndex}-${pIndex}`
    if (typeof dp[subProblemKey] === "undefined") {
      let b1 = false
      let b2 = false

      if (mIndex < m.length && m[mIndex] === p[pIndex]) {
        b1 = findSIRecursive(m, n, p, mIndex + 1, nIndex, pIndex + 1)
      }

      if (nIndex < n.length && n[nIndex] === p[pIndex]) {
        b2 = findSIRecursive(m, n, p, mIndex, nIndex + 1, pIndex + 1)
      }

      dp[subProblemKey] = b1 || b2
    }

    return dp[subProblemKey]
  }
  return findSIRecursive(m, n, p, 0, 0, 0)
}

// TC: m*n
// SP: m*n
export const findSIDp = (m, n, p) => {
  // dp[mIndex][nIndex] will be storing the result of string leterleaving
  // up to p[0..mIndex+nIndex-1]
  const dp = Array(m.length + 1)
    .fill(false)
    .map(() => Array(n.length + 1).fill(false))

  // make sure if lengths of the strings add up
  if (m.length + n.length !== p.length) return false

  for (let mIndex = 0; mIndex <= m.length; mIndex++) {
    for (let nIndex = 0; nIndex <= n.length; nIndex++) {
      // if 'm' and 'n' are empty, then 'p' must have been empty too.
      if (mIndex === 0 && nIndex === 0) {
        dp[mIndex][nIndex] = true
      }
      // if 'm' is empty, we need to check the leterleaving with 'n' only
      else if (mIndex === 0 && n[nIndex - 1] === p[mIndex + nIndex - 1]) {
        dp[mIndex][nIndex] = dp[mIndex][nIndex - 1]
      }
      // if 'n' is empty, we need to check the leterleaving with 'm' only
      else if (nIndex === 0 && m[mIndex - 1] === p[mIndex + nIndex - 1]) {
        dp[mIndex][nIndex] = dp[mIndex - 1][nIndex]
      } else {
        // if the letter of 'm' and 'p' match, we take whatever is matched till mIndex-1
        if (mIndex > 0 && m[mIndex - 1] === p[mIndex + nIndex - 1]) {
          dp[mIndex][nIndex] = dp[mIndex - 1][nIndex]
        }
        // if the letter of 'n' and 'p' match, we take whatever is matched till nIndex-1 too
        // note the '||', this is required when we have common letters
        if (nIndex > 0 && n[nIndex - 1] === p[mIndex + nIndex - 1]) {
          dp[mIndex][nIndex] = dp[mIndex][nIndex] || dp[mIndex][nIndex - 1]
        }
      }
    }
  }
  return dp[m.length][n.length]
}

console.log(`String leterleaving: ---> ${findSI("abd", "cef", "abcdef")}`)
console.log(`String leterleaving: ---> ${findSI("abd", "cef", "adcbef")}`)
console.log(`String leterleaving: ---> ${findSI("abc", "def", "abdccf")}`)
console.log(
  `String leterleaving: ---> ${findSI("abcdef", "mnop", "mnaobcdepf")}`
)
