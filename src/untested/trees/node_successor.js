// Given a tree and a node, find the successor of the given node in an InOrder traversal.
// In this implementation, assume you have access to the parent node.

export const findSuccessor = (tree, currentNode) => {
  if (currentNode.right) {
    currentNode = currentNode.right
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode
  }

  while (currentNode.parent && currentNode.parent.right === currentNode) {
    currentNode = currentNode.parent
  }

  return currentNode.parent
}
