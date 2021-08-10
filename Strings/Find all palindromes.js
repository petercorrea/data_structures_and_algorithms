const s = "Hello, mom mommy dad daddy racecar petep Petep."
// 5 palindromes

function lookForPali(param) {
  const results = []

  for (let i = 0; i < param.length; i++) {
    let reverse = []

    if (param[i] == " ") {
      // Substring each word
      let word = param.substring(0, i++)
      const pattern = /[A-z]*/
      word = pattern.exec(word)[0]
      word = word.toLocaleLowerCase()

      // Iterate the word backwards, push into array
      for (let i = word.length - 1; i >= 0; i--) {
        reverse.push(word[i])
      }

      // Join the array into a string
      const reverseWord = reverse.join("")

      // Check for pali, push inton results
      word == reverseWord ? results.push(word) : (reverse = [])

      // Clean out reverse
      reverse = []

      // Update string
      param = param.substring(i)

      // Reset i
      i = 0
    }
  }

  return results
}

console.log(lookForPali(s))
