// Given a string s, find the length of the longest substring without repeating characters.

export const LSS = (str) => {
  if (str.length === 0) {
    return 0
  }

  if (str.length === 1) {
    return 1
  }

  const hash = {}
  let l = 0
  let r = 0
  let maxLength = 0

  while (r < str.length) {
    if (hash[str[r]] === undefined) {
      hash[str[r]] = true
      maxLength = Math.max(maxLength, r - l + 1)
      r++
    } else {
      while (str[l] !== str[r]) {
        delete hash[str[l]]
        l++
      }

      delete hash[str[l]]
      l++
    }
  }

  return maxLength
}
