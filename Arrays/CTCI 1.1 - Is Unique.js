// Problem Statement:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Clarifying Questions:
// 	- Is the string ASCII or Unicode? This will influence the amount of space used. ASCII has 128/256 unique chars. Unicode has 2^20 chars.
// 	- Is the algo case sensitive?

// Assume:
// 	- ASCII, and capitalization does matter.

// Sample Input and Output:
// ("Peter") -> false
// ("bBach") -> true

// Proposed Solution:
// 		We can maintain a HashMap with the key, value pairs representing the char and its frequency count.
// 		Once we iterate through the string, we can iterate through the HashMap. If the map contains any frequency
// 		greater than 1, we can return false. If we insert into the map and a valuer already exist, we can break early.
// 		The Best Conceivable Runtime can't be more than O(n). More specifically the time complexity would be
// 		O(min(c, n)) where c is the char set and n is the length of the string. If we assume a fixed char set,
// 		this would make the space complexity O(1).

// 		If we can't use another data structure, we would have to loop the string against itself,
// 		resulting in a TC of O(n^2). If we are allowed to sort it, we can sort it in O(n log n),
// 		and then linearly compare neighboring chars. We'll move forward without this space limitation.

const isUnique = (string) => {
  // assuming ASCII char set
  if (string.length > 128) {
    return false
  }

  const map = new Map()

  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i])) {
      return false
    }
    map.set(string[i], true)
  }

  return true
}

// Test
console.log(isUnique("Peter")) // false
console.log(isUnique("bBach")) // true
console.log(isUnique("123")) // true
console.log(isUnique("123!@@")) // false

// Notes after implementing:
