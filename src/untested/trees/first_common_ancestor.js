// Problem Statement:
// Design an algorithm and write code to find the first common ancestor of
// two nodes in a binary tree.Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
// Without Links to Parent

class ResultNode {
  constructor(isAncestor, node) {
    this.isAncestor = isAncestor
    this.node = node
  }
}

export const findCommonAncestor = (root, node1, node2) => {
  const result = findCommonAncestorHelper(root, node1, node2)

  if (result.isAncestor) {
    return result.node
  }

  // return null;
  return result
}

const findCommonAncestorHelper = (root, p, q) => {
  // if we the last child node for a given path
  if (root === null) return new ResultNode(false, null)

  // if the two node are one of the same
  if (root.value === p && root.value === q) {
    return new ResultNode(true, root)
  }

  const rx = findCommonAncestorHelper(root.left, p, q)
  if (rx.isAncestor) {
    return rx
  }

  const ry = findCommonAncestorHelper(root.right, p, q)
  if (ry.isAncestor) {
    return ry
  }

  if (rx.node !== null && ry.node !== null) {
    return new ResultNode(true, root)
  }
  if (root.value === p || root.value === q) {
    const isAncestor = rx.node !== null || ry.node !== null
    return new ResultNode(isAncestor, root)
  }
  return new ResultNode(false, rx.node !== null ? rx.node : ry.node)
}

// Test

// Notes after implementing:
//
