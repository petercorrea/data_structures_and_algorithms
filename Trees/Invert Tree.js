// Given a tree, invert each pair of children nodes.

// TC: n
// SC: n
function invert(tree) {
  function invertRecurse(tree) {
    if (!tree.left && !tree.right) {
      return
    }

    const leftSubtree = tree.left
    tree.left = tree.right
    tree.right = leftSubtree

    tree.left ? invertRecurse(tree.left) : null
    tree.right ? invertRecurse(tree.right) : null
  }

  return invertRecurse(tree)
}

module.exports = {
  invert,
}
