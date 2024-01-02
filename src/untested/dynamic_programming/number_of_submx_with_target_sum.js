// Given a targetSum and an array of numbers,
// determine if any combination of numbers can be arrange
// to reach the targetSum. Return the smallest amount of numbers, else return null.

// Leetcode 1074
export const numSubmatrixSumTarget = (matrix, target) => {
  // Create empty matrix for prefix sums
  const prefixSums = new Array(matrix.length + 1)
    .fill()
    .map(() => new Array(matrix[0].length + 1).fill(0))

  // calculate the prefix sums
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      prefixSums[i][j] = matrix[i - 1][j - 1]
        + prefixSums[i - 1][j]
        + prefixSums[i][j - 1]
        - prefixSums[i - 1][j - 1]
    }
  }

  // this will handle the edge case where the first submx[k] might not get counted
  let count = 0

  // traverse prefix mx
  for (let r1 = 1; r1 <= matrix.length; r1++) {
    for (let r2 = r1; r2 <= matrix.length; r2++) {
      const counts = {}
      counts[0] = 1

      for (let c = 1; c <= matrix[0].length; c++) {
        // we scan the mx, and determine sums of smaller submx
        const sum = prefixSums[r2][c] - prefixSums[r1 - 1][c]

        // if we can find submx[sum - k], that would mean
        // a submx[k] must exist. Thus we increment the count by
        // the number of submx[sum - k] we have seen so far,
        // because that would mean the same quantity of submx[k] also exists.
        // |--(sum-k)--||--k--|
        // |--------sum-------|
        count += counts[sum - target] || 0

        // increment count of the submx w/ the current unique sum
        counts[sum] = (counts[sum] || 0) + 1
      }
    }
  }

  return count
}

// Sample Input
// const input = [
//   [0, 1, 0],
//   [1, 1, 1],
//   [0, 1, 0]
// ]
