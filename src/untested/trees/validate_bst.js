// Problem Statement:
// Implement a function to check if a binary tree is a binary search tree.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
// we pass down ranged

export const validate = (root, min = null, max = null) => {
  if (root === null) return true

  if ((min !== null && min >= root.value) || (max !== null && max < root.value))
    return false

  if (
    !validate(root.left, min, root.value) ||
    !validate(root.right, root.value, max)
  ) {
    return false
  }

  return true
}

// Test

// Notes after implementing:
//
