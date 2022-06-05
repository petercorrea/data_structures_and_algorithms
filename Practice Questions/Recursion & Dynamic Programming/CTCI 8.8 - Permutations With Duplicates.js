// Problem Statement:
// Write a method to compute all permutations of a string whose characters are not necessarily unique. The list of permutations should not have duplicates.

// Clarifications and Assumptions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
//
export const permNoDups = (string) => {
  const answers = []

  const recurse = (currPerm, remainingChars) => {
    if (remainingChars.length === 0) {
      answers.push(currPerm)
    } else {
      const usedChars = {}
      for (let i = 0; i < remainingChars.length; i++) {
        if (!usedChars[remainingChars.charAt(i)]) {
          usedChars[remainingChars.charAt(i)] = true
          recurse(
            currPerm + remainingChars.charAt(i),
            remainingChars.slice(0, i) + remainingChars.slice(i + 1)
          )
        }
      }
    }
  }
  recurse("", string)
  return answers
}

// Sample Input:
// const test1 = "aaa"
// const test2 = "abc"
// const test3 = "aba"

// Notes after implementing:
