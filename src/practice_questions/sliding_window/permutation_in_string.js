// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

export const permutationInString = (s1, s2) => {
  if (s1.length > s2.length) return false

  // setup hash
  const neededChars = {}
  for (const i in s1) {
    const char = s1[i]
    if (neededChars[char]) {
      neededChars[char]++
    } else {
      neededChars[char] = 1
    }
  }

  // sliding window
  let l = 0
  let r = 0
  let requiredLength = s1.length

  while (r < s2.length) {
    // if this char is in str1
    if (neededChars[s2[r]] > 0) requiredLength--
    neededChars[s2[r]]--
    r++

    // found a permutation
    if (requiredLength === 0) return true

    // update pointer

    // check window size
    // requiredLength > 0; && window.length === s1.length
    if (r - l === s1.length) {
      // if the char was a required char
      if (neededChars[s2[l]] >= 0) requiredLength++
      neededChars[s2[l]]++
      l++
    }
  }
  return false
}
