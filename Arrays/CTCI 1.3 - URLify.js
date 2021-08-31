// Problem Statement:
// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.
// (Note: if implementing in Java, please use a character array so that you can perform this
// operation in place.)

// Clarifing Questions:
// 	- Must we expect to trim both ends of the string?

// Assume:
// 	- Expect to only need to trim the end of the string

// Sample Input and Output:
// ("Mr John Smith    ", 13) -> "Mr%20John%20Smith"

// Proposed Solution:
//		We can implemented a two pass scan. On the first pass we'll trim off whitespace at the beginning,
// 		and convert the string as we go.
// 		On the second pass we'll traverse backwards and just trim the whitespace at the end of the string.
//  	This will result in a TC and SC of O(n) where n is the length of the input string.

const URLify = (string, trueLength) => {
  let trimmedString = ""
  let convertedString = ""

  for (let i = 0; i < trueLength; i++) {
    trimmedString += string[i]
  }

  for (let i = 0; i < trueLength; i++) {
    if (trimmedString[i] === " ") {
      convertedString += "%20"
    } else {
      convertedString += trimmedString[i]
    }
  }

  return convertedString
}

// Test
console.log(URLify("Pet er   ", 6)) // Pet%20er
console.log(URLify("Mich  ael   ", 9)) // Mich%20%20ael

// Notes after implementing:
// Earlier implementation involved accessing the trimmedString via index to append new values.
// However the index of the converted string might not exist as in should be shorter than the input string.
// Concat instead.
