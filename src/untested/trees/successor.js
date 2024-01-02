// Problem Statement:
// Write an algorithm to find the "next" node (i.e., in-order successor)
// of a given node in a binary search tree.You may assume that each node has a link to its parent.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
/**
 * For node N:
 *   1. Where N.right DOES exists:
 *     a. If it has no left child then N.right is the successor.
 *     b. If it has a left child, then the left most child is the successor.
 *
 *   2. Where N.right child DOES NOT exists:
 *     a. If N is a left child then the successor is N.parent.
 *     b. Otherwise follow parent pointers until we find a node that is a left
 *     child of its parent, then the parent is the successor. */

export const successor = (node) => {
  if (node.left) {
    while (node.left) {
      node = node.left
    }
    return node
  }
  if (!node.left && node.right) {
    return node.right
  }
  if (node === node.parent.left) {
    return node.parent
  }
  if (node === node.parent.right) {
    while (node !== node.parent.left) {
      node = node.parent
      if (node.parent === null) {
        return "This is the last node"
      }
    }
    return node.parent
  }

  return false
}
// Test

// Notes after implementing:
//
