// Problem Statement:
// Determine if a given array is a subsequence of another.

// Sample Input and Output
// validSubsequence([1, 2, 3, 4, 5, 7], [1, 3, 7]) -> true
// validSubsequence([1, 2, 3, 4, 5, 7], [1, 7, 3]) -> false

export const validSubsequence = (array, sequence) => {
  // O(n) time | O(1) space
  let sequenceIdx = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequenceIdx]) {
      sequenceIdx++
    }
    if (sequenceIdx === sequence.length) return true
  }
  return false
}
