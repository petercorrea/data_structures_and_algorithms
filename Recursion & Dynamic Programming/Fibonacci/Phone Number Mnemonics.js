/*
Problem Statement:
Determine every possible mnemonic a give phone number can have.

Clarifying Questions and Assumptions:

Sample Input and Output:

Solution #1 - O() time | O() space:

Notes:

*/

// Implementation
export const phoneNumberMnemonics = (phoneNumber) => {
  const alphabet = [
    ["0"],
    ["1"],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
  ]

  const recurse = (phoneNumber, alphabet, idx = 0, temp = [], cache = []) => {
    if (idx === phoneNumber.length) {
      const copy = [...temp]
      cache.push(copy)
      return null
    }

    const choices = alphabet[phoneNumber[idx]]
    for (const choice of choices) {
      const copy = [...temp]
      copy.push(choice)
      recurse(phoneNumber, alphabet, idx + 1, copy, cache)
    }

    return cache
  }

  return recurse(phoneNumber, alphabet)
}

// Tests
console.log(phoneNumberMnemonics("786"))
