// Given a list of integers find the mode and
// the frequency of the mode.
// The mode in a list of numbers is the value that occurs the most often.
// If no number in the list is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function countOccurances(str) {
  // if str is empty
  if (str.length === 0) {
    return null
  }

  // if str is of length 1
  if (str.length === 1) {
    console.log("only 1:", str)
    return str
  }

  let sub1
  let sub2
  const max = {}
  let currentMax = 0
  let maxChar

  // Loop through string
  for (let i = 0; i < str.length; i++) {
    console.log("incoming str: ", str)

    // if there is no comma, and index is at the end of the string
    if (str[i] !== "," && i === str.length - 1) {
      console.log("base")
      if (str in max) {
        max[sub1]++
      } else {
        max[sub1] = 1
      }

      break
    }

    // If the char is a comma, substring the two sides
    // update str with remaining string (sub2) and reset index of loop
    if (str[i] === ",") {
      sub1 = str.substring(0, i)
      sub2 = str.substring(i + 2)

      str = sub2
      i = 0
      console.log("outgoing str: ", str)
      // Update occurance of string inside max obj
      if (sub1 in max) {
        max[sub1]++
      } else {
        max[sub1] = 1
      }
    }
  }

  // Loop max obj to find key, value pair with highest occurance
  for (char in max) {
    if (max[char] > currentMax) {
      currentMax = max[char]
      maxChar = char
    }
  }

  return max
}

countOccurances("1")
