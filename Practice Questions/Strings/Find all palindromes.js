// Sample Input
// const s = "Hello, mom mommy dad daddy racecar petep Petep."
// 5 palindromes

export const lookForPali = (param) => {
  const results = []

  for (let i = 0; i < param.length; i++) {
    let reverse = []

    if (param[i] === " ") {
      // Substring each word
      const word = param.substring(0, i++)
      const pattern = /[A-z]*/
      const result = pattern.exec(word)
      let match = result[0]
      match = match.toLocaleLowerCase()

      // Iterate the word backwards, push into array
      for (let i = match.length - 1; i >= 0; i--) {
        reverse.push(match[i])
      }

      // Join the array into a string
      const reverseWord = reverse.join("")

      // Check for pali, push into results
      if (match === reverseWord) {
        results.push(match)
      } else reverse = []

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
