// Determine if a given array is a subsequence of another.

// Loop
// Time: n
// Space: 1
const validSubsequence = (array, sequence) => {
  let sequenceIdx = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequenceIdx]) {
      sequenceIdx++
    }

    if (sequenceIdx === sequence.length) return true
  }

  return false
}

console.log(validSubsequence([1, 2, 3, 4, 5, 7], [1, 3, 7])) // true
console.log(validSubsequence([1, 2, 3, 4, 5, 7], [1, 7, 3])) // false
