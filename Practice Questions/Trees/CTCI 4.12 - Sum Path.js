// Problem Statement:
// You are given a binary tree in which each node contains an integer value
// (which might be positive or negative). Design an algorithm to count the
// number of paths that sum to a given value.The path does not need to start or
// end at the root or a leaf, but it must go downwards(traveling only from parent nodes to child nodes).

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

export const findPathWithSum = (tree, value) => {
  if (!tree || !tree.root) {
    throw new Error("tree must be valid and non-empty")
  }

  return findPathWithSumRecurse([], tree.root, value)
}

const findPathWithSumRecurse = (path, node, value) => {
  let count = 0
  if (node) {
    path.push(node.val)
    let sum = 0
    for (let i = path.length - 1; i >= 0; --i) {
      sum += path[i]
      if (sum === value) {
        ++count
      }
    }
    count +=
      findPathWithSumRecurse(path, node.left, value) +
      findPathWithSumRecurse(path, node.right, value)
    path.pop()
  }
  return count
}

// Test

// Notes after implementing:
//
