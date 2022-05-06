// Problem Statement:
// Write a function that takes in a non-empty array of intergers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the originals integers also sorted in ascending order.

// Clarifying Questions and Assumptions:
//

// Sample Input and Output:
// [1, 2, 3, 5, 6, 8, 9] -> [1, 4, 9, 25, 36, 64, 81]

// Proposed Solution:
export default (arr) => {
  // (O)n time | (O)n space
  if (arr.length === 0) {
    return []
  }

  const squares = []
  let leftPointer = 0
  let rightPointer = arr.length - 1

  while (leftPointer < rightPointer) {
    const leftSquared = arr[leftPointer] * arr[leftPointer]
    const rightSquared = arr[rightPointer] * arr[rightPointer]

    if (leftSquared < rightSquared) {
      squares.push(rightSquared)
      rightPointer--
    } else {
      squares.push(leftSquared)
      leftPointer++
    }
  }
  squares.push(arr[rightPointer] * arr[rightPointer])

  const squaresSorted = []
  for (let i = squares.length - 1; i >= 0; i--) {
    squaresSorted.push(squares[i])
  }
  return squaresSorted
}
