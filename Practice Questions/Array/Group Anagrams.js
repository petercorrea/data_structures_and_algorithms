// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the
// letters of a different word or phrase, typically using all
// the original letters exactly once.

// Solution: use sorted frequency count as key and strings as values
const createKey = (str) => {
  const key = new Array(200).fill(0)

  for (const idx in str) {
    key[str[idx].charCodeAt(0)] += 1
  }

  return key.join("-")
}

export const groupAnagrams = (arr) => {
  const hash = {}

  for (const idx in arr) {
    const key = createKey(arr[idx])

    if (hash[key]) {
      hash[key].push(arr[idx])
    } else {
      hash[key] = [arr[idx]]
    }
  }

  return Object.values(hash)
}
