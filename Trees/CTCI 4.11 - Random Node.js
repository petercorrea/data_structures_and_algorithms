// Problem Statement:
// You are implementing a binary search tree class from scratch, which, in addition to insert, find, and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

class Node {
  constructor(value, left, right, parent) {
    this.value = value
    this.size = 1
    this.left = left
    this.right = right
    this.parent = parent
  }
}

class BST {
  constructor(root) {
    this.root = null
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value)
      return
    }

    let node = this.root

    while (node) {
      node.size++

      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value, null, null, node)
          return
        }
        node = node.left
      } else {
        if (!node.right) {
          node.right = new Node(value, null, null, node)
          return
        }
        node = node.right
      }
    }
  }

  remove() {}

  find() {}

  randomNode() {
    if (!this.root) {
      return undefined
    }

    let randomIdx = Math.ceil(Math.random() * this.root.size)
    console.log(randomIdx)
    let node = this.root

    while (randomIdx > 0) {
      if (node.left) {
        if (randomIdx === node.left.size + 1) {
          return node
        }
        if (randomIdx <= node.left.size) {
          node = node.left
        } else if (node.right) {
          randomIdx -= node.left.size + 1
          node = node.right
        }
      } else {
        if (randomIdx <= 1) {
          return node
        }
        if (node.right) {
          --randomIdx
          node = node.right
        }
      }
    }

    throw new Error(
      "Should never reach this code, this is just an assertion that we dont"
    )
  }
}

// Test
const someBST = new BST()
someBST.insert(4)
someBST.insert(3)
someBST.insert(7)
someBST.insert(1)
someBST.insert(2)
someBST.insert(5)
someBST.insert(6)

// console.log(someBST); // result
console.log(someBST.randomNode())

// Notes after implementing:
//
