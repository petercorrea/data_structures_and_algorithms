// Given two strings s and t of lengths m and n respectively,
// return the minimum window substring of s such that every character in t (including duplicates)
// is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// A substring is a contiguous sequence of characters within the string.

export const minWindow = (s, t) => {
  let min = ""
  let l = 0
  let r = 0
  const hash = {}

  for (const i in t) {
    hash[t[i]] = hash[t[i]] ? hash[t[i]] + 1 : hash[t[i]] = 1
  }

  let count = Object.keys(hash).length

  while (r <= s.length) {
    // traverse until count === 0 i.e. until all letters have been found
    if (count !== 0) {
      const char = s[r]
      // this can go negative
      if (hash[char] !== null) hash[char]--
      if (hash[char] === 0) count--
      r++
    } else {
      // if we have found all letters in t, make window smaller
      const char = s[l]
      if (hash[char] !== null) hash[char]++
      // * we must have the condition '> 0' because for case like "BBBA...", count for B could be negative
      if (hash[char] > 0) count++
      const temp = s.substring(l, r)

      // update minimum
      if (min === "" || min.length >= temp.length) {
        min = temp
      }
      l++
    }
  }
  return min
}
