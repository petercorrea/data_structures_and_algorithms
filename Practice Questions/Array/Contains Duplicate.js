// Given an array, return true if the array contains any duplicate, otherwise false.

// O(n)
export const containsDuplicate = (arr) => {
  const values = [...arr]
  const hash = {}

  for (const idx in values) {
    if (hash[values[idx]] === true) return true

    hash[arr[idx]] = true
  }

  return false
}
