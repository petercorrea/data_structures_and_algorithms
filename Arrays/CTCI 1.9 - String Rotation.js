// Problem Statement:
//		Assume you have a method isSubstring which checks if one word is a substring of another.
// 		Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to
// 		isSubstring.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//	("waterbottle", "erbottlewat") -> true
//	("waterbottle", "watbottleer") -> false

// Proposed Solution:
//
const isSubstring = () => {
  // do not implement
}

const rotation = (s1, s2) => {
  if (s1.length !== s2.length || s1.length === 0) return false

  const s1s1 = s1 + s1
  const result = isSubstring(s1s1, s2)
  return result
}

// Test
console.log(rotation("waterbottle", " erbottlewat")) // true

// Notes after implementing:
//
