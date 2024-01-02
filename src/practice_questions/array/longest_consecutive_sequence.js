// Given an unsorted array of integers nums,
// return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Solution: hash each value with true, then iterate through array again and
// find the beginning of a chain (a value with no proceeding value), then make the chain

// O(n)
export const LCS = (arr) => {
  const hash = {}
  let maxLength = 0

  for (const i in arr) {
    hash[arr[i]] = i
  }

  for (const i in arr) {
    let num = arr[i]
    let currentLength = 0
    // if this number no proceeding number to ensure this is the beginning of a chain
    if (!hash[num - 1]) {
      while (hash[num]) {
        currentLength++
        num++
      }
    }
    maxLength = Math.max(maxLength, currentLength)
  }

  return maxLength
}
