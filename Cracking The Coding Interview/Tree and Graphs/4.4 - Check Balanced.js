// Problem Statement:
// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree such that
// the heights of the two subtrees of any node never differ by more than one.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
// check heights
const { sampleBalancedTree, sampleUnbalancedTree, } = require("./Sample Tree")

const checkBalanced = (root) => {
  if (!root.left && !root.right) {
    return 1
  }

  let leftHeight = 0
  let rightHeight = 0

  if (root.left) {
    leftHeight = checkBalanced(root.left)
  }

  if (root.right) {
    rightHeight = checkBalanced(root.right)
  }

  if (Math.abs(leftHeight - rightHeight) === 1) {
    return Math.max(leftHeight, rightHeight) + 1
  }
  return false
}

// Test
console.log(checkBalanced(sampleBalancedTree))
console.log(checkBalanced(sampleUnbalancedTree))

// Notes after implementing:
//

// From AlgoExpert
function heightBalancedBinaryTree(tree) {
  function maxHeight(tree) {
    if (!tree.right && !tree.left) return 1
    const leftHeight = tree.left ? maxHeight(tree.left) : 0
    const rightHeight = tree.right ? maxHeight(tree.right) : 0
    return Math.max(leftHeight, rightHeight) + 1
  }

  function isBalanced(tree) {
    if (!tree.right && !tree.left) return true
    const leftHeight = tree.left ? maxHeight(tree.left) : 0
    const rightHeight = tree.right ? maxHeight(tree.right) : 0
    const balanceResult = !(Math.abs(leftHeight - rightHeight) > 1)
    return balanceResult
  }

  function recurse(tree) {
    if (!tree) {
      return true
    }

    const leftNode = recurse(tree.left)
    const rightNode = recurse(tree.right)

    if (!leftNode || !rightNode) {
      return false
    }

    const isLeftBalanced = tree.left !== null ? isBalanced(tree.left) : true
    const isRightBalanced = tree.right !== null ? isBalanced(tree.right) : true

    if (isLeftBalanced && isRightBalanced) {
      return isBalanced(tree)
    }
    return isLeftBalanced && isRightBalanced
  }

  return recurse(tree)
}

console.log(heightBalancedBinaryTree(sampleBalancedTree))
console.log(heightBalancedBinaryTree(sampleUnbalancedTree))
