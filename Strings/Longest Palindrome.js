const longestPalindrome = (s) => {
  let max = ""
  for (let i = 0; i < s.length; i++) {
    console.log("master loop increment")
    // this loop is to take into account
    // different palindromes like 'aba' and 'abba'
    for (let j = 0; j < 2; j++) {
      let left = i
      let right = i + j
      console.log("outer", left, right)

      //   Expanding the twp pointers
      while (s[left] && s[left] === s[right]) {
        console.log(s[left], s[left])
        left--
        right++
        console.log("inner", left, right)
      }

      //   Saving the new max string
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right)
        console.log("max", max)
      }
    }
  }
  return max
}

longestPalindrome("abracecarcd")
