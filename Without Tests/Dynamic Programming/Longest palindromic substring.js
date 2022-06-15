// Unlike a subsequence, a substring must contain only adjacent characters.

export const findLPSLengthMemo = (string) => {
  const memo = []

  const solveRecursive = (string, startIdx, endIdx) => {
    if (startIdx > endIdx) return 0
    // every string with one character is a palindrome

    if (startIdx === endIdx) return 1

    memo[startIdx] = memo[startIdx] || []

    if (typeof memo[startIdx][endIdx] === "undefined") {
      // case 1: elements at the beginning and the end are the same
      if (string[startIdx] === string[endIdx]) {
        const remainingStringLength = endIdx - startIdx - 1
        // check if the remaining string is also a palindrome
        if (
          remainingStringLength
          === solveRecursive(string, startIdx + 1, endIdx - 1)
        ) {
          memo[startIdx][endIdx] = remainingStringLength + 2
          return memo[startIdx][endIdx]
        }
      }
      // case 2: skip one character either from the beginning or the end
      const c1 = solveRecursive(string, startIdx + 1, endIdx)
      const c2 = solveRecursive(string, startIdx, endIdx - 1)
      memo[startIdx][endIdx] = Math.max(c1, c2)
    }
    return memo[startIdx][endIdx]
  }

  return solveRecursive(string, 0, string.length - 1)
}

export const findLPSLengthTab = (string) => {
  const n = string.length

  const table = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    table[i][i] = true
  }

  let maxLength = 1

  for (let startIdx = string.length - 2; startIdx >= 0; startIdx--) {
    for (let endIdx = startIdx + 1; endIdx < string.length; endIdx++) {
      if (string[startIdx] === string[endIdx]) {
        // if it's a two character string or if the remaining string is a palindrome too
        if (endIdx - startIdx === 1 || table[startIdx + 1][endIdx - 1]) {
          table[startIdx][endIdx] = true
          // take the current length of the palindrome
          maxLength = Math.max(maxLength, endIdx - startIdx + 1)
        }
      }
    }
  }
  return maxLength
}
