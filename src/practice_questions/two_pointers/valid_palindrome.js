// A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non - alphanumeric characters, it reads the same forward
// and backward.Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

export const isPalindrome = (str) => {
  if (str.length === 0) {
    return true
  }

  // Clean input
  const pattern = /[a-zA-Z0-9]/gm
  let replaced = str.match(pattern)
  // only spaces
  if (replaced === null) {
    return true
  }
  replaced = replaced.join("")
  replaced = replaced.toLowerCase()
  const split = replaced.split("")

  // Using two pointers
  let s = 0
  let f = split.length - 1

  // Prevent pointers from crossing over
  while (s < f) {
    if (split[s] === split[f]) {
      s++
      f--
    } else {
      return false
    }
  }

  return true
}
