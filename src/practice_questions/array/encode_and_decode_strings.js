// Design an algorithm to encode a list of strings to a string.
// The encoded string is then sent over the network and is decoded
// back to the original list of strings.
// Please implement encode and decode

// The problems is that we can receive any text, including what we might use as our delimiter

export const encode = (arr) => {
  const bin = arr.map((str) => {
    let word = ""
    for (const i in str) {
      word += str[i].charCodeAt(0).toString(2)
      word += "#"
    }
    return word
  })
  return bin.join("-")
}

export const decode = (str) => {
  const encodedWords = str.split("-")
  const words = []

  for (let i = 0; i < encodedWords.length; i++) {
    const encodedLetters = encodedWords[i].split("#")
    const charCodes = encodedLetters.map((bin) => parseInt(bin, 2))
    const letters = charCodes.map((code) => String.fromCharCode(code))
    // remove newline char at end from split function
    letters.pop()
    const word = letters.join("")
    words.push(word)
  }

  return words
}
