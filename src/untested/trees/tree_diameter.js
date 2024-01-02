// Given a tree, determine the largest diameter.
// The diameter is defined as the longest path between any two paths.
// The path doesn't have to go through the root.

export const binaryTreeDiameter = (tree) => {
  const recurse = (node) => {
    if (!node) {
      return {
        maxLength: 0,
        height: 0
      }
    }

    const left = recurse(node.left)
    const right = recurse(node.right)

    return {
      height: Math.max(left.height, right.height) + 1,
      maxLength: Math.max(
        left.maxLength,
        right.maxLength,
        left.height + right.height
      )
    }
  }

  const result = recurse(tree)
  return result.maxLength
}
