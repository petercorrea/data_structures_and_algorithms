// Problem Statement:
// 		There are three types of edits that can be performed on strings:
// 		-insert a character,
// 		-remove a character, or
// 		-replace a character.
// 		Given two strings, write a function to check if they are one edit(or zero edits) away.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:

// Proposed Solution:
//	If the length of the two strings differ by more than one, return false.
// 	If there are the same length, we only need to check for replacement.
// 	Otherwise we check for insert and remove. These are similar in logic.

const replacement = (s1, s2) => {
  let edits = 0
  for (i in s1) {
    if (s1[i] !== s2[i]) {
      edits++

      if (edits > 1) return false
    }
  }

  return edits <= 1
}

const insertOrRemoved = (s1, s2) => {
  let i = 0
  let j = 0
  let edits = 0

  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      j++
      edits++
      if (edits > 1) return false
      continue
    }

    i++
    j++
  }

  return edits <= 1
}

const oneEditAway = (s1, s2) => {
  if (Math.abs(s1.length - s2.length) > 1) return false

  if (s1.length === s2.length) {
    return replacement(s1, s2)
  }
  if (s1.length + 1 === s2.length) {
    return insertOrRemoved(s1, s2)
  }
  return insertOrRemoved(s2, s1)
}

// Test
console.log(oneEditAway("pale", "ple")) // true
console.log(oneEditAway("pales", "pale")) // true
console.log(oneEditAway("pale", "bale")) // true
console.log(oneEditAway("pale", "bae")) // false
console.log(oneEditAway("mike", "mikell"))

// Notes after implementing:
