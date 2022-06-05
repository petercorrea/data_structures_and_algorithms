// Problem Statement:
// Given two strings, write a method to decide if one is a permutation of the other.

// Clarifications and Assumptions:
// 	- Is the algo case sensitive?
//  - Is the algo white space sensitive?

// Assume:
// 	- case and white space sensitive

// Sample Input and Output:
// ("dog   ", "God") -> false
// ("Peter", "ePtre") -> true

// Proposed Solution:
//		A permutation would imply an identical frequency table of chars. This also implies
// 		that two differing lengths cannot be a permutation. There are two methods at our disposal.
// 		If we're allowed to, we can sort the two strings and then compare them to one another.
// 		That would give us O(n log n) to sort and O(n) to compare.

// 		Alternatively we can also create a HashMap of frequency counts.
// 		This will give us O(n) to store the counts and O(1) lookup.
// 		When we traverse the second string, we'll decrement the counts in the map. If any value
// 		< 0, or simply not in the HashMap we'll return false. We'll implement this solution.

export const checkPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false
  }

  const map = new Map()

  for (let i = 0; i < string1.length; i++) {
    if (map.has(string1[i])) {
      map.set(string1[i], map.get(string1[i]) + 1)
    } else {
      map.set(string1[i], 1)
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (map.has(string2[i])) {
      map.set(string2[i], map.get(string2[i]) - 1)
      if (map.get(string2[i]) < 0) {
        return false
      }
    } else {
      return false
    }
  }

  return true
}

// Test

// Notes after implementing:
