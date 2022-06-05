// Problem Statement:
// 		Write code to remove duplicates from an unsorted linked list.
// 		How would you solve this problem if a temporary buffer is not allowed?

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

import Node from "../../Data Structures/Node"

const node8 = new Node(8, null, null)
const node7 = new Node(3, null, node8) // dupe
const node6 = new Node(4, null, node7) // dupe
const node5 = new Node(52, null, node6)
const node4 = new Node(4, null, node5)
const node3 = new Node(3, null, node4)
const node2 = new Node(12, null, node3)
// eslint-disable-next-line no-unused-vars
const node1 = new Node(10, null, node2)

export const removeDups = (node) => {
  const map = new Map()
  const firstNode = node
  let prev = null

  while (node !== null) {
    if (map.has(node.value)) {
      prev.next = node.next
    } else {
      map.set(node.value, node)
    }

    prev = node
    node = node.next
  }

  return firstNode
}

// Test

// Notes after implementing:
//
