// Problem Statement:
// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become
// smaller than the original string, your method should return the original string. You can assume the
// string has only uppercase and lowercase letters(a - z).

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:

// Proposed Solution:
// TC: n + k^2 where n is the length of the string and k is the numnber of chat seqs.
// The k^2 comes from concatinating the string on each iteration. (1 + 2 ... + n = n(n+1)/n = O(n^2)).
//  To reduce this, we can instead push to an array, and join the elements at the end.

const compress = (string) => {
  let count = 0
  let compressed = []

  for (let i = 0; i < string.length; i++) {
    count++
    if (string[i + 1] !== string[i]) {
      compressed.push(string[i])
      compressed.push(count)
      count = 0
    }

    if (compressed.length > string.length) return string
  }

  compressed = compressed.join("")
  return compressed
}

// Test
console.log(compress("aaabcceeeddd")) // a3b1c2e3d3
console.log(compress("abcd")) // abcd

// Notes after implementing:
// DO not use "for in" loops to iterate over arrays.
