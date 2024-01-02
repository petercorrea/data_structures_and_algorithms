// Problem Statement:
// Given a binary tree, design an algorithm which creates a linked list of
// all the nodes at each depth(e.g., if you have a tree with depth D, you'll have D linked lists).

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
import Node from "../../data_structures/node.js"

export const nLinkedLists = (tree) => {
  const queue = [tree.root]
  const head = new Node()
  head.tail = new Node(null, null, null)
  let listPointer = head.tail
  let treePointer
  let level = 1
  let count = 0

  while (queue.length > 0) {
    treePointer = queue.shift()
    count++

    if (treePointer.left) {
      queue.push(treePointer.left)
    }

    if (treePointer.right) {
      queue.push(treePointer.right)
    }

    if (level === count) {
      level *= 2
      count = 0
      listPointer.value = treePointer.value
      const newList = new Node()
      listPointer.next = newList
      listPointer = listPointer.next
      listPointer.tail = new Node(null, null, null)
      listPointer = listPointer.tail
    } else {
      listPointer.value = treePointer.value
      listPointer.next = new Node(null, null, null)
      listPointer = listPointer.next
    }
  }

  return head
}

// Test

// Notes after implementing:
//
