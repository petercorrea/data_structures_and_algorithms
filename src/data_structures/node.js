export class Node {
  constructor(value, left, right, prev, next) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }

  setLeft(node) {
    // Reset parent for left node since it is going to be detached.
    if (this.left) {
      this.left.parent = null
    }

    // Attach new node to the left.
    this.left = node

    // Make current node to be a parent for new left one.
    if (this.left) {
      this.left.parent = this
    }

    return this
  }

  setRight(node) {
    // Reset parent for right node since it is going to be detached.
    if (this.right) {
      this.right.parent = null
    }

    // Attach new node to the right.
    this.right = node

    // Make current node to be a parent for new right one.
    if (node) {
      this.right.parent = this
    }

    return this
  }

  leftHeight() {
    if (!this.left) {
      return 0
    }

    let leftHeight = this.left.height()
    leftHeight += 1

    return leftHeight
  }

  rightHeight() {
    if (!this.right) {
      return 0
    }

    let rightHeight = this.right.height()
    rightHeight += 1

    return rightHeight
  }

  height() {
    return Math.max(this.leftHeight(), this.rightHeight())
  }

  balanceFactor() {
    const leftHeight = this.leftHeight()
    const rightHeight = this.rightHeight()
    const bf = leftHeight - rightHeight

    return bf
  }
}
