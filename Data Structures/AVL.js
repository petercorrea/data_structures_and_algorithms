import Node from "./Node.js"

export class AVL {
  constructor(value) {
    this.root = new Node(value)
    this.size = 1
  }

  size() {
    return this.size
  }

  insert(value) {
    this.size++

    const newNode = new Node(value)

    const searchTree = (node) => {
      // left
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode
          node.left.parent = node

          let currentNode = node.left
          while (currentNode) {
            this.balance(currentNode)
            currentNode = currentNode.parent
          }
        } else {
          searchTree(node.left)
        }
        // right
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode
          node.right.parent = node

          let currentNode = node.right
          while (currentNode) {
            this.balance(currentNode)
            currentNode = currentNode.parent
          }
        } else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.root)
  }

  balance(node) {
    if (node.balanceFactor() > 1) {
      // Left rotation.
      if (node.left.balanceFactor() > 0) {
        // Left-Left rotation
        this.rotateLeftLeft(node)
      } else if (node.left.balanceFactor() < 0) {
        // Left-Right rotation.
        this.rotateLeftRight(node)
      }
    } else if (node.balanceFactor() < -1) {
      // Right rotation.
      if (node.right.balanceFactor() < 0) {
        // Right-Right rotation
        this.rotateRightRight(node)
      } else if (node.right.balanceFactor() > 0) {
        // Right-Left rotation.
        this.rotateRightLeft(node)
      }
    }
  }

  rotateLeftLeft(rootNode) {
    // Detach left node from root node.
    const leftNode = rootNode.left
    rootNode.setLeft(null)

    // Make left node to be a child of rootNode's parent.
    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode)
    } else if (rootNode === this.root) {
      // If root node is root then make left node to be a new root.
      this.root = leftNode
    }

    // If left node has a right child then detach it and
    // attach it as a left child for rootNode.
    if (leftNode.right) {
      rootNode.setLeft(leftNode.right)
    }

    // Attach rootNode to the right of leftNode.
    leftNode.setRight(rootNode)
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftRight(rootNode) {
    // Detach left node from rootNode since it is going to be replaced.
    const leftNode = rootNode.left
    rootNode.setLeft(null)

    // Detach right node from leftNode.
    const leftRightNode = leftNode.right
    leftNode.setRight(null)

    // Preserve leftRightNode's left subtree.
    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left)
      leftRightNode.setLeft(null)
    }

    // Attach leftRightNode to the rootNode.
    rootNode.setLeft(leftRightNode)

    // Attach leftNode as left node for leftRight node.
    leftRightNode.setLeft(leftNode)

    // Do left-left rotation.
    this.rotateLeftLeft(rootNode)
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft(rootNode) {
    // Detach right node from rootNode since it is going to be replaced.
    const rightNode = rootNode.right
    rootNode.setRight(null)

    // Detach left node from rightNode.
    const rightLeftNode = rightNode.left
    rightNode.setLeft(null)

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right)
      rightLeftNode.setRight(null)
    }

    // Attach rightLeftNode to the rootNode.
    rootNode.setRight(rightLeftNode)

    // Attach rightNode as right node for rightLeft node.
    rightLeftNode.setRight(rightNode)

    // Do right-right rotation.
    this.rotateRightRight(rootNode)
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight(rootNode) {
    // Detach right node from root node.
    const rightNode = rootNode.right
    rootNode.setRight(null)

    // Make right node to be a child of rootNode's parent.
    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode)
    } else if (rootNode === this.root) {
      // If root node is root then make right node to be a new root.
      this.root = rightNode
    }

    // If right node has a left child then detach it and
    // attach it as a right child for rootNode.
    if (rightNode.left) {
      rootNode.setRight(rightNode.left)
    }

    // Attach rootNode to the left of rightNode.
    rightNode.setLeft(rootNode)
  }

  min() {
    let current = this.root

    while (current.left) {
      current = current.left
    }

    return current.value
  }

  max() {
    let current = this.root

    while (current.right) {
      current = current.right
    }

    return current.value
  }

  minHeight(current = this.root) {
    if (current === null) {
      return -1
    }

    // dfs
    const left = this.minHeight(current.left)
    const right = this.minHeight(current.right)

    if (left < right) {
      return left + 1
    }
    return right + 1
  }

  maxHeight(current = this.root) {
    if (current === null) {
      return -1
    }

    // dfs
    const left = this.maxHeight(current.left)
    const right = this.maxHeight(current.right)

    if (left > right) {
      return left + 1
    }
    return right + 1
  }

  isBalanced() {
    return this.maxHeight() - this.minHeight() <= 1
  }

  contains(value) {
    let current = this.root

    while (current) {
      if (value === current.value) {
        return true
      }

      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      }
    }

    return false
  }

  remove(val) {
    const removeNode = (current, value) => {
      if (current === null) {
        return null
      }
      // if node is found
      if (value === current.value) {
        // node has no child
        if (current.left === null && current.right === null) {
          return null
        }

        // node has no left child
        if (current.left === null) {
          return current.right
        }

        // node has no right child
        if (current.right === null) {
          return current.left
        }

        // node has both childs, go to right node, then find leftmost grandchild
        let leftmostGC = current.right
        while (leftmostGC.left !== null) {
          leftmostGC = leftmostGC.left
        }
        current.value = leftmostGC.value
        // fix the right side
        current.right = removeNode(current.right, leftmostGC.value)
        return current
      }
      if (value < current.value) {
        current.left = removeNode(current.left, value)
        return current
      }
      current.right = removeNode(current.right, value)
      return current
    }
    this.root = removeNode(this.root, val)
  }

  // Depth First Search - In Order
  // Left, Root, Right
  dfsInOrder() {
    const result = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)

      result.push(node.value)

      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  // Depth First Search - Pre Order
  // Root, Left, Right
  dfsPreOrder() {
    const result = []

    const traverse = (node) => {
      result.push(node.value)

      if (node.left) traverse(node.left)

      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  // Depth First Search - Post Order
  // Left, Right, Root
  dfsPostOrder() {
    const result = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)

      if (node.right) traverse(node.right)

      result.push(node.value)
    }

    traverse(this.root)

    return result
  }

  // Breadth First Search - uses queue
  bfs() {
    const result = []
    const queue = []

    queue.push(this.root)

    while (queue.length) {
      const current = queue.shift()
      result.push(current.value)

      if (current.left) {
        queue.push(current.left)
      }

      if (current.right) {
        queue.push(current.right)
      }
    }

    return result
  }

  minHeightBfs() {
    let result = 0
    const queue = []

    queue.push(this.root)

    while (queue.length) {
      //
      const loops = queue.length
      result += 1

      for (let i = 0; i < loops; i++) {
        const current = queue.shift()

        if (current.left === null && current.right === null) {
          return result
        }

        if (current.right) {
          queue.push(current.right)
        }

        if (current.left) {
          queue.push(current.left)
        }
      }
    }

    return 0
  }
}
