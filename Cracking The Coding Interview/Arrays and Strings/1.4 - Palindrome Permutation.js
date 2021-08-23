// Problem Statement:
// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.A permutation
// is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
// (Tact Coa) -> true **tacocat**

// Proposed Solution:
//		A palindrome implies symmetry. That a word spelled backwards is the same as it would
// 		be forward. There are two cases that comes to mind, when the length of the word is even
// 		and when it is odd.

// 		"tacocat" is odd and we can notice that there is an even amount of each letter with the exception
// 		being the center char.

// 		"moom" is even, and every letter has an even amount of chars.

// 		Thus is contraint of a palindrome is that a given word should at most have a single group of chars
// 		summing up to an odd amount.

// 		We can implement a HashMap and keep track of the chars. If more than one char has an odd total,
// 		return false.

const palindromePermutation = (string) => {
  const map = new Map()
  let odds = 0

  for (char of string) {
    if (map.get(char) === 1) {
      map.set(char, 0)
      odds--
    } else {
      map.set(char, 1)
      odds++
    }
  }

  return odds <= 1
}

// Test
console.log(palindromePermutation("tacocat")) // true
console.log(palindromePermutation("tacoocat")) // true
console.log(palindromePermutation("tacoxcat")) // false

// Notes after implementing:
