// Given a tree, invert each pair of children nodes.

// TC: n
// SC: n
const invert = (tree) => {
  const invertRecurse = (tree) => {
    if (!tree.left && !tree.right) {
      return
    }

    const leftSubtree = tree.left
    tree.left = tree.right
    tree.right = leftSubtree

    if (tree.left) invertRecurse(tree.left)
    if (tree.right) invertRecurse(tree.right)
  }

  return invertRecurse(tree)
}

module.exports = {
  invert
}
