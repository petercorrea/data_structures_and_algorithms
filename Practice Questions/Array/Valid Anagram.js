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

// Edge cases:
// If there is a letter in s2 not in s1, this hashmap will immediately find this.
// If there is less of a particular letter in s2 than s1, that would mean there is more
// of another letter which is either already represented in the hashmap and will decrement below 0,
// or it's an entirely new letter, which leads us back to the first edge case.

// O(n)
export const validAnagram = (s, t) => {
  if (s.length !== t.length) return false

  const hash = {}

  for (const idx in s) {
    if (hash[s[idx]]) {
      hash[s[idx]] += 1
    } else {
      hash[s[idx]] = 1
    }
  }

  for (const idx in t) {
    if (!hash[t[idx]]) return false
    if (hash[t[idx]]) hash[t[idx]] -= 1
    if (hash[t[idx]] < 0) return false
  }

  return true
}
