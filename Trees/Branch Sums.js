// Given a BST, find the branch sum for each leaf node.
// A branch sum is the sum of all ancestor nodes + current node

// TC: n
// SP: n
function branchSums(root) {
  const dfs = (node, prevSum = 0, result = []) => {
    const currentSum = node.value + prevSum

    if (!node.left && !node.right) {
      result.push(currentSum)
    }

    if (node.left) {
      dfs(node.left, currentSum, result)
    }

    if (node.right) {
      dfs(node.right, currentSum, result)
    }

    return result
  }

  return dfs(root)
}

module.exports = {
  branchSums,
}
